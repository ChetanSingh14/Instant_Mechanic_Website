import React from 'react';
import { useApp } from '../../context/AppContext';

// Individual assets from src/assets/carbuddy/
import phoneMockupImg from '../../assets/carbuddy/image 75.png';
import sparkleIcon from '../../assets/carbuddy/image 79.png';

export default function CarBuddySection() {
  const { openBookingModal } = useApp();

  const handleTryCarBuddy = () => {
    openBookingModal({
      id: 'carbuddy-ai',
      title: 'CarBuddy AI Car Diagnosis',
      category: 'AI Assistant',
      price: 'Free',
      desc: 'AI-powered car diagnosis that helps you understand the issue, estimate the cost, and know what to do next.',
    });
  };

  return (
    <section className="carbuddy-section" aria-label="India's First AI That Thinks Like a Technician, 24/7">
      <div className="carbuddy-container">
        {/* Dynamic Background Waves & Concentric Radar Rings */}
        <div className="carbuddy-bg-art" aria-hidden="true">
          <svg
            className="carbuddy-svg-canvas"
            viewBox="0 0 1440 730"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="cbWaveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EA580C" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#FB923C" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#FED7AA" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="cbWaveGrad2" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#EA580C" stopOpacity="0.3" />
                <stop offset="40%" stopColor="#F97316" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#FFF7ED" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Sweeping Left Ribbon */}
            <path
              d="M-50 420 C 180 480, 240 680, 520 730 L -50 730 Z"
              fill="url(#cbWaveGrad1)"
            />
            {/* Sweeping Right Ribbon */}
            <path
              d="M 850 730 C 1050 620, 1250 560, 1490 520 L 1490 730 Z"
              fill="url(#cbWaveGrad2)"
            />
            {/* Ambient Curved Wave lines */}
            <path
              d="M -10 380 Q 320 440 680 730"
              stroke="#EA580C"
              strokeWidth="2.5"
              strokeOpacity="0.45"
              fill="none"
            />
            <path
              d="M 760 730 Q 1120 540 1460 480"
              stroke="#EA580C"
              strokeWidth="2.5"
              strokeOpacity="0.45"
              fill="none"
            />

            {/* Orbit Radar Rings centered behind Phone */}
            <g transform="translate(1080, 420)" opacity="0.6">
              <circle r="180" stroke="#F97316" strokeWidth="1" strokeOpacity="0.28" strokeDasharray="5 7" />
              <circle r="250" stroke="#F97316" strokeWidth="1" strokeOpacity="0.22" />
              <circle r="330" stroke="#F97316" strokeWidth="1" strokeOpacity="0.16" strokeDasharray="3 6" />
              {/* Little glowing orbit particles */}
              <circle cx="-120" cy="-134" r="3" fill="#EA580C" opacity="0.75" />
              <circle cx="177" cy="177" r="3.5" fill="#EA580C" opacity="0.6" />
              <circle cx="-240" cy="80" r="2.5" fill="#EA580C" opacity="0.5" />
              <circle cx="100" cy="-314" r="3" fill="#EA580C" opacity="0.6" />
            </g>
          </svg>
        </div>

        <div className="carbuddy-content-grid">
          {/* Left Column: Heading, Subtitle, Gradient Button, and Slogan */}
          <div className="carbuddy-text-col">
            <h2 className="carbuddy-heading">
              <span className="carbuddy-heading-orange">India's First </span>
              <span className="carbuddy-heading-ai">AI</span>
              <span className="carbuddy-heading-dark"> That Thinks Like a Technician, 24/7.</span>
            </h2>

            <p className="carbuddy-desc">
              AI-powered car diagnosis that helps you understand the issue, estimate the cost, and know what to do next.
            </p>

            <div className="carbuddy-action-wrap">
              <button
                className="carbuddy-cta-btn"
                onClick={handleTryCarBuddy}
                aria-label="Try Car Buddy - Free"
              >
                <span>Try Car Buddy - Free</span>
                <img
                  src={sparkleIcon}
                  alt="Sparkle icon"
                  className="carbuddy-sparkle-icon"
                />
              </button>

              <p className="carbuddy-slogan">
                Know What's Wrong, Before You Call Anyone.
              </p>
            </div>
          </div>

          {/* Right Column: Phone Mockup with Glowing Neon Frame */}
          <div className="carbuddy-visual-col">
            <div className="carbuddy-phone-stage">
              <img
                src={phoneMockupImg}
                alt="CarBuddy AI diagnosis on mobile phone screen"
                className="carbuddy-phone-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
