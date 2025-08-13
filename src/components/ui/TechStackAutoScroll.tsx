import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface TechStack {
  icon: string;
  name: string;
}

const TechStackAutoScroll = ({ techStacks }: { techStacks: TechStack[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const scroll = () => {
      if (container.scrollTop >= container.scrollHeight / 2) {
        container.scrollTop = 0;
      } else {
        container.scrollTop += 1;
      }
    };
    
    const interval = setInterval(scroll, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="h-[200px] overflow-y-auto scrollbar-hidden"
      style={{ scrollBehavior: "smooth" }}
    >
      {[...techStacks, ...techStacks].map((tech, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="flex items-center bg-white rounded-lg p-3 mb-4 shadow-lg"
        >
          <img 
            src={tech.icon} 
            alt={tech.name} 
            className="w-8 h-8 mr-3" 
          />
          <span className="text-black font-medium">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default TechStackAutoScroll;