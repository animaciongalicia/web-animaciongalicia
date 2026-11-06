import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap page">
      <h1>Esta página se ha caído del plan</h1>
      <p>
        Como el que dijo «cuenta conmigo» y no volvió a dar señales. La página que buscas no existe, o se fue sin avisar.
      </p>
      <p>
        <Link className="btn btn-primary" href="/">
          Volver a la portada
        </Link>
      </p>
    </div>
  );
}
