import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap-wide">
        <p className="signature">{SITE.signature}</p>
        <p className="small">
          Revista digital de tonterías útiles para sobrevivir al marrón de organizar algo. Las conversaciones y los personajes son inventados. Los enlaces comerciales, cuando los hay, van marcados.
        </p>
        <p className="small">
          <Link href="/informacion-editorial/">Información editorial y afiliación</Link>
        </p>
      </div>
    </footer>
  );
}
