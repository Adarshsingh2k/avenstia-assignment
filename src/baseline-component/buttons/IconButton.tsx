import React from "react";
import { cn } from "../../utils/cn";

export type IconButtonProps = {
  icon: React.ReactNode;

  onClick?: () => void;

  className?: string;
};

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  className,
}) => (
  <button
    onClick={onClick}
    className={cn(
      "inline-flex items-center justify-center",
      "w-auto",
      "rounded-full border bg-white",
      "border-gray-300 hover:bg-gray-50",
      "dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:cursor-pointer",
      className
    )}
  >
    <span className="">{icon}</span>
  </button>
);

export default IconButton;
