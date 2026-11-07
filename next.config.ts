import type { NextConfig } from "next";

const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").trim().replace(/^\/+|\/+$/g, "");

const nextConfig: NextConfig = {
  ...(base ? { basePath: `/${base}` } : {}),
  trailingSlash: true,
  poweredByHeader: false,
  async redirects() {
    return [
      // /despedidas/ equivale a la portada. Los artículos viven en /despedidas/<slug>/.
      base
        ? { source: `/${base}/despedidas`, destination: `/${base}/`, permanent: true, basePath: false as const }
        : { source: "/despedidas", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
