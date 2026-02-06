# Guía de Configuración: Calendario de Disponibilidad

Esta guía te explica paso a paso cómo conectar tu calendario de Airbnb con tu web a través de Google Calendar.

> **Objetivo**: Que tu web muestre automáticamente las fechas bloqueadas en Airbnb sin que tengas que actualizar nada manualmente.

---

## Paso 1: Obtener el enlace de Airbnb (iCal)

1.  Entra en **Airbnb** y ve a tu anuncio.
2.  Ve a **Calendario**.
3.  Busca la opción **"Disponibilidad"** o **"Configuración de disponibilidad"**.
4.  Busca **"Conectar calendarios"** o **"Exportar calendario"**.
5.  Copia la dirección URL que termina en `.ics`.

---

## Paso 2: Suscribir Google Calendar a Airbnb

1.  Abre [Google Calendar](https://calendar.google.com/) en tu ordenador.
2.  En la columna izquierda, busca **"Otros calendarios"** y haz clic en el signo **`+`**.
3.  Selecciona **"Desde URL"**.
4.  Pega la URL del paso 1 (`.ics`) en el campo URL del calendario.
5.  Haz clic en **Añadir calendario**.
    *   *Ahora verás las reservas de Airbnb en tu Google Calendar con un color específico.*

---

## Paso 3: Obtener el código para la web

1.  En la columna izquierda de Google Calendar, busca el calendario que acabas de añadir (suele llamarse "Airbnb...").
2.  Pasa el ratón por encima, haz clic en los tres puntos `⋮` y elige **Configuración y uso compartido**.
3.  **IMPORTANTE**: Baja a "Permisos de acceso" y asegúrate de marcar **"Compartir públicamente"**.
    *   *Si no haces esto, nadie verá el calendario en la web.*
    *   Elige "Ver solo libre/ocupado" si quieres privacidad total, o "Ver todos los detalles" si no te importa.
4.  Baja hasta la sección **"Integrar el calendario"**.
5.  Verás un recuadro con un código que empieza por `<iframe...`.
6.  Haz clic en **"Personalizar"** (botón gris justo encima del código) si quieres cambiar el color o quitar el título "Google Calendar".
7.  **Copia el código HTML del iframe**.

---

## Paso 4: Ponerlo en tu web

1.  Abre el archivo `index.html` de tu web.
2.  Busca el comentario que dice:
    `<!-- INSTRUCCIONES PARA EL USUARIO: ... -->`
    (Está aproximadamente por la línea 1430, en la sección de Disponibilidad).
3.  Verás un bloque de código como este:
    ```html
    <iframe 
        src="https://calendar.google.com/..." 
        ... >
    </iframe>
    ```
4.  Sustituye la URL que hay dentro de `src="..."` por la URL de tu código copiado en el paso 3.
    *   *Opción fácil*: Borra todo el `<iframe...</iframe>` que puse de ejemplo y pega el tuyo tal cual.

¡Listo! Ahora tu web mostrará lo que diga Airbnb. Ten en cuenta que Google tarda unas horas (aprox. 12h) en refrescar los cambios de Airbnb.
