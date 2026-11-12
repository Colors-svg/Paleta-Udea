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
  setupTypeLab();
  initLogoStudio();
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
  const fileLabel = document.getElementById('export-filename');
  const statsLabel = document.getElementById('export-stats');
  if (!tabs.length || !codeBox) return;

  const allColors = [...PALETTE_DATA.primary, ...PALETTE_DATA.secondary];

  const fileNames = {
    css: 'udea-tokens.css',
    tailwind: 'tailwind.config.js',
    scss: '_udea-tokens.scss',
    json: 'udea-tokens.json'
  };

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
      const text = codeGenerators[format]();
      codeBox.textContent = text;
      if (fileLabel) fileLabel.textContent = fileNames[format] || text;
      if (statsLabel) {
        const lines = text.split('\n').length;
        statsLabel.textContent = `${lines} líneas · ${text.length} caracteres`;
      }
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
    const label = copyBtn.querySelector('span');
    copyBtn.addEventListener('click', () => {
      copyToClipboard(codeBox.textContent);
      copyBtn.classList.add('copied');
      if (label) label.textContent = '¡Copiado!';
      setTimeout(() => {
        copyBtn.classList.remove('copied');
        if (label) label.textContent = 'Copiar';
      }, 1600);
    });
  }

  // Cargar CSS por defecto
  updateCode('css');
}

/* ==========================================================================
   MÓDULO: LABORATORIO TIPOGRÁFICO
   ========================================================================== */

function setupTypeLab() {
  const family = document.getElementById('typelab-family');
  const weight = document.getElementById('typelab-weight');
  const size = document.getElementById('typelab-size');
  const leading = document.getElementById('typelab-leading');
  const text = document.getElementById('typelab-text');
  const preview = document.getElementById('typelab-preview');
  const readout = document.getElementById('typelab-readout');
  const sizeVal = document.getElementById('typelab-size-val');
  const leadingVal = document.getElementById('typelab-leading-val');
  if (!family || !preview) return;

  const WEIGHT_NAMES = { '400-normal': 'Regular', '400-italic': 'Italic', '700-normal': 'Bold', '700-italic': 'Bold Italic' };

  function render() {
    const [w, st] = (weight.value || '400-normal').split('-');
    const px = parseInt(size.value, 10) || 48;
    const lh = (parseInt(leading.value, 10) || 120) / 100;
    preview.style.fontFamily = family.value;
    preview.style.fontWeight = w;
    preview.style.fontStyle = st;
    preview.style.fontSize = px + 'px';
    preview.style.lineHeight = String(lh);
    preview.textContent = (text.value || '').trim() || 'Universidad de Antioquia';
    const famShort = family.options[family.selectedIndex].textContent;
    const label = `${px}px · ${WEIGHT_NAMES[weight.value] || ''} · ${lh} · ${famShort}`;
    if (readout) readout.textContent = label;
    if (sizeVal) sizeVal.textContent = px + 'px';
    if (leadingVal) leadingVal.textContent = String(lh);
  }

  [family, weight, size, leading].forEach(el => el && el.addEventListener('input', render));
  if (text) text.addEventListener('input', render);
  render();
}

/* ==========================================================================
   MÓDULO: ESTUDIO VECTORIAL Y PERSONALIZADOR DE MARCA UDEA
   ========================================================================== */

