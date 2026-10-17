import React from 'react';
import { useApp } from '../../context/AppContext';

// Assets from src/assets/van/
import mobileAndVanImg from '../../assets/van/mobile image.png';
import vanSideImg from '../../assets/van/image 23.png';
import mechanicAvatarImg from '../../assets/van/image 27.png';
import mapPinImg from '../../assets/van/image 28.png';

export default function VanHelpSection() {
  const { openSOSModal } = useApp();

  const handleCallHelp = () => {
    // If user has tel handler or we can open SOS modal
    if (typeof window !== 'undefined') {
      window.location.href = 'tel:+919876543210';
    }
  };

  return (
    <section className="van-help-section" aria-label="Instant Roadside Help In 15 Mins">
      <div className="van-help-container">
        {/* Left Side: Mobile Phone WhatsApp & Van Showcase Image */}
        <div className="van-help-visual">
          <img
            src={mobileAndVanImg}
            alt="Instant Mechanic WhatsApp Location Sharing and Service Van"
            className="van-help-main-img"
            loading="lazy"
          />
        </div>

        {/* Right Side: Headline, Tracker Card, and Emergency CTA */}
        <div className="van-help-content">
          <h2 className="van-help-title">
            Help is just a <span className="van-help-title-orange">message away.</span>
          </h2>
          <p className="van-help-subtitle">
            Tell us what’s wrong. Share your location. We’ll send help your way. Instant roadside help in 15 minutes.
          </p>

          {/* Mechanic On the Way Tracker Card */}
          <div className="van-tracker-card">
            <div className="van-tracker-top">
              <div className="van-tracker-info">
                <span className="van-tracker-label">Mechanic On the Way</span>
                <div className="van-tracker-eta">
                  <span className="van-tracker-num">15</span>
                  <span className="van-tracker-unit">mins away</span>
                </div>
              </div>

              <div className="van-tracker-badge">
                <img
                  src={vanSideImg}
                  alt="Instant Mechanic Emergency Van"
                  className="van-tracker-van-img"
                />
              </div>
            </div>

            {/* Live Progress Bar from Mechanic to Location Map Pin */}
            <div className="van-tracker-route">
              <div className="van-route-line-wrap">
                <div className="van-route-line">
                  <div className="van-route-progress">
                    <div className="van-route-mechanic-pin">
                      <img
                        src={mechanicAvatarImg}
                        alt="Mechanic"
                        className="van-route-avatar"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="van-route-node van-route-node--dest">
                <img
                  src={mapPinImg}
                  alt="Your Location Map"
                  className="van-route-map"
                />
              </div>
            </div>
          </div>

          {/* Bottom CTA Strip */}
          <div className="van-help-cta-row">
            <span className="van-help-cta-text">Need road Assistance Now ?</span>
            <button
              className="van-call-btn"
              onClick={handleCallHelp}
              aria-label="Call for instant roadside help"
            >
              Call for help
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
