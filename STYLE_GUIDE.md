# STYLE_GUIDE

Guia visual base de BONMONT.
Objetivo: mantener consistencia de estilo entre paginas, bloques nuevos y futuras evoluciones.

Si hay conflicto con normas tecnicas, manda `REPO_STANDARDS.md`.

## 1. Tipografias
Definidas en Tailwind config:
- `font-sans`: Poppins (texto funcional y UI)
- `font-serif`: Crimson Text (titulares y bloques editoriales)
- `font-bodoni`: Libre Bodoni (titulares de acento/premium)

Uso recomendado:
- H1/H2 de seccion principal: `font-serif`
- Titulares hero o acentos premium: `font-bodoni` (normalmente en italic)
- Subtitulos, labels, UI, formularios y texto corrido: `font-sans`

## 2. Colores de marca
Tokens activos:
- `primary`: `#1a1a1a`
- `secondary`: `#c9a866`
- `secondary-hover`: `#b08e4b`
- `text`: `#2c2c2c`
- `muted`: `#666666`
- `hero-text`: `#f8f8f7`
- `surface-dark`: `#252525`

Uso recomendado:
- Fondo/estructura principal: `primary` y blancos/neutrales.
- Acentos, CTAs y detalles de valor: `secondary`.
- Hover de acentos: `secondary-hover`.
- Texto base: `text`.
- Texto secundario/descriptivo: `muted`.

No introducir nuevos colores de marca sin decision explicita.

## 3. Mayusculas y estilo tipografico
- Navegacion, labels y microcopy de interfaz: mayusculas (`uppercase`) con tracking amplio.
- Titulares editoriales: estilo natural (Title Case o frase normal), no todo en mayusculas salvo recurso visual puntual.
- Cuerpo de texto: frase normal, legible, sin abuso de mayusculas.
- CTAs cortos: preferible mayusculas si ya sigue patron visual del sitio.

## 4. Jerarquia rapida (patron)
- Eyebrow/label de seccion:
  - `font-sans`, `uppercase`, tracking alto, tamano pequeno.
- Titulo principal de bloque:
  - `font-serif`, peso ligero/normal.
- Texto descriptivo:
  - `font-sans`, `italic` cuando sea texto inspiracional.
- CTA:
  - `font-sans`, `font-bold`, `uppercase`, tracking amplio.

## 5. Reglas de consistencia
- Reutilizar clases y patrones existentes antes de crear variantes nuevas.
- Mantener coherencia entre `index.html`, paginas de seccion y blog.
- Si un bloque rompe esta guia por necesidad de negocio/diseno, documentarlo en PR/commit.

## 6. Uso de logos (claro/oscuro)
Patron actual en cabecera:
- Modo claro: `images/ZENIT.webp`
- Modo oscuro: `images/ZENIT_dorado.webp`

Patron de clases recomendado:
- Logo claro: visible por defecto, oculto en dark:
  - `class="... dark:hidden"`
- Logo oscuro: oculto por defecto, visible en dark:
  - `class="... hidden dark:block"`

Footer:
- Usar `images/ZENIT_dorado.webp` sobre fondo `primary` oscuro para mantener contraste.

Favicons:
- Fallback general (desktop/navegadores sin soporte de media query): `images/favicon.png`
- Claro: `images/favicon.png` con `prefers-color-scheme: light`
- Oscuro: `images/favicon_dorado.png` con `prefers-color-scheme: dark`
- iPhone/Apple (`apple-touch-icon`): `images/favicon.png` con `sizes="192x192"`

Regla:
- No mezclar versiones de logo fuera de este patron salvo decision de marca explicita.
