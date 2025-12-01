import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="flex flex-col h-full bg-white group border border-transparent hover:border-gray-100 transition-colors">
      <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col flex-grow pt-6 pb-4 pr-4">
        <h3 className="text-[#1a3c5e] font-bold text-lg leading-tight mb-3 min-h-[48px]">
          {title}
        </h3>

        <p className="text-gray-600 text-[15px] leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        <div>
          <button className="px-6 py-2 border border-[#c92a6d] text-[#c92a6d] text-sm font-medium rounded hover:bg-[#c92a6d] hover:text-white transition-colors duration-300">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const services = [
    {
      title: "Integrated Facility Management (IFMS)",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600",
      description: "We deliver integrated soft and hard facility services—housekeeping, sanitation, pest control, and O&M—ensuring clean, safe, and sustainably managed spaces...."
    },
    {
      title: "Staffing & Payroll Solutions",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
      description: "Our end-to-end manpower management covers recruitment, onboarding, payroll, and compliance for BFSI, healthcare, and public sectors—delivering skilled, certified talent while..."
    },
    {
      title: "Private Security & Manned Guarding",
      image: "https://images.unsplash.com/photo-1595666944516-bbb485958fb5?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Licensed security professionals deployed across various states provide access control, surveillance, patrols, and rapid emergency response—all operated with..."
    },
    {
      title: "Corporate Catering",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop",
      description: "Through Krystal Gourmet, we offer large-scale catering for hospitals, schools, and corporates from ISO 22000, ISO14001-2015, ISO 45001, ISO9001-2015, GMP, HACCP and FSSAI-compliant..."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const autoSlideInterval = useRef(null);

  const extendedServices = [...services, ...services];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    autoSlideInterval.current = setInterval(() => {
      nextSlide();
    }, 5000); 

    return () => {
      if (autoSlideInterval.current) clearInterval(autoSlideInterval.current);
    };
  }, [currentIndex, itemsToShow]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= services.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  return (
    <div className="bg-white font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-[#0f2b46] text-4xl font-bold mb-3 tracking-tight">
            Our Services
          </h1>
          <h2 className="text-[#0f2b46] text-lg font-semibold tracking-normal">
            Integrated Solutions for Efficiency, Sustainability & Compliance
          </h2>
        </div>

        <div className="relative overflow-hidden">
            <div 
              className="flex"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
                transition: isTransitioning ? 'transform 1.5s ease-in-out' : 'none',
                width: `${(extendedServices.length / itemsToShow) * 100}%`
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedServices.map((service, index) => (
                <div 
                  key={index} 
                  className="px-4"
                  style={{ width: `${100 / extendedServices.length}%` }}
                >
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default App;
