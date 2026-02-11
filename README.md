# BONMONT

Sitio web estatico de Zenit Bonmont construido con HTML + Tailwind CSS v4.

## Inicio rapido
1. Instalar dependencias:
   - `npm install`
2. Compilar estilos:
   - `npm run build`
3. Modo desarrollo (watch):
   - `npm run dev`

## Stack
- HTML estatico
- Tailwind CSS v4 (`@tailwindcss/cli`)
- JS inline por pagina para interacciones puntuales

## Estructura clave
- `index.html` - Home
- `*.html` - Paginas de secciones y blog
- `input.css` - Fuente de Tailwind (tokens y utilidades)
- `output.css` - CSS compilado (no editar a mano)
- `images/` - Recursos visuales
- `docs/` - Documentacion tecnica

## Documentacion interna
- Arquitectura y flujo del proyecto: `docs/web-architecture.md`
- Convencion Tailwind sin corchetes: `docs/tailwind-no-brackets.md`
- Guia calendario (integraciones): `docs/calendar_setup_guide.md`

## Convencion importante de estilos
- No usar clases arbitrarias con corchetes dentro de `class`.
- Si falta un estilo, crear `@utility` en `input.css` y recompilar.

## Checklist minimo antes de entregar
1. `npm run build` sin errores.
2. Revision visual de la pagina tocada (desktop y movil).
3. Verificar enlaces y navegacion principal.
