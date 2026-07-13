import { cn } from "@/lib/utils";
import type { LucideIcon, LucideProps } from "lucide-react";

const sizeMap = {
  xs: "size-3.5",
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
  xl: "size-8",
} as const;

export type IconSize = keyof typeof sizeMap;

export type IconProps = LucideProps & {
  icon: LucideIcon;
  size?: IconSize;
  label?: string;
};

export function Icon({
  icon: IconComponent,
  size = "md",
  label,
  className,
  strokeWidth = 1.5,
  ...props
}: IconProps) {
  return (
    <IconComponent
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
      strokeWidth={strokeWidth}
      className={cn("shrink-0 text-current", sizeMap[size], className)}
      {...props}
    />
  );
}

export type IconBoxProps = {
  icon: LucideIcon;
  size?: IconSize;
  variant?: "default" | "accent" | "muted";
  className?: string;
  label?: string;
};

const iconBoxVariants = {
  default: "bg-surface-muted text-foreground border border-border",
  accent: "bg-accent-muted text-accent border border-accent-200",
  muted: "bg-surface text-muted-foreground border border-border-subtle",
} as const;

const boxSizeMap = {
  xs: "size-8 rounded-sm",
  sm: "size-10 rounded-md",
  md: "size-12 rounded-md",
  lg: "size-14 rounded-lg",
  xl: "size-16 rounded-lg",
} as const;

export function IconBox({
  icon,
  size = "md",
  variant = "default",
  className,
  label,
}: IconBoxProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center transition-base",
        boxSizeMap[size],
        iconBoxVariants[variant],
        className,
      )}
    >
      <Icon icon={icon} size={size} label={label} />
    </div>
  );
}
