import { FaUserCircle, FaEnvelope, FaPhone, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useAuth } from "../context/AuthContext";

function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully.");
    navigate("/");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen py-16 px-4">

      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        <div className="flex flex-col items-center text-center border-b pb-8">

          <FaUserCircle className="text-ember" size={90} />

          <h1 className="text-3xl font-bold mt-4">
            {user.name}
          </h1>

          <span className="mt-2 inline-block bg-ember/15 text-ember px-3 py-1 rounded-full text-xs font-semibold capitalize">
            {user.role}
          </span>

        </div>

        <div className="space-y-4 mt-8">

          <div className="flex items-center gap-3 text-gray-700">
            <FaEnvelope className="text-ember" />
            <span>{user.email}</span>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <FaPhone className="text-ember" />
            <span>{user.phone}</span>
          </div>

        </div>

        <button
          onClick={handleLogout}
          className="mt-10 w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-xl transition-colors"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </div>
  );
}

export default Profile;
