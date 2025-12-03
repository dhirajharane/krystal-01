import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="flex flex-col h-full bg-[#000000] group border border-transparent hover:bg-[#1B1B1B] transition-colors p-3">
      <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-4000 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col flex-grow pt-6 pb-4 pr-4">
        <h3 className="text-[#FFFFFF] font-bold text-lg leading-tight mb-3 min-h-[48px]">
          {title}
        </h3>

        <p className="text-[#FFFFFF] text-[15px] leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        <div>
          <button className="px-6 py-2 border border-[#C9A032] text-[#FFFFFF] text-sm font-medium rounded hover:bg-[#FFFFFF] hover:text-black transition-colors duration-300">
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
      title: "Manned Guarding",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600",
      description:
        "Professional security guards for corporate, industrial, commercial, and residential sites...",
    },
    {
      title: "Corporate Security",
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
      description:
        "Reception management, access control, visitor handling, and general office security...",
    },
    {
      title: "Private Security",
      image:
        "https://images.unsplash.com/photo-1595666944516-bbb485958fb5?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Licensed security professionals deployed across various states provide access control, surveillance, patrols, and rapid emergency response—all operated with...",
    },
    {
      title: "Residential Security",
      image:
        "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop",
      description:
        "Society gate management, patrolling, visitor screening, emergency handling...",
    },
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
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
    <div className="bg-[#FFFFFF] font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-[#000000] text-4xl font-bold mb-3 tracking-tight">
            Our Services
          </h1>
          <h2 className="text-[#000000] text-lg font-semibold tracking-normal">
            Integrated Solutions for Efficiency, Sustainability & Compliance
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
              transition: isTransitioning
                ? "transform 1.5s ease-in-out"
                : "none",
              width: `${(extendedServices.length / itemsToShow) * 100}%`,
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
