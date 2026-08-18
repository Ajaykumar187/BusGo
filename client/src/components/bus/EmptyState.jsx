import { FaBusAlt } from "react-icons/fa";

function EmptyState() {
  return (
    <div className="glass-light rounded-2xl text-center py-20 px-6">

      <span className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-dusk to-ember text-white mb-5">
        <FaBusAlt size={26} />
      </span>

      <h2 className="font-display text-3xl font-bold text-ink">
        No buses found
      </h2>

      <p className="text-ink/50 mt-3">
        Try another route, date, or loosen your filters.
      </p>

    </div>
  );
}

export default EmptyState;
