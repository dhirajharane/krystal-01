import React from "react";

const Info = () => {
  return (
    <div className="bg-[#FFFFFF] py-16 px-4">
      <div className="w-full bg-[#1B1B1B] py-12 px-6 md:px-12 lg:px-20 font-sans">
        <div className="max-w-7xl mx-auto">
          <p className="text-white text-base md:text-lg leading-relaxed mb-8 font-normal tracking-wide">
            Kesari Security Groups provides high-quality, reliable, and
            disciplined security services tailored for modern organizations.
            With a trained workforce, strict compliance standards, and fast
            deployment capabilities, we deliver complete protection for
            corporate offices, industrial plants, residential societies,
            warehouses, and commercial establishments.
          </p>

          <button
            className="
              text-white 
              text-sm md:text-base 
              font-medium 
              py-2.5 px-6 
              border border-white 
              rounded-md 
              bg-transparent 
              hover:bg-[#C9A032] hover:text-[#000000] 
              transition-colors duration-300 
              ease-in-out
              cursor-pointer
            "
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
