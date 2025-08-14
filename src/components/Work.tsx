import React, { useState, useEffect, useRef } from "react";
import { workCategories } from "@/data";
import { Button } from "./ui/MovingBorders";
import DraggableModal from "./ui/DraggableModal";
import WorkDetailModal from "./ui/WorkDetailModal";
import SVGIcon from "./ui/SVGIcon";
import star from "../icons/kejora.svg";
import { useTheme } from "next-themes";

const Work = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [openModals, setOpenModals] = useState<any[]>([]);
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const [detailModal, setDetailModal] = useState<any>(null);
  const [maxZ, setMaxZ] = useState(10);
  const openSoundRef = useRef<HTMLAudioElement | null>(null);
  const closeSoundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setMounted(true);
    
    // Inisialisasi efek suara
    if (typeof window !== 'undefined') {
      openSoundRef.current = new Audio("/sounds/click-open.wav");
      openSoundRef.current.preload = "auto";
      closeSoundRef.current = new Audio("/sounds/click-close.wav");
      closeSoundRef.current.preload = "auto";
    }
  }, []);

  if (!mounted) return null;

  const playOpenSound = () => {
    if (openSoundRef.current) {
      openSoundRef.current.currentTime = 0;
      openSoundRef.current.play().catch(e => console.error("Error playing open sound:", e));
    }
  };

  const playCloseSound = () => {
    if (closeSoundRef.current) {
      closeSoundRef.current.currentTime = 0;
      closeSoundRef.current.play().catch(e => console.error("Error playing close sound:", e));
    }
  };

  const openModal = (cat: any) => {
    const exists = openModals.find(m => m.id === cat.id);
    const newZ = maxZ + 1;
    setMaxZ(newZ);
    
    if (exists) {
      setActiveModal(cat.id);
      setOpenModals(mods => mods.map(m => m.id === cat.id ? { ...m, zIndex: newZ } : m));
    } else {
      playOpenSound(); // HANYA di sini kita memainkan suara open
      setOpenModals(mods => [
        ...mods,
        { ...cat, zIndex: newZ }
      ]);
      setActiveModal(cat.id);
    }
  };

  const closeModal = (id: number) => {
    playCloseSound(); // Memainkan suara saat menutup modal
    setOpenModals(mods => mods.filter(m => m.id !== id));
    if (activeModal === id) setActiveModal(null);
  };

  return (
    <div className="pt-24 w-full relative">
<div className="w-full relative flex items-center justify-center">
        <SVGIcon
          icon={star}
          className="
            w-8 h-8       
            576:w-10 576:h-10
            768:w-12 768:h-12
            900:w-12 900:h-12
            1280:w-16 1280:h-16
            mr-2 sm:mr-5 1280:mr-7
            -mt-3 sm:-mt-6 md:-mt-8 lg:-mt-8
          "
        />

        <h1
          className="text-sm 400:text-base 576:text-2xl 768:text-4xl 900:text-5xl 1280:text-6xl mb-4 sm:mb-6 md:mb-8 font-pixelify text-[#4287f5] dark:text-white"
        >
          Pieces of My Creative World
        </h1>
        
        <SVGIcon
          icon={star}
          className="
            w-8 h-8      
            576:w-10 576:h-10
            768:w-12 768:h-12
            900:w-12 900:h-12
            1280:w-16 1280:h-16
            ml-2 sm:ml-5 1280:ml-7
            -mt-3 sm:-mt-6 md:-mt-8 lg:-mt-8
          "
        />
      </div>

<div className="mt-12 grid grid-cols-2 768:grid-cols-4 gap-4 768:gap-6 px-4 sm:px-8 768:px-16 1400:px-32 pb-32">
  {workCategories.map(cat => (
    <Button
      key={cat.id}
      borderRadius="0.75rem"
      className="aspect-square w-full"
      onClick={() => openModal(cat)}
      duration={Math.random() * 10000 + 10000}
    >
      <div className="flex flex-col items-center justify-center h-full p-2">
        {/* Ganti ini */}
        <div className="flex flex-col items-center justify-center mb-4 text-black dark:text-white">
          <h2 className="text-center font-bold 
            text-xs 495:text-xs 576:text-lg 768:text-xs 900:text-base 1280:text-2xl">
            {cat.buttonTitle[0]}
          </h2>
          <h2 className="text-center font-bold 
            text-xs 495:text-xs 576:text-lg 768:text-xs 900:text-base 1280:text-2xl">
            {cat.buttonTitle[1]}
          </h2>
        </div>
        {/* Akhir perubahan */}
        <img
  src={
    resolvedTheme === "light"
      ? cat.thumbnailDark // untuk theme terang
      : cat.thumbnail     // untuk theme gelap (default)
  }
  alt={cat.title}
  className="object-contain 
    w-12 h-12 
    576:w-20 576:h-20
    768:w-16 768:h-16
    900:w-22 900:h-22
    1280:w-28 1280:h-28"
/>

      </div>
    </Button>
  ))}
</div>

      {/* Draggable modals */}
<div className="fixed inset-0 z-[9999] pointer-events-none">
  {openModals.map(modal => (
    <div key={modal.id} className="pointer-events-auto">
      <DraggableModal
        {...modal}
        isActive={activeModal === modal.id}
        onClose={() => closeModal(modal.id)}
        onFocus={() => openModal(modal)}
        onItemClick={(item: any) => {
          playOpenSound();
          setDetailModal(item);
        }}
      />
    </div>
  ))}
</div>



      {/* Detail modal */}
      {detailModal && (
        <WorkDetailModal
          item={detailModal}
          onClose={() => {
            playCloseSound(); // Memainkan suara saat menutup detail modal
            setDetailModal(null);
          }}
        />
      )}
    </div>
  );
};

export default Work;
