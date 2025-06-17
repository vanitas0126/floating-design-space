
import { ReactNode } from 'react';

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const FloatingElement = ({ children, className = '', delay = 0 }: FloatingElementProps) => {
  return (
    <div
      className={`${className}`}
      style={{
        animation: `float 8s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default FloatingElement;
