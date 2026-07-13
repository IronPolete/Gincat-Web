import { mainNavItems } from "@/lib/navigation";
import { NavLink } from "./nav-link";

export function DesktopNav() {
  return (
    <nav
      aria-label="Main navigation"
      className="absolute left-1/2 hidden -translate-x-1/2 lg:block"
    >
      <ul className="flex items-center gap-8 xl:gap-10">
        {mainNavItems.map((item) => (
          <li key={item.href}>
            <NavLink href={item.href} label={item.label} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
