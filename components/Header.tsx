import Link from "next/link";
import { NavLinks } from "./NavLinks";
import { SITE } from "@/lib/site";

export function Header() {
  return (
    <header className="masthead">
      <div className="wrap-wide">
        <p className="mast-top">
          <span>Revista digital · Hecha en Galicia</span>
          <span className="mast-right">Un proyecto de Animación Galicia</span>
        </p>
        <Link href="/" className="logo" aria-label={`${SITE.name}, ir a la portada`}>
          Menú <em>Marrón</em>
        </Link>
        <p className="mast-tag">Lo mejor (y lo peor) de la red sobre el marrón de organizar algo</p>
        <NavLinks />
      </div>
    </header>
  );
}
