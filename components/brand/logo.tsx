import { cn } from "@/lib/utils";
import Link from "next/link";

type LogoProps = {
  className?: string;
  variant?: "default" | "compact";
};

export function Logo({ className, variant = "default" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Gincat System — Home"
      className={cn(
        "group inline-flex items-center gap-3.5 transition-base",
        className,
      )}
    >
      <LogoMark className="size-10 shrink-0 sm:size-11" />
      <div className={cn("flex flex-col", variant === "compact" && "hidden sm:flex")}>
        <span className="font-display text-lg font-semibold leading-none tracking-tight text-foreground transition-base group-hover:text-accent sm:text-xl">
          Gincat
        </span>
        <span className="mt-1 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-muted-foreground">
          System
        </span>
      </div>
    </Link>
  );
}

function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <rect
        x="1"
        y="1"
        width="42"
        height="42"
        rx="6"
        className="stroke-border-strong fill-surface transition-base group-hover:stroke-accent/40"
        strokeWidth="1"
      />
      <path
        d="M14 30V14h10.5c4.2 0 7 2.4 7 6.1 0 2.3-1.1 4.1-3 5.1l4.5 4.8h-4.8l-3.8-4.2H18v4.2H14zm4-8.2h6c1.8 0 2.8-0.9 2.8-2.3s-1-2.3-2.8-2.3H18v4.6z"
        className="fill-foreground transition-base group-hover:fill-accent"
      />
      <path
        d="M11 34h22"
        className="stroke-accent"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
