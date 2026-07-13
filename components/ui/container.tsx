import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

const sizeMap = {
  sm: "max-w-[var(--spacing-container-sm)]",
  md: "max-w-[var(--spacing-container-md)]",
  lg: "max-w-[var(--spacing-container-lg)]",
  xl: "max-w-[var(--spacing-container-xl)]",
  "2xl": "max-w-[var(--spacing-container-2xl)]",
  prose: "max-w-[var(--spacing-container-prose)]",
  full: "max-w-full",
} as const;

export type ContainerSize = keyof typeof sizeMap;

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: ContainerSize;
  /** Horizontal padding scale */
  padding?: "default" | "wide" | "narrow";
};

const paddingMap = {
  narrow: "px-5 sm:px-6 lg:px-8",
  default: "px-6 sm:px-10 lg:px-16",
  wide: "px-6 sm:px-12 lg:px-20",
} as const;

export function Container({
  size = "xl",
  padding = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full",
        paddingMap[padding],
        sizeMap[size],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
