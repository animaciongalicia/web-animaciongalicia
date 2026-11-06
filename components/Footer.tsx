import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p className="signature">{SITE.signature}</p>
        <p className="small">
          Las conversaciones de esta web son inventadas. Los enlaces comerciales, cuando los hay, van marcados.
        </p>
        <p className="small">
          <Link href="/informacion-editorial/">Información editorial y afiliación</Link>
        </p>
      </div>
    </footer>
  );
}
