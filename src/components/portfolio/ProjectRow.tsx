import React from 'react';
import type { Project } from '../../utils/projectData';

interface ProjectRowProps {
  project: Project;
  onClick: () => void;
}

export const ProjectRow: React.FC<ProjectRowProps> = ({ project, onClick }) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <tr 
      className="project-row" 
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Open case file ${project.caseNumber}: ${project.name}`}
      data-flip-id={`project-row-${project.id}`}
    >
      <td className="col-case-no">{project.caseNumber}</td>
      <td className="col-name">{project.name}</td>
      <td className="col-class">{project.classification}</td>
      <td className="col-date">{project.date}</td>
      <td className="col-arrow" aria-hidden="true">
        <span className="row-arrow">→</span>
      </td>
    </tr>
  );
};

export default ProjectRow;
