import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

const spacingMap = {
  none: "",
  xs: "py-section-xs",
  sm: "py-section-sm",
  md: "py-section-md",
  lg: "py-section-lg",
  xl: "py-section-xl",
} as const;

export type SectionSpacing = keyof typeof spacingMap;

export type SectionProps = HTMLAttributes<HTMLElement> & {
  spacing?: SectionSpacing;
  surface?: "default" | "muted" | "subtle" | "inverse";
  divider?: boolean;
};

const surfaceMap = {
  default: "bg-background",
  muted: "bg-surface-muted",
  subtle: "bg-surface-subtle",
  inverse: "bg-surface-inverse text-white [&_h1]:text-white [&_h2]:text-white [&_h3]:text-white [&_h4]:text-white [&_p]:text-brand-200 [&_span]:text-brand-200",
} as const;

export function Section({
  spacing = "md",
  surface = "default",
  divider = false,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        spacingMap[spacing],
        surfaceMap[surface],
        divider && "border-t border-border",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}

export function SectionHeader({
  className,
  align = "left",
  gap = "lg",
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  align?: "left" | "center";
  gap?: "md" | "lg" | "xl";
}) {
  const gapMap = {
    md: "gap-4",
    lg: "gap-5",
    xl: "gap-6",
  };

  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col",
        gapMap[gap],
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
      {...props}
    />
  );
}

export function SectionDivider({
  className,
  ...props
}: HTMLAttributes<HTMLHRElement>) {
  return (
    <hr
      className={cn("border-0 border-t border-border", className)}
      {...props}
    />
  );
}
