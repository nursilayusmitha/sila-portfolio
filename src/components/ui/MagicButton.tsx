// components/ui/MagicButton.tsx
import React from "react";
import SVGIcon from "./SVGIcon";

interface MagicButtonProps {
  title?: string; // Jadikan title opsional
  icon?: React.ReactNode | React.FC<React.SVGProps<SVGSVGElement>>;
  position?: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
  iconSize?: number | string;
  iconClass?: string;
  isIcon?: boolean; // Tambah prop baru untuk versi ikon
}

const MagicButton = ({
  title,
  icon,
  position = "right",
  handleClick,
  otherClasses,
  iconSize = 20,
  iconClass = "",
  isIcon = false, // Default false
}: MagicButtonProps) => {
  const renderIcon = () => {
    if (!icon) return null;
    
    if (React.isValidElement(icon)) {
      return icon;
    }
    
    if (typeof icon === 'function') {
      return (
        <SVGIcon 
          icon={icon} 
          size={iconSize}
          className={iconClass}
        />
      );
    }
    
    return null;
  };

  return (
    <button
      className={`relative inline-flex h-12 overflow-hidden rounded-lg dark:p-[1px] p-[2px] focus:outline-none dark:bg-slate-950 ${otherClasses}`}
      onClick={handleClick}
      style={isIcon ? { width: '3rem' } : {}} // Ukuran tetap untuk versi ikon
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] bg-[conic-gradient(from_90deg_at_50%_50%,#FF0055_0%,#00AAFF_50%,#FF0055_100%)]" />

      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg dark:bg-slate-950 bg-white ${
          isIcon ? 'p-0' : 'px-7' // Hilangkan padding untuk versi ikon
        } text-lg font-vt323 dark:text-white text-slate-950 backdrop-blur-3xl gap-2`}
      >
        {/* Versi normal */}
        {!isIcon && (
          <>
            {position === "left" && renderIcon()}
            {title}
            {position === "right" && renderIcon()}
          </>
        )}
        
        {/* Versi ikon */}
        {isIcon && renderIcon()}
      </span>
    </button>
  );
};

export default MagicButton;