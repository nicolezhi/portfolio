import Link from "next/link";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/lib/navigation";

type SiteNavProps = {
  items: readonly NavItem[];
  className?: string;
  onNavigate?: () => void;
};

export function SiteNav({ items, className, onNavigate }: SiteNavProps) {
  return (
    <nav aria-label="Primary">
      <ul className={cn("flex items-center gap-6", className)}>
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} onClick={onNavigate} className="text-body">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
