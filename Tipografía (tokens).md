Tipografía (tokens) ✨
Font stacks: sans = Poppins, serif = Crimson Text, bodoni = Libre Bodoni
Colors: primary #1a1a1a, secondary #c9a866, text #2c2c2c, muted #666666, hero-text #f8f8f7
Clases canónicas (copiar/pegar) 🔧
Header

Wrapper: class="sticky top-0 z-50 bg-white/60 backdrop-blur-md border-b border-[rgba(0,0,0,0.05)] h-[56px] md:h-[64px]"
Inner container: class="max-w-[1400px] mx-auto px-6 md:px-6 flex items-center justify-between h-full"
Nav link (desktop)

class="text-[0.9rem] uppercase tracking-[1px] leading-[1.2] font-medium text-[#2c2c2c] hover:text-[#c9a866] transition-colors duration-200"
Active nav

class="text-[#c9a866] font-semibold border-b-2 border-[#c9a866]/20 pb-1"
Menu button (hamburger spans)

class="block w-[25px] h-[3px] bg-[#1a1a1a]"
Theme toggle

id="themeToggle" aria-pressed="false"
Hero (video + layout)

Section: class="relative h-screen min-h-[600px] overflow-hidden flex items-center justify-center"
Video: class="absolute inset-0 w-full h-full object-cover" poster="images/hero-poster.jpg"
Overlay: class="absolute inset-0 bg-black/40 z-20"
Content wrapper: class="relative z-30 text-center text-white py-32 px-4 flex flex-col justify-between h-full"
H1 (hero)

class="font-bodoni italic font-[400] text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] tracking-[0.5px] leading-[1.1] text-[#f8f8f7] shadow-[0_2px_12px_rgba(0,0,0,0.3)]"
CTA (hero)

class="inline-block uppercase tracking-[1.2px] text-[0.85rem] px-5 py-3 border border-white/50 rounded-md hover:bg-white hover:text-[#1a1a1a] transition-colors duration-200"
Padding exacta: padding: 12px 20px (ya reflejado en px-5 py-3)
Borde: 1px solid (Tailwind border)
Espaciados entre H1 / CTA / Tagline

H1 → CTA: mt-4 md:mt-5 lg:mt-6 (16 / 20 / 24 px)
CTA → Tagline: mt-6 md:mt-7 lg:mt-8 (24 / 28 / 32 px)
Tagline

class="font-bodoni uppercase tracking-[4px] text-[1.1rem] md:text-[1.3rem] text-[#f8f8f7] shadow-[0_1px_8px_rgba(0,0,0,0.25)]"
Villa Stats

Grid: class="grid grid-cols-2 md:grid-cols-5 gap-6"
Number: class="text-[2.5rem] font-semibold text-[#c9a866] leading-none"
Label: class="text-[0.75rem] uppercase tracking-[1px] text-[#666666]"
Airbnb Snapshot

Container: class="py-8 max-w-[1200px] mx-auto px-4"
Score number: class="text-[2.5rem] font-semibold text-[#c9a866]"
Category number: class="text-[1.25rem] font-semibold text-[#333]"
Category label: class="text-sm text-[#666666]"
Comments toggle / panel

Button: class="comments-toggle inline-flex items-center gap-2 px-3 py-2 border rounded-md"
Panel collapsed: class="max-h-0 overflow-hidden transition-[max-height] duration-300"
Panel expanded: add max-h-[1000px]
Amenity item

Row: class="flex items-start gap-3"
Icon: class="w-5 h-5 flex-none text-[#1a1a1a]"
Text: class="text-sm text-[#333] leading-7"
Interior Play Button

Wrapper: class="absolute inset-0 flex items-center justify-center"
Button: class="bg-black/90 p-3 rounded-full w-12 h-12 md:w-14 md:h-14"
Modal dialog

Backdrop: class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
Content: class="max-w-[1100px] w-full bg-black rounded overflow-hidden"
Video inside modal: class="w-full h-auto" preload="none" controls
Card Image (previews)

class="w-full aspect-[4/3] object-cover rounded"
Host image

class="w-36 h-36 rounded-full object-cover"
Closing section

Section: class="relative h-[480px] md:h-[560px] flex items-center justify-center"
CTA big: class="px-8 py-4 rounded-md bg-[#1a1a1a] text-white"
Footer & Cookie banner

Footer: class="grid grid-cols-1 md:grid-cols-4 gap-6 bg-[#1a1a1a] text-white py-8 px-6"
Cookie banner: class="fixed bottom-0 inset-x-0 bg-white/95 text-[#1a1a1a] px-4 py-3 shadow-lg z-50 flex flex-col md:flex-row items-center justify-between gap-3"
Filtros / contraste (Hero)
Overlay required: bg-black/40 (40% black)
Optional video filter if necessary: add class="filter brightness-[0.9] contrast-[1.05]" to the <video> (use solo si overlay no basta)
Nota final sobre Tailwind config
Añade en tailwind.config la extensión de fontFamily y colors (font: 'Poppins','Crimson Text','Libre Bodoni'; colors: primary #1a1a1a, secondary #c9a866, muted #666666, hero-text #f8f8f7).
Habilita las utilidades arbitrarias que usamos (text-[3.5rem], tracking-[0.5px], etc.).