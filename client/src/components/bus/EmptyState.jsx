function EmptyState() {
  return (
    <div className="text-center py-20">

      <h2 className="text-4xl font-bold">
        No Bus Found
      </h2>

      <p className="text-gray-500 mt-3">
        Try another route or journey date.
      </p>

    </div>
  );
}

export default EmptyState;