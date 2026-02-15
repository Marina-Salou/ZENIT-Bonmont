Plan propuesto (sin cambios al inicio)

Auditoría de inventario
Listar todos los archivos del repo por tipo (.html, .css, .js, config/build, scripts).
Identificar candidatos “antiguos” (build tools, css compilado, restos de pipeline).
Auditoría técnica por archivo HTML
Verificar en cada página:
cdn.tailwindcss.com presente
tailwind.config inline presente
ausencia de CSS compilado antiguo enlazado (ej: *.css, styles.css heredado)
ausencia de JS de compilación/hot-reload legado.
Auditoría de restos de build
Buscar y marcar si existen:
tailwind.config.js antiguo
postcss.config.*
package.json con scripts de build CSS que ya no usamos
carpetas dist, build, src/styles, etc.
Clasificación de hallazgos
Mantener (útil)
Deprecar (no se usa, pero mejor revisar referencias antes)
Eliminar (seguro obsoleto).
Plan de limpieza por fases
Fase A: eliminar solo “100% seguro obsoleto”
Fase B: revalidar enlaces/referencias
Fase C: commit de limpieza + resumen final.
Verificación final
Búsqueda global de referencias rotas
git status limpio de sorpresas
reporte final entendible (qué se quitó y por qué).`r`n`r`n## Resultado Paso 1 (2026-02-15)

### Inventario real del repo (fuera de node_modules/images/.git)
- HTML: 12
- MD: 8
- JSON: 5
- Otros: `.xml`, `.txt`, `.svg`, `.gitattributes`, `.gitignore`, `.nojekyll`
- CSS/JS locales de proyecto: **0** (no hay `*.css`, `*.js`, `*.cjs`, `*.mjs` fuera de `node_modules`)

### Páginas HTML detectadas
- `index.html`
- `indoor.html`
- `outdoor.html`
- `lifestyle.html`
- `philosophy.html`
- `faqs.html`
- `blog.html`
- `legal.html`
- `wellness.html`
- `guia-modernismo-reus.html`
- `rutas-btt-mont-roig-del-camp.html`
- `tradicion-calcotada-valls-tarragona.html`

### Hallazgos de restos "antiguos" (pipeline/build)
- No existen: `input.css`, `output.css`, `tailwind.config.js`, `postcss.config.*`, `vite.config.*`, `webpack.config.*`, `gulpfile.*`.
- No existen `*-cdn.html` (ya consolidado en `.html` finales).
- No hay `<link href="*.css">` en HTML de proyecto.

### Estado CDN detectado (global)
- `cdn.tailwindcss.com` presente en las 12 páginas.
- `tailwind.config = { ... }` inline presente en las 12 páginas.

### Candidatos a revisar en pasos siguientes
- `node_modules/` (local, no necesario para runtime web estática).
- `package-lock.json` y `package.json` (contienen deps/snapshot de Tailwind CLI/typography de etapas previas; posible limpieza final si confirmamos CDN-only estricto).

### Conclusión Paso 1
Inventario completado. No se detectan restos activos de CSS compilado ni toolchain de build en uso dentro del código servido. Queda únicamente revisión de housekeeping (`node_modules`, lock y package) para cierre total.


## Resultado Paso 2 (2026-02-15)

### Checklist estructural por página (12/12)
Verificado en:
`index.html`, `indoor.html`, `outdoor.html`, `lifestyle.html`, `philosophy.html`, `faqs.html`, `blog.html`, `legal.html`, `wellness.html`, `guia-modernismo-reus.html`, `rutas-btt-mont-roig-del-camp.html`, `tradicion-calcotada-valls-tarragona.html`.

### 1) Tailwind CDN + config
- `https://cdn.tailwindcss.com?plugins=typography`: presente en 12/12.
- `tailwind.config` inline: presente en 12/12.
- Forma mínima coherente detectada en 12/12:
  - `darkMode: "class"`
  - `theme.extend.colors`
  - `theme.extend.fontFamily`
- Sin claves extra de complejidad (`plugins`, `safelist`, `corePlugins`, etc.) en el bloque inline.

