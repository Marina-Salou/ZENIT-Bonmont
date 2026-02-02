los snippets completos para el Bloque 1 (Hero + Play + Modal + Gallery + JS + ejemplos de srcset). Abajo tienes el HTML, clases Tailwind exactas, SVG del play, y JS vanilla listo para copiar/pegar y ajustar.

1) Hero (HTML + clases Tailwind) 🎬
Archivos: video hero-night.webm, poster hero-poster.jpg
Reglas clave: overlay bg-black/40, H1 shadow 0 2px 12px rgba(0,0,0,.3), espaciados exactos (ver clases).
HTML:

<section id="hero" class="relative h-screen min-h-[600px] overflow-hidden flex items-center justify-center">
  <!-- Video background (WebM only) -->
  <video autoplay muted playsinline poster="images/hero-poster.jpg" class="absolute inset-0 w-full h-full object-cover filter brightness-[0.95]">
    <source src="images/hero-night.webm" type="video/webm">
  </video>

  <!-- Overlay -->
  <div class="absolute inset-0 bg-black/40 z-20"></div>

  <!-- Content -->
  <div class="relative z-30 text-center text-white py-32 px-4 flex flex-col justify-between h-full">
    <h1 class="font-bodoni italic font-[400] text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] tracking-[0.5px] leading-[1.1] drop-shadow-[0_2px_12px_rgba(0,0,0,0.3)]">
      An exclusive refuge designed to be lived
    </h1>

    <a href="https://www.airbnb.es/rooms/42616703" aria-label="Consultar disponibilidad en Airbnb"
       class="inline-block uppercase tracking-[1.2px] text-[0.85rem] px-5 py-3 border border-white/50 rounded-md hover:bg-white hover:text-[#1a1a1a] transition-colors duration-200">
      Crea recuerdos
    </a>

    <h2 class="font-bodoni uppercase tracking-[4px] text-[1.1rem] md:text-[1.3rem] mt-6">
      Haz que tu visita a la Costa Dorada sea inolvidable
    </h2>
  </div>
</section>

Espaciados exactos: H1→CTA mt-4 (16px móvil / 20px md / 24px lg), CTA→Tagline mt-6 (24px móvil / 28px md / 32px lg).
Tipografía H1: tracking 0.5px, leading 1.1 (exacto), shadow 0 2px 12px rgba(0,0,0,0.3).
2) Botón Play (diseño del triángulo) ▶️
Diseño: círculo negro semiopaco con triángulo blanco centrado. Tamaño botón: 48px (w-12 h-12).
SVG del triángulo centrado:

<button id="interiorModal" aria-label="Play full interior tour video"
        class="absolute inset-0 m-auto w-12 h-12 flex items-center justify-center bg-black/90 rounded-full">
  <svg width="24" height="24" viewBox="0 0 24 24" class="text-white" aria-hidden="true" focusable="false">
    <circle cx="12" cy="12" r="12" fill="currentColor" opacity="0.0"/>
    <path d="M9 7 L17 12 L9 17 Z" fill="white"/>
  </svg>
</button>

Nota: el SVG usa path M9 7 L17 12 L9 17 Z (triángulo isósceles bien centrado). Botón tiene bg-black/90 p-3 rounded-full.

3) Modal accesible (markup & clases) 🔒
<!-- trigger: see Play button above -->
<div id="videoModal" class="hidden fixed inset-0 z-50 items-center justify-center bg-black/60" role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <div class="relative w-[min(1100px,96%)] max-h-[90vh] bg-black rounded-md overflow-hidden">
    <button id="modalClose" class="absolute top-3 right-3 z-40 text-white text-2xl leading-none" aria-label="Cerrar video">&times;</button>
    <h3 id="modal-title" class="sr-only">Video tour</h3>
    <video id="modalVideo" class="w-full h-auto" controls preload="none">
      <source src="images/interior-tour.webm" type="video/webm">
      Tu navegador no soporta el elemento video.
    </video>
  </div>
