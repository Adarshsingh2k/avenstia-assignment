import React from "react";
import { formatDistanceToNow } from "date-fns";
import { cn } from "../../utils/cn";
import IconButton from "../buttons/IconButton";
import { TableMarkdown } from "../../utils/types/pr";
import TableFromMarkdown from "../table_markdown/TableFromMarkdown";

type CommentItemProps = {
  avatarUrl: string;
  username: string;
  role?: string;
  createdAt: Date | string;
  content: string;
  markDownTable?: TableMarkdown;
  className?: string;
};

const CommentItem: React.FC<CommentItemProps> = ({
  avatarUrl,
  username,
  role,
  createdAt,
  content,
  markDownTable,
  className,
}) => {
  const timeAgo =
    typeof createdAt === "string"
      ? formatDistanceToNow(new Date(createdAt), { addSuffix: true })
      : formatDistanceToNow(createdAt, { addSuffix: true });

  return (
    <div className={cn("flex items-start gap-3 h-auto", className)}>
      <img
        src={avatarUrl}
        alt={username}
        className="w-8 h-8 rounded-full flex-shrink-0"
      />

      <div className="relative  bg-primary dark:bg-dark-primary text-text rounded  h-auto flex-1 border border-gray-300 dark:border-gray-700 pb-3">
        <div
          className={cn(
            "absolute left-[-7.2px] top-2  w-0 h-0",
            "border-t-8 border-b-8 border-r-8 ",
            "border-t-transparent border-b-transparent border-r-gray-300 dark:border-r-gray-700"
          )}
        />

        <div className="flex items-center text-sm  rounded-t-[4px] px-[16px] h-10 bg-secondary dark:bg-[#151b23] border-b border-b-gray-300 dark:border-b-gray-700">
          <span className="font-semibold text-text dark:text-white mr-2">
            {username}
          </span>
          <span className="dark:text-[#9198A1] mr-2 text-secondary">
            commented {timeAgo}
          </span>
          {role && (
            <span className="px-2 py-0.5 text-[10px] font-semibold uppercase bg-gray-700 text-gray-300 rounded">
              {role}
            </span>
          )}

          <div className="ml-auto cursor-pointer text-gray-500 hover:text-gray-300">
            ⋯
          </div>
        </div>

        <div className="text-sm p-[1rem] dark:text-white">{content}</div>
        {markDownTable && (
          <div>
            <TableFromMarkdown data={markDownTable} />
          </div>
        )}
        <div className="ml-3">
          <IconButton
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 dark:bg-gray-300 rounded-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                />
              </svg>
            }
            onClick={() => console.log("Smile clicked")}
          />
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
