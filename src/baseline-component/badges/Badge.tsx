import React from "react";
import { cn } from "../../utils/cn";

type BadgeProps = {
  variant?:
    | "default"
    | "success"
    | "warning"
    | "error"
    | "info"
    | "outline"
    | "merged";

  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
};

const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  children,
  size = "md",
  className,
}) => {
  const baseStyle =
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";

  const variantStyles = {
    default: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
    info: "bg-blue-100 text-blue-800",
    outline: "border border-gray-300 text-gray-700",
    merged: "bg-pink-400 text-white",
  };

  const sizeStyles = {
    sm: "px-1.5 py-0.5 text-xs",
    md: "px-2   py-1   text-sm",
    lg: "px-2.5 py-1.5 text-base",
    xl: "px-3   py-2   text-lg",
  };

  return (
    <span
      className={cn(
        baseStyle,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
