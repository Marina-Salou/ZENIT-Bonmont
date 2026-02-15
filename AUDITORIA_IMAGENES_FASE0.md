# Auditoria Imagenes - Fase 0 (Inventario)

Fecha: 2026-02-15

Objetivo de esta fase: medir estado real de imagenes sin tocar diseno ni funcionalidad.

## Resumen global
- Total etiquetas `<img>`: **93**
- Sin `alt`: **5**
- Sin `width/height`: **93**
- Sin `loading`: **43**
- Sin `decoding`: **45**
- Imagenes dinamicas por JS (`<img src="${...}">`): **2**
- Videos: **4** (todos con `poster`, sin faltas en ese punto)

Nota: que falte `loading/decoding` en logos no siempre es grave, pero para consistencia y estabilidad conviene normalizar.

## Inventario por pagina
| Pagina | Img totales | Sin alt | Sin width/height | Sin loading | Sin decoding | Img dinamicas | Videos | Videos sin poster |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| `blog.html` | 6 | 0 | 6 | 3 | 3 | 0 | 0 | 0 |
| `faqs.html` | 3 | 0 | 3 | 3 | 3 | 0 | 0 | 0 |
| `guia-modernismo-reus.html` | 5 | 2 | 5 | 3 | 3 | 0 | 0 | 0 |
| `index.html` | 19 | 0 | 19 | 5 | 5 | 0 | 4 | 0 |
| `indoor.html` | 5 | 0 | 5 | 4 | 5 | 1 | 0 | 0 |
| `legal.html` | 3 | 0 | 3 | 3 | 3 | 0 | 0 | 0 |
| `lifestyle.html` | 20 | 0 | 20 | 4 | 4 | 0 | 0 | 0 |
| `outdoor.html` | 5 | 0 | 5 | 4 | 5 | 1 | 0 | 0 |
| `philosophy.html` | 7 | 0 | 7 | 4 | 4 | 0 | 0 | 0 |
| `rutas-btt-mont-roig-del-camp.html` | 4 | 1 | 4 | 3 | 3 | 0 | 0 | 0 |
| `tradicion-calcotada-valls-tarragona.html` | 5 | 2 | 5 | 3 | 3 | 0 | 0 | 0 |
| `wellness.html` | 11 | 0 | 11 | 4 | 4 | 0 | 0 | 0 |

## Hallazgos criticos (SEO/accesibilidad)

Imagenes sin `alt`:
- `guia-modernismo-reus.html:239`
- `guia-modernismo-reus.html:243`
- `rutas-btt-mont-roig-del-camp.html:238`
- `tradicion-calcotada-valls-tarragona.html:238`
- `tradicion-calcotada-valls-tarragona.html:242`

## Observaciones tecnicas relevantes
- No hay ningun `fetchpriority="high"` ni `loading="eager"` explicitado para imagen LCP.
- Las galerias dinamicas de:
  - `indoor.html` (`<img src="${item.src}">`)
  - `outdoor.html` (`<img src="${item.src}">`)
  requieren tratamiento especifico en JS en Fase 1 (atributos al crear el nodo).
- Hay `img` de lightbox con `src=""` (casos esperados, no SEO, pero se documentan para no tratarlos como error real de contenido).

## Prioridad de ejecucion para Fase 1 (segura)
1. Corregir `alt` faltantes (5 casos).
2. Definir estrategia comun de logos (header/footer) para `width/height` + `decoding`.
3. Añadir `width/height` a imagenes de contenido por bloques de pagina.
4. Normalizar `loading`/`decoding`:
   - LCP: `loading="eager"` + `fetchpriority="high"` (solo 1 imagen candidata por pagina si aplica).
   - Resto: `loading="lazy"` + `decoding="async"`.
5. Ajustar plantillas JS de galerias dinamicas (`indoor.html`, `outdoor.html`).

## Gate para pasar a Fase 1
- Inventario completado y riesgos localizados: **OK**.

---

## Avance Fase 1 - Bloque A (2026-02-15)
Aplicado de forma segura:
- Corregidos los 5 `alt` faltantes (0 pendientes).
- Normalizados logos `ZENIT.webp` y `ZENIT_dorado.webp` en header/footer (12 paginas):
  - `width="200" height="88"`
  - `decoding="async"`
  - `loading="eager"` en header
  - `loading="lazy"` en footer

