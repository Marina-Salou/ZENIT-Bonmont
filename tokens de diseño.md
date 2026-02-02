Resumen de tokens de diseño (valores canónicos) 🔧
Colores: primary #1a1a1a, secondary #c9a866, text #2c2c2c, hero-text #f8f8f7, muted #666666.
Tipografías: font-sans = Poppins, font-serif = Crimson Text, font-bodoni = Libre Bodoni (usar en headings hero si procede).
Contenedor: max-w-[1400px] mx-auto px-6 (desktop); mobile px-4.
Espaciado vertical consistente: sección principal py-24 (mobile py-12, md/desktop py-24).
Header / Nav (sticky, cristal) 🧭
Estructura: <header class="sticky top-0 z-50 bg-white/60 backdrop-blur-md border-b border-black/5"> → contenedor max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between.
Logo: class="font-serif text-[1.5rem] font-light text-[#1a1a1a]".
Links (desktop): text-[0.9rem] uppercase tracking-[1px] text-[#2c2c2c] hover:text-[#c9a866] transition-colors duration-200.
Link activo: text-[#c9a866] font-semibold border-b-2 border-[#c9a866]/20 pb-1.
CTA Reservar: bg-[#1a1a1a] text-white px-6 py-3 uppercase tracking-[1.5px] text-[0.85rem] rounded-md hover:bg-[#333].
Mobile: hamburguer button visible md:hidden (spans w-[25px] h-[3px] bg-[#1a1a1a]) and mobile menu absolute top-full left-0 right-0 bg-white shadow-lg flex flex-col (use space-y-2 py-4).
Accesibilidad: nav aria-label, #menuToggle aria-expanded, links focus outline (use focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-secondary)]).
Hero (video + poster, overlay, texto) 🎬
Video tag: <video autoplay muted playsinline poster="images/hero-poster.jpg" class="absolute inset-0 w-full h-full object-cover">.
Poster: usar hero-poster.jpg 1600–2000px wide, aspect ratio 16:9. Add loading="eager" for main poster.
(Recomendado) añadir MP4 fallback if needed.
Container: section relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden.
Overlay: absolute inset-0 bg-black/40 z-20.
Content wrapper: relative z-30 text-center text-white py-32 px-4 flex flex-col justify-between h-full.
H1 (hero):
Mobile: text-[2rem] → MD: md:text-[2.5rem] → LG: lg:text-[3.5rem].
Clases: font-serif italic font-light text-[#f8f8f7] tracking-normal + shadow shadow-[0_2px_12px_rgba(0,0,0,0.3)].
CTA:
inline-block uppercase tracking-[1.2px] text-[0.85rem] px-5 py-3 border border-white/50 hover:bg-white hover:text-[#1a1a1a] transition.
Tagline bottom:
font-serif uppercase tracking-[4px] text-[1.1rem] md:text-[1.3rem] text-[#f8f8f7] shadow-[0_1px_8px_rgba(0,0,0,0.25)].
Espaciados: entre H1 y CTA mt-4; CTA y tagline mt-auto (mantener tagline en la parte baja del área hero si se quiere).
Villa Identity / Stats (grid) 🧾
Sección wrapper: py-16 md:py-24 max-w-[1400px] mx-auto px-6.
Intro texto (cursiva): font-sans italic text-[1.05rem] text-[#666] leading-relaxed max-w-[800px] mx-auto my-6.
Stats grid: grid grid-cols-2 md:grid-cols-5 gap-6 items-start.
Stat number: text-[2.5rem] md:text-[2.5rem] font-semibold text-[#c9a866] leading-tight.
Label: text-[0.75rem] uppercase tracking-[1px] text-[#666].
Icon size: w-6 h-6 text-[#1a1a1a] (use SVG/feather).
Full-width image below: figure with overflow-hidden rounded → img classes w-full h-auto object-cover — recommended source width 1600–2000px.
Airbnb Snapshot (score & categories) ⭐
Wrapper: py-8 max-w-[1200px] mx-auto px-4.
Grid: grid grid-cols-1 md:grid-cols-4 gap-8 items-end.
Score number: text-[2.5rem] font-semibold text-[#c9a866].
Category rows: icon + number + label .flex items-center gap-3
Number text-[1.25rem] font-semibold text-[#333]; label text-sm text-[#666].
Recommend panel collapsed: max-h-0 overflow-hidden transition-[max-height] duration-300 → expanded: max-h-[1000px].
Botón Ver: btn small px-3 py-2 bg-transparent border border-[rgba(0,0,0,0.08)].
Amenities grid (4 columnas responsive) 🧰
Container: py-12 md:py-16 max-w-[1200px] mx-auto px-4.
Grid: grid grid-cols-1 md:grid-cols-4 gap-8.
Block title: text-sm uppercase tracking-[1px] font-semibold.
Item row: flex items-start gap-3 → icon w-5 h-5 flex-none, text text-sm text-[#333] leading-7.
Margen inferior entre items mb-3 (or vertical gap in parent).
Interior Portal (imagen+play modal) ▶️
Figure container: relative rounded overflow-hidden.
Image: w-full h-[380px] md:h-[500px] object-cover (use srcset widths 800/1200).
Play button: absolute inset-0 flex items-center justify-center then button bg-black/90 p-3 rounded-full w-12 h-12 md:w-14 md:h-14 with SVG w-6 h-6.
Video modal:
Modal wrapper fixed inset-0 z-50 flex items-center justify-center bg-black/60.
Modal content max-w-[1100px] w-full bg-black rounded-md overflow-hidden.
Video w-full h-auto controls preload="none".
Accessibility: button aria-label "Play full interior tour video"; modal has role="dialog" aria-modal="true" aria-labelledby="modal-title".
Interiors preview cards (4) 🖼️
Grid: grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6.
Card image: aspect-[4/3] w-full object-cover rounded.
Card content: p-4 with h3 text-lg font-semibold font-serif and sub text-sm text-[#666].
CTA link: inline-block text-sm text-[#1a1a1a] hover:text-[#c9a866].
Outdoor gallery & cards 🌿
Similar to interiors but use larger images: h-[360px] md:h-[420px].
Card overlay optional: absolute bottom-4 left-4 bg-white/80 px-3 py-2 rounded for captions.
Use loading="lazy" and responsive srcset.
Lifestyle cards (grid) 🧭
Grid: grid grid-cols-2 md:grid-cols-4 gap-6.
Tile image: h-[220px] object-cover rounded.
Title: mt-3 text-[1rem] font-semibold.
Location (map + details) 🗺️
Two-column stack md:flex md:gap-8 with details left and map right.
Map iframe: w-full h-64 md:h-96 rounded border-0.
Contact mail link: text-[#1a1a1a] underline and rel="noopener".
Host card (Idoia) 👩‍💼
Layout: flex flex-col md:flex-row gap-6 items-center -> image w-36 h-36 rounded-full object-cover and content max-w-[700px].
Titles: h2 text-xl font-serif, badge small text-sm uppercase text-[#c9a866].
CTA: outline button border px-4 py-2.
Closing CTA (video poster + CTA) 🎥
Video: reuse hero-night.webm with poster="images/closing-poster.jpg".
Section layout: relative h-[480px] md:h-[560px] flex items-center justify-center.
H2: text-3xl md:text-4xl font-serif font-light text-white.
CTA: large px-8 py-4 text-[1rem] uppercase bg-[#1a1a1a] text-white rounded-md.
Footer & Cookie banner 🦶🍪
Footer columns: grid grid-cols-1 md:grid-cols-4 gap-6 bg-[#1a1a1a] text-white py-8 px-6.
Footer bottom: border-t border-white/10 pt-6 text-center text-sm text-white/80.
Cookie banner: fixed bottom-0 inset-x-0 bg-white/95 text-[#1a1a1a] px-4 py-3 shadow-lg z-50 with buttons btn-outline and btn-primary.
Imágenes: tamaños y srcset 📸
Recomendado srcset widths: 480, 800, 1200, 1600. AVIF primary, WebP fallback, JPG final. Example:
<source type="image/avif" srcset="image-480.avif 480w, image-800.avif 800w, image-1200.avif 1200w"> then WebP, then <img src="image-1200.jpg" alt="...">.
Hero poster: deliver at 1600–2000px (use image-1600.webp + avif).
Identity full width: 1600–2000px.
Previews/thumbnails: 800–1200px.
Accesibilidad final & performance ✨
Añadir loading="lazy" y decoding="async" en imágenes no críticas.
Videos heavy: preload="none" for modal videos; hero can autoplay but fallback poster must exist.
Verificar contraste de texto sobre overlays (hero overlay 40% ensures contrast with #f8f8f7).
Test keyboard: tab order, modal focus trap, skip link visibility.