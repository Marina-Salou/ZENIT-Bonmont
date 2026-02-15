Plan completo de migración a CDN (sin tocar originales), paso a paso

Reglas del proyecto (fijas desde ya)
Se trabaja solo con copias *-cdn.html en sandbox.
No se borra input.css ni output.css hasta el final.
No se mezcla: una página está en sistema viejo o en CDN, nunca híbrida.
Cada cambio se valida en desktop + móvil antes de continuar.
Objetivo técnico final
Todas las páginas usan https://cdn.tailwindcss.com.
No dependen de input.css/output.css.
Header y footer quedan visualmente consistentes en las 12 páginas.
Estados de navegación activos coherentes en todas las páginas.
Preparación inicial
Mantener la auditoría como referencia.
Definir plantilla base de migración (checklist único por página):
Reemplazar <link rel="stylesheet" href="output.css"> por script CDN.
Resolver clases personalizadas no nativas (ej. text-hero-*, tracking-ui-*, etc.).
Revisar menú desktop/móvil, botón CTA, dark mode.
Revisar footer y enlaces legales.
Validar responsive y accesibilidad básica (focus, contraste mínimo visible).
Estrategia de ejecución por páginas duplicadas
Convención de copia: pagina.html -> pagina-cdn.html.
Orden recomendado:
legal-cdn.html (piloto, ya creada).
blog-cdn.html
faqs-cdn.html
philosophy-cdn.html
lifestyle-cdn.html
indoor-cdn.html
outdoor-cdn.html
wellness-cdn.html
guia-modernismo-reus-cdn.html
rutas-btt-mont-roig-del-camp-cdn.html
tradicion-calcotada-valls-tarragona-cdn.html
index-cdn.html (al final, por ser la más crítica).
Flujo exacto por cada página
Duplicar archivo.
Cambiar carga CSS a CDN.
Normalizar clases conflictivas o custom.
Probar visualmente secciones clave.
Corregir solo en esa copia.
Marcar estado: OK / pendiente.
Pasar a la siguiente.
Estandarización de header/footer (sin JS)
Definir una versión “maestra” en la primera página estable (piloto).
Copiar ese bloque a cada *-cdn.html.
Estado activo del menú:
Solo una entrada activa por página.
Mismo patrón visual en todas.
Hover consistente (sin doble subrayado ambiguo).
Control de calidad por lote
Lote A: legal/blog/faqs.
Lote B: philosophy/lifestyle.
Lote C: indoor/outdoor/wellness.
Lote D: guia/rutas/tradicion/index.
Criterio para cerrar lote: sin regresiones visuales graves ni menús rotos.
Gestión de riesgos
Si una página se rompe, no se toca la original: se corrige solo *-cdn.html.
Si una clase custom no tiene equivalente rápido, usar clase Tailwind directa (incluyendo [] cuando proceda).
Evitar introducir CSS global nuevo salvo caso imprescindible.


Checklist técnico de purga (CDN libre) para cerrar cada *-cdn.html:

Dependencias antiguas
No existe href="output.css".
No existe href="input.css".
Sí existe https://cdn.tailwindcss.com (con o sin plugins).
Config mínima
tailwind.config solo contiene:
theme.extend.colors
theme.extend.fontFamily
Nada de fontSize, spacing, maxWidth, letterSpacing, animation, etc.
Sin tokens legacy en clases
Cero coincidencias de:
text-hero-
text-display-
text-ui-
tracking-ui-
max-w-350, max-w-300, max-w-200
animate-spin-slow
w-6.5
Cualquier tamaño/spacing raro debe estar directo en clase (text-[...], max-w-[...], tracking-[...]).
Header/Footer consistentes
Contenedor: w-full max-w-[1400px] mx-auto px-6.
Mismo patrón en header, footer y cookie banner.
CTA visible en desktop (sm:inline-block) y menú móvil funcional.
Estado visual/UX
Modo claro/oscuro funciona.
Tipografías correctas (Poppins/Crimson/Libre Bodoni).
Título principal con tamaño correcto.
No hay saltos raros de márgenes/espaciados.
Validación rápida por página
Desktop ancho.
Móvil.
Navegación.
Footer.
Banner cookies.
Responsive básico por página.
Recarga dura (Ctrl+F5) sin regresiones.


Comando de control rápido (cuando quieras usarlo):

rg -n "output\.css|input\.css|text-hero-|text-display-|text-ui-|tracking-ui-|max-w-350|max-w-300|max-w-200|animate-spin-slow|w-6\.5" *-cdn.html
Debe devolver 0 resultados para dar una página por cerrada.

Aplicar auditoria_3_capas.md en repositorio y, una vez finalizada y con todos los ok por parte del usuario, ir al cierre de migración.

Cierre de migración
Cuando las 12 *-cdn.html estén validadas:
Sustituir originales por versiones CDN.
Revisión final completa de navegación y enlaces.
Limpieza definitiva del repo (solo al final)
Eliminar input.css, output.css (solo al final).
Eliminar scripts build/dev de package.json (solo al final).
Eliminar referencias a build en documentación/scripts./Actualizar docs para reflejar arquitectura CDN-only.