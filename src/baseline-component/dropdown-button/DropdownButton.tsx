import React, { useState, useRef, useEffect } from "react";
import { cn } from "../../utils/cn";

type ResponsiveWidth = "sm" | "md" | "lg" | "xl";

type DropdownButtonProps = {
  label: string;
  children: React.ReactNode;
  className?: string;
  responsiveWidth?: ResponsiveWidth;
};

const widthMap: Record<ResponsiveWidth, string> = {
  sm: "w-64 sm:w-72",
  md: "w-64 sm:w-72 md:w-80",
  lg: "w-64 sm:w-72 md:w-80 lg:w-96",
  xl: "w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[28rem]",
};

const DropdownButton: React.FC<DropdownButtonProps> = ({
  label,
  children,
  className,
  responsiveWidth = "md", // default to 'md'
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={cn("relative inline-block", className)} ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center px-4 py-2 dark:bg-gray-800 dark:text-white bg-gray-200 text-black text-sm font-medium rounded-md hover:bg-gray-300 dark:hover:bg-gray-700"
      >
        {label}
        <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.354a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <div
          className={cn(
            "absolute right-0 mt-2 bg-white dark:bg-body-bg border border-gray-300 dark:border-gray-700 rounded-md shadow-lg z-10",
            widthMap[responsiveWidth]
          )}
        >
          <div className="p-2">{children}</div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
