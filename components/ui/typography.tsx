import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ElementType } from "react";

type TypographyProps<T extends ElementType> = {
  as?: T;
  className?: string;
} & ComponentPropsWithoutRef<T>;

export function Display<T extends ElementType = "h1">({
  as,
  size = "lg",
  className,
  ...props
}: TypographyProps<T> & {
  size?: "md" | "lg" | "xl" | "2xl";
}) {
  const Component = as ?? "h1";
  const sizeClass = {
    md: "text-display-md",
    lg: "text-display-lg sm:text-display-xl",
    xl: "text-display-xl lg:text-display-2xl",
    "2xl": "text-display-2xl",
  }[size];

  return (
    <Component
      className={cn(
        "font-display text-balance tracking-tight text-foreground",
        sizeClass,
        className,
      )}
      {...props}
    />
  );
}

export function Heading<T extends ElementType = "h2">({
  as,
  level = 2,
  className,
  ...props
}: TypographyProps<T> & { level?: 1 | 2 | 3 | 4 }) {
  const Component = as ?? (`h${level}` as ElementType);
  const sizeClass = {
    1: "text-heading-xl",
    2: "text-heading-lg",
    3: "text-heading-md",
    4: "text-heading-sm",
  }[level];

  return (
    <Component
      className={cn(
        "font-display tracking-tight text-foreground",
        sizeClass,
        className,
      )}
      {...props}
    />
  );
}

export function Text<T extends ElementType = "p">({
  as,
  size = "md",
  tone = "default",
  className,
  ...props
}: TypographyProps<T> & {
  size?: "lg" | "md" | "sm";
  tone?: "default" | "muted" | "subtle";
}) {
  const Component = as ?? "p";
  const sizeClass = {
    lg: "text-body-lg",
    md: "text-body-md",
    sm: "text-body-sm",
  }[size];

  const toneClass = {
    default: "text-foreground",
    muted: "text-muted-foreground",
    subtle: "text-subtle-foreground",
  }[tone];

  return (
    <Component
      className={cn(sizeClass, toneClass, className)}
      {...props}
    />
  );
}

export function Lead<T extends ElementType = "p">({
  as,
  className,
  ...props
}: TypographyProps<T>) {
  const Component = as ?? "p";
  return (
    <Component
      className={cn(
        "max-w-2xl text-body-lg text-pretty text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

export function Eyebrow<T extends ElementType = "span">({
  as,
  className,
  ...props
}: TypographyProps<T>) {
  const Component = as ?? "span";
  return (
    <Component
      className={cn(
        "inline-block font-sans text-label uppercase tracking-widest text-accent",
        className,
      )}
      {...props}
    />
  );
}

export function Caption<T extends ElementType = "span">({
  as,
  className,
  ...props
}: TypographyProps<T>) {
  const Component = as ?? "span";
  return (
    <Component
      className={cn("text-caption text-subtle-foreground", className)}
      {...props}
    />
  );
}

export function Overline<T extends ElementType = "span">({
  as,
  className,
  ...props
}: TypographyProps<T>) {
  const Component = as ?? "span";
  return (
    <Component
      className={cn(
        "inline-block font-mono text-caption uppercase tracking-wider text-metal-steel",
        className,
      )}
      {...props}
    />
  );
}
