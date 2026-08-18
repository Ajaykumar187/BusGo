import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaBusAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative overflow-hidden hero-gradient text-white py-14">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 relative z-10">

        <div>

          <div className="flex items-center gap-2 mb-4">
            <FaBusAlt className="text-ember-light" size={22} />
            <h2 className="font-display text-2xl font-bold">
              BusGo
            </h2>
          </div>

          <p className="text-white/60">
            Safe and smart bus travel across India.
          </p>

        </div>

        <div>

          <h3 className="font-display font-semibold mb-4 text-white/90">
            Company
          </h3>

          <ul className="space-y-2 text-white/60">
            <li>About</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>

        </div>

        <div>

          <h3 className="font-display font-semibold mb-4 text-white/90">
            Support
          </h3>

          <ul className="space-y-2 text-white/60">
            <li>Help Center</li>
            <li>FAQs</li>
            <li>Refund Policy</li>
          </ul>

        </div>

        <div>

          <h3 className="font-display font-semibold mb-4 text-white/90">
            Follow Us
          </h3>

          <div className="flex gap-4 text-xl text-white/70">
            <a href="#" aria-label="Facebook" className="hover:text-ember-light transition-colors"><FaFacebook /></a>
            <a href="#" aria-label="Instagram" className="hover:text-ember-light transition-colors"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-ember-light transition-colors"><FaLinkedin /></a>
            <a href="#" aria-label="GitHub" className="hover:text-ember-light transition-colors"><FaGithub /></a>
          </div>

        </div>

      </div>

      <div className="text-center mt-10 text-white/40 relative z-10 text-sm">
        © 2026 BusGo. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;
