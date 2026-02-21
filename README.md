# BONMONT

Sitio web estatico de Zenit Bonmont.

## Antes de editar
- Leer primero `docs/01-estandares/REPO_STANDARDS.md` (normas obligatorias del repositorio).

## Referencia principal
- Normas obligatorias del repositorio: `docs/01-estandares/REPO_STANDARDS.md`.

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
- `docs/`: documentacion del proyecto organizada por bloques.
- `docs/01-estandares/`: reglas editoriales y de repositorio.
- `docs/02-contenido/`: operativa y propuestas de contenido.
- `docs/03-legal/`: cumplimiento legal y datos pendientes.
- `docs/04-infra/`: infraestructura, despliegue y configuracion tecnica.
- `docs/05-archivo/`: historico cerrado.

## Documentacion activa
- `docs/01-estandares/REPO_STANDARDS.md`: reglas de trabajo (fuente unica de verdad).
- `docs/01-estandares/CONTENT_MASTER.md`: referencia editorial y de contenido.
- `docs/01-estandares/STYLE_GUIDE.md`: guia visual base.
- `docs/02-contenido/BLOG_OPERATIVA.md`: operativa para migrar/gestionar el blog.
- `docs/02-contenido/PROPUESTA_FORMULARIO_FAQS.md`: propuesta funcional del formulario.
- `docs/02-contenido/PROPUESTA_GALERIAS_WELLNESS.md`: propuesta de crecimiento de galerias.
- `docs/03-legal/PLAN_CUMPLIMIENTO_LEGAL_DATOS_2026.md`: hoja de ruta legal.
- `docs/03-legal/CHECKLIST_DATOS_PROPIETARIA.md`: datos pendientes de propietaria.
- `docs/03-legal/CHECKLIST_EVIDENCIAS_CONSENTIMIENTO.md`: control de evidencias de consentimiento.
- `docs/04-infra/web-architecture.md`: mapa tecnico del sitio.
- `docs/04-infra/tailwind-no-brackets.md`: convenciones Tailwind CDN.
- `docs/04-infra/calendar_setup_guide.md`: guia operativa de calendario.
- `docs/04-infra/CHECKLIST_POST_PUBLICACION.md`: checklist tras publicacion estable.
- `docs/04-infra/PLAN_GOOGLE_BUSINESS_WEB_SEO.md`: tareas Google Business + SEO.
