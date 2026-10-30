# Sumador de tickets de carbón

App web de un solo archivo (`index.html`) que lee fotos de tickets de báscula (planta Maceo) con OCR en el navegador (Tesseract.js) y suma las toneladas netas.

- Separa por tipo: **Tradicional** (Nivaltrade, DS Group) y **Antioquia** (La Margarita).
- Verifica que entrada − salida = total; si no cuadra, marca el ticket para revisión.
- Los datos se guardan solo en el navegador (localStorage).
- Necesita internet la primera vez para descargar el lector OCR.

## Publicar con GitHub Pages
1. Sube `index.html` y este README a un repositorio.
2. Settings → Pages → Source: *Deploy from a branch* → Branch: `main` / `(root)` → Save.
3. Abre `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

## Compartir desde WhatsApp (Android)
1. Abre el enlace de la app en Chrome y espera a que cargue.
2. Menú ⋮ → **Instalar app** (o **Añadir a la pantalla de inicio**).
3. En WhatsApp abre el ticket → **Compartir** → **Tickets de carbón**. La app se abre y suma sola.
