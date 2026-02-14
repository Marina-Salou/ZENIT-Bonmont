# BONMONT

Sitio web estatico de Zenit Bonmont construido con HTML + Tailwind CSS via CDN.

## Inicio rapido
1. Abrir cualquier pagina `*.html` en navegador (o levantar servidor estatico).
2. Validar visualmente desktop + movil.
3. Revisar navegacion y enlaces clave.

## Stack
- HTML estatico
- Tailwind CSS via `https://cdn.tailwindcss.com`
- JS inline por pagina para interacciones puntuales

## Estructura clave
- `index.html` - Home
- `*.html` - Paginas de secciones y blog
- `images/` - Recursos visuales
- `docs/` - Documentacion tecnica

## Documentacion interna
- Arquitectura y flujo del proyecto: `docs/web-architecture.md`
- Convencion Tailwind sin corchetes: `docs/tailwind-no-brackets.md`
- Guia calendario (integraciones): `docs/calendar_setup_guide.md`

## Convencion importante de estilos
- Proyecto CDN-only: no hay pipeline de build CSS.
- Se permiten utilidades arbitrarias de Tailwind cuando sean necesarias.
- Mantener consistencia visual de header/footer/cookie banner entre paginas.

## Checklist minimo antes de entregar
1. Revision visual de la pagina tocada (desktop y movil).
2. Verificar enlaces y navegacion principal.
3. Recarga dura (`Ctrl+F5`) y comprobacion final sin regresiones.
