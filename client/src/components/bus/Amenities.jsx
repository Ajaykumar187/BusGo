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

    <div className="glass-light rounded-2xl p-8">

      <h2 className="font-display text-2xl font-bold mb-6 text-ink">

        Amenities

      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        {amenities.map((item, index) => (

          <div
            key={index}
            className="flex items-center gap-3"
          >

            <div className="text-ember text-2xl">

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