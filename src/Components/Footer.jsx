import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const FacebookIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="w-8 h-8 rounded-md transition-transform hover:-translate-y-1 cursor-pointer"
  >
    <path fill="#1877F2" d="M0 0h48v48H0z" />
    <path
      fill="#fff"
      d="M25.6 37V24h4.3l.6-5h-5v-3.2c0-1.4.4-2.4 2.5-2.4h2.6V9.2c-.5 0-2.1-.2-4-.2-4 0-6.7 2.4-6.7 6.9V20H15v5h4.9v13h5.7z"
    />
  </svg>
);

const XIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="w-8 h-8 rounded-md transition-transform hover:-translate-y-1 cursor-pointer"
  >
    <path fill="#fff" d="M0 0h48v48H0z" />
    <path d="M28.4 20.3L37.7 9.5h-2.2l-8.1 9.4-6.4-9.4h-7.4l9.8 14.3-9.8 11.4h2.2l8.6-10 6.8 10h7.4l-10.2-14.9zm-3 3.5l-1-1.4-8-11.4h3.4l6.5 9.3 1 1.4 8.4 12h-3.4l-6.9-9.9z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="w-8 h-8 rounded-md transition-transform hover:-translate-y-1 cursor-pointer"
  >
    <path fill="#0077B5" d="M0 0h48v48H0z" />
    <path
      fill="#fff"
      d="M12 19h5v17h-5V19zM14.5 11a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6zM20 19h5v2.8h.1c.7-1.3 2.4-2.7 5-2.7 5.3 0 6.3 3.5 6.3 8V36h-5v-8c0-2-.7-3.4-2.5-3.4-1.4 0-2.2.9-2.6 1.8V36h-5V19z"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="w-8 h-8 rounded-md transition-transform hover:-translate-y-1 cursor-pointer"
  >
    <defs>
      <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#fa7e1e" />
        <stop offset="50%" stopColor="#d62976" />
        <stop offset="100%" stopColor="#962fbf" />
      </linearGradient>
    </defs>
    <rect width="48" height="48" fill="url(#ig-grad)" rx="4" />
    <path
      fill="#fff"
      d="M24 13c-3 0-6.1 0-7.3.1-4 .2-6 2.2-6.2 6.2-.1 1.2-.1 4.3-.1 7.3s0 6.1.1 7.3c.2 4 2.2 6 6.2 6.2 1.2.1 4.3.1 7.3.1s6.1 0 7.3-.1c4-.2 6-2.2 6.2-6.2.1-1.2.1-4.3.1-7.3s0-6.1-.1-7.3c-.2-4-2.2-6-6.2-6.2-1.2-.1-4.3-.1-7.3-.1zm0 3.6c3 0 3.3 0 4.5.1 3 .1 4.2 1.6 4.3 4.3.1 1.2.1 1.6.1 4.5s0 3.3-.1 4.5c-.1 3-1.6 4.2-4.3 4.3-1.2.1-1.6.1-4.5.1s-3.3 0-4.5-.1c-3-.1-4.2-1.6-4.3-4.3-.1-1.2-.1-1.6-.1-4.5s0-3.3.1-4.5c.1-3 1.6-4.2 4.3-4.3 1.2-.1 1.6-.1 4.5-.1z"
    />
    <path
      fill="#fff"
      d="M24 18.5a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 12.4a4.4 4.4 0 1 1 0-8.8 4.4 4.4 0 0 1 0 8.8zM34.3 15.6a1.3 1.3 0 1 1-2.6 0 1.3 1.3 0 0 1 2.6 0z"
    />
  </svg>
);

const KrystalLogo = () => (
  <div className="flex flex-col items-start mb-3">
    <div className="relative w-16 h-14 mb-1">
      <svg viewBox="0 0 100 86" className="w-full h-full drop-shadow-sm">
        <path d="M50 0 L100 86 L0 86 Z" fill="#29B6F6" />
        <text
          x="50"
          y="78"
          fontSize="48"
          fontWeight="900"
          textAnchor="middle"
          fill="black"
          fontFamily="sans-serif"
        >
          K
        </text>
        <text x="85" y="15" fontSize="10" fill="#666"></text>
      </svg>
    </div>
    <div className="text-white font-extrabold text-xl tracking-wide font-sans">
      KESARI
    </div>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white pt-12 pb-4 px-4 md:px-8 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          <div className="md:col-span-4 flex flex-col items-start">
            <KrystalLogo />
            <p className="text-[15px] leading-relaxed mb-6 font-medium text-[#C9A032]/90 max-w-sm">
              <span className="font-bold text-[#C9A032]">
                Kesari Security Groups
              </span>{" "}
              – Your trusted partner in excellence for Security staffing,
              management, and beyond.
            </p>

            <div className="flex space-x-3 mt-auto">
              <FacebookIcon />
              <XIcon />
              <LinkedInIcon />
              <InstagramIcon />
            </div>
          </div>

          <div className="md:col-span-4 pl-0 md:pl-8">
            <h3 className="text-xl font-medium mb-6">Useful Links</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-4 text-[15px]">
              <div className="flex flex-col space-y-4">
                <a
                  href="#"
                  className="hover:text-blue-200 text-[#C9A032] transition-colors"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="hover:text-blue-200 text-[#C9A032] transition-colors"
                >
                  About
                </a>
                <a
                  href="#"
                  className="hover:text-blue-200 text-[#C9A032] transition-colors"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="hover:text-blue-200 text-[#C9A032] transition-colors"
                >
                  Career
                </a>
              </div>
              <div className="flex flex-col space-y-4">
                <a
                  href="#"
                  className="hover:text-blue-200 text-[#C9A032] transition-colors"
                >
                  Sectors
                </a>
                <a
                  href="#"
                  className="hover:text-blue-200 text-[#C9A032] transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  className="hover:text-blue-200 text-[#C9A032] transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="hover:text-blue-200 transition-colors text-[#C9A032] whitespace-nowrap"
                >
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xl font-medium mb-6">Reach Out to Us</h3>
            <div className="space-y-6 text-[15px]">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-white fill-white stroke-transparent mr-3 mt-1" />
                <p className="leading-snug text-[#C9A032]">
                  2001 & 2002, Kesari Security Groups, Hadapsar, Pune – 400028.
                </p>
              </div>

              <div className="flex items-center">
                <Phone className="w-6 h-6 text-white fill-white stroke-none mr-3" />
                <p className="text-[#C9A032]">(022)-4747-1234</p>
              </div>

              <div className="flex items-center">
                <Mail className="w-6 h-6 text-white stroke-[2] mr-3" />
                <a
                  href="mailto:info@krystal-group.com"
                  className="hover:text-blue-200 text-[#C9A032] transition-colors"
                >
                  info@kesari-group.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-sm text-white/80">
          <p>© 2025 Kesari Security Groups. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
