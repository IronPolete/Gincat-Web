import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "font-sans font-medium whitespace-nowrap",
    "transition-base",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-ring-offset",
    "disabled:pointer-events-none disabled:opacity-40",
    "select-none",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-accent text-accent-foreground",
          "hover:bg-accent-hover",
          "active:opacity-90",
        ],
        secondary: [
          "bg-surface text-foreground border border-border",
          "hover:bg-surface-muted hover:border-border-strong",
          "active:opacity-90",
        ],
        outline: [
          "bg-transparent text-foreground border border-border-strong",
          "hover:bg-surface-muted",
          "active:opacity-90",
        ],
        ghost: [
          "bg-transparent text-foreground",
          "hover:bg-surface-muted",
          "active:opacity-80",
        ],
        signal: [
          "bg-signal text-signal-foreground",
          "hover:bg-signal-hover",
          "active:opacity-90",
        ],
        link: [
          "bg-transparent text-accent p-0 h-auto underline-offset-4",
          "hover:text-accent-hover hover:underline",
        ],
      },
      size: {
        sm: "h-9 px-4 text-body-sm rounded-md",
        md: "h-11 px-6 text-body-sm rounded-md",
        lg: "h-[3.25rem] px-8 text-body-md rounded-lg",
        icon: "size-11 rounded-md",
        "icon-sm": "size-9 rounded-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({
  className,
  variant,
  size,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { buttonVariants };
