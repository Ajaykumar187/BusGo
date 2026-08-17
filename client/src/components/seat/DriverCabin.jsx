import { RiSteeringFill } from "react-icons/ri";

function DriverCabin() {
  return (
    <div className="flex justify-between items-center mb-10">

      <div className="flex items-center gap-4">

        <div className="w-16 h-16 rounded-full border-4 border-gray-300 flex items-center justify-center">

          <RiSteeringFill
            size={28}
            className="text-blue-700"
          />

        </div>

        <h2 className="font-bold text-xl">
          Driver
        </h2>

      </div>

      <div className="text-5xl">
        🚪
      </div>

    </div>
  );
}

export default DriverCabin;