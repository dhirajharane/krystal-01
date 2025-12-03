import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const servicesItems = [
    { title: "Integrated Facility Management Services", href: "#" },
    { title: "Staffing Solutions And Payroll Management", href: "#" },
    { title: "Private Security And Manned Guarding", href: "#" },
    { title: "Catering", href: "#" },
    { title: "Waste Management Services", href: "#" },
    { title: "Other Services", href: "#" },
  ];

  const sectorsItems = [
    { title: "Hospitals and Healthcare", href: "#" },
    { title: "Education", href: "#" },
    { title: "Banking and Financial Services", href: "#" },
    { title: "Public Administration", href: "#" },
    { title: "Airport Railways & Metro Infrastructure", href: "#" },
    { title: "Industrial", href: "#" },
    { title: "Retail", href: "#" },
    { title: "Other Sectors", href: "#" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-[#000000] text-white shadow-lg font-sans">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-[90px]">
          
          <div className="flex-shrink-0 flex items-center cursor-pointer gap-3">
            <div className="relative w-12 h-12">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full drop-shadow-sm"
              >
                <path d="M50 10 L90 90 L10 90 Z" fill="#29abe2" />
                <text
                  x="50%"
                  y="75%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="black"
                  fontSize="50"
                  fontWeight="bold"
                  fontFamily="Arial, sans-serif"
                >
                  K
                </text>
              </svg>
            </div>
            <span className="font-Oswald text-3xl tracking-wide uppercase">
              KESARI
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-8 h-full">
            <NavLink href="#">About Us</NavLink>

            <DropdownLink href="#" title="Services" items={servicesItems} />

            <DropdownLink href="#" title="Sectors" items={sectorsItems} />

            <NavLink href="#">Investors</NavLink>
            <NavLink href="#">CSR</NavLink>
            <NavLink href="#">Blogs</NavLink>
            <NavLink href="#">Careers</NavLink>

            <div className="ml-6">
              <a
                href="#"
                className="bg-[#1B1B1B] hover:bg-[#C9A032] text-white px-8 py-3 rounded-[4px] font-semibold text-lg transition-colors duration-200 shadow-sm"
              >
                Contact Us
              </a>
            </div>
          </div>

          
          <div className="flex items-center xl:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white bg-[#1B1B1B] hover:bg-[#C9A032] focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      }
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="xl:hidden bg-[#000000] overflow-hidden absolute w-full left-0 shadow-xl border-t border-[#C9A032] max-h-[85vh] overflow-y-auto"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              <MobileNavLink href="#">About Us</MobileNavLink>
              
              
              <MobileDropdown title="Services" items={servicesItems} />
              <MobileDropdown title="Sectors" items={sectorsItems} />
              
              <MobileNavLink href="#">Investors</MobileNavLink>
              <MobileNavLink href="#">CSR</MobileNavLink>
              <MobileNavLink href="#">Blogs</MobileNavLink>
              <MobileNavLink href="#">Careers</MobileNavLink>
              
              <div className="pt-6 pb-8">
                <a
                  href="#"
                  className="block w-full text-center bg-[#1B1B1B] hover:bg-[#C9A032] text-white px-4 py-3 rounded-md font-bold text-lg transition-colors"
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
  <div className="flex items-center h-full">
    <a
      href={href}
      className="text-white hover:text-[#FFC20E] px-1 py-2 text-[17px] font-medium transition-colors"
    >
      {children}
    </a>
  </div>
);

const DropdownLink = ({ href, title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group flex items-center h-full"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <a
        href={href}
        className={`text-white px-1 py-2 text-[17px] font-medium transition-colors flex items-center gap-1.5 ${
          isOpen ? "text-[#29abe2]" : "group-hover:text-[#FFC20E]"
        }`}
      >
        {title}
        <ChevronDown
          size={16}
          strokeWidth={2.5}
          className={`mt-0.5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </a>

      {items && (
        <div
          className={`absolute left-0 w-max min-w-[360px] bg-[#C9A032] shadow-2xl transition-all duration-200 ease-in-out origin-top-left z-50 ${
            isOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 translate-y-2 invisible"
          }`}
          style={{ top: "100%" }}
        >
          <div className="flex flex-col py-4">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-white hover:text-[#000000] px-8 py-3 text-[15px] font-normal transition-colors border-l-4 border-transparent hover:border-[#000000] block"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};



const MobileNavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-white hover:bg-[#1B1B1B] hover:text-[#C9A032] block px-3 py-3 rounded-md text-lg font-medium transition-colors"
  >
    {children}
  </a>
);


const MobileDropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-white hover:bg-[#1B1B1B] px-3 py-3 rounded-md text-lg font-medium flex justify-between items-center transition-colors ${
          isOpen ? "bg-[#1B1B1B] text-[#C9A032]" : ""
        }`}
      >
        {title}
        <ChevronDown 
          size={20} 
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-[#111111] rounded-b-md overflow-hidden"
          >
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block text-gray-300 hover:text-[#C9A032] hover:bg-[#1B1B1B] px-6 py-3 text-[16px] border-l-2 border-transparent hover:border-[#C9A032] transition-colors"
              >
                {item.title}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;