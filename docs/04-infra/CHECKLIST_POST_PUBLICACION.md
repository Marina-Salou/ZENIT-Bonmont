# CHECKLIST_POST_PUBLICACION.md

Objetivo: no olvidar ajustes importantes cuando `zenitbonmont.com` ya este publicado y estable.

## Cuando aplicar este checklist
- Esperar entre 7 y 14 dias tras publicar.
- Aplicarlo cuando la web ya funcione estable (sin cambios grandes pendientes).

## Bloque 1 - Seguridad base del dominio (Cloudflare)
1. Confirmar que sigue activo:
   - SSL/TLS en modo `Completo (Full)`.
   - `Usar siempre HTTPS` activado.
   - `TLS minimo` en `1.2`.
   - `TLS 1.3` activado.
2. Activar `Supervision de transparencia de certificados`.
   - Sirve para recibir aviso por email si alguien emite un certificado para tu dominio.

## Bloque 2 - Cache y modo produccion (Cloudflare)
1. Verificar que `Modo Desarrollo` esta `OFF`.
   - Si esta ON, Cloudflare no cachea y no es modo de produccion.
2. Mantener por defecto (sin tocar salvo necesidad):
   - `Always Online`.
   - `Crawler Hints`.
   - `Nivel de almacenamiento en cache` y TTL de navegador.
3. Usar `Purgar cache` solo cuando haga falta forzar refresco tras un cambio.

## Bloque 3 - HSTS (hacer con cuidado)
HSTS obliga a navegadores a usar siempre HTTPS.

Pasos recomendados:
1. Fase 1: activar HSTS con `max-age` corto (1 semana), sin preload.
2. Revisar que todo funciona bien en todos los dispositivos.
3. Fase 2: subir `max-age` (1 mes).
4. Fase 3: subir a 6-12 meses cuando todo este totalmente estable.

Nota: no activar preload hasta tener muy claro que no habra vuelta atras.

## Bloque 4 - DNSSEC (seguridad DNS)
1. Activar DNSSEC en Cloudflare.
2. Verificar que el dominio sigue resolviendo correctamente.
3. Comprobar que la web carga normal desde movil y desktop.

## Bloque 5 - Bot traffic y proteccion
1. Valorar activar `Bot Fight Mode`.
2. Tras activarlo, probar durante 48h:
   - Formulario de reserva.
   - Carga de paginas.
   - GA4 (medicion en tiempo real).
3. Si algo legitimo falla, desactivar y revisar reglas antes de reactivar.

## Bloque 6 - Correo del dominio (plan de trabajo acordado)
Objetivo operativo:
- Propietaria: recibir y responder como `info@zenitbonmont.com`.
- Gestion interna tecnica: `zenitbonmont@gmail.com`.

### 6.1 Routing y cuentas
1. Cloudflare Email Routing:
   - `info@zenitbonmont.com` -> `infozenitbonmont@gmail.com` (propietaria).
2. Mantener cuenta interna separada:
   - `zenitbonmont@gmail.com` para GA4, Search Console, Google Business, Maps e integraciones.

### 6.2 Envio como `info@...` desde Gmail (propietaria)
1. En Gmail de la propietaria, configurar `Enviar correo como` con `info@zenitbonmont.com`.
2. Verificar envio y recepcion real con una prueba externa.

### 6.3 Autenticacion de correo (seguridad real)
1. Revisar/confirmar MX.
2. Configurar SPF.
3. Configurar DKIM.
4. Configurar DMARC por fases:
   - Fase A (monitor): `p=none`.
   - Fase B: `p=quarantine`.
   - Fase C: `p=reject`.

### 6.4 Registro DMARC inicial recomendado
- Tipo: `TXT`
- Nombre: `_dmarc`
- Valor:
  - `v=DMARC1; p=none; rua=mailto:infozenitbonmont@gmail.com; adkim=s; aspf=s; fo=1; pct=100`

## Bloque 7 - Verificacion final de negocio
1. Revisar en Firebase que `zenitbonmont.com` y `www` siguen en estado Connected/Active.
2. Revisar redirecciones:
   - `http://zenitbonmont.com` -> `https://zenitbonmont.com`
   - `https://www.zenitbonmont.com` -> dominio final elegido.
3. Revisar en GA4 que entra trafico normal.
4. Revisar Search Console (cobertura/indexacion) cuando este conectada.

## Bloque 8 - Mantenimiento mensual (ligero)
- Revisar alertas de Cloudflare.
- Revisar estado SSL y expiracion de certificados.
- Comprobar que no haya errores 404 nuevos importantes.
- Revisar formulario de reserva (envio y recepcion de emails).

---

## Regla operativa
Si no se entiende una opcion tecnica, no tocarla en caliente.
Primero documentar duda y aplicar cambio de uno en uno con comprobacion real.
