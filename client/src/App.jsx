import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Loader from "./components/common/Loader";
import ProtectedRoute from "./routes/ProtectedRoutes";
import AdminRoute from "./routes/AdminRoute";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

// User Pages
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Search = lazy(() => import("./pages/Search"));
const BusList = lazy(() => import("./pages/BusList"));
const BusSearchResult = lazy(() => import("./pages/BusSearchResult"));
const BusDetails = lazy(() => import("./pages/BusDetails"));
const Booking = lazy(() => import("./pages/Booking"));
const PassengerDetails = lazy(() => import("./pages/PassengerDetails"));
const Payment = lazy(() => import("./pages/Payment"));
const BookingSuccess = lazy(() => import("./pages/BookingSuccess"));
const MyBookings = lazy(() => import("./pages/MyBookings"));
const Ticket = lazy(() => import("./pages/Ticket"));
const Profile = lazy(() => import("./pages/Profile"));

// Admin Pages
const AdminDashboard = lazy(() => import("./pages/Admin/AdminDashboard"));
const ManageBuses = lazy(() => import("./pages/Admin/ManageBuses"));
const AddBus = lazy(() => import("./pages/Admin/AddBus"));
const EditBus = lazy(() => import("./pages/Admin/EditBus"));
const ManageBookings = lazy(() => import("./pages/Admin/ManageBookings"));
const ManageUsers = lazy(() => import("./pages/Admin/ManageUsers"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>

        {/* Public / User Routes — share Navbar + Footer via MainLayout */}
        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/search" element={<Search />} />

          <Route path="/buses" element={<BusList />} />

          <Route path="/buses/:id" element={<BusDetails />} />

          <Route path="/bus-search" element={<BusSearchResult />} />

          <Route
            path="/my-bookings"
            element={
              <ProtectedRoute>
                <MyBookings />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/ticket/:id"
            element={
              <ProtectedRoute>
                <Ticket />
              </ProtectedRoute>
            }
          />

          <Route
            path="/booking/:id"
            element={
              <ProtectedRoute>
                <Booking />
              </ProtectedRoute>
            }
          />

          <Route
            path="/passenger-details"
            element={
              <ProtectedRoute>
                <PassengerDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path="/payment"
            element={
              <ProtectedRoute>
                <Payment />
              </ProtectedRoute>
            }
          />

          <Route
            path="/booking-success"
            element={
              <ProtectedRoute>
                <BookingSuccess />
              </ProtectedRoute>
            }
          />

          {/* 404 */}
          <Route
            path="*"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-5xl font-bold">
                  404 | Page Not Found
                </h1>
              </div>
            }
          />

        </Route>

        {/* Admin Routes — share Sidebar + Topbar via AdminLayout */}
        <Route
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >

          <Route path="/admin" element={<AdminDashboard />} />

          <Route path="/admin/manage-buses" element={<ManageBuses />} />

          <Route path="/admin/add-bus" element={<AddBus />} />

          <Route path="/admin/edit-bus/:id" element={<EditBus />} />

          <Route path="/admin/bookings" element={<ManageBookings />} />

          <Route path="/admin/manage-users" element={<ManageUsers />} />

        </Route>

      </Routes>
    </Suspense>
  );
}

export default App;
