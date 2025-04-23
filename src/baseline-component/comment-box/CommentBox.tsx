import React, { useState } from "react";
import { cn } from "../../utils/cn";
import Button from "../buttons/Button";

type CommentBoxProps = {
  onSubmit: (comment: string) => void;
  onCancel?: () => void;
  autoFocus?: boolean;
  placeholder?: string;
  className?: string;
};

const CommentBox: React.FC<CommentBoxProps> = ({
  onSubmit,
  onCancel,
  autoFocus = false,
  placeholder = "Leave a comment",
  className,
}) => {
  const [comment, setComment] = useState("");
  const [isPreview, setIsPreview] = useState(false);

  const handleSubmit = () => {
    if (comment.trim()) {
      onSubmit(comment.trim());
      setComment("");
      setIsPreview(false);
    }
  };

  return (
    <div className={cn("border rounded-md p-4", className)}>
      <div className="mb-2">
        <div className="flex gap-4 border-b mb-2">
          <button
            className={cn(
              "text-sm py-1 border-b-2",
              !isPreview
                ? "border-blue-600 font-medium text-blue-600"
                : "border-transparent text-gray-600"
            )}
            onClick={() => setIsPreview(false)}
          >
            Write
          </button>
          <button
            className={cn(
              "text-sm py-1 border-b-2",
              isPreview
                ? "border-blue-600 font-medium text-blue-600"
                : "border-transparent text-gray-600"
            )}
            onClick={() => setIsPreview(true)}
          >
            Preview
          </button>
        </div>

        {!isPreview ? (
          <textarea
            autoFocus={autoFocus}
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder={placeholder}
            className="w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ) : (
          <div className="text-sm text-gray-800 whitespace-pre-line bg-gray-50 border p-2 rounded-md min-h-[5rem]">
            {comment || "*Nothing to preview*"}
          </div>
        )}
      </div>

      <div className="flex gap-2 justify-end">
        {onCancel && (
          <Button variant="ghost" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <Button onClick={handleSubmit} disabled={!comment.trim()}>
          Comment
        </Button>
      </div>
    </div>
  );
};

export default CommentBox;
