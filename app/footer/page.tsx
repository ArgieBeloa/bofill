import { Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="min-h-[calc(100vh-80px)] bg-linear-to-br from-slate-50 via-white to-blue-50 px-6 py-10">
      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* Main footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">
              {/* Mind<span className="text-blue-400">Care</span> */}
              <span className="text-blue-400">BOFILL </span>
              PSYCHOLOGICAL SERVICES INC.
            </h2>

            <p className="mt-4 max-w-xs text-sm leading-6 text-black">
              Supporting your mental well-being with compassionate, accessible,
              and thoughtful care.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-400"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-400"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-400"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white">Explore</h3>

            <ul className="mt-5 space-y-3 text-sm text-black">
              <li>
                <a href="/" className="transition hover:text-blue-400">
                  Home
                </a>
              </li>

              <li>
                <a href="/about" className="transition hover:text-blue-400">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/practitioners"
                  className="transition hover:text-blue-400"
                >
                  practitioners
                </a>
              </li>

              <li>
                <a href="/services" className="transition hover:text-blue-400">
                  Services
                </a>
              </li>

              <li>
                <a href="/contact" className="transition hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-black">Services</h3>

            <ul className="mt-5 space-y-3 text-sm text-black">
              <li>Mental Health Counseling</li>
              <li>Psychotherapy</li>
              <li>Occupational-therapy</li>
              <li>Psychiatric-consultation</li>
              <li>Group-therapy</li>
              <li>drug-dependency-exam</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-black">Contact</h3>

            <div className="mt-5 space-y-4 text-sm text-black">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-black" />
                <span>2nd floor, One Mayon Place, Mayon St, Quezon City, 1114 Metro Manila</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-black" />
                <span>hello@bofillpsychologicalservices.org</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-black" />
                <span>0968 8552501</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-slate-800 pt-8 text-sm text-black md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} MindCare. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="/privacy" className="transition hover:text-blue-400">
              Privacy Policy
            </a>

            <a href="/terms" className="transition hover:text-blue-400">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
