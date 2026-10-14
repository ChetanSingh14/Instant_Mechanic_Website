import React from 'react';
import carBrandsImg from '../../assets/carbrand/Car brands.png';

export default function CarBrandsSection() {
  return (
    <section className="car-brands-trust-section" id="car-brands">
      <div className="car-brands-header text-center">
        <h2 className="car-brands-title">
          Trusted across <span className="text-orange">40+</span> car brands
        </h2>
        <p className="car-brands-subtitle">
          From everyday commuters to premium vehicles, we've got your car covered.
        </p>
      </div>

      {/* Full-width Logo Strip Container matching exact Figma strip background */}
      <div className="car-brands-strip-wrapper">
        <div className="car-brands-marquee-track">
          <img 
            src={carBrandsImg} 
            alt="Trusted car brands - Ferrari, Datsun, Jeep, Citroen, Isuzu, Lamborghini, Fiat" 
            className="car-brands-strip-img"
          />
          {/* Duplicate for seamless infinite marquee loop on mobile */}
          <img 
            src={carBrandsImg} 
            alt="Trusted car brands loop" 
            className="car-brands-strip-img car-brands-strip-img--duplicate"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
