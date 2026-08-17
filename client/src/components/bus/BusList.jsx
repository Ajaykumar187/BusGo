import BusCard from "./BusCard";
import EmptyState from "./EmptyState";

// Reusable "list of buses" renderer — takes an array of buses and renders
// a BusCard for each, or an EmptyState when there are none. Used by pages
// that display a plain bus list (e.g. pages/BusList.jsx) so the mapping
// logic isn't duplicated across pages.
function BusList({ buses }) {
  if (!buses || buses.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="space-y-6">
      {buses.map((bus) => (
        <BusCard key={bus._id} bus={bus} />
      ))}
    </div>
  );
}

export default BusList;
