# 🎨 Paleta Institucional — Universidad de Antioquia (UdeA)

[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-En_L%C3%ADnea-026937?style=for-the-badge&logo=github)](https://colors-svg.github.io/Paleta-Udea/)
[![FigCraft Ready](https://img.shields.io/badge/FigCraft-Native_.figcraft-00C49F?style=for-the-badge)](Manual_Marca_Paleta_Institucional.figcraft)
[![WCAG 2.1](https://img.shields.io/badge/WCAG_2.1-AAA_%2F_AA-35944B?style=for-the-badge)](https://www.w3.org/WAI/WCAG21/quickref/)
[![Pantone Matching System](https://img.shields.io/badge/Pantone-Formula_Guide_Coated-70205B?style=for-the-badge)](https://www.pantone.com)

> **Manual de Especificación de Color y Tokens Oficiales de Marca**  
> Implementación web interactiva y archivo nativo editable en **FigCraft** para la **Universidad de Antioquia (UdeA)**.  
> 🔗 **Sitio Web Oficial:** [https://colors-svg.github.io/Paleta-Udea/](https://colors-svg.github.io/Paleta-Udea/)

---

## 🏛️ Sistema Cromático

El sistema se compone de **12 tonalidades oficiales** divididas en dos grupos funcionales, cada una con su valor sólido al 100% y escala de degradación tonal al **75%, 50% y 25%**:

### 1. Gama Principal Institucional (7 Tonos Verdes & Biodiversidad)
| Pantone | Denominación Oficial | HEX | RGB | CMYK | HSB | WCAG |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **349 C** | Verde Bosque Institucional (Sede Central) | `#026937` | `2, 105, 55` | `90, 33, 99, 26` | `150°, 98%, 41%` | AAA 8.4:1 |
| **7740 C** | Verde Follaje Vivo | `#35944B` | `53, 148, 75` | `80, 19, 94, 4` | `133°, 54%, 68%` | AA 4.6:1 |
| **361 C** | Verde Pradera Radiante | `#43B649` | `67, 182, 73` | `73, 0, 100, 0` | `123°, 63%, 71%` | AA 4.2:1 |
| **375 C** | Verde Lima Institucional | `#8DC63F` | `141, 198, 63` | `50, 0, 100, 0` | `85°, 68%, 77%` | AAA 9.1:1 (Grafito) |
| **7465 C** | Turquesa Caribe / Menta | `#3EBDAC` | `62, 189, 172` | `68, 0, 41, 0` | `171°, 67%, 74%` | AAA 8.3:1 (Grafito) |
| **334 C** | Verde Esmeralda Profundo | `#069A7E` | `6, 154, 126` | `82, 16, 62, 2` | `168°, 96%, 60%` | AA 5.1:1 |
| **7718 C** | Verde Petróleo / Cerceta | `#0E7774` | `14, 119, 116` | `85, 31, 51, 18` | `178°, 88%, 46%` | AA+ 6.8:1 |

### 2. Gama Secundaria & Acentos (5 Tonos Dinámicos)
| Pantone | Denominación Oficial / Rol | HEX | RGB | CMYK | HSB | WCAG |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **7650 C** | Púrpura Imperial / Ciruela (Cultura & Protocolo) | `#70205B` | `112, 32, 91` | `52, 97, 29, 27` | `315°, 71%, 43%` | AAA 9.2:1 |
| **633 C** | Azul Cerúleo Institucional (Servicios & Plataformas) | `#137598` | `19, 117, 152` | `86, 42, 24, 8` | `195°, 87%, 59%` | AA 5.6:1 |
| **032 C** | Rojo Señal / Coral Vivo (Alertas & Novedades) | `#EF434D` | `239, 67, 77` | `0, 89, 68, 0` | `356°, 72%, 94%` | AA 4.5:1 |
| **137 C** | Ámbar Cálido / Mandarina (Convocatorias & Juventud) | `#F9A12C` | `249, 161, 44` | `0, 43, 93, 0` | `34°, 82%, 97%` | AAA 9.4:1 (Grafito) |
| **100-7 C** | Violeta Real / Índigo (Ciencia & Vanguardia TIC) | `#532D87` | `83, 45, 135` | `84, 95, 0, 0` | `264°, 66%, 53%` | AAA 8.8:1 |

---

## 💻 Uso en Desarrollo Frontend

### 1. Variables CSS (`:root`)
```css
:root {
  --udea-p349: #026937;
  --udea-p7740: #35944B;
  --udea-p361: #43B649;
  --udea-p375: #8DC63F;
  --udea-p7465: #3EBDAC;
  --udea-p334: #069A7E;
  --udea-p7718: #0E7774;
  --udea-p7650: #70205B;
  --udea-p633: #137598;
  --udea-p032: #EF434D;
  --udea-p137: #F9A12C;
  --udea-p1007: #532D87;
}
```

### 2. Configuración en Tailwind CSS
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        udea: {
          bosque: '#026937',
          follaje: '#35944B',
          pradera: '#43B649',
          lima: '#8DC63F',
          menta: '#3EBDAC',
          esmeralda: '#069A7E',
          petroleo: '#0E7774',
          purpura: '#70205B',
          azul: '#137598',
          coral: '#EF434D',
          amber: '#F9A12C',
          violeta: '#532D87',
        }
      }
    }
  }
};
```

---

## 🏛️ Estudio Vectorial de Marca y Recursos de Identidad

Este repositorio incluye las herramientas oficiales y trazados maestros del escudo de la Universidad de Antioquia (grabado original de 1922 de Horacio Rodríguez):

1. **Estudio & Personalizador Web de Marca**:  
   Permite generar adaptaciones oficiales del logotipo en formato horizontal, vertical o sello, seleccionar facultades o dependencias y exportar en **SVG puro** o **PNG HD**.  
   👉 Accede desde la web en: `https://colors-svg.github.io/Paleta-Udea/#logo-studio`
2. **Manual de Identidad Institucional para Agentes y Desarrolladores**:  
   Consulta [`MANUAL_IDENTIDAD_UDEA.md`](MANUAL_IDENTIDAD_UDEA.md) para la guía completa de normas, tipografías (Times New Roman, DIN, Roboto, Playfair Display) y jerarquías oficiales.
3. **Guía Rápida para Agentes de IA**:  
   Consulta [`AGENTS.md`](AGENTS.md) para un resumen directo de tokens, reglas de oro y endpoints vectoriales.
   Índice rápido para herramientas: [`llms.txt`](llms.txt) · Manifiesto máquina:
   [`assets/brand-manifest.json`](assets/brand-manifest.json) (colores, tipografías, geometría de layouts y reglas).
4. **SVG Maestro Oficial**:  
   Localizado en [`assets/logo_universidad_de_antioquia.svg`](assets/logo_universidad_de_antioquia.svg)
   (color por defecto `#026937`, sobrescribible con `--udea-color`; IDs `escudo-emblema-horquillado`,
   `texto-universidad-de-antioquia`, `texto-ano-1803`). Mismos trazos como JS en
   [`assets/udea-paths.js`](assets/udea-paths.js) (`window.UDEA_PATHS`).
5. **Logotipo y simplificado (generados en VectorCraft, texto a trazos)**:
   `assets/logo-udea-logotipo.svg` y `assets/logo-udea-simplificado.svg`
   (variantes `-blanco` y `-negro` para negativo/monotinta).
6. **Kit para agentes (solo en el repositorio, no en la página)**:
   `llms.txt` (link único + brief) y `assets/brand-manifest.json`
   (tabla canónica, colores, geometría y reglas).

---

## 🎨 Archivo Editable de FigCraft

El archivo fuente vectorial completo se incluye directamente en la raíz de este repositorio:
* [`Manual_Marca_Paleta_Institucional.figcraft`](Manual_Marca_Paleta_Institucional.figcraft)

Para abrirlo o editarlo:
1. Abre **FigCraft** en tu computador.
2. Ve a `File` ▸ `Open` y selecciona `Manual_Marca_Paleta_Institucional.figcraft`.
3. Contiene la distribución oficial, auto-layout, frames y tarjetas métricas estructuradas.

---

## 🚀 Despliegue en GitHub Pages

Este repositorio está preparado para funcionar sin proceso de construcción (*Zero-Build*):
1. En GitHub, ve a **Settings** ▸ **Pages**.
2. Bajo **Branch**, selecciona `main` (o `master`) y carpeta `/ (root)`.
3. Haz clic en **Save**. En un minuto estará publicado en:  
   `https://colors-svg.github.io/Paleta-Udea/`

---

## 📄 Créditos y Licencia
* **Institución:** Universidad de Antioquia (UdeA)
* **Diseño y Estructuración:** Manual de Marca Oficial UdeA & FigCraft Brand System
* **Código y Repositorio:** [Colors-svg/Paleta-Udea](https://github.com/Colors-svg/Paleta-Udea)
