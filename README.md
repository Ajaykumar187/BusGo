# BusGo — Bus Ticket Booking Platform

Full-stack MERN app: React (Vite + Tailwind) frontend, Node/Express + MongoDB backend, Razorpay payments.

## Setup

### 1. Server
```
cd server
cp .env.example .env      # fill in MONGO_URI, JWT_SECRET, RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET
npm install
npm run seed                # adds sample buses + an admin login (see below)
npm run dev                 # starts on http://localhost:5000
```

`npm run seed` populates the database with 6 sample buses (Delhi↔Jaipur, Mumbai↔Pune, etc.) and one admin account:
- Email: `admin@busgo.com`
- Password: `Admin@123`

Re-running `npm run seed` clears and re-inserts the sample buses (your admin account is left untouched if it already exists).

### 2. Client
```
cd client
cp .env.example .env      # set VITE_API_URL and VITE_RAZORPAY_KEY_ID
npm install
npm run dev                # starts on http://localhost:5173
```

## What was fixed
- Case-sensitive import path bugs (`pages/admin` -> `pages/Admin`, `SeatLayout`, `BookingTable`) that broke the Linux/production build.
- `components/payment/PaymentSummary.jsx` contained backend controller code instead of a UI component — rewritten as a proper React component.
- `components/seat/SeatRow.jsx` had a duplicate broken import and placeholder text instead of real seat rendering — rewritten.
- `DriverCabin.jsx` imported a non-existent icon (`FaSteeringWheel`) — replaced with a valid `react-icons` icon.
- `utils/generateToken.js` had a top-level crash-causing statement — removed.
- `pages/Admin/ManageBuses.jsx` called `useNavigate()` outside a component (React rules-of-hooks violation) and never rendered the bus table — rewritten.
- `pages/Login.jsx`, `pages/Register.jsx`, `api/authApi.js` were empty despite being routed to — implemented.
- Added missing `updateBus` / `deleteBus` controllers and a full `server/routes/adminRoutes.js` (buses + bookings admin endpoints), since the client already called `/admin/...` endpoints that didn't exist.
- Added `getAllBookings` (admin) to the booking controller.
- Wired `notFoundMiddleware` / `errorMiddleware` into `server.js`.
- Protected booking/payment/admin routes in `App.jsx` with the existing `ProtectedRoute` / `AdminRoute` guards (previously unused, so admin pages were publicly accessible).
- Added `.env.example` for both client and server.

Both `npm run build` (client) and a full server boot (with a dummy Mongo URI) were verified to work end-to-end.

## Latest round of fixes
- Home page "Search Bus" button did nothing (only `console.log`) — now navigates to `/bus-search` with the entered from/to/date.
- Search results page had a hard-coded ₹3000 max-price filter that silently hid buses priced above it even though the API returned them — default raised to ₹10,000.
- "Popular Routes" cards linked to the wrong route (`/buses` instead of `/bus-search`), and `/buses` itself rendered a broken duplicate of the bus-details page instead of a bus list — both fixed; `/buses` now shows a proper "All Buses" listing.
- Added `server/seed.js` (`npm run seed`) to populate the database with sample buses and an admin login, since a fresh database has no data to search.

## Professional / production-readiness pass
**Security**
- Removed an unauthenticated `POST /api/buses` endpoint that let anyone create buses without logging in — bus creation now only exists under the admin-protected `/api/admin/buses`.
- Login was returning the user's hashed password in the API response (and it was being stored in the browser's localStorage). `password` is now `select: false` on the schema and explicitly stripped before the response is sent.
- Login/register error messages no longer reveal whether an email exists in the system (both wrong email and wrong password now return the same generic "Invalid email or password").
- Added `helmet` (secure HTTP headers), a global rate limiter, and a stricter rate limiter on `/api/auth/*` (20 requests / 15 min) to slow down brute-force and abuse.
- Added request sanitization middleware to strip `$`/`.` keys from `body`/`params`/`query` (NoSQL-injection hardening) — written from scratch since `express-mongo-sanitize` isn't compatible with Express 5's read-only `req.query`.
- `express.json()` request body size capped at 10kb.
- CORS is now restricted to `CLIENT_URL` instead of `*`.

