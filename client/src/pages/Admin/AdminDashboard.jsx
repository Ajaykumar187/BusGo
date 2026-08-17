import DashboardCard from "../../components/admin/DashboardCard";

function AdminDashboard() {

  const stats = [
    {
      title: "Revenue",
      value: "₹1,28,900",
    },
    {
      title: "Bookings",
      value: "520",
    },
    {
      title: "Users",
      value: "250",
    },
    {
      title: "Buses",
      value: "38",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="max-w-7xl mx-auto p-8">

        <h1 className="text-4xl font-bold mb-10">
          Admin Dashboard
        </h1>

        <div className="grid md:grid-cols-4 gap-6">

          {stats.map((item) => (
            <DashboardCard
              key={item.title}
              title={item.title}
              value={item.value}
            />
          ))}

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;