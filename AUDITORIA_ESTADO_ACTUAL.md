Auditoria CDN - Estado Final

Fecha: cierre en esta sesion
Alcance: todas las paginas `*-cdn.html` del repositorio

Resumen
- Auditoria tecnica cerrada.
- Auditoria visual cerrada (desktop + movil, validacion practica durante la migracion).
- No quedan restos de clases/tokens legacy del sistema anterior en las copias CDN.

Paginas auditadas (12/12)
- `index-cdn.html`
- `legal-cdn.html`
- `blog-cdn.html`
- `faqs-cdn.html`
- `philosophy-cdn.html`
- `lifestyle-cdn.html`
- `indoor-cdn.html`
- `outdoor-cdn.html`
- `wellness-cdn.html`
- `guia-modernismo-reus-cdn.html`
- `rutas-btt-mont-roig-del-camp-cdn.html`
- `tradicion-calcotada-valls-tarragona-cdn.html`

Resultado por criterios (12/12 OK)
1. Dependencias antiguas
- Sin `output.css` ni `input.css` en `*-cdn.html`.
- `cdn.tailwindcss.com` presente en todas.

2. Config minima
- `tailwind.config` limitado a `theme.extend.colors` y `theme.extend.fontFamily`.
- Sin `fontSize`, `spacing`, `maxWidth`, `letterSpacing`, `animation` en `extend`.

3. Purga de tokens legacy
- Barrido global en `*-cdn.html`: 0 coincidencias para:
  - `text-hero-`, `text-display-`, `text-ui-`, `tracking-ui-`
  - `max-w-200|max-w-275|max-w-300|max-w-350`
  - `animate-spin-slow`, `w-6.5`
  - `grid-cols-3-auto`, `grid-cols-1-2`, `grid-cols-2-1`
  - `transition-max-height`, `w-modal`, `max-h-screen-90`, `max-h-250`

4. Estructura comun
- Header/Footer/Cookie banner con patron de contenedor:
  - `w-full max-w-[1400px] mx-auto px-6`
- CTA desktop visible (`sm:inline-block`).
- Menu movil con IDs estandar (`menuToggle`, `mobileMenu`) en todas.
- Dark mode funcional (`darkMode: "class"`, `themeToggle`, `localStorage.theme`).

5. Validacion visual
- Sin regresiones graves detectadas en layout general, navegacion, footer y cookies.
- Caso investigado en `index-cdn.html`: recorte aparente en DevTools movil.
  - Diagnostico final: zoom/emulacion de DevTools, no overflow real del documento.
  - Verificacion runtime: `clientWidth == scrollWidth` (sin desbordamiento horizontal real).

Pendientes
- Ninguno para `*-cdn.html` en la fase de auditoria.

Siguiente paso recomendado
- Ejecutar fase de cierre de migracion (sustitucion de originales por `*-cdn.html`), y despues limpieza final del pipeline antiguo segun `PLAN_MIGRACION_A_CDN.md`.
