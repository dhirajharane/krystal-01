import React from 'react';
import { motion } from 'framer-motion';

const KohinoorLogo = () => (
  <svg viewBox="0 0 120 40" className="h-10 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 30L15 5H25L30 30H10Z" fill="#334155" />
    <path d="M18 5V30" stroke="white" strokeWidth="1" />
    <text x="35" y="18" fill="#334155" fontFamily="sans-serif" fontSize="10" fontWeight="bold">KOHINOOR</text>
    <text x="35" y="28" fill="#64748b" fontFamily="sans-serif" fontSize="8" letterSpacing="1">SQUARE</text>
  </svg>
);

const ITPLLogo = () => (
  <svg viewBox="0 0 100 40" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="25" fill="#ea580c" fontFamily="Arial" fontSize="24" fontWeight="900">IT</text>
    <text x="24" y="25" fill="#1e3a8a" fontFamily="Arial" fontSize="24" fontWeight="900">PL</text>
    <text x="0" y="35" fill="#475569" fontFamily="sans-serif" fontSize="5">Connecting Communities</text>
  </svg>
);

const VeedolLogo = () => (
  <svg viewBox="0 0 100 40" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 20L15 30L35 10" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="40" y="10" width="55" height="20" fill="#dc2626" rx="2"/>
    <text x="45" y="24" fill="white" fontFamily="sans-serif" fontSize="12" fontWeight="bold">Veedol</text>
  </svg>
);

const SolonLogo = () => (
  <svg viewBox="0 0 120 40" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="28" fill="#1e3a8a" fontFamily="sans-serif" fontSize="22" fontWeight="bold" fontStyle="italic">SOLON</text>
    <path d="M80 10C95 10 105 20 105 35" stroke="#1e3a8a" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);

const GIISLogo = () => (
  <svg viewBox="0 0 180 50" className="h-10 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="25" r="15" stroke="#ef4444" strokeWidth="3" strokeDasharray="20 40" transform="rotate(0 20 25)" />
    <circle cx="20" cy="25" r="15" stroke="#3b82f6" strokeWidth="3" strokeDasharray="20 40" transform="rotate(120 20 25)" />
    <circle cx="20" cy="25" r="15" stroke="#eab308" strokeWidth="3" strokeDasharray="20 40" transform="rotate(240 20 25)" />
    <text x="45" y="20" fill="#1e3a8a" fontFamily="sans-serif" fontSize="10" fontWeight="bold">Global Indian</text>
    <text x="45" y="30" fill="#1e3a8a" fontFamily="sans-serif" fontSize="10" fontWeight="bold">International</text>
    <text x="45" y="40" fill="#1e3a8a" fontFamily="sans-serif" fontSize="10" fontWeight="bold">School</text>
  </svg>
);

const CoatsLogo = () => (
  <svg viewBox="0 0 100 40" className="h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="15" stroke="#2563eb" strokeWidth="2" />
    <path d="M15 20H25 M20 15V25" stroke="#2563eb" strokeWidth="2" />
    <text x="40" y="25" fill="#1e3a8a" fontFamily="sans-serif" fontSize="16" fontWeight="bold">COATS</text>
  </svg>
);

const AsianPaintsLogo = () => (
  <svg viewBox="0 0 140 40" className="h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 25C10 15 20 15 20 25C20 35 10 35 10 25Z" fill="none" stroke="#ef4444" strokeWidth="3"/>
    <path d="M20 10V35" stroke="#ef4444" strokeWidth="3"/>
    <text x="35" y="22" fill="#7f1d1d" fontFamily="sans-serif" fontSize="14" fontWeight="bold">asianpaints</text>
  </svg>
);

const NescoLogo = () => (
  <svg viewBox="0 0 100 40" className="h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 20L10 12A5 5 0 0 1 20 12L15 20Z" fill="#06b6d4" />
    <path d="M15 20L23 20A5 5 0 0 1 23 28L15 20Z" fill="#06b6d4" />
    <path d="M15 20L20 28A5 5 0 0 1 10 28L15 20Z" fill="#06b6d4" />
    <path d="M15 20L7 20A5 5 0 0 1 7 12L15 20Z" fill="#06b6d4" />
    <text x="32" y="25" fill="#0891b2" fontFamily="sans-serif" fontSize="16" fontWeight="bold">nesco</text>
  </svg>
);

const HeteroLogo = () => (
  <svg viewBox="0 0 100 40" className="h-10 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="20" height="20" stroke="#b91c1c" strokeWidth="2"/>
    <path d="M10 10V20 M20 10V20 M10 15H20" stroke="#b91c1c" strokeWidth="2"/>
    <text x="30" y="20" fill="#b91c1c" fontFamily="sans-serif" fontSize="14" fontWeight="bold">HETERO</text>
  </svg>
);

