# Collecte simulador (refactor)

Esta versión reorganiza los selectores que tienen filtro en un componente compartido:
`src/components/SearchableSelect.astro`.

## Cómo usarlo en tu proyecto
1. Haz una copia de seguridad de tus archivos actuales.
2. Copia `src/pages/index.astro`, `src/styles/global.css` y `src/components/SearchableSelect.astro` a las mismas rutas de tu proyecto.
3. Conserva `package.json`, `astro.config.mjs` y `tsconfig.json` solo si necesitas comparar la configuración; no hace falta reemplazarlos si tu proyecto ya los tiene.
4. Ejecuta `npm run dev`.

Los selectores con filtro incluyen Tipo de Persona, Tipo, Dominio, Departamento, Ciudad, Regional, Tipo de red y Tipo de campaña. Ciudad se habilita con opciones de capitales cuando se elige un departamento. Factura web permanece como selección sencilla Sí/No. Estrato es un campo numérico limitado de 1 a 6.

Los datos y la interacción siguen siendo simulados; no se conectan a sistemas empresariales.
