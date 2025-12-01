import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-[#006894] text-white shadow-lg">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-[90px]">
          <div className="flex-shrink-0 flex items-center cursor-pointer gap-3">
            <div className="relative w-12 h-12">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
                <path d="M50 10 L90 90 L10 90 Z" fill="#29abe2" />
                <text
                  x="50%"
                  y="75%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="white"
                  fontSize="40"
                  fontWeight="bold"
                  fontFamily="Arial, sans-serif"
                >
                  K
                </text>
              </svg>
            </div>
            <span className="font-extrabold text-3xl tracking-wide uppercase">
              KRYSTAL
            </span>
          </div>

          <div className="hidden xl:flex items-center space-x-8">
            <NavLink href="#">About Us</NavLink>
            <DropdownLink href="#" title="Services" />
            <DropdownLink href="#" title="Sectors" />
            <NavLink href="#">Investors</NavLink>
            <NavLink href="#">CSR</NavLink>
            <NavLink href="#">Blogs</NavLink>
            <NavLink href="#">Careers</NavLink>
            <div className="ml-6">
              <a
                href="#"
                className="bg-[#009FE3] hover:bg-[#008cc9] text-white px-8 py-3 rounded-[4px] font-semibold text-lg transition-colors duration-200 shadow-sm"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="flex items-center xl:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#00557a] focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="xl:hidden bg-[#005e85] overflow-hidden absolute w-full left-0 shadow-xl border-t border-[#007ead]"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              <MobileNavLink href="#">About Us</MobileNavLink>
              <MobileNavLink href="#" hasDropdown>Services</MobileNavLink>
              <MobileNavLink href="#" hasDropdown>Sectors</MobileNavLink>
              <MobileNavLink href="#">Investors</MobileNavLink>
              <MobileNavLink href="#">CSR</MobileNavLink>
              <div className="pt-6">
                <a
                  href="#"
                  className="block w-full text-center bg-[#009FE3] text-white px-4 py-3 rounded-md font-bold text-lg"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-white hover:text-[#FFC20E] px-1 py-2 text-[17px] font-medium transition-colors"
  >
    {children}
  </a>
);

const DropdownLink = ({ href, title }) => (
  <div className="relative group flex items-center cursor-pointer h-full">
    <a
      href={href}
      className="text-white group-hover:text-[#FFC20E] px-1 py-2 text-[17px] font-medium transition-colors flex items-center gap-1.5"
    >
      {title}
      <ChevronDown
        size={16}
        strokeWidth={2.5}
        className="mt-0.5 group-hover:rotate-180 transition-transform duration-200"
      />
    </a>
  </div>
);

const MobileNavLink = ({ href, children, hasDropdown }) => (
  <a
    href={href}
    className="text-white hover:bg-[#004d6e] block px-3 py-3 rounded-md text-lg font-medium flex justify-between items-center"
  >
    {children}
    {hasDropdown && <ChevronDown size={20} />}
  </a>
);

export default Navbar;
