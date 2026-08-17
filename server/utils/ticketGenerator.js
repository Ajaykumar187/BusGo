// Kept as a compatibility alias so any code importing "ticketGenerator"
// (the more conventional name) still works, without duplicating the
// PDF-generation logic that already lives in generateTicket.js.
export { default } from "./generateTicket.js";
