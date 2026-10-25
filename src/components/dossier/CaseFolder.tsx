import React, { useEffect, useRef, useState } from 'react';
import { useAudio } from '../../hooks/useAudio';
import IDPhoto from './IDPhoto';
import RedactedField from './RedactedField';
import ThreatMeter from './ThreatMeter';
import AccessButton from './AccessButton';
import { projects } from '../../utils/projectData';

interface CaseFolderProps {
  isOpen: boolean;
  isAccessTriggered: boolean;
  onAccessClick: () => void;
}

export const CaseFolder: React.FC<CaseFolderProps> = ({ 
  isOpen, 
  isAccessTriggered,
  onAccessClick 
}) => {
  const { playSFX } = useAudio();
  const folderRef = useRef<HTMLDivElement>(null);
  const [folderStage, setFolderStage] = useState<'closed' | 'stamping' | 'open' | 'revealing' | 'complete'>('closed');
  const [revealStamps, setRevealStamps] = useState({ conf: false, topSec: false, caseFile: false });

  // Handle 3D perspective tilt reacting to desktop mouse coordinates
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!folderRef.current || folderStage === 'closed' || isAccessTriggered) return;
      const el = folderRef.current;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const rotateX = -(y / (rect.height / 2)) * 4; // Clamp X axis rotation to ±4deg
      const rotateY = (x / (rect.width / 2)) * 4;   // Clamp Y axis rotation to ±4deg
      
      el.style.setProperty('--rotate-x', `${rotateX}deg`);
      el.style.setProperty('--rotate-y', `${rotateY}deg`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [folderStage, isAccessTriggered]);

  // Orchestrate sequential administrative stamping, flap opens, and text reveals
  useEffect(() => {
    if (!isOpen) return;

    setFolderStage('stamping');

    // Stamp 1: CONFIDENTIAL (Impact + Audio)
    const t1 = setTimeout(() => {
      setRevealStamps(prev => ({ ...prev, conf: true }));
      playSFX('stamp_impact', 1.0);
    }, 1000);

    // Stamp 2: TOP SECRET (Impact + Audio)
    const t2 = setTimeout(() => {
      setRevealStamps(prev => ({ ...prev, topSec: true }));
      playSFX('stamp_impact', 0.95);
    }, 1400);

    // Stamp 3: CASE FILE (Impact + Audio)
    const t3 = setTimeout(() => {
      setRevealStamps(prev => ({ ...prev, caseFile: true }));
      playSFX('stamp_impact', 0.85);
    }, 1800);

    // Folder opens: Flap rotates up
    const t4 = setTimeout(() => {
      setFolderStage('open');
      playSFX('paper_slide', 0.7);
    }, 2400);

    // Document reveal: Redactions slide and ID portrait loads
    const t5 = setTimeout(() => {
      setFolderStage('revealing');
    }, 3000);

    // Sequence ends: Access CTAs fade and pulse
    const t6 = setTimeout(() => {
      setFolderStage('complete');
    }, 6000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, [isOpen, playSFX]);

  const isDossierOpen = folderStage === 'open' || folderStage === 'revealing' || folderStage === 'complete';
  const showContents = folderStage === 'revealing' || folderStage === 'complete';
  const isCtaReady = folderStage === 'complete';

  return (
    <div 
      ref={folderRef}
      className={`folder-casing ${isDossierOpen ? 'open' : ''} ${isAccessTriggered ? 'morphing' : ''}`}
      style={{
        transform: 'perspective(1200px) rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg))'
      }}
      data-flip-id="case-folder"
    >
      {/* Manila Cover & Flap */}
      <div className="folder-flap" aria-hidden="true">
        <div className="folder-tab">CASE FILE // NR-2024-001</div>
        
        {/* Red administrative stamps */}
        <div className={`stamp stamp-confidential ${revealStamps.conf ? 'landed' : ''}`}>
          CONFIDENTIAL
        </div>
        <div className={`stamp stamp-top-secret ${revealStamps.topSec ? 'landed' : ''}`}>
          TOP SECRET
        </div>
        <div className={`stamp stamp-diagonal ${revealStamps.caseFile ? 'landed' : ''}`}>
          CASE FILE
        </div>
        
        <div className="folder-flap-inner" />
      </div>

      {/* Manila Interior Pocket & Sheets */}
      <div className="folder-body-pocket">
        <div className="document-sheet">
          <div className="dossier-grid-header">
            {/* ID mugshot silhouette */}
            <IDPhoto isRevealed={showContents} delay={200} />
            
            {/* Typing metadata */}
            <div className="subject-meta-col">
              <div className="meta-row">
                <span className="meta-label">SUBJECT:</span>
                <span className="meta-value name-value" data-flip-id="subject-name">
                  NITIN RAWAT
                </span>
              </div>
              <div className="meta-row">
                <span className="meta-label">STATUS:</span>
                <span className="meta-value">
                  <RedactedField 
                    text="ACTIVE / AVAILABLE" 
                    isRevealed={showContents} 
                    revealDelay={600} 
                  />
                </span>
              </div>
              <div className="meta-row">
                <span className="meta-label">FILE NO:</span>
                <span className="meta-value">NR-2024-001</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">CLEARANCE:</span>
                <span className="meta-value">LEVEL_4_CONFIDENTIAL</span>
              </div>
            </div>
          </div>

          <div className="dossier-divider" />

          {/* Capabilities Core tags */}
          <div className="dossier-section">
            <span className="dossier-section-header">KNOWN CAPABILITIES // CORE_TAGS</span>
            <div className="dossier-tags-list">
              <div className="tag-reveal-item" data-flip-id="tech-React.js">
                <RedactedField text="React.js" isRevealed={showContents} revealDelay={1200} ariaLabel="React.js skill" />
              </div>
              <div className="tag-reveal-item" data-flip-id="tech-Node.js">
                <RedactedField text="Node.js" isRevealed={showContents} revealDelay={1400} ariaLabel="Node.js skill" />
              </div>
              <div className="tag-reveal-item" data-flip-id="tech-Python / AI">
                <RedactedField text="Python / AI" isRevealed={showContents} revealDelay={1600} ariaLabel="Python and AI skill" />
              </div>
              <div className="tag-reveal-item" data-flip-id="tech-TypeScript">
                <RedactedField text="TypeScript" isRevealed={showContents} revealDelay={1800} ariaLabel="TypeScript skill" />
              </div>
            </div>
          </div>

          <div className="dossier-divider" />

          {/* Documented Incidents (Project links) */}
          <div className="dossier-section">
            <span className="dossier-section-header">DOCUMENTED INCIDENTS // EVIDENCE</span>
            <div className="dossier-incidents-list">
              {projects.map((p, idx) => (
                <div 
                  key={p.id} 
                  className={`dossier-incident-row ${showContents ? 'revealed' : ''}`}
                  style={{ transitionDelay: `${2000 + idx * 200}ms` }}
                  data-flip-id={`project-row-${p.id}`}
                >
                  <span className="incident-no">{p.caseNumber}</span>
                  <span className="incident-name">{p.name}</span>
                  <span className="incident-class">{p.classification}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="dossier-divider" />

          {/* Threat Meter & Core Objective */}
          <div className="dossier-grid-footer">
            <div className="threat-column">
              <ThreatMeter 
                label="THREAT LEVEL (CAPABILITY)" 
                level={78} 
                isRevealed={showContents} 
                delay={2800} 
              />
            </div>
            <div className="objective-column">
              <span className="dossier-section-header">OBJECTIVE</span>
              <p className="dossier-objective-text" data-flip-id="subject-objective">
                Build systems that matter.
              </p>
            </div>
          </div>

          {/* Singular Access CTA */}
          <div className="access-cta-row">
            <AccessButton isRevealed={isCtaReady} onClick={onAccessClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseFolder;