</div>

Reglas: modal hidden por defecto; al abrir añadir flex y remover hidden. Mantener aria-hidden acorde (o presencia/ausencia del DOM). preload="none" en modal videos.

4) JS para modal (abrir / cerrar / play / pause / focus trap) 🧩
Snippet vanilla minimal, accesible, sin dependencias:

// Modal helper
function openModal(modalId, videoId, triggerButton) {
  const modal = document.getElementById(modalId);
  const video = document.getElementById(videoId);
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.classList.add('flex'); // .flex for center alignment
  document.body.style.overflow = 'hidden';
  video && video.play().catch(()=>{});
  modal.setAttribute('aria-hidden', 'false');
  // store trigger to return focus
  modal._trigger = triggerButton || document.activeElement;
  // focus first focusable element
  const closeBtn = modal.querySelector('#modalClose');
  closeBtn && closeBtn.focus();
  trapFocus(modal);
}

function closeModal(modalId, videoId) {
  const modal = document.getElementById(modalId);
  const video = document.getElementById(videoId);
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
  if (video) {
    video.pause();
    video.currentTime = 0;
  }
  modal.setAttribute('aria-hidden', 'true');
  // return focus
  const trigger = modal._trigger;
  trigger && trigger.focus();
}

// Focus trap (simple)
function trapFocus(modal) {
  const focusable = modal.querySelectorAll('a,button,input,textarea,select,[tabindex]:not([tabindex="-1"])');
  if (!focusable.length) return;
  const first = focusable[0], last = focusable[focusable.length - 1];
  modal.addEventListener('keydown', function onKey(e){
    if (e.key === 'Escape') { closeModal(modal.id, modal.querySelector('video')?.id); }
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
}

// Attach handlers for the interior modal example
document.getElementById('interiorModal')?.addEventListener('click', (e)=>{
  openModal('videoModal','modalVideo', e.currentTarget);
});
document.getElementById('modalClose')?.addEventListener('click', ()=> closeModal('videoModal','modalVideo'));

// close when clicking on backdrop
document.getElementById('videoModal')?.addEventListener('click', (e)=>{
  if (e.target.id === 'videoModal') closeModal('videoModal','modalVideo');
});

6) srcset / convención de nombres (ejemplo) 📐
Naming convention: name-480.webp, name-800.webp, name-1200.webp, name-1600.webp.
Example <picture>:

<picture>
  <source type="image/webp" srcset="images/pool-day-480.webp 480w, images/pool-day-800.webp 800w, images/pool-day-1200.webp 1200w">
  <img src="images/pool-day-1200.webp" alt="..." loading="lazy">
</picture>

7) Notas finales & checklist rápido ✅
Hero: WebM + poster, overlay 40% black.
Play button: 48px circle, SVG triángulo M9 7 L17 12 L9 17 Z.
Modals: trap focus, ESC to close, clicking backdrop closes, video resets on close.
Gallery: data-lightbox anchoring, keyboard navigation, lazy images, srcset.
All markup must keep ARIA attributes (aria-label, role, aria-modal, aria-controls).

Propongo cambios concretos (clases exactas) para evitar el problema y asegurar que los IDs no se confundan.

✅ Resumen rápido
El botón interiorModal NO debe ir en el Hero. El Hero usa la CTA “Crea recuerdos” (sin ese id).
Hay que garantizar márgenes verticales explícitos para evitar que H1/CTA/Tagline queden pegados en pantallas bajas (usar mt-4 / mt-6 y padding-bottom en el contenedor).
Correcciones exactas (copiar/pegar)
Hero — asegurar padding inferior y márgenes:
Contenedor hero content: añade pb-16 md:pb-24
CTA (hero): añade margen superior
class="inline-block ... mt-4 md:mt-5 lg:mt-6"
Tagline: añade margen superior
class="... mt-6 md:mt-7 lg:mt-8"

