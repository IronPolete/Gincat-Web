"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  label: string;
  className?: string;
  onNavigate?: () => void;
  mobile?: boolean;
};

export function NavLink({
  href,
  label,
  className,
  onNavigate,
  mobile = false,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive =
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "relative transition-base",
        mobile
          ? [
              "font-display text-2xl font-semibold tracking-tight text-foreground",
              "hover:text-accent",
              isActive && "text-accent",
            ]
          : [
              "px-1 py-2 text-body-sm font-medium text-muted-foreground",
              "hover:text-foreground",
              isActive && "text-foreground",
              "after:absolute after:inset-x-1 after:-bottom-px after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-normal after:ease-out",
              "hover:after:scale-x-100",
              isActive && "after:scale-x-100",
            ],
        className,
      )}
    >
      {label}
    </Link>
  );
}
