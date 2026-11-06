import Link from "next/link";
import { NavLinks } from "./NavLinks";
import { SITE } from "@/lib/site";

export function Header() {
  return (
    <header className="masthead">
      <div className="wrap-wide">
        <p className="mast-top">Revista digital · Un proyecto de Animación Galicia</p>
        <Link href="/" className="logo" aria-label={`${SITE.name}, ir a la portada`}>
          Menú <span>Marrón</span>
        </Link>
        <p className="mast-tag">Tonterías útiles para sobrevivir al marrón de organizar algo</p>
        <NavLinks />
      </div>
    </header>
  );
}
