import React from "react";
import { cn } from "../../utils/cn";
import { TableMarkdown } from "../../utils/types/pr";

interface TableProps {
  data?: TableMarkdown;
  className?: string;
}

export const TableFromMarkdown: React.FC<TableProps> = ({
  data,
  className,
}) => {
  if (!data || !Array.isArray(data.th)) {
    return null;
  }
  const headers = data?.th;

  const rowKeys = Object.keys(data).filter((k) => k !== "th");
  const rows = rowKeys.map((k) => data[k] as Record<string, string>);

  const headerToKey = (label: string) =>
    label
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_|_$/g, "");

  return (
    <div className={cn("overflow-x-auto px-5 mb-4", className)}>
      <table className="min-w-6/12 text-left text-sm border border-gray-200 dark:border-gray-700">
        <thead className="">
          <tr className="border-b border-gray-300 dark:border-gray-700">
            {headers?.map((label) => (
              <th
                key={label}
                className="px-4 py-2 font-medium text-gray-700 dark:text-gray-300"
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className={
                ri % 2 === 0
                  ? "bg-gray-50 dark:bg-gray-800"
                  : "bg-white dark:bg-gray-700"
              }
            >
              {headers?.map((label) => {
                const prop = headerToKey(label);
                return (
                  <td
                    key={prop}
                    className="px-4 py-2 text-gray-800 dark:text-gray-200"
                  >
                    {row[prop]}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableFromMarkdown;
