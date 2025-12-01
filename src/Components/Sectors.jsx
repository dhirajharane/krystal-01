import React, { useState, useEffect, useRef } from 'react';
import { 
  Briefcase, 
  ChevronLeft, 
  ChevronRight, 
  IndianRupee,
  HandPlatter,
  Building,
  Factory,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Sectors = () => {
  const sectors = [
    {
      id: 1,
      title: "Banking and Financial Services",
      description: "Specialized and secure facility management solutions, thoughtfully tailored to meet the critical operational needs of high-security financial hubs.",
      icon: "banking",
      buttonText: "Read more"
    },
    {
      id: 2,
      title: "Hospitals and Healthcare",
      description: "Specialized facility management with eco-conscious ICU/OT cleaning, waste disposal, and safety operations ensuring standardized healthcare environments.",
      icon: "healthcare",
      buttonText: "Read more"
    },
    {
      id: 3,
      title: "Education",
      description: "Creating safe, clean, and green campuses for private and government schools, colleges, and hostels through sanitation, infrastructure upkeep, and eco-friendly security services.",
      icon: "education",
      buttonText: "Read more"
    },
    {
      id: 4,
      title: "Industrial Manufacturing",
      description: "Robust maintenance protocols designed for heavy machinery, assembly lines, and industrial warehouses to ensure maximum uptime and safety compliance.",
      icon: "industrial",
      buttonText: "Read more"
    },
    {
      id: 5,
      title: "Corporate Real Estate",
      description: "Premium housekeeping and technical services for corporate offices, enhancing the workplace experience while optimizing operational costs.",
      icon: "corporate",
      buttonText: "Read more"
    },
    {
      id: 6,
      title: "Energy & Power",
      description: "Comprehensive maintenance for power plants and substations, focusing on safety regulations and continuous operational efficiency.",
      icon: "industrial",
      buttonText: "Read more"
    }
  ];

  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isResetting, setIsResetting] = useState(false);
  const autoSlideInterval = useRef(null);

  const extendedSectors = [...sectors, ...sectors];
  const totalLength = sectors.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    autoSlideInterval.current = setInterval(() => {
      nextSlide();
    }, 4500);
  };

  const stopAutoSlide = () => {
    if (autoSlideInterval.current) clearInterval(autoSlideInterval.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [currentIndex]);

  const nextSlide = () => {
    if (currentIndex < totalLength) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleAnimationComplete = () => {
    if (currentIndex === totalLength) {
      setIsResetting(true);
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    if (isResetting) {
      const timer = setTimeout(() => setIsResetting(false), 50);
      return () => clearTimeout(timer);
    }
  }, [isResetting]);

  const BankingIcon = () => (
    <div className="relative w-16 h-16 mb-6 text-[#7E22CE]">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
        <path d="M12 2a4 4 0 0 1 4 4c0 .7-.2 1.4-.6 2L18 11a8 8 0 0 1-8 8 8 8 0 0 1-8-8l2.6-3a4 4 0 0 1-.6-2 4 4 0 0 1 4-4z" opacity="0.1"/>
        <path d="M16 8h.01" />
        <path d="M19 14c1.2 0 2.4-.6 3-1.7" />
        <path d="M2 14c.6 1.1 1.8 1.7 3 1.7" />
        <path d="M16.5 19a4 4 0 0 1-9 0" />
        <path d="M7 11l-2.6-3A2 2 0 0 1 6 5h12a2 2 0 0 1 1.6 3L17 11" />
        <path d="M12 14v-3" />
        <path d="M12 11h2" />
        <path d="M12 11h-2" />
        <path d="M12 11.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1.5" />
      </svg>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-1">
        <IndianRupee size={20} strokeWidth={2} />
      </div>
    </div>
  );

  const HealthcareIcon = () => (
    <div className="w-16 h-16 mb-6 text-[#7E22CE]">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4 8 4v14" />
        <path d="M12 11v4" />
        <path d="M10 13h4" />
      </svg>
    </div>
  );

  const EducationIcon = () => (
    <div className="w-16 h-16 mb-6 text-[#7E22CE] flex items-center justify-center relative">
       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
      <div className="absolute bottom-0 w-full flex justify-center">
         <HandPlatter size={24} className="opacity-0" /> 
      </div>
    </div>
  );

  const getIcon = (type) => {
    switch (type) {
      case 'banking': return <BankingIcon />;
      case 'healthcare': return <HealthcareIcon />;
      case 'education': return <EducationIcon />;
      case 'industrial': return <Factory size={64} strokeWidth={1.2} className="text-[#7E22CE] mb-6"/>;
      case 'corporate': return <Building size={64} strokeWidth={1.2} className="text-[#7E22CE] mb-6"/>;
      default: return <Briefcase size={64} className="text-[#7E22CE] mb-6" strokeWidth={1.2} />;
    }
  };

  return (
    <div className="w-full relative flex flex-col items-center justify-center font-sans overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Cityscape background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0A2540] opacity-30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1280px] px-6 md:px-12 lg:px-16 py-12 md:py-20 mx-auto">
        <div className="mb-8 md:mb-14 pl-2 text-center md:text-left">
          <h2 className="text-3xl md:text-[40px] font-bold text-white mb-3 tracking-wide">
            Sectors
          </h2>
          <p className="text-base md:text-[19px] text-white font-medium tracking-normal opacity-95">
            Pioneering Solutions Across Diverse Industries
          </p>
        </div>

        <div 
          className="relative w-full group"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          <button 
            onClick={prevSlide}
            className="hidden md:flex absolute -left-14 top-1/2 transform -translate-y-1/2 z-20 bg-[#0f172a] text-white w-10 h-10 items-center justify-center rounded-full hover:bg-[#D12E68] transition-colors duration-300 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="overflow-hidden w-full">
            <motion.div 
              className="flex"
              initial={false}
              animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
              transition={{ duration: isResetting ? 0 : 1.5, ease: "easeInOut" }}
              onAnimationComplete={handleAnimationComplete}
              style={{ width: `${(extendedSectors.length / itemsPerPage) * 100}%` }}
            >
              {extendedSectors.map((sector, index) => (
                <div 
                  key={`${sector.id}-${index}`}
                  className="px-2 md:px-3"
                  style={{ width: `${100 / extendedSectors.length}%` }} 
                >
                  <div className="bg-white p-6 md:p-9 border-[1.5px] border-[#D12E68] flex flex-col h-full min-h-[420px] md:min-h-[480px] hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex justify-start pt-2">
                       {getIcon(sector.icon)}
                    </div>

                    <h3 className="text-[#0B2545] text-lg md:text-[22px] font-bold mb-4 leading-tight tracking-tight">
                      {sector.title}
                    </h3>

                    <p className="text-[#334155] text-sm md:text-[15px] leading-[1.6] mb-8 flex-grow font-normal">
                      {sector.description}
                    </p>

                    <div className="mt-auto">
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-[#D12E68] font-bold text-xs md:text-[14px] border border-[#D12E68] px-5 py-2 md:px-7 md:py-2.5 hover:bg-[#D12E68] hover:text-white transition-colors duration-300 uppercase tracking-wide"
                      >
                        {sector.buttonText}
                      </motion.button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <button 
            onClick={nextSlide}
            className="hidden md:flex absolute -right-14 top-1/2 transform -translate-y-1/2 z-20 bg-[#0f172a] text-white w-10 h-10 items-center justify-center rounded-full hover:bg-[#D12E68] transition-colors duration-300 shadow-lg"
             aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex md:hidden justify-center gap-4 mt-8">
            <button 
              onClick={prevSlide}
              className="bg-[#0f172a] text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#D12E68] transition-colors duration-300 shadow-lg"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="bg-[#0f172a] text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#D12E68] transition-colors duration-300 shadow-lg"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>

        </div>
      </div>
      
      <div className="absolute right-1 top-1/3 h-24 w-1.5 bg-gray-400 rounded-full opacity-40 hidden lg:block"></div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sectors />
    </div>
  );
}
