# BONMONT - Guia Tecnica del Proyecto

## 1) Stack y enfoque
- Sitio estatico en HTML.
- Estilos con Tailwind CSS v4 (via `@tailwindcss/cli`).
- No hay framework JS (React/Vue/etc.). Solo JS inline por pagina para interacciones concretas.

## 2) Archivos clave
- `index.html`: home principal.
- `philosophy.html`, `faqs.html`, `wellness.html`, `indoor.html`, `outdoor.html`, `lifestyle.html`, `legal.html`, `blog.html`: paginas seccionadas.
- `guia-modernismo-reus.html`, `rutas-btt-mont-roig-del-camp.html`, `tradicion-calcotada-valls-tarragona.html`: articulos del blog.
- `input.css`: fuente de estilos Tailwind (tokens + utilidades personalizadas).
- `output.css`: CSS generado (no editar a mano).
- `images/`: recursos visuales.
- `docs/`: documentacion interna.

## 3) Build y desarrollo
Scripts en `package.json`:
- `npm run build`: compila `input.css` -> `output.css`.
- `npm run dev`: watch mode para recompilar en cambios.

Flujo recomendado:
1. Editar HTML y/o `input.css`.
2. Ejecutar `npm run build`.
3. Validar visualmente en navegador.

## 4) Convenciones de estilos (importante)
- Proyecto estandarizado para **no usar clases arbitrarias con corchetes** dentro de `class`.
- En su lugar, usar utilidades semanticas definidas en `input.css`.
- Referencia completa: `docs/tailwind-no-brackets.md`.

Regla operativa:
1. Si falta un estilo, crear `@utility` en `input.css`.
2. Reutilizar el nombre en HTML.
3. Recompilar (`npm run build`).

## 5) Esquema de navegacion (mapa rapido)
- Home: `index.html`
- Interior: `indoor.html`
- Exterior: `outdoor.html`
- Epicentro/Lifestyle: `lifestyle.html`
- Anfitriona/Filosofia: `philosophy.html`
- FAQs y reserva: `faqs.html`
- Blog: `blog.html`
- Legal: `legal.html`

## 6) Buenas practicas al "meter mano"
- No editar `output.css` manualmente.
- Mantener consistencia de header/footer entre paginas.
- Conservar metadatos SEO/OpenGraph por pagina.
- Si se toca UI global (tipografias, spacing, color), hacerlo en `input.css`.
- Si se añade nueva pagina, enlazarla desde navegacion y revisar `sitemap.xml`.

## 7) Checklist rapido antes de entregar
1. `npm run build` sin errores.
2. Sin clases con corchetes en `class` HTML.
3. Navegacion desktop/movil funcional.
4. Modo oscuro claro/estable.
5. Enlaces internos sin roturas.
