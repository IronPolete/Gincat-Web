import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

const gapMap = {
  xs: "gap-[var(--spacing-gap-xs)]",
  sm: "gap-[var(--spacing-gap-sm)]",
  md: "gap-[var(--spacing-gap-md)]",
  lg: "gap-[var(--spacing-gap-lg)]",
  xl: "gap-[var(--spacing-gap-xl)]",
  "2xl": "gap-[var(--spacing-gap-2xl)]",
  "3xl": "gap-[var(--spacing-gap-3xl)]",
} as const;

export type StackGap = keyof typeof gapMap;

export type StackProps = HTMLAttributes<HTMLDivElement> & {
  gap?: StackGap;
  direction?: "vertical" | "horizontal";
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between";
};

const alignMap = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
} as const;

const justifyMap = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
} as const;

export function Stack({
  gap = "md",
  direction = "vertical",
  align = "stretch",
  justify = "start",
  className,
  children,
  ...props
}: StackProps) {
  return (
    <div
      className={cn(
        "flex",
        direction === "vertical" ? "flex-col" : "flex-row",
        gapMap[gap],
        alignMap[align],
        justifyMap[justify],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { gapMap as stackGapMap };
