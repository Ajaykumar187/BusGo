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
    <header className="h-20 bg-white shadow-sm flex items-center justify-between px-8">

      <div>
        <h1 className="text-lg font-semibold text-gray-800">
          Welcome back, {user?.name || "Admin"}
        </h1>
      </div>

      <div className="flex items-center gap-6">

        <Link
          to="/"
          className="text-sm text-blue-700 hover:underline"
        >
          View Site
        </Link>

        <div className="flex items-center gap-2 text-gray-600">
          <FaUserCircle size={26} />
          <span className="text-sm">{user?.email}</span>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-red-600 hover:text-red-700 text-sm font-semibold"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </header>
  );
}

export default Topbar;
