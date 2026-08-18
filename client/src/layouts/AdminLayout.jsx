import { Outlet } from "react-router-dom";

import Sidebar from "../components/admin/Sidebar";
import Topbar from "../components/admin/Topbar";

// Shared shell for the admin panel: persistent sidebar navigation +
// topbar, with the active admin page rendered via <Outlet />.
function AdminLayout() {
  return (
    <div className="flex h-screen page-wash">

      <Sidebar />

      <div className="flex-1 flex flex-col overflow-y-auto">

        <Topbar />

        <main className="flex-1">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default AdminLayout;
