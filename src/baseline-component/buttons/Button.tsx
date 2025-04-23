import React from "react";
import { cn } from "../../utils/cn";

type ButtonProps = {
  variant?: "primary" | "secondary" | "ghost" | "icon";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled = false,
  children,
  className,
  onClick,
  type = "button",
}) => {
  const baseStyle =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-300 dark:bg-gray-800 dark:text-white text-gray-800 ",
    ghost:
      "bg-transparent dark:text-white text-gray-800 hover:bg-gray-100 focus:ring-gray-200",
    icon: "p-2 dark:text-white text-gray-600 hover:bg-gray-100 rounded-full focus:ring-gray-300",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        baseStyle,
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <span className="animate-spin h-4 w-4 border-2 border-t-transparent border-white rounded-full mr-2" />
      ) : null}
      {children}
    </button>
  );
};

export default Button;