**Reliability & code quality**
- Added `config/validateEnv.js` — the server now fails fast with a clear message if `MONGO_URI`, `JWT_SECRET`, `RAZORPAY_KEY_ID`, or `RAZORPAY_KEY_SECRET` are missing, instead of crashing later with a confusing stack trace. Because ES module imports are hoisted, this check needed a small `index.js` bootstrap file that runs before `server.js` (and its route/controller imports) load — `index.js` is now the real npm entry point.
- Added `utils/asyncHandler.js` and refactored controllers to use it, removing repetitive `try/catch` boilerplate and making sure async errors are always forwarded to the error handler instead of risking an unhandled rejection.
- Rewrote `middleware/errorMiddleware.js` to translate common Mongoose/JWT errors (`CastError`, `ValidationError`, duplicate-key `11000`, `JsonWebTokenError`, `TokenExpiredError`) into clean, correctly-status-coded JSON responses instead of raw 500s.
- Added `utils/logger.js` for structured, timestamped server logs, plus `morgan` HTTP request logging in development, and an `unhandledRejection` guard so the process doesn't die silently.
- Added `express-validator`-based validation (`validators/authValidators.js`, `validators/busValidators.js`, `validators/bookingValidators.js`) on register, login, bus create/update, and booking creation, returning field-level error messages instead of relying on Mongoose errors surfacing late.
- Added `compression` for gzip'd responses.

**Frontend**
- Added a React `ErrorBoundary` around the whole app so a render error shows a friendly "Something went wrong" screen instead of a blank white page.
- The axios response interceptor now clears the stored user (not just the token) and redirects to `/login` on a 401, instead of leaving the UI in a stale "logged in" state.

Both `npm run build` (client) and a full server boot — including the new `index.js` entry, env validation, rate limiting, sanitizer, and validators — were tested end-to-end against live HTTP requests.

## Payment not working — fix
`pages/Payment.jsx` had **no error feedback at all**: if Razorpay order creation failed (missing/invalid keys in `.env`, not logged in, network issue, etc.) the code only did `console.log(error)` — clicking "Pay" appeared to do nothing. Fixed:
- Toast errors now show for order-creation failures, payment verification failures, and Razorpay's own `payment.failed` event.
- Guards against landing on `/payment` or `/passenger-details` directly with no booking state (previously crashed with "Cannot destructure property of null").
- Prefill now uses the logged-in user's real name/email/phone instead of hard-coded placeholder data.
- Added a friendly message if `VITE_RAZORPAY_KEY_ID` isn't set or the Razorpay checkout script hasn't loaded.

**If payments still don't work, check:**
1. `server/.env` has real `RAZORPAY_KEY_ID` / `RAZORPAY_KEY_SECRET` from https://dashboard.razorpay.com/app/keys (test mode keys work fine for development).
2. `client/.env` has the matching `VITE_RAZORPAY_KEY_ID` (same key id as the server, never the secret).
3. You're logged in — `/payment` requires an authenticated `createOrder` call.

## "There's no payment button" — the real cause
The Bus Details page (`components/bus/BusDetailsCard.jsx`) had no "Book Now" button at all — only the bus cards on the search-results list had one. So once you opened a bus's details page, there was no way to get into the seat-selection → passenger-details → payment flow; you were stuck. Added a "Book Now" button (disabled + labeled "Sold Out" when `availableSeats` is 0) that takes you to `/booking/:id` to select seats, same as the search results page already did.

## Filled in every empty file
28 files were scaffolded but left empty. Every one now has real, working code, and the genuinely useful ones are wired into the app (not just filled and forgotten):

**Server**
- `utils/validator.js`, `utils/verifySignature.js`, `utils/verifyPayment.js` — validation/signature helpers. `paymentController.js` now uses `verifySignature.js` instead of duplicating the HMAC check inline.
- `utils/ticketGenerator.js` — compatibility alias for `generateTicket.js` (kept the PDF logic in one place instead of duplicating it).
- New `controllers/userController.js` + `GET /api/admin/users` / `DELETE /api/admin/users/:id` — needed for the new admin "Manage Users" page.

