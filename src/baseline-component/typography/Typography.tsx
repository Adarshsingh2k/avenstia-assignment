import React, { ElementType } from "react";
import { cn } from "../../utils/cn";

export type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "label"
  | "subtitle"
  | "bold"
  | "strikeThrough";

interface TypographyProps {
  variant: Variant;
  children: React.ReactNode;
  className?: string;
}

const variantConfig: Record<
  Variant,
  { component: ElementType; className: string }
> = {
  h1: {
    component: "h1",
    className: "text-4xl  text-black dark:text-white",
  },
  h2: { component: "h2", className: "text-2xl  text-white" },
  h3: {
    component: "h3",
    className: "text-xl font-semibold text-black dark:text-white",
  },
  h4: {
    component: "h4",
    className: "text-lg font-medium dark:text-white text-black ",
  },
  h5: { component: "h5", className: "text-base font-medium text-white" },
  h6: { component: "h6", className: "text-sm font-medium text-white" },
  p: {
    component: "p",
    className: "text-base text-gray-200 text-black dark:text-white",
  },
  label: {
    component: "span",
    className:
      "inline-block text-xs font-semibold uppercase tracking-wide text-gray-400",
  },
  subtitle: {
    component: "span",
    className: "text-sm text-gray-400",
  },
  bold: {
    component: "span",
    className: "font-bold text-black dark:text-white",
  },
  strikeThrough: {
    component: "span",
    className: "line-through text-[#59636e] dark:text-gray-500",
  },
};

export const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className,
}) => {
  const { component: Tag, className: baseStyles } = variantConfig[variant];
  return <Tag className={cn(baseStyles, className)}>{children}</Tag>;
};
