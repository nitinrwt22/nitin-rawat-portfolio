# DESIGN AUDIT — NITIN RAWAT PORTFOLIO
**Source of Truth:** Google Stitch Project `16259173859237114002` ("Most Wanted Developer Portfolio")  
**Design System:** Obsidian Dossier (`FIDELITY`)  
**Audit Date:** 2026-10-25

---

## 1. Executive Summary & Scene Inventory

The Stitch project defines a unified, dark cinematic forensic investigation experience transitioning seamlessly into an engineering portfolio. The experience is organized into a linear 7-scene architecture anchored by 4 desktop Stitch screens, high-resolution portrait imagery, and interactive tactile components.

### Complete Scene Order & Map

| Scene ID | Stitch Screen Name / Reference | Role in Experience | Layout Type |
| :--- | :--- | :--- | :--- |
| **Scene 01** | *01 DARK* (Cinematic Opening) | Black Void, digital noise, initialization telemetry, sound boot | Fullscreen Modal (100vw x 100vh) |
| **Scene 02** | `a1daacc69f4f4ccfaee30e3810ce25f6` (*Scene 02: Newspaper & Most Wanted Reveal*) | Physical broadsheet newspaper, wood-block masthead, charges, mugshot | Centered Broadsheet Canvas (`max-w-5xl`) |
| **Scene 03** | `0d432ee73bf8407581d797ca3d3347ef` (*Scene 03: Confidential Case File*) | Classified manila dossier casing, paperclip portrait, metrics, exhibit previews | Asymmetric 12-col Dossier (`max-w-6xl`) |
| **Scene 04** | `0139f43a311f4b9fb443217d34a9ba82` (*Scene 04: Engineering Evidence Case Studies*) | Flagship NexusFlow architecture, dual bento secondary exhibits, live terminal HUD | 12-col Engineering Grid (`max-w-7xl`) |
| **Scene 05** | `c6fde40a3a2a486aafa3b272a5addfeb` (*Scene 05: Capabilities Matrix*) | 4-column linear capability matrix (Languages, Arch, Infra, Protocols) | 4-Column Grid (`max-w-7xl`) |
| **Scene 06** | `c6fde40a3a2a486aafa3b272a5addfeb` (*Scene 06: Case History & Timeline*) | 3 chronological incidents (SWE Fellow, Systems Engineer, BS in CS) | Stacked Audit Docket (`max-w-7xl`) |
| **Scene 07** | `c6fde40a3a2a486aafa3b272a5addfeb` (*Scene 07: Dossier Access & Executive Contact*) | PDF Resume modal/download + Fast-track encrypted contact terminal | Bento Contact Cluster (`max-w-7xl`) |

---

## 2. Global Chrome & Navigation Specification

Every screen in Stitch incorporates two persistent chrome structures:

### A. Top Fixed Classified Header
- **Container:** `fixed top-0 left-0 right-0 z-50 h-14 bg-surface-container-lowest/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.6)]`
- **Left Element:** Pulsing red status indicator (`w-2 h-2 rounded-full bg-secondary animate-pulse`) + Monospace text `STATUS: ACTIVE // CLASSIFIED DOSSIER NR-001` + `[INDEX_SEC: 09-ALPHA]`.
- **Right Elements:**
  - Audio Toggle: `AUDIO: ON / OFF` with `volume_up` Material icon.
  - Quick Bypass Link: `SKIP INTRO // DIRECT ACCESS` (in `#8F1D1D` secondary red with hover state).
  - Subject Avatar Pill: 32x32 circle with user avatar icon.

### B. Bottom Floating Dock (Scene Navigation)
- **Container:** `fixed bottom-space-lg left-1/2 -translate-x-1/2 z-40 max-w-fit px-space-md py-space-xs bg-surface-container/90 backdrop-blur-xl rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.8)]`
- **Navigation Items:**
  1. `01 DARK` (triggers Scene 1 replay)
  2. `02 WANTED` (links/scrolls to Broadsheet Newspaper)
  3. `03 DOSSIER` (links/scrolls to Confidential Case File)
  4. `04 EVIDENCE` (links/scrolls to Engineering Case Studies)
  5. `05 MATRIX` (links/scrolls to Capabilities Matrix)
  6. `06 HISTORY` (links/scrolls to Case History Timeline)
  7. `07 CONTACT` (links/scrolls to Secure Direct Dispatch)
- **Active State:** Capsule badge with `bg-primary text-on-primary font-bold`.
- **Inactive State:** `font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface`.

