import React, { useEffect, useState } from 'react';

interface ThreatMeterProps {
  label: string;
  level: number;
  isRevealed: boolean;
  delay?: number;
}

export const ThreatMeter: React.FC<ThreatMeterProps> = ({ 
  label, 
  level, 
  isRevealed, 
  delay = 0 
}) => {
  const [currentWidth, setCurrentWidth] = useState(0);

  useEffect(() => {
    if (isRevealed) {
      const timer = setTimeout(() => {
        setCurrentWidth(level);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      setCurrentWidth(0);
    }
  }, [isRevealed, level, delay]);

  return (
    <div className="threat-meter-container">
      <div className="threat-meter-header">
        <span className="threat-meter-label">{label}</span>
        <span className="threat-meter-value">{isRevealed ? `${level}%` : '██%'}</span>
      </div>
      <div className="threat-meter-track" aria-hidden="true">
        <div 
          className="threat-meter-fill" 
          style={{ 
            width: `${currentWidth}%`,
            transition: 'width 800ms cubic-bezier(0.16, 1, 0.3, 1)' 
          }}
        />
      </div>
    </div>
  );
};

export default ThreatMeter;
