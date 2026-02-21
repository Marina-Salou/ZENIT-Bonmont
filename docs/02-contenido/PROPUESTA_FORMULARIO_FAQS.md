# Propuesta Formulario FAQS

Estado: pendiente de aplicar  
Objetivo: conservar esta propuesta exacta del formulario de reserva para implementación futura sin volver a rediseñarla.

```html
<form id="bookingForm" action="https://formspree.io/f/xwvnbpzp" method="POST" class="space-y-6">
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div>
            <label for="arrival" class="block text-[0.7rem] font-bold uppercase tracking-widest text-muted mb-2">Llegada</label>
            <input type="text" id="arrival" name="arrival" placeholder="dd/mm/aaaa" required class="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-secondary transition-colors">
        </div>
        <div>
            <label for="departure" class="block text-[0.7rem] font-bold uppercase tracking-widest text-muted mb-2">Salida</label>
            <input type="text" id="departure" name="departure" placeholder="dd/mm/aaaa" required class="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-secondary transition-colors">
        </div>
        <div>
            <label for="guests" class="block text-[0.7rem] font-bold uppercase tracking-widest text-muted mb-2">Adultos</label>
    <select id="guests" name="guests" class="w-full bg-gray-50 dark:bg-white/5 text-muted dark:text-gray-400 dark:[color-scheme:light] border border-gray-200 dark:border-white/10 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-secondary transition-colors">
                <option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option>
                <option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option>
                <option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option>
            </select>
        </div>
        <div>
            <label for="children" class="block text-[0.7rem] font-bold uppercase tracking-widest text-muted mb-2">Niños</label>
    <select id="children" name="children" class="w-full bg-gray-50 dark:bg-white/5 text-muted dark:text-gray-400 dark:[color-scheme:light] border border-gray-200 dark:border-white/10 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-secondary transition-colors">
                <option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option>
            </select>
        </div>
        <div>
            <label for="babies" class="block text-[0.7rem] font-bold uppercase tracking-widest text-muted mb-2">Bebés</label>
    <select id="babies" name="babies" class="w-full bg-gray-50 dark:bg-white/5 text-muted dark:text-gray-400 dark:[color-scheme:light] border border-gray-200 dark:border-white/10 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-secondary transition-colors">
                <option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option>
            </select>
        </div>
        <div>
            <label for="pets" class="block text-[0.7rem] font-bold uppercase tracking-widest text-muted mb-2">Mascotas</label>
    <select id="pets" name="pets" class="w-full bg-gray-50 dark:bg-white/5 text-muted dark:text-gray-400 dark:[color-scheme:light] border border-gray-200 dark:border-white/10 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-secondary transition-colors">
                <option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option>
            </select>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label for="email" class="block text-[0.7rem] font-bold uppercase tracking-widest text-muted mb-2">Email de contacto</label>
            <input type="email" id="email" name="email" placeholder="tu@email.com" required class="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-secondary transition-colors">
        </div>
        <div>
            <label for="phone" class="block text-[0.7rem] font-bold uppercase tracking-widest text-muted mb-2">Teléfono móvil (opcional)</label>
            <input type="tel" id="phone" name="phone" placeholder="+34 600 000 000" class="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-secondary transition-colors">
        </div>
    </div>

    <div>
        <label for="comments" class="block text-[0.7rem] font-bold uppercase tracking-widest text-muted mb-2">Comentarios / Peticiones especiales</label>
        <textarea id="comments" name="comments" rows="3" placeholder="Cuéntanos más sobre tu estancia..." class="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-secondary transition-colors resize-none"></textarea>
    </div>

    <div class="!mt-1">
        <p class="text-[0.67rem] text-muted/90 dark:text-gray-500 leading-tight mb-2">
            Al enviar este formulario, autorizas el tratamiento de los datos incluidos en él para gestionar tu solicitud y contacto asociado.
            Puedes consultar responsable, derechos y detalle legal en la
            <a href="legal.html#privacy" class="text-secondary underline">Política de privacidad</a>.
        </p>
        <label class="flex items-center gap-2.5 text-[0.67rem] font-normal leading-tight text-muted dark:text-gray-500">
            <input
                type="checkbox"
                id="privacyConsent"
                name="privacyConsent"
                value="accepted"
                required
                class="h-3.5 w-3.5 shrink-0 rounded border-gray-300 text-secondary focus:ring-secondary">
            <span>He leído y acepto la <a href="legal.html#privacy" class="text-secondary underline">Política de privacidad</a>.</span>
        </label>
        <p class="mt-4 text-[0.9rem] text-muted dark:text-gray-400 italic text-center leading-relaxed">
            Gracias por confiar en Zenit Bonmont. En breve te contactaré.
        </p>
    </div>
    <input type="hidden" name="privacyPolicyVersion" value="2026-02">
    <button id="bookingSubmit" type="submit" class="w-full bg-secondary text-white font-bold py-4 uppercase tracking-[3px] text-xs hover:bg-opacity-90 transition-all shadow-md disabled:opacity-60 disabled:cursor-not-allowed">
        Enviar Solicitud
    </button>
    <p id="bookingError" class="hidden text-sm text-red-600 dark:text-red-400 text-center"></p>
</form>
```