### C. Persistent Legal Footer
- **Container:** `w-full bg-surface-container-lowest py-space-xl`
- **Content:** `FEDERAL REPOSITORY // DOSSIER NR-001`, `SECURITY CLEARANCE LEVEL 5 REQUIRED FOR ARCHIVAL MODIFICATION`, `© 2025 NITIN RAWAT. ALL RIGHTS RESERVED // CODE DIVISION.`

---

## 3. Scene-by-Scene Detailed Requirements

### Scene 01 — Opening Void
- **Visuals:** Pure `#050505` black void, high-frequency digital noise / film grain layer.
- **Audio:** Low hum / ambient tactical sub-bass drone (`ambient_drone`), initialized silently on user gesture.
- **HUD Telemetry:** `SYSTEM BOOT: CLEARANCE REQUIRED`, `INITIALIZING BIO-METRIC DECLASSIFICATION`.
- **Action:** Auto-transitions to Scene 02 after 1.5s or on click, with immediate skip option.

### Scene 02 — Newspaper & Most Wanted Reveal
- **Source Frame:** Stitch screen `a1daacc69f4f4ccfaee30e3810ce25f6`
- **Atmosphere:** Overhead spotlight flare (`bg-gradient-to-b from-primary/10 via-primary/5 to-transparent blur-3xl`), 45-particle 2D canvas dust simulation (`#dust-ambient-canvas`).
- **Telemetry Bar:**
  - `EVIDENCE RETRIEVAL: 100%` (surface-container-high chip)
  - `LEVEL-5 DECLASSIFIED` (secondary-container red chip)
  - `LAT: 37.7749° N // LON: -122.4194° W`
  - Action buttons: `INSPECT PAPER [1.0X]` (toggles scale 1.04x zoom), `SKIP DIRECT TO PORTFOLIO`.
- **Physical Broadsheet Paper (`#broadsheet-paper`):**
  - Background `#e4e2dc` (`bg-primary-fixed`) with deep box shadow `0 25px 60px -15px rgba(0,0,0,0.95), 0 0 100px rgba(0,0,0,0.8)`.
  - Realistic crease shadows: Vertical center spine crease + horizontal fold line (`mix-blend-multiply`).
  - Aging vignette: `inset 0 0 60px rgba(50,40,25,0.35)`.
- **Masthead:**
  - `VOL. CXLII... No. 49,201` | `SPECIAL POLICE EXTRA EDITION` | `PRICE FIVE CENTS`
  - Title: `THE CHRONICLE DISPATCH` (Bodoni Moda 68px/64px extrabold, uppercase).
  - Subtitle: `METROPOLITAN INVESTIGATION SECTION // BUREAU OF DIGITAL CRIMES & DISTRIBUTED ALGORITHMS`.
- **Main Banner:**
  - Warning tag: `WANTED BY THE HIGH-PERFORMANCE CODE DIVISION` flanked by alert icons.
  - Title: `MOST WANTED` (Bodoni Moda 124px bold, scale-y-110, mix-blend-darken).
  - Red Classified Stamp (rotated -6deg): `DEPARTMENT OF ARCHIVAL SURVEILLANCE // CLASSIFIED EVIDENCE // NR-001 // VERIFIED FOR IMMEDIATE ARREST`.
  - Under-headline black strip: `SUBJECT IDENTIFIED: NITIN RAWAT` | `OCCUPATION: SOFTWARE ENGINEER // SYSTEM ARCHITECT` | `STATUS: AT LARGE`.
- **12-Column Broadsheet Bento:**
  - **Left 5 Cols:**
    - `RECORD OF OFFENSES & CAPABILITIES` (REF: SPEC-09A).
    - Paragraph describing fault-tolerant infrastructure under extreme load.
    - Charge Sheet Box (primary-fixed-dim/40):
      - `[01] AUTONOMOUS AI AGENTS & LLM PIPELINES`
      - `[02] HIGH-CONCURRENCY DISTRIBUTED SYSTEMS`
      - `[03] PRODUCTION FULL-STACK CRAFT`
      - `[04] THEORETICAL ALGORITHMIC CONVERSION`
    - Fingerprint Matrix with SHA256 hash and square `NR` imprint.
  - **Right 7 Cols:**
    - Evidence photo frame: `MUGSHOT EXHIBIT NR-01 // CAMERA A`, `RES: 896x1200 // MONO-CHROMA`.
    - Authentic Nitin Rawat photo (aspect 4/5, grayscale, contrast-125, camera reticles on 4 corners).
    - Watermark overlay: `SUSPECT IDENTIFIED: NITIN RAWAT [DOSSIER: NR-001]` + `PRIMARY TARGET`.
    - Caption `FIG. 01 — ARCHIVAL CAMERA RECONNAISSANCE PHOTOGRAPH`.
    - Bounty / Compensation Notice: `HIGH VALUE RECRUITMENT` + `REPORT / CONTACT` button.
