import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const AnimatedCounter = ({ value, suffix = "", colorClass }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const motionValue = useSpring(0, {
    damping: 30,
    stiffness: 100,
    duration: 2
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  const displayValue = useTransform(motionValue, (latest) => {
    const rounded = Math.floor(latest);
    return rounded.toLocaleString('en-US');
  });

  return (
    <span ref={ref} className={`font-medium ${colorClass}`}>
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
};

const AchievementsSection = () => {
  const achievements = [
    {
      id: 1,
      value: 42800,
      suffix: "+",
      label: "Employees",
      color: "text-[#fab005]",
    },
    {
      id: 2,
      value: 325,
      suffix: "+",
      label: "Clients",
      color: "text-[#2ca04b]",
    },
    {
      id: 3,
      value: 30,
      suffix: "+",
      label: "Branches",
      color: "text-[#fab005]",
    },
    {
      id: 4,
      value: 24,
      suffix: "+",
      label: "Total Years",
      color: "text-[#2ca04b]",
    },
  ];

  return (
    <section className="w-full py-16 bg-[#eff1f3] flex flex-col items-center justify-center font-sans">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-5xl font-bold text-[#1a1a4b] mb-12 sm:mb-20 tracking-tight"
        >
          Our Achievements
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {achievements.map((item, index) => (
            <div key={item.id} className="flex flex-col items-center gap-1">
              <div className="text-5xl md:text-6xl tracking-tight leading-none">
                <AnimatedCounter 
                  value={item.value} 
                  suffix={item.suffix} 
                  colorClass={item.color} 
                />
              </div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                className="text-[#1a1a4b] text-xl md:text-2xl font-normal mt-2"
              >
                {item.label}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="bg-white">
      <AchievementsSection />
    </div>
  );
}
