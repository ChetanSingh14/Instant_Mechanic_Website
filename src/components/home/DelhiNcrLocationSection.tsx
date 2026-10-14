import React from 'react';
import mapImg from '../../assets/location/image 77.png';
import carCheckImg from '../../assets/location/image 30.png';
import vectorCar from '../../assets/location/Vector.png';

export default function DelhiNcrLocationSection() {
  const cities = [
    'Gurugram', 'New Delhi', 'Noida', 'Faridabad',
    'Ghaziabad', 'Greater Noida', 'Manesar', 'Dwarka',
    'Rohini', 'NH8 / NH48', 'DND Corridor', 'Indirapuram'
  ];

  return (
    <section className="delhi-ncr-location-section" id="coverage-area">
      <div className="delhi-ncr-container">
        {/* Left Column: Heading, Subtitle, City Pills, Expanding Badge */}
        <div className="delhi-ncr-left-col">
          <h2 className="location-section-title">
            Roadside help, across <span className="text-orange">Delhi NCR.</span>
          </h2>
          
          <p className="location-section-subtitle">
            From Delhi to Gurugram, Noida and beyond. 500+ mechanics across the region.
          </p>

          {/* 12 City Pills (4 columns x 3 rows) */}
          <div className="location-cities-grid">
            {cities.map((city) => (
              <div key={city} className="location-city-pill">
                <span>{city}</span>
              </div>
            ))}
          </div>

          {/* Expanding beyond Delhi NCR Badge */}
          <div className="location-expanding-badge">
            <div className="expanding-icon-wrap">
              <img src={carCheckImg} alt="Expanding beyond Delhi NCR" className="expanding-car-img" />
            </div>
            <div className="expanding-text-wrap">
              <div className="expanding-title">Expanding beyond Delhi NCR.</div>
              <div className="expanding-subtitle">More cities, coming soon.</div>
            </div>
          </div>
        </div>

        {/* Right Column: Folded 3D Map, Floating Car Pin & 500+ Network Stat */}
        <div className="delhi-ncr-right-col">
          {/* Subtle warm orange gradient glow behind the map */}
          <div className="map-background-glow"></div>

          <div className="map-visual-wrapper">
            {/* Folded Map Graphic */}
            <img 
              src={mapImg} 
              alt="Roadside help across Delhi NCR Map" 
              className="location-folded-map"
            />

            {/* Floating Car Pin Marker on Map */}
            <div className="map-car-pin-marker" aria-label="Delhi NCR mechanic pin">
              <div className="pin-circle-head">
                <img src={vectorCar} alt="Car pin" className="pin-car-icon" />
              </div>
              <div className="pin-pointer-tail"></div>
              <div className="pin-ground-shadow"></div>
            </div>
          </div>

          {/* 500 + Verified Mechanics Network */}
          <div className="location-network-stat">
            <span className="network-stat-count">500 +</span>
            <span className="network-stat-label">Verified Mechanics Network</span>
          </div>
        </div>
      </div>
    </section>
  );
}
