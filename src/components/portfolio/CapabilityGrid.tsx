import React from 'react';

export const CapabilityGrid: React.FC = () => {
  return (
    <section id="capabilities" className="portfolio-section capabilities-section">
      <div className="section-meta">LOG // 002_CAPABILITIES_RECORD</div>
      <h2 className="section-title">KNOWN CAPABILITIES</h2>
      
      <div className="capabilities-grid">
        <div className="capability-col">
          <h3 className="category-header">CORE LANGUAGES</h3>
          <ul className="tech-list">
            <li className="tech-item" data-flip-id="tech-Python / AI">Python</li>
            <li className="tech-item">JavaScript</li>
            <li className="tech-item" data-flip-id="tech-TypeScript">TypeScript</li>
            <li className="tech-item">C++</li>
          </ul>
        </div>
        
        <div className="capability-col">
          <h3 className="category-header">FRAMEWORKS & TOOLS</h3>
          <ul className="tech-list">
            <li className="tech-item" data-flip-id="tech-React.js">React.js</li>
            <li className="tech-item">Next.js</li>
            <li className="tech-item" data-flip-id="tech-Node.js">Node.js</li>
            <li className="tech-item">Express</li>
            <li className="tech-item">Tailwind CSS</li>
          </ul>
        </div>
        
        <div className="capability-col">
          <h3 className="category-header">AI & INFRASTRUCTURE</h3>
          <ul className="tech-list">
            <li className="tech-item">OpenAI API</li>
            <li className="tech-item">LangChain</li>
            <li className="tech-item">PostgreSQL</li>
            <li className="tech-item">Redis</li>
            <li className="tech-item">Docker</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CapabilityGrid;