const FerringLogo = () => (
  <svg viewBox="0 0 120 40" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="116" height="36" stroke="#0ea5e9" strokeWidth="2" fill="none"/>
    <text x="10" y="20" fill="#0284c7" fontFamily="Arial" fontSize="14" fontWeight="bold">FERRING</text>
    <text x="10" y="32" fill="#334155" fontFamily="Arial" fontSize="8">PHARMACEUTICALS</text>
  </svg>
);

const SaharaStarLogo = () => (
  <svg viewBox="0 0 150 40" className="h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="15" cy="20" r="10" fill="#047857"/>
    <circle cx="15" cy="20" r="6" fill="#f59e0b"/>
    <text x="32" y="20" fill="#064e3b" fontFamily="serif" fontSize="14" fontWeight="bold">SAHARA</text>
    <text x="92" y="20" fill="#064e3b" fontFamily="serif" fontSize="14" fontWeight="bold">STAR</text>
    <text x="32" y="32" fill="#b45309" fontFamily="cursive" fontSize="10">A Step Ahead</text>
  </svg>
);

const PVRLogo = () => (
  <svg viewBox="0 0 120 40" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="28" fill="#d97706" fontFamily="sans-serif" fontSize="20" fontWeight="bold">PVR</text>
    <text x="45" y="28" fill="#525252" fontFamily="sans-serif" fontSize="20" fontWeight="lighter">INOX</text>
  </svg>
);

const PremierLogo = () => (
  <svg viewBox="0 0 120 40" className="h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 10C10 5 20 5 20 15C20 25 10 25 10 35" stroke="#1d4ed8" strokeWidth="4" fill="none"/>
    <text x="25" y="18" fill="#1d4ed8" fontFamily="sans-serif" fontSize="12" fontWeight="bold">Premier</text>
    <text x="25" y="30" fill="#047857" fontFamily="sans-serif" fontSize="12" fontWeight="bold">Energies</text>
  </svg>
);

const NicomacLogo = () => (
  <svg viewBox="0 0 120 40" className="h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="5" width="20" height="20" fill="#0284c7" opacity="0.8"/>
    <path d="M5 10H15 M10 5V15" stroke="white" strokeWidth="2"/>
    <text x="25" y="18" fill="#0284c7" fontFamily="sans-serif" fontSize="10" fontWeight="bold">NICOMAC</text>
    <text x="25" y="28" fill="#0284c7" fontFamily="sans-serif" fontSize="10" fontWeight="bold">TAIKISHA</text>
  </svg>
);

const CLIENTS = [
  { id: 1, component: KohinoorLogo },
  { id: 2, component: ITPLLogo },
  { id: 3, component: VeedolLogo },
  { id: 4, component: SolonLogo },
  { id: 5, component: GIISLogo },
  { id: 6, component: CoatsLogo },
  { id: 7, component: AsianPaintsLogo },
  { id: 8, component: NescoLogo },
  { id: 9, component: HeteroLogo },
  { id: 10, component: FerringLogo },
  { id: 11, component: SaharaStarLogo },
  { id: 12, component: PVRLogo },
  { id: 13, component: PremierLogo },
  { id: 14, component: NicomacLogo },
];

export default function App() {
  return (
    <div className="bg-white flex flex-col items-center justify-center py-10 overflow-hidden font-sans">
      <div className="container mx-auto px-4 mb-20 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e1b4b] tracking-normal leading-tight max-w-4xl mx-auto">
          Trusted by Elite and High-Achieving
          <br className="hidden md:block" /> Clients Globally
        </h2>
      </div>
      <div className="relative w-full overflow-hidden bg-white py-4">
        <div className="absolute top-0 left-0 z-20 h-full w-32 bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 z-20 h-full w-32 bg-gradient-to-l from-white via-white/90 to-transparent pointer-events-none" />
        <div className="flex select-none w-full">
          <motion.div
            className="flex flex-nowrap items-center gap-16 md:gap-24 pl-16 md:pl-24"
            animate={{
              x: "-50%",
            }}
            initial={{
              x: "0%"
            }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{ width: "max-content" }}
          >
            {[...CLIENTS, ...CLIENTS].map((client, index) => (
              <div 
                key={`${client.id}-${index}`}
                className="flex-shrink-0 flex items-center justify-center transition-all duration-500 cursor-pointer transform hover:scale-110"
              >
                <client.component />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