<div class="relative z-30 text-center text-white py-32 px-4 flex flex-col justify-between h-full pb-16 md:pb-24">
  <h1 class="...">An exclusive refuge designed to be lived</h1>
  <a class="inline-block ... mt-4 md:mt-5 lg:mt-6" aria-label="Consultar disponibilidad en Airbnb">Crea recuerdos</a>
  <h2 class="... mt-6 md:mt-7 lg:mt-8">Haz que tu visita...</h2>
</div>

Interior & Outdoor — play button placement and classes (asegurar id correcto):
Put the button inside the respective figure (NOT in hero).
Use this markup and classes (48px button, triangle SVG):

<figure class="relative overflow-hidden rounded">
  <img src="images/interior-entry.webp" class="w-full h-[380px] md:h-[500px] object-cover" alt="...">
  <button id="interiorModal" aria-label="Play full interior tour video"
          class="absolute inset-0 m-auto w-12 h-12 flex items-center justify-center bg-black/90 rounded-full focus:outline-none focus:ring-2 focus:ring-white">
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 7 L17 12 L9 17 Z" fill="white"/>
    </svg>
  </button>
</figure>

Same pattern for outdoors with id="outdoorModal" and src="images/outdoor-tour.webp".
IDs únicos y accesibilidad
Verifica que no exista ningún otro elemento con id="interiorModal" o id="modalVideo" duplicado.
Asegura aria-label en los botones play y role="dialog" aria-modal="true" en los modales.


Ajustes finos por bloque (clases exactas, márgenes y comportamiento)
1) Villa Identity / Stats (detalles)
Wrapper: section → class="py-16 md:py-24 max-w-[1400px] mx-auto px-6"
Intro (cursiva): class="font-sans italic text-[1.05rem] md:text-[1.1rem] text-[#666666] leading-[1.8] max-w-[800px] mx-auto my-6"
Stats grid:
Wrapper: class="grid grid-cols-2 md:grid-cols-5 gap-6 items-start"
Stat box: class="flex items-start gap-3"
Icon: class="w-6 h-6 flex-none text-[#1a1a1a]"
Number: class="text-[2.5rem] font-semibold text-[#c9a866] leading-none"
Label: class="text-[0.75rem] uppercase tracking-[1px] text-[#666666]"
Margen entre blocks: mt-8 entre intro y stats; mt-6 sobre la imagen.
2) Airbnb Snapshot (micro detalles)
Container: class="py-8 max-w-[1200px] mx-auto px-4"
Grid: class="grid grid-cols-1 md:grid-cols-4 gap-8 items-end"
Score column: class="flex flex-col justify-end"
Score class="text-[2.5rem] font-semibold text-[#c9a866]"
Reviews class="text-sm text-[#666666] mt-1"
Category row item: class="flex items-center gap-3 py-2"
Number: class="cat-number text-[1.25rem] font-semibold"
Label: class="cat-label text-sm text-[#666666]"
Comments panel:
Defaults: id="comments-panel" class="comments-panel max-h-0 overflow-hidden transition-[max-height] duration-300"
Expanded (JS toggles): add inline class max-h-[1000px].
Button: class="comments-toggle inline-flex items-center gap-2 px-3 py-2 border rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-secondary)]"
3) Amenities grid
Section class="py-12 md:py-16"
Grid: class="grid grid-cols-1 md:grid-cols-4 gap-8"
Block title: class="text-sm uppercase tracking-[1px] font-semibold mb-3"
Item: class="flex items-start gap-3 mb-3"
Icon class="w-5 h-5 flex-none"
Text class="text-sm text-[#333333]"
4) Interior portal + Play (corrección de id)
Figure: class="relative rounded overflow-hidden"
Image: class="w-full h-[380px] md:h-[500px] object-cover"
Play button (IMPORTANT: id on the play in Interiors only):

