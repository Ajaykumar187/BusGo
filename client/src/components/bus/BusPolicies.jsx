function BusPolicies() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">

      <h2 className="text-2xl font-bold mb-6">
        Bus Policies
      </h2>

      <ul className="list-disc ml-5 space-y-3">

        <li>Passengers must carry a valid government ID.</li>

        <li>Reporting time is 30 minutes before departure.</li>

        <li>No smoking or alcohol inside the bus.</li>

        <li>Cancellation charges apply as per policy.</li>

      </ul>

    </div>
  );
}

export default BusPolicies;