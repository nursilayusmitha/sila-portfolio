import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';

const PreviewWorkModal = ({ images, currentIndex, onClose }: any) => {
  const [current, setCurrent] = useState(currentIndex);
  const [direction, setDirection] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);
  
  // Sound references
  const clickSoundRef = useRef<HTMLAudioElement | null>(null);
  const closeSoundRef = useRef<HTMLAudioElement | null>(null);

  // Initialize sounds
  useEffect(() => {
    if (typeof window !== 'undefined') {
      clickSoundRef.current = new Audio("/sounds/click.wav");
      clickSoundRef.current.preload = "auto";
      closeSoundRef.current = new Audio("/sounds/click-close.wav");
      closeSoundRef.current.preload = "auto";
    }
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === ' ') setIsZoomed(!isZoomed);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isZoomed]);

  const playSound = (soundRef: React.MutableRefObject<HTMLAudioElement | null>) => {
    if (soundRef.current) {
      soundRef.current.currentTime = 0;
      soundRef.current.play().catch(e => console.error("Error playing sound:", e));
    }
  };

  const handleClose = () => {
    playSound(closeSoundRef);
    onClose();
  };

  const prev = () => {
  playSound(clickSoundRef);
  setDirection(-1);
  setCurrent((i: number) => (i === 0 ? images.length - 1 : i - 1)); // ✅ tambahkan : number
};

const next = () => {
  playSound(clickSoundRef);
  setDirection(1);
  setCurrent((i: number) => (i === images.length - 1 ? 0 : i + 1)); // ✅ tambahkan : number
};


  // Handle swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const diffX = startX - endX;
    const diffY = startY - endY;

    // Horizontal swipe takes priority
    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 50) next();
      if (diffX < -50) prev();
    }
  };

  // Handle double click zoom
  const handleDoubleClick = (e: React.MouseEvent) => {
    if (!imgRef.current) return;
    
    const img = imgRef.current;
    const rect = img.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    
    if (isZoomed) {
      img.style.transformOrigin = 'center center';
      img.style.transform = 'scale(1)';
    } else {
      img.style.transformOrigin = `${offsetX}px ${offsetY}px`;
      img.style.transform = 'scale(2)';
    }
    
    setIsZoomed(!isZoomed);
  };

  // Handle wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    if (!imgRef.current) return;
    
    const img = imgRef.current;
    const delta = Math.sign(e.deltaY);
    
    if (delta > 0 && isZoomed) {
      img.style.transform = 'scale(1)';
      setIsZoomed(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-[99999]"
      onClick={handleClose}
    >
      <div 
        className="relative w-full h-full flex items-center justify-center"
        onClick={e => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheel}
      >
        <button 
          onClick={handleClose} 
          className="absolute top-4 right-4 text-white text-3xl p-2 rounded-full hover:bg-white hover:bg-opacity-20 z-10 transition-colors"
          aria-label="Close preview"
        >
          <FiX />
        </button>
        
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <img 
              ref={imgRef}
              src={images[current]} 
              alt={`Preview ${current+1}`} 
              className={`max-w-[90vw] max-h-[90vh] object-contain cursor-${isZoomed ? 'grab' : 'zoom-in'}`}
              onDoubleClick={handleDoubleClick}
            />
          </motion.div>
        </AnimatePresence>
        
        <button 
          onClick={(e) => { e.stopPropagation(); prev(); }} 
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl p-2 rounded-full hover:bg-white hover:bg-opacity-20 z-10 transition-colors md:left-8"
          aria-label="Previous image"
        >
          <FiChevronLeft />
        </button>
        
        <button 
          onClick={(e) => { e.stopPropagation(); next(); }} 
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl p-2 rounded-full hover:bg-white hover:bg-opacity-20 z-10 transition-colors md:right-8"
          aria-label="Next image"
        >
          <FiChevronRight />
        </button>
        
        <div className="absolute bottom-4 left-0 right-0 text-center">
          <span className="bg-black bg-opacity-70 text-white text-sm px-3 py-1 rounded-full">
            {current + 1} / {images.length}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default PreviewWorkModal;