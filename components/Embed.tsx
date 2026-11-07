import type { Embed } from "@/content/types";

/** Reproductor oficial de YouTube (dominio sin cookies hasta que se pulsa play). */
export function EmbedVideo({ embed }: { embed: Embed }) {
  if (embed.proveedor !== "youtube" || !/^[\w-]{6,20}$/.test(embed.id)) return null;
  return (
    <figure className="embed">
      <div className="embed-frame">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${embed.id}`}
          title={embed.titulo}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <figcaption>{embed.titulo}</figcaption>
    </figure>
  );
}