<button id="interiorModal" aria-label="Play full interior tour video"
  class="absolute inset-0 m-auto w-12 h-12 flex items-center justify-center bg-black/90 rounded-full focus:outline-none focus:ring-2 focus:ring-white">
  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M9 7 L17 12 L9 17 Z" fill="white"/>
  </svg>
</button>

Margin around figure: mt-6 below subtitle.
JS: #interiorModal opens #videoModal (see modal code).
5) Previews interiores & outdoor gallery (espaciados y srcset)
Grid: class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
Card image: class="aspect-[4/3] w-full object-cover rounded" (use <picture> with -480, -800, -1200 variants).
Caption area: class="p-4" with h3 class="text-lg font-semibold font-serif" and p class="text-sm text-[#666666] mt-1".
Gallery lightbox trigger: anchor data-lightbox="outdoor" (JS lightbox).
6) Lifestyle cards (detalles)
Card image: class="h-[220px] object-cover rounded"
Title: class="mt-3 text-[1rem] font-semibold"
7) Location (map + contact)
Two-column stack wrapper: class="md:flex md:gap-8 items-start"
Details column width: class="md:flex-1 md:pr-6"
Map iframe: class="w-full h-64 md:h-96 rounded border-0"
8) Host card
Wrapper: class="flex flex-col md:flex-row items-center gap-6 py-8"
Image: class="w-36 h-36 rounded-full object-cover flex-none"
Content: class="md:flex-1"
CTA: class="btn btn-outline mt-4"
9) Closing section (video)
Wrapper: class="relative h-[480px] md:h-[560px] flex items-center justify-center"
Video: <video poster="images/closing-poster.jpg" class="absolute inset-0 w-full h-full object-cover" autoplay muted playsinline>
Content overlay: class="relative z-30 text-center text-white px-4"
H2: class="text-3xl md:text-4xl font-serif font-light text-white leading-[1.15]"
CTA: class="px-8 py-4 rounded-md bg-[#1a1a1a] text-white"
10) Footer & Cookie banner
Footer columns: class="grid grid-cols-1 md:grid-cols-4 gap-6 bg-[#1a1a1a] text-white py-8 px-6"
Footer bottom: class="border-t border-white/10 pt-6 text-center text-sm text-white/80"
Cookie banner: class="fixed bottom-0 inset-x-0 bg-white/95 text-[#1a1a1a] px-4 py-3 shadow-lg z-50 flex flex-col md:flex-row items-center justify-between gap-3"
Cookie buttons: btn btn-outline and btn btn-primary.
Comprobaciones finales antes del merge (quick QA)
Ver que no haya IDs duplicados (interiorModal, outdoorModal, modalVideo, etc.).
Ver encabezados visibles: header bg-white/60 y z-50 + hero overlay z-20 para que no tape el header. Si header oculto, forzar bg-white/80 temporal y comprobar.
Pantallas muy bajas: comprobar hero pb (pb-16 md:pb-24) para evitar pegar elementos al borde.
Ejecutar pruebas de teclado: Tab order, abrir modal y cerrar con Escape, lightbox navigation arrows.

Los modales y la función para abrir cada vídeo (interior / exterior) ✅
Resumen rápido: uso dos modales distintos con IDs y vídeos distintos y una función única reutilizable openVideoModal(modalId, videoId, trigger) + closeVideoModal(...). Maneja play/pause/reset, bloqueo de scroll, aria-hidden y retorno de foco; incluye cierre por ESC y click en backdrop.

Código (pegar tal cual en main.js o fichero similar):
// Abrir modal de vídeo (reusable)
function openVideoModal(modalId, videoId, trigger) {
  const modal = document.getElementById(modalId);
  const video = document.getElementById(videoId);
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.classList.add('flex'); // centrar con flex
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modal._trigger = trigger || document.activeElement;
  // play (catch autoplay errors)
  if (video) video.play().catch(() => {});
  // focus management
  const closeBtn = modal.querySelector('.modal-close');
  if (closeBtn) closeBtn.focus();
  trapFocus(modal);
}

