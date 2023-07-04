import React from "react";

interface BadgeProps {
  color: string;
  backgroundColor: string;
  children?: React.ReactNode;
}

export const CustomBadge: React.FC<BadgeProps> = ({
  color,
  backgroundColor,
  children,
}) => {
  return (
    <div
      className="styles-CustomBadge rounded-full h-6 flex items-center justify-center font-SemiBold"
      style={{ color: color, backgroundColor: backgroundColor }}
    >
      {children}
    </div>
  );
};
