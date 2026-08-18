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
    <header className="sticky top-0 z-50 glass-nav">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-ember to-dusk text-white">
            <FaBusAlt size={20} />
          </span>

          <div>
            <h1 className="font-display text-2xl font-bold text-ink">
              BusGo
            </h1>

            <p className="text-xs text-ink/50 -mt-0.5">
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
                  ? "text-ember font-semibold"
                  : "text-ink/70 hover:text-ember transition-colors"
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
                className="flex items-center gap-2 text-ink/80 hover:text-ember transition-colors"
              >
                <FaUserCircle size={32} className="text-dusk" />
                <span className="font-medium">{user?.name?.split(" ")[0]}</span>
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-3 w-52 rounded-2xl glass-light overflow-hidden py-2">

                  <Link
                    to="/profile"
                    onClick={() => setProfileOpen(false)}
                    className="block px-4 py-2.5 hover:bg-white/70"
                  >
                    My Profile
                  </Link>

                  <Link
                    to="/my-bookings"
                    onClick={() => setProfileOpen(false)}
                    className="block px-4 py-2.5 hover:bg-white/70"
                  >
                    My Bookings
                  </Link>

                  {user?.role === "admin" && (
                    <Link
                      to="/admin"
                      onClick={() => setProfileOpen(false)}
                      className="block px-4 py-2.5 hover:bg-white/70"
                    >
                      Admin Panel
                    </Link>
                  )}

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2.5 text-rose-600 hover:bg-rose-50/70"
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
                className="px-5 py-2.5 rounded-xl border border-ink/15 text-ink/80 hover:border-ember hover:text-ember transition-colors"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="ember-glow px-5 py-2.5 rounded-xl bg-gradient-to-r from-ember to-ember-light text-white font-medium"
              >
                Register
              </Link>
            </>
          )}

        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-ink"
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
        <div className="lg:hidden glass-light border-t border-ink/10">

          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 border-b border-ink/5 hover:bg-white/50"
            >
              {item.name}
            </NavLink>
          ))}

          {isAuthenticated ? (
            <div className="flex flex-col gap-3 p-5">

              <Link
                to="/profile"
                onClick={() => setMenuOpen(false)}
                className="text-center border border-ink/15 py-2 rounded-xl"
              >
                My Profile
              </Link>

              {user?.role === "admin" && (
                <Link
                  to="/admin"
                  onClick={() => setMenuOpen(false)}
                  className="text-center border border-ink/15 py-2 rounded-xl"
                >
                  Admin Panel
                </Link>
              )}

              <button
                onClick={handleLogout}
                className="text-center bg-rose-600 text-white py-2 rounded-xl"
              >
                Logout
              </button>

            </div>
          ) : (
            <div className="flex flex-col gap-3 p-5">

              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="text-center border border-ember py-2 rounded-xl text-ember"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="text-center bg-gradient-to-r from-ember to-ember-light text-white py-2 rounded-xl"
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
