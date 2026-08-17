import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        <div>

          <h2 className="text-3xl font-bold mb-4">
            BusGo
          </h2>

          <p className="text-gray-400">
            Safe and smart bus travel across India.
          </p>

        </div>

        <div>

          <h3 className="font-bold mb-3">
            Company
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>About</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>

        </div>

        <div>

          <h3 className="font-bold mb-3">
            Support
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>Help Center</li>
            <li>FAQs</li>
            <li>Refund Policy</li>
          </ul>

        </div>

        <div>

          <h3 className="font-bold mb-3">
            Follow Us
          </h3>

          <div className="flex gap-4 text-2xl">

            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
            <FaGithub />

          </div>

        </div>

      </div>

      <div className="text-center mt-10 text-gray-500">

        © 2026 BusGo. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;