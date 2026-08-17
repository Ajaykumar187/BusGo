import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import BusForm from "../../components/admin/BusForm";

import {
  getBusById,
  updateBus,
} from "../../api/adminApi";

function EditBus() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [bus, setBus] = useState(null);

  useEffect(() => {
    loadBus();
  }, []);

  const loadBus = async () => {
    try {
      const data = await getBusById(id);
      setBus(data.bus);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (formData) => {
    try {
      await updateBus(id, formData);

      alert("Bus updated successfully.");

      navigate("/admin/manage-buses");
    } catch (error) {
      console.error(error);

      alert("Failed to update bus.");
    }
  };

  if (!bus) {
    return (
      <h1 className="text-center mt-20 text-3xl">
        Loading...
      </h1>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">

        Edit Bus

      </h1>

      <BusForm
        initialData={bus}
        onSubmit={handleSubmit}
      />

    </div>
  );
}

export default EditBus;