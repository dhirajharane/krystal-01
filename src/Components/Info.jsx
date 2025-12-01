import React from 'react';

const Info = () => {
  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="w-full bg-[#009FE3] py-12 px-6 md:px-12 lg:px-20 font-sans">
        <div className="max-w-7xl mx-auto">
          <p className="text-white text-base md:text-lg leading-relaxed mb-8 font-normal tracking-wide">
            Krystal Integrated Services Ltd. is one of India’s fastest-growing and leading Integrated Facility 
            Management Services (IFMS) company, recognized for delivering sustainable, tech-supported 
            solutions across sectors including healthcare, education, infrastructure, and waste management. 
            Backed by 25 years of industry expertise, we help organizations optimize costs, boost operational 
            efficiency, ensure compliance, and drive sustainability—enabling them to focus confidently on 
            their core objectives.
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
              hover:bg-white hover:text-[#009FE3] 
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