Estado despues del bloque:
- Total etiquetas `<img>`: 93
- Sin `alt`: 0
- Sin `width/height`: 57
- Sin `loading`: 7
- Sin `decoding`: 9

Pendiente para siguiente bloque de Fase 1:
- Añadir `width/height` al resto de imagenes de contenido.
- Normalizar `loading/decoding` en imagenes no-logo restantes.
- Ajustar casos dinamicos de galeria en `indoor.html` y `outdoor.html`.

## Avance Fase 1 - Bloque B (2026-02-15)
Aplicado:
- Barrido global de `alt` para coherencia en ingles.
- Insercion de `width/height` con dimension real de archivo para imagenes estaticas (`webp`/`jpg`).
- Normalizacion completa de carga:
  - `loading`: sin faltantes.
  - `decoding`: sin faltantes.

Estado actualizado:
- Total etiquetas `<img>`: 93
- Sin `alt`: 0
- Sin `width/height`: 5
- Sin `loading`: 0
- Sin `decoding`: 0

Los 5 casos sin `width/height` son esperados por ser dinamicos/no indexables:
- `indoor.html` lightbox (`src=""`) y template de galeria (`src="${item.src}"`).
- `outdoor.html` lightbox (`src=""`) y template de galeria (`src="${item.src}"`).
- `wellness.html` lightbox (`src=""`).

Conclusión del bloque:
- La parte indexable/SEO de imagen queda normalizada.
- Restan solo excepciones tecnicas de UI dinamica.

## Avance Fase 2 - Bloque A (2026-02-15)
Enfoque aplicado (sin generar nuevas variantes de archivo):
- Priorizacion de imagen clave con `fetchpriority="high"` + `loading="eager"` en:
  - `index.html` (`identity-villa.webp`)
  - `lifestyle.html` (`beach.webp` hero)
  - `philosophy.html` (`idoia.webp`)
- Añadido `sizes` en esas imagenes para dar pista de ancho renderizado.

Estado tecnico tras Bloque A:
- `missing_loading`: 0
- `missing_decoding`: 0
- `missing_width/height`: 5 (solo UI dinamica/lightbox ya documentada)

Nota:
- El siguiente nivel de optimizacion (`srcset` real) requiere disponer de variantes fisicas de imagen por resolucion. Sin esos archivos, añadir `srcset` no aporta mejora real.

## Avance Fase 3 - SEO semantico (2026-02-15)
Aplicado:
- Validacion global de `alt`: todos en ingles y sin faltantes en contenido indexable.
- Ajuste de metadatos sociales para alinearlos con la imagen principal real del contenido:
  - `rutas-btt-mont-roig-del-camp.html`:
    - `og:image`, `twitter:image` y `schema image` -> `images/vistas-mar.webp`
  - `tradicion-calcotada-valls-tarragona.html`:
    - `og:image`, `twitter:image` y `schema image` -> `images/calcotada.webp`
  - `wellness.html`:
    - `og:image` y `twitter:image` -> `images/Equipamiento/despacho1.webp`
    - (sin `schema image` en esta pagina, aceptado)

Estado final de semantica de imagen:
- `alt` coherente y en ingles: OK
- `og:image` / `twitter:image` consistentes en las paginas ajustadas: OK
- Sin degradacion funcional ni visual detectada.

## Fase 4 - Validacion final y cierre (2026-02-15)
Comprobaciones ejecutadas:
- Recuento global de atributos en `img`:
  - `missing_alt = 0`
  - `missing_loading = 0`
  - `missing_decoding = 0`
  - `missing_width/height = 5` (solo casos dinamicos esperados)
- Verificacion de rutas de imagen:
  - `missing_files = 0` (ninguna referencia local rota)
- Excepciones dinamicas esperadas:
  - `indoor.html`: lightbox `src=""` y template `src="${item.src}"`
  - `outdoor.html`: lightbox `src=""` y template `src="${item.src}"`
  - `wellness.html`: lightbox `src=""`
- Metadatos por pagina:
  - `canonical`, `og:image`, `twitter:image` presentes en las 12 paginas.

Conclusión de cierre:
- Optimizacion de imagen completada en alcance acordado.
- Proyecto queda estable, coherente y SEO-friendly sin introducir pipeline nuevo ni complejidad innecesaria.
