import React from 'react';
import { historyRecords } from '../../utils/projectData';

export const Scene06History: React.FC = () => {
  return (
    <section id="scene-06-case-history" className="relative w-full max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-16 pb-20 select-none">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-xl border-b border-surface-container-highest/60 mb-10">
        <div className="space-y-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
              SECTION 04 // OPERATIONAL TIMELINE
            </span>
            <span className="font-label-sm text-label-sm text-outline">[CHRONO_LOG_ARCHIVE]</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-['Bodoni_Moda']">
            Case History
          </h2>
        </div>
        <div className="flex items-center gap-space-sm font-label-sm text-label-sm text-on-surface-variant">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span>CHRONOLOGY: AUDITED & SIGNED OFF</span>
        </div>
      </div>

      {/* Linear Case Timeline Stack */}
      <div className="flex flex-col gap-space-md">
        {historyRecords.map((record) => (
          <article
            key={record.id}
            className="bg-surface-container-low border border-outline-variant/40 p-space-lg lg:p-space-xl relative overflow-hidden group hover:bg-surface-container transition-colors shadow-md"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-space-md pb-space-md border-b border-surface-container-highest/40">
              <div>
                <div className="flex flex-wrap items-center gap-space-sm pb-space-xs">
                  <span className="font-label-sm text-label-sm text-secondary font-bold tracking-widest uppercase font-mono">
                    {record.caseRef}
                  </span>
                  <span className="font-label-sm text-label-sm bg-surface-container-highest px-space-xs py-0.5 text-on-surface uppercase tracking-wider font-semibold">
                    {record.statusBadge}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface font-['Bodoni_Moda']">
                  {record.title}
                </h3>
                <p className="font-body-md text-body-md text-secondary font-medium pt-space-xs font-['Geist']">
                  {record.subtitle}
                </p>
              </div>

              <div className="text-left lg:text-right font-label-md text-label-md text-outline">
                <span className="block text-on-surface font-bold font-mono">{record.dates}</span>
                <span className="text-[11px]">{record.location}</span>
              </div>
            </div>

            {/* Concrete Technical Evidence Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-md">
              {record.telemetry.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-surface-container-lowest/80 border border-outline-variant/30 p-space-md flex flex-col justify-between"
                >
                  <div>
                    <span className="font-label-sm text-label-sm text-secondary uppercase font-bold pb-space-xs block font-mono">
                      {t.tag}
                    </span>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface pb-space-xs font-['Bodoni_Moda']">
                      {t.headline}
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant font-['Geist']">
                      {t.description}
                    </p>
                  </div>
                  <div className="font-label-sm text-label-sm text-outline pt-space-sm mt-space-sm flex items-center justify-between border-t border-surface-container-highest/40 font-mono">
                    <span className="text-on-surface-variant">{t.badgeLeft}</span>
                    <span className="text-secondary font-bold">{t.badgeRight}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Scene06History;
