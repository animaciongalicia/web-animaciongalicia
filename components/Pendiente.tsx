export function Dato({ v }: { v?: string }) {
  return v ? <>{v}</> : <span className="pending">[PENDIENTE DE COMPLETAR]</span>;
}
