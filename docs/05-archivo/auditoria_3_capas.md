auditoría en 3 capas para las 12 *-cdn.html:

Barrido automático de “legacy classes”
Ejecutar un rg único sobre *-cdn.html buscando:
output.css|input.css|text-hero-|text-display-|text-ui-|tracking-ui-|max-w-(200|275|300|350)|animate-spin-slow|w-6.5|grid-cols-3-auto|grid-cols-1-2|grid-cols-2-1|transition-max-height|w-modal|max-h-screen-90|max-h-250
Resultado esperado: 0 matches.
Validación estructural por página
Confirmar en cada archivo:
cdn.tailwindcss.com presente.
tailwind.config mínimo (solo extend.colors y extend.fontFamily).
Header/Footer/Cookies con patrón de contenedor:
w-full max-w-[1400px] mx-auto px-6.
CTA desktop + menú móvil + dark mode funcionales (IDs y scripts presentes).
Revisión visual rápida (smoke test)
1 pasada desktop + 1 móvil por página:
hero, bloque principal, navegación, footer, banner cookies.
Corregir al vuelo cualquier clase custom que haya sobrevivido y dejar equivalentes con [...].
Cierre:

Generar tabla final por página: OK / corregido / pendiente.
Repetir el barrido automático global y dejarlo en 0 antes de dar migración por cerrada.
Si te parece, lo ejecuto ahora mismo de forma completa y te paso el informe página por página.