**Client — new layouts (fixes inconsistent Navbar/Footer across pages)**
- `layouts/MainLayout.jsx` — wraps all public/user pages in a shared Navbar + Footer via nested routes. Previously only the Home and Bus Details pages had a Navbar at all; booking, payment, my-bookings, login, etc. had none.
- `layouts/AdminLayout.jsx` + `components/admin/Sidebar.jsx` + `components/admin/Topbar.jsx` — the admin panel now has a persistent sidebar and topbar instead of every admin page floating with no navigation.
- `Navbar.jsx` was rewritten to actually use `AuthContext` — it always showed "Login/Register" even when logged in, and the profile icon did nothing. It now shows a profile dropdown (Profile, My Bookings, Admin Panel if applicable, Logout) when authenticated.

**Client — new pages (implemented and routed)**
- `pages/Profile.jsx` (`/profile`) — view account info, logout.
- `pages/Ticket.jsx` (`/ticket/:id`) — view/download a booking's ticket, using the new `TicketCard`.
- `pages/Search.jsx` (`/search`) — standalone search entry point.
- `pages/Admin/ManageUsers.jsx` (`/admin/manage-users`) — list users, delete non-admins, using the new `UserTable`.

**Client — new reusable components (wired in, not just created)**
- `components/common/Button.jsx`, `Card.jsx`, `Input.jsx`, `Badge.jsx`, `Modal.jsx` — generic UI primitives. `Modal` + `Badge` now replace `window.confirm`/`alert` in `BookingCard.jsx`'s cancel flow.
- `components/bus/OperationFilter.jsx` — operator checkbox filter, wired into `FilterSidebar` on the search results page.
- `components/bus/BusFilter.jsx` + `components/bus/BusList.jsx` — bus-type quick filter and a reusable bus-list renderer, wired into the "All Buses" page (previously had zero filtering).
- `components/bus/BusInfo.jsx` — wired into the seat-selection page so you can see which bus you're booking (that page previously showed only seats, no bus name/route at all).
- `components/booking/SuccessAnimation.jsx` — animated checkmark, wired into the booking-success page (replaced a static ✅ emoji).
- `components/ticket/TicketCard.jsx` — full downloadable ticket view, used by the new Ticket page and linked from "View Ticket" on My Bookings.

**Duplicate/orphaned files** (same name existed elsewhere with real content) were turned into one-line re-export aliases instead of duplicating logic: `components/Loader.jsx`, `components/ProtectedRoute.jsx`, `components/home/FeaturedBuses.jsx`, `components/bus/SearchBar.jsx`, `components/booking/TicketCard.jsx`.

Rebuilt and reinstalled both `client` and `server` from a clean `node_modules` after all these changes — build and server boot both verified working end-to-end.

## Visual redesign — "Dusk Highway" glassmorphism
The whole frontend was restyled around a single design system instead of the generic blue-on-white template look:

- **Palette**: a night-highway gradient (deep indigo `#0a0e27` → violet `#3b1d6e` → warm ember `#ff6a3d`) used on the hero, navbar-adjacent surfaces, footer, and admin sidebar; a cyan `#22d3ee` secondary accent; frosted-glass panels (`backdrop-filter: blur`) for cards, forms, modals, and the search box, sitting on a soft ambient page gradient instead of flat gray.
- **Type**: Space Grotesk for headings, Inter for body text, IBM Plex Mono for route timings, seat numbers, and booking/ticket IDs — set up as design tokens in `index.css` (`@theme`) so every screen pulls from the same source.
- **Signature element**: `components/common/LightStreaks.jsx` — thin animated light streaks sweeping across the dark hero/footer, evoking headlights on a highway at night. Respects `prefers-reduced-motion`.
- Every card-style surface (bus cards, filters, seat map, payment summary, tickets, booking cards, admin tables, modals, auth forms) now uses the `.glass-light` / `.glass-dark` utilities and the ember/dusk/route palette instead of plain white cards and blue-700 buttons.
- Navbar is a translucent, blurred sticky bar (`.glass-nav`) so it reads consistently over any page background.

Rebuilt from a clean `node_modules` again after the redesign — build is clean with no CSS warnings.




