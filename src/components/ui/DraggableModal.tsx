"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const DraggableModal = ({
  id,
  title,
  items,
  zIndex,
  isActive,
  onClose,
  onFocus,
  onItemClick,
}: any) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  // Kelompokkan item berdasarkan kategori
  const groupedItems = items.reduce((acc: any, item: any) => {
    const cat = item.category || "Uncategorized";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(item);
    return acc;
  }, {});

  // Lebar modal responsif
  const getModalWidth = () => {
    if (windowWidth >= 1000) return "800px";
    if (windowWidth >= 768) return "600px";
    return "70%";
  };

  // Offset posisi
  const getLeftOffset = () => {
    if (windowWidth >= 1000) return `calc(50% - 400px + ${id * 10}px)`;
    if (windowWidth >= 768) return `calc(50% - 300px + ${id * 10}px)`;
    return `calc(50% - 35% + ${id * 10}px)`;
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      onDragStart={onFocus}
      onMouseDown={onFocus}
      className="fixed bg-white dark:bg-gray-900 border border-[#28bdfc] rounded-2xl shadow-2xl overflow-hidden"
      style={{
        top: 100 + id * 10,
        left: getLeftOffset(),
        zIndex,
        cursor: "default",
        width: getModalWidth(),
        maxWidth: isMobile ? "300px" : "90vw",
      }}
      whileDrag={{ cursor: "grabbing" }}
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="bg-[#28bdfc] dark:bg-black px-3 py-2 border-b border-[#28bdfc] flex justify-between items-center select-none">
        <h3
          className={`font-bold text-purple-600 dark:text-purple-400 truncate max-w-[75%] ${
            isMobile ? "text-[0.8rem]" : "text-lg"
          }`}
        >
          {title}
        </h3>
        <button
          onClick={onClose}
          className={`${isMobile ? "text-xl" : "text-2xl"} text-red-500 hover:text-red-300 font-bold dark:font-normal`}
        >
         [ × ]
        </button>
      </div>

      {/* Body - Modified scrollable area */}
      <div
        className={`${isMobile ? "p-1" : "p-3"} bg-white dark:bg-gray-900 overflow-y-auto`}
        style={{
          maxHeight: isMobile ? "350px" : "500px",
        }}
      >
        {Object.entries(groupedItems).map(([cat, arr]: any) => (
          <div key={cat} className="mb-3">
            <h3
              className={`font-bold text-purple-600 dark:text-purple-400 mb-1 border-b border-gray-300 dark:border-[#28bdfc] pb-1 ${
                isMobile ? "text-sm" : "text-base md:text-lg"
              }`}
            >
              {cat}
            </h3>

            {/* Removed scroll wrapper from here */}
            <div
              className={`mt-4 grid grid-cols-2 ${
                !isMobile ? "mt-2 md:grid-cols-3 lg:grid-cols-4" : ""
              } gap-${isMobile ? "1" : "3"}`}
            >
              {arr.map((it: any) => (
                <div
                  key={it.id}
                  onClick={() => onItemClick(it)}
                  className="bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-col cursor-pointer transition-colors hover:bg-purple-100 dark:hover:bg-purple-900"
                >
                  <div className={`flex items-center justify-center ${isMobile ? "p-1" : "p-3"}`}>
                    <div
                      className="relative w-full"
                      style={{
                        paddingBottom: isMobile ? "75%" : "100%",
                      }}
                    >
                      <img
                        src={it.thumbnail}
                        alt={it.title}
                        className="absolute inset-0 w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <h4
                    className={`truncate text-center px-1 pb-${
                      isMobile ? "1" : "2"
                    } ${isMobile ? "text-xs" : "text-sm"} font-semibold text-gray-800 dark:text-gray-200`}
                  >
                    {it.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default DraggableModal;