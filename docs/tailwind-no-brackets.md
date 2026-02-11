# Tailwind Sin Corchetes - Convencion del Proyecto

## Regla Principal
- No usar clases arbitrarias con corchetes en `class`.
- Ejemplos prohibidos: `text-[0.85rem]`, `bg-[#252525]`, `w-[min(1100px,96%)]`, `aspect-[4/5]`.

## Como agregar nuevos estilos
1. Definir token en `@theme` si es color/fuente reutilizable.
2. Definir utilidad en `@utility` en `input.css`.
3. Usar solo ese nombre en HTML.
4. Ejecutar `npm run build`.

## Nomenclatura recomendada
- Tipografia: `text-hero-*`, `text-display-*`, `text-ui-*`.
- Tracking: `tracking-ui-*`.
- Line-height: `leading-*`.
- Layout: `grid-cols-*`, `w-*`, `max-h-*`, `aspect-*`.
- Efectos: `blur-*`, `brightness-*`, `drop-shadow-*`, `text-shadow-*`.
- Colores semanticos: `*-secondary-hover`, `*-surface-dark`.

## Ejemplos de reemplazo
- `text-[0.85rem]` -> `text-hero-md2`
- `tracking-[2px]` -> `tracking-ui-xwide`
- `leading-[1.8]` -> `leading-18`
- `dark:bg-[#252525]` -> `dark:bg-surface-dark`
- `hover:text-[#b08e4b]` -> `hover:text-secondary-hover`
- `w-[min(1100px,96%)]` -> `w-modal`
- `max-h-[90vh]` -> `max-h-screen-90`
- `aspect-[4/5]` -> `aspect-portrait`

## Flujo minimo antes de subir cambios
1. Buscar clases con corchetes en HTML:
   - `rg -n "class=\"[^\"]*\[[^\"]*\"" -g "*.html" .`
2. Si aparece algo, crear utilidad y reemplazar.
3. Recompilar:
   - `npm run build`

## Nota
- Corchetes en JavaScript o texto legal no afectan Tailwind.
- La restriccion aplica a atributos `class`.
