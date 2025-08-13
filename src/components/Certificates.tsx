"use client";

import React, { useState, useEffect } from "react";
import { certificates } from "@/data";
import { InfiniteMovingCertificates } from "./ui/InfiniteCards";
import CertificateModal from "./ui/CertificateModal";

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [openSound, setOpenSound] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Memuat suara saat komponen dimount
    if (typeof window !== 'undefined') {
      const sound = new Audio("/sounds/click-open.wav");
      sound.preload = "auto";
      setOpenSound(sound);
    }
  }, []);

  const handleCertificateClick = (certificate: any) => {
    const index = certificates.findIndex((c) => c.id === certificate.id);
    setCurrentIndex(index);
    
    // Mainkan suara ketika modal dibuka
    if (openSound) {
      openSound.currentTime = 0;
      openSound.play().catch(e => console.error("Error playing open sound:", e));
    }
  };

  const closeModal = () => {
    setCurrentIndex(null);
  };

  const showPrev = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prev) => (prev! - 1 + certificates.length) % certificates.length);
    }
  };

  const showNext = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prev) => (prev! + 1) % certificates.length);
    }
  };

  return (
    <section id="about" className="">
      <div className="flex flex-col items-center">
        <div className="h-[300px] 420:h-[400px] w-full rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCertificates
  items={certificates.map(cert => ({
    ...cert,
    date: cert.issueDate // mapping issueDate ke date
  }))}
  direction="right"
  speed="slow"
  onCertificateClick={handleCertificateClick}
/>
        </div>
      </div>

      {currentIndex !== null && (
        <CertificateModal
  isOpen={currentIndex !== null}
  certificate={{
    ...certificates[currentIndex],
    date: certificates[currentIndex]?.issueDate || ""
  }}
  onClose={closeModal}
  onPrev={showPrev}
  onNext={showNext}
/>

      )}
    </section>
  );
};

export default Certificates;