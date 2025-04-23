import React, { useState } from "react";
import { cn } from "../../utils/cn";

type AvatarProps = {
  src: string;
  alt?: string;
  title?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  fallbackText?: string;
  withBorder?: boolean;
};

const sizeMap = {
  sm: "h-6 w-6 text-xs",
  md: "h-8 w-8 text-sm",
  lg: "h-10 w-10 text-base",
  xl: "h-14 w-14 text-lg",
};

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "",
  title,
  size = "md",
  className,
  fallbackText = "U",
  withBorder = false,
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-gray-100 text-gray-600 overflow-hidden",
        sizeMap[size],
        withBorder && "ring-2 ring-white",
        className
      )}
      title={title || alt}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          className="object-cover w-full h-full"
          onError={() => setHasError(true)}
        />
      ) : (
        <span className="font-semibold">{fallbackText}</span>
      )}
    </div>
  );
};

export default Avatar;
