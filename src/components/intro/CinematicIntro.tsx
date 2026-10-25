import React, { useEffect, useState } from 'react';
import LoadingScreen from './LoadingScreen';
import PaperReveal from './PaperReveal';
import HeadlineReveal from './HeadlineReveal';
import Combustion from './Combustion';
import { useAudio } from '../../hooks/useAudio';

interface CinematicIntroProps {
  onComplete: () => void;
  onSkip: () => void;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete, onSkip }) => {
  const { startLoop, playSFX, isMuted, toggleMute } = useAudio();
  const [introStage, setIntroStage] = useState<'void' | 'unfolding' | 'headline' | 'combustion'>('void');

  // Trigger ambient sub-bass loop immediately on Void mount
  useEffect(() => {
    startLoop('ambient_drone', 0.8);
  }, [startLoop]);

  const handleLoadingComplete = () => {
    setIntroStage('unfolding');
    // Play paper rustle sound sync
    playSFX('paper_rustle_unfold', 0.8);
  };

  const handleUnfoldComplete = () => {
    setIntroStage('headline');
  };

  // Scene 2 (Unfolding) triggers page flattening after 2.5 seconds
  useEffect(() => {
    if (introStage === 'unfolding') {
      const timer = setTimeout(() => {
        handleUnfoldComplete();
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [introStage]);

  const handleHeadlineComplete = () => {
    setIntroStage('combustion');
  };

  return (
    <div className="intro-container">
      {/* Floating mute control for pre-portfolio phases */}
      <button 
        className="intro-mute-btn" 
        onClick={toggleMute}
        aria-label={isMuted ? 'Unmute experience audio' : 'Mute experience audio'}
      >
        {isMuted ? 'AUDIO_MUTED' : 'AUDIO_LIVE'}
      </button>

      {introStage === 'void' && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}

      {introStage !== 'void' && (
        <PaperReveal isUnfolded={introStage !== 'unfolding'}>
          <HeadlineReveal 
            isActive={introStage === 'headline'} 
            onComplete={handleHeadlineComplete} 
          />
        </PaperReveal>
      )}

      <Combustion 
        isActive={introStage === 'combustion'} 
        onComplete={onComplete} 
      />

      {/* Skip Intro Floating Anchor */}
      <button className="skip-intro-btn" onClick={onSkip}>
        SKIP_INTRO
      </button>
    </div>
  );
};

export default CinematicIntro;
