function PopularRoutes() {
  const routes = [
    "Delhi → Jaipur",
    "Delhi → Lucknow",
    "Mumbai → Pune",
    "Patna → Ranchi",
    "Hyderabad → Bangalore",
    "Kolkata → Siliguri",
    "Chennai → Coimbatore",
    "Ahmedabad → Surat",
    "Bhopal → Indore",
    "Goa → Mumbai",
    "Delhi → Chandigarh",
    "Varanasi → Prayagraj",
  ];

  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Popular Routes
      </h2>

      <div className="flex flex-wrap justify-center gap-5">
        {routes.map((route, index) => (
          <button
            key={index}
            className="bg-blue-50 hover:bg-blue-700 hover:text-white transition px-6 py-3 rounded-full shadow font-semibold"
          >
            {route}
          </button>
        ))}
      </div>
    </section>
  );
}

export default PopularRoutes;