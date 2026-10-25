import React, { useEffect, useState } from 'react';
import { useAudio } from '../../hooks/useAudio';

interface Scene01DarkProps {
  onComplete: () => void;
  onSkip: () => void;
}

export const Scene01Dark: React.FC<Scene01DarkProps> = ({ onComplete, onSkip }) => {
  const { playSFX, startLoop } = useAudio();
  const [progress, setProgress] = useState(0);
  const [telemetryText, setTelemetryText] = useState('BOOTING ARCHIVAL MATRIX...');

  useEffect(() => {
    // Start subtle ambient drone
    startLoop('ambient_drone', 0.25);

    const stages = [
      { at: 20, text: 'DECRYPTING INVESTIGATION LEDGER...' },
      { at: 45, text: 'VALIDATING BIOMETRICS: NITIN RAWAT...' },
      { at: 75, text: 'RETRIEVING ARCHIVAL BROADSHEET EVIDENCE...' },
      { at: 95, text: 'CLEARANCE LEVEL 5 CONFIRMED.' },
      { at: 100, text: 'ACCESS GRANTED. EXHIBIT UNSEALED.' },
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 2;
        const matchingStage = stages.find((s) => s.at <= next && prev < s.at);
        if (matchingStage) {
          setTelemetryText(matchingStage.text);
          playSFX('key_click', 0.3);
        }
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 400);
          return 100;
        }
        return next;
      });
    }, 35);

    return () => clearInterval(interval);
  }, [onComplete, playSFX, startLoop]);

  return (
    <section
      id="scene-01-darkness"
      className="fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center p-space-md select-none"
    >
      {/* Background flare */}
      <div className="pointer-events-none absolute w-[600px] h-[600px] bg-secondary-container/10 blur-[140px] rounded-full" />

      {/* Central Tactical Terminal Frame */}
      <div className="w-full max-w-xl bg-surface-container-lowest border border-outline-variant/60 p-space-lg relative flex flex-col gap-space-md shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]">
        {/* Corner Crosshairs */}
        <span className="absolute top-1 left-2 text-outline/40 font-label-sm text-label-sm">+</span>
        <span className="absolute top-1 right-2 text-outline/40 font-label-sm text-label-sm">+</span>
        <span className="absolute bottom-1 left-2 text-outline/40 font-label-sm text-label-sm">+</span>
        <span className="absolute bottom-1 right-2 text-outline/40 font-label-sm text-label-sm">+</span>

        {/* Header Ribbon */}
        <div className="flex items-center justify-between pb-space-xs border-b border-surface-container-highest">
          <div className="flex items-center gap-space-xs">
            <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
            <span className="font-label-sm text-label-sm text-secondary font-bold tracking-widest uppercase">
              SECURITY PROTOCOL // ALPHA-9
            </span>
          </div>
          <span className="font-label-sm text-label-sm text-outline">
            SYS: VERIFIED
          </span>
        </div>

        {/* Terminal Title */}
        <div className="space-y-1">
          <h2 className="font-headline-md text-headline-md text-primary tracking-tight uppercase">
            NITIN RAWAT // DOSSIER NR-001
          </h2>
          <p className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
            BUREAU OF DISTRIBUTED SYSTEMS & ALGORITHMIC ARCHITECTURE
          </p>
        </div>

        {/* Progress Display */}
        <div className="space-y-2 pt-space-xs">
          <div className="flex justify-between items-center font-label-sm text-label-sm text-outline">
            <span className="text-secondary font-mono flex items-center gap-1">
              <span>{telemetryText}</span>
              <span className="inline-block w-1.5 h-3 bg-secondary animate-pulse" />
            </span>
            <span className="font-bold text-primary">{progress}%</span>
          </div>

          {/* Progress Bar with 0px sharp corners */}
          <div className="w-full h-1 bg-surface-container-high overflow-hidden">
            <div
              className="h-full bg-secondary transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Quick Bypass Action */}
        <div className="flex items-center justify-between pt-space-xs text-outline font-label-sm text-label-sm">
          <span>PORTFOLIO INITIALIZING...</span>
          <button
            type="button"
            onClick={onSkip}
            className="text-secondary hover:text-primary transition-colors tracking-widest uppercase underline underline-offset-4 font-bold"
          >
            BYPASS INTRO // DIRECT ENTRY
          </button>
        </div>
      </div>
    </section>
  );
};

export default Scene01Dark;
