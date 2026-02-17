# AUDITORIA_IMAGENES_FASE0_ACTUAL

## Resumen
- Fecha de revision: estado actual del repositorio en `public/`.
- Total imagenes en `public/images/`: **155**
- Imagenes referenciadas (HTML + JSON): **155**
- Huerfanas: **0**

## Verificacion de referencias
Se han revisado:
1. Referencias directas en `public/*.html`.
2. Referencias en JSON de galerias:
   - `public/gallery-data.json`
   - `public/outdoor-gallery-data.json`

## Cambios confirmados en esta fase
- Bloque `index` migrado a `public/images/home/` (8 recursos exclusivos):
  - `zenit-bonmont-kitchen-capacity.webp`
  - `zenit-bonmont-bedroom-sanctuary.webp`
  - `zenit-bonmont-bathroom-wellness.webp`
  - `zenit-bonmont-shared-table-moment.webp`
  - `zenit-bonmont-main-entrance-tarragona.webp`
  - `zenit-bonmont-hero-closing-poster.jpg`
  - `zenit-bonmont-indoor-video-tour.webm`
  - `zenit-bonmont-outdoor-video-tour.webm`
- Bloque `indoor` migrado a `public/images/indoor/`:
  - Carpetas movidas: `salon1-3`, `cocina`, `dormitorio1-6`, `bano1-6`, `despacho`.
  - Rutas actualizadas en `public/gallery-data.json`.
  - Ruta compartida actualizada en `public/index.html` (`despacho-1.webp`).
- Bloque `outdoor` migrado a `public/images/outdoor/`:
  - Carpetas movidas: `pool`, `moments` (desde `images/exteriors/`).
  - Rutas actualizadas en `public/outdoor-gallery-data.json`.
  - Metadatos y referencias compartidas actualizados en `public/outdoor.html` y `public/index.html`.
- Bloque `philosophy` migrado a `public/images/philosophy/`:
  - Recursos migrados: `silencio.webp`, `celebracion.webp`, `life.webp`.
  - Rutas actualizadas en `public/philosophy.html`.
- Bloque `lifestyle` migrado a `public/images/lifestyle/`:
  - Recursos migrados: `platjamontroig`, `calamontroig`, `velero`, `posta`, `siurana`, `rice`, `wine`, `bike`, `walk`, `faro`, `lumine`, `aquatonic`, `pub`.
  - Rutas actualizadas en `public/lifestyle.html`.
- Bloque `wellness` migrado a `public/images/wellness/`:
  - Carpeta movida: `Equipamiento` -> `wellness`.
  - Rutas actualizadas en `public/wellness.html` (incluyendo OG/Twitter y miniaturas).
- Bloque `faqs` validado:
  - Sin recursos exclusivos para migrar (usa solo recursos globales/compartidos: `beach`, logos y favicons).
- Bloque `blog` migrado a `public/images/blog/`:
  - Recursos migrados: `calcots.webp`, `btt-montroig.webp`, `casa-navas.webp`.
  - Rutas actualizadas en `public/blog.html`.
- Bloque `posts` migrado a `public/images/posts/<slug>/`:
  - `calcotada-tradition`: `calcotada.webp`, `calcotada2.webp`.
  - `btt-mont-roig`: `vistas-mar.webp`.
  - `reus-modernism`: `rosa-reus-modernismo.jpg`, `pabellon-distinguidos-modernismo-reus.webp`.
  - Rutas actualizadas en los 3 articulos (contenido + OG/Twitter + schema).
- Bloques `legal` y `404` validados:
  - Sin recursos exclusivos para migrar.

## Incidencias
- No hay imagenes sin uso a fecha de esta auditoria.
- Se confirma consistencia tras correcciones de naming y migracion por bloques.

## Nota operativa
Para futuras revisiones, tratar HTML y JSON como fuentes de referencia de rutas.
