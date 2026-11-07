import { piezaPath, visibles } from "@/lib/piezas";
import { SITE } from "@/lib/site";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const dynamic = "force-static";

export function GET() {
  const items = visibles()
    .filter((p) => !p.borrador)
    .map(
      (p) => `    <item>
      <title>${esc(p.titulo)}</title>
      <link>${SITE.url}${piezaPath(p)}</link>
      <guid isPermaLink="true">${SITE.url}${piezaPath(p)}</guid>
      <pubDate>${new Date(p.fecha + "T09:00:00Z").toUTCString()}</pubDate>
      <description>${esc(p.dek)}</description>
    </item>`,
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${esc(SITE.name)}</title>
    <link>${SITE.url}/</link>
    <description>${esc(SITE.tagline)}</description>
    <language>es</language>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
