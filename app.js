/**
 * SISTEMA CROMÁTICO INSTITUCIONAL — UNIVERSIDAD DE ANTIOQUIA (UdeA)
 * Controlador Interactivo de Interfaz, Copiado y Tokens
 */

const PALETTE_DATA = {
  primary: [
    {
      code: "349 C",
      name: "Verde Bosque Institucional",
      role: "Color Institucional Principal · Sede Central & Oficial",
      hex: "#026937",
      rgb: "2 · 105 · 55",
      cmyk: "90 · 33 · 99 · 26",
      hsb: "150° · 98% · 41%",
      tints: { "100": "#026937", "75": "#418E69", "50": "#80B49B", "25": "#BFD9CD" },
      darkText: false,
      wcag: "AAA 8.4:1 (Blanco)"
    },
    {
      code: "7740 C",
      name: "Verde Follaje Vivo",
      role: "Sostenibilidad · Campañas, Biodiversidad y Naturaleza",
      hex: "#35944B",
      rgb: "53 · 148 · 75",
      cmyk: "80 · 19 · 94 · 4",
      hsb: "133° · 54% · 68%",
      tints: { "100": "#35944B", "75": "#67AE78", "50": "#9AC9A5", "25": "#CCE4D2" },
      darkText: false,
      wcag: "AA 4.6:1 (Blanco)"
    },
    {
      code: "361 C",
      name: "Verde Pradera Radiante",
      role: "Crecimiento · Innovación, Juventud y Proyección",
      hex: "#43B649",
      rgb: "67 · 182 · 73",
      cmyk: "73 · 0 · 100 · 0",
      hsb: "123° · 63% · 71%",
      tints: { "100": "#43B649", "75": "#72C876", "50": "#A1DBA4", "25": "#D0EDD1" },
      darkText: false,
      wcag: "AA 4.2:1 (Texto Grande)"
    },
    {
      code: "375 C",
      name: "Verde Lima Institucional",
      role: "Vitalidad · Acentos de Alto Impacto e Indicadores",
      hex: "#8DC63F",
      rgb: "141 · 198 · 63",
      cmyk: "50 · 0 · 100 · 0",
      hsb: "85° · 68% · 77%",
      tints: { "100": "#8DC63F", "75": "#AAD46F", "50": "#C6E29F", "25": "#E3F1CF" },
      darkText: true,
      wcag: "AAA 9.1:1 (Grafito)"
    },
    {
      code: "7465 C",
      name: "Turquesa Caribe / Menta",
      role: "Frescura · Tecnología, Salud y Recursos Hídricos",
      hex: "#3EBDAC",
      rgb: "62 · 189 · 172",
      cmyk: "68 · 0 · 41 · 0",
      hsb: "171° · 67% · 74%",
      tints: { "100": "#3EBDAC", "75": "#6ECEC0", "50": "#9EDDD5", "25": "#CFEEEA" },
      darkText: true,
      wcag: "AAA 8.3:1 (Grafito)"
    },
    {
      code: "334 C",
      name: "Verde Esmeralda Profundo",
      role: "Solidez · Distinción, Respaldo y Academia",
      hex: "#069A7E",
      rgb: "6 · 154 · 126",
      cmyk: "82 · 16 · 62 · 2",
      hsb: "168° · 96% · 60%",
      tints: { "100": "#069A7E", "75": "#44B39E", "50": "#82CCBE", "25": "#C1E6DF" },
      darkText: false,
      wcag: "AA 5.1:1 (Blanco)"
    },
    {
      code: "7718 C",
      name: "Verde Petróleo / Cerceta",
      role: "Elegancia · Publicaciones, Memorias y Postgrados",
      hex: "#0E7774",
      rgb: "14 · 119 · 116",
      cmyk: "85 · 31 · 51 · 18",
      hsb: "178° · 88% · 46%",
      tints: { "100": "#0E7774", "75": "#4A9997", "50": "#86BBBA", "25": "#C3DDDC" },
      darkText: false,
      wcag: "AA+ 6.8:1 (Blanco)"
    }
  ],
  secondary: [
    {
      code: "7650 C",
      name: "Púrpura Imperial / Ciruela",
      role: "Cultura · Patrimonio, Humanidades y Protocolo",
      hex: "#70205B",
      rgb: "112 · 32 · 91",
      cmyk: "52 · 97 · 29 · 27",
      hsb: "315° · 71% · 43%",
      tints: { "100": "#70205B", "75": "#945884", "50": "#B890AD", "25": "#DCC7D6" },
      darkText: false,
      wcag: "AAA 9.2:1 (Blanco)"
    },
    {
      code: "633 C",
      name: "Azul Cerúleo Institucional",
      role: "Comunicación · Servicios, Plataformas y Portales",
      hex: "#137598",
      rgb: "19 · 117 · 152",
      cmyk: "86 · 42 · 24 · 8",
      hsb: "195° · 87% · 59%",
      tints: { "100": "#137598", "75": "#4E97B2", "50": "#89BACC", "25": "#C4DDE5" },
      darkText: false,
      wcag: "AA 5.6:1 (Blanco)"
    },
    {
      code: "032 C",
      name: "Rojo Señal / Coral Vivo",
      role: "Alertas · Eventos Críticos, Novedades y Urgencia",
      hex: "#EF434D",
      rgb: "239 · 67 · 77",
      cmyk: "0 · 89 · 68 · 0",
      hsb: "356° · 72% · 94%",
      tints: { "100": "#EF434D", "75": "#F37279", "50": "#F7A1A6", "25": "#FBD0D2" },
      darkText: false,
      wcag: "AA 4.5:1 (Blanco)"
    },
    {
      code: "137 C",
      name: "Ámbar Cálido / Mandarina",
      role: "Energía · Convocatorias, Emprendimiento y Juventud",
      hex: "#F9A12C",
      rgb: "249 · 161 · 44",
      cmyk: "0 · 43 · 93 · 0",
      hsb: "34° · 82% · 97%",
      tints: { "100": "#F9A12C", "75": "#FAB860", "50": "#FCD095", "25": "#FEE7CA" },
      darkText: true,
      wcag: "AAA 9.4:1 (Grafito)"
    },
    {
      code: "100-7 C",
      name: "Violeta Real / Índigo",
      role: "Ciencia · Investigación Avanzada, TIC y Vanguardia",
      hex: "#532D87",
      rgb: "83 · 45 · 135",
      cmyk: "84 · 95 · 0 · 0",
      hsb: "264° · 66% · 53%",
      tints: { "100": "#532D87", "75": "#7E61A5", "50": "#A996C3", "25": "#D4CAE1" },
      darkText: false,
      wcag: "AAA 8.8:1 (Blanco)"
    }
  ]
};

