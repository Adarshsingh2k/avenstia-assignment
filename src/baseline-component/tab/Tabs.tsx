import React from "react";
import { cn } from "../../utils/cn";
import DiffStat from "../diff-stat/DiffStat";

type Tab = {
  label: string;
  value: string;
  icon?: React.ReactNode;
  count?: number;
  showStat?: boolean;
};

type TabsProps = {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (value: string) => void;
  className?: string;
  showStat?: boolean;
};

const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
  className,
  showStat = false,
}) => {
  return (
    <div
      className={cn(
        "flex items-center border-b border-gray-300 dark:border-gray-700",
        "px-4",
        className
      )}
    >
      <div className="flex -mb-px space-x-1">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.value;
          return (
            <button
              key={tab.value}
              onClick={() => onTabChange(tab.value)}
              className={cn(
                "inline-flex items-center gap-1 px-4 py-2 text-sm font-medium",
                "border border-transparent rounded-t-md transition-colors",
                "text-black dark:text-white",
                isActive
                  ? "relative z-10 bg-white dark:bg-body-bg border-gray-300 dark:border-gray-700 border-b-transparent dark:border-b-transparent"
                  : "text-gray-400 hover:text-black dark:hover:text-white"
              )}
            >
              {tab.icon && <span>{tab.icon}</span>}
              <span>{tab.label}</span>
              {typeof tab.count === "number" && (
                <span className="ml-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-semibold bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded-full">
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {showStat && (
        <div className="ml-auto">
          <DiffStat added={1} removed={1} unchanged={3} />
        </div>
      )}
    </div>
  );
};

export default Tabs;
