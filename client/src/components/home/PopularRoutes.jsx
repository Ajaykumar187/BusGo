import RouteCard from "./RouteCard";

import delhi from "../../assets/images/routes/delhi.jpg";
import mumbai from "../../assets/images/routes/mumbai.jpg";
import patna from "../../assets/images/routes/patna.jpg";
import bangalore from "../../assets/images/routes/bangalore.jpg";

function PopularRoutes() {

  const routes = [

    {
      from: "Delhi",
      to: "Jaipur",
      price: 599,
      buses: 18,
      image: delhi,
    },

    {
      from: "Mumbai",
      to: "Pune",
      price: 399,
      buses: 26,
      image: mumbai,
    },

    {
      from: "Patna",
      to: "Ranchi",
      price: 499,
      buses: 14,
      image: patna,
    },

    {
      from: "Bangalore",
      to: "Hyderabad",
      price: 699,
      buses: 22,
      image: bangalore,
    },

  ];

  return (

    <section className="py-20 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold">
            Popular Routes
          </h2>

          <p className="text-gray-600 mt-3">
            Book tickets on India's most travelled bus routes.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {routes.map((route, index) => (
            <RouteCard
              key={index}
              route={route}
            />
          ))}

        </div>

      </div>

    </section>

  );

}

export default PopularRoutes;