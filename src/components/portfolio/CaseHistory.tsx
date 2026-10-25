import React from 'react';
import { serviceRecords, type ServiceRecord } from '../../utils/projectData';

export const CaseHistory: React.FC = () => {
  return (
    <section id="history" className="portfolio-section history-section">
      <div className="section-meta">LOG // 003_SERVICE_RECORD</div>
      <h2 className="section-title">CASE HISTORY</h2>
      
      <div className="service-record-container">
        {serviceRecords.map((record: ServiceRecord, index: number) => (
          <div key={index} className="service-record-item">
            <div className="record-header">
              <h3 className="company-name">{record.company}</h3>
              <span className="record-dates">{record.dates}</span>
            </div>
            <div className="record-role">{record.role}</div>
            <p className="record-description">{record.description}</p>
            <div className="record-tech">
              <span className="record-tech-label">ENGAGED TECHNOLOGIES:</span>{' '}
              <span className="record-tech-list">{record.technologies.join(' · ')}</span>
            </div>
            {index < serviceRecords.length - 1 && <div className="record-divider" />}
          </div>
        ))}
      </div>
      
      {/* Editorial Verdict / Philosophy */}
      <div className="verdict-section">
        <div className="section-meta">LOG // 004_FINAL_VERDICT</div>
        <h3 className="verdict-label">PHILOSOPHY</h3>
        <p className="verdict-text">
          I believe software engineering is not merely writing code, but an ongoing investigation into 
          performance, reliability, and human utility. The most premium systems are not built by adding features, 
          but by stripping away noise until only the structural evidence remains. Performance is a design decision, 
          and restraint is the ultimate signature of quality.
        </p>
      </div>
    </section>
  );
};

export default CaseHistory;
