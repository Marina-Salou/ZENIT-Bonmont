# Plan de Optimizacion de Imagenes (CDN + HTML estatico)

Objetivo: mejorar rendimiento, estabilidad visual (CLS), SEO e indexacion sin romper el diseno ni la estructura actual.

## Principios de trabajo
- Cambios pequenos y reversibles.
- Una fase cada vez, con validacion antes de continuar.
- No mezclar mejoras visuales con mejoras tecnicas.
- Commits cortos por fase.

## Alcance
- Todas las paginas `*.html`.
- Imagenes `img` (y validacion de `video poster`).
- Sin migrar stack ni introducir build pipeline.

---

## Fase 0 - Inventario tecnico (solo auditoria)
Objetivo: tener mapa real de todas las imagenes y su estado.

Checklist:
1. Listar todos los `<img>` por archivo.
2. Detectar faltas de:
   - `width` y `height`
   - `alt`
   - `loading`
   - `decoding`
3. Separar:
   - Imagenes criticas (above-the-fold / LCP)
   - Imagenes no criticas
   - Imagenes decorativas
4. Identificar imagenes dinamicas (inyectadas por JS en galerias/lightbox).

Entregable:
- Tabla resumen por pagina: total imgs, faltantes por tipo, prioridad.

Gate para pasar a Fase 1:
- Inventario completado al 100%.

---

## Fase 1 - Normalizacion segura de atributos (sin cambiar diseno)
Objetivo: corregir atributos base que impactan rendimiento y SEO.

Reglas:
1. Todas las imagenes de contenido:
   - `width` + `height` (dimensiones intrinsecas reales)
   - `alt` descriptivo
2. Imagenes decorativas:
   - `alt=""`
3. Carga:
   - Imagen LCP: `loading="eager"` + `fetchpriority="high"`
   - Resto: `loading="lazy"` + `decoding="async"`
4. Logos repetidos (header/footer):
   - Mantener consistencia de atributos en todas las paginas.

Entregable:
- Commits por bloques (ejemplo: header/footer global, luego contenido por pagina).

Gate para pasar a Fase 2:
- Sin cambios visuales inesperados.
- Sin warnings de atributos faltantes en chequeo global.

---

## Fase 2 - Responsive images (srcset/sizes) en imagenes clave
Objetivo: reducir peso transferido en movil y mejorar LCP.

Prioridad:
1. Hero/LCP principal de `index.html`.
2. Imagenes destacadas above-the-fold en paginas clave.
3. Cards/listados con imagen repetitiva.

Reglas:
- Usar `srcset` con 2-4 variantes utiles (no sobreingenieria).
- Definir `sizes` real segun layout.
- Mantener `webp` como base actual.

Entregable:
- Implementacion en paginas prioritarias + comparativa antes/despues.

Gate para pasar a Fase 3:
- Verificacion visual desktop/movil OK.
- Sin degradar nitidez notable.

---

## Fase 3 - SEO de imagen y semantica
Objetivo: reforzar indexacion y contexto semantico.

Checklist:
1. Revisar `alt` para:
   - descriptivo, natural, sin keyword stuffing.
2. Verificar imagen social:
   - `og:image` y `twitter:image` correctas por pagina.
3. Revisar coherencia de idioma en `alt` (ES/EN segun pagina).
4. Confirmar que imagenes importantes sean rastreables por Googlebot.

Entregable:
- Ajustes de texto alt + metadatos de imagen cuando aplique.

Gate para pasar a Fase 4:
- Checklist SEO imagen completado.

---

## Fase 4 - Validacion final y cierre
Objetivo: cerrar con evidencia y sin regresiones.

Checklist tecnico:
1. Recorrido visual movil + desktop.
2. Verificar que no hay salto de layout por imagen (CLS visual).
3. Chequeo global:
   - ningun `<img>` sin `alt` (excepto decorativas con `alt=""`)
   - ningun `<img>` sin `width/height` salvo casos justificados
4. Validar rendimiento base con Lighthouse (al menos home).

Checklist de repo:
1. `git status` limpio salvo cambios de fase en curso.
2. Commit final de cierre con resumen.

Entregable final:
- Resumen con:
  - que se toco
  - que mejoro
  - que queda como opcional futuro

---

## Orden recomendado de ejecucion
1. `index.html` (patrones globales + LCP).
2. Plantilla comun (header/footer en todas).
3. Paginas de seccion: `indoor`, `outdoor`, `lifestyle`, `philosophy`, `wellness`.
4. Paginas de apoyo: `faqs`, `legal`, `blog`.
5. Articulos/landings: `guia-modernismo-reus`, `rutas-btt-mont-roig-del-camp`, `tradicion-calcotada-valls-tarragona`.

---

## Criterio de seguridad (muy importante)
- Si una optimizacion cambia composicion visual, se revierte y se replantea.
- Si hay duda entre perfeccion tecnica y estabilidad de la web publicada, gana estabilidad.

