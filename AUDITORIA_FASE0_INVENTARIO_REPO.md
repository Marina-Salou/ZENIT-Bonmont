# FASE 0 - Inventario y Clasificacion del Repositorio

Fecha: 2026-02-15  
Objetivo: clasificar archivos actuales y proponer accion segura antes de limpiar.

## 1) Estado tecnico general (runtime)

- Estado HTML activo: **12 paginas `.html`** (sin copias `*-cdn.html`).
- `sitemap.xml`: presente y con URLs publicas de las paginas principales.
- `robots.txt`: presente.
- Restos de pipeline antiguo (build CSS/JS): **no detectados en runtime**.
  - No hay `input.css`, `output.css`, `tailwind.config.js`, `postcss.config.*`, `vite.config.*`, `webpack.config.*`.
- Schema JSON-LD detectado en:
  - `index.html` (VacationRental)
  - `tradicion-calcotada-valls-tarragona.html` (Article)
  - `rutas-btt-mont-roig-del-camp.html` (Article)
  - `guia-modernismo-reus.html` (Article)

## 2) Inventario documental (raiz)

| Archivo | Estado | Accion propuesta |
|---|---|---|
| `README.md` | Activo | Mantener y actualizar |
| `CHECKLIST_DATOS_PROPIETARIA.md` | Activo (operativo actual) | Mantener sin mover |
| `PLAN_MIGRACION_A_CDN.md` | Historico (migracion cerrada) | Archivar en `docs/archive/` |
| `auditoria_3_capas.md` | Historico | Archivar en `docs/archive/` |
| `AUDITORIA_ESTADO_ACTUAL.md` | Historico | Archivar en `docs/archive/` |
| `Auditoria_inventario.md` | Historico | Archivar en `docs/archive/` |
| `PLAN_OPTIMIZACION_IMAGENES.md` | Historico (plan ejecutado) | Archivar en `docs/archive/` |
| `AUDITORIA_IMAGENES_FASE0.md` | Historico (snapshot) | Archivar en `docs/archive/` |
| `PLAN_OPTIMIZACION_METADATOS.md` | Historico (plan ejecutado) | Archivar en `docs/archive/` |
| `AUDITORIA_METADATOS_FASE0.md` | Historico (snapshot) | Archivar en `docs/archive/` |

## 3) Inventario documental (`docs/`)

| Archivo | Estado | Accion propuesta |
|---|---|---|
| `docs/web-architecture.md` | Activo (tecnico base) | Mantener y alinear con normas finales |
| `docs/tailwind-no-brackets.md` | Activo (convencion tecnica) | Mantener, o fusionar en normas globales |
| `docs/calendar_setup_guide.md` | Activo (operativo negocio) | Mantener |

## 4) Otros archivos de apoyo

| Archivo | Estado | Accion propuesta |
|---|---|---|
| `AUDITORIA_METADATOS_FASE0.csv` | Historico de auditoria | Archivar en `docs/archive/` |
| `gallery-data.json` | Runtime | Mantener |
| `outdoor-gallery-data.json` | Runtime | Mantener |
| `package.json` | Revisar (aparente no uso en runtime) | Mantener por ahora, decidir en fase de limpieza final |

## 5) Decision de Fase 0

Propuesta para continuar (sin mover aun en esta fase):
1. Crear `REPO_STANDARDS.md` (fuente unica de normas).
2. Actualizar `README.md` con flujo operativo reducido.
3. En fase de limpieza, mover historicos a `docs/archive/`.
4. Mantener `CHECKLIST_DATOS_PROPIETARIA.md` en raiz (tal como se solicito).

## 6) Riesgos detectados (controlados)

- La informacion de decisiones esta dispersa en varios `.md` historicos.
- Si se archiva sin extraer reglas primero, puede perderse contexto util.

Mitigacion:
- Extraer reglas a `REPO_STANDARDS.md` **antes** de archivar.