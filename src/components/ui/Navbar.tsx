import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-scroll";
import { FaHouse, FaUser, FaFolder, FaQuestion } from "react-icons/fa6";
import { FiSun, FiMoon } from "react-icons/fi";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useScrollContext } from "@/contexts/ActiveSectionContext";
import { defaultTransition } from "@/utils/transition";
import { useTheme } from "next-themes";
import SVGIcon from "./SVGIcon";
import MoonIcon from "../../icons/moon.svg";
import SunIcon from "../../icons/sun.svg";

const linkData = [
  {
    linkName: "Home",
    linkRef: "Hero",
    linkIcon: FaHouse,
  },
  {
    linkName: "About",
    linkRef: "About",
    linkIcon: FaUser,
  },
  {
    linkName: "Work",
    linkRef: "Work",
    linkIcon: FaFolder,
  },
  {
    linkName: "FAQ",
    linkRef: "FAQ",
    linkIcon: FaQuestion,
  },
];

const Navbar = () => {
  const { activeSection } = useScrollContext();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isSmallScreen = useMediaQuery("(max-width: 512px)");
  const navHighlight = useAnimation();
  const [visible, setVisible] = useState(true);
  const lastInteraction = useRef<number>(Date.now());
  const [mounted, setMounted] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const [clickSound, setClickSound] = useState<HTMLAudioElement | null>(null);
  const [lightSound, setLightSound] = useState<HTMLAudioElement | null>(null);
  const [darkSound, setDarkSound] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const click = new Audio("/sounds/click-a.mp3");
      click.preload = "auto";
      const light = new Audio("/sounds/click-b.mp3");
      light.preload = "auto";
      const dark = new Audio("/sounds/click-c.mp3");
      dark.preload = "auto";
      
      setClickSound(click);
      setLightSound(light);
      setDarkSound(dark);
    }
  }, []);

  // Nav highlight animation
  useEffect(() => {
    const itemWidth = isSmallScreen ? 70 : 100;
    const positions: Record<string, number> = {
      Hero: 0,
      About: itemWidth,
      Work: itemWidth * 2,
      FAQ: itemWidth * 3
    };
    
    if (activeSection) {
      navHighlight.start({ 
        x: positions[activeSection] ?? 0,
        transition: defaultTransition
      });
    }
  }, [activeSection, navHighlight, isSmallScreen]);

  // Center navbar calculation
  useEffect(() => {
    if (navbarRef.current) {
      const navbarWidth = navbarRef.current.offsetWidth;
      navbarRef.current.style.marginLeft = `-${navbarWidth / 2}px`;
    }
  }, [activeSection, isSmallScreen]);

  // Hide/show navbar logic
  useEffect(() => {
    const handleScroll = () => {
      setVisible(true);
      lastInteraction.current = Date.now();
    };

    const checkIdle = () => {
      if (Date.now() - lastInteraction.current > 10000) {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    const interval = setInterval(checkIdle, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const toggleTheme = () => {
    if (!mounted) return;

    if (resolvedTheme === "light") {
      setTheme("dark");
      darkSound?.play().catch(e => console.error("Error playing dark sound:", e));
    } else {
      setTheme("light");
      lightSound?.play().catch(e => console.error("Error playing light sound:", e));
    }
  };


  const playClickSound = () => {
    if (!mounted) return;
    if (clickSound) {
      clickSound.currentTime = 0;
      clickSound.play().catch(e => console.error("Error playing click sound:", e));
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <motion.div
      ref={navbarRef}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-4 left-1/2 z-50"
      style={{ fontFamily: "'VT323', monospace" }}
    >
      <div className={`${resolvedTheme === 'light' ? 'bg-white' : 'bg-gray-900'} ${isSmallScreen ? 'px-3 py-1' : 'px-5 py-2'} rounded-full shadow-lg`}>
        <ul className="flex items-center relative">
          <motion.div
            initial={false}
            animate={navHighlight}
            className={`${isSmallScreen ? 'h-[1.8rem]' : 'h-[2.475rem]'} ${resolvedTheme === 'light' ? 'bg-gray-200' : 'bg-gray-700'} absolute left-0 rounded-full`}
            style={{ width: isSmallScreen ? '70px' : '100px' }}
          />

          {linkData.map((link, index) => (
            <li key={index} className="relative z-10" style={{ width: isSmallScreen ? '70px' : '100px' }}>
              <NavbarLinkAnimated
  Icon={link.linkIcon}
  text={link.linkName}
  linkTo={link.linkRef}
  onClick={playClickSound}
  isActive={activeSection === link.linkRef}
  resolvedTheme={resolvedTheme ?? "dark"} // ✅ fallback
  isSmallScreen={isSmallScreen}
/>

            </li>
          ))}

          <li className="relative z-10 ml-4">
  <motion.button
    onClick={toggleTheme}
    className={`cursor-pointer flex items-center justify-center ${isSmallScreen ? 'w-5 h-5' : 'w-7 h-7'} rounded-full`}
    whileTap={{ scale: 0.9 }}
    whileHover={{ scale: 1.1 }}
    aria-label={`Switch to ${resolvedTheme === 'light' ? 'dark' : 'light'} mode`}
  >
    {resolvedTheme === "light" ? (
      <SVGIcon 
        icon={SunIcon} 
        size={isSmallScreen ? 18 : 22}
        className="text-gray-800"
      />
    ) : (
      <SVGIcon 
        icon={MoonIcon} 
        size={isSmallScreen ? 16 : 20}
        className="text-white"
      />
    )}
  </motion.button>
</li>
        </ul>
      </div>
    </motion.div>
  );
};

const NavbarLinkAnimated = ({
  Icon,
  text,
  linkTo,
  onClick,
  isActive,
  resolvedTheme,
  isSmallScreen,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  text: string;
  linkTo: string;
  onClick: () => void;
  isActive: boolean;
  resolvedTheme: string;
  isSmallScreen: boolean;
}) => {
  return (
    <Link
      to={linkTo}
      spy
      smooth
      duration={500}
      offset={-100}
      onClick={onClick}
      className="flex items-center justify-center w-full h-full py-1"
    >
      <div className="flex items-center justify-center w-full relative">
        <motion.div
          className="flex items-center justify-center"
          initial={{ scale: 1 }}
          animate={{ scale: isActive ? 0.95 : 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0, width: 0 }}
            animate={{
              opacity: isActive ? 1 : 0,
              width: isActive ? 'auto' : 0,
              marginRight: isActive ? (isSmallScreen ? '0.3rem' : '0.5rem') : '0rem',
            }}
            transition={defaultTransition}
          >
            <Icon className={`${isSmallScreen ? 'text-xs' : 'text-sm'} ${resolvedTheme === 'light' ? 'text-black' : 'text-white'}`} />
          </motion.div>
          
          <motion.span 
            className={`${isSmallScreen ? 'text-base' : 'text-lg'} ${
              isActive 
                ? (resolvedTheme === 'light' ? 'text-black' : 'text-white')
                : (resolvedTheme === 'light' ? 'text-gray-500' : 'text-gray-300')
            }`}
            animate={{
              x: isActive ? 0 : 0,
            }}
          >
            {text}
          </motion.span>
        </motion.div>
      </div>
    </Link>
  );
};

export default Navbar;
