// components/ui/MagicButton.tsx
import React from "react";
import SVGIcon from "./SVGIcon";

interface MagicButtonProps {
  title: string;
  icon?: React.ReactNode | React.FC<React.SVGProps<SVGSVGElement>>;
  position?: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
  iconSize?: number | string;
  iconClass?: string;
}

const MagicButton = ({
  title,
  icon,
  position = "right",
  handleClick,
  otherClasses,
  iconSize = 20,
  iconClass = "",
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
          className={`${iconClass} lg:w-4 lg:h-4`} // Responsif untuk ikon
        />
      );
    }
    
    return null;
  };

  return (
    <button
  className={`relative inline-flex h-12 w-full overflow-hidden rounded-lg dark:p-[1px] p-[2px] focus:outline-none dark:bg-slate-950
    768:h-10 768:mt-8 768:w-52
    700:h-10 700:w-40 700:mt-6
    630:h-10 630:w-32 630:mt-6
    576:h-10 576:w-28 576:mt-6
    400:h-10 400:w-40 400:mt-6
    300:h-8 300:w-24 300:mt-3
    ${otherClasses}`}
  onClick={handleClick}
>
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] bg-[conic-gradient(from_90deg_at_50%_50%,#FF0055_0%,#00AAFF_50%,#FF0055_100%)]" />

  <span
    className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg dark:bg-slate-950 bg-white
      px-7 text-lg font-vt323 dark:text-white text-slate-950 backdrop-blur-3xl gap-2
      768:px-5 768:text-base
      400:text-xs 400:px-2
      300:text-[0.5rem] 300:px-1
    `}
  >
    {position === "left" && renderIcon()}
    {title}
    {position === "right" && renderIcon()}
  </span>
</button>

  );
};

export default MagicButton;