// Estado reactivo
let currentFilter = 'all';
let currentSearch = '';
let activeFormat = 'hex';
let selectedSandboxColor = PALETTE_DATA.primary[0];

// Inicialización en DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  renderPalettes();
  setupSearch();
  setupFilters();
  setupQuickFormat();
  setupSandbox();
  setupExporter();
});

// Renderizar tarjetas de color
function renderPalettes() {
  const primaryContainer = document.getElementById('primary-list');
  const secondaryContainer = document.getElementById('secondary-list');
  const primarySection = document.getElementById('section-primary');
  const secondarySection = document.getElementById('section-secondary');

  const filteredPrimary = filterColors(PALETTE_DATA.primary);
  const filteredSecondary = filterColors(PALETTE_DATA.secondary);

  if (primaryContainer) {
    primaryContainer.innerHTML = filteredPrimary.map(col => createCardHTML(col)).join('');
  }
  if (secondaryContainer) {
    secondaryContainer.innerHTML = filteredSecondary.map(col => createCardHTML(col)).join('');
  }

  // Visibilidad de secciones según filtro
  if (primarySection) {
    primarySection.style.display = (currentFilter === 'secondary' || filteredPrimary.length === 0) ? 'none' : 'flex';
  }
  if (secondarySection) {
    secondarySection.style.display = (currentFilter === 'primary' || filteredSecondary.length === 0) ? 'none' : 'flex';
  }

  attachCardEvents();
}

// Filtro por búsqueda y categoría
function filterColors(list) {
  if (currentSearch.trim() === '') return list;
  const q = currentSearch.toLowerCase().trim();
  return list.filter(col => 
    col.code.toLowerCase().includes(q) ||
    col.name.toLowerCase().includes(q) ||
    col.hex.toLowerCase().includes(q) ||
    col.role.toLowerCase().includes(q)
  );
}

