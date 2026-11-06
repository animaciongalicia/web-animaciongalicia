"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/site";

export function NavLinks() {
  const pathname = usePathname() ?? "/";
  return (
    <nav aria-label="Principal" className="nav">
      <ul>
        {NAV.map((n) => {
          const active =
            n.href === "/"
              ? pathname === "/" || pathname.startsWith("/despedidas")
              : pathname.startsWith(n.href);
          return (
            <li key={n.href}>
              <Link href={n.href} aria-current={active ? "page" : undefined}>
                {n.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
