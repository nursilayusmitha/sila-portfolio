"use client";

import { cn } from "@/utils/cn";
import React from "react";

export const InfiniteMovingCertificates = ({
  items,
  direction = "left",
  speed = "fast",
  className,
  onCertificateClick,
}: {
  items: {
    id: number;
    imageUrl: string;
    shortTitle: string;
    title: string;
    description: string;
    date: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  className?: string;
  onCertificateClick: (certificate: any) => void;
}) => {
  const duplicatedItems = [...items, ...items, ...items];

  const animationDuration = {
    fast: "20s",
    normal: "40s",
    slow: "80s",
  }[speed];

  return (
    <div
      className={cn(
        "relative z-20 w-full overflow-hidden",
        "mask-gradient",
        className
      )}
    >
      <div
        className="w-full inline-block whitespace-nowrap animate-scroll"
        style={{
          animationDuration,
          animationDirection: direction === "left" ? "normal" : "reverse",
          animationPlayState: "running",
        }}
      >
        <div className="inline-flex gap-8">
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 transition-transform hover:scale-105 flex flex-col"
            >
              <div className="bg-white text-black dark:bg-slate-950 dark:text-white text-center rounded-lg mb-3 px-2 py-1 text-sm md:text-base">
                <span className="font-medium">{item.shortTitle}</span>
              </div>
              <div
                className="relative h-[220px] sm:h-[240px] md:h-[280px] lg:h-[300px] overflow-hidden bg-white rounded-lg cursor-pointer"
                onClick={() => onCertificateClick(item)}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-full w-auto object-contain mx-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};