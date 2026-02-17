# IMAGES_MAINTENANCE

## Estado actual (fase siguiente cerrada)
- Total de archivos en `public/images/`: **155**
- Referencias rotas: **0**
- Huerfanas: **0**

## Distribucion por bloque
- `public/images/blog/`: 3
- `public/images/global/`: 15
- `public/images/home/`: 8
- `public/images/indoor/`: 81
- `public/images/lifestyle/`: 13
- `public/images/outdoor/`: 20
- `public/images/philosophy/`: 3
- `public/images/posts/`: 5
- `public/images/wellness/`: 7

## Checklist operativo (obligatorio al tocar imagenes)
1. Guardar la imagen en la carpeta de bloque correcta (`global`, `home`, `indoor`, etc.).
2. Nombre en ingles, kebab-case, sin espacios ni tildes.
3. Actualizar rutas en HTML y JSON (`gallery-data.json` / `outdoor-gallery-data.json`) si aplica.
4. Verificar que no quedan rutas rotas:
   - `rg -o "images/[A-Za-z0-9_./-]+\\.(webp|jpg|jpeg|png|webm)" public -g "*.html" -g "*.json"`
5. Verificar que no quedan huerfanas:
   - comparar inventario real de `public/images/` con referencias en HTML+JSON.
6. Validar visualmente desktop y movil (sin regresion de layout).

## Nota
Si se crea una pagina nueva con recursos propios, crear su subcarpeta dentro de `public/images/` y aplicar el checklist completo.
