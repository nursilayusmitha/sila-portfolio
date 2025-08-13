import LayoutApp from "@/layouts/LayoutApp";
import { useEffect, useState, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Certificates from "@/components/Certificates";
import Work from "@/components/Work";
import Faq from "@/components/Faq";
import { ClientOnly } from "@/utils/isClient";
import { useScrollContext } from "@/contexts/ActiveSectionContext";
import Footer from "@/components/Footer";

export default function Home() {
  const { sectionRefs } = useScrollContext();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null); // Ref untuk audio music
  const splashAudioRef = useRef<HTMLAudioElement | null>(null); // Ref baru untuk splash sound
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovering, setIsHovering] = useState(false); // State untuk tracking hover

  // Inisialisasi audio
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Preload GIFs
      const preloadImages = () => {
        const duck = new Image();
        duck.src = "/assets/duck.gif";
        
        const duckDance = new Image();
        duckDance.src = "/assets/duckdance.gif";
        
        duckDance.onload = () => setIsLoaded(true);
      };
      
      preloadImages();
      
      // Audio untuk music loop
      audioRef.current = new Audio('/sounds/music-loop.wav');
      audioRef.current.loop = true;
      
      // Audio untuk splash sound
      splashAudioRef.current = new Audio('/sounds/splash.mp3');
      splashAudioRef.current.preload = 'auto'; // Preload splash sound
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (splashAudioRef.current) {
        splashAudioRef.current.pause();
        splashAudioRef.current = null;
      }
    };
  }, []);

  // Fungsi toggle pemutaran musik
  const toggleMusic = () => {
    if (audioRef.current && isLoaded) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Autoplay prevented:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Fungsi untuk handle hover
  const handleHover = () => {
    setIsHovering(true);
    
    // Mainkan splash sound hanya jika musik tidak sedang diputar
    if (!isPlaying && splashAudioRef.current && isLoaded) {
      // Reset waktu audio untuk memungkinkan pemutaran berulang
      splashAudioRef.current.currentTime = 0;
      splashAudioRef.current.play().catch(e => console.log("Splash sound prevented:", e));
    }
  };

  // Fungsi untuk handle mouse leave
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <LayoutApp>
        <div className="relative bg-white dark:bg-black-100 rounded-b-xl flex flex-col items-center">
          <div className="overflow-hidden flex flex-col items-center w-full">
            <div id="Hero" className="relative w-full pb-44 lg:pb-56" ref={sectionRefs[0]}>
              <Hero />
            </div>
            <div className="relative bottom-0 flex flex-col items-center  bg-primary w-full rounded-md">

              <div  className=" relative flex flex-col items-center px-10" id="About" ref={sectionRefs[1]}>
                <ClientOnly>
                <About />
                </ClientOnly>
              </div>
              <div className="-pt-10">
                <Certificates />
              </div>
            </div>
          </div>
          <div className="pt-20 w-full max-w-base-content xs:max-w-xs-content sm:max-w-sm-content md:max-w-md-content lg:max-w-full xl:max-w-xl-content 1xl:max-w-max-container">
            <div id="Work" ref={sectionRefs[2]}>
            <Work />
            </div>
          </div>
          <div id="FAQ" ref={sectionRefs[3]} className="relative flex flex-col items-center px-10">
            <Faq />
          </div>
          <div className="w-full max-w-base-content xs:max-w-xs-content sm:max-w-sm-content md:max-w-md-content lg:max-w-full xl:max-w-xl-content 1xl:max-w-max-container">
            <Footer />
            </div>
        </div>
      </LayoutApp>
      
      {/* Floating Duck Component */}
      <div 
        className="fixed bottom-6 right-6 z-[9999] cursor-pointer w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 transition-all duration-300 hover:scale-110 animate-float drop-shadow-[0_10px_8px_rgba(0,0,0,0.25)]"
        onClick={toggleMusic}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        {isLoaded ? (
          <img 
            src={isPlaying ? "/assets/duckdance.gif" : "/assets/duck.gif"} 
            alt="Music Control Duck" 
            className={`w-full h-full object-contain ${isHovering && !isPlaying ? 'animate-jump' : ''}`}
          />
        ) : (
          <div className="w-full h-full bg-yellow-300 rounded-full animate-pulse" />
        )}
      </div>
      
      {/* CSS untuk animasi */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        @keyframes jump {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-jump {
          animation: jump 0.5s ease-in-out;
        }
      `}</style>
    </>
  );
}