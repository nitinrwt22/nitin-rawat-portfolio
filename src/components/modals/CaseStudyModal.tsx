import React from 'react';
import type { Project } from '../../utils/projectData';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-surface-container-low border border-outline-variant/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] flex flex-col overflow-hidden text-on-surface">
        {/* Header Ribbon */}
        <div className="flex items-center justify-between px-6 py-4 bg-surface-container border-b border-surface-container-highest">
          <div className="flex items-center gap-2 font-mono text-[11px]">
            <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container font-bold uppercase">
              {project.caseNumber}
            </span>
            <span className="text-outline uppercase tracking-wider">
              {project.refCode} // {project.classification}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1 hover:bg-surface-container-high text-outline hover:text-primary transition-colors focus:outline-none"
            aria-label="Close case study modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 font-['Geist'] text-sm">
          <div>
            <h2 id="case-study-title" className="text-[26px] sm:text-[28px] text-primary font-['Bodoni_Moda'] font-bold leading-snug mb-2">
              {project.title}
            </h2>
            <p className="text-secondary font-mono text-[12px] uppercase tracking-wider mb-2">
              STATUS: {project.status} // YEAR: {project.date}
            </p>
            <p className="text-on-surface-variant text-[14px] leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Metric Chips */}
          <div className="grid grid-cols-3 gap-3">
            {project.metrics.map((m, i) => (
              <div key={i} className="bg-surface-container p-3 border border-outline-variant/30 text-center">
                <span className="font-mono text-[10px] text-outline uppercase block mb-0.5">
                  {m.label}
                </span>
                <span className="font-mono text-[13px] text-primary font-bold">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Problem vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-surface-container p-4 border border-outline-variant/30 space-y-1.5">
              <span className="font-mono text-[11px] text-secondary font-bold uppercase block">
                THE CHALLENGE & PROBLEM
              </span>
              <p className="text-on-surface-variant text-[13px] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="bg-surface-container p-4 border border-outline-variant/30 space-y-1.5">
              <span className="font-mono text-[11px] text-primary font-bold uppercase block">
                ENGINEERING ARCHITECTURE
              </span>
              <p className="text-on-surface-variant text-[13px] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Checklist */}
          <div>
            <h3 className="font-mono text-[12px] text-secondary font-bold uppercase tracking-wider mb-2">
              VERIFIED RESUME ARCHITECTURE & INVARIANTS
            </h3>
            <ul className="space-y-2 font-mono text-[12px] text-on-surface">
              {project.architecture.map((arch, i) => (
                <li key={i} className="flex items-start gap-2 bg-surface-container/60 p-2.5 border border-outline-variant/20">
                  <span className="text-secondary font-bold pt-0.5">[{`0${i + 1}`}]</span>
                  <span>{arch}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="font-mono text-[12px] text-outline font-bold uppercase tracking-wider mb-2">
              TECHNOLOGY STACK
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span key={t} className="px-2.5 py-1 bg-surface-container-highest text-primary font-mono text-[11px] border border-outline-variant/40">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-surface-container border-t border-surface-container-highest flex items-center justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-primary text-on-primary font-mono text-[11px] uppercase font-bold tracking-wider hover:bg-primary-fixed transition-colors flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[14px]">terminal</span>
            <span>Inspect GitHub Repository</span>
          </a>

          <button
            type="button"
            onClick={onClose}
            className="font-mono text-[11px] text-outline hover:text-primary uppercase tracking-wider transition-colors cursor-pointer"
          >
            Close Exhibit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
