# Plan de Optimizacion de Metadatos SEO

Objetivo: dejar todos los metadatos del sitio consistentes, completos y alineados con el contenido real de cada pagina.

## Principios
- Cambios por fases, sin mezclar diseño con SEO.
- Validacion por pagina antes de avanzar.
- Un solo criterio editorial para todo el proyecto.
- Commits pequeños y trazables.

---

## Fase 0 - Inventario y auditoria base
Objetivo: saber exactamente como esta cada pagina.

Auditar en cada `*.html`:
1. `<title>`
2. `<meta name="description">`
3. `<link rel="canonical">`
4. Open Graph:
   - `og:title`
   - `og:description`
   - `og:type`
   - `og:image`
   - `og:url`
   - `og:locale`
5. Twitter:
   - `twitter:card`
   - `twitter:title`
   - `twitter:description`
   - `twitter:image`
6. JSON-LD (si aplica): coherencia con título/description/url/imagen.

Entregable:
- Tabla por pagina con: existe/no existe + calidad (ok/mejorable/falta).

Gate:
- Inventario completo 12/12 paginas.

---

## Fase 1 - Politica editorial unificada (reglas)
Objetivo: definir “cómo deben ser” los metadatos para no improvisar.

Reglas recomendadas:
1. Idioma:
   - Si contenido principal está en español, metadatos en español.
   - Si decides estrategia EN, todo en EN de forma consistente.
2. `title`:
   - 50-60 caracteres aprox.
   - keyword principal + marca.
3. `description`:
   - 140-160 caracteres aprox.
   - intención clara + propuesta de valor.
4. `canonical`:
   - URL final única y estable.
5. `og:image` / `twitter:image`:
   - imagen representativa real de la página.
   - evitar “imagen genérica” si hay una más específica.
6. `og:type`:
   - `website` para páginas seccionales.
   - `article` para posts/guías.
7. JSON-LD:
   - debe reflejar el mismo mensaje que title/description.

Entregable:
- Documento corto de estilo SEO (1 página).

Gate:
- Reglas aprobadas antes de tocar metadatos.

---

## Fase 2 - Correccion técnica mínima (must-have)
Objetivo: cubrir faltantes o incoherencias técnicas.

Checklist:
1. No faltan tags obligatorios (title, description, canonical, OG, Twitter).
2. `og:url` coincide con canonical.
3. `og:title/description` coherentes con `title/description`.
4. `twitter:title/description` coherentes con OG.
5. `og:image` y `twitter:image` válidas.

Gate:
- 0 faltantes técnicos.

---

## Fase 3 - Optimizacion de copy (calidad SEO)
Objetivo: mejorar CTR e intención de búsqueda.

Acciones:
1. Reescribir títulos débiles/repetidos.
2. Reescribir descriptions genéricas.
3. Evitar duplicados entre páginas.
4. Alinear cada página con su intención:
   - Home: propuesta global.
   - Secciones: beneficio específico.
   - Blog/artículos: tema + contexto local + valor práctico.

Gate:
- Sin títulos ni descriptions duplicadas.
- Cada página “dice lo suyo” de forma clara.

---

## Fase 4 - Coherencia avanzada y cierre
Objetivo: cerrar fino para indexación y mantenibilidad.

Checklist:
1. `html lang` coherente con idioma real.
2. `og:locale` coherente (`es_ES` o `en_US` según estrategia).
3. Revisión de sitemap/robots respecto a URLs finales.
4. Validación final de snippets (simulación SERP + preview social).

Entregable:
- Informe final: qué se cambió, por qué y estado final.

---

## Orden de trabajo recomendado
1. Definir idioma/estrategia editorial (clave).
2. Corregir Home (`index.html`) como plantilla.
3. Aplicar patrón a secciones:
   - `indoor.html`, `outdoor.html`, `lifestyle.html`, `philosophy.html`, `wellness.html`, `faqs.html`, `legal.html`
4. Aplicar patrón a contenido editorial:
   - `blog.html`, `guia-modernismo-reus.html`, `rutas-btt-mont-roig-del-camp.html`, `tradicion-calcotada-valls-tarragona.html`
5. Validación global y cierre.

---

## Riesgos a evitar
- Mezclar idiomas sin criterio (genera señales SEO confusas).
- Copiar y pegar metas entre páginas sin adaptar intención.
- Usar misma imagen social en todo si no representa la URL.
- Cambiar masivamente sin auditoría previa.

---

## Resultado esperado
- Metadatos completos y consistentes.
- Snippets más claros y más clicables.
- Mejor base para indexación sólida en Google.
