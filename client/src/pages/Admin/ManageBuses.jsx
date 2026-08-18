import { useEffect, useState } from "react";
import { getAllBuses } from "../../api/adminApi";
import BusTable from "../../components/admin/BusTable";
import { useNavigate } from "react-router-dom";

function ManageBuses() {
  const navigate = useNavigate();
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    loadBuses();
  }, []);

  const loadBuses = async () => {
    try {
      const data = await getAllBuses();
      setBuses(data.buses);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-8">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">
          Manage Buses
        </h1>

        <button
          onClick={() => navigate("/admin/add-bus")}
          className="ember-glow bg-gradient-to-r from-ember to-ember-light text-white px-6 py-3 rounded-lg"
        >
          + Add Bus
        </button>

      </div>

      <BusTable buses={buses} refresh={loadBuses} />

    </div>
  );
}

export default ManageBuses;
