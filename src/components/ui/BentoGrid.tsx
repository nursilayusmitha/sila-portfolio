import { useState, useEffect, useRef } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButtonDiv";
import { motion, AnimatePresence } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn("bento-grid mx-auto", className)}>
      {children}
    </div>
  );
};


export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  positions,
  experiences,
  flower,
  techStacks,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  positions?: string[];
  experiences?: { number: number; unit: string }[];
  flower?: string;
  techStacks?: { icon: string; name: string }[];
}) => {
  const [showDescription, setShowDescription] = useState(false);
  const [copied, setCopied] = useState(false);
  const [currentExpIndex, setCurrentExpIndex] = useState(0);
  const [currentPositionIndex, setCurrentPositionIndex] = useState(0);
  const techStackContainerRef = useRef<HTMLDivElement>(null);
  const [lottieKey, setLottieKey] = useState(0);
  // TAMBAHKAN STATE UNTUK SOUND EFFECT
  const [clickSound, setClickSound] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // INISIALISASI SOUND EFFECT
    if (id === 6 && typeof window !== 'undefined') {
      const sound = new Audio("/sounds/notification.mp3");
      sound.preload = "auto";
      setClickSound(sound);
    }
  }, [id]);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
  const text = "nursilayusmitha@gmail.com";
  navigator.clipboard.writeText(text);
  setCopied(true);
  setLottieKey(prev => prev + 1); // trigger re-render untuk Lottie
  // TAMBAHKAN PEMUTARAN SUARA
    if (clickSound) {
      clickSound.currentTime = 0;
      clickSound.play().catch(e => console.error("Error playing sound:", e));
    }
  };


  useEffect(() => {
  if (copied) {
    const timer = setTimeout(() => setCopied(false), 5000);
    return () => clearTimeout(timer);
  }
}, [copied]);


 
  useEffect(() => {
    if (id === 2 && positions && experiences) {
      const interval = setInterval(() => {
        setCurrentPositionIndex((prev) => (prev + 1) % positions.length);
        setCurrentExpIndex((prev) => (prev + 1) % experiences.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [id, positions, experiences]);

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className,
      )}
      onClick={() => id === 4 && setShowDescription(!showDescription)}
      onMouseEnter={() => id === 4 && setShowDescription(true)}
      onMouseLeave={() => id === 4 && setShowDescription(false)}
    >
      {/* Background Gradient untuk id 2,3,4 - DIPINDAHKAN KE ATAS */}
      {(id === 2 || id === 3 || id === 4) && (
        <BackgroundGradientAnimation>
          <div className="absolute inset-0 z-0" />
        </BackgroundGradientAnimation>
      )}

      {(id === 2 || id === 4) && flower && (
  id === 4 ? (
    <div className="absolute bottom-0 left-0 w-full z-10">
      <img
        src={flower}
        alt="flower"
        className="w-full h-full object-cover object-bottom opacity-30"
      />
    </div>
  ) : (
    <div className="absolute inset-0 w-full h-full z-10">
      <img
        src={flower}
        alt="flower"
        className="w-full h-full object-cover opacity-30"
      />
    </div>
  )
)}
      {id === 1 ? (
        <div className="relative w-full h-full">
          {img && (
            <img
              src={img}
              alt="background"
              className={cn(
                imgClassName,
                "absolute inset-0 w-full h-full object-contain z-0"
              )}
            />
          )}
        </div>
      ) : (
        <div className={`${id === 6 && "flex justify-center"} h-full`}>
  {/* Perubahan di sini: tambahkan z-index conditional untuk id 6 */}
  <div className={cn(
    "w-full h-full absolute",
    id === 6 && "z-[1]" // Tambahkan z-index untuk gambar utama id 6
  )}>
    {img && (
      <img
        src={img}
        alt={img}
        className={cn(imgClassName, "object-cover object-center")}
      />
    )}
  </div>

          <div
            className={cn(
              titleClassName,
              "group-hover/bento: transition duration-200 relative md:h-full min-h-40 flex flex-col px-5"
            )}
          >
            {id === 2 && positions && experiences && (
              <div className="flex flex-col h-full z-10 relative">
                <div className="absolute 1300:top-4 1300:left-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentPositionIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="text-xs 300:text-base 340:text-lg 350:text-xl 576:text-3xl 768:text-2xl 1000:text-2xl 1330:text-4xl font-pixelify text-white items-start justify-start"
                    >
                      {positions[currentPositionIndex]}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="flex items-end justify-end 576:items-end 576:justify-end 1000:items-center 1000:justify-center h-full mt-16 576:mt-8 576:mb-3 1000:mb-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentExpIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center"
                    >
                      <span className="font-volkhov text-4xl 576:text-5xl 1330:text-6xl text-white mr-4 576:mr-3 1000:mr-7">
                        {experiences[currentExpIndex].number}
                      </span>
                      <div className="flex flex-col">
                        <span className="font-pixelify text-white text-xs 300:text-base 350:text-lg 576:text-xl 768:text-lg 1330:text-2xl text-start">
                          {experiences[currentExpIndex].unit}
                        </span>
                        <span className="font-pixelify text-white text-xs 300:text-base 350:text-lg 576:text-xl 768:text-lg 1330:text-2xl">
                          Experience
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            )}

            {id === 3 && (
  <div className="flex flex-col h-full z-10 mt-5">
    <div className="mb-4">
      <div className="font-interRegular md:max-w-32 text-[0.45rem] 340:text-[0.5rem] 350:text-[0.6rem] 430:text-xs 576:text-sm 768:text-[0.6rem] 850:text-xs 900:text-sm 1000:text-[0.6rem] 1200:text-xs 1460:text-base text-white dark:text-[#C1C2D3] z-10 1348:ml-3">
        {description}
      </div>
      <div className="text-xs 340:text-sm 350:text-base 430:text-xl 500:text-2xl 576:text-2xl 768:text-lg 850:text-xl 900:text-2xl 1000:text-xl 1200:text-2xl 1460:text-3xl max-w-96 font-pixelify z-10 1348:ml-3 text-white">
        {title}
      </div>
    </div>

    <div className="flex gap-1 lg:gap-5 w-fit absolute right-4 lg:right-5 -mt-[34px] 768:-mt-10">
      <div className="flex flex-col gap-3 md:gap-3 lg:gap-8 overflow-hidden h-[180px] sm:h-[200px] md:h-[180px] lg:h-[300px] 820:mr-0">
        {/* ANIMATION CONTAINER - UPDATED WITH IMMEDIATE ANIMATION */}
        <div 
          className="tech-scroll-container"
          style={{ 
            animation: 'scroll-tech 15s linear infinite',
            animationPlayState: 'running',
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            transformStyle: 'preserve-3d'
          }}
        >
          {[...techStacks!, ...techStacks!].map((tech, index) => (
            <div
              key={index}
              className="flex items-center bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-3 mb-2"
            >
              {/* Responsif icon dengan 3 kondisi */}
              <img
                src={tech.icon}
                alt={tech.name}
                className="
                  w-2 h-2
                  370:w-3 
                  370:h-3
                  460:w-4 
                  460:h-4
                  576:w-5
                  576:h-5
                  768:w-3
                  768:h-3
                  820:w-4
                  820:h-4
                  1000:w-3
                  1000:h-3
                  1140:w-4
                  1140:h-4
                  1300:w-6
                  1300:h-6
                  mr-2
                  1000:mr-1
                  1145:mr-2
                  1300:mr-3
                "
              />
              
              {/* Responsif teks dengan 3 kondisi */}
              <span className="
                text-white font-medium 
                text-[5px]
                370:text-[7px]
                460:text-[10px]
                576:text-sm
                768:text-[8px]
                820:text-[10px]
                1000:text-[8px]
                1140:text-[10px]
                1300:text-sm
              ">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)}

            {id === 4 && (
              <div className="flex flex-col items-center justify-center h-full z-10">
                <motion.div
                  animate={showDescription ? { y: -5 } : { y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-xs 315:text-sm 435:text-lg 576:text-lg 768:text-3xl 1000:text-4xl max-w-96 font-vt323 mb-4 text-white">
                    {title}
                  </div>
                </motion.div>
                <AnimatePresence>
                  {showDescription && (
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 50 }}
                      transition={{ duration: 0.5 }}
                      className="text-white dark:text-[#C1C2D3] text-[0.5rem] 435:text-xs 576:text-[0.6rem] 768:text-sm 1000:text-base px-4"
                    >
                      {description}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            { id === 6 && (
  <>
    {/* Gradient Background Layer */}
    <BackgroundGradientAnimation>
        <div className="absolute z-0 inset-0" />
      </BackgroundGradientAnimation>

    {/* Spare Image di kanan bawah jika ada */}
    {spareImg && (
      <div className="absolute right-0 -bottom-5 z-10">
        <img
          src={spareImg}
          alt="spare"
          className="object-cover object-center w-full h-full"
        />
      </div>
    )}

    {/* Konten email & animasi */}
    <div className="relative z-10 mt-auto pt-4 pb-4 420:pt-8 400:px-5 1350:px-10 420:pb-10">
      <div className="font-sans font-extralight text-sm md:text-base text-[#C1C2D3] 420:mb-2">
        {description}
      </div>
      <div className="font-pixelify text-sm 300:text-xs 320:text-sm 500:text-xl 576:text-base 576:font-vt323 768:font-pixelify 768:text-xl 895:text-2xl 1000:text-xl 1080:text-2xl 1436:text-3xl max-w-96 500:mb-5 text-white">
        {title}
      </div>

      <div className="relative">
    <div className="absolute inset-0 flex items-center justify-center">
      <Lottie
        key={lottieKey}
        options={{
          loop: false,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        height={200}
        width={400}
      />
    </div>
    <div className="576:-mt-5 1330:mt-0 relative z-10">
      <MagicButton
        title={copied ? "Email is Copied!" : "Copy my email address"}
        icon={<IoCopyOutline />}
        position="left"
        handleClick={handleCopy}
        otherClasses="!bg-[#161A31]"
      />
    </div>
  </div>
</div>
  </>
)}

          </div>
        </div>
      )}
    </div>
  );
};