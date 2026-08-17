import { useNavigate } from "react-router-dom";
import BusForm from "../../components/admin/BusForm";
import { addBus } from "../../api/adminApi";

function AddBus() {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      await addBus(formData);

      alert("Bus added successfully!");

      navigate("/admin/manage-buses");

    } catch (error) {
      console.error(error);
      alert("Failed to add bus.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        Add New Bus
      </h1>

      <BusForm onSubmit={handleSubmit} />

    </div>
  );
}

export default AddBus;