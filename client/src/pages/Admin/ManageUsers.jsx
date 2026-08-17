import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getAllUsers } from "../../api/adminApi";
import UserTable from "../../components/admin/UserTable";

function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const data = await getAllUsers();
      setUsers(data.users || []);
    } catch (error) {
      toast.error("Could not load users.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        Manage Users
      </h1>

      {loading ? (
        <div className="text-center mt-10 text-xl font-semibold">
          Loading Users...
        </div>
      ) : (
        <UserTable users={users} refresh={loadUsers} />
      )}

    </div>
  );
}

export default ManageUsers;
