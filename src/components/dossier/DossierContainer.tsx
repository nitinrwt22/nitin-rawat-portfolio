import React from 'react';
import CaseFolder from './CaseFolder';
import { useAudio } from '../../hooks/useAudio';

interface DossierContainerProps {
  isOpen: boolean;
  isAccessTriggered: boolean;
  onAccessClick: () => void;
  onSkip: () => void;
}

export const DossierContainer: React.FC<DossierContainerProps> = ({
  isOpen,
  isAccessTriggered,
  onAccessClick,
  onSkip
}) => {
  const { isMuted, toggleMute } = useAudio();

  return (
    <div className="dossier-container">
      {/* Floating mute toggle for pre-portfolio phases */}
      <button 
        className="intro-mute-btn" 
        onClick={toggleMute}
        aria-label={isMuted ? 'Unmute experience audio' : 'Mute experience audio'}
      >
        {isMuted ? 'AUDIO_MUTED' : 'AUDIO_LIVE'}
      </button>

      {/* Floating skip control */}
      <button className="skip-intro-btn" onClick={onSkip}>
        SKIP_INTRO
      </button>

      <CaseFolder 
        isOpen={isOpen}
        isAccessTriggered={isAccessTriggered}
        onAccessClick={onAccessClick}
      />
    </div>
  );
};

export default DossierContainer;
