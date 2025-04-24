import React from "react";
import CommentItem from "../baseline-component/comment-item/CommentItem";
import Avatar from "../baseline-component/avatar/Avatar";

import { cn } from "../utils/cn";
import { Typography } from "../baseline-component/typography/Typography";
import Badge from "../baseline-component/badges/Badge";
import Button from "../baseline-component/buttons/Button";
import { ApprovalIcon } from "../utils/ApprovalIcon";
import { TimelineEvent } from "../utils/types/pr";

export const PRTimeline: React.FC<{ events: TimelineEvent[] }> = ({
  events,
}) => {
  function renderEventIcon(type: string) {
    switch (type) {
      case "title_changed":
        return <img src="/icons/editIcon.svg" alt="Edit icon" />;
      case "force_push":
        return <img src="/icons/codePush.svg" alt="Code push icon" />;
      case "label":
        return <img src="/icons/label.svg" alt="Code push icon" />;
      case "approval":
        return <img src="/icons/approval.svg" alt="Code push icon" />;
      case "merged":
        return <img src="/icons/merged.svg" alt="Code push icon" />;
      case "deployment":
        return <img src="/icons/deployment.svg" alt="deployment" />;
      case "commit":
        return <img src="/icons/commit.svg" alt="commit" />;
      default:
        return null;
    }
  }
  return (
    <ol className="relative w-full border-b-5 border-gray-300">
      <div className="absolute inset-y-0 left-[12%] w-1 bg-gray-300 dark:bg-gray-700" />

      {events.map((evt) => (
        <li key={evt.id} className="relative mb-8 ">
          {evt.type !== "comment" && (
            <div
              className={cn(
                "absolute left-[11%]  w-8 h-8 flex items-center justify-center  text-white rounded-full ",
                evt.type === "merged"
                  ? "bg-[#8957e5]"
                  : "bg-gray-200 dark:bg-[#9198A1]"
              )}
            >
              <span>{renderEventIcon(evt.type)}</span>
            </div>
          )}

          <div
            className={
              evt.type === "comment"
                ? "ml-10"
                : "relative left-[12%] ml-6 w-10/12"
            }
          >
            {evt.type === "comment" ? (
              <CommentItem
                username={evt.user}
                avatarUrl={evt.avatarUrl!}
                createdAt={evt.at}
                content={evt.content!}
                markDownTable={evt.table_markdown!}
              />
            ) : (
              <div className="bg-transparent text-wrap px-2">
                <div className="flex flex-row items-center text-sm">
                  <span className="font-medium text-white mr-1">
                    <Avatar
                      src={`https://github.com/${evt.user}.png`}
                      size="sm"
                    />
                  </span>

                  {evt.type === "title_changed" && (
                    <Typography variant="p" className="">
                      <Typography variant="bold">{evt.user}</Typography> changed
                      the title from{" "}
                      <Typography variant="strikeThrough">
                        {" "}
                        {evt.from}
                      </Typography>{" "}
                      {evt.to}
                    </Typography>
                  )}
                  {evt.type === "force_push" && (
                    <div className="flex flex-row justify-between w-full">
                      <div>
                        <Typography variant="p" className="">
                          <Typography variant="bold">{evt.user}</Typography>{" "}
                          force‑pushed the{" "}
                          <Badge variant="info" size="md">
                            main
                          </Badge>{" "}
                          branch from{" "}
                          <span className="font-semibold">{evt.from_sha}</span>{" "}
                          to <span className="font-semibold">{evt.to_sha}</span>
                        </Typography>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="dark:hover:bg-gray-700"
                      >
                        Compare
                      </Button>
                    </div>
                  )}
                  {evt.type === "approval" && (
                    <div className="flex flex-row justify-between w-full">
                      <div>
                        <Typography variant="p" className="">
                          {" "}
                          <Typography variant="bold">
                            {evt.user}
                          </Typography>{" "}
                          approved these changes
                        </Typography>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="dark:hover:bg-gray-700"
                      >
                        View reviewed changes
                      </Button>
                    </div>
                  )}
                  {evt.type === "merged" && (
                    <Typography variant="p" className="">
                      {" "}
                      <Typography variant="bold">{evt.user}</Typography> pull
                      request merged
                    </Typography>
                  )}
                  {evt.type === "label" && (
                    <Typography variant="p" className="">
                      {" "}
                      <Typography variant="bold">{evt.user}</Typography>
                      added the{" "}
                      <Badge variant="success" size="md">
                        {evt.label}
                      </Badge>{" "}
                      label on {evt.at}
                    </Typography>
                  )}
                  {evt.type === "commit" && (
                    <div className="flex flex-row justify-between text-center w-full">
                      <Typography
                        variant="p"
                        className="dark:text-gray-500 text-gray-500 text-center"
                      >
                        {" "}
                        {evt.content}
                      </Typography>
                      <div>
                        <span className="font-semibold flex flex-row dark:text-gray-300 text-gray-800 ">
                          {" "}
                          <ApprovalIcon />
                          {evt.code}
                        </span>
                      </div>
                    </div>
                  )}
                  {evt.type === "deployment" && (
                    <div className="flex flex-row justify-between text-center w-full">
                      <div>
                        <Typography variant="p" className="">
                          {" "}
                          <Typography variant="bold">{evt.user}</Typography>
                          added the{" "}
                          <Badge variant="default" size="md">
                            {evt.role}
                          </Badge>{" "}
                          deployed to{" "}
                          <Typography variant="bold">
                            {evt.deployed_to}
                          </Typography>{" "}
                          {evt.at}
                        </Typography>
                      </div>
                      <Button variant="secondary">View Deployment</Button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
};
