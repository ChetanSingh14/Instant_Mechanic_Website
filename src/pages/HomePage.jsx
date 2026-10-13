import React from 'react';
import { 
  Clock, 
  ShieldCheck, 
  Star, 
  Car, 
  ArrowRight, 
  Wrench, 
  Zap, 
  CheckCircle, 
  PhoneCall,
  Sparkles,
  MapPin,
  ChevronRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HERO_STATS, SERVICE_CATEGORIES, SERVICE_BENEFITS } from '../data/mockData';
import RoadsideHelpSection from '../components/home/RoadsideHelpSection';

export default function HomePage() {
  const { navigateTo, openBookingModal, openSOSModal } = useApp();

  return (
    <div className="home-page-container">
      {/* Hero Banner Section (Matches Screenshot 2 with Background Image) */}
      <section className="home-hero">
        <div className="home-hero__container">
          <div className="home-hero__content">
            <h1 className="hero-title">
              Car Trouble? <br />
              Get Car Mechanic <br />
              <span className="hero-title-highlight">in 15 mins</span>
            </h1>

            <div className="hero-cta-group">
              <button 
                className="hero-primary-btn"
                onClick={() => openBookingModal(SERVICE_CATEGORIES[0])}
              >
                Book a Mechanic Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar (Matches Screenshot 2 Full-Width Strip) */}
      <section className="stats-strip-section" aria-label="Company Statistics">
        <div className="stats-strip-container">
          <div className="stat-card">
            <span className="stat-card__value">
              50,000<span className="stat-card__highlight">+</span>
            </span>
            <span className="stat-card__label">Cars Served</span>
          </div>

          <div className="stat-card">
            <span className="stat-card__value">
              4.9 <span className="stat-card__highlight">★</span>
            </span>
            <span className="stat-card__label">Google Rating</span>
          </div>

          <div className="stat-card">
            <span className="stat-card__value">
              <span className="stat-card__highlight">15</span> mins
            </span>
            <span className="stat-card__label">Response Time</span>
          </div>

          <div className="stat-card">
            <span className="stat-card__value">
              500<span className="stat-card__highlight">+</span>
            </span>
            <span className="stat-card__label">Verified Mechanics</span>
          </div>
        </div>
      </section>

      <div className="page-wrapper home-page">
        {/* Roadside Help Section (Exact Match to Figma Images & Mobile Horizontal Scroll) */}
        <RoadsideHelpSection />

      {/* Why Choose Instant Mechanic Section (Matches Figma Image 2 & 3) */}
      <section className="home-why-us">
        <div className="why-us-container">
          <div className="text-center mb-8">
            <h2 className="section-heading">
              Why Choose <span className="text-orange-600">Instant Mechanic?</span>
            </h2>
            <p className="section-subheading">
              Designed to eliminate repair anxiety with transparent pricing and verified doorstep mechanics.
            </p>
          </div>

          <div className="why-us-grid">
            {SERVICE_BENEFITS.map((benefit, idx) => (
              <div key={idx} className="why-us-card">
                <div className="why-us-icon-box">
                  <Sparkles className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="why-us-card__title">{benefit.title}</h3>
                <p className="why-us-card__desc">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner for Annual & Membership */}
      <section className="home-explore-banner">
        <div className="explore-banner-card">
          <div className="explore-banner-text">
            <span className="explore-tag">PREVENTIVE CARE</span>
            <h3 className="explore-title">Your Car Deserves More Than Just a Service.</h3>
            <p className="explore-desc">
              Schedule comprehensive annual maintenance or join our all-year care membership for 10% off repairs.
            </p>
          </div>
          <div className="explore-banner-actions">
            <button 
              className="explore-btn explore-btn--primary"
              onClick={() => navigateTo('annual')}
            >
              Annual Service Plans
            </button>
            <button 
              className="explore-btn explore-btn--secondary"
              onClick={() => navigateTo('membership')}
            >
              Explore Membership
            </button>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}

