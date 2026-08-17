import { FaGooglePlay, FaApple } from "react-icons/fa";

function AppDownload() {

  return (

    <section className="bg-blue-700 text-white py-20">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">

        <div>

          <h2 className="text-5xl font-bold mb-6">

            Download BusGo App

          </h2>

          <p className="text-lg">

            Book bus tickets anytime, anywhere.

          </p>

        </div>

        <div className="flex gap-5">

          <button className="bg-white text-black px-6 py-4 rounded-xl flex items-center gap-3">

            <FaGooglePlay size={25}/>

            Google Play

          </button>

          <button className="bg-white text-black px-6 py-4 rounded-xl flex items-center gap-3">

            <FaApple size={25}/>

            App Store

          </button>

        </div>

      </div>

    </section>

  );

}

export default AppDownload;