# REPO_STANDARDS

## 1. Proposito
Este documento define las normas obligatorias de funcionamiento del repositorio BONMONT.
Si hay conflicto entre documentos, este archivo manda.

## 2. Stack oficial
- Sitio estatico en HTML.
- Tailwind CSS via CDN (`https://cdn.tailwindcss.com`).
- JavaScript inline por pagina para interacciones puntuales.
- No se usa pipeline de compilacion CSS local.
- No se deben introducir `input.css`, `output.css`, `postcss`, `webpack`, `vite` ni equivalentes.

## 3. Idioma y contenido (regla editorial)
- Contenido visible de la web (UI): espanol.
- Metadatos SEO: ingles.
- `alt` de imagenes: ingles.
- Textos legales: espanol juridico claro (por normativa local).
- Si una pagina mezcla idiomas por decision comercial, debe dejarse justificado en el PR/commit.

### 3.1 Idioma tecnico HTML (estado actual)
- Regla actual del proyecto: `html lang="en"` en todas las paginas publicas.
- Si se decide cambiar a `lang="es"`, debe hacerse de forma global y con revision SEO completa (no cambio parcial).

## 4. Convenciones HTML/Tailwind
- Se permiten utilidades arbitrarias con corchetes cuando aporten claridad (`text-[...]`, `max-w-[...]`, etc.).
- Mantener consistencia de layout global:
  - Contenedor patron: `w-full max-w-[1400px] mx-auto px-6`.
- Mantener consistencia visual y funcional de:
  - Header.
  - Footer.
  - Banner de cookies.
  - Tema dark/light.
  - Menu movil.

### 4.1 Norma de fin de linea (EOL)
- Estandar obligatorio del repositorio: `LF` (`\n`) en archivos de texto versionados.
- No se aceptan finales `CRLF` (`\r\n`) ni `CR` (`\r`) en commits.
- `.gitattributes` es la fuente de verdad para normalizacion (`*.html`, `*.css`, `*.json` con `eol=lf`).
- Antes de cerrar un cambio, verificar que los archivos editados respetan `LF`.

## 5. Estructura minima obligatoria por pagina
- `head` con:
  - `title`.
  - `meta description`.
  - `canonical` absoluto.
  - Open Graph (`og:title`, `og:description`, `og:type`, `og:image`, `og:url`).
  - Twitter Card (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`).
  - Favicons y `theme-color`.
- `body` con:
  - Skip link accesible.
  - Header consistente.
  - Main con jerarquia semantica (`h1` unico).
  - Footer consistente.
  - Banner y logica de consentimiento de cookies.

## 6. Norma de metadatos SEO
- `title` unico por pagina, coherente con intencion de busqueda.
- `meta description` especifica por pagina, sin duplicados triviales.
- `canonical` debe coincidir con URL publica final.
- `og:url` debe coincidir con canonical.
- `og:image` y `twitter:image` deben apuntar a recursos validos.
- `og:locale` y etiquetas de idioma coherentes con estrategia SEO internacional.
- Rango recomendado orientativo:
  - `title`: 50-60 caracteres.
  - `description`: 120-160 caracteres.

## 7. Norma de Schema (JSON-LD)
- Usar `application/ld+json` valido segun schema.org.
- Cada tipo debe corresponder al contenido real de la pagina.
- Home: entidad principal de alojamiento.
- Articulos: tipo `Article`.
- Evitar inventar campos no presentes en la pagina.
- Revisar consistencia tras cambios de contenido, titulos o imagenes.

## 8. Norma de imagenes
- Toda `<img>` debe incluir:
  - `alt` en ingles.
  - `width` y `height` cuando sea posible.
  - `loading` adecuado (`lazy` salvo criticas above-the-fold).
  - `decoding="async"` cuando aplique.
- Evitar cambios de tamano que rompan composicion responsive.
- Priorizar formatos optimizados (`.webp`) salvo necesidad tecnica concreta.

## 9. Cookies y privacidad (tecnico)
- Consentimiento previo para analitica.
- Botones de aceptar/rechazar visibles y equivalentes en primer nivel.
- Enlace permanente para "Gestionar cookies" en footer.
- Conservacion del consentimiento: 12 meses (actual).
- Cualquier cambio en logica de cookies debe reflejarse tambien en `legal.html`.

## 10. Sitemap, robots e indexacion
- Toda pagina publica debe estar enlazada y reflejada en `sitemap.xml`.
- Al crear/eliminar URL publica, actualizar `sitemap.xml`.
- `robots.txt` debe seguir coherente con estrategia de indexacion.

### 10.1 Checklist obligatorio al crear una pagina nueva
1. Añadir la nueva URL en `sitemap.xml` con `lastmod`, `changefreq` y `priority` coherentes.
2. Revisar `robots.txt` para confirmar que la URL puede indexarse (o bloquearla si corresponde).
3. Configurar metadatos completos: `title`, `meta description`, `canonical`, Open Graph y Twitter.
4. Añadir schema JSON-LD adecuado al tipo de pagina (`WebPage`, `Article`, `FAQPage`, etc.).
5. Integrar la URL en la navegacion/enlazado interno (header, footer o enlaces contextuales).
6. Validar coherencia de idioma segun norma del repo (UI espanol, SEO/alt ingles, legal espanol).
7. Validar visual y funcionalmente en desktop y movil antes de cerrar.

## 11. Flujo de trabajo obligatorio
1. Analizar antes de tocar.
2. Cambios pequenos y acotados por fase.
3. Validar desktop y movil.
4. Revisar navegacion, menu movil, footer y cookies.
5. Comprobar metadatos/schema/sitemap si el cambio lo requiere.
6. Recarga dura (`Ctrl+F5`) y comprobacion final sin regresiones.
7. Solo entonces preparar commit.

## 12. Definition of Done (DoD)
Un cambio se considera cerrado si cumple todo esto:
- No rompe diseño responsive ni interacciones base.
- Mantiene consistencia de header/footer/cookies.
- Mantiene normas de idioma (UI espanol, SEO/alt ingles, legal espanol).
- Metadatos y canonical coherentes.
- Schema valido y alineado con contenido real.
- Si crea una URL nueva, cumple el checklist obligatorio de `10.1`.
- Sin restos de arquitectura antigua.
- Validacion visual completada en desktop y movil.

## 13. Estructura documental objetivo
- `README.md`: onboarding rapido y mapa del proyecto.
- `REPO_STANDARDS.md`: norma unica y permanente.
- `docs/`: guias tecnicas activas.
- `docs/archive/`: historico de auditorias y planes cerrados.

## 14. Regla de archivo historico
- Documentos cerrados no se eliminan directamente.
- Primero se extrae lo util a `REPO_STANDARDS.md` o `README.md`.
- Luego se mueven a `docs/archive/`.
