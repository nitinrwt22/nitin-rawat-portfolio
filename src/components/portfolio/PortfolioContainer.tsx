import React, { useState } from 'react';
import type { Project } from '../../utils/projectData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import FloatingNavbar from './FloatingNavbar';
import ProfileHeader from './ProfileHeader';
import EvidenceLog from './EvidenceLog';
import CapabilityGrid from './CapabilityGrid';
import CaseHistory from './CaseHistory';
import ContactTerminal from './ContactTerminal';
import CaseStudyViewer from './CaseStudyViewer';

import { useFLIP } from '../../hooks/useFLIP';

export const PortfolioContainer: React.FC = () => {
  // Trigger FLIP morph transitions on layout mount
  useFLIP(true);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const { register } = useScrollReveal();

  const handleOpenCaseStudy = (project: Project) => {
    setSelectedProject(project);
    setIsViewerOpen(true);
  };

  const handleCloseCaseStudy = () => {
    setIsViewerOpen(false);
  };

  return (
    <div className="portfolio-container">
      {/* Persistent navbar overlay */}
      <FloatingNavbar />
      
      <main className="portfolio-main-grid">
        <div ref={register}>
          <ProfileHeader />
        </div>
        
        <div ref={register}>
          <EvidenceLog onSelectProject={handleOpenCaseStudy} />
        </div>
        
        <div ref={register}>
          <CapabilityGrid />
        </div>
        
        <div ref={register}>
          <CaseHistory />
        </div>
        
        <div ref={register}>
          <ContactTerminal />
        </div>
      </main>

      {/* Slide-in deep-dive documentation */}
      <CaseStudyViewer 
        project={selectedProject} 
        isOpen={isViewerOpen} 
        onClose={handleCloseCaseStudy} 
      />
    </div>
  );
};

export default PortfolioContainer;
