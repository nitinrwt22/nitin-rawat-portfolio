import React from 'react';

export const ContactTerminal: React.FC = () => {
  return (
    <section id="contact" className="portfolio-section contact-section">
      <div className="section-meta">LOG // 005_CONTACT_INTERFACE</div>
      <h2 className="section-title">OPEN A NEW CASE</h2>
      
      <div className="contact-terminal">
        <p className="terminal-prompt">Ready to add value to an exceptional team. Initiate outreach.</p>
        
        <div className="terminal-links-grid">
          <div className="terminal-row">
            <span className="terminal-label">[Email]</span>
            <a href="mailto:work@nitinrawat.com" className="terminal-value">
              work@nitinrawat.com
            </a>
          </div>
          
          <div className="terminal-row">
            <span className="terminal-label">[LinkedIn]</span>
            <a 
              href="https://linkedin.com/in/nitinrawat" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="terminal-value"
            >
              linkedin.com/in/nitinrawat
            </a>
          </div>
          
          <div className="terminal-row">
            <span className="terminal-label">[GitHub]</span>
            <a 
              href="https://github.com/nitinrawat" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="terminal-value"
            >
              github.com/nitinrawat
            </a>
          </div>

          <div className="terminal-row download-row">
            <span className="terminal-label">[Resume]</span>
            <a 
              href="/nitin_rawat_resume.pdf" 
              download 
              className="terminal-download-btn"
            >
              DOWNLOAD CASE FILE PDF &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactTerminal;
