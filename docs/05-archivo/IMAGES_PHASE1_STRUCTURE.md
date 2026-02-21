# IMAGES_PHASE1_STRUCTURE

## Objetivo
Definir la estructura objetivo de imagenes y la convencion de nombres SEO para migracion segura por fases.

## Estado actual
- Raiz de imagenes: `public/images/`
- Inventario: **155**
- Referenciadas (HTML + JSON): **155**
- Huerfanas: **0**
- Referencias faltantes: **0**

## Estructura objetivo (completada)
- `public/images/blog/`
- `public/images/global/`
- `public/images/home/`
- `public/images/indoor/`
- `public/images/lifestyle/`
- `public/images/outdoor/`
- `public/images/philosophy/`
- `public/images/posts/<post-slug>/`
- `public/images/wellness/`

## Convencion de nombres
- Idioma: ingles.
- Formato: minusculas + guiones (`kebab-case`).
- Sin espacios, sin acentos, sin `ñ`, sin mayusculas.
- Patron recomendado:
  - `zenit-bonmont-<topic>-<location-opcional>.<ext>`

## Reglas de localizacion
- Usar `tarragona` o `costa-dorada` cuando aporte contexto real.
- No forzar `spain` en todas las imagenes.

## Regla tecnica critica
Las rutas de imagen se referencian en:
- HTML (`public/*.html`)
- JSON de galerias (`public/gallery-data.json`, `public/outdoor-gallery-data.json`)

## Estado de ejecucion
- Migracion de estructura: **completada**.
- Control de integridad: **OK**.

## Politica de seguridad (mantenimiento)
- Migrar por bloques.
- Validar desktop/movil.
- Verificar 404 de recursos en red.
- Verificar siempre HTML + JSON.