### 2) Patrón de contenedor unificado
- Header con `w-full max-w-[1400px] mx-auto px-6`: 12/12.
- Footer con `w-full max-w-[1400px] mx-auto px-6`: 12/12.
- Banner cookies con `w-full max-w-[1400px] mx-auto px-6`: 12/12.

### 3) CTA + menú móvil + dark mode
- CTA desktop (`hidden sm:inline-block` + "Reservar"): 12/12.
- Dark mode (`id="themeToggle"` + listener JS): 12/12.
- Menú móvil funcional: 12/12, usando patrón actual **CSS-only**:
  - `id="mobileMenuToggle"` (checkbox peer)
  - panel con `peer-checked:*`
  - links envueltos en `<label for="mobileMenuToggle">` para autocierre al navegar.

> Nota de auditoría: el checklist antiguo esperaba `id="menuToggle"` + script `menuBtn.addEventListener(...)`. Ya no aplica porque fue migrado intencionalmente al patrón CSS-only unificado.

### 4) Cookies
- `cookieConsent`, `cookieAccept`, `cookieReject`, `manageCookies` presentes: 12/12.
- Script de aceptación/rechazo/gestión presente: 12/12.

### Conclusión Paso 2
Validación estructural superada en todas las páginas, sin desvíos funcionales respecto al estándar actual del proyecto.

## Resultado Paso 3 (2026-02-15)

### Auditoría de restos de build / housekeeping

#### Hallazgo A: `node_modules/`
- Estado: carpeta presente en local.
- Impacto runtime web: ninguno (sitio estático CDN-only).
- Estado en Git: no versionado (ignorado por `.gitignore`).
- Clasificación: **Deprecar localmente** (prescindible para este proyecto en su estado actual).

#### Hallazgo B: `package-lock.json`
- Estado: versionado en Git.
- Contenido: snapshot con dependencias de Tailwind CLI/typography de fase anterior.
- Impacto runtime web: ninguno (no hay build pipeline activo).
- Clasificación: **Deprecar / candidato a eliminar** en cierre CDN-only estricto.

#### Hallazgo C: `package.json`
- Estado: versionado en Git.
- Contenido actual: metadatos + script `test` informativo (sin build).
- No contiene scripts `build/dev/watch`.
- Clasificación: **Mantener o simplificar** (no bloquea nada).

#### Hallazgo D: configs de toolchain
- `tailwind.config.js`, `postcss.config.*`, `vite.config.*`, `webpack.config.*`, `gulpfile.*`: no existen.
- Clasificación: **Sin acción**.

### Clasificación final (Paso 3)
- **Mantener (útil / inocuo):**
  - `package.json` (informativo, sin scripts de build).
  - `.gitignore` con `node_modules/`, `dist/`, `build/`.
- **Deprecar (no necesario para operación actual):**
  - `package-lock.json`.
  - `node_modules/` local.
- **Eliminar seguro (si cerramos CDN-only estricto):**
  - `package-lock.json` (del repo).
  - `node_modules/` local (limpieza de entorno, no afecta Git).

### Conclusión Paso 3
No quedan restos de build activos en el código servido. Solo quedan artefactos de entorno/gestión que pueden limpiarse en fase de cierre para dejar el repositorio completamente alineado con arquitectura CDN-only.

## Fase A ejecutada (2026-02-15)

Acciones realizadas:
- Eliminado `package-lock.json` del repositorio (artefacto legado de etapa CLI).
- Eliminada carpeta local `node_modules/` (no versionada).

Verificación:
- `package-lock.json`: no existe.
- `node_modules/`: no existe.
- HTML y arquitectura CDN-only: sin cambios.

## Fase B ejecutada (2026-02-15)

Revalidación tras limpieza (sin cambios funcionales):

- `git status` esperado:
  - `D package-lock.json`
  - `M blog.html` (cambio previo existente)
  - `?? Auditoria_inventario.md`

- HTML (12/12) mantiene arquitectura CDN-only:
  - `cdn.tailwindcss.com` presente.
  - `tailwind.config` inline presente.
  - sin `<link ... .css>` locales.

- No se detectan referencias activas a toolchain de build en código servido.
  - Las menciones encontradas de `input.css/output.css/postcss/...` están en documentación histórica/auditoría, no en runtime HTML.

### Conclusión Fase B
Revalidación superada: limpieza compatible con estado funcional actual del sitio.
