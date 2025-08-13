import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SVGIcon from "./ui/SVGIcon";
import { faqData } from "@/data";
import faq from "../icons/faq.svg";

// Komponen untuk item FAQ dengan teks responsif dan dark mode
const FaqItem = ({ 
  question, 
  answer,
  onToggle // Prop baru untuk callback toggle
}: { 
  question: string; 
  answer: string;
  onToggle?: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (onToggle) onToggle(); // Panggil callback saat toggle
  };

  return (
    <div 
      className="mb-6 p-4 rounded-xl border border-gray-200 bg-white 
                shadow-sm transition-all
                dark:bg-black-100 dark:border-gray-700"
      onClick={toggleOpen}
    >
      <div className="flex items-start cursor-pointer">
        <div className="mr-3 mt-1 flex-shrink-0">
          <Image
            src={isOpen ? "https://img.icons8.com/ios-filled/50/minus.png" : "https://img.icons8.com/ios-filled/50/plus.png"}
            alt="Toggle"
            width={24}
            height={24}
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 dark:invert"
          />
        </div>
        <div className="w-full">
          {/* Teks pertanyaan responsif */}
          <h3 className="text-lg font-semibold text-gray-800 mb-2
                         dark:text-gray-200
                         768:text-base 900:text-lg 1300:text-xl">
            {question}
          </h3>
          
          <AnimatePresence>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: isOpen ? "auto" : 0, 
                opacity: isOpen ? 1 : 0 
              }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {/* Teks jawaban responsif */}
              <div className="py-2 text-sm text-gray-600 dark:text-gray-300">
                {answer}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  // Ref untuk scrollable container
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Refs untuk efek suara
  const pageFlipSoundRef = useRef<HTMLAudioElement | null>(null);
  const clickSoundRef = useRef<HTMLAudioElement | null>(null);

  // Inisialisasi efek suara
  useEffect(() => {
    pageFlipSoundRef.current = new Audio('/sounds/page-flip.mp3');
    clickSoundRef.current = new Audio('/sounds/click.wav');
    
    // Preload suara
    pageFlipSoundRef.current.load();
    clickSoundRef.current.load();
    
    return () => {
      // Cleanup
      if (pageFlipSoundRef.current) {
        pageFlipSoundRef.current.pause();
        pageFlipSoundRef.current = null;
      }
      if (clickSoundRef.current) {
        clickSoundRef.current.pause();
        clickSoundRef.current = null;
      }
    };
  }, []);

  // Handle scroll untuk mencegah scroll halaman
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    
    if (!scrollContainer) return;
    
    const handleWheel = (e: WheelEvent) => {
      if (!scrollContainer) return;
      
      // Cek apakah user mencoba scroll ke atas saat sudah di paling atas
      const isScrollingUp = e.deltaY < 0;
      const isAtTop = scrollContainer.scrollTop === 0;
      
      // Cek apakah user mencoba scroll ke bawah saat sudah di paling bawah
      const isScrollingDown = e.deltaY > 0;
      const isAtBottom = scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight - 1;
      
      // Jika sudah di batas atas/bawah dan user mencoba scroll melewati batas,
      // cegah scroll agar tidak mempengaruhi halaman utama
      if ((isScrollingUp && isAtTop) || (isScrollingDown && isAtBottom)) {
        e.preventDefault();
      }
      
      // Selalu cegah scroll halaman ketika kursor di area scrollable
      e.stopPropagation();
    };
    
    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      scrollContainer.removeEventListener('wheel', handleWheel);
    };
  }, []);

  // State untuk animasi video interaktif
  const [videoState, setVideoState] = useState<
    'click' | 'load' | 'first' | 'second' | 'last'
  >('click');
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Ref untuk semua video dan container
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const videoContainerRef = useRef<HTMLDivElement>(null);

  // Video sources
  const videoSources = {
    click: "https://nursilayusmitha.github.io/my-assets/Div/click.mp4",
    load: "https://nursilayusmitha.github.io/my-assets/Div/load.mp4",
    first: "https://nursilayusmitha.github.io/my-assets/Div/first.mp4",
    second: "https://nursilayusmitha.github.io/my-assets/Div/second.mp4",
    last: "https://nursilayusmitha.github.io/my-assets/Div/last.mp4"
  };

  // Preload semua video secara agresif
  useEffect(() => {
    Object.entries(videoSources).forEach(([key, src]) => {
      const video = document.createElement('video');
      video.src = src;
      video.preload = 'auto';
      video.load();
      
      // Simpan referensi untuk akses langsung
      videoRefs.current[key] = video;
    });
  }, []);

  // Fungsi bantu untuk state berikutnya
  const getNextState = (current: string): string => {
    switch (current) {
      case 'click': return 'load';
      case 'load': return 'first';
      case 'first': return 'second';
      case 'second': return 'last';
      case 'last': return 'click';
      default: return 'click';
    }
  };

  // Handler untuk perubahan state video (dioptimalkan)
  const handleVideoClick = () => {
    if (isPlaying) return;
    
    // Mainkan suara klik untuk setiap klik yang valid
    if (clickSoundRef.current && videoState !== 'last') {
      clickSoundRef.current.currentTime = 0;
      clickSoundRef.current.play().catch(e => console.error("Click sound error:", e));
    }
    
    const nextState = getNextState(videoState);
    setVideoState(nextState);
    setIsPlaying(true);
    
    // Akses video langsung dari ref
    const currentVideo = videoRefs.current[videoState];
    const nextVideo = videoRefs.current[nextState];
    
    if (currentVideo && nextVideo) {
      // Sembunyikan video saat ini dengan opacity
      currentVideo.style.opacity = '0';
      
      // Tampilkan video berikutnya
      nextVideo.style.opacity = '1';
      nextVideo.currentTime = 0;
      nextVideo.play().catch(e => console.error("Play error:", e));
    }
  };

  // Handler ketika video selesai diputar
  const handleVideoEnded = (key: string) => {
    if (key === 'last') {
      // Setelah last selesai, kembali ke state click
      setVideoState('click');
      setIsPlaying(false);
      
      // Aktifkan video click
      const clickVideo = videoRefs.current['click'];
      const lastVideo = videoRefs.current['last'];
      
      if (clickVideo && lastVideo) {
        lastVideo.style.opacity = '0';
        clickVideo.style.opacity = '1';
        clickVideo.currentTime = 0;
        clickVideo.play().catch(e => console.error("Play error:", e));
      }
    } else if (key !== 'click') {
      setIsPlaying(false);
    }
  };

  // Fungsi untuk memainkan suara FAQ
  const playFaqSound = () => {
    if (pageFlipSoundRef.current) {
      pageFlipSoundRef.current.currentTime = 0;
      pageFlipSoundRef.current.play().catch(e => console.error("Page flip sound error:", e));
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Header */}
      <div className="w-full flex justify-center font-pixelify mb-12">
        <h1
          className="text-xs 360:text-sm 400:text-base 500:text-[22px] 550:text-[26px] 650:text-[32px] 768:text-[40px] 900:text-5xl 1280:text-6xl font-pixelify text-[#4287f5] dark:text-white"
        >
          Frequently Asked Questions
        </h1>
        
        <SVGIcon
          icon={faq}
          className="
            w-8 h-8      
            576:w-10 576:h-10
            768:w-12 768:h-12
            900:w-12 900:h-12
            1280:w-16 1280:h-16
            ml-2 sm:ml-2 1280:ml-7
            900:mt-0 md:-mt-2 -mt-1
          "
        />
      </div>

      {/* Grid utama */}
      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Div kiri untuk video */}
        <div className="w-full lg:w-2/3 flex flex-col lg:mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden w-full aspect-video relative"
            ref={videoContainerRef}
            onClick={handleVideoClick}
          >
            {/* Render semua video sekaligus dengan kontrol opacity */}
            {Object.entries(videoSources).map(([key, src]) => (
              <video
                key={key}
                ref={el => {
                  if (el) videoRefs.current[key] = el;
                }}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-200 ease-in-out ${
                  videoState === key ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                src={src}
                muted
                playsInline
                autoPlay={key === 'click'}
                loop={key === 'click'}
                onEnded={() => handleVideoEnded(key)}
                preload="auto"
                onCanPlayThrough={() => {
                  // Pre-buffer video berikutnya untuk transisi lebih halus
                  if (key !== videoState) {
                    const video = videoRefs.current[key];
                    if (video) {
                      video.play().then(() => video.pause());
                    }
                  }
                }}
              />
            ))}
          </motion.div>
          
          {/* Spacer untuk mengisi ruang di bawah di desktop */}
          <div className="hidden lg:block flex-grow mt-4">
            <div className="h-full w-full bg-transparent"></div>
          </div>
        </div>

        {/* Div kanan (FAQ) - Scrollable area - 1/3 lebar */}
        <div className="w-full lg:w-1/3 flex flex-col">
          {/* Scroll indicator di atas scrollable area */}
          <div className="text-center text-gray-500 mb-4 hidden lg:block dark:text-gray-400">
            <p>Scroll for more questions</p>
            <div className="mt-2 flex justify-center">
              <div className="w-8 h-8 opacity-50 dark:invert">
                <Image
                  src="https://img.icons8.com/ios-filled/50/down.png"
                  alt="Scroll down"
                  width={32}
                  height={32}
                />
              </div>
            </div>
          </div>

          {/* Scrollable container dengan ref untuk handle scroll */}
          <motion.div 
            ref={scrollContainerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-h-[52vh] 500:max-h-[68vh] overflow-y-auto pr-2 
                       scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100
                       dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800"
          >
            {faqData.map((faq) => (
              <FaqItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                onToggle={playFaqSound} // Tambahkan callback suara
              />
            ))}
            
            {/* Div Need Help */}
            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100
                            dark:bg-blue-900/30 dark:border-blue-800/50">
              <h3 className="text-base xs:text-lg 768:text-xl font-semibold text-blue-800 mb-3 dark:text-blue-200">
                Need more help?
              </h3>
              <p className="text-blue-600 mb-4 text-sm xs:text-base dark:text-blue-300">
                If your question isn&apos;t answered here, feel free to reach out directly.
              </p>
             <a
  href="mailto:nursilayusmitha@gmail.com?subject=Question%20Regarding%20Your%20FAQ&body=Hi%20Nursila%2C%0A%0AI%20was%20reading%20your%20FAQ%20section%20and%20couldn%27t%20find%20an%20answer%20to%20my%20question.%0A%0AHere%20is%20my%20question%3A%20%0A"
  target="_blank"
  rel="noopener noreferrer"
>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg 
                                transition-colors text-sm xs:text-base
                                dark:bg-blue-700 dark:hover:bg-blue-600">
                  Contact Me
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Faq;