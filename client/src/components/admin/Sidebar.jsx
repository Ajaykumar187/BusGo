import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBus,
  FaTicketAlt,
  FaUsers,
  FaBusAlt,
} from "react-icons/fa";

const links = [
  { name: "Dashboard", path: "/admin", icon: FaTachometerAlt, end: true },
  { name: "Manage Buses", path: "/admin/manage-buses", icon: FaBus },
  { name: "Bookings", path: "/admin/bookings", icon: FaTicketAlt },
  { name: "Users", path: "/admin/manage-users", icon: FaUsers },
];

function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg h-full flex flex-col shrink-0">

      <div className="flex items-center gap-2 px-6 h-20 border-b">
        <FaBusAlt className="text-blue-600" size={28} />
        <span className="text-xl font-bold text-blue-700">BusGo Admin</span>
      </div>

      <nav className="flex-1 py-6 space-y-1">
        {links.map(({ name, path, icon: Icon, end }) => (
          <NavLink
            key={path}
            to={path}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-3 font-medium transition-colors ${
                isActive
                  ? "bg-blue-50 text-blue-700 border-r-4 border-blue-700"
                  : "text-gray-600 hover:bg-gray-50"
              }`
            }
          >
            <Icon size={18} />
            {name}
          </NavLink>
        ))}
      </nav>

    </aside>
  );
}

export default Sidebar;
