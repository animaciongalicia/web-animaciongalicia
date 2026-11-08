import { urlGrupo } from "@/lib/company";

/** Enlace a una web del grupo: se abre en otra pestaña. Sin nofollow (son webs propias). */
export function EnlaceGrupo({ dominio, children }: { dominio: string; children: React.ReactNode }) {
  return (
    <a href={urlGrupo(dominio)} target="_blank" rel="noopener">
      {children}
    </a>
  );
}
