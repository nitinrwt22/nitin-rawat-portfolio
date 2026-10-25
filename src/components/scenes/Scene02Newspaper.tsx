import React, { useEffect, useRef, useState } from 'react';
import { useAudio } from '../../hooks/useAudio';

interface Scene02NewspaperProps {
  onProceedToDossier: () => void;
  onProceedToContact: () => void;
}

export const Scene02Newspaper: React.FC<Scene02NewspaperProps> = ({
  onProceedToDossier,
  onProceedToContact,
}) => {
  const { playSFX } = useAudio();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isFolded, setIsFolded] = useState(false);

  // Atmospheric Dust Particles (Directly from Stitch Implementation)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.3,
      speedY: -(Math.random() * 0.4 + 0.1),
      speedX: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    let animationId: number;

    const renderDust = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#ffffff';

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;

        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(renderDust);
    };

    renderDust();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const handleToggleZoom = () => {
    playSFX('button_click', 0.5);
    setIsZoomed(!isZoomed);
  };

  const handleToggleCrease = () => {
    playSFX('paper_rustle', 0.6);
    setIsFolded(!isFolded);
  };

  return (
    <section
      id="scene-02-newspaper-wanted"
      className="w-full min-h-screen bg-surface-container-lowest relative pt-14 pb-24 overflow-hidden select-none"
    >
      {/* Dynamic Atmospheric Dust Layer */}
      <canvas
        ref={canvasRef}
        id="dust-ambient-canvas"
        className="pointer-events-none absolute inset-0 z-20 w-full h-full opacity-40 mix-blend-screen"
      />

      {/* Top Ambient Spotlight Flare */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent blur-3xl z-10" />

      {/* Stage Workspace Area */}
      <div className="w-full max-w-7xl mx-auto px-margin-mobile lg:px-margin py-8 md:py-12 flex flex-col items-center relative z-20">
        {/* Top Forensic Telemetry & Fast Actions Ribbon */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md mb-8">
          <div className="flex flex-wrap items-center gap-space-sm">
            <span className="px-space-sm py-0.5 bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm tracking-widest uppercase">
              EVIDENCE RETRIEVAL: 100%
            </span>
            <span className="px-space-sm py-0.5 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm tracking-widest uppercase font-semibold">
              LEVEL-5 DECLASSIFIED
            </span>
            <span className="font-label-sm text-label-sm text-outline tracking-wider hidden sm:inline">
              LAT: 37.7749° N // LON: -122.4194° W
            </span>
          </div>

          <div className="flex items-center gap-space-sm self-end md:self-auto">
            {/* Toggle Zoom Button */}
            <button
              id="toggle-zoom-btn"
              type="button"
              onClick={handleToggleZoom}
              className="group flex items-center gap-space-xs px-3 py-1.5 bg-surface-container hover:bg-surface-container-high transition-colors focus:outline-none"
            >
              <span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-primary transition-colors">
                {isZoomed ? 'zoom_out' : 'zoom_in'}
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-primary tracking-widest uppercase">
                {isZoomed ? 'RESET VIEW [1.0X]' : 'INSPECT PAPER [1.0X]'}
              </span>
            </button>

            {/* Skip Direct to Portfolio */}
            <button
              type="button"
              onClick={onProceedToDossier}
              className="flex items-center gap-space-xs px-3 py-1.5 bg-primary text-on-primary hover:bg-primary-fixed transition-colors font-label-sm text-label-sm tracking-widest font-bold uppercase"
            >
              SKIP DIRECT TO PORTFOLIO
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* PHYSICAL BROADSHEET NEWSPAPER CONTAINER */}
        <div className="w-full transition-all duration-700 ease-out flex justify-center" id="newspaper-wrapper">
          <div
            id="broadsheet-paper"
            className={`w-full max-w-5xl bg-primary-fixed text-surface-container-lowest shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),0_0_100px_rgba(0,0,0,0.8)] relative transition-all duration-500 origin-top ${
              isZoomed ? 'scale-[1.03] -translate-y-2' : 'scale-100 translate-y-0'
            } ${isFolded ? 'drop-shadow-[0_40px_60px_rgba(0,0,0,0.95)] contrast-105' : ''}`}
          >
            {/* Crease Shadows: Vertical center spine & Horizontal half-fold */}
            <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-r from-transparent via-surface-container-lowest/15 to-transparent z-30 mix-blend-multiply" />
            <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-6 bg-gradient-to-b from-transparent via-surface-container-lowest/20 to-transparent z-30 mix-blend-multiply" />

            {/* Paper Edge Aging & Vignettes */}
            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_rgba(50,40,25,0.35)] z-20" />
            <div className="pointer-events-none absolute -bottom-1 -right-1 w-24 h-24 bg-gradient-to-tl from-surface-container-lowest/40 to-transparent z-20" />

            {/* NEWSPAPER INNER CONTENT GRID */}
            <div className="p-5 sm:p-8 md:p-12 relative z-10 flex flex-col">
              {/* 1. MASTHEAD BAR */}
              <header className="flex flex-col items-center text-center pb-4 relative">
                <div className="w-full flex items-center justify-between pb-2">
                  <span className="font-label-sm text-label-sm tracking-[0.25em] text-on-primary-container font-semibold uppercase">
                    VOL. CXLII... No. 49,201
                  </span>
                  <span className="font-label-sm text-label-sm tracking-[0.3em] text-on-primary-fixed-variant font-bold uppercase bg-surface-container-lowest text-primary-fixed px-2 py-0.5">
                    SPECIAL POLICE EXTRA EDITION
                  </span>
                  <span className="font-label-sm text-label-sm tracking-[0.2em] text-on-primary-container uppercase">
                    PRICE FIVE CENTS
                  </span>
                </div>

                {/* Double separator hairline */}
                <div className="w-full h-1 bg-surface-container-lowest my-1" />
                <div className="w-full h-px bg-surface-container-lowest mb-3" />

                {/* Newspaper Title */}
                <h1 className="font-headline-xl text-headline-xl md:text-[68px] md:leading-[64px] tracking-tight uppercase font-extrabold text-surface-container-lowest font-['Bodoni_Moda']">
                  THE CHRONICLE DISPATCH
                </h1>
                <p className="font-label-sm text-label-sm tracking-[0.45em] text-on-primary-fixed-variant uppercase mt-1">
                  METROPOLITAN INVESTIGATION SECTION // BUREAU OF DIGITAL CRIMES & DISTRIBUTED ALGORITHMS
                </p>

                <div className="w-full h-px bg-surface-container-lowest mt-3 mb-1" />
                <div className="w-full flex items-center justify-between text-on-primary-container font-label-sm text-label-sm py-1 font-medium">
                  <span>METROPOLITAN BUREAU</span>
                  <span>SPECIAL DOSSIER BULLETIN // FILE NR-001</span>
                  <span>GLOBAL REPOSITORY DISPATCH</span>
                </div>
                <div className="w-full h-0.5 bg-surface-container-lowest" />
              </header>

              {/* 2. MAIN EDITORIAL BANNER */}
              <div className="py-4 md:py-6 text-center relative flex flex-col items-center justify-center">
                <div className="flex items-center gap-space-md mb-2">
                  <span className="material-symbols-outlined text-secondary-container text-[28px]">
                    priority_high
                  </span>
                  <span className="font-label-lg text-label-lg tracking-[0.35em] text-secondary-container uppercase font-bold">
                    WANTED BY THE HIGH-PERFORMANCE CODE DIVISION
                  </span>
                  <span className="material-symbols-outlined text-secondary-container text-[28px]">
                    priority_high
                  </span>
                </div>

                <div className="w-full font-headline-xl text-[64px] sm:text-[96px] md:text-[124px] leading-none tracking-tighter uppercase font-black text-surface-container-lowest mix-blend-darken scale-y-110 my-1 font-['Bodoni_Moda']">
                  MOST WANTED
                </div>

                {/* Red Classified Docket Stamp Overlay */}
                <div className="absolute -top-3 right-4 md:right-12 z-30 transform -rotate-6 pointer-events-none">
                  <div className="px-4 py-2 bg-secondary-container/90 text-on-secondary-fixed text-center shadow-lg backdrop-blur-sm border-2 border-secondary">
                    <div className="font-label-sm text-[9px] tracking-[0.2em] uppercase text-primary font-bold">
                      DEPARTMENT OF ARCHIVAL SURVEILLANCE
                    </div>
                    <div className="font-label-lg text-label-lg tracking-[0.15em] font-black uppercase text-on-secondary-container">
                      CLASSIFIED EVIDENCE // NR-001
                    </div>
                    <div className="font-label-sm text-[8px] tracking-[0.25em] text-primary/80 uppercase">
                      VERIFIED FOR IMMEDIATE ARREST
                    </div>
                  </div>
                </div>

                {/* Under-Headline Profile Strip */}
                <div className="w-full bg-surface-container-lowest text-primary-fixed px-4 py-2 mt-4 flex flex-col sm:flex-row items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-label-md text-label-md tracking-wider font-bold uppercase text-secondary">
                      SUBJECT IDENTIFIED:
                    </span>
                    <span className="font-headline-sm text-headline-sm tracking-wide uppercase font-bold text-primary">
                      NITIN RAWAT
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-on-surface-variant font-label-sm text-label-sm">
                    <span>
                      OCCUPATION: <strong className="text-primary font-bold">SOFTWARE ENGINEER</strong>
                    </span>
                    <span className="hidden md:inline">//</span>
                    <span className="hidden md:inline">SYSTEMS BUILDER</span>
                    <span>
                      STATUS: <strong className="text-secondary font-bold">AT LARGE</strong>
                    </span>
                  </div>
                </div>
              </div>

              {/* 3. BROADSHEET EDITORIAL BODY (Bento Column Layout) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md pt-4">
                {/* LEFT COLUMN: Crime Specifications & Charge Sheet (5 Cols) */}
                <div className="md:col-span-5 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between pb-1 mb-2">
                      <h3 className="font-label-md text-label-md tracking-[0.2em] font-extrabold uppercase text-surface-container-lowest">
                        RECORD OF OFFENSES & CAPABILITIES
                      </h3>
                      <span className="font-label-sm text-label-sm text-on-primary-fixed-variant">
                        REF: SPEC-09A
                      </span>
                    </div>
                    <div className="h-0.5 bg-surface-container-lowest w-full mb-3" />
                    <p className="font-body-sm text-body-sm leading-relaxed text-surface-container-highest mb-4">
                      The subject has been repeatedly observed designing complex, fault-tolerant infrastructure capable of processing continuous data streams under extreme load. Local authorities warn that systems touched by this individual demonstrate abnormally high stability and surgical code structure.
                    </p>

                    {/* Charge Sheet Box */}
                    <div className="bg-primary-fixed-dim/40 p-4 space-y-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 bg-secondary-container" />
                        <h4 className="font-label-md text-label-md font-bold uppercase tracking-wider text-surface-container-lowest">
                          KNOWN VIOLATIONS & CHARGES:
                        </h4>
                      </div>
                      <ul className="space-y-2.5 font-body-sm text-body-sm text-surface-container-highest pl-1">
                        <li className="flex items-start gap-2">
                          <span className="font-label-sm text-label-sm font-bold text-secondary-container pt-0.5">
                            [01]
                          </span>
                          <div>
                            <strong className="font-semibold text-surface-container-lowest block font-label-md text-label-md">
                              CONCURRENT TRANSACTION CONTROL (PayLock)
                            </strong>
                            Engineered mutex-guarded payment workflows with C++ and MySQL, enforcing strict ACID properties.
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-label-sm text-label-sm font-bold text-secondary-container pt-0.5">
                            [02]
                          </span>
                          <div>
                            <strong className="font-semibold text-surface-container-lowest block font-label-md text-label-md">
                              HIGH-EFFICIENCY STATE SYNC (CramRoom)
                            </strong>
                            Architected collaborative prep platform with query batching slashing database round-trips by 60%.
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-label-sm text-label-sm font-bold text-secondary-container pt-0.5">
                            [03]
                          </span>
                          <div>
                            <strong className="font-semibold text-surface-container-lowest block font-label-md text-label-md">
                              ZERO-DEPENDENCY STATIC ANALYSIS (CodeMaster)
                            </strong>
                            Authored C99 AST engine with hand-implemented AVL trees, Tries, and heaps executing in sub-30ms.
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-label-sm text-label-sm font-bold text-secondary-container pt-0.5">
                            [04]
                          </span>
                          <div>
                            <strong className="font-semibold text-surface-container-lowest block font-label-md text-label-md">
                              ALGORITHMIC CONVERSION & PROBLEM SOLVING
                            </strong>
                            Solved 640+ Data Structures & Algorithms challenges on LeetCode with an 1800+ contest rating.
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Physical Fingerprint Matrix & Stamp */}
                  <div className="p-3 bg-surface-container-lowest text-primary-fixed flex items-center justify-between">
                    <div className="space-y-0.5 font-label-sm text-label-sm">
                      <span className="block text-secondary font-bold tracking-widest uppercase">
                        FINGERPRINT HASH:
                      </span>
                      <span className="text-on-surface-variant font-mono">
                        SHA256: 9e107d9d372bb6826bd81
                      </span>
                      <span className="text-outline text-[9px] block">
                        SECURITY CLEARANCE LEVEL: REVISED // VERIFIED
                      </span>
                    </div>
                    <div className="w-12 h-12 bg-primary-fixed text-surface-container-lowest flex items-center justify-center font-black text-headline-sm">
                      NR
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN: High-Contrast Editorial Portrait Feature (7 Cols) */}
                <div className="md:col-span-7 flex flex-col justify-between">
                  {/* Evidence Photo Frame */}
                  <div className="relative bg-surface-container-lowest p-2 shadow-inner">
                    {/* Top HUD for photograph */}
                    <div className="flex items-center justify-between text-primary-fixed px-1 py-1 font-label-sm text-label-sm">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-container animate-pulse" />
                        <span className="tracking-widest uppercase text-on-surface">
                          MUGSHOT EXHIBIT NR-01 // CAMERA A
                        </span>
                      </div>
                      <span className="text-outline font-mono">RES: 896x1200 // MONO-CHROMA</span>
                    </div>

                    {/* The Suspect Image */}
                    <div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-container-lowest">
                      <img
                        alt="Nitin Rawat Mugshot Portrait"
                        className="w-full h-full object-cover filter grayscale contrast-125 brightness-95 transition-transform duration-700 hover:scale-105"
                        src="/assets/blazer.jpg"
                      />

                      {/* Halftone Pattern Simulation Scrim */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-80" />

                      {/* Camera Reticle Overlay */}
                      <div className="pointer-events-none absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-primary/40" />
                      <div className="pointer-events-none absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-primary/40" />
                      <div className="pointer-events-none absolute bottom-12 left-4 w-6 h-6 border-b-2 border-l-2 border-primary/40" />
                      <div className="pointer-events-none absolute bottom-12 right-4 w-6 h-6 border-b-2 border-r-2 border-primary/40" />

                      {/* Watermark on image */}
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                        <span className="bg-surface-container-lowest/90 text-primary-fixed font-label-sm text-label-sm px-2 py-0.5 uppercase tracking-widest">
                          SUSPECT IDENTIFIED: NITIN RAWAT [DOSSIER: NR-001]
                        </span>
                        <span className="bg-secondary-container text-on-secondary-container font-label-sm text-[9px] px-1.5 py-0.5 uppercase font-bold tracking-wider">
                          PRIMARY TARGET
                        </span>
                      </div>
                    </div>

                    {/* Caption text beneath mugshot */}
                    <div className="p-2.5 bg-primary-fixed text-surface-container-lowest mt-1">
                      <div className="flex items-center justify-between">
                        <p className="font-label-sm text-label-sm font-semibold tracking-wider uppercase">
                          FIG. 01 — ARCHIVAL CAMERA RECONNAISSANCE PHOTOGRAPH
                        </p>
                        <span className="font-label-sm text-[10px] text-on-primary-fixed-variant">
                          SERIES-4
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-primary-fixed-variant mt-1">
                        Subject known for executing complete architectural revamps, low-latency microservice architectures, and zero-race-condition concurrent workflows.
                      </p>
                    </div>
                  </div>

                  {/* Bureau Reward & Dispatch Notice */}
                  <div className="mt-4 p-4 bg-primary-fixed-dim/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="space-y-1">
                      <span className="font-label-sm text-[10px] tracking-widest text-secondary-container uppercase font-bold block">
                        BOUNTY // COMPENSATION NOTICE
                      </span>
                      <div className="font-headline-sm text-headline-sm font-extrabold text-surface-container-lowest uppercase tracking-tight">
                        HIGH VALUE RECRUITMENT
                      </div>
                      <p className="font-body-sm text-body-sm text-surface-container-highest">
                        Direct interview invitations and engineering contributions welcomed.
                      </p>
                    </div>
                    <div className="w-full sm:w-auto flex flex-col gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={onProceedToContact}
                        className="px-5 py-2.5 bg-secondary-container hover:bg-on-secondary-fixed-variant text-on-secondary-container transition-all text-center font-label-md text-label-md font-bold uppercase tracking-widest shadow-md"
                      >
                        REPORT / CONTACT
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. BOTTOM TACTILE INTERACTION TAPE */}
              <div className="mt-8 pt-4 flex flex-col md:flex-row items-center justify-between gap-4 bg-surface-container-lowest text-primary-fixed p-4">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-secondary text-[24px]">
                    folder_special
                  </span>
                  <div>
                    <span className="font-label-md text-label-md font-bold text-primary tracking-widest uppercase block">
                      DOSSIER EVIDENCE ARCHIVE // NR-001
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      INSPECTION READY // PRESS BUTTON OR SCROLL TO ENTER SCENE 03
                    </span>
                  </div>
                </div>
                <div className="flex items-center flex-wrap gap-space-sm w-full md:w-auto justify-end">
                  <button
                    id="toggle-crease-btn"
                    type="button"
                    onClick={handleToggleCrease}
                    className="px-4 py-2 bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-sm text-label-sm tracking-widest uppercase flex items-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {isFolded ? 'flip_to_front' : 'menu_book'}
                    </span>
                    <span>{isFolded ? 'RESTORE SPREAD' : 'UNFOLD PAPER'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={onProceedToDossier}
                    className="px-5 py-2 bg-primary text-on-primary hover:bg-primary-fixed transition-all font-label-md text-label-md font-bold tracking-widest uppercase flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                  >
                    <span>TRANSITION TO CASE FILE (SCENE 03)</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Below-the-paper forensic notes metadata */}
        <div className="w-full max-w-5xl mt-6 flex flex-col sm:flex-row items-center justify-between text-on-surface-variant font-label-sm text-label-sm gap-2 px-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            <span>EVIDENCE REPOSITORY STATUS: AUTHENTIC PRINT PROTOTYPE 1948 // RESTORED 2025</span>
          </div>
          <div>
            <span>CLASSIFICATION: CONFIDENTIAL INTEL // PROPERTY OF NITIN RAWAT</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scene02Newspaper;
