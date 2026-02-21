# CHECKLIST_DATOS_PROPIETARIA

## Objetivo
Recopilar en una sola ronda todo lo necesario para:
- Cumplimiento legal web (España, febrero 2026).
- Medición (Google Analytics 4).
- Calendario de reservas (Google Calendar + Airbnb iCal).
- Presencia local (Google Business Profile / Google Maps).
- Preparar futuras integraciones (reseñas, perfil de negocio, automatizaciones).

## 1) Datos legales obligatorios (web)
- [ ] Nombre y apellidos completos de la titular (o razón social exacta).
- [ ] NIF/CIF de la titular.
- [ ] Dirección fiscal completa (calle, número, CP, municipio, provincia, país).
- [ ] Email oficial de contacto legal (si es distinto de `info@zenitbonmont.com`).
- [ ] Teléfono de contacto oficial (opcional, pero recomendable).
- [ ] Número exacto de licencia turística tal y como aparece en registro oficial.
- [ ] Confirmación de comunidad autónoma/provincia del registro (para validar prefijo correcto de licencia).

## 2) Google Analytics 4 (medición)
- [ ] Cuenta de Google que será propietaria de Analytics (email exacto).
- [ ] Confirmación de que esa cuenta será la "cuenta maestra" del proyecto.
- [ ] Permiso para crear o administrar propiedad GA4 desde esa cuenta.
- [ ] Zona horaria de reporting deseada (recomendado: Europe/Madrid).
- [ ] Moneda de reporting (recomendado: EUR).

Notas:
- Se debe usar una cuenta de negocio (no personal temporal).
- Cuando esté creada, nos compartirá el ID tipo `G-XXXXXXXXXX`.

## 3) Google Business Profile / Google Maps
- [ ] Cuenta Google propietaria del perfil de empresa.
- [ ] Nombre comercial exacto a publicar.
- [ ] Dirección exacta que se mostrará en Maps.
- [ ] Teléfono público para el perfil.
- [x] URL web oficial: `https://zenitbonmont.com`.
- [ ] Categoría principal del negocio (ej. alquiler vacacional / villa turística).
- [ ] Evidencias para verificación (si Google las pide): documentación del negocio, fotos, etc.

## 4) Google Calendar + Airbnb iCal
- [ ] Cuenta Google donde vivirá el calendario maestro de reservas.
- [ ] URL de exportación iCal de Airbnb (normalmente termina en `.ics`).
- [ ] Si hay más plataformas (Booking, Vrbo, etc.), sus URLs iCal también.
- [ ] Confirmación de la regla de sincronización:
  - [ ] Airbnb -> Google Calendar (lectura)
  - [ ] Google Calendar -> Airbnb (si se quiere bidireccional y la plataforma lo permite)

Notas:
- Necesitamos **URL iCal de exportación** (no captura, no texto parcial).
- Idealmente también acceso para probar importación/suscripción en calendario.

## 5) Accesos y permisos (operativa segura)
- [ ] Nivel de acceso que nos dará en cada plataforma:
  - [ ] Analytics
  - [ ] Google Business
  - [ ] Calendario
  - [ ] Airbnb (si aplica)
- [ ] Confirmación de uso de verificación en 2 pasos (2FA) en cuentas críticas.
- [ ] Email de recuperación de cada cuenta (recomendado).

## 6) Material para fases siguientes (opcional pero útil)
- [ ] Logo en alta calidad (SVG/PNG).
- [ ] Fotos nuevas autorizadas para web y perfil de Google.
- [ ] Texto corto de descripción comercial (ES/EN).
- [ ] Política de cancelación resumida para mostrar en web/perfiles.

## 7) Entregables concretos que te debe enviar
- [ ] Documento con datos legales completos.
- [ ] Email de cuenta Google principal.
- [ ] ID GA4 (cuando lo tengamos creado).
- [ ] URL iCal de Airbnb.
- [ ] Confirmación de licencia turística exacta.

---

## Mensaje plantilla para enviarle a la propietaria
Hola [Nombre], para dejar web, legal y reservas bien configurado necesito estos datos en un solo envío:

1) Datos legales:
- Nombre completo / razón social
- NIF/CIF
- Dirección fiscal completa
- Email legal de contacto
- Nº exacto de licencia turística tal como aparece en registro oficial

2) Google:
- Email de la cuenta Google que será la principal del negocio
- Confirmación para usar esa cuenta en Analytics y Business Profile/Maps

3) Reservas:
- URL iCal de exportación de Airbnb (enlace completo `.ics`)
- Si tienes otras plataformas, también sus iCal

Con eso dejamos legal, medición y sincronización de calendario correctamente configurados.

---

## Observación importante
Hasta recibir NIF/CIF y licencia exacta oficial, la parte legal no debe considerarse cerrada al 100%.
