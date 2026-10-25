import React from 'react';

interface PaperRevealProps {
  isUnfolded: boolean;
  children: React.ReactNode;
}

export const PaperReveal: React.FC<PaperRevealProps> = ({ isUnfolded, children }) => {
  return (
    <div className="newspaper-container-3d" style={{ perspective: '1400px' }}>
      <div 
        className={`newspaper-sheet ${isUnfolded ? 'sheet-flat' : 'sheet-folded'}`}
        data-flip-id="newspaper-sheet"
      >
        {/* Left page fold segment */}
        <div className="newspaper-leaf leaf-left">
          <div className="leaf-ink-patina" />
        </div>
        
        {/* Right page fold segment */}
        <div className="newspaper-leaf leaf-right">
          <div className="leaf-ink-patina" />
        </div>
        
        {/* Flat content overlay that renders when the paper settles */}
        <div className="newspaper-content-overlay">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PaperReveal;
