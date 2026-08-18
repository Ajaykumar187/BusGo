import { FaGooglePlay, FaApple } from "react-icons/fa";

function AppDownload() {

  return (

    <section className="relative overflow-hidden hero-gradient text-white py-20">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center relative z-10">

        <div>

          <h2 className="font-display text-5xl font-bold mb-6">

            Download BusGo App

          </h2>

          <p className="text-lg text-white/70">

            Book bus tickets anytime, anywhere.

          </p>

        </div>

        <div className="flex gap-5">

          <button className="glass-dark hover:bg-white/15 text-white px-6 py-4 rounded-xl flex items-center gap-3 transition-colors">

            <FaGooglePlay size={22}/>

            Google Play

          </button>

          <button className="glass-dark hover:bg-white/15 text-white px-6 py-4 rounded-xl flex items-center gap-3 transition-colors">

            <FaApple size={22}/>

            App Store

          </button>

        </div>

      </div>

    </section>

  );

}

export default AppDownload;
