# FASE 2 - Auditoria Tecnica (Sitemap + Metadatos + Schema)

Fecha: 2026-02-15  
Alcance: `*.html`, `sitemap.xml`, metadatos SEO y JSON-LD.

## 1) Resultado ejecutivo

Estado general: **bueno con mejoras necesarias**.

- Cobertura de URLs en `sitemap.xml`: **OK** (12/12 paginas publicas).
- Metadatos base por pagina (title/description/canonical/OG/Twitter): **OK** en estructura.
- Coherencia `canonical` = `og:url`: **OK** en todas las paginas.
- Schema JSON-LD: **parcial** (presente en home + 3 articulos; mejorable en campos clave).

## 2) Sitemap

### Comprobaciones
- `sitemap.xml` incluye:
  - Home
  - 8 paginas de seccion
  - 3 articulos
  - Legal
- No se detectan referencias a `*-cdn.html`.

### Hallazgo
- Todos los `lastmod` estan fijados en `2026-02-10`.

### Riesgo
- `lastmod` puede quedar desalineado con cambios reales recientes.

### Accion recomendada
- Actualizar `lastmod` segun ultima modificacion real por URL.

## 3) Metadatos por pagina

### Comprobaciones
- Todas las paginas tienen:
  - `title`
  - `meta description`
  - `canonical`
  - Open Graph principal
  - Twitter Card principal
  - `og:locale`
- `canonical` y `og:url` coinciden en todas.

### Hallazgos
1. `legal.html` tiene `twitter:card="summary"` mientras el resto usa `summary_large_image`.
2. `legal.html` description es mas corta (106 chars) que el resto; no es error, pero se puede afinar para CTR.
3. Todas las paginas usan `html lang="en"` mientras el contenido visible es mayoritariamente espanol.

### Riesgo
- Posible ambiguedad de idioma para motores de busqueda y accesibilidad.

### Accion recomendada
- Decision de producto/SEO: mantener `lang="en"` o migrar a `lang="es"` (recomendable si UI principal sigue en espanol).
- Homogeneizar `twitter:card` si se busca consistencia total.

## 4) Schema JSON-LD

### Estado actual
- `index.html`: `VacationRental` (presente).
- Articulos:
  - `tradicion-calcotada-valls-tarragona.html`: `Article`.
  - `rutas-btt-mont-roig-del-camp.html`: `Article`.
  - `guia-modernismo-reus.html`: `Article`.
- Resto de paginas: sin schema.

### Hallazgos en `Article` (3 paginas)
Faltan campos recomendables para enriquecer elegibilidad y claridad:
- `datePublished`
- `dateModified`
- `author`
- `mainEntityOfPage`
- `publisher.logo`

### Hallazgos en home (`VacationRental`)
- Estructura base correcta.
- Se puede mejorar con mas propiedades recomendables (opcional, no bloqueante).

### Accion recomendada
- Fase siguiente de ajuste schema:
  1. Completar `Article` con campos recomendados.
  2. Evaluar schema ligero para paginas clave sin JSON-LD (ej. `WebPage`, `CollectionPage`, `FAQPage` si aplica).

## 5) Checklist de cierre Fase 2

- [x] Cobertura sitemap verificada
- [x] Canonical vs OG URL verificado
- [x] Metadatos base presentes en todas las paginas
- [x] Inventario de schema completado
- [ ] Definicion final de estrategia `html lang`
- [ ] Actualizacion de `lastmod` del sitemap
- [ ] Mejora de schema en articulos

## 6) Prioridad sugerida (orden de ejecucion)
1. Definir regla definitiva de `html lang` en `REPO_STANDARDS.md` y aplicar en todas las paginas.
2. Completar schema `Article` en las 3 entradas del blog.
3. Ajustar `lastmod` real en `sitemap.xml`.
4. (Opcional) Homogeneizar `twitter:card` en `legal.html`.