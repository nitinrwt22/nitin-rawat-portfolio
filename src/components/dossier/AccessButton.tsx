import React from 'react';
import { useAudio } from '../../hooks/useAudio';

interface AccessButtonProps {
  isRevealed: boolean;
  onClick: () => void;
}

export const AccessButton: React.FC<AccessButtonProps> = ({ isRevealed, onClick }) => {
  const { playSFX } = useAudio();

  const handleClick = () => {
    if (!isRevealed) return;
    // Trigger metallic latch locking sound effect
    playSFX('latch_click');
    onClick();
  };

  return (
    <button
      className={`access-button ${isRevealed ? 'revealed' : ''}`}
      onClick={handleClick}
      aria-label="Access complete engineering portfolio file dossier"
      disabled={!isRevealed}
    >
      <span className="access-btn-stamp">CONFIDENTIAL ACCESS</span>
      <span className="access-btn-label">ACCESS FILE</span>
    </button>
  );
};

export default AccessButton;
