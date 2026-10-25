import React, { useEffect, useState } from 'react';
import { useAudio } from '../../hooks/useAudio';

export const FloatingNavbar: React.FC = () => {
  const { isMuted, toggleMute } = useAudio();
  const [isCompressed, setIsCompressed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Compress navbar when user scrolls past 60px
      if (window.scrollY > 60) {
        setIsCompressed(true);
      } else {
        setIsCompressed(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`portfolio-navbar ${isCompressed ? 'compressed' : ''}`}>
      <div className="nav-brand">
        NITIN RAWAT <span className="nav-brand-sep">/</span> <span className="nav-brand-title">ENGINEER</span>
      </div>
      <div className="nav-links">
        <a href="#evidence" className="nav-link">EVIDENCE</a>
        <a href="#capabilities" className="nav-link">CAPABILITIES</a>
        <a href="#history" className="nav-link">HISTORY</a>
        <a href="#contact" className="nav-link">CONTACT</a>
        <button 
          className="nav-mute-toggle" 
          onClick={toggleMute} 
          aria-label={isMuted ? 'Unmute experience sound' : 'Mute experience sound'}
        >
          {isMuted ? 'AUDIO_MUTED' : 'AUDIO_LIVE'}
        </button>
      </div>
    </nav>
  );
};

export default FloatingNavbar;
