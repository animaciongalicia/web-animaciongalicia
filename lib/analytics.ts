/** Google Analytics 4. Solo se carga en producción (SITE_INDEXABLE=true) y tras aceptar las cookies. */
export const GA_ID = (process.env.NEXT_PUBLIC_GA_ID ?? "G-JY6XXV50MM").trim();
export const GA_ACTIVO = process.env.SITE_INDEXABLE === "true" && GA_ID.length > 0;
export const CONSENT_KEY = "mm-cookies";
export const CONSENT_EVENT = "mm-cookies-cambio";
