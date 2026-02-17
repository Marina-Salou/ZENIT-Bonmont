# BONMONT

Sitio web estatico de Zenit Bonmont.

## Antes de editar
- Leer primero `REPO_STANDARDS.md` (normas obligatorias del repositorio).

## Referencia principal
- Normas obligatorias del repositorio: `REPO_STANDARDS.md`.

## Stack
- HTML estatico.
- Tailwind CSS via CDN (`https://cdn.tailwindcss.com`).
- JS inline por pagina para interacciones puntuales.
- Hosting: Firebase Hosting (`firebase.json` apunta a `public/`).
- Dominio de produccion: `https://zenitbonmont.com`.

## GitHub Pages (preview)
- El repositorio despliega GitHub Pages mediante GitHub Actions usando `.github/workflows/deploy-pages.yml`.
- El artefacto publicado es la carpeta `public/`.

## Inicio rapido
1. Trabajar siempre sobre archivos dentro de `public/`.
2. Abrir cualquier pagina `public/*.html` en navegador (o servidor estatico).
3. Opcional local: `firebase emulators:start --only hosting` o servidor estatico sobre `public/`.
4. Revisar en desktop y movil.
5. Validar navegacion, menu movil, footer y cookies.
6. Recarga dura (`Ctrl+F5`) y comprobacion final.

## Estructura
- `public/index.html`: Home.
- `public/*.html`: secciones, legal y articulos.
- `public/images/`: recursos visuales.
- `firebase.json`: config de hosting.
- `.firebaserc`: proyecto Firebase por defecto.
- `docs/`: documentacion activa.
- `docs/archive/`: historico cerrado.

## Documentacion activa
- `REPO_STANDARDS.md`: reglas de trabajo (fuente unica de verdad).
- `CONTENT_MASTER.md`: referencia editorial y de contenido de la web.
- `STYLE_GUIDE.md`: guia visual basica (tipografias, colores y uso de mayusculas).
- `docs/web-architecture.md`: mapa tecnico del sitio.
- `docs/tailwind-no-brackets.md`: convenciones Tailwind CDN.
- `docs/calendar_setup_guide.md`: guia operativa de calendario.
- `docs/IMAGES_MAINTENANCE.md`: estado e checklist operativo de imagenes.
- `CHECKLIST_DATOS_PROPIETARIA.md`: checklist de datos y cuentas del negocio.

