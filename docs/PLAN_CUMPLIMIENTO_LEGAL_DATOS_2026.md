# PLAN_CUMPLIMIENTO_LEGAL_DATOS_2026.md

## Objetivo
Cerrar cumplimiento legal y de protección de datos del sitio `zenitbonmont.com` (España/UE) con enfoque conservador (cumplimiento estricto) y verificable.

## Alcance
- Cookies y consentimiento.
- Google Analytics (GA4) y medición.
- Formulario de reserva (Formspree) y cláusulas RGPD.
- Textos legales (`legal.html`) y coherencia con implementación real.
- Evidencias de cumplimiento (pruebas y registro).

## Diagnóstico actual (estado real de la web)
1. `public/legal.html` mantiene campos `[PENDIENTE: ...]` críticos (titular, NIF/CIF, domicilio, licencia).
2. El banner de cookies permite `Aceptar`/`Rechazar` y persistencia 12 meses (bien en UX base).
3. GA4 se carga en todas las páginas con Consent Mode por defecto en denied.
4. No hay pixel de Meta/LinkedIn activo ahora (bien).
5. En `faqs.html` el formulario no exige checkbox explícito de aceptación de privacidad.
6. `legal.html` no refleja al detalle todos los terceros reales (Formspree, Google Calendar embebido).
7. No existe registro de consentimientos en backend (solo `localStorage` cliente).

## Criterio de cumplimiento recomendado (estricto)
Para minimizar riesgo en España/UE:
- No cargar scripts no esenciales hasta consentimiento (bloqueo previo real).
- Mantener rechazo tan fácil como aceptar.
- Política de cookies completa por proveedor/finalidad/duración.
- Trazabilidad mínima de consentimientos (auditable).
- Formulario con información por capas + aceptación expresa de privacidad.

---

## Fase 0 - Decisiones de gobernanza (sin tocar código)
1. Confirmar enfoque legal: `estricto` (bloqueo previo total).
2. Confirmar responsables:
   - Titular legal.
   - Responsable tratamiento.
   - DPO/Contacto (si aplica).
3. Confirmar proveedores reales de datos:
   - Firebase Hosting / Google (infraestructura + GA4).
   - Formspree (formulario).
   - Cloudflare (DNS/seguridad).
   - Google Calendar embebido (si se mantiene).

**Entregable:** lista cerrada de responsables + proveedores.

## Fase 1 - Cookies y scripts (cumplimiento técnico)
1. Migrar de modo actual a bloqueo previo estricto:
   - No cargar `gtag.js` hasta aceptar analítica.
   - Mantener botón `Rechazar` equivalente.
2. Mantener `Gestionar cookies` visible en footer.
3. Verificar revocación real:
   - al revocar, detener analítica y limpiar estado local.
4. Definir categorías mínimas:
   - necesarias (siempre), analíticas (opt-in).

**Entregable:** flujo `aceptar/rechazar/gestionar` con bloqueo real de terceros no esenciales.

## Fase 2 - GA4 (configuración mínima y segura)
1. Medición solo tras consentimiento analítico.
2. Revisar ajustes de propiedad GA4:
   - Desactivar señales no necesarias para este proyecto (si no se usan).
   - No enviar PII (emails, teléfonos, nombres) en eventos.
3. Documentar finalidad exacta de GA4 en política de cookies/privacidad.

**Entregable:** GA4 funcional y limitado a finalidad analítica declarada.

## Fase 3 - Formulario (RGPD/LOPDGDD)
1. Añadir capa informativa breve junto al botón de envío:
   - responsable,
   - finalidad,
   - base jurídica,
   - plazo,
   - destinatarios,
   - derechos,
   - enlace a política completa.
2. Añadir checkbox obligatorio:
   - "He leído y acepto la Política de privacidad".
3. Revisar copia de éxito/error del formulario para no prometer acciones no cubiertas.
4. Confirmar destino de emails y minimización de datos solicitados.
5. Definir política de canal de contacto:
   - Formulario como canal principal visible en la web.
   - Email público no obligatorio en footer/header.
   - Email de contacto sí obligatorio en `legal.html` (cumplimiento LSSI/RGPD).
6. Si se oculta el email en la parte comercial, reforzar confianza con:
   - tiempo estimado de respuesta (ej.: "respondemos en 24h"),
   - copy claro de atención personalizada,
   - FAQ de reservas y cancelación.

**Entregable:** formulario con consentimiento informado y verificable.

## Fase 4 - Legal texts (alineación documental)
1. Completar `public/legal.html` con datos reales (sin pendientes).
2. Política de cookies: tabla detallada por cookie/servicio/duración/finalidad/base.
3. Política de privacidad: incluir terceros reales y transferencias internacionales cuando proceda.
4. Añadir versión/fecha de revisión legal y control de cambios.

**Entregable:** `legal.html` final, sin placeholders y coherente con implementación.

## Fase 5 - Evidencias y auditoría
1. Test técnico en 3 escenarios:
   - rechazo,
   - aceptación,
   - revocación posterior.
2. Verificar en DevTools Network que con rechazo no salen requests no esenciales a terceros.
3. Guardar evidencia (capturas + checklist firmado internamente).
4. Definir cadencia de revisión (trimestral o tras cambios de scripts/proveedores).

**Entregable:** acta de validación de cumplimiento.

Referencia operativa:
- `docs/CHECKLIST_EVIDENCIAS_CONSENTIMIENTO.md`

---

## Orden de ejecución recomendado
1. Fase 0
2. Fase 1
3. Fase 3
4. Fase 4
5. Fase 2
6. Fase 5

> Motivo: primero bloqueo/consentimiento y formulario, luego texto legal y ajustes finos de analytics.

## Riesgos si se publica sin cerrar
- Requerimientos por deficiencia de consentimiento previo (cookies/analítica).
- Debilidad probatoria ante inspección (sin registro/evidencia).
- Inconsistencia legal por placeholders y terceros no declarados.

## Checklist de “Go-Live Legal” (sí/no)
- [ ] Sin placeholders en `legal.html`.
- [ ] Bloqueo previo real de analítica.
- [ ] Rechazo equivalente a aceptar.
- [ ] Checkbox privacidad en formulario.
- [ ] Canal de contacto principal por formulario definido y operativo.
- [ ] Email de contacto publicado al menos en `legal.html`.
- [ ] Terceros y transferencias correctamente descritos.
- [ ] Evidencia técnica guardada (rechazo/aceptar/revocar).

## Fuentes oficiales de referencia (consulta)
- AEPD - Guía de cookies: https://www.aepd.es/guias/guia-cookies.pdf
- EDPB Opinion 08/2024 (consent or pay): https://www.edpb.europa.eu/our-work-tools/our-documents/opinion-board-art-64/opinion-082024-valid-consent-context-consent_en
- RGPD (Reglamento UE 2016/679): https://eur-lex.europa.eu/eli/reg/2016/679/oj
- LSSI-CE (España, art. 22.2 cookies): https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758
- Google Consent Mode: https://developers.google.com/tag-platform/security/guides/consent
- Formspree (privacidad y términos): https://formspree.io/legal/privacy-policy/
