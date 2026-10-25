import React from 'react';

export const ProfileHeader: React.FC = () => {
  return (
    <header className="portfolio-hero">
      <div className="availability-badge" aria-label="Available for projects">
        <span className="badge-dot"></span>
        <span className="badge-text">STATUS: AVAILABLE</span>
      </div>
      <h1 className="hero-name" data-flip-id="subject-name">
        NITIN RAWAT
      </h1>
      <div className="hero-role">
        Software Engineer <span className="role-loc">// Systems & AI Architect</span>
      </div>
      <p className="hero-objective" data-flip-id="subject-objective">
        Designing and engineering high-throughput, context-aware AI systems, 
        zero-dependency dev tools, and optimal algorithmic architectures that do not break.
      </p>
    </header>
  );
};

export default ProfileHeader;
