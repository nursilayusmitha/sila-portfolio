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
import { useTheme } from "next-themes";
import { HiVolumeUp } from "react-icons/hi";

export default function Home() {
  const { sectionRefs } = useScrollContext();
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const [showSoundModal, setShowSoundModal] = useState(true); 
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const splashAudioRef = useRef<HTMLAudioElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Inisialisasi audio
  useEffect(() => {
    if (typeof window !== "undefined") {
      const preloadImages = () => {
        const duck = new Image();
        duck.src = "/assets/duck.gif";
        const duckDance = new Image();
        duckDance.src = "/assets/duckdance.gif";
        duckDance.onload = () => setIsLoaded(true);
      };
      preloadImages();

      audioRef.current = new Audio("/sounds/music-loop.wav");
      audioRef.current.loop = true;

      splashAudioRef.current = new Audio("/sounds/splash.mp3");
      splashAudioRef.current.preload = "auto";
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

  const toggleMusic = () => {
    if (audioRef.current && isLoaded) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((e) => console.log("Autoplay prevented:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleHover = () => {
    setIsHovering(true);
    if (!isPlaying && splashAudioRef.current && isLoaded) {
      splashAudioRef.current.currentTime = 0;
      splashAudioRef.current.play().catch((e) => console.log("Splash sound prevented:", e));
    }
  };

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
        {/* --- Pixel Sound Warning Modal --- */}
        {mounted && showSoundModal && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div
              className={`
                relative max-w-xs w-[280px] text-center font-pixelify
                border-4 rounded-none animate-pixel-in
                ${resolvedTheme === "light"
                  ? "bg-white border-blue-500 text-black"
                  : "bg-gray-900 border-yellow-500 text-white"}
              `}
              style={{
                boxShadow:
                  resolvedTheme === "light"
                    ? "4px 4px 0px #3b82f6, 8px 8px 0px #1e40af"
                    : "4px 4px 0px #facc15, 8px 8px 0px #ca8a04",
              }}
            >
              {/* Header */}
              <div
                className={`
                  flex items-center justify-center gap-2 px-3 py-2 border-b-4
                  ${resolvedTheme === "light"
                    ? "bg-blue-200 border-blue-500 text-white"
                    : "bg-yellow-200 border-yellow-500 text-black"}
                `}
              >
                <HiVolumeUp
                  className={`
                    text-xl
                    ${resolvedTheme === "light" ? "text-blue-700" : "text-yellow-600"}
                  `}
                />
                <h2 className={'text-base font-bold'}>Sound Alert!</h2>
              </div>

              {/* Body */}
              <div className="px-4 py-3 text-sm leading-snug">
                <p>
                  This website loves making noise 🎶
                  <br />
                  If you’re in public, maybe turn the volume down 👀
                </p>
              </div>

              {/* Footer / Button */}
              <div className="px-4 pb-4">
                <button
                  onClick={() => setShowSoundModal(false)}
                  className={`
                    w-full py-2 font-pixelify text-sm font-bold border-2
                    ${resolvedTheme === "light"
                      ? "bg-blue-400 text-white border-blue-700 hover:bg-blue-500"
                      : "bg-yellow-400 text-black border-yellow-700 hover:bg-yellow-500"}
                  `}
                  style={{ boxShadow: "2px 2px 0px rgba(0,0,0,0.6)" }}
                >
                  OK, got it!
                </button>
              </div>
            </div>
          </div>
        )}

        {/* --- isi web --- */}
        <div className="relative bg-white dark:bg-black-100 rounded-b-xl flex flex-col items-center">
          <div className="overflow-hidden flex flex-col items-center w-full">
            <div id="Hero" className="relative w-full pb-44 lg:pb-56" ref={sectionRefs[0]}>
              <Hero />
            </div>
            <div className="relative bottom-0 flex flex-col items-center bg-primary w-full rounded-md">
              <div className="relative flex flex-col items-center px-10" id="About" ref={sectionRefs[1]}>
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

      {/* Floating Duck */}
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
            className={`w-full h-full object-contain ${isHovering && !isPlaying ? "animate-jump" : ""}`}
          />
        ) : (
          <div className="w-full h-full bg-yellow-300 rounded-full animate-pulse" />
        )}
      </div>

      {/* Animasi CSS */}
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
        @keyframes pixel-in {
          0% {
            transform: scale(0) translateY(-20px);
            opacity: 0;
          }
          60% {
            transform: scale(1.05) translateY(4px);
            opacity: 1;
          }
          100% {
            transform: scale(1) translateY(0);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-jump {
          animation: jump 0.5s ease-in-out;
        }
        .animate-pixel-in {
          animation: pixel-in 0.4s ease-out;
        }
      `}</style>
    </>
  );
}
