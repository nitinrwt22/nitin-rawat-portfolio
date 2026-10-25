# DESIGN TOKENS — OBSIDIAN DOSSIER
**Source of Truth:** Google Stitch Project `16259173859237114002` ("Most Wanted Developer Portfolio")

---

## 1. Color Palette

The color system is rooted in dark, atmospheric functionalism: pure tonal separation between abyssal blacks, authentic warm archival fiber whites, and evidentiary red accents.

### Core Canvas & Surface Tokens
| Token Name | Hex Value | Role & Usage |
| :--- | :--- | :--- |
| `--color-canvas` | `#050505` | Pure Obsidian Black substrate; grid guide backdrop |
| `--color-surface-lowest` | `#0e0e0e` | Deep container floor, dark viewport canvas |
| `--color-surface-low` | `#141414` / `#1c1b1b` | Dossier folder base, primary card container substrate |
| `--color-surface` | `#131313` / `#161616` | Standard elevated surface, card interior |
| `--color-surface-high` | `#201f1f` / `#2a2a2a` | Hover states, interactive item backgrounds |
| `--color-surface-highest` | `#353534` | Distinct chip backgrounds, active tabs |
| `--color-surface-bright` | `#3a3939` | Highlighted borders, elevated controls |

### Foreground & Typography Tokens
| Token Name | Hex Value | Role & Usage |
| :--- | :--- | :--- |
| `--color-primary` | `#F0EEE8` / `#ffffff` | Authentic warm paper white; primary headings and display text |
| `--color-primary-fixed` | `#e4e2dc` | Broadsheet newsprint paper body |
| `--color-primary-fixed-dim`| `#c8c6c1` | Aged newsprint paper shading |
| `--color-on-surface` | `#e5e2e1` | Standard reading text |
| `--color-on-surface-variant`| `#c7c7bf` / `#929292`| Secondary descriptions, auxiliary telemetry, timestamps |
| `--color-outline` | `#91918a` | Monospace tags, column headers, telemetry labels |
| `--color-outline-variant` | `#464741` / `#1f1f1f`| Inactive hair-line dividers, graticule lines |

### Evidentiary & Accent Tokens (Archival Red)
| Token Name | Hex Value | Role & Usage |
| :--- | :--- | :--- |
| `--color-secondary` | `#8F1D1D` | Classified badges, alert pips, primary accents |
| `--color-secondary-hover`| `#A32A2A` / `#8A191A` | Button hover state, glow trigger |
| `--color-secondary-container`| `#8a191a` / `#1a0a0a` | Rubber stamp fill, high-threat tag container |
| `--color-on-secondary-container`| `#ff9991` | High-contrast text on red badge containers |
| `--color-secondary-glow` | `rgba(163, 42, 42, 0.35)` | Box-shadow glow for critical buttons and active states |

### Structural Hairline Borders
| Token Name | Value | Role & Usage |
| :--- | :--- | :--- |
| `--border-hairline` | `1px solid #1F1F1F` | Default resting state card, column, and table boundaries |
| `--border-hairline-active` | `1px solid #333333` | Hover / focus active perimeter stroke |
| `--border-classified` | `1px solid #8F1D1D` | Red classified stamp borders and active inputs |

---

## 2. Typography

Three typeface families enforce the tension between editorial high-fashion crime reportage, surgical software documentation, and machine telemetry:

1. **Display / Headlines:** `Bodoni Moda` (Serif, dramatic scale, high-contrast stroke weight)
2. **Interface Engine:** `Geist` (Sans-serif, geometric precision, maximum legibility)
3. **Docket Metadata:** `JetBrains Mono` (Monospace, tracking `0.06em` - `0.1em`, uppercase)

### Scale & Hierarchy
| Style | Font Family | Size | Line Height | Weight | Tracking | Case |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `headline-xl` | Bodoni Moda | 56px (Desktop) / 36px (Mobile) | 64px / 44px | 700 (Bold) | -0.02em | Normal / Title |
| `headline-lg` | Bodoni Moda | 40px (Desktop) / 28px (Mobile) | 48px / 36px | 600 (Semi) | -0.01em | Normal / Title |
| `headline-md` | Geist | 24px | 32px | 600 (Semi) | -0.015em| Normal |
| `headline-sm` | Geist | 18px | 24px | 600 (Semi) | -0.01em | Normal |
| `body-lg` | Geist | 16px | 26px | 400 (Reg) | -0.005em| Normal |
| `body-md` | Geist | 14px | 22px | 400 (Reg) | 0.0em | Normal |
| `body-sm` | Geist | 12px | 18px | 400 (Reg) | 0.01em | Normal |
| `label-lg` | JetBrains Mono | 13px | 16px | 500 (Med) | 0.06em | Uppercase |
| `label-md` | JetBrains Mono | 11px | 14px | 500 (Med) | 0.08em | Uppercase |
| `label-sm` | JetBrains Mono | 10px | 12px | 400 / 500 | 0.1em | Uppercase |

---

## 3. Shape & Geometry Language

- **Corner Radii:** Strictly `0px` (`rounded-none`).
- Every container, exhibit card, button, docket stamp, table cell, and modal window features razor-sharp 90-degree industrial paper edges.
- **Exception:** The persistent floating bottom dock uses a capsule pill shape (`rounded-full`), matching the authoritative Stitch reference.
- **Chamfers:** 45-degree corner clips (`clip-path: polygon(...)`) may be used for specific technical identification tags.

---

## 4. Layout & Grid

- **Desktop (1200px+):** 12-column engineering grid, `1.5rem` (`24px`) gutters, `3rem` (`48px`) viewport margin. Max container width `1280px` (`max-w-7xl`), `1152px` (`max-w-6xl`), `1024px` (`max-w-5xl`).
- **Tablet (768px - 1199px):** 8 columns, `1.5rem` (`24px`) gutters, `2rem` (`32px`) viewport margins.
- **Mobile (< 768px):** 4 columns, `1rem` (`16px`) gutters, `1.25rem` (`20px`) viewport margins. Asymmetric bento rows collapse into stacked vertical index lists.

---

## 5. Motion & Atmosphere Values

| Motion Key | Timing / Easing | Description |
| :--- | :--- | :--- |
| `paper-unfold` | `1000ms cubic-bezier(0.16, 1, 0.3, 1)` | 3D CSS `preserve-3d` bi-fold rotation from `85deg` to `0deg` |
| `burn-sweep` | `1400ms ease-in-out` | Diagonal canvas ember combustion mask progression |
| `hover-card` | `200ms ease-out` | Surface transition from `#141414` to `#201f1f` with border highlight |
| `button-press` | `100ms ease-out` | Rapid mechanical tactile response |
| `dust-drift` | Continuous Canvas 60 FPS | 45 floating atmospheric dust particles with screen blending |
| `radar-pulse` | `2400ms ease-in-out infinite` | Telemetry throughput counter flicker and sparkline animation |
