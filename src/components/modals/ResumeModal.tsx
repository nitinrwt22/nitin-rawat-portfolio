import React from 'react';
import { personalInfo, projects } from '../../utils/projectData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-surface-container-low border border-outline-variant/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] flex flex-col overflow-hidden text-on-surface">
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-surface-container border-b border-surface-container-highest">
          <div className="flex items-center gap-2 font-mono text-[12px]">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span className="text-secondary font-bold uppercase tracking-wider">
              OFFICIAL ARCHIVE // DOSSIER CURRICULUM VITAE
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.resumeUrl}
              download="Nitin_Rawat_Resume.pdf"
              className="px-3 py-1 bg-surface-container-high hover:bg-surface-bright text-primary font-mono text-[11px] uppercase tracking-wider border border-outline-variant/40 flex items-center gap-1.5 transition-colors"
            >
              <span className="material-symbols-outlined text-[14px]">download</span>
              <span>Download PDF</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1 hover:bg-surface-container-high text-outline hover:text-primary transition-colors focus:outline-none"
              aria-label="Close resume modal"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 font-['Geist'] text-sm leading-relaxed">
          {/* Header Info */}
          <div className="border-b border-surface-container-highest/60 pb-6">
            <h2 id="resume-title" className="text-[30px] sm:text-[32px] text-primary uppercase font-['Bodoni_Moda'] font-bold leading-snug">
              {personalInfo.name}
            </h2>
            <p className="text-secondary font-mono text-[13px] tracking-wide mt-1">
              {personalInfo.designation}
            </p>
            <p className="text-on-surface-variant text-[13px] mt-2 max-w-2xl">
              {personalInfo.positioning}
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 font-mono text-[12px] text-outline">
              <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">
                Email: {personalInfo.email}
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                GitHub: github.com/nitinrwt22
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                LinkedIn: in/nitin-rawat
              </a>
              <a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                LeetCode: 640+ Solved (1800+ Rating)
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-mono text-[12px] tracking-widest text-secondary uppercase font-bold mb-3">
              EDUCATION & ACADEMICS
            </h3>
            <div className="space-y-4">
              <div className="bg-surface-container/60 p-4 border border-outline-variant/30">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-mono text-[12px]">
                  <strong className="text-primary text-[14px]">Graphic Era Hill University, Dehradun</strong>
                  <span className="text-outline">2024 — 2028</span>
                </div>
                <div className="text-on-surface-variant text-[13px] mt-1">
                  Bachelor of Technology in Computer Science & Engineering (B.Tech CSE)
                </div>
                <div className="text-secondary font-mono text-[12px] font-bold mt-1">
                  CGPA: 8.78
                </div>
              </div>

              <div className="bg-surface-container/60 p-4 border border-outline-variant/30">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-mono text-[12px]">
                  <strong className="text-primary text-[14px]">Army Public School, Clement Town, Dehradun</strong>
                  <span className="text-outline">Graduated 2024</span>
                </div>
                <div className="text-on-surface-variant text-[13px] mt-1">
                  Senior Secondary, CBSE (Class XII)
                </div>
                <div className="text-primary font-mono text-[12px] mt-1">
                  Aggregate Score: 88.6%
                </div>
              </div>
            </div>
          </div>

          {/* Technical Projects */}
          <div>
            <h3 className="font-mono text-[12px] tracking-widest text-secondary uppercase font-bold mb-3">
              TECHNICAL SYSTEMS & PROJECTS
            </h3>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id} className="bg-surface-container/60 p-4 border border-outline-variant/30">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <strong className="text-primary text-[15px] font-['Bodoni_Moda']">{proj.title}</strong>
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] text-secondary hover:text-primary transition-colors"
                    >
                      [VIEW REPOSITORY]
                    </a>
                  </div>
                  <div className="font-mono text-[11px] text-outline mt-0.5">
                    Technologies: {proj.technologies.join(' · ')}
                  </div>
                  <ul className="list-disc list-inside mt-2.5 space-y-1 text-on-surface-variant text-[13px]">
                    {proj.architecture.map((arch, i) => (
                      <li key={i}>{arch}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Hackathons & Problem Solving */}
          <div>
            <h3 className="font-mono text-[12px] tracking-widest text-secondary uppercase font-bold mb-3">
              ACHIEVEMENTS & PROBLEM SOLVING
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-surface-container/60 p-4 border border-outline-variant/30">
                <span className="font-mono text-[11px] text-secondary font-bold block mb-1">
                  COMPETITIVE PROGRAMMING
                </span>
                <div className="text-primary font-bold text-[14px]">
                  LeetCode 640+ Problems Solved
                </div>
                <p className="text-on-surface-variant text-[12px] mt-1">
                  Contest Rating 1800+ with demonstrated algorithmic mastery across trees, graphs, dynamic programming, and heaps.
                </p>
              </div>

              <div className="bg-surface-container/60 p-4 border border-outline-variant/30">
                <span className="font-mono text-[11px] text-secondary font-bold block mb-1">
                  HACKATHON FINALIST
                </span>
                <div className="text-primary font-bold text-[14px]">
                  Hack4Delhi — NSUT, Delhi
                </div>
                <p className="text-on-surface-variant text-[12px] mt-1">
                  Finalist for multimodal misinformation detection using BERT, OCR, and FastAPI; veteran of 8+ hackathons.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div className="px-6 py-3 bg-surface-container border-t border-surface-container-highest flex items-center justify-between font-mono text-[11px] text-outline">
          <span>STATUS: VERIFIED RESUME RECORD</span>
          <button
            type="button"
            onClick={onClose}
            className="text-primary hover:text-secondary uppercase font-bold transition-colors cursor-pointer"
          >
            CLOSE DOSSIER
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
