import React, { useEffect, useState } from 'react';

interface RedactedFieldProps {
  text: string;
  isRevealed: boolean;
  revealDelay?: number;
  ariaLabel?: string;
}

export const RedactedField: React.FC<RedactedFieldProps> = ({ 
  text, 
  isRevealed, 
  revealDelay = 0,
  ariaLabel
}) => {
  const [activeReveal, setActiveReveal] = useState(false);

  useEffect(() => {
    if (isRevealed) {
      const timer = setTimeout(() => {
        setActiveReveal(true);
      }, revealDelay);
      return () => clearTimeout(timer);
    } else {
      setActiveReveal(false);
    }
  }, [isRevealed, revealDelay]);

  return (
    <span 
      className="redacted-field-wrapper" 
      aria-label={ariaLabel || text}
    >
      <span className="redacted-text-content">{text}</span>
      <span 
        className={`redaction-bar ${activeReveal ? 'revealed' : ''}`} 
        aria-hidden="true"
      />
    </span>
  );
};

export default RedactedField;
