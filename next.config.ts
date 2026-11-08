import type { NextConfig } from "next";
import { REDIRECTS_WORDPRESS } from "./content/redirects";

const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").trim().replace(/^\/+|\/+$/g, "");

const nextConfig: NextConfig = {
  ...(base ? { basePath: `/${base}` } : {}),
  trailingSlash: true,
  poweredByHeader: false,
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
