import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FiX } from 'react-icons/fi';
import PreviewWorkModal from "./PreviewWorkModal";

// YouTube ID extractor function
const getYouTubeId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const WorkDetailModal = ({ item, onClose }: any) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(0);
  // New states for video handling
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [fullscreenVideo, setFullscreenVideo] = useState(false);
  
  const images = item.images;
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  // Sound effect references
  const openSoundRef = useRef<HTMLAudioElement | null>(null);

  // Initialize sound effects
  useEffect(() => {
    if (typeof window !== 'undefined') {
      openSoundRef.current = new Audio("/sounds/click-open.wav");
      openSoundRef.current.preload = "auto";
    }
  }, []);

  const openPreview = (index: number) => {
    // Play open sound if available
    if (openSoundRef.current) {
      openSoundRef.current.currentTime = 0;
      openSoundRef.current.play().catch(e => console.error("Error playing preview open sound:", e));
    }
    setPreviewIndex(index);
    setPreviewOpen(true);
  };

  // Close fullscreen video when modal closes
  useEffect(() => {
    if (!item) {
      setFullscreenVideo(false);
      setIsVideoPlaying(false);
    }
  }, [item]);

  // Handle isolated scroll areas
  useEffect(() => {
    const textArea = textRef.current;
    const imageArea = imageRef.current;

    const preventParentScroll = (e: WheelEvent | TouchEvent) => {
      e.stopPropagation();
    };

    if (textArea) {
      textArea.addEventListener('wheel', preventParentScroll);
      textArea.addEventListener('touchmove', preventParentScroll, { passive: false });
    }

    if (imageArea) {
      imageArea.addEventListener('wheel', preventParentScroll);
      imageArea.addEventListener('touchmove', preventParentScroll, { passive: false });
    }

    return () => {
      if (textArea) {
        textArea.removeEventListener('wheel', preventParentScroll);
        textArea.removeEventListener('touchmove', preventParentScroll);
      }
      if (imageArea) {
        imageArea.removeEventListener('wheel', preventParentScroll);
        imageArea.removeEventListener('touchmove', preventParentScroll);
      }
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-2"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          exit={{ y: 50 }}
          className="bg-white dark:bg-gray-900 border border-[#28bdfc] rounded-xl 768:rounded-2xl w-full max-w-[90%] max-h-[85vh] overflow-hidden flex flex-col
                     400:max-w-[24rem] 576:max-w-[28rem] 768:max-w-[32rem] 1300:max-w-[36rem]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-2 400:p-3 576:p-4 border-b border-[#28bdfc] bg-[#28bdfc] dark:bg-black flex justify-between items-center">
            <h2 className="text-base 400:text-lg 576:text-xl 768:text-2xl font-bold text-purple-600 dark:text-purple-400 truncate max-w-[75%]">
              {item.title}
            </h2>
            <button onClick={onClose} className="text-gray-700 dark:text-gray-200 hover:text-red-500 text-lg 400:text-xl">
              <FiX />
            </button>
          </div>
          
          <div className="p-2 400:p-3 576:p-4 flex-1 flex flex-col 768:flex-row gap-3 400:gap-4 576:gap-6 overflow-hidden">
            {/* Deskripsi & Detail */}
            <div className="flex-1 flex flex-col overflow-hidden">
              <div 
                ref={textRef}
                className="overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-purple-300 dark:scrollbar-thumb-purple-700 scrollbar-track-transparent overscroll-contain"
              >
                <h3 className="text-sm 400:text-base 576:text-lg font-semibold text-gray-700 dark:text-white">Description</h3>
                <p className="text-xs 400:text-sm 576:text-base text-gray-600 dark:text-gray-200 mb-2 400:mb-3 576:mb-4 whitespace-pre-line">
                  {item.desc}
                </p>
                
                {item.link && (
                  <div className="mb-2 400:mb-3 576:mb-4">
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs 400:text-sm 576:text-base text-purple-600 dark:text-white hover:underline inline-flex items-center"
                    >
                      View Project ↗
                    </a>
                  </div>
                )}
                {item.link2 && (
                  <div className="mb-2 400:mb-3 576:mb-4">
                    <a 
                      href={item.link2} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs 400:text-sm 576:text-base text-purple-600 dark:text-white hover:underline inline-flex items-center"
                    >
                      View Project Frontend ↗
                    </a>
                  </div>
                )}
                {item.link3 && (
                  <div className="mb-2 400:mb-3 576:mb-4">
                    <a 
                      href={item.link3} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs 400:text-sm 576:text-base text-purple-600 dark:text-white hover:underline inline-flex items-center"
                    >
                      View Project Backend ↗
                    </a>
                  </div>
                )}
                {item.link4 && (
                  <div className="mb-2 400:mb-3 576:mb-4">
                    <a 
                      href={item.link4} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs 400:text-sm 576:text-base text-purple-600 dark:text-white hover:underline inline-flex items-center"
                    >
                      View on Youtube ↗
                    </a>
                  </div>
                )}
                
                <h3 className="text-sm 400:text-base 576:text-lg font-semibold text-gray-700 dark:text-white">Duration</h3>
                <p className="text-xs 400:text-sm 576:text-base text-gray-600 dark:text-gray-200 mb-2 400:mb-3 576:mb-4">{item.time}</p>
                <h3 className="text-sm 400:text-base 576:text-lg font-semibold text-gray-700 dark:text-white">Tools</h3>
                <div className="flex flex-wrap gap-1 400:gap-2">
                  {item.tools.map((t: string, i: number) => (
                    <span key={i} className="text-[10px] 400:text-xs 576:text-sm bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200 px-1.5 py-0.5 400:px-2 400:py-1 576:px-3 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Area Gambar/Video */}
            <div className="flex-1 flex flex-col min-h-[150px] 400:min-h-[180px] 576:min-h-[220px] mt-2 400:mt-3 576:mt-0">
              <div 
                ref={imageRef}
                className="overflow-y-auto scrollbar-thin scrollbar-thumb-purple-300 dark:scrollbar-thumb-purple-700 scrollbar-track-transparent overscroll-contain"
              >
                {item.videoyoutube ? (
                  // Video area
                  <div className="relative">
                    {!fullscreenVideo ? (
                      <div 
                        className="relative aspect-video bg-gray-100 dark:bg-gray-800 rounded-md 400:rounded-lg overflow-hidden cursor-pointer"
                        onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                        onDoubleClick={() => setFullscreenVideo(true)}
                      >
                        {!isVideoPlaying ? (
                          <>
                            <img 
                              src={`https://img.youtube.com/vi/${getYouTubeId(item.videoyoutube)}/0.jpg`} 
                              alt="YouTube Thumbnail"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-black bg-opacity-50 rounded-full p-3">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                          </>
                        ) : (
                          <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${getYouTubeId(item.videoyoutube)}?autoplay=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        )}
                      </div>
                    ) : (
                      <div className="fixed inset-0 z-[99999] bg-black flex items-center justify-center">
                        <div className="relative w-full h-full max-w-4xl max-h-[80vh]">
                          <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${getYouTubeId(item.videoyoutube)}?autoplay=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                          <button 
                            onClick={() => setFullscreenVideo(false)}
                            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2"
                          >
                            <FiX className="text-xl" />
                          </button>
                          <a 
                            href={item.videoyoutube} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute bottom-4 right-4 text-white bg-red-600 rounded-full p-2 flex items-center"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  // Original image grid
                  <div className="grid grid-cols-2 gap-2 400:gap-3">
                    {(images || []).map((img: string, i: number) => (
                      <div 
                        key={i} 
                        className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-md 400:rounded-lg overflow-hidden cursor-pointer"
                        onClick={() => openPreview(i)}
                      >
                        <img 
                          src={img} 
                          alt={`Preview ${i+1}`} 
                          className="w-full h-full object-cover transition-transform hover:scale-105" 
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {previewOpen && (
        <PreviewWorkModal 
          images={images} 
          currentIndex={previewIndex} 
          onClose={() => setPreviewOpen(false)} 
        />
      )}
    </>
  );
};

export default WorkDetailModal;