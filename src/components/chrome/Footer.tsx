import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-surface-container-lowest py-space-xl border-t border-surface-container-highest/40 select-none">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col md:flex-row items-center justify-between gap-space-md text-center md:text-left">
        <div className="flex flex-col gap-space-xs">
          <span className="font-label-md text-label-md text-on-surface tracking-wider uppercase font-semibold">
            FEDERAL REPOSITORY // DOSSIER NR-001
          </span>
          <span className="font-label-sm text-label-sm text-outline">
            SECURITY CLEARANCE LEVEL 5 REQUIRED FOR ARCHIVAL MODIFICATION
          </span>
        </div>
        <div className="font-label-sm text-label-sm text-on-surface-variant">
          © 2025 NITIN RAWAT. ALL RIGHTS RESERVED // CODE DIVISION.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
