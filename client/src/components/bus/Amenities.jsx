import {
  FaWifi,
  FaChargingStation,
  FaSnowflake,
  FaTv,
} from "react-icons/fa";

function Amenities() {

  const amenities = [

    { icon: <FaWifi />, label: "WiFi" },
    { icon: <FaChargingStation />, label: "Charging Point" },
    { icon: <FaSnowflake />, label: "Air Conditioning" },
    { icon: <FaTv />, label: "Entertainment" },

  ];

  return (

    <div className="bg-white rounded-2xl shadow-lg p-8">

      <h2 className="text-2xl font-bold mb-6">

        Amenities

      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        {amenities.map((item, index) => (

          <div
            key={index}
            className="flex items-center gap-3"
          >

            <div className="text-blue-700 text-2xl">

              {item.icon}

            </div>

            {item.label}

          </div>

        ))}

      </div>

    </div>

  );

}

export default Amenities;