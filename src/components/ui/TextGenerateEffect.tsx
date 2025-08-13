// components/ui/TextGenerateEffect.tsx
"use client";
import React, { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
  highlightIndices = [],
  highlightClass = ""
}: {
  words: string;
  className?: string;
  highlightIndices?: number[];
  highlightClass?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  // Perubahan pada fungsi renderWords
const renderWords = () => {
  return (
    <motion.div ref={scope} className="whitespace-nowrap">
      {wordsArray.map((word, idx) => {
        const isHighlighted = highlightIndices.includes(idx);
        return (
          <motion.span
            key={word + idx}
            className={cn(
              "opacity-0 inline-block mr-2", // Tambahkan margin kanan di sini
              isHighlighted ? highlightClass : "dark:text-white text-black"
            )}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

  return (
    <div className={cn("font-pressstart", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};