// Cerrar modal de vídeo
function closeVideoModal(modalId, videoId) {
  const modal = document.getElementById(modalId);
  const video = document.getElementById(videoId);
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (video) { video.pause(); video.currentTime = 0; }
  // return focus to trigger
  modal._trigger && modal._trigger.focus();
}

// Simple focus trap for modal
function trapFocus(modal) {
  const focusable = Array.from(modal.querySelectorAll('a,button,input,textarea,select,[tabindex]:not([tabindex="-1"])'));
  if (!focusable.length) return;
  const first = focusable[0], last = focusable[focusable.length - 1];
  function onKey(e) {
    if (e.key === 'Escape') { closeVideoModal(modal.id, modal.querySelector('video')?.id); }
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }
  modal.addEventListener('keydown', onKey);
  // remove handler when closed (cleanup)
  const obs = new MutationObserver(() => {
    if (modal.classList.contains('hidden')) { modal.removeEventListener('keydown', onKey); obs.disconnect(); }
  });
  obs.observe(modal, { attributes: true, attributeFilter: ['class'] });
}

// Attach triggers (example)
document.getElementById('interiorModal')?.addEventListener('click', (e) => {
  openVideoModal('videoModal', 'modalVideo', e.currentTarget);
});
document.getElementById('outdoorModal')?.addEventListener('click', (e) => {
  openVideoModal('outdoorVideoModal', 'outdoorModalVideo', e.currentTarget);
});

// Close buttons and backdrop handling
document.getElementById('modalClose')?.addEventListener('click', () => closeVideoModal('videoModal','modalVideo'));
document.getElementById('outdoorModalClose')?.addEventListener('click', () => closeVideoModal('outdoorVideoModal','outdoorModalVideo'));

document.getElementById('videoModal')?.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeVideoModal('videoModal','modalVideo');
});
document.getElementById('outdoorVideoModal')?.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeVideoModal('outdoorVideoModal','outdoorModalVideo');
});

Notas importantes:

Asegúrate que los triggers id="interiorModal" y id="outdoorModal" están EN LAS SECCIONES correspondientes (Interiores / Exteriores), no en el Hero.
Modal IDs y video element IDs deben ser únicos: videoModal / modalVideo y outdoorVideoModal / outdoorModalVideo.
Modal videos deben tener controls y preload="none" en el HTML.
Esta implementación maneja foco y ESC; si quieres trap más robusto o animaciones, lo podemos extender.

Recordar: 

Vídeo Hero: hero-night.webm con poster hero-poster.jpg → se carga en <section id="hero">. CTA “Crea recuerdos” permanece en el hero (NO es botón de play).
Vídeo Closing (footer/closing): usa el mismo WebM hero-night.webm con poster closing-poster.jpg en la sección .closing.
Vídeo Interior (modal): fuente interior-tour.webm. Trigger (botón play) está en la sección Interiores con id interiorModal → abre modal #videoModal y video #modalVideo.
Vídeo Exterior (modal): fuente Outdoor-tour.webm. Trigger en Exteriores con id outdoorModal → abre modal #outdoorVideoModal y video #outdoorModalVideo.
Play buttons (“triangulito”): ubicados sobre las imágenes de entrada/jardín (dentro de sus <figure>), diseño: círculo 48px (w-12 h-12), bg-black/90 rounded-full, SVG triángulo path M9 7 L17 12 L9 17 Z.
Imágenes de respaldo confirmadas: hero-poster.jpg, closing-poster.jpg; previews: interior-entry.webp, outdoor-tour.webp, etc. (todas ya en images).
IDs únicos/ARIA: interiorModal ≠ outdoorModal ≠ modalClose etc.; modales usan role="dialog" aria-modal="true"; videos preload="none" controls.
