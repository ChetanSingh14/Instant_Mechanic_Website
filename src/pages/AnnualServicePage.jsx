import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Tag, 
  Zap, 
  Car, 
  Phone, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight,
  Check,
  Wrench,
  Award,
  HelpCircle
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ANNUAL_SERVICE_PLANS } from '../data/mockData';

export default function AnnualServicePage() {
  const { 
    carRegNumber, 
    setCarRegNumber, 
    mobileNumber, 
    setMobileNumber, 
    openBookingModal,
    showToast 
  } = useApp();

  const [carType, setCarType] = useState('sedan'); // 'hatchback', 'sedan', 'suv'
  const [plansCalculated, setPlansCalculated] = useState(false);

  const handleCalculatePlans = (e) => {
    e.preventDefault();
    if (!carRegNumber.trim()) {
      showToast('Please enter your car registration number', 'error');
      return;
    }
    if (!mobileNumber.trim()) {
      showToast('Please enter your mobile number', 'error');
      return;
    }

    setPlansCalculated(true);
    showToast(`Calculated custom packages for vehicle ${carRegNumber.toUpperCase()}`, 'success');

    // Smooth scroll down to plans
    setTimeout(() => {
      const el = document.getElementById('service-plans-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <div className="page-wrapper annual-service-page">
      <div className="annual-container">
        {/* Hero Section from Figma Image 3 */}
        <section className="annual-hero">
          <div className="annual-hero-text">
            <h1 className="annual-heading">
              Your Car Deserves More Than <br />
              <span className="text-orange-600">Just a Service.</span>
            </h1>

            <p className="annual-subheading">
              Stay ahead of unexpected breakdowns with regular annual servicing that checks the essentials, catches potential issues early, and keeps your car safe, smooth, and ready for the road.
            </p>

            {/* Badges Row from Figma Image 3 */}
            <div className="annual-badges-row">
              <div className="annual-badge-item">
                <ShieldCheck className="w-4 h-4 text-orange-600" />
                <span>Verified Mechanics</span>
              </div>
              <div className="annual-badge-item">
                <Sparkles className="w-4 h-4 text-orange-600" />
                <span>Quality Service</span>
              </div>
              <div className="annual-badge-item">
                <Tag className="w-4 h-4 text-orange-600" />
                <span>Clear Pricing</span>
              </div>
              <div className="annual-badge-item">
                <Zap className="w-4 h-4 text-orange-600" />
                <span>Easy Booking</span>
              </div>
            </div>
          </div>

          {/* Form Card from Figma Image 3 */}
          <div className="annual-form-card">
            <h3 className="form-card-title">Get Instant Service Estimate</h3>
            <p className="form-card-sub">Accurate manufacturer-compliant price in 5 seconds</p>

            <form onSubmit={handleCalculatePlans} className="annual-calculator-form">
              {/* Input 1: Car Registration Number */}
              <div className="form-field-group">
                <label className="field-label" htmlFor="car-reg-num">
                  Enter your car registration number
                </label>
                <div className="field-input-box">
                  <div className="field-icon-wrap">
                    <Car className="w-5 h-5 text-orange-600" />
                  </div>
                  <input
                    id="car-reg-num"
                    type="text"
                    placeholder="eg- DL-12-AB-1234"
                    value={carRegNumber}
                    onChange={(e) => setCarRegNumber(e.target.value.toUpperCase())}
                    className="field-text-input uppercase font-semibold"
                    required
                  />
                </div>
              </div>

              {/* Input 2: Mobile Number */}
              <div className="form-field-group">
                <label className="field-label" htmlFor="user-mobile-num">
                  Mobile Number
                </label>
                <div className="field-input-box">
                  <div className="field-icon-wrap">
                    <Phone className="w-5 h-5 text-orange-600" />
                  </div>
                  <input
                    id="user-mobile-num"
                    type="tel"
                    placeholder="+91 XXXX-XXXX-XX"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="field-text-input"
                    required
                  />
                </div>
              </div>

              {/* Submit Button from Figma Image 3 */}
              <button type="submit" className="annual-submit-btn">
                <span>Check Service Plans</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </form>

            <div className="form-card-guarantee">
              <Award className="w-4 h-4 text-emerald-600" />
              <span>Free doorstep pick & drop available across NCR</span>
            </div>
          </div>
        </section>

        {/* Section: Annual Car Service from Figma Image 3 */}
        <section id="service-plans-section" className="annual-overview-section">
          <div className="text-center mb-8">
            <h2 className="section-heading">
              Annual <span className="text-orange-600">Car Service</span>
            </h2>
            <p className="section-subheading max-w-2xl mx-auto">
              Get reliable annual car service for hatchbacks, sedans, SUVs, and luxury cars with Instant Mechanic. From oil changes and inspections to essential maintenance, our experienced mechanics keep your car smooth, safe, and road-ready.
            </p>

            {/* Vehicle Segment Selector */}
            <div className="car-segment-pills">
              <button
                className={`segment-btn ${carType === 'hatchback' ? 'segment-btn--active' : ''}`}
                onClick={() => setCarType('hatchback')}
              >
                Hatchback (e.g. Swift, i20)
              </button>
              <button
                className={`segment-btn ${carType === 'sedan' ? 'segment-btn--active' : ''}`}
                onClick={() => setCarType('sedan')}
              >
                Sedan (e.g. City, Verna, Ciaz)
              </button>
              <button
                className={`segment-btn ${carType === 'suv' ? 'segment-btn--active' : ''}`}
                onClick={() => setCarType('suv')}
              >
                SUV / MUV (e.g. Creta, Thar, Scorpio)
              </button>
            </div>
          </div>

          {/* Pricing Plans Comparison Grid */}
          <div className="plans-grid">
            {ANNUAL_SERVICE_PLANS.map((plan) => {
              const price = plan[carType];
              return (
                <div 
                  key={plan.id} 
                  className={`plan-card ${plan.recommended ? 'plan-card--recommended' : ''}`}
                >
                  {plan.recommended && (
                    <div className="plan-recommended-ribbon">
                      Most Popular
                    </div>
                  )}

                  <div className="plan-header">
                    <span className="plan-points-tag">{plan.points}</span>
                    <h3 className="plan-name">{plan.name}</h3>
                    <div className="plan-price-wrap">
                      <span className="plan-currency">₹</span>
                      <span className="plan-amount">{price.toLocaleString()}</span>
                      <span className="plan-tax-note">/ annual service</span>
                    </div>
                  </div>

                  <div className="plan-features-list">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="plan-feature-item">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="plan-footer">
                    <button
                      className={`plan-book-btn ${plan.recommended ? 'plan-book-btn--primary' : 'plan-book-btn--outline'}`}
                      onClick={() => openBookingModal({
                        title: `${plan.name} (${carType.toUpperCase()})`,
                        price: `₹${price}`,
                        estTime: '4-5 Hours',
                      })}
                    >
                      <span>Choose {plan.name}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* What Happens During an Annual Service */}
        <section className="annual-process-section">
          <h3 className="section-heading text-center mb-8">
            How Doorstep Annual Service Works
          </h3>
          <div className="process-steps-grid">
            <div className="process-step-card">
              <span className="step-number">01</span>
              <h4>Doorstep Pickup</h4>
              <p>Certified technician arrives at your home/office or conducts servicing on-site with mobile setup.</p>
            </div>
            <div className="process-step-card">
              <span className="step-number">02</span>
              <h4>Live Digital Health Card</h4>
              <p>Receive live photos & health report of battery, brake pads, fluids, and suspension on WhatsApp.</p>
            </div>
            <div className="process-step-card">
              <span className="step-number">03</span>
              <h4>100% Genuine Fluids & Spares</h4>
              <p>Only manufacturer-recommended grades of Mobil/Castrol synthetic oils and OEM filters used.</p>
            </div>
            <div className="process-step-card">
              <span className="step-number">04</span>
              <h4>6 Months / 5,000 KM Warranty</h4>
              <p>Drive with peace of mind. Every service is backed by our full warranty coverage.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
