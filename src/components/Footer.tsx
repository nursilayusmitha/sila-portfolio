import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Footer = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer 
      className="w-full pt-10 pb-6 relative overflow-hidden bg-primary" 
      id="footer"
    >
      {/* Background Grid dengan Opacity Rendah */}
      <div 
        className={`absolute inset-0 z-0 ${
          mounted && resolvedTheme === 'dark' 
            ? 'bg-grid-[#1d0861] opacity-20' 
            : 'bg-grid-[#f5f10a] opacity-20'
        }`}
      />

      {/* Baris 1: Nama di tengah */}
      <div className="flex justify-center mb-10 mt-20 relative z-10">
        <div className="font-pixelify text-3xl md:text-5xl 1000:text-6xl text-purple-300 text-center">
          Nursila Yusmitha Angghani
        </div>
      </div>

      {/* Baris 2: Button dan Social Media di tengah (sejajar) */}
      <div className="flex justify-center mb-6 relative z-10">
        <div className="flex flex-wrap justify-center items-center gap-4">
          {/* Tombol "Let's get in touch" */}
          <a
  href="mailto:nursilayusmitha@gmail.com?subject=Let%27s%20Connect%20%26%20Collaborate"
  className="flex-shrink-0"
  target="_blank"
  rel="noopener noreferrer"
>
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          
          {/* Social Media */}
          <div className="flex items-center gap-3">
            {socialMedia.map((info) => (
              <a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <MagicButton
                  isIcon={true}
                  icon={
                    mounted ? (
                      <img 
                        src={resolvedTheme === 'dark' ? info.imgdark : info.img} 
                        alt={info.alt} 
                        width={20} 
                        height={20} 
                        className="object-contain"
                      />
                    ) : (
                      <div className="w-5 h-5" />
                    )
                  }
                  otherClasses="w-12 h-12 p-0"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Baris 3: Copyright di kiri */}
      <div className="text-sm md:text-base text-white-300 text-left md:ml-5 mt-20 relative z-10">
        Copyright © 2025 Nursila Yusmitha
      </div>
    </footer>
  );
};

export default Footer;
