import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const SLIDE_DURATION = 6000;

const SLIDES = [
  {
    id: "diamond-cluster",
    type: "grid",
    images: [
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: "city-panorama",
    type: "full",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=2000",
  },
];

const DiamondGrid = ({ images }) => {
  return (
    <div className="absolute top-1/2 right-[-60%] sm:right-[-50%] md:right-[-25%] lg:right-[-10%] xl:right-0 transform -translate-y-1/2 translate-x-[20%] md:translate-x-[10%] rotate-45 w-[40vh] h-[40vh] sm:w-[60vh] sm:h-[60vh] md:w-[85vh] md:h-[85vh] lg:w-[110vh] lg:h-[110vh] z-0 transition-transform duration-1000">
      <div className="grid grid-cols-2 gap-2 md:gap-4 w-full h-full p-2 md:p-4 bg-[#002840]/50 backdrop-blur-sm rounded-lg shadow-2xl">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-full overflow-hidden rounded-md bg-gray-900 group"
          >
            <div className="absolute inset-[-50%] transform rotate-[-45deg] scale-[1.45] transition-transform duration-[2000ms] ease-out group-hover:scale-[1.55]">
              <img
                src={src}
                alt={`Grid element ${index}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#002840]/20 mix-blend-multiply" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const FullBackground = ({ image }) => (
  <div className="absolute inset-0 w-full h-full">
    <motion.img
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 6, ease: "linear" }}
      src={image}
      alt="Background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-[#002840]/40 mix-blend-multiply" />
  </div>
);

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] bg-[#002840] overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.div
          key={SLIDES[currentSlide].id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100, transition: { duration: 0.8 } }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full z-0"
        >
          {SLIDES[currentSlide].type === "grid" ? (
            <>
              <div className="absolute inset-0 bg-[#002840]" />
              <DiamondGrid images={SLIDES[currentSlide].images} />
            </>
          ) : (
            <FullBackground image={SLIDES[currentSlide].image} />
          )}
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#002840] via-[#002840]/90 to-transparent pointer-events-none" />

      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${currentSlide}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <h1 className="whitespace-normal md:whitespace-nowrap text-[#FFC20E] text-3xl sm:text-5xl lg:text-5xl font-bold leading-tight mb-4 drop-shadow-lg tracking-tight">
                  Strategic Scale. Sustainable Growth.
                </h1>

                <h2 className="text-white text-xl sm:text-3xl lg:text-5xl font-bold mb-8 drop-shadow-lg">
                  Proven Leadership.
                </h2>

                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#FFD040" }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-2 bg-[#FFC20E] text-[#002840] text-base md:text-lg font-bold px-6 py-2 md:px-8 md:py-3 rounded-md shadow-[0_4px_14px_0_rgba(255,194,14,0.39)] transition-colors"
                >
                  Contact Now
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 md:bottom-12 left-6 md:left-20 z-30 flex items-center space-x-3">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="group relative h-2 rounded-full transition-all duration-500 ease-in-out overflow-hidden"
            style={{
              width: currentSlide === index ? "48px" : "16px",
              backgroundColor:
                currentSlide === index ? "#FFC20E" : "rgba(255,255,255,0.3)",
            }}
          >
            <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
