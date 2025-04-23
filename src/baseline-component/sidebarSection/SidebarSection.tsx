import React from "react";
import { Typography } from "../typography/Typography";

interface SidebarSectionProps<T> {
  title: string;
  items: T[];
  emptyText: string;
  renderItem: (item: T, index: number) => React.ReactNode;
}

export function SidebarSection<T>({
  title,
  items,
  emptyText,
  renderItem,
}: SidebarSectionProps<T>) {
  return (
    <div className="mb-6 border-b border-b-gray-300 dark:border-b-gray-700 pb-3">
      <Typography variant="h6" className="dark:text-gray-300 text-black mb-2">
        {title}
      </Typography>
      {items.length === 0 ? (
        <p className="text-sm text-gray-500  dark:text-gray-300">{emptyText}</p>
      ) : (
        <div className="space-y-2 text-gray-500 dark:text-gray-300">
          {items.map(renderItem)}
        </div>
      )}
    </div>
  );
}
