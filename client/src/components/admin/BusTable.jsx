import { useNavigate } from "react-router-dom";
import { deleteBus } from "../../api/adminApi";

function BusTable({ buses, refresh }) {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this bus?"
    );

    if (!confirmDelete) return;

    try {
      await deleteBus(id);

      alert("Bus deleted successfully.");

      refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to delete bus.");
    }
  };

  return (
    <div className="glass-light rounded-2xl overflow-hidden">

      <table className="w-full">

        <thead className="bg-gradient-to-r from-ember to-ember-light text-white">

          <tr>

            <th className="p-4 text-left">Bus</th>

            <th className="p-4 text-left">Route</th>

            <th className="p-4 text-center">Fare</th>

            <th className="p-4 text-center">Seats</th>

            <th className="p-4 text-center">Actions</th>

          </tr>

        </thead>

        <tbody>

          {buses.length === 0 ? (

            <tr>

              <td
                colSpan="5"
                className="text-center py-10"
              >
                No buses found.
              </td>

            </tr>

          ) : (

            buses.map((bus) => (

              <tr
                key={bus._id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-4">

                  <div>

                    <h3 className="font-bold">
                      {bus.busName}
                    </h3>

                    <p className="text-gray-500 text-sm">
                      {bus.operator}
                    </p>

                  </div>

                </td>

                <td className="p-4">

                  {bus.source} → {bus.destination}

                </td>

                <td className="text-center">

                  ₹{bus.fare}

                </td>

                <td className="text-center">

                  {bus.seats?.length || 0}

                </td>

                <td>

                  <div className="flex justify-center gap-3">

                    <button
                      onClick={() =>
                        navigate(`/admin/edit-bus/${bus._id}`)
                      }
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(bus._id)
                      }
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                    >
                      Delete
                    </button>

                  </div>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}

export default BusTable;