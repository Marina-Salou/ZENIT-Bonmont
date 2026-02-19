# CHECKLIST_EVIDENCIAS_CONSENTIMIENTO.md

## Objetivo
Validar y documentar que el sitio cumple el flujo de consentimiento de cookies (aceptar/rechazar/revocar) con bloqueo real de analítica.

## Entorno de prueba
- Navegador: Chrome (modo normal).
- URL: `http://127.0.0.1:5503/public/index.html` (o dominio final cuando esté publicado).
- DevTools: pestañas `Application` y `Network`.

## Preparación
1. Abrir DevTools (`F12`).
2. En `Application > Local Storage > <origen>`, eliminar:
- `cookieConsent`
- `cookieConsentDate`
3. En `Network`, activar:
- `Preserve log` desactivado.
- filtro vacío.

---

## Escenario A: Rechazo (debe bloquear GA)
1. Recargar la página.
2. En banner, pulsar `Rechazar`.
3. En `Application > Local Storage`, comprobar:
- `cookieConsent = rejected`
- `cookieConsentDate = <timestamp>`
4. En `Network`, filtrar por `gtag`.
5. Resultado esperado:
- No aparece `https://www.googletagmanager.com/gtag/js?id=G-9WNCNXHN7X`.

Evidencia a guardar:
- Captura de `Local Storage` con `rejected`.
- Captura de `Network` filtro `gtag` vacío.

---

## Escenario B: Aceptación (debe cargar GA)
1. Recargar página.
2. En banner, pulsar `Aceptar`.
3. En `Application > Local Storage`, comprobar:
- `cookieConsent = accepted`
- `cookieConsentDate = <timestamp>`
4. En `Network`, filtrar por `gtag`.
5. Resultado esperado:
- Sí aparece `gtag/js?id=G-9WNCNXHN7X`.

Evidencia a guardar:
- Captura de `Local Storage` con `accepted`.
- Captura de `Network` con request `gtag/js`.

---

## Escenario C: Revocación (Gestionar cookies + Rechazar)
1. Partir de estado `accepted`.
2. En footer, pulsar `Gestionar cookies`.
3. En banner reabierto, pulsar `Rechazar`.
4. Verificar en `Local Storage`:
- `cookieConsent = rejected`
5. Verificar en `Network` con filtro `gtag`:
- No nuevas cargas de `gtag/js`.

Evidencia a guardar:
- Captura de acción `Gestionar cookies` + banner.
- Captura final de `Local Storage` (`rejected`).
- Captura de `Network` sin nuevas cargas GA.

---

## Escenario D: Formulario con consentimiento informado
Página: `public/faqs.html`

1. Ir a sección formulario.
2. Intentar enviar sin marcar checkbox de privacidad.
3. Resultado esperado:
- El navegador bloquea el envío.
4. Marcar checkbox y enviar.
5. Resultado esperado:
- Se permite el envío (con el flujo normal del formulario).

Evidencia a guardar:
- Captura del checkbox obligatorio.
- Captura de bloqueo sin checkbox.
- Captura de envío correcto con checkbox.

---

## Matriz de aceptación final
- [ ] Rechazo bloquea GA.
- [ ] Aceptación carga GA.
- [ ] Revocación vuelve a bloquear.
- [ ] `Gestionar cookies` reabre banner.
- [ ] Formulario exige aceptación de privacidad.
- [ ] En `legal.html` se describen proveedores reales y política de cookies actual.

## Notas
- Este checklist no sustituye asesoramiento jurídico.
- Cerrar legal al 100% cuando se sustituyan placeholders de titular/NIF/domicilio/licencia.
