import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

const cardVariants = cva(
  ["relative overflow-hidden bg-surface transition-base"],
  {
    variants: {
      variant: {
        default: "border border-border rounded-xl shadow-card",
        elevated: "border border-border-subtle rounded-xl shadow-elevated",
        outlined: "border border-border-strong rounded-xl shadow-none",
        muted: "border border-border-subtle bg-surface-muted rounded-xl shadow-none",
        feature: [
          "border border-border rounded-xl shadow-card",
          "before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-accent",
        ],
      },
      padding: {
        none: "",
        sm: "p-6",
        md: "p-8",
        lg: "p-10 sm:p-12",
      },
      interactive: {
        true: "cursor-pointer hover-card",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
      interactive: false,
    },
  },
);

export type CardProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariants>;

export function Card({
  className,
  variant,
  padding,
  interactive,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(cardVariants({ variant, padding, interactive }), className)}
      {...props}
    />
  );
}

export function CardHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col gap-3", className)} {...props} />
  );
}

export function CardTitle({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "font-display text-heading-sm tracking-tight text-foreground",
        className,
      )}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-body-sm text-muted-foreground text-pretty", className)}
      {...props}
    />
  );
}

export function CardContent({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(className)} {...props} />;
}

export function CardFooter({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mt-auto flex items-center gap-4 pt-6", className)}
      {...props}
    />
  );
}

export { cardVariants };
