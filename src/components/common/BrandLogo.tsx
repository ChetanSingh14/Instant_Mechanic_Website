import React from 'react';
import logoMobileImg from '../../assets/logo.png';
import logoDesktopImg from '../../assets/logo-desktop.png';

export interface BrandLogoProps {
  size?: 'default' | 'large' | string;
  onClick?: () => void;
  variant?: 'light' | 'dark';
}

export default function BrandLogo({ size = 'default', onClick, variant = 'light' }: BrandLogoProps) {
  const isLarge = size === 'large';

  return (
    <div 
      className={`brand-logo ${isLarge ? 'brand-logo--large' : ''} ${variant === 'dark' ? 'brand-logo--on-dark' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      title="Instant Mechanic"
    >
      <img 
        src={logoDesktopImg} 
        alt="Instant Mechanic" 
        className="brand-logo__img brand-logo__img--desktop"
      />
      <img 
        src={logoMobileImg} 
        alt="Instant Mechanic" 
        className="brand-logo__img brand-logo__img--mobile"
      />
    </div>
  );
}
