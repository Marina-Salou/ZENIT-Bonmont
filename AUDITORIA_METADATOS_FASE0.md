# Auditoria Metadatos - Fase 0

Fecha: 2026-02-15

Contexto de estrategia definido:
- SEO y metadatos unificados en **ingles**.
- Target principal internacional.

## Cobertura
- Paginas auditadas: **12/12**
- Inventario detallado exportado en: `AUDITORIA_METADATOS_FASE0.csv`

## Resultado tecnico global
- Faltantes tecnicos obligatorios (`title`, `description`, `canonical`, OG, Twitter): **0**
- Duplicados:
  - Titulos duplicados: **0**
  - Descripciones duplicadas: **0**
- Inconsistencias internas detectadas: **5 paginas**
  - `index.html`: `title != og:title`, `description != og:description`
  - `indoor.html`: `title != og:title`
  - `legal.html`: `title != og:title`
  - `outdoor.html`: `title != og:title`, `description != og:description`
  - `wellness.html`: `description != og:description`

## Hallazgo principal de politica SEO
- Todas las paginas tienen `lang="es"` en `<html>`.
- Dado que la estrategia SEO definida es ingles, esto queda **desalineado**.

Recomendacion:
1. Cambiar `lang` a `en` en las paginas orientadas a SEO en ingles.
2. Mantener `og:locale` consistente con esa estrategia (actualmente `en_US`, correcto para ingles).

## Longitud de metadatos (orientativo SEO)
- Titulo:
  - Varios por debajo del rango sugerido de 50-60.
  - Ejemplos cortos: `indoor.html` (22), `outdoor.html` (23), `lifestyle.html` (25), `faqs.html` (29).
- Description:
  - Una corta: `faqs.html` (65).
  - Resto en rango util (mayoria entre 100-152).

## JSON-LD (estado)
- Con schema implementado:
  - `index.html` (`VacationRental`)
  - `guia-modernismo-reus.html` (`Article`)
  - `rutas-btt-mont-roig-del-camp.html` (`Article`)
  - `tradicion-calcotada-valls-tarragona.html` (`Article`)
- Sin schema:
  - `blog.html`, `faqs.html`, `indoor.html`, `legal.html`, `lifestyle.html`, `outdoor.html`, `philosophy.html`, `wellness.html`

Nota:
- No es obligatorio que todas tengan JSON-LD, pero es mejora recomendable en Home y paginas clave de conversion.

## Prioridad para Fase 1 (reglas y correccion)
1. Alinear idioma tecnico:
   - `lang="en"` en paginas SEO.
2. Corregir incoherencias `title/description` vs `og:title/og:description`.
3. Reescribir titulos cortos para rango SEO objetivo.
4. Reescribir `faqs.html` description (demasiado corta).
5. Decidir si ampliar JSON-LD en secciones clave (`wellness`, `lifestyle`, `outdoor`, `indoor`, `philosophy`).

## Conclusión de Fase 0
- Base tecnica completa y estable.
- No faltan metadatos esenciales.
- El trabajo de optimizacion ahora es de **coherencia editorial + alineacion de idioma SEO**.

---

## Avance Fase 1 - Alineacion tecnica (2026-02-15)
Aplicado:
- `lang="en"` en las 12 paginas HTML.
- Correccion de coherencia en las 5 paginas detectadas:
  - `index.html`
  - `indoor.html`
  - `legal.html`
  - `outdoor.html`
  - `wellness.html`
- Alineacion completada entre:
  - `title` y `og:title`
  - `description` y `og:description`
  - `og:title` y `twitter:title`
  - `og:description` y `twitter:description`

Validacion tras cambios:
- Paginas con `lang` distinto de `en`: **0**
- Inconsistencias internas meta/OG/Twitter: **0**

Estado:
- Bloque tecnico de Fase 1 completado con estrategia SEO en ingles.

## Avance Fase 2 - Optimización de copy SEO (2026-02-15)
Aplicado en:
- `blog.html`
- `faqs.html`
- `indoor.html`
- `lifestyle.html`
- `outdoor.html`
- `wellness.html`

Acciones:
- Reescritura de `title` y `description` para mejor intención de búsqueda y CTR.
- Sincronización exacta en cada página:
  - `title` = `og:title` = `twitter:title`
  - `description` = `og:description` = `twitter:description`

Validación posterior:
- Inconsistencias internas meta/OG/Twitter: **0**
- Duplicados de título: **0**
- Duplicados de descripción: **0**

Longitudes tras optimización:
- Títulos: rango principal 50-59 en páginas optimizadas.
- Descripciones: rango principal 133-152.

Observación:
- Se mantienen algunos títulos no tocados por prioridad editorial (ej. `index.html`, `philosophy.html`, artículos) que pueden refinarse en una pasada final opcional.

## Pasada final opcional aplicada (2026-02-15)
Páginas refinadas:
- `index.html`
- `philosophy.html`
- `guia-modernismo-reus.html`
- `rutas-btt-mont-roig-del-camp.html`
- `tradicion-calcotada-valls-tarragona.html`

Acciones:
- Reescritura final de `title` y `description` para mayor precisión SEO y CTR.
- Sincronización completa de `og:title`, `og:description`, `twitter:title`, `twitter:description`.
- Alineación de JSON-LD (`headline`/`description`) en artículos y home donde aplica.

Validación final de metadatos:
- Inconsistencias internas meta/OG/Twitter: **0**
- Rango de títulos: **50-59** en prácticamente todas las páginas.
- Rango de descriptions: **128-152** en la mayoría.
- Estrategia de idioma SEO en inglés: mantenida.
