import React from 'react';
import { projects } from '../../utils/projectData';
import type { Project } from '../../utils/projectData';
import ProjectRow from './ProjectRow';

interface EvidenceLogProps {
  onSelectProject: (project: Project) => void;
}

export const EvidenceLog: React.FC<EvidenceLogProps> = ({ onSelectProject }) => {
  return (
    <section id="evidence" className="portfolio-section evidence-log-section">
      <div className="section-meta">LOG // 001_EVIDENCE_RECORD</div>
      <h2 className="section-title">DOCUMENTED INCIDENTS</h2>
      
      <div className="table-container">
        <table className="evidence-table">
          <thead>
            <tr>
              <th className="col-case-no">CASE NO</th>
              <th className="col-name">PROJECT NAME</th>
              <th className="col-class">CLASSIFICATION</th>
              <th className="col-date">DATE</th>
              <th className="col-arrow"></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <ProjectRow 
                key={project.id} 
                project={project} 
                onClick={() => onSelectProject(project)} 
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default EvidenceLog;
