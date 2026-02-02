Tipografía ✍️
Base: font-family: Poppins, sans-serif; font-size: 16px; line-height: 1.6; color: #2c2c2c.
H1 (hero)
Font: Libre Bodoni (font-style: italic)
Peso: 400
Tamaño: mobile 32px (2rem) — md 40px (2.5rem) — lg 56px (3.5rem)
Letter-spacing: 0.5px
Line-height: 1.10 (10% más alto que font-size)
Sombra texto: 0 2px 12px rgba(0,0,0,0.30)
Menú (links)
Font: Poppins (sans)
Peso: 500
Tamaño: 14.4px (0.9rem)
Letter-spacing: 1.0px (tracking)
Line-height: 1.2
Transform: text-transform: uppercase
Hover color: #c9a866 (secondary)
Botones 🎛️
Borde: 1px solid (no 0.5px). Ej: border: 1px solid rgba(255,255,255,0.5) para botones sobre hero.
CTA hero (primario)
Padding: horizontal 20px (px-5), vertical 12px (py-3) → padding: 12px 20px
Border-radius: 6px (rounded-md)
Font-size: 13.6–14px (~0.85rem) uppercase, tracking 1.2px
Hover: fondo blanco + texto #1a1a1a (swap colors) + transition 180–200ms
CTA header (Reservar)
Padding: px-6 py-3 → padding: 12px 24px (wider)
Background: #1a1a1a, text white; hover #333
Outline buttons: 1px border rgba(0,0,0,0.08), padding px-4 py-2.
Header (bar) 🧾
Fondo: semi-transparente — background: rgba(255,255,255,0.6) (equivalente Tailwind: bg-white/60).
Backdrop blur: backdrop-filter: blur(10px) (backdrop-blur-md).
Border-bottom: 1px solid rgba(0,0,0,0.05).
Altura exacta: desktop 64px (aprox) — height ≈ 64px total; mobile 56px.
Padding interior: py-4 (desktop), py-3 (mobile) — use px-6 horizontal.
Z-index: z-50.
Sombra: none (usar sólo borde sutil y blur).
Filtros / Tratamiento del vídeo (Hero) 🎥
No depender de filtros CSS pesados: no aplicar filter: brightness() por defecto.
Capa oscura sobre el vídeo: background: rgba(0,0,0,0.4) (40% negro) — obligatoria para legibilidad del texto.
Sombra del texto: 0 2px 12px rgba(0,0,0,0.3) (recomendado).
Opción alternativa (si necesitas más contraste): video { filter: brightness(0.90) contrast(1.05); } (usar sólo si overlay no basta).
Márgenes y espaciado del Hero (valores exactos) 📏
Distancias verticales entre elementos (responsive):

H1 → CTA

mobile: 16px (1rem)
md (≥768px): 20px (1.25rem)
lg (≥1024px): 24px (1.5rem)
CTA → Tagline

mobile: 24px (1.5rem)
md: 28px (1.75rem)
lg: 32px (2rem)
Padding interno del wrapper

padding-top/padding-bottom: mobile 2.5rem (40px) → md 4rem (64px) (py-32 equiv usado en PoC).
Tagline al borde inferior de la sección

Mantén padding-bottom del contenedor hero ≈ 64px para que el tagline quede alto suficiente del borde.
Valores de diseño adicionales (tokens canon)
Border-radius general: 6px (rounded-md)
Elevación (si se usa): box-shadow: 0 8px 24px rgba(0,0,0,0.12) (uso limitado)
z-index importantes: header z-50, hero content z-30, overlays z-20
Text muted: #666666 para subtítulos y captions
