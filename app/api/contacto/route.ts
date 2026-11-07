import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const clip = (v: unknown, n: number) => (typeof v === "string" ? v.trim().slice(0, n) : "");

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Petición no válida" }, { status: 400 });
  }

  // Honeypot: los bots rellenan este campo.
  if (clip(data.web, 50)) return NextResponse.json({ ok: true, mode: "ok" });

  const kind = data.kind === "marron" ? "marron" : data.kind === "enlace" ? "enlace" : "contacto";
  const mensaje = clip(data.mensaje, 4000);
  const email = clip(data.email, 160);
  const asunto =
    clip(data.asunto, 120) || (kind === "marron" ? "Cuéntanos tu marrón" : kind === "enlace" ? "Enlace sugerido" : "Contacto");
  const permiso = data.permiso === "si";

  const url = clip(data.url, 500);
  if (kind === "enlace") {
    if (!/^https?:\/\/[^\s]+$/.test(url)) return NextResponse.json({ error: "Enlace no válido" }, { status: 400 });
  } else if (!mensaje) {
    return NextResponse.json({ error: "Falta el mensaje" }, { status: 400 });
  }
  if (kind === "contacto" && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: "Correo no válido" }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  // Sin proveedor configurado: modo de prueba. No se envía nada.
  if (!key || !to || !from) {
    return NextResponse.json({ ok: true, mode: "test" });
  }

  const text = [
    `Tipo: ${kind === "marron" ? "Cuéntanos tu marrón" : kind === "enlace" ? "Enlace sugerido" : "Contacto"}`,
    kind === "enlace" ? `Enlace: ${url}` : "",
    `Asunto: ${asunto}`,
    `Correo de respuesta: ${email || "(no indicado)"}`,
    kind !== "contacto" ? `Permiso para citar: ${permiso ? "SÍ" : "NO"}` : "",
    "",
    mensaje,
  ]
    .filter((l) => l !== "")
    .join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `[Menú Marrón] ${asunto}`,
      text,
      ...(email ? { reply_to: email } : {}),
    }),
  });

  if (!res.ok) return NextResponse.json({ error: "El proveedor de correo ha fallado" }, { status: 502 });
  return NextResponse.json({ ok: true, mode: "ok" });
}
