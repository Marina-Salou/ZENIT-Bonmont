# Blog Zenit: Migración y Operativa

Este documento deja por escrito:

1. Cómo pasar del `public/blog.html` actual al diseño nuevo de `blog-growth-template.html`.
2. Cómo publicar nuevos artículos una vez esté en marcha.

---

## 1) Migración al nuevo blog

Estado actual:

- `public/blog.html`: blog actualmente publicado.
- `blog-growth-template.html`: propuesta nueva (plantilla de crecimiento).

Cuando decidas hacer el cambio:

1. Haz copia de seguridad del blog actual:
   - duplica `public/blog.html` como `public/blog.backup.html`.
2. Copia el contenido de `blog-growth-template.html` dentro de `public/blog.html`.
3. Revisa rutas de imágenes y enlaces internos.
4. Prueba en local (modo claro/oscuro, filtros, paginación, responsive).
5. Commit + push.

---

## 2) Cómo añadir un nuevo post

Los posts se gestionan en el array `posts` del JS.

Estructura:

```js
{
  title: "Título del artículo",
  category: "Novedades Zenit",
  date: "2026-03-01",
  summary: "Resumen corto",
  url: "#",
  image: "public/images/..."
}
```

### Reglas rápidas

- `date`: siempre formato `YYYY-MM-DD`.
- `category`: debe existir en `categoryMeta`.
- `image`: preferiblemente `.webp`.
- `summary`: corta y útil (1 frase).

### ¿Cuándo crear página propia?

Crea HTML propio (`url: "mi-post.html"`) para:

- guías útiles permanentes,
- rutas, cultura, gastronomía, actividades con contenido real.

No hace falta página propia (`url: "#"`) para:

- novedades breves de casa (textil, decoración, pequeños cambios).

---

## 3) SEO: criterio práctico

- No crear una página por cada microcambio.
- Sí crear páginas para contenido con intención de búsqueda real.
- El bloque en `blog.html` ya aporta visibilidad para novedades breves.

---

## 4) Checklist antes de publicar

1. Título claro y natural.
2. Categoría correcta.
3. Imagen correcta y optimizada.
4. Fecha correcta.
5. Enlace correcto (`#` si no hay página).
6. Revisión visual en desktop y móvil.

---

## 5) Operativa recomendada

- Trabajar cambios en local.
- Validar visual en GitHub Pages.
- Cuando esté OK, hacer commit y push.
- Mantener este archivo como referencia única de operación del blog.

