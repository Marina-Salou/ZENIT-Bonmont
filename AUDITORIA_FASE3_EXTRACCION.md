# FASE 3 - Extraccion de reglas y consolidacion documental

Fecha: 2026-02-15  
Objetivo: consolidar decisiones permanentes en documentos vivos y preparar limpieza posterior.

## 1) Fuentes historicas revisadas
- `PLAN_MIGRACION_A_CDN.md`
- `PLAN_OPTIMIZACION_IMAGENES.md`
- `PLAN_OPTIMIZACION_METADATOS.md`
- `AUDITORIA_ESTADO_ACTUAL.md`
- `AUDITORIA_IMAGENES_FASE0.md`
- `AUDITORIA_METADATOS_FASE0.md`
- `Auditoria_inventario.md`
- `auditoria_3_capas.md`

## 2) Reglas permanentes extraidas
1. Arquitectura CDN-only sin pipeline de build.
2. Consistencia transversal de header/footer/cookies y contenedor patron.
3. Politica editorial de idioma (UI espanol, SEO/alt ingles, legal espanol).
4. Flujo de trabajo por fases, con validacion desktop+movil y recarga dura.
5. Checklist tecnico de cierre por cambio (DoD).
6. Regla de no borrar historico sin extraer conocimiento.
7. Reglas minimas de SEO/metadatos/sitemap/schema.
8. Reglas minimas de imagen (alt + atributos tecnicos).

## 3) Cambios aplicados en fase 3
- `REPO_STANDARDS.md`: ampliado y consolidado con reglas extraidas.
- `README.md`: simplificado y alineado a `REPO_STANDARDS.md` como fuente unica.

## 4) Decision consolidada de idioma tecnico
- Estado actual definido: `html lang="en"` en todas las paginas.
- Cualquier cambio futuro de `lang` se considera cambio global, no parcial.

## 5) Pendiente para fase siguiente (limpieza)
- Crear `docs/archive/`.
- Mover ahi los planes y auditorias cerrados en raiz.
- Mantener en raiz solo documentos vivos y operativos.