// Generar HTML de tarjeta idéntica a FigCraft
function createCardHTML(col) {
  const textColor = col.darkText ? '#0F172A' : '#FFFFFF';
  const badgeBg = col.darkText ? 'rgba(15, 23, 42, 0.12)' : 'rgba(255, 255, 255, 0.22)';

  return `
    <div class="color-card" data-code="${col.code}">
      <div class="card-swatches">
        <!-- 100% Solid -->
        <div class="swatch-solid" style="background-color: ${col.hex}; color: ${textColor};" data-copy="${col.hex}" title="Copiar ${col.hex}">
          <div class="pantone-badge" style="background-color: ${badgeBg}; color: ${textColor};">PANTONE®</div>
          <div class="pantone-code">${col.code}</div>
          <div class="scale-tag">100% SÓLIDO</div>
        </div>

        <!-- Tint 75% -->
        <div class="swatch-tint" style="background-color: ${col.tints['75']};" data-copy="${col.tints['75']}" title="Copiar tinte 75%: ${col.tints['75']}">
          <span class="tint-label" style="color: ${textColor};">75%</span>
        </div>

        <!-- Tint 50% -->
        <div class="swatch-tint" style="background-color: ${col.tints['50']};" data-copy="${col.tints['50']}" title="Copiar tinte 50%: ${col.tints['50']}">
          <span class="tint-label" style="color: #0F172A;">50%</span>
        </div>

        <!-- Tint 25% -->
        <div class="swatch-tint" style="background-color: ${col.tints['25']};" data-copy="${col.tints['25']}" title="Copiar tinte 25%: ${col.tints['25']}">
          <span class="tint-label" style="color: #0F172A;">25%</span>
        </div>
      </div>

      <div class="card-content">
        <div class="card-heading">
          <div class="card-title">PANTONE® ${col.code} — ${col.name}</div>
          <div class="card-role">${col.role}</div>
        </div>

        <div class="metrics-row">
          <div class="metric-pill pill-hex" data-copy="${col.hex}" title="Copiar HEX">
            <span class="metric-label">HEX</span>
            <span class="metric-value">${col.hex}</span>
          </div>

          <div class="metric-pill" data-copy="${col.rgb}" title="Copiar RGB">
            <span class="metric-label">RGB</span>
            <span class="metric-value">${col.rgb}</span>
          </div>

          <div class="metric-pill" data-copy="${col.cmyk}" title="Copiar CMYK">
            <span class="metric-label">CMYK</span>
            <span class="metric-value">${col.cmyk}</span>
          </div>

          <div class="metric-pill" data-copy="${col.hsb}" title="Copiar HSB">
            <span class="metric-label">HSB</span>
            <span class="metric-value">${col.hsb}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Eventos de clic para copiar
function attachCardEvents() {
  document.querySelectorAll('[data-copy]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const val = el.getAttribute('data-copy');
      copyToClipboard(val);
    });
  });
}

// Copiar al portapapeles con micro-animación y toast
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Copiado al portapapeles: ${text}`);
  }).catch(() => {
    // Fallback tradicional
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    showToast(`Copiado: ${text}`);
  });
}

// Toast de notificación
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toast-text');
  if (!toast || !toastText) return;

  toastText.textContent = message;
  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}

// Configurar buscador
function setupSearch() {
  const searchInput = document.getElementById('search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    renderPalettes();
  });
}

// Configurar pestañas de filtrado
function setupFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter');
      renderPalettes();
    });
  });
}

// Selector de formato rápido
function setupQuickFormat() {
  const pills = document.querySelectorAll('.format-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeFormat = pill.getAttribute('data-format');
      showToast(`Formato de copiado predeterminado: ${activeFormat.toUpperCase()}`);
    });
  });
}

// Configuración del Sandbox de Componentes UI
function setupSandbox() {
  const dotsContainer = document.getElementById('sandbox-dots');
  if (!dotsContainer) return;

  const allColors = [...PALETTE_DATA.primary, ...PALETTE_DATA.secondary];
  dotsContainer.innerHTML = allColors.map((col, idx) => `
    <div class="color-dot ${idx === 0 ? 'active' : ''}" 
         style="background-color: ${col.hex};" 
         data-hex="${col.hex}" 
         title="Pantone ${col.code} (${col.name})"></div>
  `).join('');

  dotsContainer.querySelectorAll('.color-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      dotsContainer.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      const hex = dot.getAttribute('data-hex');
      const found = allColors.find(c => c.hex.toLowerCase() === hex.toLowerCase());
      if (found) {
        selectedSandboxColor = found;
        updateSandboxUI();
      }
    });
  });

  updateSandboxUI();
}

