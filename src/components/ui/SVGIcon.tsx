// components/ui/SVGIcon.tsx
import React from "react";

interface SVGIconProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  size?: number | string;
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

const SVGIcon: React.FC<SVGIconProps> = ({
  icon: IconComponent,
  size,
  width = size || 24,
  height = size || 24,
  className,
  style,
  ...props
}) => {
  return (
    <IconComponent
      width={width}
      height={height}
      className={className}
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        ...style,
      }}
      {...props}
    />
  );
};

export default SVGIcon;