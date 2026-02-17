# IMAGES_PHASE1_STRUCTURE

## Objetivo
Definir la estructura objetivo de imagenes y la convencion de nombres SEO para migracion segura por fases.

## Estado actual (base)
- Raiz actual: `public/images/`
- Inventario actual: **155 imagenes**
- Referencias detectadas (HTML + JSON): **155**
- Imagenes huerfanas: **0**

## Estructura objetivo (Fase 1 aprobada)
- `public/images/global/`
- `public/images/home/`
- `public/images/indoor/`
- `public/images/outdoor/`
- `public/images/lifestyle/`
- `public/images/philosophy/`
- `public/images/wellness/`
- `public/images/faqs/`
- `public/images/blog/`
- `public/images/posts/<post-slug>/`

## Convencion de nombres (obligatoria)
- Idioma: ingles.
- Formato: minusculas + guiones (`kebab-case`).
- Sin espacios, sin acentos, sin `ñ`, sin mayusculas.
- Patron recomendado:
  - `zenit-bonmont-<topic>-<location-opcional>.<ext>`
- Ejemplos:
  - `zenit-bonmont-main-entrance-tarragona.webp`
  - `zenit-bonmont-pool-costa-dorada.webp`
  - `zenit-bonmont-blog-hero.webp`

## Reglas de localizacion en nombre
- Usar `tarragona` o `costa-dorada` cuando aporte contexto real.
- No forzar `spain` en todas las imagenes.

## Regla tecnica critica
Las rutas de imagen se referencian en:
- HTML (`public/*.html`)
- JSON de galerias:
  - `public/gallery-data.json`
  - `public/outdoor-gallery-data.json`

Cualquier migracion de imagen debe actualizar ambos tipos de archivo.

## Estado de ejecucion actual
- Bloque `index` completado y migrado a `public/images/home/`.
- Bloque `indoor` completado y migrado a `public/images/indoor/`.
- Bloque `outdoor` completado y migrado a `public/images/outdoor/`.
- Bloque `philosophy` completado y migrado a `public/images/philosophy/`.
- Bloque `lifestyle` completado y migrado a `public/images/lifestyle/`.
- Bloque `wellness` completado y migrado a `public/images/wellness/`.
- Bloque `faqs` validado sin migracion de imagenes (sin recursos exclusivos).
- Bloque `blog` completado y migrado a `public/images/blog/`.
- Bloque `posts` completado y migrado a `public/images/posts/<slug>/`.
- Bloques `legal` y `404` validados sin migracion de imagenes (sin recursos exclusivos).

## Politica de seguridad durante migracion
- Migrar por bloque (pagina a pagina).
- No borrar archivos hasta validacion del bloque.
- Verificar visual desktop + movil en cada bloque.
- Verificar 404 de recursos en red antes de continuar.
