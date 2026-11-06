export type EsquelaData = {
  plan: string;
  causa: string;
  presupuesto: number;
  supervivientes: number;
  sobreviven: string;
};

export const ESQUELA_DEFAULT: EsquelaData = {
  plan: "el fin de semana en Oporto",
  causa: "un «es que me coincide con el curro»",
  presupuesto: 340,
  supervivientes: 11,
  sobreviven: "una cena en Vigo",
};

const clean = (s: string, n: number) => s.replace(/\s+/g, " ").trim().slice(0, n);

export function sanitizeEsquela(d: Partial<Record<keyof EsquelaData, unknown>>): EsquelaData {
  const num = (v: unknown, max: number) => {
    const n = Math.round(Number(v));
    return Number.isFinite(n) && n > 0 ? Math.min(n, max) : 0;
  };
  return {
    plan: clean(String(d.plan ?? ""), 60) || ESQUELA_DEFAULT.plan,
    causa: clean(String(d.causa ?? ""), 80) || ESQUELA_DEFAULT.causa,
    presupuesto: num(d.presupuesto, 99999),
    supervivientes: num(d.supervivientes, 999),
    sobreviven: clean(String(d.sobreviven ?? ""), 60),
  };
}

/** Texto de la esquela, línea a línea. */
export function esquelaLines(d: EsquelaData) {
  const survivors: string[] = [];
  if (d.sobreviven) survivors.push(d.sobreviven);
  if (d.supervivientes > 0) {
    survivors.push(
      d.supervivientes === 1
        ? "1 persona que jamás confirmó"
        : `${d.supervivientes} personas que jamás habían confirmado`,
    );
  }
  const lines = [`Nos dejó ${d.plan}.`, `Causa del fallecimiento: ${d.causa}.`];
  if (d.presupuesto > 0) lines.push(`Presupuesto perdido: ${d.presupuesto} €.`);
  if (survivors.length) lines.push(`Le sobreviven ${survivors.join(" y ")}.`);
  lines.push("Descanse en paz. El grupo no responde.");
  return lines;
}

export function esquelaText(d: EsquelaData, planB?: string) {
  return ["✝ ESQUELA ✝", ...esquelaLines(d), ...(planB ? ["", planB] : [])].join("\n");
}

export function esquelaQuery(d: EsquelaData, planB: string) {
  const q = new URLSearchParams();
  q.set("plan", d.plan);
  q.set("causa", d.causa);
  if (d.presupuesto) q.set("p", String(d.presupuesto));
  if (d.supervivientes) q.set("s", String(d.supervivientes));
  if (d.sobreviven) q.set("x", d.sobreviven);
  if (planB) q.set("b", planB);
  return q.toString();
}

export function esquelaFromParams(sp: Record<string, string | string[] | undefined>) {
  const g = (k: string) => (Array.isArray(sp[k]) ? sp[k]![0] : sp[k]);
  const has = !!(g("plan") || g("causa"));
  return {
    has,
    data: sanitizeEsquela({
      plan: g("plan"),
      causa: g("causa"),
      presupuesto: g("p"),
      supervivientes: g("s"),
      sobreviven: g("x"),
    }),
    planB: clean(String(g("b") ?? ""), 100),
  };
}
