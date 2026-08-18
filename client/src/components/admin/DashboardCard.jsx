function DashboardCard({ title, value }) {
  return (
    <div className="glass-light rounded-2xl p-6">

      <h2 className="text-gray-500">
        {title}
      </h2>

      <h1 className="text-4xl font-bold mt-4 text-ember">
        {value}
      </h1>

    </div>
  );
}

export default DashboardCard;