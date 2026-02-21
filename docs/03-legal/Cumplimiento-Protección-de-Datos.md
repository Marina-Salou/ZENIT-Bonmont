Resumen ejecutivo — puntos clave

Consentimiento previo e informado: las cookies y trackers no esenciales (incluidas la mayoría de las analíticas y publicidad) no pueden instalarse antes de obtener un consentimiento válido: libre, específico, informado y unívoco.

No valen casillas pre-marcadas ni oscuramiento de la negativa: el consentimiento no puede derivarse de opciones pre-tildadas ni de interfaces engañosas; debe haber rechazo tan fácil como aceptar.

Transparencia granular: la web debe identificar propósitos, terceros y duración de cada cookie y ofrecer elección por categoría y por tercero.

Analíticas: consentimiento salvo anonimización real: las analíticas requieren consentimiento salvo que los datos sean realmente irreversiblemente anonimizados (no solo pseudonimizados). IP truncada/hashed + agregación puede ayudar, pero debe evaluarse.

Evolución normativa (2024–2026): el EDPB emitió doctrina relevante sobre modelos “consent or pay” (Opinion 08/2024) y en feb 2026 hay iniciativas de reforma (Digital Omnibus / opiniones EDPB-EDPS) que están cambiando criterios; conviene seguir actualizaciones. En UK, nuevas disposiciones del Data (Use and Access) Act han entrado en vigor en febrero 2026 y afectan cumplimiento local (PECR + UK GDPR).

Checklist obligatorio para la web (implementable inmediatamente)

Elementos visibles obligatorios

 Banner inicial que permita: Aceptar todas / Rechazar todas / Ajustes (gestor granular). El rechazo debe ser tan fácil como aceptar.

 Enlace claro a Política de Cookies desde el banner y en el footer; la política debe listar por cookie: nombre, proveedor (propio/tercero), propósito, duración, categoría y cómo revocar.

 Controles granulares (switches por categoría: necesarias, preferencias, estadísticas/analítica, marketing) y, en la categoría analítica/marketing, listado de terceros y propósitos.

 Opción de retirada/gestión accesible en todo momento (botón visible o secciones en privacidad/mi cuenta).

Requisitos de contenido mínimo en el banner/popup

Identidad del responsable del sitio.

Propósitos para los que se piden cookies.

Indicación de que la continuación sin aceptar no puede justificar instalación (si no hay consentimiento).

Enlace a la política de cookies y aviso de cómo cambiar la decisión.

Requisitos administrativos / registros

 Registro de consentimientos: almacenar prueba (quién, cuándo, qué opciones marcó, origen IP/UA si procede) por tiempo razonable para demostrar cumplimiento.

 Evaluación de impacto / justificación cuando se use procesamiento a gran escala o perfiles (según GDPR).

Requisitos específicos para analítica (Google Analytics u otros)

Consentimiento previo para analítica que no sea anónima: si las analíticas recogen datos personales (IP sin anonimizar, identificadores persistentes, cross-site identifiers), requieren consentimiento previo.

Anonimización efectiva: la simple truncación de IP o hashing puede no ser suficiente si sigue permitiendo re-identificación. Debe documentarse técnica y jurídicamente que no existe posibilidad razonable de re-identificación. Si es irreversible y verificado, el tratamiento puede no ser considerado dato personal.

Alternativa de medición consent-less: algunas guías y autoridades promueven soluciones internas (analítica hospedada, Matomo en modo anonymized) o métodos agregados que no requieren consentimiento. La Comisión/EDPB ofrecen ejemplos y herramientas.

Terceros (tags/SDKs): cuando terceros procesan datos (p. ej. GA4, pixel de FB), la web debe identificar a esos terceros en la política y asegurar contratos/encargos de tratamiento. El consentimiento cubre también el envío a terceros.

Funcionamiento técnico requerido (implementación)

Bloqueo previo (blocking): ningún script, pixel o cookie no esencial debe ejecutarse antes del consentimiento. Implementar bloqueo por defecto (consent mode o tag manager que no dispare etiquetas hasta que el usuario acepte).

