"use client";
import React, { useState, useRef, useEffect } from "react";
import { FiChevronLeft, FiChevronRight, FiZoomIn, FiZoomOut, FiCalendar, FiMove } from "react-icons/fi";
import { Dialog } from "@headlessui/react";
import Image from "next/image";

type Certificate = {
  id: number;
  imageUrl: string;
  shortTitle: string;
  title: string;
  description: string;
  date: string;
  companyLogo: string;
  companyName: string;
  issueDate: string;
  validity: string;
};

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificate: Certificate;
  onNext: () => void;
  onPrev: () => void;
}

const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  certificate,
  onNext,
  onPrev,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [closeSound, setCloseSound] = useState<HTMLAudioElement | null>(null);
  const [flipSound, setFlipSound] = useState<HTMLAudioElement | null>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Memuat suara saat komponen dimount
    if (typeof window !== 'undefined') {
      const close = new Audio("/sounds/mouse-click-close.mp3");
      close.preload = "auto";
      const flip = new Audio("/sounds/page-flip.mp3");
      flip.preload = "auto";
      
      setCloseSound(close);
      setFlipSound(flip);
    }
  }, []);

  const toggleZoom = () => {
    if (!isZoomed) {
      setIsZoomed(true);
      setPosition({ x: 0, y: 0 });
    } else {
      setIsZoomed(false);
      setPosition({ x: 0, y: 0 });
    }
  };

  // Fungsi untuk memulai drag (mouse dan touch)
  const startDrag = (clientX: number, clientY: number) => {
    if (!isZoomed) return;
    
    setIsDragging(true);
    setStartPos({
      x: clientX - position.x,
      y: clientY - position.y
    });
    
    if (imageRef.current) {
      imageRef.current.style.cursor = "grabbing";
    }
  };

  // Fungsi untuk menggerakkan drag (mouse dan touch)
  const moveDrag = (clientX: number, clientY: number) => {
    if (!isDragging || !isZoomed) return;
    
    const newX = clientX - startPos.x;
    const newY = clientY - startPos.y;
    
    // Batasi pergeseran agar tidak keluar dari container
    if (containerRef.current && imageRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const imageRect = imageRef.current.getBoundingClientRect();
      const scale = 2; // Sesuai dengan skala saat di-zoom
      
      // Hitung batas pergeseran maksimal
      const maxX = (imageRect.width * scale - containerRect.width) / 2;
      const maxY = (imageRect.height * scale - containerRect.height) / 2;
      
      const boundedX = Math.max(Math.min(newX, maxX), -maxX);
      const boundedY = Math.max(Math.min(newY, maxY), -maxY);
      
      setPosition({ x: boundedX, y: boundedY });
    } else {
      setPosition({ x: newX, y: newY });
    }
  };

  // Event handlers untuk mouse
  const handleMouseDown = (e: React.MouseEvent) => startDrag(e.clientX, e.clientY);
  
  const handleMouseMove = (e: React.MouseEvent) => moveDrag(e.clientX, e.clientY);
  
  const handleMouseUp = () => {
    setIsDragging(false);
    if (imageRef.current) {
      imageRef.current.style.cursor = isZoomed ? "grab" : "zoom-in";
    }
  };

  // Event handlers untuk touch
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    if (e.touches.length === 1) {
      startDrag(e.touches[0].clientX, e.touches[0].clientY);
    }
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    if (e.touches.length === 1) {
      moveDrag(e.touches[0].clientX, e.touches[0].clientY);
    }
  };
  
  const handleTouchEnd = () => {
    setIsDragging(false);
    if (imageRef.current) {
      imageRef.current.style.cursor = isZoomed ? "grab" : "zoom-in";
    }
  };

  // Reset state saat modal ditutup
  useEffect(() => {
    if (!isOpen) {
      setIsZoomed(false);
      setPosition({ x: 0, y: 0 });
    }
  }, [isOpen]);

  // Reset posisi saat berpindah sertifikat
  useEffect(() => {
    if (isZoomed) {
      setPosition({ x: 0, y: 0 });
    }
  }, [certificate, isZoomed]);

  // Fungsi untuk menutup modal dengan suara
  const handleClose = () => {
    if (closeSound) {
      closeSound.currentTime = 0;
      closeSound.play().catch(e => console.error("Error playing close sound:", e));
    }
    onClose();
  };

  // Fungsi untuk navigasi prev dengan suara
  const handlePrev = () => {
    if (flipSound) {
      flipSound.currentTime = 0;
      flipSound.play().catch(e => console.error("Error playing flip sound:", e));
    }
    onPrev();
  };

  // Fungsi untuk navigasi next dengan suara
  const handleNext = () => {
    if (flipSound) {
      flipSound.currentTime = 0;
      flipSound.play().catch(e => console.error("Error playing flip sound:", e));
    }
    onNext();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="relative bg-white dark:bg-slate-800 text-black dark:text-white rounded-lg shadow-lg max-w-2xl w-full p-6">
          {/* Gambar dengan fitur zoom dan pan */}
          <div 
            ref={containerRef}
            className="relative w-full h-64 sm:h-80 md:h-96 rounded overflow-hidden group touch-pan-y"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              ref={imageRef}
              src={certificate.imageUrl}
              alt={certificate.title}
              className="w-full h-full object-contain transition-transform duration-300 select-none touch-none"
              style={{
                transform: isZoomed 
                  ? `scale(2) translate(${position.x}px, ${position.y}px)` 
                  : 'scale(1)',
                cursor: isZoomed ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in'
              }}
              onClick={(e) => {
                // Hanya toggle zoom jika tidak sedang drag
                if (!isDragging) toggleZoom();
              }}
              onMouseDown={handleMouseDown}
              draggable="false"
            />
            
            {/* Tombol Zoom */}
            <button
              onClick={toggleZoom}
              className="absolute top-3 right-3 bg-white/80 dark:bg-slate-700/80 hover:bg-white dark:hover:bg-slate-600 p-2 rounded-full shadow transition-opacity opacity-0 group-hover:opacity-100 z-10"
              aria-label={isZoomed ? "Zoom out" : "Zoom in"}
            >
              {isZoomed ? (
                <FiZoomOut className="w-5 h-5 text-black dark:text-white" />
              ) : (
                <FiZoomIn className="w-5 h-5 text-black dark:text-white" />
              )}
            </button>
            
            {/* Petunjuk drag saat zoom */}
            {isZoomed && (
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex items-center bg-black/60 text-white px-3 py-1 rounded-full text-xs">
                <FiMove className="mr-1" /> Drag to move
              </div>
            )}
          </div>

          {/* Konten */}
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-2">{certificate.title}</h2>
            <p className="text-sm mb-4 text-gray-600 dark:text-gray-300">{certificate.description}</p>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t pt-4 gap-4">
              <div className="flex items-center">
                <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
                  <Image
                    src={certificate.companyLogo}
                    alt={certificate.companyName}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-medium">{certificate.companyName}</span>
              </div>
              
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <FiCalendar className="mr-2 flex-shrink-0" />
                <div className="text-left">
                  <div>Issued : {certificate.issueDate}</div>
                  <div>Valid &nbsp; : {certificate.validity}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tombol navigasi */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-black dark:text-white bg-white/80 dark:bg-slate-700/80 hover:bg-white dark:hover:bg-slate-600 p-2 rounded-full shadow z-10"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-black dark:text-white bg-white/80 dark:bg-slate-700/80 hover:bg-white dark:hover:bg-slate-600 p-2 rounded-full shadow z-10"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>

          {/* Tombol Close */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm bg-white/80 dark:bg-slate-700/80 rounded-full w-8 h-8 flex items-center justify-center z-10"
            aria-label="Close"
          >
            ✕
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default CertificateModal;