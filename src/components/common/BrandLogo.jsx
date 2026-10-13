import React from 'react';
import logoImg from '../../assets/logo.png';

export default function BrandLogo({ size = 'default', onClick, variant = 'light' }) {
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
        src={logoImg} 
        alt="Instant Mechanic" 
        className="brand-logo__img"
      />
    </div>
  );
}
