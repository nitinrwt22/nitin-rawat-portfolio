import React from 'react';
import { personalInfo } from '../../utils/projectData';
import { useAudio } from '../../hooks/useAudio';

interface Scene07ContactProps {
  onOpenResumeModal: () => void;
}

export const Scene07Contact: React.FC<Scene07ContactProps> = ({ onOpenResumeModal }) => {
  const { playSFX } = useAudio();

  const handleResumeView = (e: React.MouseEvent) => {
    e.preventDefault();
    playSFX('paper_rustle', 0.7);
    onOpenResumeModal();
  };

  return (
    <section id="scene-07-dossier-contact" className="relative w-full max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-16 pb-32 select-none">
      {/* =========================================================================
          SECTION 3: FULL DOSSIER / RÉSUMÉ ACCESS
          ========================================================================= */}
      <div className="bg-surface-container p-space-lg lg:p-space-xl relative overflow-hidden shadow-xl border border-outline-variant/40 mb-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-space-lg">
          {/* Dossier Meta & File Stamp */}
          <div className="flex items-start gap-space-md w-full lg:w-auto">
            <div className="w-12 h-14 bg-surface-container-lowest border border-outline-variant/50 flex flex-col items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-secondary text-[24px]">
                description
              </span>
              <span className="font-label-sm text-[10px] text-outline uppercase font-bold font-mono">
                PDF
              </span>
            </div>
            <div className="space-y-space-xs">
              <div className="flex items-center gap-space-xs">
                <span className="font-label-sm text-label-sm text-secondary font-bold font-mono">
                  OFFICIAL DOCUMENT: NITIN_RAWAT_SWE_RESUME.PDF
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-['Bodoni_Moda']">
                Candidate Summary Dossier
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl font-['Geist']">
                Comprehensive one-page verified curriculum vitae containing verified metrics, technical work histories, and academic references.
              </p>
            </div>
          </div>

          {/* Document Action Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm w-full lg:w-auto shrink-0">
            <button
              type="button"
              onClick={handleResumeView}
              className="px-space-md py-space-sm bg-primary text-on-primary font-label-md text-label-md uppercase font-bold tracking-wider hover:bg-primary-fixed transition-colors flex items-center justify-center gap-space-xs text-center shadow-md cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">visibility</span>
              <span>View Resume (Interactive)</span>
            </button>
            <a
              href={personalInfo.resumeUrl}
              download="Nitin_Rawat_Resume.pdf"
              className="px-space-md py-space-sm bg-surface-container-highest text-on-surface font-label-md text-label-md uppercase font-medium tracking-wider hover:bg-surface-bright transition-colors flex items-center justify-center gap-space-xs text-center border border-outline-variant/40"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Footprint Subtext */}
        <div className="pt-space-md mt-space-md flex flex-wrap items-center justify-between gap-space-xs text-outline font-label-sm text-label-sm border-t border-surface-container-highest/40 font-mono">
          <span>SHA256: 7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069</span>
          <span className="text-secondary font-bold">LAST ACCREDITED: 2025 // ENCRYPTED ACCESS ONLY</span>
        </div>
      </div>

      {/* =========================================================================
          SECTION 4: ESTABLISH CONTACT
          ========================================================================= */}
      <div className="bg-surface-container-low border border-outline-variant/40 p-space-lg lg:p-space-xl">
        {/* Large Closing Headline Area */}
        <div className="flex flex-col gap-space-md pb-space-xl border-b border-surface-container-highest/40 mb-8">
          <div className="flex items-center gap-space-xs">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
              SECTION 05 // SECURE DIRECT DISPATCH
            </span>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight max-w-4xl font-['Bodoni_Moda']">
            CASE CLOSED. NEXT CHAPTER: YOURS.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl font-['Geist']">
            Currently reviewing opportunities for <strong className="text-on-surface font-semibold">Software Engineering Internships</strong> and <strong className="text-on-surface font-semibold">Full-Time Roles</strong>. Available immediately to tackle mission-critical engineering initiatives and complex distributed platforms.
          </p>
        </div>

        {/* Direct Contact Channels & Interactive Dispatch Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md pb-space-lg">
          {/* Direct Link Cards (Column Span 7) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
            {/* Email Item */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="bg-surface-container border border-outline-variant/30 p-space-md flex flex-col justify-between hover:bg-surface-container-highest transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between pb-space-sm text-outline group-hover:text-secondary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                </div>
                <span className="font-label-sm text-label-sm text-outline block pb-space-xs font-mono">
                  SECURE INBOX
                </span>
                <span className="font-body-sm text-body-sm text-on-surface font-medium break-all">
                  {personalInfo.email}
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-secondary pt-space-md block font-bold font-mono">
                SEND TRANSMISSION
              </span>
            </a>

            {/* GitHub Item */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface-container border border-outline-variant/30 p-space-md flex flex-col justify-between hover:bg-surface-container-highest transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between pb-space-sm text-outline group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">code</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                </div>
                <span className="font-label-sm text-label-sm text-outline block pb-space-xs font-mono">
                  VERSION CONTROL
                </span>
                <span className="font-body-sm text-body-sm text-on-surface font-medium">
                  github.com/nitinrwt22
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant pt-space-md block font-mono">
                VIEW REPOSITORIES
              </span>
            </a>

            {/* LinkedIn Item */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface-container border border-outline-variant/30 p-space-md flex flex-col justify-between hover:bg-surface-container-highest transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between pb-space-sm text-outline group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">badge</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                </div>
                <span className="font-label-sm text-label-sm text-outline block pb-space-xs font-mono">
                  PROFESSIONAL NETWORK
                </span>
                <span className="font-body-sm text-body-sm text-on-surface font-medium">
                  linkedin.com/in/nitin-rawat
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant pt-space-md block font-mono">
                CONNECT PROFILE
              </span>
            </a>

            {/* LeetCode Item */}
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface-container border border-outline-variant/30 p-space-md flex flex-col justify-between hover:bg-surface-container-highest transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between pb-space-sm text-outline group-hover:text-secondary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">terminal</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                </div>
                <span className="font-label-sm text-label-sm text-outline block pb-space-xs font-mono">
                  LEETCODE VERIFIED
                </span>
                <span className="font-body-sm text-body-sm text-on-surface font-medium">
                  640+ Solved // 1800+ Rating
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-secondary pt-space-md block font-bold font-mono">
                INSPECT ALGORITHMS
              </span>
            </a>
          </div>

          {/* Primary Dispatch Interactive CTA Card (Column Span 5) */}
          <div className="lg:col-span-5 bg-surface-container border border-outline-variant/30 p-space-md flex flex-col justify-between">
            <div className="space-y-space-xs pb-space-sm">
              <span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-widest block font-mono">
                FAST-TRACK ENGAGEMENT
              </span>
              <h4 className="font-headline-sm text-headline-sm text-on-surface font-['Bodoni_Moda']">
                Direct Executive Dispatch
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-['Geist']">
                Immediate notification delivered directly to terminal and encrypted mobile endpoints.
              </p>
            </div>
            <div className="pt-space-md">
              <a
                className="w-full py-space-sm px-space-md bg-secondary-container hover:bg-on-secondary-fixed-variant text-on-secondary-container font-label-md text-label-md uppercase font-bold tracking-wider transition-all duration-150 flex items-center justify-between shadow-lg"
                href={`mailto:${personalInfo.email}?subject=SWE%20Opportunity%20Discussion%20-%20Nitin%20Rawat`}
              >
                <span>ESTABLISH CONTACT // SEND MESSAGE</span>
                <span className="material-symbols-outlined text-[18px]">terminal</span>
              </a>
            </div>
          </div>
        </div>

        {/* Terminal Signal Status Footer Bar */}
        <div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-xs font-label-sm text-label-sm text-outline border-t border-surface-container-highest/40 font-mono">
          <div className="flex items-center gap-space-xs">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span>DISPATCH STATUS: READY // ENCRYPTION AES-256</span>
          </div>
          <span>TRANSMISSION ROUTE: DIRECT PORT 443 // ACTIVE SOCKET</span>
        </div>
      </div>
    </section>
  );
};

export default Scene07Contact;
