# BONMONT - Guia Tecnica del Proyecto

## 1) Stack y enfoque
- Sitio estatico en HTML.
- Estilos con Tailwind CSS via CDN (`https://cdn.tailwindcss.com`).
- No hay framework JS (React/Vue/etc.). Solo JS inline por pagina para interacciones concretas.
- Hosting en Firebase con carpeta de publicacion `public/`.

## 2) Archivos clave
- `public/index.html`: home principal.
- `public/philosophy.html`, `public/faqs.html`, `public/wellness.html`, `public/indoor.html`, `public/outdoor.html`, `public/lifestyle.html`, `public/legal.html`, `public/blog.html`: paginas seccionadas.
- `public/guia-modernismo-reus.html`, `public/rutas-btt-mont-roig-del-camp.html`, `public/tradicion-calcotada-valls-tarragona.html`: articulos del blog.
- `public/images/`: recursos visuales.
- `firebase.json`: configuracion de hosting (public dir).
- `.firebaserc`: proyecto Firebase por defecto.
- `docs/`: documentacion interna.

## 3) Desarrollo
No existe pipeline de compilacion CSS.
Cada pagina carga Tailwind desde CDN y define su `tailwind.config` inline (colores/fuentes).

Flujo recomendado:
1. Editar archivos en `public/`.
2. Validar visualmente en navegador (desktop + movil).
3. Recarga dura (`Ctrl+F5`) y comprobacion final.

## 4) Convenciones de estilos (importante)
- Proyecto en modo CDN-only.
- Se permiten clases arbitrarias con corchetes cuando son la forma mas directa y mantenible.
- Priorizar consistencia de patrones comunes (header/footer/cookie banner y breakpoints).

## 5) Esquema de navegacion (mapa rapido)
Rutas publicas (en navegador) y archivo fisico en repo (`public/...`):
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
