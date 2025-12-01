import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUp } from 'lucide-react';

const BRAND_COLORS = {
  navy: '#1a237e',
  pink: '#d81b60',
  textDark: '#333333',
  textLight: '#546e7a',
  bgLight: '#f8f9fa',
};

const BLOG_DATA = [
  {
    id: 1,
    title: "Best facility management services in India",
    excerpt: "At Krystal Group, Facility management services is an integral aspect of modern business operations, ensuring smooth functioning and optimal utilization of assets. In India, where...",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
    label: "BEST FACILITY MANAGEMENT",
  },
  {
    id: 2,
    title: "What is Manned Guarding and how can it help your...",
    excerpt: "Krystal Group is one of the most proactive security steps you can take to deter crime is manned guarding, which is a very efficient approach to remove theft and criminal damage...",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600",
    label: "MANNED GUARDING",
  },
  {
    id: 3,
    title: "Enhance Efficiency with Krystal Facility...",
    excerpt: "Nowadays, Facility Management Services businesses are constantly striving to optimize their operations and maximize productivity. Right from managing facilities to ensuring a co...",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
    label: "ENHANCE EFFICIENCY",
  },
  {
    id: 4,
    title: "The Future of Smart Corporate Security",
    excerpt: "Implementing AI-driven surveillance and automated access control systems is revolutionizing how we perceive corporate safety. Learn how modern tech is reshaping the industry...",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600",
    label: "SMART SECURITY",
  },
  {
    id: 5,
    title: "Sustainable Cleaning Practices for 2025",
    excerpt: "Green cleaning is no longer just a trend but a necessity. Discover how eco-friendly products and water-saving techniques are becoming the standard in facility care...",
    image: "https://images.unsplash.com/photo-1515344905723-babc01aac23d?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "SUSTAINABILITY",
  },
];

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white rounded-sm shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1)] overflow-hidden h-full flex flex-col transition-transform hover:-translate-y-1 duration-300 border border-gray-100">
      <div className="relative h-48 w-full overflow-hidden group">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/20 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 
          className="text-xl font-bold mb-3 leading-tight line-clamp-2 min-h-[3.5rem]"
          style={{ color: BRAND_COLORS.textDark }}
        >
          {post.title}
        </h3>
        <p 
          className="text-sm mb-6 leading-relaxed line-clamp-4 flex-grow"
          style={{ color: BRAND_COLORS.textLight }}
        >
          {post.excerpt}
        </p>
        
        <div className="mt-auto pt-2">
          <button 
            className="px-6 py-2 bg-white border transition-colors duration-300 text-sm font-medium hover:bg-pink-50"
            style={{ 
              borderColor: BRAND_COLORS.pink, 
              color: BRAND_COLORS.pink 
            }}
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

const CarouselControls = ({ onPrev, onNext }) => (
  <>
    <button
      onClick={onPrev}
      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-lg focus:outline-none hidden lg:flex"
      style={{ backgroundColor: '#111827' }} 
      aria-label="Previous slide"
    >
      <ChevronLeft className="w-6 h-6 text-white" />
    </button>
    
    <button
      onClick={onNext}
      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-lg focus:outline-none hidden lg:flex"
      style={{ backgroundColor: '#111827' }}
      aria-label="Next slide"
    >
      <ChevronRight className="w-6 h-6 text-white" />
    </button>
  </>
);

export default function Blogs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [isResetting, setIsResetting] = useState(false);
  const autoSlideInterval = useRef(null);

  const extendedData = [...BLOG_DATA, ...BLOG_DATA];
  const totalLength = BLOG_DATA.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
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
    }, 6000);
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

  const goToSlide = (idx) => {
    setCurrentIndex(idx);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 relative pb-20">
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-5xl font-bold tracking-tight"
            style={{ color: BRAND_COLORS.navy }}
          >
            Blogs & News
          </h2>
        </div>

        <div 
          className="relative px-2 lg:px-4"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          <div className="overflow-hidden py-4 -mx-4 px-4">
            <motion.div
              className="flex gap-6"
              initial={false}
              animate={{ x: `-${currentIndex * (100 / itemsToShow)}%` }}
              transition={{ 
                duration: isResetting ? 0 : 3.5, 
                ease: "easeInOut" 
              }}
              onAnimationComplete={handleAnimationComplete}
              style={{
                width: `${(extendedData.length / itemsToShow) * 100}%` 
              }}
            >
              {extendedData.map((post, index) => (
                <div 
                  key={`${post.id}-${index}`}
                  className="flex-shrink-0 px-2"
                  style={{ width: `calc(${100 / extendedData.length}% - 0px)` }} 
                >
                  <BlogCard post={post} />
                </div>
              ))}
            </motion.div>
          </div>

          <CarouselControls 
            onPrev={prevSlide} 
            onNext={nextSlide} 
          />

        </div>

        <div className="flex justify-center items-center gap-2 mt-8 mb-10">
          {BLOG_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`rounded-full transition-all duration-300 ${
                (currentIndex % totalLength) === idx ? 'w-2 h-2 bg-black' : 'w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <button 
            className="px-10 py-3 bg-white border-2 text-base font-semibold transition-all duration-300 hover:bg-pink-50 hover:scale-105"
            style={{ 
              borderColor: BRAND_COLORS.pink, 
              color: BRAND_COLORS.pink 
            }}
          >
            View All
          </button>
        </div>

      </section>

      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-2xl z-50 cursor-pointer"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </motion.button>

    </div>
  );
}
