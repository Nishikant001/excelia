import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

import { links } from "./Navbar.jsx";
export default function Footer() {
  return (
    <footer className="bg-deep text-ivory/80">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <img
            src="/images/excelia-logo.jpg"
            alt="Excelia Origins"
            className="w-[140px] h-[95px] object-contain"
          />
          <p className="mt-5 text-sm max-w-[240px]">
            Premium cashews, carefully sourced and packed with excellence.
          </p>
          <div className="flex gap-3 mt-5">
            {[Instagram, Facebook, Linkedin].map((I, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="grid h-9 w-9 place-items-center rounded-full border border-gold/60 text-lgold hover:bg-gold hover:text-ivory transition-colors"
              >
                <I size={15} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-serif text-xl text-ivory mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            {links.map(([t, to]) => (
              <li key={to}>
                <Link to={to} className="hover:text-lgold">
                  {t}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <h4 className="font-serif text-xl text-ivory mb-3">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <Mail size={16} className="text-lgold mt-0.5" />
              exceliaorigins@gmail.com
            </li>
            <li className="flex gap-2">
              <Phone size={16} className="text-lgold mt-0.5" />
              +91 9958583205
            </li>
            <li className="flex gap-2">
              <MapPin size={16} className="text-lgold mt-0.5" />
              Odisha, India
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8 py-5 flex flex-wrap justify-between gap-3 text-xs">
          <span>© 2026 Excelia Origins Private Limited</span>
          <span className="flex gap-5">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
