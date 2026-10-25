import React, { useEffect, useState } from 'react';
import { useAudio } from '../../hooks/useAudio';

interface HeadlineRevealProps {
  isActive: boolean;
  onComplete: () => void;
}

export const HeadlineReveal: React.FC<HeadlineRevealProps> = ({ isActive, onComplete }) => {
  const { playSFX } = useAudio();
  const [headlineLanded, setHeadlineLanded] = useState(false);
  const [lines] = useState<string[]>([
    'Building AI Systems',
    'Solving Complex Problems at Scale',
    'Engineering Architectures That Don\'t Break',
    'Shipping Software People Actually Use'
  ]);
  const [visibleLines, setVisibleLines] = useState<string[]>(['', '', '', '']);
  const [currentLineIdx, setCurrentLineIdx] = useState(-1);
  const [currentCharIdx, setCurrentCharIdx] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    // Stamp the title "MOST WANTED" onto the flat broadsheet
    const stampTimer = setTimeout(() => {
      setHeadlineLanded(true);
      playSFX('stamp_heavy', 1.0);
      setCurrentLineIdx(0);
    }, 600);

    return () => clearTimeout(stampTimer);
  }, [isActive, playSFX]);

  // Typographic typing engine running character reveals sequentially
  useEffect(() => {
    if (currentLineIdx < 0 || currentLineIdx >= lines.length) {
      if (currentLineIdx === lines.length) {
        // Typing finished. Pause on completed paper and trigger combustion transition
        const finishTimer = setTimeout(() => {
          onComplete();
        }, 1200);
        return () => clearTimeout(finishTimer);
      }
      return;
    }

    const currentText = lines[currentLineIdx];
    if (currentCharIdx < currentText.length) {
      const typeTimer = setTimeout(() => {
        setVisibleLines(prev => {
          const next = [...prev];
          next[currentLineIdx] = currentText.substring(0, currentCharIdx + 1);
          return next;
        });
        
        // Play mechanical typing tick sound
        playSFX('latch_click', 0.25);
        setCurrentCharIdx(prev => prev + 1);
      }, 35); // 35ms typing intervals
      return () => clearTimeout(typeTimer);
    } else {
      // Move to next wanted item after brief line feed delay
      const delayTimer = setTimeout(() => {
        setCurrentLineIdx(prev => prev + 1);
        setCurrentCharIdx(0);
      }, 200);
      return () => clearTimeout(delayTimer);
    }
  }, [currentLineIdx, currentCharIdx, lines, playSFX, onComplete]);

  return (
    <div className="newspaper-frontpage">
      <div className="masthead-bar">
        <span className="masthead-title">THE ENGINEERING TIMES</span>
        <span className="masthead-date">CASE_OPENED: 2026</span>
        <span className="masthead-classified">CLASSIFIED</span>
      </div>
      
      <div className="masthead-divider" />
      
      <div className={`headline-title ${headlineLanded ? 'landed' : ''}`}>
        MOST WANTED
      </div>
      
      <div className="masthead-divider" />
      
      <div className="newspaper-columns">
        {/* Indictment charges panel */}
        <div className="column-charges">
          <span className="charges-header">WANTED FOR:</span>
          <ul className="charges-list">
            {visibleLines.map((text, idx) => (
              <li key={idx} className={`charge-item ${idx <= currentLineIdx ? 'active' : ''}`}>
                {idx <= currentLineIdx && <span className="charge-bullet">›</span>}
                {text}
                {idx === currentLineIdx && currentCharIdx < lines[idx].length && (
                  <span className="typewriter-cursor">|</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Silhouette identification card */}
        <div className="column-photo">
          <div className="newspaper-photo-frame">
            <svg 
              viewBox="0 0 100 120" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="newspaper-photo-svg"
              aria-label="Desaturated placeholder mugshot"
            >
              <rect width="100" height="120" fill="#303030" />
              <circle cx="50" cy="45" r="20" fill="#606060" />
              <path d="M15 105 C15 80, 30 72, 50 72 C70 72, 85 80, 85 105 V120 H15 V105 Z" fill="#606060" />
            </svg>
            <div className="photo-halftone" aria-hidden="true" />
          </div>
          <div className="photo-label">
            <span className="photo-name">NITIN RAWAT</span>
            <span className="photo-title">SOFTWARE ENGINEER</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadlineReveal;
