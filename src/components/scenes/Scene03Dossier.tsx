import React from 'react';
import { useAudio } from '../../hooks/useAudio';

interface Scene03DossierProps {
  onProceedToEvidence: () => void;
  onOpenResumeModal: () => void;
}

export const Scene03Dossier: React.FC<Scene03DossierProps> = ({
  onProceedToEvidence,
  onOpenResumeModal,
}) => {
  const { playSFX } = useAudio();

  const handleEvidenceClick = () => {
    playSFX('button_click', 0.6);
    onProceedToEvidence();
  };

  const handleResumeClick = () => {
    playSFX('paper_rustle', 0.7);
    onOpenResumeModal();
  };

  return (
    <section
      id="scene-03-case-file-dossier"
      className="w-full min-h-screen bg-surface-container-lowest relative pt-16 pb-24 overflow-hidden select-none"
    >
      {/* ATMOSPHERIC SPOTLIGHT BACKGROUND LAYER */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Overhead tactical spotlight beam */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[750px] bg-gradient-to-b from-primary/10 via-primary/[0.03] to-transparent blur-[110px] rounded-full" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary-container/10 blur-[130px] rounded-full" />

        {/* Fine geometric crosshair markers */}
        <div className="absolute top-12 left-12 font-label-sm text-label-sm text-outline/30 tracking-widest hidden lg:block">
          + LAT: 37.7749 // LNG: -122.4194 // FOCUS_ZONE: SEC-4
        </div>
        <div className="absolute top-12 right-12 font-label-sm text-label-sm text-outline/30 tracking-widest hidden lg:block">
          SYS_INTEG: VALIDATED // ARCHIVE_REV: 04.99
        </div>
      </div>

      {/* DOSSIER CONTAINER CANVAS */}
      <div className="w-full max-w-6xl mx-auto px-margin-mobile lg:px-margin py-8 md:py-14 relative z-10 flex flex-col gap-8">
        {/* TOP CLASSIFICATION STATUS RIBBON */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-surface-container-highest/60">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary animate-ping" />
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                SECURITY OVERRIDE CONFIRMED
              </span>
              <span className="font-label-sm text-label-sm text-outline-variant">///</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                SERIAL: NR-8842-X
              </span>
            </div>
            <p className="font-headline-sm text-headline-sm text-primary uppercase tracking-tight">
              INVESTIGATION DOSSIER: SUBJECT_NR-001
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Stamp Indicator Badge */}
            <div className="px-3 py-1.5 bg-secondary-container/40 rounded-none border border-secondary/30 flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-secondary">
                verified_user
              </span>
              <span className="font-label-md text-label-md text-secondary tracking-widest uppercase font-bold">
                ACCESS GRANTED // LEVEL 4
              </span>
            </div>
            <div className="hidden sm:flex px-3 py-1.5 bg-surface-container rounded-none text-outline font-label-sm text-label-sm uppercase tracking-widest">
              ENC: 4096-SHA256
            </div>
          </div>
        </div>

        {/* MAIN DOSSIER FOLDER PRESENTATION (#141414 / surface-container-low style) */}
        <div className="relative bg-surface-container-low shadow-[0_30px_90px_rgba(0,0,0,0.85)] rounded-none p-4 sm:p-8 lg:p-10 transition-all duration-300">
          {/* FOLDER TAB STAMP */}
          <div className="absolute -top-7 left-4 sm:left-10 px-5 py-1.5 bg-surface-container-high text-on-surface font-label-md text-label-md tracking-widest uppercase flex items-center gap-2 shadow-md">
            <span className="material-symbols-outlined text-secondary text-[14px]">
              folder_open
            </span>
            <span>CASE FILE: NR-001 // CONFIDENTIAL</span>
          </div>

          {/* TACTILE CORNER CROSSHAIR ACCENTS */}
          <div className="absolute top-2 left-2 text-outline/30 font-label-sm select-none pointer-events-none">+</div>
          <div className="absolute top-2 right-2 text-outline/30 font-label-sm select-none pointer-events-none">+</div>
          <div className="absolute bottom-2 left-2 text-outline/30 font-label-sm select-none pointer-events-none">+</div>
          <div className="absolute bottom-2 right-2 text-outline/30 font-label-sm select-none pointer-events-none">+</div>

          {/* INSIDE THE FOLDER: 12-COLUMN ASYMMETRIC BENTO GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT WING: SUBJECT PROFILE CARD & PHOTO PRINT (5 COLS) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* PHYSICAL PHOTO PRINT CONTAINER (Paperclipped aesthetic) */}
              <div className="relative bg-surface-container-lowest p-3 shadow-2xl group">
                {/* Sleek Realistic Metallic Paperclip Element */}
                <div className="absolute -top-4 right-8 z-30 flex flex-col items-center pointer-events-none">
                  <div className="w-3.5 h-10 rounded-full border-2 border-outline-variant bg-gradient-to-b from-outline to-surface-container-highest shadow-md" />
                  <div className="w-1.5 h-6 -mt-8 rounded-full border border-primary/40 bg-surface-container-lowest" />
                </div>

                {/* Subject Mugshot / Editorial Print */}
                <div className="relative overflow-hidden aspect-[3/4] bg-surface-container-high">
                  <img
                    alt="Nitin Rawat Dossier Portrait"
                    className="w-full h-full object-cover object-top filter grayscale contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-500 ease-out"
                    src="/assets/blazer.jpg"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://lh3.googleusercontent.com/aida-public/AB6AXuDAJL992OfZ_kxa_wBWlQW6FpLQPMQ86V5eUEFpiAZ3PmsM60MN_bVFYa1OhtDGXiUszQZ85jE77jpHAOmyqfxYXAT6KlBu-YMNfSSSgsaD1cDvQGTtxgiYTv382Rzf1RW-2oRRZ7rSIvRuAvS42A2O5bmVj49v9xSWweKZQ2TYzNjVsRjV45f0l6D2DDqzqE2TgmImJv4b6y-1XMW0s72_U41XyP40v-GPSvwgiz5oJvNialbVbRd1Ag';
                    }}
                  />
                  {/* Subtle HUD Graticule on Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent pointer-events-none" />

                  {/* Reticle Target Lines */}
                  <div className="absolute top-4 left-4 font-label-sm text-label-sm text-primary/80 tracking-widest bg-surface-container-lowest/70 px-2 py-0.5">
                    ID: NR_RAWAT-01
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-primary/90 font-label-sm text-label-sm">
                    <span className="tracking-widest">[BIOMETRIC: MATCH]</span>
                    <span className="tracking-widest text-secondary font-bold">S_INDEX: 99.8%</span>
                  </div>
                </div>

                {/* Red Archival Rubber Stamp Graphic Overlay */}
                <div className="absolute -bottom-4 -right-2 sm:right-2 z-20 pointer-events-none transform -rotate-12">
                  <div className="px-4 py-2 bg-secondary-container/90 text-on-secondary-container border-2 border-secondary font-label-md text-label-md uppercase tracking-[0.2em] font-bold shadow-2xl backdrop-blur-sm">
                    ACCESS GRANTED // CLEARANCE 4
                  </div>
                </div>
              </div>

              {/* SUBJECT METRIC SUMMARY DOCKET */}
              <div className="bg-surface-container p-5 flex flex-col gap-3 shadow-inner">
                <div className="flex items-center justify-between pb-2 border-b border-surface-container-highest">
                  <span className="font-label-sm text-label-sm text-outline tracking-wider uppercase font-semibold">
                    DOCKET SPECIFICATION
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary tracking-widest">
                    NR-SEC: ALPHA
                  </span>
                </div>
                <dl className="flex flex-col gap-2.5 font-label-sm text-label-sm">
                  <div className="flex justify-between items-baseline gap-2">
                    <dt className="text-on-surface-variant uppercase tracking-wider">FULL NAME</dt>
                    <dd className="text-primary font-bold tracking-tight text-right">NITIN RAWAT</dd>
                  </div>
                  <div className="flex justify-between items-baseline gap-2">
                    <dt className="text-on-surface-variant uppercase tracking-wider">DESIGNATION</dt>
                    <dd className="text-primary tracking-tight text-right">SOFTWARE ENGINEER</dd>
                  </div>
                  <div className="flex justify-between items-baseline gap-2">
                    <dt className="text-on-surface-variant uppercase tracking-wider">SPECIALIZATION</dt>
                    <dd className="text-primary tracking-tight text-right">BACKEND, CONCURRENCY & DSA</dd>
                  </div>
                  <div className="flex justify-between items-start gap-2 pt-1 border-t border-surface-container-highest/60">
                    <dt className="text-secondary font-bold uppercase tracking-wider whitespace-nowrap">STATUS</dt>
                    <dd className="text-secondary font-bold tracking-tight text-right">
                      ACTIVELY SEEKING SWE INTERNSHIPS & ROLES
                    </dd>
                  </div>
                  <div className="flex justify-between items-baseline gap-2">
                    <dt className="text-on-surface-variant uppercase tracking-wider">EDUCATION</dt>
                    <dd className="text-on-surface tracking-tight text-right">B.TECH CSE (CGPA: 8.78)</dd>
                  </div>
                  <div className="flex justify-between items-baseline gap-2">
                    <dt className="text-on-surface-variant uppercase tracking-wider">PROBLEM SOLVING</dt>
                    <dd className="text-on-surface font-mono tracking-tight text-right text-primary">
                      LEETCODE 640+ (1800+ RATING)
                    </dd>
                  </div>
                  <div className="flex justify-between items-baseline gap-2">
                    <dt className="text-on-surface-variant uppercase tracking-wider">LOCATION</dt>
                    <dd className="text-on-surface tracking-tight text-right">DEHRADUN // OPEN FOR REMOTE & ON-SITE</dd>
                  </div>
                </dl>
              </div>

              {/* QUICK TELEMETRY MINI RADAR / BAR CHART */}
              <div className="bg-surface-container p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                    ALGORITHMIC RATING INDEX
                  </span>
                  <span className="font-label-sm text-label-sm text-primary font-bold">
                    1800+ CONTEST / 640+ SOLVED
                  </span>
                </div>
                {/* Tactical Sparkline SVG */}
                <div className="w-full h-8 flex items-center">
                  <svg className="w-full h-full text-secondary" fill="none" viewBox="0 0 280 32">
                    <path
                      d="M0 16 L35 16 L50 4 L65 28 L80 12 L95 18 L125 18 L140 2 L155 30 L170 16 L210 16 L225 8 L240 24 L255 16 L280 16"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.75"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* RIGHT WING: CAPABILITIES & EVIDENCE ARCHIVES (7 COLS) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* 1. KNOWN CAPABILITIES MEMO (Official typed document aesthetic) */}
              <div className="bg-surface-container p-6 relative flex flex-col gap-5 shadow-lg">
                <div className="flex items-center justify-between border-b border-surface-container-highest pb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      terminal
                    </span>
                    <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold">
                      MEMO: TECHNICAL CAPABILITIES MATRIX
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm text-outline">REF: SKILLS-V5</span>
                </div>

                {/* Structured Category Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Languages */}
                  <div className="bg-surface-container-low p-3.5 flex flex-col gap-2">
                    <div className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-secondary" />
                      LANGUAGES
                    </div>
                    <ul className="flex flex-col gap-1 font-label-sm text-label-sm text-on-surface">
                      <li className="flex items-center justify-between hover:text-primary">
                        <span>C / C++</span>
                        <span className="text-outline">SYS_CONCUR</span>
                      </li>
                      <li className="flex items-center justify-between hover:text-primary">
                        <span>Java</span>
                        <span className="text-outline">OOP_DESIGN</span>
                      </li>
                      <li className="flex items-center justify-between hover:text-primary">
                        <span>Python</span>
                        <span className="text-outline">AUTOMATION</span>
                      </li>
                      <li className="flex items-center justify-between hover:text-primary">
                        <span>TypeScript</span>
                        <span className="text-outline">TYPE_SAFE</span>
                      </li>
                      <li className="flex items-center justify-between hover:text-primary">
                        <span>SQL</span>
                        <span className="text-outline">ACID_STORE</span>
                      </li>
                    </ul>
                  </div>

                  {/* Systems & Stacks */}
                  <div className="bg-surface-container-low p-3.5 flex flex-col gap-2">
                    <div className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-primary" />
                      BACKEND & CORE
                    </div>
                    <ul className="flex flex-col gap-1 font-label-sm text-label-sm text-on-surface">
                      <li className="flex items-center justify-between hover:text-primary">
                        <span>Node / Express</span>
                        <span className="text-outline">REST_APIS</span>
                      </li>
                      <li className="flex items-center justify-between hover:text-primary">
                        <span>Concurrency</span>
                        <span className="text-outline">MUTEX_LOCKS</span>
                      </li>
                      <li className="flex items-center justify-between hover:text-primary">
                        <span>Next.js / React</span>
                        <span className="text-outline">PROD_TIER</span>
                      </li>
                      <li className="flex items-center justify-between hover:text-primary">
                        <span>WebSockets</span>
                        <span className="text-outline">REAL_TIME</span>
                      </li>
                      <li className="flex items-center justify-between hover:text-primary">
                        <span>LLM & NLP</span>
                        <span className="text-outline">AI_PIPELINES</span>
                      </li>
                    </ul>
                  </div>

                  {/* Databases & Tooling */}
                  <div className="bg-surface-container-low p-3.5 flex flex-col gap-2">
                    <div className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-on-surface-variant" />
                      DATA & TOOLS
                    </div>
                    <ul className="flex flex-col gap-1 font-label-sm text-label-sm text-on-surface">
                      <li className="flex items-center justify-between hover:text-primary">
                        <span>PostgreSQL</span>
                        <span className="text-outline">BATCH_OPT</span>
                      </li>
                      <li className="flex items-center justify-between hover:text-primary">
                        <span>MySQL</span>
                        <span className="text-outline">TRANSACT</span>
                      </li>
                      <li className="flex items-center justify-between hover:text-primary">
                        <span>Git & GitHub</span>
                        <span className="text-outline">VCS_FLOW</span>
                      </li>
                      <li className="flex items-center justify-between hover:text-primary">
                        <span>Postman</span>
                        <span className="text-outline">API_VERIF</span>
                      </li>
                      <li className="flex items-center justify-between hover:text-primary">
                        <span>Vercel / Linux</span>
                        <span className="text-outline">DEPLOY</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Monospaced Validation Key */}
                <div className="flex items-center justify-between font-label-sm text-label-sm text-outline-variant pt-2 border-t border-surface-container-highest">
                  <span>SECURITY LOG: SYSTEM_ARCHITECT_PASSKEY</span>
                  <span className="text-secondary font-bold">READY FOR INGESTION</span>
                </div>
              </div>

              {/* 2. EVIDENCE ARCHIVE PREVIEW (PROJECT EXHIBITS) */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider font-bold">
                    EXHIBIT ARCHIVE // VERIFIED SYSTEMS EVIDENCE
                  </span>
                  <span className="font-label-sm text-label-sm text-outline">COUNT: 03 LOGGED</span>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {/* Exhibit A: PayLock */}
                  <div
                    onClick={handleEvidenceClick}
                    className="bg-surface-container p-4 hover:bg-surface-container-high transition-colors flex flex-col md:flex-row md:items-center justify-between gap-3 group cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <span className="px-2 py-0.5 bg-secondary-container/50 text-secondary font-label-sm text-label-sm font-bold uppercase">
                        EX-A
                      </span>
                      <div>
                        <h4 className="font-headline-sm text-headline-sm text-primary tracking-tight group-hover:text-secondary transition-colors">
                          PayLock — Concurrent Payment Transaction System
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Mutex synchronization and atomic operations in C++ preventing race conditions across concurrent MySQL payment requests.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                      <span className="font-label-sm text-label-sm text-outline group-hover:text-primary">
                        C++ // NODE // MYSQL
                      </span>
                      <span className="material-symbols-outlined text-[16px] text-outline group-hover:text-secondary group-hover:translate-x-1 transition-all">
                        arrow_forward
                      </span>
                    </div>
                  </div>

                  {/* Exhibit B: CramRoom */}
                  <div
                    onClick={handleEvidenceClick}
                    className="bg-surface-container p-4 hover:bg-surface-container-high transition-colors flex flex-col md:flex-row md:items-center justify-between gap-3 group cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <span className="px-2 py-0.5 bg-surface-container-highest text-primary font-label-sm text-label-sm font-bold uppercase">
                        EX-B
                      </span>
                      <div>
                        <h4 className="font-headline-sm text-headline-sm text-primary tracking-tight group-hover:text-secondary transition-colors">
                          CramRoom — Collaborative Exam Prep Platform
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Full-stack collaborative prep sessions with query batching slashing database round-trips by 60%; NLP topic modeling integration.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                      <span className="font-label-sm text-label-sm text-outline group-hover:text-primary">
                        NEXT.JS // POSTGRES // JWT
                      </span>
                      <span className="material-symbols-outlined text-[16px] text-outline group-hover:text-secondary group-hover:translate-x-1 transition-all">
                        arrow_forward
                      </span>
                    </div>
                  </div>

                  {/* Exhibit C: CodeMaster */}
                  <div
                    onClick={handleEvidenceClick}
                    className="bg-surface-container p-4 hover:bg-surface-container-high transition-colors flex flex-col md:flex-row md:items-center justify-between gap-3 group cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <span className="px-2 py-0.5 bg-surface-container-highest text-primary font-label-sm text-label-sm font-bold uppercase">
                        EX-C
                      </span>
                      <div>
                        <h4 className="font-headline-sm text-headline-sm text-primary tracking-tight group-hover:text-secondary transition-colors">
                          CodeMaster — C Code Analyzer & Symbol Browser
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Zero-dependency C99 AST static analysis engine with hand-crafted Trie, AVL Tree, and Max-Heap achieving sub-30ms execution.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                      <span className="font-label-sm text-label-sm text-outline group-hover:text-primary">
                        C99 // AST // REACT 19
                      </span>
                      <span className="material-symbols-outlined text-[16px] text-outline group-hover:text-secondary group-hover:translate-x-1 transition-all">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. INTERACTIVE TACTICAL CALL-TO-ACTIONS */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                {/* Glowing Tactical Primary Button */}
                <button
                  type="button"
                  onClick={handleEvidenceClick}
                  className="flex-1 px-6 py-4 bg-primary text-on-primary font-label-md text-label-md uppercase font-bold tracking-widest hover:bg-primary-fixed transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.2)] group cursor-pointer"
                >
                  <span>PROCEED TO ENGINEERING EVIDENCE</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1.5 transition-transform">
                    arrow_forward
                  </span>
                </button>

                {/* Secondary Dossier Button */}
                <button
                  type="button"
                  onClick={handleResumeClick}
                  className="px-6 py-4 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px] text-outline">
                    description
                  </span>
                  <span>VIEW FULL DOSSIER / RESUME (PDF)</span>
                </button>
              </div>
            </div>
          </div>

          {/* FOOTER AUDIT TIMESTAMP */}
          <div className="mt-8 pt-4 border-t border-surface-container-highest/50 flex flex-col sm:flex-row items-center justify-between gap-2 text-outline font-label-sm text-label-sm">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span>RECORD CONCLUDED // AUTHO: DEPT_OF_ENGINEERING</span>
            </div>
            <div>FILE TRANSMISSION ID: #09-NITIN-RAWAT-2025-CLEARANCE</div>
          </div>
        </div>

        {/* QUICK ACCESS INVESTIGATIVE NOTES STRIP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-surface-container-low p-4 flex items-center gap-3 shadow-md">
            <span className="material-symbols-outlined text-secondary text-[24px]">speed</span>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm uppercase text-outline">
                CONCURRENCY INVARIANTS
              </span>
              <span className="font-body-sm text-body-sm text-on-surface font-semibold">
                Mutex Locks & ACID Guarantees
              </span>
            </div>
          </div>

          <div className="bg-surface-container-low p-4 flex items-center gap-3 shadow-md">
            <span className="material-symbols-outlined text-primary text-[24px]">code</span>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm uppercase text-outline">
                ZERO-DEPENDENCY RIGOR
              </span>
              <span className="font-body-sm text-body-sm text-on-surface font-semibold">
                C99 Lexer, Parser & Hand-Coded Trees
              </span>
            </div>
          </div>

          <div className="bg-surface-container-low p-4 flex items-center gap-3 shadow-md">
            <span className="material-symbols-outlined text-secondary text-[24px]">verified</span>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm uppercase text-outline">
                RECRUITER STATUS
              </span>
              <span className="font-body-sm text-body-sm text-on-surface font-semibold">
                Immediate Availability for Interviews
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scene03Dossier;
