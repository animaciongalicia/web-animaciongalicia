import Link from "next/link";
import { NavLinks } from "./NavLinks";
import { SITE } from "@/lib/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-row">
        <Link href="/" className="logo" aria-label={`${SITE.name}, ir a la portada`}>
          <span className="logo-mark" aria-hidden="true">
            ☕
          </span>
          <span>
            Menú<b>Marrón</b>
          </span>
        </Link>
        <NavLinks />
      </div>
    </header>
  );
}
