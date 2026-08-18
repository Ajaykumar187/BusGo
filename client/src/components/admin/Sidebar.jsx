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
    <aside className="w-64 hero-gradient h-full flex flex-col shrink-0 relative overflow-hidden">

      <div className="flex items-center gap-2 px-6 h-20 border-b border-white/10 relative z-10">
        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 text-ember-light">
          <FaBusAlt size={18} />
        </span>
        <span className="font-display text-xl font-bold text-white">BusGo Admin</span>
      </div>

      <nav className="flex-1 py-6 space-y-1 relative z-10">
        {links.map(({ name, path, icon: Icon, end }) => (
          <NavLink
            key={path}
            to={path}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-3 font-medium transition-colors ${
                isActive
                  ? "bg-white/10 text-ember-light border-r-4 border-ember"
                  : "text-white/60 hover:bg-white/5 hover:text-white"
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
