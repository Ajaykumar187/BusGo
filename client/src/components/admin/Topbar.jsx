import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import toast from "react-hot-toast";

import { useAuth } from "../../context/AuthContext";

function Topbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully.");
    navigate("/login");
  };

  return (
    <header className="h-20 glass-nav flex items-center justify-between px-8">

      <div>
        <h1 className="font-display text-lg font-semibold text-ink">
          Welcome back, {user?.name || "Admin"}
        </h1>
      </div>

      <div className="flex items-center gap-6">

        <Link
          to="/"
          className="text-sm text-ember hover:underline font-medium"
        >
          View Site
        </Link>

        <div className="flex items-center gap-2 text-ink/60">
          <FaUserCircle size={26} className="text-dusk" />
          <span className="text-sm">{user?.email}</span>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-rose-600 hover:text-rose-700 text-sm font-semibold"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </header>
  );
}

export default Topbar;
