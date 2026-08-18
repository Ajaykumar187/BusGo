import { RiSteeringFill } from "react-icons/ri";

function DriverCabin() {
  return (
    <div className="flex justify-between items-center mb-10">

      <div className="flex items-center gap-4">

        <div className="w-16 h-16 rounded-full border-4 border-dusk/20 bg-white flex items-center justify-center">

          <RiSteeringFill
            size={28}
            className="text-dusk"
          />

        </div>

        <h2 className="font-display font-bold text-xl text-ink">
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