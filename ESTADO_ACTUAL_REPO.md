# ESTADO_ACTUAL_REPO

Fecha: 2026-02-16

## 1) Estado tecnico actual
- Proyecto en modo estatico HTML + Tailwind CDN.
- Hosting configurado en Firebase:
  - `firebase.json` -> `hosting.public = "public"`.
  - `.firebaserc` -> proyecto por defecto configurado.
- Fuente de verdad del sitio: carpeta `public/`.

## 2) Estructura operativa
- Web publica: `public/*.html`.
- Recursos: `public/images/`.
- SEO tecnico: `public/sitemap.xml` y `public/robots.txt`.
- Documentacion activa:
  - `README.md`
  - `REPO_STANDARDS.md`
  - `STYLE_GUIDE.md`
  - `CONTENT_MASTER.md`
  - `CHECKLIST_DATOS_PROPIETARIA.md`
  - `docs/web-architecture.md`
  - `docs/calendar_setup_guide.md`
  - `docs/tailwind-no-brackets.md`

## 3) Riesgo detectado (importante)
- En el historial reciente hay archivos borrados en raiz y nuevos en `public/`.
- Esto es coherente con migracion de estructura, pero debe consolidarse en un commit limpio para evitar confusion.

## 4) Estado de negocio / integraciones
- Dominio: disponible (confirmado): `https://zenitbonmont.com`.
- Hosting: disponible (confirmado).
- Cuenta Gmail operativa para integraciones (formularios/calendario): disponible (confirmado).
- Pendiente de cierre legal: datos finales de titular (NIF/CIF, licencia exacta, etc.) para completar `legal.html`.

## 5) Siguientes pasos recomendados
1. Consolidar en Git la nueva estructura (`public/` como unica fuente de verdad).
2. Revisar deploy end-to-end (preview + deploy real).
3. Configurar formulario con cuenta Gmail del proyecto (si se usa Formspree u otro endpoint).
4. Configurar calendario (Google Calendar + iCal Airbnb) y validar visualizacion en `faqs`.
5. Cerrar placeholders legales cuando lleguen los datos de la propietaria.
