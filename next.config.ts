import type { NextConfig } from "next";
import { REDIRECTS_WORDPRESS } from "./content/redirects";

const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").trim().replace(/^\/+|\/+$/g, "");

const nextConfig: NextConfig = {
  ...(base ? { basePath: `/${base}` } : {}),
  trailingSlash: true,
  poweredByHeader: false,
  // Cabeceras de seguridad básicas (sin CSP estricta: Google Analytics y los scripts de Next necesitan inline).
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), interest-cohort=()" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // La página de la agencia se fusionó con «Cómo trabajamos».
      base
        ? { source: `/${base}/animacion-galicia`, destination: `/${base}/como-trabajamos/`, permanent: true, basePath: false as const }
        : { source: "/animacion-galicia", destination: "/como-trabajamos/", permanent: true },
      // URLs del WordPress anterior (solo si la revista vive en la raíz del dominio).
      ...(base ? [] : REDIRECTS_WORDPRESS.map((r) => ({ ...r, permanent: true }))),
    ];
  },
};

export default nextConfig;
