# BONMONT - Guia Tecnica del Proyecto

## 1) Stack y enfoque
- Sitio estatico en HTML.
- Estilos con Tailwind CSS via CDN (`https://cdn.tailwindcss.com`).
- No hay framework JS (React/Vue/etc.). Solo JS inline por pagina para interacciones concretas.

## 2) Archivos clave
- `index.html`: home principal.
- `philosophy.html`, `faqs.html`, `wellness.html`, `indoor.html`, `outdoor.html`, `lifestyle.html`, `legal.html`, `blog.html`: paginas seccionadas.
- `guia-modernismo-reus.html`, `rutas-btt-mont-roig-del-camp.html`, `tradicion-calcotada-valls-tarragona.html`: articulos del blog.
- `images/`: recursos visuales.
- `docs/`: documentacion interna.

## 3) Desarrollo
No existe pipeline de compilacion CSS.
Cada pagina carga Tailwind desde CDN y define su `tailwind.config` inline (colores/fuentes).

Flujo recomendado:
1. Editar HTML.
2. Validar visualmente en navegador (desktop + movil).
3. Recarga dura (`Ctrl+F5`) y comprobacion final.

## 4) Convenciones de estilos (importante)
- Proyecto en modo CDN-only.
- Se permiten clases arbitrarias con corchetes cuando son la forma mas directa y mantenible.
- Priorizar consistencia de patrones comunes (header/footer/cookie banner y breakpoints).

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
- Mantener consistencia de header/footer entre paginas.
- Conservar metadatos SEO/OpenGraph por pagina.
- Si se añade nueva pagina, enlazarla desde navegacion y revisar `sitemap.xml`.

## 7) Checklist rapido antes de entregar
1. Navegacion desktop/movil funcional.
2. Modo oscuro claro/estable.
3. Enlaces internos sin roturas.
4. Revision visual desktop + movil.
