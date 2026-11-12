# Guía para Agentes de IA: Identidad Visual y Recursos de Marca UdeA

> **Instrucción para el Agente:**  
> Si estás asistiendo en tareas de diseño, maquetación, desarrollo web, redacción o branding para la **Universidad de Antioquia (UdeA)**, consulta las directrices de este archivo y los recursos asociados en el repositorio.

---

## 1. Contexto Rápido
- **Institución**: Universidad de Antioquia (Medellín, Colombia · Fundada en 1803).
- **Manual de Marca Oficial**: [`MANUAL_IDENTIDAD_UDEA.md`](MANUAL_IDENTIDAD_UDEA.md).
- **Especificaciones JSON de Tokens de Color**: [`tokens.json`](tokens.json).
- **Herramienta Interactiva en Vivo**: [Paleta UdeA & Estudio de Marca](https://colors-svg.github.io/Paleta-Udea/).

---

## 2. Códigos Cromáticos Rápidos
- **Verde Principal (Pantone 349 C)**: `#026937` (Fondo institucional, títulos principales, escudo).
- **Verde Subtítulos/Dependencias (Pantone 7740 C)**: `#35944B` (Exclusivo para nombres de Facultades/Sedes debajo del logo).
- **Púrpura Acento (Pantone 7650 C)**: `#70205B`.
- **Ámbar Acento (Pantone 137 C)**: `#F9A12C` o `#FFA300`.
- **Negro de Texto / Neutro Oscuro**: `#0F172A`.
- **Fondo de Página / Neutro Claro**: `#F8FAFC`.

---

## 3. Jerarquía Tipográfica
1. **Times New Roman**: Tipografía institucional obligatoria para el logotipo `"UNIVERSIDAD DE ANTIOQUIA"`, resoluciones, diplomas y nombres de facultades en membretes.
2. **Roboto / Inter / DIN**: Tipografías recomendadas para párrafos, interfaces web, sistemas digitales y subtítulos.
3. **Roboto Slab Bold**: Tipografía exclusiva para la marca simplificada `"UdeA"`.

---

## 4. Rutas de Recursos Vectoriales
- **SVG Oficial con Horquillado de 1922 (Ultra Alta Fidelidad)**:
  `assets/logo_universidad_de_antioquia.svg`
  (color por defecto `#026937`; sobrescribir con la variable CSS `--udea-color`).
- **Logotipo tipográfico (Times New Roman Bold, texto convertido a trazos)**:
  `assets/logo-udea-logotipo.svg` (variantes `-blanco`, `-negro`).
- **Marca simplificada UdeA (Roboto Slab Bold, trazos)**:
  `assets/logo-udea-simplificado.svg` (variantes `-blanco`, `-negro`).
- **Diccionario de Coordenadas de Trazos para Renderizado Programático**:
  `assets/udea-paths.js` (`window.UDEA_PATHS['escudo-emblema-horquillado']`, etc.)
- **Manifiesto legible por máquinas** (colores, tipografías, geometría exacta de layouts y reglas):
  [`assets/brand-manifest.json`](assets/brand-manifest.json) · Índice rápido: [`llms.txt`](llms.txt).
  La página también expone esquema JSON-LD (`Organization`) en `index.html`.
- **Kit de un solo link para agentes**: sección `#kit-agentes` en la página
  (link `llms.txt` + brief copiable + tabla "qué archivo usar en cada caso").
- ⚠️ **Eliminados por no oficiales** (no usar aunque aparezcan en cachés):
  `assets/img/udea-simbolo-simplificado.svg`, `assets/img/udea-logo-horizontal.svg`,
  `assets/img/preview-board.png`. Ver `brand-manifest.json → deprecated`.

---

## 5. Reglas de Oro para Agentes
1. **Nunca deformar el escudo** ni alterar sus proporciones de aspecto.
2. **El nombre de las dependencias** (Facultades, Escuelas, Institutos) **solo** acompaña a la versión **horizontal** del logosímbolo, centrado en la parte inferior, en `Times New Roman Bold` y color verde `#35944B` (Pantone 7740 C). **Nunca** en la versión vertical y **nunca** en sans-serif (Inter/Roboto).
3. **Sobre fondos oscuros**, el logotipo/logosímbolo debe ir siempre en blanco puro (`#FFFFFF`).
4. **El escudo solo admite 3 colores**: `#026937` (fondos claros), `#FFFFFF` (fondos oscuros) y `#0F172A` (monotinta). Prohibidos otros colores, degradados y combinaciones.
5. **No inventar sub-marcas** ni alterar los elementos heráldicos internos (ancla, cinta Medellín, blandones).