// Actualizar componentes del sandbox
function updateSandboxUI() {
  const col = selectedSandboxColor;
  const textColor = col.darkText ? '#0F172A' : '#FFFFFF';

  const btnPrimary = document.getElementById('demo-btn-primary');
  const btnSecondary = document.getElementById('demo-btn-secondary');
  const alertBox = document.getElementById('demo-alert');
  const badgePill = document.getElementById('demo-badge');
  const kpiValue = document.getElementById('demo-kpi-value');
  const sandboxTitle = document.getElementById('sandbox-selected-name');

  if (btnPrimary) {
    btnPrimary.style.backgroundColor = col.hex;
    btnPrimary.style.color = textColor;
    btnPrimary.textContent = `Botón Oficial · ${col.code}`;
  }

  if (btnSecondary) {
    btnSecondary.style.borderColor = col.hex;
    btnSecondary.style.color = col.hex;
    btnSecondary.textContent = `Acción Secundaria · ${col.code}`;
  }

  if (alertBox) {
    alertBox.style.borderLeftColor = col.hex;
    alertBox.style.backgroundColor = col.tints['25'] + '50';
  }

  if (badgePill) {
    badgePill.style.backgroundColor = col.hex;
    badgePill.style.color = textColor;
    badgePill.textContent = `PANTONE ${col.code}`;
  }

  if (kpiValue) {
    kpiValue.style.color = col.hex;
  }

  if (sandboxTitle) {
    sandboxTitle.textContent = `${col.code} — ${col.name} (${col.hex})`;
  }
}

// Configuración del exportador de código
function setupExporter() {
  const tabs = document.querySelectorAll('.export-tab-btn');
  const codeBox = document.getElementById('export-code');
  const copyBtn = document.getElementById('copy-export-code');
  if (!tabs.length || !codeBox) return;

  const allColors = [...PALETTE_DATA.primary, ...PALETTE_DATA.secondary];

  const codeGenerators = {
    css: () => {
      let out = `/* Tokens Oficiales — Universidad de Antioquia (UdeA) */\n:root {\n`;
      allColors.forEach(c => {
        const slug = c.code.toLowerCase().replace(/[^a-z0-9]/g, '');
        out += `  --udea-p${slug}: ${c.hex}; /* ${c.name} */\n`;
      });
      out += `}`;
      return out;
    },
    tailwind: () => {
      let out = `// tailwind.config.js - Paleta Institucional UdeA\nmodule.exports = {\n  theme: {\n    extend: {\n      colors: {\n        udea: {\n`;
      allColors.forEach(c => {
        const slug = c.code.toLowerCase().replace(/[^a-z0-9]/g, '');
        out += `          'p${slug}': {\n            DEFAULT: '${c.hex}',\n            75: '${c.tints['75']}',\n            50: '${c.tints['50']}',\n            25: '${c.tints['25']}',\n          },\n`;
      });
      out += `        }\n      }\n    }\n  }\n};`;
      return out;
    },
    scss: () => {
      let out = `// Variables SCSS - Paleta UdeA\n`;
      allColors.forEach(c => {
        const slug = c.code.toLowerCase().replace(/[^a-z0-9]/g, '');
        out += `$udea-p${slug}: ${c.hex}; // ${c.name}\n`;
      });
      return out;
    },
    json: () => {
      const obj = {
        name: "Paleta Institucional UdeA",
        colors: allColors.map(c => ({
          pantone: c.code,
          name: c.name,
          hex: c.hex,
          rgb: c.rgb,
          cmyk: c.cmyk,
          hsb: c.hsb,
          tints: c.tints
        }))
      };
      return JSON.stringify(obj, null, 2);
    }
  };

  function updateCode(format) {
    if (codeGenerators[format]) {
      codeBox.textContent = codeGenerators[format]();
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const format = tab.getAttribute('data-format');
      updateCode(format);
    });
  });

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      copyToClipboard(codeBox.textContent);
    });
  }

  // Cargar CSS por defecto
  updateCode('css');
}
