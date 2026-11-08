import type { Metadata, Viewport } from "next";
import "@fontsource-variable/newsreader/wght.css";
import "@fontsource-variable/newsreader/wght-italic.css";
import "@fontsource-variable/inter";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cookies } from "@/components/Cookies";
import { GA_ACTIVO } from "@/lib/analytics";
import { JsonLd } from "@/components/JsonLd";
import { AGENCIA } from "@/lib/company";
import { absoluteUrl, SITE, BASE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url + BASE + "/"),
  title: {
    default: "Menudo marrón organizar este evento · Menú Marrón",
    template: "%s · Menú Marrón",
  },
  description: SITE.tagline,
  applicationName: SITE.name,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  alternates: { types: { "application/rss+xml": "/feed.xml" } },
  robots: SITE.indexable ? { index: true, follow: true } : { index: false, follow: false },
  other: { "geo.region": "ES-GA", "geo.placename": "Galicia" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "es_ES",
    images: [{ url: "/og/inicio.png", width: 1200, height: 630, alt: "Menú Marrón, un proyecto de Animación Galicia" }],
  },
  twitter: { card: "summary_large_image", images: ["/og/inicio.png"] },
};

export const viewport: Viewport = {
  themeColor: "#f5f2ea",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                name: SITE.name,
                url: absoluteUrl("/"),
                inLanguage: "es",
                description: SITE.tagline,
                publisher: { "@type": "Organization", name: AGENCIA.nombre },
              },
              {
                "@type": "Organization",
                name: AGENCIA.nombre,
                description: AGENCIA.lema,
                areaServed: { "@type": "AdministrativeArea", name: "Galicia" },
              },
            ],
          }}
        />
        <a href="#main" className="skip">
          Saltar al contenido
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        {GA_ACTIVO && <Cookies />}
      </body>
    </html>
  );
}
