import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  async redirects() {
    return [
      // /despedidas/ equivale a la portada. Los artículos viven en /despedidas/<slug>/.
      { source: "/despedidas", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
