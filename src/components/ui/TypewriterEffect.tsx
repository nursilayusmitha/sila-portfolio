"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

const TypewriterEffect = ({
  positions,
  className,
}: {
  positions: string[];
  className?: string;
}) => {
  const [currentPositionIndex, setCurrentPositionIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  useEffect(() => {
    const currentPosition = positions[currentPositionIndex];
    
    const timer = setTimeout(() => {
      if (isDeleting) {
        if (currentText.length > 0) {
          setCurrentText(currentPosition.substring(0, currentText.length - 1));
          setTypingSpeed(100);
        } else {
          setIsDeleting(false);
          setCurrentPositionIndex((prev) => (prev + 1) % positions.length);
          setTypingSpeed(150);
        }
      } else {
        if (currentText.length < currentPosition.length) {
          setCurrentText(currentPosition.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000); // Jeda sebelum mulai menghapus
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPositionIndex, positions, typingSpeed]);

  return (
    <motion.div 
      className={cn("font-pixelify", className)}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {currentText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="ml-1"
      >
        |
      </motion.span>
    </motion.div>
  );
};

export default TypewriterEffect;