Carga condicional: scripts de analítica y marketing solo se inician tras consentimiento explícito por categoría y, si se da, deben respetar las opciones (p. ej. permitir analítica pero bloquear marketing).

Registros (audit trail): almacenar timestamp, versión del texto de consentimiento, ID de sesión/usuario (si aplica) y la configuración elegida por el usuario para poder probar cumplimiento.

Granularidad y persistencia: permitir granularidad por propósito / tercero; la preferencia del usuario debe persistir (cookie propia o local storage) y ser revocable. Evitar técnicas que dificulte la revocación (p. ej. exigir login para revocar).

Pruebas y auditoría: testear (herramientas de debugging) que, con rechazo, no se envíe ninguna petición a terceros (no beacons, no pixels, no 3rd-party cookies). Documentar resultados.

Aspectos controvertidos / en evolución (a tener en cuenta)

Modelos “consent or pay” (pagar para no ser rastreado): el EDPB ha sido crítico (Opinion 08/2024) y advierte que en muchos casos no es consentimiento libre; la cuestión sigue en debate y supervisión judicial/administrativa. Evitar implementar modelos “pagar o aceptar” sin análisis legal detallado.

Fingerprinting / técnicas invisibles: las autoridades (ICO, AEPD, EDPB) consideran que fingerprinting puede vulnerar el control del usuario y es objeto de escrutinio; su uso exige especial justificación y transparencia.

Reformas 2025–2026: iniciativas como la “Digital Omnibus” y opiniones EDPB-EDPS (febrero 2026) pueden introducir obligaciones adicionales; mantener vigilancia normativa.

Riesgos y sanciones (prioridad de cumplimiento)

Riesgos: sanciones administrativas, requerimientos de la AEPD/SA (correcciones), órdenes de cesar tratamientos, daño reputacional y reclamaciones. Las sanciones por GDPR/ePrivacy pueden ser cuantiosas en función del incumplimiento. Cumplir consentimiento, bloqueo previo y registros reduce riesgo.

Acciones prácticas inmediatas (implementación rápida)

Revisar todos los scripts/etiquetas y listarlos (propios y terceros).

Implementar gestor de consentimiento que: bloquee por defecto; ofrezca aceptar/rechazar y ajustes; registre consents.

Redactar/actualizar política de cookies (detallada por cookie/tercero/propósito/duración).

Evaluar si la analítica actual puede configurarse en modo verdaderamente anonimizador o migrar a solución/self-hosted.

Documentar pruebas (con user flows: aceptar / rechazar / ajustar) y guardar logs.

Fuentes oficiales y documentación consultada (selección principal)

Guía de la Agencia Española de Protección de Datos (AEPD) — Guía sobre el uso de las cookies.

Sentencia del Tribunal de Justicia de la Unión Europea — Planet49 / CJEU (consentimiento y casillas pre-tildadas).

Opinion 08/2024 del European Data Protection Board (EDPB) — Valid Consent in Consent-or-Pay models.

European Data Protection Board — guías y recomendaciones generales (documentos y actualizaciones).

EDPB–EDPS Joint Opinion (Digital Omnibus) — febrero 2026 (documento sobre propuestas y modificaciones a corpus digital).

ICO (Reino Unido) — Guidance on the use of cookies and similar technologies (actualizada).

EDPB / European Commission resources sobre analítica y Europa Analytics (proyectos internos / ejemplos de implementación de analítica respetuosa).

Nota sobre cambios en UK: Data (Use and Access) Act 2025 (entradas en vigor feb 2026) y su impacto en PECR/UK-GDPR.

Comentario final (resumen de cumplimiento esencial)

Implementar bloqueo previo, consentimiento granular y verificable, política de cookies completa, registro de consents y analítica sólo con consentimiento salvo anonimización efectiva. Mantener vigilancia sobre guías EDPB/AEPD y adaptaciones legislativas 2026 (Digital Omnibus / DUA Act UK). Las cinco afirmaciones clave están citadas arriba.