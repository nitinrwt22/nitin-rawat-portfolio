import React from 'react';
import { MusicPlayer } from '../audio/MusicPlayer';

interface TopHeaderProps {
  onSkipIntro: () => void;
  onNavigateToScene?: (sceneId: string) => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({ onSkipIntro, onNavigateToScene }) => {

  const handleSkip = (e: React.MouseEvent) => {
    e.preventDefault();
    onSkipIntro();
    if (onNavigateToScene) {
      onNavigateToScene('scene-03-case-file-dossier');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.6)]">
      <div className="h-14 max-w-7xl mx-auto px-margin-mobile lg:px-margin flex items-center justify-between">
        <div className="flex items-center gap-space-md">
          <div className="flex items-center gap-space-xs">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="font-label-sm text-label-sm tracking-widest text-on-surface-variant uppercase">
              STATUS: ACTIVE // CLASSIFIED DOSSIER NR-001
            </span>
          </div>
          <span className="hidden md:inline font-label-sm text-label-sm text-outline">
            [INDEX_SEC: 09-ALPHA]
          </span>
        </div>

        <div className="flex items-center gap-space-md">
          {/* Tactical Music Player Widget (noname.mp3) */}
          <MusicPlayer />

          {/* Skip Intro Link */}
          <a
            href="#scene-03-case-file-dossier"
            onClick={handleSkip}
            className="font-label-sm text-label-sm text-secondary hover:text-on-surface tracking-widest uppercase transition-colors"
          >
            SKIP INTRO // DIRECT ACCESS
          </a>

          {/* Profile Identifier Avatar */}
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center overflow-hidden border border-outline/30">
            <img
              src="/assets/blazer.jpg"
              alt="Nitin Rawat"
              className="w-full h-full object-cover object-top grayscale"
              onError={(e) => {
                // Fallback to person icon if image loading fails
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
