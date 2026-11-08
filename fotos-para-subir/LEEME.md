# Fotos para subir

Aquí se dejan las **fotos chotas** (despedidas, cumpleaños, regalos, eventos) para publicarlas en la revista.

## Cómo subirlas desde GitHub (sin instalar nada)

1. Entra en la carpeta `fotos-para-subir` del repositorio en GitHub.
2. Pulsa **Add file → Upload files** y arrastra las fotos (cada archivo, hasta 25 MB).
3. (Opcional, recomendable) Edita `leyendas.txt` y añade una línea por foto: descripción, pie y etiqueta.
4. Haz el *commit*.
5. Pídele a Claude Code: **«procesa las fotos de `fotos-para-subir`»**. Las reduce a 1600 px, **les quita la ubicación
   y los demás metadatos**, las publica en la galería (`/fotos/`) y borra los originales de la carpeta.

Para hacerlo a mano en un ordenador con el proyecto:

```bash
npm run fotos -- --consentimiento
```

## Reglas (importantes)

- **Solo fotos tuyas o con permiso expreso de las personas que salen.** Es obligatorio por el derecho a la propia imagen y
  por protección de datos. Al ejecutar el proceso confirmas que lo tienes (`--consentimiento`).
- **Nada de menores.**
- **Formatos:** `.jpg`, `.png`, `.webp`. Las fotos de iPhone en `.heic`, conviértelas antes a `.jpg`.
- **Nombre del archivo:** si no hay leyenda, el nombre del archivo se usa como descripción. Mejor un nombre claro:
  `novio-disfraz-flamenco.jpg` que `IMG_4821.jpg`.
- **Descripción (alt):** describe lo que se ve. Sirve para accesibilidad y para el buscador.

## Aviso de privacidad

Las fotos originales traen **metadatos con la ubicación GPS**. El proceso se los quita a las publicadas, pero **el original
subido a GitHub queda en el historial del repositorio**. Si el repositorio fuese público, cualquiera podría verlo.
Mantén el repositorio **privado**, o quita los metadatos antes de subir la foto.

## Retirar una foto

Escribe a la revista desde Contacto o dilo aquí: se borra de `public/fotos/` y de `content/fotos.ts`.
