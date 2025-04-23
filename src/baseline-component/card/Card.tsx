import React from "react";
import { cn } from "../../utils/cn";

export type CardSize = "sm" | "md" | "lg";

interface CardProps {
  size?: CardSize;

  borderColorClass?: string;

  className?: string;
  children: React.ReactNode;
}

const sizeMap: Record<CardSize, string> = {
  sm: "p-2 text-sm",
  md: "p-4 text-base",
  lg: "p-6 text-lg",
};

export const Card: React.FC<CardProps> = ({
  size = "md",
  borderColorClass = "border-gray-200",
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "bg-white rounded-lg border",
        borderColorClass,
        sizeMap[size],
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
