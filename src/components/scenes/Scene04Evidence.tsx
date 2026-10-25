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
  const [atmRoute] = useState(projects[1]); // ATM Route Optimizer
  const [cramroom] = useState(projects[2]); // CramRoom
  const [codemaster] = useState(projects[3]); // CodeMaster

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
              Full-scale architectural breakdowns of concurrency-guarded backends, heuristic optimization algorithms, and compiler-level diagnostic engines.
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
        <div className="w-full bg-surface-container-low rounded-lg p-space-md lg:p-space-xl mb-12 relative overflow-hidden group shadow-xl border border-outline-variant/30">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-secondary-container/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row gap-space-xl items-start relative z-10">
            {/* Exhibit Left: Specs & Technical Deep-Dive */}
            <div className="w-full lg:w-7/12 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-space-xs mb-space-sm">
                  <span className="px-space-xs py-0.5 bg-surface-container-highest text-secondary font-label-sm text-label-sm uppercase tracking-wider rounded font-bold">
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
                <p className="font-body-lg text-body-lg text-on-surface mt-space-sm mb-space-md font-['Geist']">
                  Backend-oriented payment transaction engine architected with C++ mutex locks, atomic synchronization guards, and strict ACID database properties.
                </p>

                {/* Technical Challenge / Approach Callout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm my-space-md">
                  <div className="bg-surface-container p-space-sm rounded border border-outline-variant/30">
                    <span className="font-label-sm text-label-sm text-secondary uppercase block mb-1 font-bold">
                      The Challenge
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Mitigating race conditions, double-spend vulnerabilities, and database deadlocks during simultaneous multi-user payment invocations.
                    </p>
                  </div>
                  <div className="bg-surface-container p-space-sm rounded border border-outline-variant/30">
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

                <div className="px-space-md py-space-xs bg-surface-container text-secondary font-label-md text-label-md uppercase tracking-wider rounded flex items-center gap-space-xs border border-secondary/30">
                  <span className="material-symbols-outlined text-[14px]">lock</span>
                  <span>ACID Guaranteed</span>
                </div>
              </div>
            </div>

            {/* Exhibit Right: Architecture Mockup / Telemetry Visualization */}
            <div className="w-full lg:w-5/12 bg-surface-container-lowest rounded-lg p-space-md shadow-2xl flex flex-col gap-space-sm border border-outline-variant/40">
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
            FLAGSHIP EXHIBIT 02: ATM ROUTE OPTIMIZER (C++ FLEET DISPATCHING)
            ========================================================================= */}
        <div className="w-full bg-surface-container-low rounded-lg p-space-md lg:p-space-xl mb-12 relative overflow-hidden group shadow-xl border border-outline-variant/30">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-secondary-container/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row gap-space-xl items-start relative z-10">
            {/* Exhibit Left: Specs & Technical Deep-Dive */}
            <div className="w-full lg:w-7/12 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-space-xs mb-space-sm">
                  <span className="px-space-xs py-0.5 bg-surface-container-highest text-secondary font-label-sm text-label-sm uppercase tracking-wider rounded font-bold">
                    EXHIBIT 02 // FLEET LOGISTICS & C++ OPTIMIZATION
                  </span>
                  <span className="font-label-sm text-label-sm text-outline tracking-widest">
                    REF: OPS-ARO-5012
                  </span>
                  <span className="ml-auto font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-space-xs py-0.5 rounded">
                    STATUS: VERIFIED REPOSITORY
                  </span>
                </div>

                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-['Bodoni_Moda']">
                  ATM Route Optimizer — Fleet Logistics Engine
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface mt-space-sm mb-space-md font-['Geist']">
                  End-to-end cash replenishment platform monitoring 100+ ATM fleets and automating high-priority routes under an INR 50L cash constraint with high-performance C++ dispatching.
                </p>

                {/* Technical Challenge / Approach Callout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm my-space-md">
                  <div className="bg-surface-container p-space-sm rounded border border-outline-variant/30">
                    <span className="font-label-sm text-label-sm text-secondary uppercase block mb-1 font-bold">
                      The Challenge
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Managing ATM cash logistics across 100+ machines is prone to frequent machine downtime, cash-out incidents, and inefficient truck dispatching under strict cash-in-transit capital constraints (INR 50L ceiling).
                    </p>
                  </div>
                  <div className="bg-surface-container p-space-sm rounded border border-outline-variant/30">
                    <span className="font-label-sm text-label-sm text-secondary uppercase block mb-1 font-bold">
                      Engineering Approach
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Constructed a high-performance C++ backend that identifies critical ATMs by cash-burn velocity and optimizes truck cash payloads under tight capacity ceilings.
                    </p>
                  </div>
                </div>

                {/* Stack Tags */}
                <div className="flex flex-wrap gap-space-xs my-space-md">
                  {atmRoute.technologies.map((tech) => (
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
                  onClick={() => handleProjectClick(atmRoute)}
                  className="px-space-md py-space-xs bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider rounded hover:bg-primary-fixed transition-all flex items-center gap-space-xs font-bold cursor-pointer"
                >
                  <span>View Architecture Case Study</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </button>

                <a
                  href={atmRoute.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-space-md py-space-xs bg-surface-container text-on-surface font-label-md text-label-md uppercase tracking-wider rounded hover:bg-surface-container-high transition-all flex items-center gap-space-xs"
                >
                  <span className="material-symbols-outlined text-[14px]">terminal</span>
                  <span>GitHub Repository</span>
                </a>

                <div className="px-space-md py-space-xs bg-surface-container text-secondary font-label-md text-label-md uppercase tracking-wider rounded flex items-center gap-space-xs border border-secondary/30">
                  <span className="material-symbols-outlined text-[14px]">local_shipping</span>
                  <span>INR 50L Cap Enforced</span>
                </div>
              </div>
            </div>

            {/* Exhibit Right: Architecture Mockup / Telemetry Visualization */}
            <div className="w-full lg:w-5/12 bg-surface-container-lowest rounded-lg p-space-md shadow-2xl flex flex-col gap-space-sm border border-outline-variant/40">
              <div className="flex items-center justify-between pb-space-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary-container" />
                  <span className="w-2.5 h-2.5 rounded-full bg-surface-container-high" />
                  <span className="w-2.5 h-2.5 rounded-full bg-surface-container-high" />
                  <span className="font-label-sm text-label-sm text-outline ml-2">
                    atm-fleet-dispatcher-cpp
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-secondary font-bold">
                  FLEET: 100+ ATMS (OPTIMIZED)
                </span>
              </div>

              {/* Live SVG Performance Sparkline & Ingestion Chart */}
              <div className="bg-surface-container-low p-space-sm rounded">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                    CASH AVAILABILITY & FLEET UPTIME
                  </span>
                  <span className="font-label-sm text-label-sm text-primary font-bold">
                    99.4% RETENTION
                  </span>
                </div>
                <svg className="w-full h-24 text-secondary-container" fill="none" viewBox="0 0 300 80">
                  <path
                    d="M0,60 L30,55 L60,45 L90,52 L120,35 L150,38 L180,22 L210,25 L240,15 L270,12 L300,10"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d="M0,60 L30,55 L60,45 L90,52 L120,35 L150,38 L180,22 L210,25 L240,15 L270,12 L300,10 L300,80 L0,80 Z"
                    fill="currentColor"
                    fillOpacity="0.12"
                  />
                  <circle cx="270" cy="12" fill="#ff9991" r="3" />
                </svg>
                <div className="flex justify-between text-outline font-label-sm text-label-sm mt-1">
                  <span>UNOPTIMIZED</span>
                  <span>HEURISTIC DISPATCH</span>
                  <span className="text-secondary font-bold">INR 48.6L LOADED</span>
                </div>
              </div>

              {/* Terminal Telemetry Log Output */}
              <div className="bg-surface-container p-space-sm rounded font-label-sm text-label-sm text-on-surface-variant flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="text-secondary">[KNAPSACK: CONSTRAINED]</span>
                  <span className="text-outline">CAPITAL: INR 50L</span>
                </div>
                <div className="text-outline truncate font-mono">
                  &gt;&gt; critical_nodes_flagged: 14 ATMs prioritized for immediate run
                </div>
                <div className="text-outline truncate font-mono">
                  &gt;&gt; route_dispatch_latency: sub-12ms heuristic dispatch generation
                </div>
                <div className="text-on-secondary-container flex items-center gap-1 font-mono">
                  <span className="inline-block w-1 h-3 bg-secondary animate-pulse" />
                  <span>DISPATCH_ROUTE: COMMITTED // 100+ ATMS SERVICED</span>
                </div>
              </div>

              {/* Interactive Vector Canvas Topology Diagram */}
              <div className="relative w-full h-36 rounded overflow-hidden bg-surface-container flex items-center justify-center p-2 border border-outline-variant/30">
                <svg className="w-full h-full text-secondary" viewBox="0 0 280 100" fill="none">
                  <path d="M30,70 L80,30 L140,55 L200,25 L250,60" stroke="#8a191a" strokeWidth="2" strokeDasharray="4 3" />
                  <path d="M80,30 L110,80 L180,75 L250,60" stroke="#ff9991" strokeWidth="1.5" opacity="0.6" />
                  <circle cx="30" cy="70" r="6" fill="#8f1d1d" />
                  <text x="30" y="86" fill="#e5e2e1" fontSize="8" fontFamily="monospace" textAnchor="middle">DEPOT (50L)</text>
                  <circle cx="80" cy="30" r="5" fill="#e4e2dc" />
                  <text x="80" y="21" fill="#ff9991" fontSize="8" fontFamily="monospace" textAnchor="middle">ATM-04 [CRIT]</text>
                  <circle cx="140" cy="55" r="4.5" fill="#8f1d1d" />
                  <text x="140" y="47" fill="#c7c7bf" fontSize="8" fontFamily="monospace" textAnchor="middle">ATM-19</text>
                  <circle cx="200" cy="25" r="5" fill="#e4e2dc" />
                  <text x="200" y="16" fill="#ff9991" fontSize="8" fontFamily="monospace" textAnchor="middle">ATM-62 [HIGH]</text>
                  <circle cx="110" cy="80" r="4" fill="#8f1d1d" opacity="0.8" />
                  <circle cx="180" cy="75" r="4" fill="#8f1d1d" opacity="0.8" />
                  <circle cx="250" cy="60" r="5" fill="#e4e2dc" />
                  <text x="250" y="75" fill="#c7c7bf" fontSize="8" fontFamily="monospace" textAnchor="middle">ATM-88</text>
                </svg>
                <div className="absolute bottom-2 left-2 font-label-sm text-label-sm text-primary bg-surface-container-lowest/80 px-1.5 py-0.5 rounded">
                  TOPOLOGY // FLEET ROUTE DISPATCH TRAJECTORIES
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            FLAGSHIP EXHIBIT 03: CRAMROOM (FULL-STACK COLLABORATIVE & AI)
            ========================================================================= */}
        <div className="w-full bg-surface-container-low rounded-lg p-space-md lg:p-space-xl mb-12 relative overflow-hidden group shadow-xl border border-outline-variant/30">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-secondary-container/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row gap-space-xl items-start relative z-10">
            {/* Exhibit Left: Specs & Technical Deep-Dive */}
            <div className="w-full lg:w-7/12 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-space-xs mb-space-sm">
                  <span className="px-space-xs py-0.5 bg-surface-container-highest text-secondary font-label-sm text-label-sm uppercase tracking-wider rounded font-bold">
                    EXHIBIT 03 // FULL-STACK COLLABORATIVE & AI
                  </span>
                  <span className="font-label-sm text-label-sm text-outline tracking-widest">
                    REF: AI-CR-4402
                  </span>
                  <span className="ml-auto font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-space-xs py-0.5 rounded">
                    STATUS: ACTIVE PLATFORM
                  </span>
                </div>

                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-['Bodoni_Moda']">
                  CramRoom — Collaborative Exam Prep Platform
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface mt-space-sm mb-space-md font-['Geist']">
                  Full-stack collaborative exam-preparation platform with time-bound sessions and batched PostgreSQL queries slashing database round-trips by 60%.
                </p>

                {/* Technical Challenge / Approach Callout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm my-space-md">
                  <div className="bg-surface-container p-space-sm rounded border border-outline-variant/30">
                    <span className="font-label-sm text-label-sm text-secondary uppercase block mb-1 font-bold">
                      The Challenge
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Exam preparation groups lack synchronized study environments with time-bound milestones, centralized question archives, and efficient question analysis under peak concurrent load.
                    </p>
                  </div>
                  <div className="bg-surface-container p-space-sm rounded border border-outline-variant/30">
                    <span className="font-label-sm text-label-sm text-secondary uppercase block mb-1 font-bold">
                      Engineering Approach
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Constructed a stateless Node.js/Express backend with asynchronous event handling and query batching that slashed DB round-trips by 60%.
                    </p>
                  </div>
                </div>

                {/* Stack Tags */}
                <div className="flex flex-wrap gap-space-xs my-space-md">
                  {cramroom.technologies.map((tech) => (
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
                  onClick={() => handleProjectClick(cramroom)}
                  className="px-space-md py-space-xs bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider rounded hover:bg-primary-fixed transition-all flex items-center gap-space-xs font-bold cursor-pointer"
                >
                  <span>View Architecture Case Study</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </button>

                <a
                  href={cramroom.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-space-md py-space-xs bg-surface-container text-on-surface font-label-md text-label-md uppercase tracking-wider rounded hover:bg-surface-container-high transition-all flex items-center gap-space-xs"
                >
                  <span className="material-symbols-outlined text-[14px]">terminal</span>
                  <span>GitHub Repository</span>
                </a>

                <div className="px-space-md py-space-xs bg-surface-container text-secondary font-label-md text-label-md uppercase tracking-wider rounded flex items-center gap-space-xs border border-secondary/30">
                  <span className="material-symbols-outlined text-[14px]">trending_down</span>
                  <span>-60% DB Latency</span>
                </div>
              </div>
            </div>

            {/* Exhibit Right: Architecture Mockup / Telemetry Visualization */}
            <div className="w-full lg:w-5/12 bg-surface-container-lowest rounded-lg p-space-md shadow-2xl flex flex-col gap-space-sm border border-outline-variant/40">
              <div className="flex items-center justify-between pb-space-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary-container" />
                  <span className="w-2.5 h-2.5 rounded-full bg-surface-container-high" />
                  <span className="w-2.5 h-2.5 rounded-full bg-surface-container-high" />
                  <span className="font-label-sm text-label-sm text-outline ml-2">
                    cramroom-query-batcher
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-secondary font-bold">
                  POSTGRES: BATCH ACTIVE
                </span>
              </div>

              {/* Live SVG Performance Sparkline & Ingestion Chart */}
              <div className="bg-surface-container-low p-space-sm rounded">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                    DATABASE QUERY ROUND-TRIPS
                  </span>
                  <span className="font-label-sm text-label-sm text-primary font-bold">
                    -60% NETWORK CUT
                  </span>
                </div>
                <svg className="w-full h-24 text-secondary-container" fill="none" viewBox="0 0 300 80">
                  <path
                    d="M0,20 L30,22 L60,25 L90,28 L120,68 L150,65 L180,72 L210,70 L240,75 L270,72 L300,74"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d="M0,20 L30,22 L60,25 L90,28 L120,68 L150,65 L180,72 L210,70 L240,75 L270,72 L300,74 L300,80 L0,80 Z"
                    fill="currentColor"
                    fillOpacity="0.12"
                  />
                  <circle cx="120" cy="68" fill="#ff9991" r="3" />
                </svg>
                <div className="flex justify-between text-outline font-label-sm text-label-sm mt-1">
                  <span>UNBATCHED: 240 RTT</span>
                  <span>QUERY BATCHING INITIATED</span>
                  <span className="text-secondary font-bold">BATCHED: 12 RTT</span>
                </div>
              </div>

              {/* Terminal Telemetry Log Output */}
              <div className="bg-surface-container p-space-sm rounded font-label-sm text-label-sm text-on-surface-variant flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="text-secondary">[POSTGRESQL: OPTIMIZED]</span>
                  <span className="text-outline">ROOMS: 48 ACTIVE</span>
                </div>
                <div className="text-outline truncate font-mono">
                  &gt;&gt; query_batcher_worker: consolidated 240 select queries into 12 batch TXs
                </div>
                <div className="text-outline truncate font-mono">
                  &gt;&gt; round_trip_reduction: -60.4% network latency improvement verified
                </div>
                <div className="text-on-secondary-container flex items-center gap-1 font-mono">
                  <span className="inline-block w-1 h-3 bg-secondary animate-pulse" />
                  <span>STATELESS_SYNC: NOMINAL // ZERO EVENT DRIFT</span>
                </div>
              </div>

              {/* Visual preview asset */}
              <div className="relative w-full h-36 rounded overflow-hidden">
                <img
                  className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  alt="CramRoom Architecture Topology"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7vFMdJx_cREdqJIyqVDMKC_ElLPoIL46aJzq4d5Wf66lGjD5sO6S50sDpIdFQXdUd2FT0GMHyTlsJCHhgPs8y7WCZMEH1Cr689zOxxdR5PJTT7aUWWlUD6FMRb7N1ox-fdexzX5QnbYzMknAtqXT0RYt6wW5REGbfaBA7j1eSxYhj6KoYAHi1ilRxhotn7TJDLWh8uTM35OLVRqz1sn5B_lqgTiDTbIl18E8SVuidGGkZEIghriVjIA"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 font-label-sm text-label-sm text-primary bg-surface-container-lowest/80 px-1.5 py-0.5 rounded">
                  TOPOLOGY // COLLABORATIVE EXAM ARCHITECTURE
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            FLAGSHIP EXHIBIT 04: CODEMASTER (C99 COMPILERS & DATA STRUCTURES)
            ========================================================================= */}
        <div className="w-full bg-surface-container-low rounded-lg p-space-md lg:p-space-xl mb-16 relative overflow-hidden group shadow-xl border border-outline-variant/30">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-secondary-container/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row gap-space-xl items-start relative z-10">
            {/* Exhibit Left: Specs & Technical Deep-Dive */}
            <div className="w-full lg:w-7/12 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-space-xs mb-space-sm">
                  <span className="px-space-xs py-0.5 bg-surface-container-highest text-secondary font-label-sm text-label-sm uppercase tracking-wider rounded font-bold">
                    EXHIBIT 04 // COMPILERS & DATA STRUCTURES
                  </span>
                  <span className="font-label-sm text-label-sm text-outline tracking-widest">
                    REF: SYS-CM-1994
                  </span>
                  <span className="ml-auto font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-space-xs py-0.5 rounded">
                    STATUS: OPEN SOURCE TOOL
                  </span>
                </div>

                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-['Bodoni_Moda']">
                  CodeMaster — C Code Analyzer & Symbol Browser
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface mt-space-sm mb-space-md font-['Geist']">
                  Zero-dependency C99 static analysis engine with hand-crafted AST, custom Trie, AVL Tree, Max-Heap, and sub-30ms execution speed.
                </p>

                {/* Technical Challenge / Approach Callout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm my-space-md">
                  <div className="bg-surface-container p-space-sm rounded border border-outline-variant/30">
                    <span className="font-label-sm text-label-sm text-secondary uppercase block mb-1 font-bold">
                      The Challenge
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Parsing arbitrary C99 source trees, identifying dead code, and preventing stack overflow in deep recursive call-graphs without any external runtime dependencies.
                    </p>
                  </div>
                  <div className="bg-surface-container p-space-sm rounded border border-outline-variant/30">
                    <span className="font-label-sm text-label-sm text-secondary uppercase block mb-1 font-bold">
                      Engineering Approach
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Authored a zero-dependency C99 lexer/parser with custom data structures and DFS graph diagnostics across 29+ functions and 65+ call edges.
                    </p>
                  </div>
                </div>

                {/* Stack Tags */}
                <div className="flex flex-wrap gap-space-xs my-space-md">
                  {codemaster.technologies.map((tech) => (
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
                  onClick={() => handleProjectClick(codemaster)}
                  className="px-space-md py-space-xs bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider rounded hover:bg-primary-fixed transition-all flex items-center gap-space-xs font-bold cursor-pointer"
                >
                  <span>View Architecture Case Study</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </button>

                <a
                  href={codemaster.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-space-md py-space-xs bg-surface-container text-on-surface font-label-md text-label-md uppercase tracking-wider rounded hover:bg-surface-container-high transition-all flex items-center gap-space-xs"
                >
                  <span className="material-symbols-outlined text-[14px]">terminal</span>
                  <span>GitHub Repository</span>
                </a>

                <div className="px-space-md py-space-xs bg-surface-container text-secondary font-label-md text-label-md uppercase tracking-wider rounded flex items-center gap-space-xs border border-secondary/30">
                  <span className="material-symbols-outlined text-[14px]">speed</span>
                  <span>&lt;30ms Latency</span>
                </div>
              </div>
            </div>

            {/* Exhibit Right: Architecture Mockup / Telemetry Visualization */}
            <div className="w-full lg:w-5/12 bg-surface-container-lowest rounded-lg p-space-md shadow-2xl flex flex-col gap-space-sm border border-outline-variant/40">
              <div className="flex items-center justify-between pb-space-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary-container" />
                  <span className="w-2.5 h-2.5 rounded-full bg-surface-container-high" />
                  <span className="w-2.5 h-2.5 rounded-full bg-surface-container-high" />
                  <span className="font-label-sm text-label-sm text-outline ml-2">
                    codemaster-ast-recursion-analyzer
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-secondary font-bold">
                  DFS: 65+ EDGES MAPPED
                </span>
              </div>

              {/* Live SVG Performance Sparkline & Ingestion Chart */}
              <div className="bg-surface-container-low p-space-sm rounded">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                    DIAGNOSTIC EXECUTION LATENCY
                  </span>
                  <span className="font-label-sm text-label-sm text-primary font-bold">
                    24.2 ms PROFILE
                  </span>
                </div>
                <svg className="w-full h-24 text-secondary-container" fill="none" viewBox="0 0 300 80">
                  <path
                    d="M0,15 L25,18 L50,14 L75,16 L100,12 L125,20 L150,15 L175,22 L200,18 L225,20 L250,24 L275,21 L300,24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d="M0,15 L25,18 L50,14 L75,16 L100,12 L125,20 L150,15 L175,22 L200,18 L225,20 L250,24 L275,21 L300,24 L300,80 L0,80 Z"
                    fill="currentColor"
                    fillOpacity="0.12"
                  />
                  <circle cx="275" cy="21" fill="#ff9991" r="3" />
                </svg>
                <div className="flex justify-between text-outline font-label-sm text-label-sm mt-1">
                  <span>LEXER & PARSER</span>
                  <span>TRIE & AVL BUILD</span>
                  <span className="text-secondary font-bold">&lt;30ms ALL 8 CLASSES</span>
                </div>
              </div>

              {/* Terminal Telemetry Log Output */}
              <div className="bg-surface-container p-space-sm rounded font-label-sm text-label-sm text-on-surface-variant flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="text-secondary">[C99_AST: ZERO_DEPENDENCIES]</span>
                  <span className="text-outline">FUNCTIONS: 29+</span>
                </div>
                <div className="text-outline truncate font-mono">
                  &gt;&gt; avl_symbol_table: balanced search tree lookup depth: O(log N)
                </div>
                <div className="text-outline truncate font-mono">
                  &gt;&gt; recursion_detector: DFS identified 0 cycle deadlocks across 65+ edges
                </div>
                <div className="text-on-secondary-container flex items-center gap-1 font-mono">
                  <span className="inline-block w-1 h-3 bg-secondary animate-pulse" />
                  <span>DIAGNOSTIC_PASS: COMPLETE // TIME: 24.2ms</span>
                </div>
              </div>

              {/* Visual preview asset */}
              <div className="relative w-full h-36 rounded overflow-hidden">
                <img
                  className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  alt="CodeMaster Call Graph Topology"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGeGbLXjFdkliUUb-nK-21CtP-rApDdWIG-wvBMy_MbSmn5D_8WN2_A7Cy8VqNDRDatPjA6vw7YjBmK40TRIIobvK9huEWudfiN-u2JLDltdaaXAV2xyt_uC_P4gQDC4eySoc6oRcYuhNYCK9PdM6r7DTOu4i9_ahNJcATHM4VBYKS1w2pyvLKRKn2N0eNl-q0rsynoVMn58u8aUzK9EYTexuTu812LUSpdLIhctpDTGlXdUj8TQOXNQ"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 font-label-sm text-label-sm text-primary bg-surface-container-lowest/80 px-1.5 py-0.5 rounded">
                  TOPOLOGY // DFS CALL-GRAPH RECURSION VISUALIZER
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PREMIER ACHIEVEMENTS COMMAND CENTER (LEETCODE & HACKATHON REPUTATION)
            ========================================================================= */}
        <div id="scene-04-achievements-vault" className="w-full bg-surface-container-low rounded-xl p-space-md lg:p-space-xl mb-16 relative overflow-hidden border border-outline-variant/40 shadow-2xl">
          {/* Subtle Ambient Background Flare */}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-secondary-container/15 rounded-full blur-[120px] pointer-events-none" />

          {/* Section Eyebrow Header */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-surface-container-highest mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="font-mono text-[11px] uppercase tracking-widest text-secondary font-bold">
                  EVIDENTIARY MERIT // VERIFIED TRACK RECORD
                </span>
                <span className="font-mono text-[11px] text-outline">[SECURITY_CLEARANCE: L5]</span>
              </div>
              <h2 className="font-['Bodoni_Moda'] text-2xl sm:text-3xl lg:text-4xl text-primary font-bold tracking-tight">
                Algorithmic Dominance & Hackathon Championship
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded bg-surface-container-highest font-mono text-[11px] text-secondary font-bold uppercase tracking-wider border border-secondary/30">
                1800+ RATING // 8+ HACKATHONS
              </span>
            </div>
          </div>

          {/* Dual Power Columns: LeetCode Arena vs Hackathon Arena */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            {/* LEFT WING: LEETCODE COMPETITIVE PROGRAMMING (7 COLS) */}
            <div className="lg:col-span-7 bg-surface-container-lowest p-6 rounded-lg border border-outline-variant/50 flex flex-col justify-between shadow-xl">
              <div>
                {/* Header ribbon */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-surface-container-highest/60 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      terminal
                    </span>
                    <span className="font-mono text-[12px] font-bold text-on-surface uppercase tracking-wider">
                      LEETCODE COMPETITIVE ARENA
                    </span>
                  </div>
                  <a
                    href="https://leetcode.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] text-secondary hover:text-primary transition-colors flex items-center gap-1"
                  >
                    <span>[VERIFIED RATING]</span>
                    <span className="material-symbols-outlined text-[12px]">open_in_new</span>
                  </a>
                </div>

                {/* Hero Stat Numbers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-surface-container p-4 rounded border-l-4 border-secondary flex flex-col justify-between">
                    <span className="font-mono text-[11px] text-outline uppercase tracking-wider block mb-1">
                      TOTAL PROBLEMS SOLVED
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-3xl sm:text-4xl text-primary font-extrabold tracking-tight">
                        640+
                      </span>
                      <span className="font-mono text-[12px] text-secondary font-semibold">
                        TOP PERCENTILE
                      </span>
                    </div>
                    <span className="font-['Geist'] text-[12px] text-on-surface-variant mt-1.5">
                      Demonstrated mastery in Graph Algorithms, 2D Dynamic Programming, and Concurrency.
                    </span>
                  </div>

                  <div className="bg-surface-container p-4 rounded border-l-4 border-primary flex flex-col justify-between">
                    <span className="font-mono text-[11px] text-outline uppercase tracking-wider block mb-1">
                      CONTEST RATING
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-3xl sm:text-4xl text-secondary font-extrabold tracking-tight">
                        1800+
                      </span>
                      <span className="font-mono text-[12px] text-primary font-semibold">
                        KNIGHT BRACKET
                      </span>
                    </div>
                    <span className="font-['Geist'] text-[12px] text-on-surface-variant mt-1.5">
                      Consistent competitive performance against thousands of global engineering candidates.
                    </span>
                  </div>
                </div>

                {/* Granular Problem Difficulty Breakdown Tiles */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-surface-container p-3 rounded text-center border border-outline-variant/30">
                    <span className="font-mono text-[10px] text-outline uppercase block mb-1">
                      EASY
                    </span>
                    <span className="font-mono text-xl text-primary font-bold">220+</span>
                    <span className="font-['Geist'] text-[10px] text-on-surface-variant block mt-0.5">
                      Foundations & Strings
                    </span>
                  </div>
                  <div className="bg-surface-container p-3 rounded text-center border border-outline-variant/30">
                    <span className="font-mono text-[10px] text-secondary uppercase font-bold block mb-1">
                      MEDIUM
                    </span>
                    <span className="font-mono text-xl text-secondary font-bold">340+</span>
                    <span className="font-['Geist'] text-[10px] text-on-surface-variant block mt-0.5">
                      Graphs, Heaps & DP
                    </span>
                  </div>
                  <div className="bg-surface-container p-3 rounded text-center border border-outline-variant/30">
                    <span className="font-mono text-[10px] text-primary uppercase font-bold block mb-1">
                      HARD
                    </span>
                    <span className="font-mono text-xl text-primary font-bold">80+</span>
                    <span className="font-['Geist'] text-[10px] text-on-surface-variant block mt-0.5">
                      Advanced Trees & Flow
                    </span>
                  </div>
                </div>

                {/* Algorithmic Proficiency Meters */}
                <div className="space-y-3 mb-6">
                  <div>
                    <div className="flex justify-between font-mono text-[11px] mb-1">
                      <span className="text-on-surface font-semibold">Graph Algorithms (DFS, BFS, Dijkstra, TopoSort)</span>
                      <span className="text-secondary font-bold">99% Proficient</span>
                    </div>
                    <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                      <div className="bg-secondary h-full rounded-full w-[99%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-mono text-[11px] mb-1">
                      <span className="text-on-surface font-semibold">Dynamic Programming (Knapsack, Subsequence, 2D State)</span>
                      <span className="text-secondary font-bold">1800+ Contest Level</span>
                    </div>
                    <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                      <div className="bg-secondary h-full rounded-full w-[92%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-mono text-[11px] mb-1">
                      <span className="text-on-surface font-semibold">Custom Trees, Heaps & Trie (C99 Hand-Implemented)</span>
                      <span className="text-primary font-bold">Production Validated</span>
                    </div>
                    <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full w-[95%]" />
                    </div>
                  </div>
                </div>

                {/* Visual Consistency Heatmap Grid Matrix (Simulated 52 Weeks) */}
                <div className="bg-surface-container p-3 rounded border border-outline-variant/30">
                  <div className="flex justify-between items-center mb-2 font-mono text-[10px] text-outline">
                    <span>DAILY RELENTLESS PRACTICE GRID</span>
                    <span className="text-secondary font-bold">ACTIVE CONTINUOUS STREAK</span>
                  </div>
                  <div className="grid grid-cols-24 gap-1 h-10 w-full overflow-hidden">
                    {Array.from({ length: 96 }).map((_, i) => {
                      const intensities = ['bg-surface-container-highest', 'bg-secondary/40', 'bg-secondary/70', 'bg-secondary'];
                      const intensity = intensities[Math.floor((Math.sin(i * 1.3) + 1) * 1.8) % 4];
                      return (
                        <div
                          key={i}
                          className={`rounded-[1px] w-full h-full ${intensity} hover:scale-125 transition-transform`}
                          title={`Algorithmic session: ${i + 1}`}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT WING: HACKATHON CHAMPIONSHIP & ACADEMIC MERIT (5 COLS) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Card 1: Hack4Delhi Finalist Ribbon */}
              <div className="bg-surface-container-lowest p-6 rounded-lg border-2 border-secondary/50 flex flex-col justify-between shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 px-3 py-1 bg-secondary text-on-secondary-container font-mono text-[10px] font-bold uppercase tracking-widest rounded-bl">
                  CHAMPIONSHIP SPRINT
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-secondary text-[26px]">
                      emoji_events
                    </span>
                    <span className="font-mono text-[11px] text-outline uppercase font-semibold">
                      NSUT DELHI // HACKATHON
                    </span>
                  </div>

                  <h3 className="font-['Bodoni_Moda'] text-xl text-primary font-bold mb-2">
                    Hack4Delhi Finalist — NSUT, Delhi
                  </h3>

                  <p className="font-['Geist'] text-[13px] text-on-surface-variant leading-relaxed mb-4">
                    Selected as <strong className="text-secondary font-semibold">Finalist</strong> among premier university engineering teams across Delhi-NCR. Designed and delivered a working production system under live 36-hour hackathon constraints.
                  </p>

                  <div className="bg-surface-container p-3 rounded border border-outline-variant/40 mb-4">
                    <span className="font-mono text-[10px] text-secondary uppercase font-bold block mb-1">
                      DELIVERABLE: MULTIMODAL MISINFORMATION AI
                    </span>
                    <p className="font-['Geist'] text-[12px] text-on-surface-variant">
                      Constructed an AI pipeline integrating <strong className="text-primary font-medium">BERT</strong> language models, <strong className="text-primary font-medium">Tesseract OCR</strong> image extraction, and <strong className="text-primary font-medium">FastAPI</strong> microservices for real-time article verification.
                    </p>
                  </div>

                  {/* Hackathon Veteran Badge Strip */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-surface-container p-2.5 rounded text-center">
                      <span className="font-mono text-[10px] text-outline uppercase block">
                        SPRINT RESILIENCE
                      </span>
                      <span className="font-mono text-lg text-primary font-bold">8+</span>
                      <span className="font-['Geist'] text-[10px] text-on-surface-variant block">
                        Hackathons Competed
                      </span>
                    </div>
                    <div className="bg-surface-container p-2.5 rounded text-center">
                      <span className="font-mono text-[10px] text-outline uppercase block">
                        INFERENCE LATENCY
                      </span>
                      <span className="font-mono text-lg text-secondary font-bold">&lt;120ms</span>
                      <span className="font-['Geist'] text-[10px] text-on-surface-variant block">
                        FastAPI Sub-Second
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Academic Distinction & CS Foundations */}
              <div className="bg-surface-container-lowest p-6 rounded-lg border border-outline-variant/50 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-surface-container-highest/60 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        school
                      </span>
                      <span className="font-mono text-[11px] font-bold text-on-surface uppercase tracking-wider">
                        ACADEMIC EXCELLENCE
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-secondary font-bold">
                      CGPA: 8.78
                    </span>
                  </div>

                  <h4 className="font-['Bodoni_Moda'] text-lg text-primary font-bold mb-1">
                    B.Tech Computer Science & Engineering
                  </h4>
                  <p className="font-['Geist'] text-[12px] text-outline mb-3 font-mono">
                    Graphic Era Hill University, Dehradun · 2024 — 2028
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                    <div className="bg-surface-container px-2.5 py-1.5 rounded flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span className="text-on-surface">Operating Systems</span>
                    </div>
                    <div className="bg-surface-container px-2.5 py-1.5 rounded flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span className="text-on-surface">DBMS & ACID SQL</span>
                    </div>
                    <div className="bg-surface-container px-2.5 py-1.5 rounded flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span className="text-on-surface">Computer Networks</span>
                    </div>
                    <div className="bg-surface-container px-2.5 py-1.5 rounded flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span className="text-on-surface">Concurrency Design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER TRANSITION CALLOUT (SCENE 04 -> 05) */}
        <button
          type="button"
          onClick={onProceedToCapabilities}
          className="w-full bg-surface-container p-space-lg rounded-lg flex flex-col md:flex-row items-center justify-between gap-space-md hover:bg-surface-container-high transition-all group text-left cursor-pointer border border-outline-variant/30"
        >
          <div className="flex flex-col text-center md:text-left">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-1 font-bold">
              PROCEED TO NEXT FILE // SECTION 03
            </span>
            <span className="font-headline-md text-headline-md text-primary group-hover:text-secondary transition-colors font-['Bodoni_Moda']">
              EXPLORE CAPABILITIES MATRIX & TIMELINE
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 font-['Geist']">
              Complete taxonomy of languages, frameworks, substrates, and verified chronological service records.
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
