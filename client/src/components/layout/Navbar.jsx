import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBusAlt, FaUserCircle } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
import toast from "react-hot-toast";

import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Buses", path: "/buses" },
    { name: "My Bookings", path: "/my-bookings" },
    { name: "Contact", path: "/contact" },
  ];

  const handleLogout = () => {
    logout();
    setProfileOpen(false);
    setMenuOpen(false);
    toast.success("Logged out successfully.");
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <FaBusAlt
            className="text-blue-600"
            size={34}
          />

          <div>
            <h1 className="text-2xl font-bold text-blue-700">
              BusGo
            </h1>

            <p className="text-xs text-gray-500">
              Travel Across India
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex gap-8">

          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-700 font-semibold"
                  : "text-gray-700 hover:text-blue-700 transition"
              }
            >
              {item.name}
            </NavLink>
          ))}

        </nav>

        {/* Right Side */}

        <div className="hidden lg:flex items-center gap-4">

          {isAuthenticated ? (
            <div className="relative">

              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-700"
              >
                <FaUserCircle size={34} />
                <span className="font-medium">{user?.name?.split(" ")[0]}</span>
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border py-2">

                  <Link
                    to="/profile"
                    onClick={() => setProfileOpen(false)}
                    className="block px-4 py-2 hover:bg-gray-50"
                  >
                    My Profile
                  </Link>

                  <Link
                    to="/my-bookings"
                    onClick={() => setProfileOpen(false)}
                    className="block px-4 py-2 hover:bg-gray-50"
                  >
                    My Bookings
                  </Link>

                  {user?.role === "admin" && (
                    <Link
                      to="/admin"
                      onClick={() => setProfileOpen(false)}
                      className="block px-4 py-2 hover:bg-gray-50"
                    >
                      Admin Panel
                    </Link>
                  )}

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                  >
                    Logout
                  </button>

                </div>
              )}

            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="px-5 py-2 rounded-lg border border-blue-600 text-blue-700 hover:bg-blue-50 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-5 py-2 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition"
              >
                Register
              </Link>
            </>
          )}

        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden"
        >
          {menuOpen ? (
            <HiX size={30} />
          ) : (
            <HiMenu size={30} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="lg:hidden bg-white border-t">

          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 border-b hover:bg-gray-100"
            >
              {item.name}
            </NavLink>
          ))}

          {isAuthenticated ? (
            <div className="flex flex-col gap-3 p-5">

              <Link
                to="/profile"
                onClick={() => setMenuOpen(false)}
                className="text-center border border-gray-300 py-2 rounded-lg"
              >
                My Profile
              </Link>

              {user?.role === "admin" && (
                <Link
                  to="/admin"
                  onClick={() => setMenuOpen(false)}
                  className="text-center border border-gray-300 py-2 rounded-lg"
                >
                  Admin Panel
                </Link>
              )}

              <button
                onClick={handleLogout}
                className="text-center bg-red-600 text-white py-2 rounded-lg"
              >
                Logout
              </button>

            </div>
          ) : (
            <div className="flex flex-col gap-3 p-5">

              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="text-center border border-blue-700 py-2 rounded-lg"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="text-center bg-blue-700 text-white py-2 rounded-lg"
              >
                Register
              </Link>

            </div>
          )}

        </div>
      )}

    </header>
  );
}

export default Navbar;
