import React from 'react';
import { skillCategories } from '../../utils/projectData';

export const Scene05Matrix: React.FC = () => {
  return (
    <section id="scene-05-capabilities" className="relative w-full max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-16 pb-20 select-none">
      {/* Substrate Metadata Ticker */}
      <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-md pb-space-lg border-b border-surface-container-highest/60 mb-10">
        <div className="flex items-center gap-space-sm">
          <span className="w-1.5 h-1.5 bg-secondary" />
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant font-bold">
            SYS_AUDIT // ID: NR-9942
          </span>
          <span className="font-label-sm text-label-sm text-outline hidden sm:inline">
            // 30.3165° N, 78.0322° E (DEHRADUN)
          </span>
        </div>
        <div className="flex items-center gap-space-md">
          <span className="font-label-sm text-label-sm text-outline font-mono">
            HASH: c0a80101-sha256-verified
          </span>
          <span className="px-space-xs py-0.5 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider font-bold">
            LEVEL 5 CLEARANCE
          </span>
        </div>
      </div>

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-xl">
        <div className="space-y-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
              SECTION 03 // TECHNICAL VERIFICATION
            </span>
            <span className="font-label-sm text-label-sm text-outline">[CAPABILITY_MATRIX]</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-['Bodoni_Moda']">
            Known Capabilities
          </h2>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md font-['Geist']">
          Empirically evaluated competencies in systems-level programming, concurrency control, database transactions, and computer science fundamentals.
        </p>
      </div>

      {/* Capabilities Grid (4 Columns Linear Taxonomy) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
        {skillCategories.map((cat, idx) => {
          const iconNames = ['terminal', 'hub', 'database', 'schema'];
          return (
            <div
              key={cat.id}
              className="bg-surface-container-low border border-outline-variant/40 p-space-lg flex flex-col justify-between hover:bg-surface-container transition-colors duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between pb-space-md border-b border-surface-container-highest/60 mb-3">
                  <span className="font-label-sm text-label-sm text-secondary font-bold font-mono">
                    {cat.categoryNumber}
                  </span>
                  <span className="material-symbols-outlined text-outline text-[18px] group-hover:text-primary transition-colors">
                    {iconNames[idx] || 'code'}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface pb-space-sm font-['Bodoni_Moda']">
                  {cat.name}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant pb-space-lg">
                  {cat.subtitle}
                </p>

                <ul className="space-y-space-sm font-label-md text-label-md text-on-surface">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center justify-between py-1 bg-surface-container-lowest/50 px-space-xs border border-outline-variant/20"
                    >
                      <span className="font-medium text-[13px]">{skill.name}</span>
                      <span className="font-label-sm text-[10px] text-secondary font-mono tracking-wider">
                        {skill.tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-space-lg pt-space-sm flex items-center justify-between text-outline font-label-sm text-label-sm border-t border-surface-container-highest/40">
                <span>VERIFIED: 100%</span>
                <span className="font-mono text-secondary font-semibold">SEC_LOG // OK</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Scene05Matrix;
