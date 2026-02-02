INDEX-ESTRUCTURA.md
Propósito
Documento técnico para clonar el index.html actual en un proyecto nuevo con Tailwind CSS puro (sin prefijos ni CSS heredado). Contiene: lista de assets y su ubicación exacta, copia textual por componente, especificaciones (tamaños, colores, utilidades Tailwind), IDs/clases para hooks JS, notas ARIA y checklist QA. Todos los vídeos serán WebM (NO AVI).

1) Assets obligatorios (nombre exacto y ubicación) 🗂️
hero-night.webm — Hero background video (en <section id="hero">, atributo poster="images/hero-poster.jpg").
hero-poster.jpg — Poster del hero (poster del <video>). Recomendado 1600–2000px ancho, 16:9.
closing-poster.jpg — Poster del closing (poster del <video> en .closing). 1600–2000px ancho.
identity-villa.webp — Imagen full-width en sección villa-experience.
interior-entry.webp — Imagen del portal interior con botón play (interior-portal).
interior-tour.webm — Vídeo modal interior (#videoModal). preload="none".
Outdoor-tour.webm — Vídeo modal exterior (#outdoorVideoModal). preload="none".
outdoor-tour.webp — Imagen del portal outdoor.
salon.webp, kitchen.webp, bedroom.webp, bathroom.webp — Cards interiores (interiors-preview).
pool-day.webp, sobremesa.webp — Outdoor gallery (.outdoor-gallery).
golf.webp, beach.webp, culture.webp, gastronomy.webp — Lifestyle cards.
idoia.webp — Imagen del anfitrión en host-card.
Nota: los ratings en esta primera versión son estáticos (valores en HTML).

2) Copia textual (usar tal cual) ✍️
Skip link: Ir al contenido principal
Nav: Inicio, Interiores, Exteriores, Equipamiento y Bienestar, Estilo de vida, La anfitriona, Reservar
Hero H1: An exclusive refuge designed to be lived
Hero CTA: Crea recuerdos (aria-label: Consultar disponibilidad en Airbnb)
Hero tagline: Haz que tu visita a la Costa Dorada sea inolvidable
Identity title: Un entorno hecho a tu medida
Stage subtitle: El escenario de tu estancia
Stage italic: Cada detalle está pensado para ofrecerte una experiencia de absoluto confort.
Stats exactos: 600 — m² interiores, 1.600 — m² de parcela privada, 6 — dormitorios dobles, 14 — huéspedes, 5 + 1 — baños + aseo
Airbnb snapshot: Evaluación en Airbnb / 4,87 / 84 evaluaciones / categorías: Limpieza, Llegada, Ubicación, Veracidad, Comunicación, Calidad
Comments tags: usar los del HTML (lista existente)
Interior quote: Te invito a cruzar el umbral y sentir cómo el diseño y la arquitectura te abrazan.
Host: Hosted by Idoia / Airbnb Superanfitriona / 11 años de experiencia / bio exacta en index.html
Closing: H2 A Place to Be Together — CTA Reserve on Airbnb
Cookie banner: texto y botones tal como están en index.html.
3) Especificación por bloque (clases Tailwind sin prefijo) 🔧
Globales y tokens
Colores: primary #1a1a1a, secondary #c9a866, text #2c2c2c, muted #666666, hero-text #f8f8f7.
Tipografías: font-sans: Poppins, font-serif: Crimson Text, font-bodoni: Libre Bodoni.
Contenedor: max-w-[1400px] mx-auto px-6 (mobile px-4).
Header / Nav (sticky, blur) 🧭
Wrapper: sticky top-0 z-50 bg-white/60 backdrop-blur-md border-b border-black/5.
Inner: max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between.
Logo: font-serif text-[1.5rem] font-light text-[#1a1a1a].
Links (desktop): text-[0.9rem] uppercase tracking-[1px] text-[#2c2c2c] hover:text-[#c9a866] transition-colors duration-200.
Active: text-[#c9a866] font-semibold border-b-2 border-[#c9a866]/20 pb-1.
CTA Reservar: bg-[#1a1a1a] text-white px-6 py-3 uppercase tracking-[1.5px] text-[0.85rem] rounded-md.
Mobile menu: panel absolute top-full left-0 right-0 bg-white shadow-lg flex flex-col p-4 space-y-2.
Hooks/ARIA: #menuToggle (aria-expanded), #navMenu, #themeToggle (aria-pressed).
Hero (video background) 🎬
Section: relative h-screen min-h-[600px] overflow-hidden flex items-center justify-center.
Video: <video autoplay muted playsinline poster="images/hero-poster.jpg" class="absolute inset-0 w-full h-full object-cover"> (src hero-night.webm).
Overlay: absolute inset-0 bg-black/40 z-20.
Content: relative z-30 text-center text-white py-32 px-4 flex flex-col justify-between h-full.
H1: text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] font-serif italic font-light text-[#f8f8f7] shadow-[0_2px_12px_rgba(0,0,0,0.3)].
CTA: inline-block uppercase tracking-[1.2px] text-[0.85rem] px-5 py-3 border border-white/50 hover:bg-white hover:text-[#1a1a1a] transition.
Tagline: uppercase tracking-[4px] text-[1.1rem] md:text-[1.3rem].
Villa identity & Stats 🧾
Wrapper: py-16 md:py-24. Intro paragraph: font-sans italic text-[1.05rem] text-[#666] leading-7 max-w-[800px] mx-auto my-6.
Stats grid: grid grid-cols-2 md:grid-cols-5 gap-6.
Stat number: text-[2.5rem] font-semibold text-[#c9a866]. Label: text-[0.75rem] uppercase text-[#666].
Airbnb Snapshot (evaluaciones) ⭐
Container: py-8 max-w-[1200px] mx-auto px-4. Grid: grid grid-cols-1 md:grid-cols-4 gap-8.
Score: text-[2.5rem] font-semibold text-[#c9a866].
Category row: .flex items-center gap-3 — number text-[1.25rem] font-semibold, label text-sm text-[#666].
Comments panel: collapsed max-h-0 overflow-hidden transition-[max-height] duration-300 → expanded max-h-[1000px].
Amenities grid 🧰
grid grid-cols-1 md:grid-cols-4 gap-8. Block title: text-sm uppercase tracking-[1px] font-semibold. Item: flex items-start gap-3; icon w-5 h-5; text text-sm text-[#333].
Interior portal & modal ▶️
Preview: image h-[380px] md:h-[500px] object-cover rounded. Play button centered absolute bg-black/90 p-3 rounded-full w-12 h-12.
Modal: fixed inset-0 z-50 flex items-center justify-center bg-black/60; content max-w-[1100px] w-full bg-black rounded overflow-hidden. Video controls preload="none" (source interior-tour.webm).
ARIA: #interiorModal aria-label, modal role="dialog" aria-modal="true" aria-labelledby.
Interiors preview cards & Outdoor gallery 🖼️
Grid: grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6.
Image: aspect-[4/3] object-cover rounded. Use <picture> with WebP; loading="lazy" for non-critical.
Lifestyle cards & Location 🧭
Lifestyle grid: grid grid-cols-2 md:grid-cols-4 gap-6; tile h-[220px].
Location: Two-column md:flex md:gap-8; iframe w-full h-64 md:h-96 rounded border-0.
Host card & Closing 🎯
Host: flex flex-col md:flex-row items-center gap-6 image w-36 h-36 rounded-full.
Closing: Section relative h-[480px] md:h-[560px] flex items-center justify-center with <video poster="images/closing-poster.jpg"> using hero-night.webm. H2 text-3xl md:text-4xl font-serif font-light text-white. CTA px-8 py-4 bg-[#1a1a1a] text-white rounded-md.
Footer & Cookie banner 🍪
Footer: grid grid-cols-1 md:grid-cols-4 gap-6 bg-[#1a1a1a] text-white py-8 px-6.
Cookie banner: fixed bottom-0 inset-x-0 bg-white/95 text-[#1a1a1a] px-4 py-3 shadow-lg z-50 flex flex-col md:flex-row items-center justify-between gap-3. Buttons btn-outline / btn-primary.
4) Performance & imagenes 📈
Formatos: WebM para vídeos; imágenes AVIF/WebP/JPG variants (serve AVIF primary only if you will, fallback WebP/JPG).
srcset widths recomendados: 480, 800, 1200, 1600.
loading="lazy" on non-critical images; hero poster & hero video critical (no lazy).
Modal videos preload="none" and controls.
5) ARIA & accesibilidad ✅
html lang="es" recomendado.
Single <h1> (hero).
Skip link visible on focus.
Modals role="dialog" aria-modal="true" aria-labelledby. Implement focus trap and return focus to trigger.
Collapsibles use aria-controls / aria-expanded.
All images must have alt.
6) JS behaviors (lista definitiva) ⚙️
Mobile menu toggle & outside-click close.
Smooth scroll to hash with header offset.
Active nav section highlight.
Video modals: open, aria-hidden toggle, play/pause/reset, ESC close, trap focus.
Comments panel expand/collapse (aria updates).
Cookie consent (store villa-cookie-consent, villa-analytics-consent, dispatch cookieConsentChanged); no analytics without consent.
Lightbox for galleries.
Lazy loading images.
7) QA: criterios de aceptación ✔️
Visual parity con el index.html actual (texto, imágenes, espaciados y colores).
Hero reproduce hero-night.webm muted y respeta hero-poster.jpg.
Ratings idénticos (estáticos).
Todas las interacciones funcionan con teclado y ratón.
No se importa CSS legacy; solo utilidades Tailwind.
Accessibility audit (axe/Lighthouse) > thresholds (Accessibility >= 95).