import React, { useEffect, useRef } from 'react';
import type { Project } from '../../utils/projectData';

interface CaseStudyViewerProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CaseStudyViewer: React.FC<CaseStudyViewerProps> = ({ project, isOpen, onClose }) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close drawer when the user hits the Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Focus trap: locks keyboard focus inside the drawer when active
  useEffect(() => {
    if (!isOpen || !panelRef.current) return;

    // Immediately focus the close button for instant keyboard context
    closeButtonRef.current?.focus();

    const handleFocusTrap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      const focusables = panelRef.current?.querySelectorAll(focusableSelectors);
      if (!focusables || focusables.length === 0) return;

      const first = focusables[0] as HTMLElement;
      const last = focusables[focusables.length - 1] as HTMLElement;

      if (e.shiftKey) {
        // Shift + Tab: wrap from first back to last focusable
        if (document.activeElement === first) {
          last.focus();
          e.preventDefault();
        }
      } else {
        // Tab: wrap from last forward to first focusable
        if (document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    };

    window.addEventListener('keydown', handleFocusTrap);
    return () => window.removeEventListener('keydown', handleFocusTrap);
  }, [isOpen]);

  if (!project) return null;

  return (
    <>
      {/* Dimmed backdrop backdrop */}
      <div 
        className={`drawer-backdrop ${isOpen ? 'active' : ''}`} 
        onClick={onClose} 
        aria-hidden="true"
      />
      
      {/* Slide-in document panel */}
      <div 
        ref={panelRef}
        className={`drawer-panel ${isOpen ? 'active' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-viewer-title"
        tabIndex={-1}
      >
        <div className="drawer-header">
          <div className="drawer-case-no">{project.caseNumber} // DECLASSIFIED INCIDENT</div>
          <div className="title-row">
            <h3 id="case-viewer-title" className="drawer-title">{project.name}</h3>
            <button 
              ref={closeButtonRef}
              className="drawer-close-btn" 
              onClick={onClose} 
              aria-label="Close case study panel"
            >
              [CLOSE_FILE]
            </button>
          </div>
        </div>
        
        <div className="drawer-content">
          <div className="drawer-section">
            <span className="drawer-label">CLASSIFICATION TAGLINE</span>
            <p className="drawer-tagline">{project.tagline}</p>
          </div>
          
          <div className="drawer-divider" />
          
          <div className="drawer-section">
            <span className="drawer-label">01 // BRIEFING (THE PROBLEM)</span>
            <p className="drawer-body-text">{project.problem}</p>
          </div>
          
          <div className="drawer-section">
            <span className="drawer-label">02 // STRATEGY (THE SOLUTION)</span>
            <p className="drawer-body-text">{project.solution}</p>
          </div>
          
          <div className="drawer-section">
            <span className="drawer-label">03 // ARCHITECTURE & IMPLEMENTATION</span>
            <ul className="drawer-list">
              {project.architecture.map((item, idx) => (
                <li key={idx} className="drawer-list-item">{item}</li>
              ))}
            </ul>
          </div>
          
          <div className="drawer-section">
            <span className="drawer-label">04 // EVIDENCE SUMMARY (OUTCOME)</span>
            <div className="outcome-box">
              <p className="drawer-body-text outcome-highlight">{project.outcome}</p>
            </div>
          </div>
          
          <div className="drawer-section">
            <span className="drawer-label">05 // KNOWN SYSTEM CAPABILITIES</span>
            <div className="drawer-tech-grid">
              {project.technologies.map((tech) => (
                <span key={tech} className="drawer-tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudyViewer;