function initLogoStudio() {
  const container = document.getElementById('studio-svg-container');
  if (!container || !window.UDEA_PATHS) return;

  // Estado del Estudio
  const studioState = {
    layout: 'horizontal', // 'horizontal' | 'vertical' | 'shield'
    unitText: 'Facultad de Ingeniería',
    logoColor: '#026937',
    bgColor: 'transparent',
    zoom: 1
  };

  // Referencias a elementos UI
  const layoutButtons = document.querySelectorAll('#studio-layout-control .studio-seg-btn');
  const unitSelect = document.getElementById('studio-unit-select');
  const customWrapper = document.getElementById('studio-custom-wrapper');
  const customInput = document.getElementById('studio-custom-text');
  const subtextGroup = document.getElementById('studio-subtext-group');
  const paletteChipsContainer = document.getElementById('studio-logo-colors');
  const recoChipsContainer = document.getElementById('studio-reco-colors');
  const customPicker = document.getElementById('studio-custom-picker');
  const customHex = document.getElementById('studio-custom-hex');
  const customApply = document.getElementById('studio-custom-apply');
  const customFlag = document.getElementById('studio-custom-flag');
  const bgChips = document.querySelectorAll('.studio-bg-chip');
  const currentColorHex = document.getElementById('studio-current-color-hex');
  const currentBgHex = document.getElementById('studio-current-bg-hex');
  const artboard = document.getElementById('studio-artboard');
  const dimensionsLabel = document.getElementById('studio-dimensions-label');
  const zoomLevelLabel = document.getElementById('studio-zoom-level');

  // Colores permitidos por el Manual de Identidad §4 (Reglas de Aplicación del Color):
  // el escudo SOLO puede ir en verde institucional, blanco (negativo) o negro (monotinta).
  const studioColors = [
    { name: 'Pantone 349 C (Verde Institucional · uso normal)', hex: '#026937' },
    { name: 'Blanco Puro (negativo sobre fondos oscuros)', hex: '#FFFFFF' },
    { name: 'Negro Grafito (monotinta / escala de grises)', hex: '#0F172A' }
  ];

  // Colores normativos del escudo (Manual §4). Todo lo demás = experimental.
  const NORMATIVE_HEX = ['#026937', '#FFFFFF', '#0F172A'];

  function isNormative(hex) {
    return NORMATIVE_HEX.includes(String(hex || '').toUpperCase());
  }

  function normalizeHex(raw) {
    let h = String(raw || '').trim();
    if (!h.startsWith('#')) h = '#' + h;
    const m = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(h);
    if (!m) return null;
    if (m[1].length === 3) h = '#' + m[1].split('').map(c => c + c).join('');
    return h.toUpperCase();
  }

  function markActiveChip(container, chip) {
    document.querySelectorAll('.studio-color-chip').forEach(c => c.classList.remove('active'));
    if (chip) chip.classList.add('active');
  }

  function applyLogoColor(hex, chip) {
    studioState.logoColor = hex;
    if (currentColorHex) currentColorHex.textContent = hex;
    if (customPicker) customPicker.value = hex;
    if (customHex) customHex.value = hex;
    markActiveChip(null, chip);
    updateNormFlag(hex);
    renderStudioSVG();
  }

  function updateNormFlag(hex) {
    if (!customFlag) return;
    const ok = isNormative(hex);
    customFlag.textContent = ok ? 'Normativo' : 'Experimental';
    customFlag.classList.toggle('is-experimental', !ok);
  }

  if (paletteChipsContainer) {
    paletteChipsContainer.innerHTML = '';
    studioColors.forEach((col, idx) => {
      const chip = document.createElement('button');
      chip.className = 'studio-color-chip' + (idx === 0 ? ' active' : '');
      chip.style.backgroundColor = col.hex;
      if (col.hex === '#FFFFFF') chip.style.border = '1px solid #CBD5E1';
      chip.title = `${col.name} (${col.hex})`;
      chip.setAttribute('data-hex', col.hex);

      chip.addEventListener('click', () => {
        applyLogoColor(col.hex, chip);
      });

      paletteChipsContainer.appendChild(chip);
    });
  }

  // Recomendados: los 12 tonos oficiales (solo 349 C es normativo para el escudo)
  if (recoChipsContainer && typeof PALETTE_DATA !== 'undefined') {
    recoChipsContainer.innerHTML = '';
    [...PALETTE_DATA.primary, ...PALETTE_DATA.secondary].forEach(col => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'studio-color-chip';
      chip.style.backgroundColor = col.hex;
      if (col.hex === '#FFFFFF') chip.style.border = '1px solid #CBD5E1';
      chip.title = `${col.name} (${col.code} · ${col.hex})`;
      chip.setAttribute('data-hex', col.hex);
      chip.addEventListener('click', () => applyLogoColor(col.hex, chip));
      recoChipsContainer.appendChild(chip);
    });
  }

  // Color personalizado: picker en vivo + campo HEX con validación
  if (customPicker) {
    customPicker.addEventListener('input', () => {
      applyLogoColor(customPicker.value.toUpperCase(), null);
    });
  }

  if (customApply) {
    customApply.addEventListener('click', () => {
      const hex = normalizeHex(customHex ? customHex.value : '');
      if (!hex) {
        showToast('HEX inválido. Ejemplo válido: #F9A12C');
        return;
      }
      applyLogoColor(hex, null);
    });
  }

  if (customHex) {
    customHex.addEventListener('keydown', e => {
      if (e.key === 'Enter' && customApply) customApply.click();
    });
  }

  updateNormFlag(studioState.logoColor);

  // Cambio de Layout con transición suave entre composiciones
  let switchTimer = null;
  layoutButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const next = btn.getAttribute('data-layout');
      if (next === studioState.layout) return;
      layoutButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      studioState.layout = next;

      // La dependencia SOLO acompaña a la versión horizontal (Manual §2.1):
      // en vertical (prohibido §2.2), emblema y simplificado se oculta el grupo.
      if (subtextGroup) {
        subtextGroup.style.display = studioState.layout === 'horizontal' ? 'flex' : 'none';
      }

      if (container) container.classList.add('switching');
      clearTimeout(switchTimer);
      switchTimer = setTimeout(() => {
        renderStudioSVG();
        if (container) container.classList.remove('switching');
      }, 180);
    });
  });

  // Selector de Dependencia
  if (unitSelect) {
    unitSelect.addEventListener('change', () => {
      const val = unitSelect.value;
      if (val === 'custom') {
        customWrapper.style.display = 'block';
        studioState.unitText = customInput.value.trim();
        customInput.focus();
      } else if (val === 'none') {
        customWrapper.style.display = 'none';
        studioState.unitText = '';
      } else {
        customWrapper.style.display = 'none';
        studioState.unitText = val;
      }
      renderStudioSVG();
    });
  }

  if (customInput) {
    customInput.addEventListener('input', () => {
      studioState.unitText = customInput.value.trim();
      renderStudioSVG();
    });
  }

  // Chips de Fondo
  bgChips.forEach(chip => {
    chip.addEventListener('click', () => {
      bgChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const bg = chip.getAttribute('data-bg');
      studioState.bgColor = bg;

      if (currentBgHex) {
        currentBgHex.textContent = bg === 'transparent' ? 'Transparente' : bg;
      }

      if (bg === 'transparent') {
        artboard.classList.add('transparent-grid');
        artboard.style.backgroundColor = 'transparent';
      } else {
        artboard.classList.remove('transparent-grid');
        artboard.style.backgroundColor = bg;
      }

      // Si el fondo es oscuro y el logo está oscuro, o viceversa, avisar sutilmente
      renderStudioSVG();
    });
  });

  // Controles de Zoom
  const btnZoomIn = document.getElementById('btn-zoom-in');
  const btnZoomOut = document.getElementById('btn-zoom-out');
  const btnZoomReset = document.getElementById('btn-zoom-reset');

  function updateZoom(newZoom) {
    studioState.zoom = Math.max(0.5, Math.min(2.5, newZoom));
    if (artboard) {
      artboard.style.transform = `scale(${studioState.zoom})`;
    }
    if (zoomLevelLabel) {
      zoomLevelLabel.textContent = `${Math.round(studioState.zoom * 100)}%`;
    }
  }

  if (btnZoomIn) btnZoomIn.addEventListener('click', () => updateZoom(studioState.zoom + 0.15));
  if (btnZoomOut) btnZoomOut.addEventListener('click', () => updateZoom(studioState.zoom - 0.15));
  if (btnZoomReset) btnZoomReset.addEventListener('click', () => updateZoom(1));

  // Generador central de SVG en string limpio (geometría conforme al Manual §2)
  // Arte nativo en el espacio 202x250 del SVG maestro:
  //   escudo x[36.5,165.3] y[12.7,171.9] · texto x[15.2,186.7] y[179,222.8] · año x[77.6,124.2] y[229.3,237.3]
  const DARK_BGS = ['#026937', '#0F172A', '#70205B', '#000000'];

  function isDarkHex(hex) {
    const m = /^#([0-9a-f]{6})$/i.exec(String(hex || '').trim());
    if (!m) return false;
    const n = parseInt(m[1], 16);
    const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
    return ((0.2126 * r + 0.7152 * g + 0.0722 * b) / 255) < 0.35;
  }

  // Subtítulo de dependencia: 7740 C sobre fondos claros, blanco sobre oscuros (Manual §4).
  // Con color personalizado (experimental), el subtítulo sigue el tema elegido.
  function unitFill() {
    const bg = studioState.bgColor;
    const darkBg = bg && bg !== 'transparent' && (DARK_BGS.includes(bg) || isDarkHex(bg));
    if (darkBg) return '#FFFFFF';
    if (!isNormative(studioState.logoColor)) return studioState.logoColor;
    return '#35944B';
  }

  // Tamaño del subtítulo: 75% del ancho del bloque de marca (140–474 = 334 → máx 250)
  function unitFontSize(text) {
    const len = String(text || '').length;
    const fit = 250 / (0.52 * Math.max(len, 1));
    return Math.max(12, Math.min(27, Math.floor(fit)));
  }

  function generateSVGString() {
    const pShield = window.UDEA_PATHS['escudo-emblema-horquillado'];
    const pMainText = window.UDEA_PATHS['texto-universidad-de-antioquia'];
    const pYear = window.UDEA_PATHS['texto-ano-1803'];
    const pSimple = window.UDEA_PATHS['marca-udea-simplificada'];
    const color = studioState.logoColor;
    const unit = studioState.unitText;
    const layout = studioState.layout;
    const sub = unitFill();
    const safeUnit = escapeXml(unit);

    if (layout === 'horizontal') {
      // Horizontal oficial: escudo a la izquierda, bloque tipográfico a la derecha
      // y dependencia centrada abajo en el eje del bloque tipográfico (Manual §2.1).
      const hasUnit = unit && unit.length > 0;
      const fs = unitFontSize(unit);

      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 150" width="490" height="150">
  <title>Logosímbolo horizontal UdeA${hasUnit ? ' — ' + safeUnit : ''}</title>
  <desc>Escudo con horquillado de 1922 a la izquierda y leyenda UNIVERSIDAD DE ANTIOQUIA a la derecha${hasUnit ? ', con la dependencia ' + safeUnit + ' centrada en la parte inferior' : ''}.</desc>
  <style>
    .udea-fill { fill: ${color}; }
    .udea-subtext {
      font-family: 'Times New Roman', Times, serif;
      font-size: ${fs}px;
      font-weight: 700;
      text-anchor: middle;
      fill: ${sub};
    }
  </style>
  <g id="marca-udea-horizontal" class="udea-fill">
    <!-- Emblema UdeA con Horquillado y Orla -->
    <g transform="translate(-21.9, -2.4) scale(0.82)">
      <path id="escudo-orla" fill-rule="evenodd" clip-rule="evenodd" d="${pShield}" />
    </g>

    <!-- Bloque Tipográfico Principal: UNIVERSIDAD DE ANTIOQUIA -->
    <g transform="translate(110, -329.1) scale(1.95)">
      <path id="texto-universidad" fill-rule="evenodd" clip-rule="evenodd" d="${pMainText}" />
    </g>

    ${hasUnit ? `
    <!-- Dependencia / Unidad Académica (Times Bold, centrada en el bloque) -->
    <text x="307" y="134" class="udea-subtext">${safeUnit}</text>
    ` : ''}
  </g>
</svg>`;
    } else if (layout === 'vertical') {
      // Vertical clásica: NUNCA lleva dependencia (Manual §2.2, uso solemne).
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 258" width="260" height="258">
  <title>Logosímbolo vertical UdeA</title>
  <desc>Escudo con horquillado de 1922 arriba, leyenda UNIVERSIDAD DE ANTIOQUIA centrada debajo y año fundacional 1803. Uso solemne, sin dependencias.</desc>
  <style>
    .udea-fill { fill: ${color}; }
  </style>
  <g id="marca-udea-vertical" class="udea-fill">
    <!-- Escudo, Tipografía Institucional y Año 1803 -->
    <g transform="translate(29, 10)">
      <path id="escudo-orla" fill-rule="evenodd" clip-rule="evenodd" d="${pShield}" />
      <path id="texto-universidad" fill-rule="evenodd" clip-rule="evenodd" d="${pMainText}" />
      <path id="ano-1803" fill-rule="evenodd" clip-rule="evenodd" d="${pYear}" />
    </g>
  </g>
</svg>`;
    } else if (layout === 'shield') {
      // Disposición Emblema Solo (Sello Heráldico puro, año acercado al óvalo)
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 234" width="202" height="234">
  <title>Emblema UdeA — sello heráldico</title>
  <desc>Escudo ovalado con ancla, cinta de Medellín y blandones, orla de horquillado ornamental y año 1803. Sin leyendas.</desc>
  <style>
    .udea-fill { fill: ${color}; }
  </style>
  <g id="emblema-udea-solo" class="udea-fill">
    <path id="escudo-orla-horquillado" fill-rule="evenodd" clip-rule="evenodd" d="${pShield}" />
    <g transform="translate(0, -18)">
      <path id="ano-1803" fill-rule="evenodd" clip-rule="evenodd" d="${pYear}" />
    </g>
  </g>
</svg>`;
    } else {
      // Marca Simplificada UdeA (Roboto Slab Bold, solo avatar/texto corto)
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 28 314 104" width="314" height="104">
  <title>UdeA — marca simplificada</title>
  <desc>Logotipo simplificado UdeA en Roboto Slab Bold. Uso informal, avatares y espacios reducidos.</desc>
  <style>
    .udea-fill { fill: ${color}; }
  </style>
  <g id="marca-udea-simplificada" class="udea-fill">
    <path id="udea-simple" fill-rule="evenodd" clip-rule="evenodd" d="${pSimple}" />
  </g>
</svg>`;
    }
  }

  function escapeXml(unsafe) {
    return String(unsafe ?? '').replace(/[<>&'"]/g, c => {
      switch (c) {
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '&': return '&amp;';
        case '\'': return '&apos;';
        case '"': return '&quot;';
      }
    });
  }

  // Renderizar en el contenedor interactivo
  function renderStudioSVG() {
    const svgCode = generateSVGString();
    container.innerHTML = svgCode;

    // Alerta de contraste: logo y fondo del mismo bando = ilegible (Manual §4)
    const darkLogo = isDarkHex(studioState.logoColor);
    const bg = studioState.bgColor;
    const darkBg = !!bg && bg !== 'transparent' && (DARK_BGS.includes(bg) || isDarkHex(bg));
    const lowContrast = darkLogo === darkBg;
    const statusDot = document.querySelector('#logo-studio .studio-status-dot');
    if (statusDot) statusDot.style.backgroundColor = lowContrast ? '#F59E0B' : '#10B981';

    if (dimensionsLabel) {
      let base;
      if (studioState.layout === 'horizontal') {
        base = `Horizontal Oficial · ${studioState.unitText || 'Universidad de Antioquia'}`;
      } else if (studioState.layout === 'vertical') {
        base = 'Vertical Clásico · uso solemne (sin dependencia)';
      } else if (studioState.layout === 'shield') {
        base = 'Emblema y Sello Ornamental UdeA (1803)';
      } else {
        base = 'Simplificado UdeA · Roboto Slab Bold';
      }
      dimensionsLabel.textContent = lowContrast
        ? `${base} · Contraste bajo: cambia el fondo o el color`
        : base;
      if (!isNormative(studioState.logoColor)) {
        dimensionsLabel.textContent += ' · Experimental (fuera de norma §4)';
      }
    }
  }

  // Inicializar estado de fondo
  artboard.classList.add('transparent-grid');
  renderStudioSVG();

  // Acciones de Exportación
  const btnExportSVG = document.getElementById('btn-export-svg');
  const btnExportPNG = document.getElementById('btn-export-png');
  const btnCopySVG = document.getElementById('btn-copy-svg');

  if (btnExportSVG) {
    btnExportSVG.addEventListener('click', () => {
      const svgData = generateSVGString();
      const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      const cleanName = (studioState.unitText || 'UdeA').toLowerCase().replace(/[^a-z0-9]/g, '_');
      link.download = `logo_udea_${studioState.layout}_${cleanName}.svg`;
      link.href = url;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      showToast('SVG descargado exitosamente');
    });
  }

  if (btnCopySVG) {
    btnCopySVG.addEventListener('click', () => {
      const svgData = generateSVGString();
      copyToClipboard(svgData);
      showToast('Código SVG copiado al portapapeles');
    });
  }

  if (btnExportPNG) {
    btnExportPNG.addEventListener('click', () => {
      showToast('Generando PNG en alta resolución...');
      const svgString = generateSVGString();
      const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const blobURL = window.URL.createObjectURL(svgBlob);
      const image = new Image();

      image.onload = () => {
        const scale = 3; // Escala 3x para nitidez HD
        const canvas = document.createElement('canvas');
        canvas.width = image.width * scale;
        canvas.height = image.height * scale;
        const ctx = canvas.getContext('2d');

        // Si hay fondo configurado y no es transparente, rellenarlo
        if (studioState.bgColor && studioState.bgColor !== 'transparent') {
          ctx.fillStyle = studioState.bgColor;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

        canvas.toBlob(blob => {
          if (!blob) { showToast('No se pudo generar el PNG'); return; }
          const pngUrl = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          const cleanName = (studioState.unitText || 'UdeA').toLowerCase().replace(/[^a-z0-9]/g, '_');
          link.download = `logo_udea_${studioState.layout}_${cleanName}_hd.png`;
          link.href = pngUrl;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          setTimeout(() => window.URL.revokeObjectURL(pngUrl), 4000);
          showToast('PNG de alta resolución descargado');
        }, 'image/png');

        window.URL.revokeObjectURL(blobURL);
      };

      image.src = blobURL;
    });
  }
}
