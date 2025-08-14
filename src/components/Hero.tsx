// components/Hero.tsx
"use client";
import React, { useRef, useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import GridGlobe from "./ui/GridGlobe";
import TypewriterEffect from "./ui/TypewriterEffect";
import { useTheme } from "next-themes";
import DownloadIconLight from "../icons/download.svg";
import DownloadIconDark from "../icons/downloaddark.svg";

const Hero = () => {
  const { resolvedTheme } = useTheme();
  const positions = [
    "Web Developer",
    "Backend Developer",
    "Frontend Developer",
    "Fullstack Developer",
    "Graphic Designer",
    "Video Editor",
    "Animator",
    "Illustrator"
  ];

  const themeIcon = resolvedTheme === "dark"
  ? DownloadIconLight
  : resolvedTheme === "light"
    ? DownloadIconDark
    : DownloadIconLight;

  // State untuk sound effect
  const [clickSound, setClickSound] = useState<HTMLAudioElement | null>(null);
  
  // Inisialisasi sound effect
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const sound = new Audio("/sounds/notification.mp3");
      sound.preload = "auto";
      setClickSound(sound);
    }
  }, []);

  // Fungsi untuk memutar suara
  const playSound = () => {
    if (clickSound) {
      clickSound.currentTime = 0;
      clickSound.play().catch(e => console.error("Error playing sound:", e));
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Globe di background */}
      <div className="absolute inset-0 z-0">
  <GridGlobe />
</div>

      {/* Spotlight */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20"
          fill={"#FFD700"}
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill={"#FFA500"}
        />
        <Spotlight 
          className="left-80 top-28 h-[80vh] w-[50vw]" 
          fill={"#FF69B4"} 
        />
      </div>

      {/* Konten teks */}
      <div className="flex justify-center items-center relative h-full z-20 pointer-events-none">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[80vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs 576:text-sm text-center text-blue-950 dark:text-blue-100 max-w-80 font-interRegular">
            WE SHOULD KNOW EACH OTHER
          </p>
          
          <div className="flex flex-col items-center">
            <TextGenerateEffect
              words="Hi! I'm Nursila Yusmitha."
              className="text-center text-2xl 420:text-3xl 550:text-4xl 700:text-5xl 800:text-6xl 1000:text-7xl font-pixelify tracking-wide"
              highlightIndices={[2, 3]}
              highlightClass={'text-[#ffee5e]'}
            />
            
            <TypewriterEffect
              positions={positions}
              className="text-2xl 420:text-3xl 550:text-4xl 700:text-5xl 800:text-6xl 1000:text-7xl font-pixelify mt-1"
            />
          </div>

          {/* TAMBAHKAN ONCLICK UNTUK PLAY SOUND */}
          <a 
            href="/CV_NursilaYusmitha.pdf" 
            download 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-8 pointer-events-auto"
            onClick={playSound} // <<== TAMBAHKAN INI
          >
            <MagicButton
              title="Download CV"
              icon={themeIcon}
              position="right"
              iconSize={18}
              iconClass="text-blue-500"
              otherClasses="mt-4"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;