- **Bottom Tactile Strip:**
  - `DOSSIER EVIDENCE ARCHIVE // NR-001`.
  - `UNFOLD PAPER` button + `TRANSITION TO CASE FILE (SCENE 04)` button.

### Scene 03 — Confidential Case File Dossier
- **Source Frame:** Stitch screen `0d432ee73bf8407581d797ca3d3347ef`
- **Atmosphere:** Overhead tactical spotlight (`w-[850px] h-[750px] blur-[110px]`), corner graticule coordinates (`LAT: 37.7749 // LNG: -122.4194`).
- **Status Ribbon:** `SECURITY OVERRIDE CONFIRMED /// SERIAL: NR-8842-X`, `INVESTIGATION DOSSIER: SUBJECT_NR-001`, Stamp `ACCESS GRANTED // LEVEL 4`, `ENC: 4096-SHA256`.
- **Manila Dossier Folder (`#141414` / `bg-surface-container-low`):**
  - Folder tab: `CASE FILE: NR-001 // CONFIDENTIAL`.
  - Corner crosshairs `+` in all 4 corners.
- **Left Wing (5 Cols):**
  - Paperclipped photograph: Realistic metallic paperclip graphic at top right.
  - Nitin Rawat photograph with biometric match HUD: `[BIOMETRIC: MATCH]`, `S_INDEX: 99.8%`.
  - Red rubber stamp overlay (-12deg): `ACCESS GRANTED // CLEARANCE 4`.
  - Subject Metric Docket: Full Name `NITIN RAWAT`, Designation `SOFTWARE ENGINEER`, Specialization `SYSTEMS ARCHITECTURE & AI`, Status `ACTIVELY SEEKING INTERNSHIPS & FULL-TIME SWE`, Location `AVAILABLE FOR REMOTE & ON-SITE`.
  - Sparkline telemetry: Core efficiency index `99.4% OPTIMAL` with animated SVG waveform.
