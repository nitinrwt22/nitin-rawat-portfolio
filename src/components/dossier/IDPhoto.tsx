import React from 'react';

interface IDPhotoProps {
  isRevealed: boolean;
  delay?: number;
}

export const IDPhoto: React.FC<IDPhotoProps> = ({ isRevealed, delay = 0 }) => {
  return (
    <div 
      className={`id-photo-container ${isRevealed ? 'revealed' : ''}`}
      style={{ 
        transition: 'opacity 600ms ease',
        transitionDelay: `${delay}ms`
      }}
      data-flip-id="subject-photo"
    >
      <div className="id-photo-frame">
        {/* High-contrast desaturated silhouette representing the declassified subject */}
        <div className="id-photo-mugshot">
          <svg 
            viewBox="0 0 100 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="mugshot-svg"
            aria-label="High-contrast subject identification photo"
          >
            <rect width="100" height="120" fill="#151515" />
            {/* Redacted head silhouette */}
            <circle cx="50" cy="45" r="20" fill="#3A3A3A" />
            {/* Redacted shoulders */}
            <path d="M15 105 C15 80, 30 72, 50 72 C70 72, 85 80, 85 105 V120 H15 V105 Z" fill="#3A3A3A" />
            {/* Administrative grids */}
            <line x1="50" y1="0" x2="50" y2="120" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            <line x1="0" y1="60" x2="100" y2="60" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          </svg>
        </div>
        <div className="scan-lines" aria-hidden="true" />
        <div className="photo-vignette" aria-hidden="true" />
      </div>
      <div className="id-photo-label">FILE_PHOTO // NR-2024</div>
    </div>
  );
};

export default IDPhoto;
