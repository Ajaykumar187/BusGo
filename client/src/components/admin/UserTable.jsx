import { useState } from "react";
import toast from "react-hot-toast";

import { deleteUser } from "../../api/adminApi";
import Badge from "../common/Badge";
import Modal from "../common/Modal";

function UserTable({ users, refresh }) {
  const [targetUser, setTargetUser] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    setDeleting(true);

    try {
      await deleteUser(targetUser._id);
      toast.success("User deleted successfully.");
      setTargetUser(null);
      refresh();
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Could not delete user."
      );
    } finally {
      setDeleting(false);
    }
  };

  if (!users || users.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-10 text-center text-gray-500">
        No users found.
      </div>
    );
  }

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-4 font-semibold text-gray-600">Name</th>
              <th className="px-6 py-4 font-semibold text-gray-600">Email</th>
              <th className="px-6 py-4 font-semibold text-gray-600">Phone</th>
              <th className="px-6 py-4 font-semibold text-gray-600">Role</th>
              <th className="px-6 py-4 font-semibold text-gray-600">Joined</th>
              <th className="px-6 py-4 font-semibold text-gray-600">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-b last:border-0 hover:bg-gray-50">
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.phone}</td>
                <td className="px-6 py-4">
                  <Badge color={user.role === "admin" ? "info" : "neutral"}>
                    {user.role}
                  </Badge>
                </td>
                <td className="px-6 py-4">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => setTargetUser(user)}
                    disabled={user.role === "admin"}
                    className="text-red-600 hover:text-red-700 font-semibold disabled:text-gray-300 disabled:cursor-not-allowed"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={!!targetUser}
        onClose={() => setTargetUser(null)}
        title="Delete User"
      >
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete <strong>{targetUser?.name}</strong>? This cannot be undone.
        </p>

        <div className="flex gap-3">
          <button
            onClick={() => setTargetUser(null)}
            className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
            onClick={handleDelete}
            disabled={deleting}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg disabled:opacity-60"
          >
            {deleting ? "Deleting..." : "Yes, Delete"}
          </button>
        </div>
      </Modal>
    </>
  );
}

export default UserTable;
