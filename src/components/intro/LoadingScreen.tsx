import React, { useEffect } from 'react';
import { useAudio } from '../../hooks/useAudio';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const { initializeAudio } = useAudio();

  useEffect(() => {
    // Initiate Web Audio API preloading hooks
    initializeAudio();

    // Scene 1 holds for exactly 1.5 seconds before auto-advancing to folding
    const timer = setTimeout(() => {
      onComplete();
    }, 1500);

    return () => clearTimeout(timer);
  }, [initializeAudio, onComplete]);

  return (
    <div className="visually-hidden" role="status" aria-live="polite">
      Loading portfolio experience. Please stand by.
    </div>
  );
};

export default LoadingScreen;
