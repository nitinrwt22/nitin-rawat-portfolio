import React, { useState } from 'react';
import { projects, type Project } from '../../utils/projectData';
import { useAudio } from '../../hooks/useAudio';

interface Scene04EvidenceProps {
  onSelectProject: (project: Project) => void;
  onProceedToCapabilities: () => void;
}

export const Scene04Evidence: React.FC<Scene04EvidenceProps> = ({
  onSelectProject,
  onProceedToCapabilities,
}) => {
  const { playSFX } = useAudio();
  const [paylock] = useState(projects[0]); // PayLock
  const [cramroom] = useState(projects[1]); // CramRoom
  const [codemaster] = useState(projects[2]); // CodeMaster
  const [atmRoute] = useState(projects[3]); // ATM Route Optimizer

  const handleProjectClick = (project: Project) => {
    playSFX('button_click', 0.6);
    onSelectProject(project);
  };

  return (
    <section
      id="scene-04-engineering-evidence"
      className="w-full min-h-screen bg-surface-container-lowest relative pt-16 pb-24 overflow-hidden select-none"
    >
      <div className="relative w-full max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-10 pb-space-xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-12">
          <div className="flex flex-col max-w-2xl">
            <div className="flex items-center gap-space-xs mb-space-sm">
              <span className="inline-block w-1.5 h-1.5 bg-secondary-container" />
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                EXHIBIT ARCHIVE // VERIFIED PRODUCTION WORK
              </span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight font-['Bodoni_Moda']">
              Engineering Evidence
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs font-['Geist']">
              A curated selection of backend architectures, concurrency-guarded systems, and low-level diagnostic engines built with verifiable discipline.
            </p>
          </div>

          <div className="flex items-center gap-space-sm">
            <div className="flex items-center gap-space-xs px-space-sm py-space-xs bg-surface-container rounded font-label-sm text-label-sm text-outline">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span>SYSTEM_HEALTH: NOMINAL</span>
            </div>
            <div className="hidden sm:flex items-center gap-space-xs px-space-sm py-space-xs bg-surface-container-low rounded font-label-sm text-label-sm text-on-surface-variant">
              <span>LATENCY: &lt;0.8ms</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            FLAGSHIP EXHIBIT 01: PAYLOCK (CONCURRENCY & TRANSACTION SYSTEM)
            ========================================================================= */}
        <div className="w-full bg-surface-container-low rounded-lg p-space-md lg:p-space-xl mb-12 relative overflow-hidden group shadow-xl">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-secondary-container/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row gap-space-xl items-start relative z-10">
            {/* Exhibit Left: Specs & Technical Deep-Dive */}
            <div className="w-full lg:w-7/12 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-space-xs mb-space-sm">
                  <span className="px-space-xs py-0.5 bg-surface-container-highest text-secondary font-label-sm text-label-sm uppercase tracking-wider rounded">
                    EXHIBIT 01 // CONCURRENT SYSTEMS
                  </span>
                  <span className="font-label-sm text-label-sm text-outline tracking-widest">
                    REF: ENG-PL-8821
                  </span>
                  <span className="ml-auto font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-space-xs py-0.5 rounded">
                    STATUS: VERIFIED REPOSITORY
                  </span>
                </div>

                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-['Bodoni_Moda']">
                  PayLock — Concurrent Payment Transaction System
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface mt-space-sm mb-space-md">
                  Backend-oriented payment transaction engine architected with C++ mutex locks, atomic synchronization guards, and strict ACID database properties.
                </p>

                {/* Technical Challenge / Approach Callout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm my-space-md">
                  <div className="bg-surface-container p-space-sm rounded">
                    <span className="font-label-sm text-label-sm text-secondary uppercase block mb-1 font-bold">
                      The Challenge
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Mitigating race conditions, double-spend vulnerabilities, and database deadlocks during high-concurrency payment invocations.
                    </p>
                  </div>
                  <div className="bg-surface-container p-space-sm rounded">
                    <span className="font-label-sm text-label-sm text-secondary uppercase block mb-1 font-bold">
                      Engineering Approach
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Constructed C++ synchronization primitives with mutexes and atomic operations alongside MySQL transaction isolation barriers.
                    </p>
                  </div>
                </div>

                {/* Stack Tags */}
                <div className="flex flex-wrap gap-space-xs my-space-md">
                  {paylock.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-space-sm py-1 bg-surface-container-highest text-primary font-label-sm text-label-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-space-sm mt-space-lg pt-space-sm">
                <button
                  type="button"
                  onClick={() => handleProjectClick(paylock)}
                  className="px-space-md py-space-xs bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider rounded hover:bg-primary-fixed transition-all flex items-center gap-space-xs font-bold cursor-pointer"
                >
                  <span>View Architecture Case Study</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </button>

                <a
                  href={paylock.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-space-md py-space-xs bg-surface-container text-on-surface font-label-md text-label-md uppercase tracking-wider rounded hover:bg-surface-container-high transition-all flex items-center gap-space-xs"
                >
                  <span className="material-symbols-outlined text-[14px]">terminal</span>
                  <span>GitHub Repository</span>
                </a>

                <div className="px-space-md py-space-xs bg-surface-container text-secondary font-label-md text-label-md uppercase tracking-wider rounded flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[14px]">lock</span>
                  <span>ACID Guaranteed</span>
                </div>
              </div>
            </div>

            {/* Exhibit Right: Architecture Mockup / Telemetry Visualization */}
            <div className="w-full lg:w-5/12 bg-surface-container-lowest rounded-lg p-space-md shadow-2xl flex flex-col gap-space-sm">
              <div className="flex items-center justify-between pb-space-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary-container" />
                  <span className="w-2.5 h-2.5 rounded-full bg-surface-container-high" />
                  <span className="w-2.5 h-2.5 rounded-full bg-surface-container-high" />
                  <span className="font-label-sm text-label-sm text-outline ml-2">
                    paylock-atomic-sync-worker
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-secondary font-bold">
                  MUTEX: LOCKED (0 DEADLOCKS)
                </span>
              </div>

              {/* Live SVG Performance Sparkline & Ingestion Chart */}
              <div className="bg-surface-container-low p-space-sm rounded">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                    CONCURRENCY THROUGHPUT (MUTEX SYNC)
                  </span>
                  <span className="font-label-sm text-label-sm text-primary font-bold">
                    &lt;0.8 ms ISOLATION
                  </span>
                </div>
                <svg className="w-full h-24 text-secondary-container" fill="none" viewBox="0 0 300 80">
                  <path
                    d="M0,70 L25,62 L50,65 L75,40 L100,48 L125,25 L150,30 L175,18 L200,28 L225,12 L250,22 L275,8 L300,14"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d="M0,70 L25,62 L50,65 L75,40 L100,48 L125,25 L150,30 L175,18 L200,28 L225,12 L250,22 L275,8 L300,14 L300,80 L0,80 Z"
                    fill="currentColor"
                    fillOpacity="0.12"
                  />
                  <circle cx="275" cy="8" fill="#ff9991" r="3" />
                </svg>
                <div className="flex justify-between text-outline font-label-sm text-label-sm mt-1">
                  <span>T-60s</span>
                  <span>T-30s</span>
                  <span className="text-secondary font-bold">LIVE ACQUIRE</span>
                </div>
              </div>

              {/* Terminal Telemetry Log Output */}
              <div className="bg-surface-container p-space-sm rounded font-label-sm text-label-sm text-on-surface-variant flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="text-secondary">[ACID_SERIALIZABLE: ENFORCED]</span>
                  <span className="text-outline">TABLES: 4</span>
                </div>
                <div className="text-on-surface truncate font-mono">
                  $ paylock-ctl transaction-audit --trace=active
                </div>
                <div className="text-outline truncate font-mono">
                  &gt;&gt; atomic_balance_guard: synchronized (100% integrity)
                </div>
                <div className="text-outline truncate font-mono">
                  &gt;&gt; mutex_lock_latency: &lt;0.8ms average
                </div>
                <div className="text-on-secondary-container flex items-center gap-1 font-mono">
                  <span className="inline-block w-1 h-3 bg-secondary animate-pulse" />
                  <span>TX COMMIT COMPLETE (ACID OK)</span>
                </div>
              </div>

              {/* Visual preview asset */}
              <div className="relative w-full h-36 rounded overflow-hidden">
                <img
                  className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  alt="PayLock Architecture Terminal"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhn7mvNi1r3BI5lczhjhlF0PsqpOoHwj7EeednFLrXGF0ffoVvptklnf0yUs_ZuoZBnXjzz_pdolZIUZ39KsWacJ2C7u7YD43bLMnG0ev0riz4KJZfEb_nlDfgF3ZwtxqCiOALy2KKloDtRPMT3-sErYHkeuJClEHG7zatHjd80cZDtc2FJrHkku4Zzbc2UWGkSiIzJappBbv17W_oHQRJ77IU60T9fpQPBkHda-gu2Z0q91zBN2KgzA"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 font-label-sm text-label-sm text-primary bg-surface-container-lowest/80 px-1.5 py-0.5 rounded">
                  TOPOLOGY // CONCURRENT TRANSACTION WORKFLOW
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SECONDARY EXHIBITS (BENTO TRIPLE GRID): CRAMROOM, CODEMASTER & ATM ROUTE OPTIMIZER
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg mb-16">
          {/* EXHIBIT 02: CRAMROOM */}
          <div className="bg-surface-container-low rounded-lg p-space-md lg:p-space-lg flex flex-col justify-between hover:bg-surface-container transition-colors shadow-lg group">
            <div>
              <div className="flex items-center justify-between gap-space-xs mb-space-sm">
                <span className="px-space-xs py-0.5 bg-surface-container-highest text-secondary font-label-sm text-label-sm uppercase tracking-wider rounded">
                  EXHIBIT 02 // FULL-STACK COLLABORATIVE
                </span>
                <span className="font-label-sm text-label-sm text-outline">REF: AI-CR-4402</span>
              </div>

              <h3 className="font-headline-md text-headline-md text-primary tracking-tight mb-space-xs font-['Bodoni_Moda']">
                CramRoom — Collaborative Exam Prep Platform
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                Full-stack exam prep environment with time-bound collaborative study sessions, query batching cutting DB round-trips by 60%, and NLP topic modeling integration.
              </p>

              {/* Metric Representation */}
              <div className="bg-surface-container-lowest rounded p-space-sm mb-space-md">
                <div className="flex items-center justify-between font-label-sm text-label-sm text-outline mb-2">
                  <span>POSTGRESQL QUERY BATCHING & NLP PIPELINE</span>
                  <span className="text-secondary font-bold">STATELESS NODE // JWT</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-surface-container p-space-xs rounded text-center">
                    <span className="font-label-sm text-label-sm text-on-surface-variant block">
                      ROUND-TRIPS
                    </span>
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">
                      -60%
                    </span>
                  </div>
                  <div className="bg-surface-container p-space-xs rounded text-center">
                    <span className="font-label-sm text-label-sm text-on-surface-variant block">
                      SESSIONS
                    </span>
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">
                      TIME-BOUND
                    </span>
                  </div>
                  <div className="bg-surface-container p-space-xs rounded text-center">
                    <span className="font-label-sm text-label-sm text-on-surface-variant block">
                      AI ANALYZER
                    </span>
                    <span className="font-headline-sm text-headline-sm text-secondary font-bold">
                      INTEGRATING
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full h-32 rounded overflow-hidden relative mb-space-md">
                <img
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-opacity"
                  alt="CramRoom Architecture Topology"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7vFMdJx_cREdqJIyqVDMKC_ElLPoIL46aJzq4d5Wf66lGjD5sO6S50sDpIdFQXdUd2FT0GMHyTlsJCHhgPs8y7WCZMEH1Cr689zOxxdR5PJTT7aUWWlUD6FMRb7N1ox-fdexzX5QnbYzMknAtqXT0RYt6wW5REGbfaBA7j1eSxYhj6KoYAHi1ilRxhotn7TJDLWh8uTM35OLVRqz1sn5B_lqgTiDTbIl18E8SVuidGGkZEIghriVjIA"
                />
                <div className="absolute bottom-2 right-2 font-label-sm text-label-sm text-primary bg-surface-container-lowest/90 px-space-xs py-0.5 rounded">
                  NLP TOPIC MODELING ARCHIVE
                </div>
              </div>

              <div className="flex flex-wrap gap-space-xs mb-space-md">
                {cramroom.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-space-xs py-0.5 bg-surface-container-highest text-primary font-label-sm text-label-sm rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-space-sm pt-space-xs">
              <button
                type="button"
                onClick={() => handleProjectClick(cramroom)}
                className="px-space-sm py-space-xs bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-wider rounded hover:bg-primary-fixed transition-all flex items-center gap-1 font-bold cursor-pointer"
              >
                <span>Examine Case Study</span>
                <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
              </button>
              <a
                href={cramroom.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-space-sm py-space-xs bg-surface-container text-on-surface font-label-sm text-label-sm uppercase tracking-wider rounded hover:bg-surface-container-high transition-all"
              >
                Code Archive
              </a>
            </div>
          </div>

          {/* EXHIBIT 03: CODEMASTER */}
          <div className="bg-surface-container-low rounded-lg p-space-md lg:p-space-lg flex flex-col justify-between hover:bg-surface-container transition-colors shadow-lg group">
            <div>
              <div className="flex items-center justify-between gap-space-xs mb-space-sm">
                <span className="px-space-xs py-0.5 bg-surface-container-highest text-secondary font-label-sm text-label-sm uppercase tracking-wider rounded">
                  EXHIBIT 03 // COMPILERS & DATA STRUCTURES
                </span>
                <span className="font-label-sm text-label-sm text-outline">REF: SYS-CM-1994</span>
              </div>

              <h3 className="font-headline-md text-headline-md text-primary tracking-tight mb-space-xs font-['Bodoni_Moda']">
                CodeMaster — C Code Analyzer & Symbol Browser
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                Zero-dependency C99 static analysis engine with custom lexer, parser, AST, and hand-implemented Trie, AVL Tree, and Max-Heap executing sub-30ms scans.
              </p>

              {/* Performance Indicator */}
              <div className="bg-surface-container-lowest rounded p-space-sm mb-space-md">
                <div className="flex items-center justify-between font-label-sm text-label-sm text-outline mb-2">
                  <span>C99 AST & GRAPH RECURSION DIAGNOSTICS</span>
                  <span className="text-secondary font-bold">DFS CALL-GRAPH // 65+ EDGES</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-surface-container p-space-xs rounded text-center">
                    <span className="font-label-sm text-label-sm text-on-surface-variant block">
                      SCAN SPEED
                    </span>
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">
                      &lt;30ms
                    </span>
                  </div>
                  <div className="bg-surface-container p-space-xs rounded text-center">
                    <span className="font-label-sm text-label-sm text-on-surface-variant block">
                      FUNCTIONS
                    </span>
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">
                      29+
                    </span>
                  </div>
                  <div className="bg-surface-container p-space-xs rounded text-center">
                    <span className="font-label-sm text-label-sm text-on-surface-variant block">
                      DEPENDENCIES
                    </span>
                    <span className="font-headline-sm text-headline-sm text-secondary font-bold">
                      ZERO (C99)
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full h-32 rounded overflow-hidden relative mb-space-md">
                <img
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-opacity"
                  alt="CodeMaster Call Graph Topology"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGeGbLXjFdkliUUb-nK-21CtP-rApDdWIG-wvBMy_MbSmn5D_8WN2_A7Cy8VqNDRDatPjA6vw7YjBmK40TRIIobvK9huEWudfiN-u2JLDltdaaXAV2xyt_uC_P4gQDC4eySoc6oRcYuhNYCK9PdM6r7DTOu4i9_ahNJcATHM4VBYKS1w2pyvLKRKn2N0eNl-q0rsynoVMn58u8aUzK9EYTexuTu812LUSpdLIhctpDTGlXdUj8TQOXNQ"
                />
                <div className="absolute bottom-2 right-2 font-label-sm text-label-sm text-primary bg-surface-container-lowest/90 px-space-xs py-0.5 rounded">
                  CANVAS RECURSION VISUALIZER
                </div>
              </div>

              <div className="flex flex-wrap gap-space-xs mb-space-md">
                {codemaster.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-space-xs py-0.5 bg-surface-container-highest text-primary font-label-sm text-label-sm rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-space-sm pt-space-xs">
              <button
                type="button"
                onClick={() => handleProjectClick(codemaster)}
                className="px-space-sm py-space-xs bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-wider rounded hover:bg-primary-fixed transition-all flex items-center gap-1 font-bold cursor-pointer"
              >
                <span>Examine Case Study</span>
                <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
              </button>
              <a
                href={codemaster.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-space-sm py-space-xs bg-surface-container text-on-surface font-label-sm text-label-sm uppercase tracking-wider rounded hover:bg-surface-container-high transition-all"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* EXHIBIT 04: ATM ROUTE OPTIMIZER */}
          <div className="bg-surface-container-low rounded-lg p-space-md lg:p-space-lg flex flex-col justify-between hover:bg-surface-container transition-colors shadow-lg group">
            <div>
              <div className="flex items-center justify-between gap-space-xs mb-space-sm">
                <span className="px-space-xs py-0.5 bg-surface-container-highest text-secondary font-label-sm text-label-sm uppercase tracking-wider rounded">
                  EXHIBIT 04 // FLEET LOGISTICS & C++
                </span>
                <span className="font-label-sm text-label-sm text-outline">REF: OPS-ARO-5012</span>
              </div>

              <h3 className="font-headline-md text-headline-md text-primary tracking-tight mb-space-xs font-['Bodoni_Moda']">
                ATM Route Optimizer — Fleet Logistics Engine
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                End-to-end cash replenishment platform monitoring 100+ ATM fleets and automating high-priority routes under INR 50L cash constraints.
              </p>

              {/* Performance Indicator */}
              <div className="bg-surface-container-lowest rounded p-space-sm mb-space-md">
                <div className="flex items-center justify-between font-label-sm text-label-sm text-outline mb-2">
                  <span>C++ REPLENISHMENT DISPATCH ENGINE</span>
                  <span className="text-secondary font-bold">KNAPSACK CONSTRAINED</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-surface-container p-space-xs rounded text-center">
                    <span className="font-label-sm text-label-sm text-on-surface-variant block">
                      ATM FLEET
                    </span>
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">
                      100+
                    </span>
                  </div>
                  <div className="bg-surface-container p-space-xs rounded text-center">
                    <span className="font-label-sm text-label-sm text-on-surface-variant block">
                      CAPITAL CAP
                    </span>
                    <span className="font-headline-sm text-headline-sm text-secondary font-bold">
                      INR 50L
                    </span>
                  </div>
                  <div className="bg-surface-container p-space-xs rounded text-center">
                    <span className="font-label-sm text-label-sm text-on-surface-variant block">
                      OPTIMIZER
                    </span>
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">
                      C++
                    </span>
                  </div>
                </div>
              </div>

              {/* Canvas Fleet Topology Visualizer */}
              <div className="w-full h-32 rounded overflow-hidden relative mb-space-md bg-surface-container-lowest flex items-center justify-center p-2 border border-outline-variant/30">
                <svg className="w-full h-full text-secondary" viewBox="0 0 280 100" fill="none">
                  {/* Route Trajectories */}
                  <path d="M30,70 L80,30 L140,55 L200,25 L250,60" stroke="#8a191a" strokeWidth="2" strokeDasharray="4 3" />
                  <path d="M80,30 L110,80 L180,75 L250,60" stroke="#ff9991" strokeWidth="1.5" opacity="0.6" />
                  {/* Depot Hub */}
                  <circle cx="30" cy="70" r="5" fill="#8f1d1d" />
                  <text x="30" y="86" fill="#e5e2e1" fontSize="8" fontFamily="monospace" textAnchor="middle">DEPOT (INR 50L)</text>
                  {/* ATM Nodes */}
                  <circle cx="80" cy="30" r="4.5" fill="#e4e2dc" />
                  <text x="80" y="21" fill="#ff9991" fontSize="8" fontFamily="monospace" textAnchor="middle">ATM-04 [CRITICAL]</text>
                  <circle cx="140" cy="55" r="4" fill="#8f1d1d" />
                  <text x="140" y="47" fill="#c7c7bf" fontSize="8" fontFamily="monospace" textAnchor="middle">ATM-19</text>
                  <circle cx="200" cy="25" r="4.5" fill="#e4e2dc" />
                  <text x="200" y="16" fill="#ff9991" fontSize="8" fontFamily="monospace" textAnchor="middle">ATM-62 [HIGH]</text>
                  <circle cx="110" cy="80" r="3.5" fill="#8f1d1d" opacity="0.8" />
                  <circle cx="180" cy="75" r="3.5" fill="#8f1d1d" opacity="0.8" />
                  <circle cx="250" cy="60" r="4.5" fill="#e4e2dc" />
                  <text x="250" y="75" fill="#c7c7bf" fontSize="8" fontFamily="monospace" textAnchor="middle">ATM-88</text>
                </svg>
                <div className="absolute bottom-2 right-2 font-label-sm text-label-sm text-primary bg-surface-container-lowest/90 px-space-xs py-0.5 rounded border border-outline-variant/40">
                  CANVAS ROUTE TOPOLOGY
                </div>
              </div>

              <div className="flex flex-wrap gap-space-xs mb-space-md">
                {atmRoute.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-space-xs py-0.5 bg-surface-container-highest text-primary font-label-sm text-label-sm rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-space-sm pt-space-xs">
              <button
                type="button"
                onClick={() => handleProjectClick(atmRoute)}
                className="px-space-sm py-space-xs bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-wider rounded hover:bg-primary-fixed transition-all flex items-center gap-1 font-bold cursor-pointer"
              >
                <span>Examine Case Study</span>
                <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
              </button>
              <a
                href={atmRoute.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-space-sm py-space-xs bg-surface-container text-on-surface font-label-sm text-label-sm uppercase tracking-wider rounded hover:bg-surface-container-high transition-all"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* TECHNICAL REPUTATION / METRICS STRIP */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm mb-16 p-space-md bg-surface-container-lowest rounded-lg">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
              DSA PROBLEMS SOLVED
            </span>
            <span className="font-headline-md text-headline-md text-primary mt-1 font-mono font-bold">
              640+
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              LeetCode algorithmic mastery
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
              CONTEST RATING
            </span>
            <span className="font-headline-md text-headline-md text-primary mt-1 font-mono font-bold">
              1800+
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Competitive rating bracket
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
              QUERY ROUND-TRIPS
            </span>
            <span className="font-headline-md text-headline-md text-primary mt-1 font-mono font-bold">
              -60%
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Batched PostgreSQL queries
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
              SYSTEM CLEARANCE
            </span>
            <span className="font-headline-md text-headline-md text-secondary mt-1 font-mono font-bold">
              LEVEL 5
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Full architectural authority
            </span>
          </div>
        </div>

        {/* FOOTER TRANSITION CALLOUT (SCENE 04 -> 05) */}
        <button
          type="button"
          onClick={onProceedToCapabilities}
          className="w-full bg-surface-container p-space-lg rounded-lg flex flex-col md:flex-row items-center justify-between gap-space-md hover:bg-surface-container-high transition-all group text-left cursor-pointer"
        >
          <div className="flex flex-col text-center md:text-left">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-1 font-bold">
              PROCEED TO NEXT FILE
            </span>
            <span className="font-headline-md text-headline-md text-primary group-hover:text-secondary transition-colors font-['Bodoni_Moda']">
              EXPLORE CAPABILITIES & TIMELINE
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 font-['Geist']">
              Detailed technical capability matrix, verified credentials, and complete operational case incidents.
            </p>
          </div>
          <div className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface uppercase tracking-wider group-hover:translate-x-1 transition-transform font-bold">
            <span>INSPECT MATRIX</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Scene04Evidence;
