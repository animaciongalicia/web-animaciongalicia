import type { ToolId } from "@/content/types";
import { Bingo } from "./Bingo";
import { Coartada } from "./Coartada";
import { Subasta } from "./Subasta";
import { Esquela } from "./Esquela";
import { Ruleta } from "./Ruleta";
import { Tragaperras } from "./Tragaperras";
import { Rasca } from "./Rasca";
import { ESQUELA_DEFAULT } from "@/lib/esquela";

export function ToolRenderer({ id, override }: { id: ToolId; override?: React.ReactNode }) {
  if (override) return <>{override}</>;
  switch (id) {
    case "bingo":
      return <Bingo />;
    case "coartada":
      return <Coartada />;
    case "subasta":
      return <Subasta />;
    case "esquela":
      return <Esquela initial={ESQUELA_DEFAULT} planB="" />;
    case "ruleta":
      return <Ruleta />;
    case "tragaperras":
      return <Tragaperras />;
    case "rasca":
      return <Rasca />;
  }
}
