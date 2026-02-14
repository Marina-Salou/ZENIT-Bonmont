# Tailwind En CDN - Convencion Actual

## Estado del proyecto
- Arquitectura **CDN-only**.
- No hay compilacion de CSS local.
- No existen `input.css` ni `output.css`.

## Regla principal
- Se pueden usar utilidades arbitrarias con corchetes en `class` cuando aporten claridad y eviten complejidad innecesaria.
- Ejemplos validos: `text-[0.85rem]`, `max-w-[1400px]`, `tracking-[2px]`, `w-[min(1100px,96%)]`.

## Criterios de uso recomendados
1. Preferir utilidades nativas de Tailwind cuando cubran el caso.
2. Usar corchetes para valores finos de tipografia, layout o animacion que no merecen crear sistema paralelo.
3. Mantener consistencia visual transversal:
   - Header/footer/cookies con `w-full max-w-[1400px] mx-auto px-6`.
   - Breakpoints coherentes.
   - Modo oscuro funcional.

## Flujo minimo antes de subir cambios
1. Revisar la pagina tocada en desktop y movil.
2. Validar navegacion, footer y banner de cookies.
3. Recarga dura (`Ctrl+F5`) y comprobacion final sin regresiones.
