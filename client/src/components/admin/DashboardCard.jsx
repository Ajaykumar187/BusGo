function DashboardCard({ title, value }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-gray-500">
        {title}
      </h2>

      <h1 className="text-4xl font-bold mt-4 text-blue-700">
        {value}
      </h1>

    </div>
  );
}

export default DashboardCard;