- **Right Wing (7 Cols):**
  - Capabilities Memo (REF: SKILLS-V5) with 3 categories:
    - Languages: TypeScript (PRIME), Python (PRIME), Go (EXP), C++ (SYS), SQL (ADV)
    - Core & AI: Dist. Systems (CORE), Next.js / React (PRO), Node / FastAPI (PERF), PyTorch / LLMs (ML), gRPC / REST (NET)
    - Infra & Data: Docker / K8s (OPS), AWS Cloud (ARCH), PostgreSQL (DBA), Redis & Kafka (STREAM), Vector DBs (EMBED)
  - Exhibit Archive Preview:
    - EX-A: High-Throughput Vector Search Engine (C++ // Python // Faiss)
    - EX-B: Distributed Workflow Orchestrator (Go // Kafka // Redis)
    - EX-C: Real-Time Collaborative Canvas Platform (TypeScript // WebSockets)
  - Action Controls:
    - Primary Glowing Button: `PROCEED TO ENGINEERING EVIDENCE` (`bg-primary text-on-primary shadow-[0_0_20px_rgba(255,255,255,0.2)]`).
    - Secondary Ghost Button: `VIEW FULL DOSSIER / RESUME (PDF)`.
- **Quick Notes Strip:** Complexity Cognizance, Code Hygiene, Recruiter Status.

### Scene 04 — Engineering Evidence Case Studies
- **Source Frame:** Stitch screen `0139f43a311f4b9fb443217d34a9ba82`
- **Header:** `EXHIBIT ARCHIVE // VERIFIED PRODUCTION WORK`, `Engineering Evidence`, system health `NOMINAL`, latency `<4.2ms`.
- **Flagship Exhibit 01: NexusFlow — Distributed Event Stream Engine**
  - Specs: 120k+ ops/sec, sub-5ms p99 latency.
  - The Challenge: Mitigating write amplification across 48-node cluster.
  - Engineering Approach: Zero-copy buffer pools + RocksDB SST compaction.
  - Stack Tags: Go, Raft Consensus, gRPC, RocksDB, Kafka Protocol.
  - Actions: `View Architecture Case Study`, `GitHub Repository`, `Live Benchmark`.
  - Right Telemetry Monitor: Live ops counter `128,490 OPS/S`, SVG throughput area chart, terminal log stream with Raft quorum verification, topology visual.
- **Secondary Exhibits (Dual Bento Grid):**
  - **Exhibit 02: CortexRAG — Context-Aware Neural Retrieval Platform**
    - Specs: Hybrid semantic & lexical retrieval with cross-encoder reranker.
    - Metric HUD: Latency 18ms, Top-K Accuracy 94.6%, Chunks 1.2M.
    - Visual: High-dimensional embedding topology.
    - Stack: Python, FastAPI, Qdrant, TypeScript, Docker.
  - **Exhibit 03: Obsidian Canvas — Real-Time Spatial Workspace**
    - Specs: CRDT-backed infinite multiplayer canvas, 60 FPS WebGL shader.
    - Metric HUD: Nodes 10k+, Sync Lag <12ms, Draw Calls Batched.
    - Visual: Spatial engine canvas wireframe.
    - Stack: TypeScript, WebSockets, Yjs, WebGL, Tailwind.
- **Reputation Metrics Strip:**
  - Uptime Record: `99.995%`
  - Event Throughput: `1.8B+` daily
  - Code Efficiency: `-34%` compute reduction
  - System Clearance: `LEVEL 5`

### Scene 05 — Capabilities Matrix
- **Source Frame:** Stitch screen `c6fde40a3a2a486aafa3b272a5addfeb` (Section 1)
- **Header:** `SECTION 03 // TECHNICAL VERIFICATION [CAPABILITY_MATRIX]`, `Known Capabilities`.
- **4-Column Linear Taxonomy:**
  1. `01 // CODEBASE` (Systems & Languages): TypeScript (ADVANCED), Python (CORE), Go (CONCURRENCY), C++ (MEMORY_OPT), SQL (ANALYTIC), Bash (AUTOMATION).
  2. `02 // TOPOLOGY` (Frameworks & Arch): Next.js & React (PROD_TIER), Node.js (EVENT_DRIVEN), FastAPI (ASYNC_IO), gRPC / Protobuf (RPC_WIRE), REST (OPENAPI), Microservices (DISTRIB).
  3. `03 // SUBSTRATE` (Data & Infrastructure): PostgreSQL (TRANSACT), Redis Cluster (IN_MEMORY), Qdrant Vector DB (EMBED_INDEX), Docker (SANDBOX), Kubernetes (REPLICAS), AWS & Linux (SYSTEMD/EC2).
  4. `04 // PROTOCOLS` (Engineering Discipline): Distributed Systems (CONSENSUS), Concurrency Models (THREADS/LOCKS), CI/CD Automation (ACTIONS), Test-Driven Design (UNIT/E2E), System Profiling (FLAME_GRAPHS), Telemetry & Logs (GRAFANA).

### Scene 06 — Case History (Operational Timeline)
- **Source Frame:** Stitch screen `c6fde40a3a2a486aafa3b272a5addfeb` (Section 2)
- **Header:** `SECTION 04 // OPERATIONAL TIMELINE [CHRONO_LOG_ARCHIVE]`, `Case History`.
- **Chronological Records:**
  - **Record 01:** `Software Engineering Fellow & Core Systems Builder` (2024 — Present, Active Assignment, Global).
    - Telemetry 01: High-Throughput Vector Ingestion (Go & Redis, P99 14.2ms).
    - Telemetry 02: Deterministic Pipeline Isolation (cgroups & sandboxing, 99.98% SLA).
    - Telemetry 03: Unified Observability Engine (OpenTelemetry & Prometheus, 100% RPC coverage).
  - **Record 02:** `Systems Engineer & Full-Stack Autonomous Architect` (2023 — 2024, First Place Hackathon Laureate).
    - Incident 01: Kernel & Network Protocol Monitor (C++, Python, eBPF filters).
    - Incident 02: Autonomous Mesh (P2P telemetry protocol, judged 1st of 120+ teams).
  - **Record 03:** `Bachelor of Science in Computer Science` (Academic Credentials, Completed).
    - Curricular Nodes: Data Structures & Algorithms, Operating Systems Internals, Computer Systems & Networking, Database System Architecture, Distributed Computation.

### Scene 07 — Dossier Access & Executive Contact
- **Source Frame:** Stitch screen `c6fde40a3a2a486aafa3b272a5addfeb` (Sections 3 & 4)
- **Section 3: Candidate Summary Dossier (Resume Access):**
  - Official document card `NR_SWE_RESUME_2025.PDF`.
  - Actions: `View Resume (Interactive)` modal + `Download PDF`.
  - Verification footprint: SHA256 hash.
- **Section 4: Establish Contact (`CASE CLOSED. NEXT CHAPTER: YOURS`):**
  - Callout: Currently reviewing Software Engineering Internships and Full-Time Roles.
  - Direct Channels (7 cols):
    - Email: `nitin.rawat@engineering.dev` (with `SEND TRANSMISSION` action).
    - GitHub: `github.com/nitinrawat` (with `VIEW REPOSITORIES` action).
    - LinkedIn: `linkedin.com/in/nitinrawat` (with `CONNECT PROFILE` action).
  - Fast-Track Executive Dispatch (5 cols):
    - Direct mailto link with pre-populated subject line: `ESTABLISH CONTACT // SEND MESSAGE`.
    - Live socket & AES-256 transmission status.

---

## 4. Visual Assets & Treatment Inventory

| Asset Name | Stitch Source URL / Local Path | Treatment & Dimensions |
| :--- | :--- | :--- |
| **Nitin Rawat Portrait** | `src/assets/blazer.jpg` | Desaturated B&W, contrast-125, brightness-95, 896x1200 aspect 3:4 / 4:5, corner reticle marks, paperclip overlay |
| **NexusFlow Topology** | `https://lh3.googleusercontent.com/aida-public/AB6AXuBhn7mvNi1r3BI5lczhjhlF0PsqpOoHwj7EeednFLrXGF0ffoVvptklnf0yUs_ZuoZBnXjzz_pdolZIUZ39KsWacJ2C7u7YD43bLMnG0ev0riz4KJZfEb_nlDfgF3ZwtxqCiOALy2KKloDtRPMT3-sErYHkeuJClEHG7zatHjd80cZDtc2FJrHkku4Zzbc2UWGkSiIzJappBbv17W_oHQRJ77IU60T9fpQPBkHda-gu2Z0q91zBN2KgzA` | Dark terminal topology with faint crimson glowing traces |
| **CortexRAG Topology** | `https://lh3.googleusercontent.com/aida-public/AB6AXuC7vFMdJx_cREdqJIyqVDMKC_ElLPoIL46aJzq4d5Wf66lGjD5sO6S50sDpIdFQXdUd2FT0GMHyTlsJCHhgPs8y7WCZMEH1Cr689zOxxdR5PJTT7aUWWlUD6FMRb7N1ox-fdexzX5QnbYzMknAtqXT0RYt6wW5REGbfaBA7j1eSxYhj6KoYAHi1ilRxhotn7TJDLWh8uTM35OLVRqz1sn5B_lqgTiDTbIl18E8SVuidGGkZEIghriVjIA` | Neural network topology with red nodes and vector clusters |
| **Obsidian Canvas Topology**| `https://lh3.googleusercontent.com/aida-public/AB6AXuAGeGbLXjFdkliUUb-nK-21CtP-rApDdWIG-wvBMy_MbSmn5D_8WN2_A7Cy8VqNDRDatPjA6vw7YjBmK40TRIIobvK9huEWudfiN-u2JLDltdaaXAV2xyt_uC_P4gQDC4eySoc6oRcYuhNYCK9PdM6r7DTOu4i9_ahNJcATHM4VBYKS1w2pyvLKRKn2N0eNl-q0rsynoVMn58u8aUzK9EYTexuTu812LUSpdLIhctpDTGlXdUj8TQOXNQ` | Spatial canvas wireframe with glowing white bounds |
| **Atmospheric Dust Canvas** | Procedural HTML5 2D Canvas | 45 floating dust particles, white, opacity 0.1-0.6, vertical drift |

---

## 5. Interaction Specifications

1. **Newspaper Fold / Zoom:**
   - `INSPECT PAPER [1.0X]` toggles CSS transform `scale(1.04) translateY(-10px)` with button text toggle `RESET VIEW [1.0X]`.
   - `UNFOLD PAPER` applies paper drop shadow and 3D unfold hinge.
2. **Combustion & Paper Sweep Transition:**
   - Smooth diagonal mask wipe + rising canvas fire embers connecting Scene 2 to Scene 3.
3. **Floating Dock Navigation:**
   - Clicking any item smoothly scrolls the viewport to that exact scene ID or updates the active stage state.
   - Active pill indicator dynamically updates using Intersection Observer.
4. **Direct Access / Skip Intro:**
   - Dedicated skip controls in the top header and within Scene 2 bypass intro animations and land directly on the portfolio.
5. **Interactive Resume Modal:**
   - Clicking `View Resume (Interactive)` launches a full-screen, high-contrast accessible modal viewer rendering the complete verified curriculum vitae.
