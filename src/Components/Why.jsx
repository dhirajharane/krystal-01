import React from 'react';
import { PieChart, Boxes, Database, Wallet } from 'lucide-react';

const WhyKrystalSection = () => {
  const colors = {
    bg: '#009fe3',
    dark: '#002a54',
    text: '#ffffff',
  };

  const features = [
    {
      icon: <PieChart size={64} strokeWidth={1.5} color={colors.dark} />,
      title: "Comprehensive, Integrated Approach",
      description: "We connect frontline teams to strategic objectives, fostering collaboration, operational excellence, and sustainability accountability across every level."
    },
    {
      icon: <Boxes size={64} strokeWidth={1.5} color={colors.dark} />,
      title: "Tailored Solutions with Sector-Specific Impact",
      description: "Recognizing the unique demands of each sector, we craft customized service packages that address operational, compliance, and sustainability goals—delivering measurable, impactful results"
    },
    {
      icon: <Database size={64} strokeWidth={1.5} color={colors.dark} />,
      title: "Proven Expertise in Critical Environments",
      description: "From healthcare to aviation and commercial spaces, our expert professionals and agile leadership bring deep domain knowledge combined with industry best practices for operational excellence"
    },
    {
      icon: <Wallet size={64} strokeWidth={1.5} color={colors.dark} />,
      title: "Smart Cost Optimization",
      description: "Through strategic resource planning, vendor management, and tech-driven workflows, we optimize costs while upholding quality, and compliance standards"
    }
  ];

  return (
    <div 
      className="w-full py-16 px-4 md:px-8 lg:px-16 flex flex-col justify-center items-center font-sans"
      style={{ backgroundColor: colors.bg }}
    >
      <div className="max-w-7xl w-full">
        <div className="mb-8 text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: colors.text }}>
            Why Krystal
          </h2>
          <p className="text-lg md:text-xl font-medium opacity-95" style={{ color: colors.text }}>
            Partnering for Performance. Driven by Innovation, Built on Trust.
          </p>
        </div>

        <div className="border border-solid" style={{ borderColor: colors.dark }}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {features.map((feature, index) => {
              const isLast = index === features.length - 1;
              const isSecondLast = index === features.length - 2;
              
              let borderClasses = "";
              if (!isLast) borderClasses += "border-b ";
              if (index % 2 === 0) borderClasses += "md:border-r ";
              if (index < 2) {
                borderClasses += "md:border-b "; 
              } else {
                if (index === 2) borderClasses += "md:border-b-0 ";
              }
              if (isLast) borderClasses = "";

              return (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row items-start p-8 md:p-10 ${borderClasses}`}
                  style={{ borderColor: colors.dark }}
                >
                  <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: colors.text }}>
                      {feature.title}
                    </h3>
                    <p className="text-base md:text-[17px] leading-relaxed opacity-95" style={{ color: colors.text }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <button 
            className="px-8 py-3 text-lg font-medium transition-colors duration-300 hover:bg-opacity-10 hover:bg-black"
            style={{ 
              border: `2px solid ${colors.dark}`, 
              color: colors.dark 
            }}
          >
            View more
          </button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="font-sans">
      <WhyKrystalSection />
    </div>
  );
};

export default App;
