import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  Wrench, 
  AlertTriangle, 
  Sparkles, 
  ClipboardCheck, 
  Clock, 
  FolderClock,
  ShieldCheck,
  Calendar,
  Users,
  CheckCircle2
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import membershipCardImg from '../assets/design_assets/Component 35.png';

export default function MembershipPage() {
  const { openBookingModal, showToast, navigateTo } = useApp();
  const [openFaq, setOpenFaq] = useState(null);

  const handleJoinMembership = () => {
    openBookingModal({
      title: 'Instant Mechanic Annual Membership',
      price: '₹1,499/year',
      estTime: 'Instant Activation · 12 Months'
    });
  };

  const handleBenefitClick = (title) => {
    showToast(`Membership Benefit: ${title} is included in your plan!`, 'info');
  };

  const faqs = [
    {
      q: 'What does the membership include?',
      a: 'The annual membership includes 10% off all repair and service bills, unlimited 24/7 roadside breakdown assistance, unlimited AI diagnostics, 1 free 40-point annual vehicle health check, priority technician dispatch, and digitized service history.'
    },
    {
      q: 'How long is the membership valid?',
      a: 'The membership is valid for exactly 12 months from the date of activation and covers you 365 days a year across state highways and city roads.'
    },
    {
      q: 'How does the 20% repair discount work?',
      a: 'The discount (up to 20% on select seasonal services and a flat 10% on all standard repairs & labor) is automatically deducted from your checkout bill whenever you book through Instant Mechanic.'
    },
    {
      q: 'What is covered under roadside assistance?',
      a: 'Free jump-starts, flat tyre swaps, emergency fuel top-up (up to 5 litres), lock-out assistance, minor electrical fixes, and discounted emergency towing if the vehicle cannot be safely driven.'
    },
    {
      q: 'Can I use the membership for any car?',
      a: 'The membership is registered to one vehicle registration number (RC) to ensure seamless fast dispatch, but you can add secondary family cars at a special 40% discount.'
    },
    {
      q: 'Can I cancel or transfer my membership?',
      a: 'Yes! If you sell your car, you can transfer your remaining membership balance to your new vehicle at no extra charge through your account dashboard.'
    }
  ];

  return (
    <div className="membership-v1-page">
      {/* 1. Hero Section */}
      <section className="membership-hero">
        <div className="membership-hero-container">
          <h1 className="membership-hero-title">
            More miles. <span className="text-orange">Less worries.</span>
          </h1>
          <p className="membership-hero-subtitle">
            One membership. Reliable car care whenever the road throws something your way.
          </p>

          <div className="membership-hero-actions">
            <a href="#membership-plan" className="membership-explore-btn">
              <span>Explore Membership</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* 4 Lifestyle Gallery Cards */}
          <div className="membership-gallery-grid">
            <div className="gallery-card gallery-card--1">
              <img 
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80" 
                alt="Mobile mechanic assisting roadside tyre repair" 
                loading="lazy"
              />
            </div>
            <div className="gallery-card gallery-card--2">
              <img 
                src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80" 
                alt="Confident driver smiling inside car" 
                loading="lazy"
              />
            </div>
            <div className="gallery-card gallery-card--3">
              <img 
                src="https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=600&q=80" 
                alt="Instant Mechanic van servicing engine roadside" 
                loading="lazy"
              />
            </div>
            <div className="gallery-card gallery-card--4">
              <img 
                src="https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=600&q=80" 
                alt="Driver view in rear mirror on road trip" 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. All-in-One Radial Benefits Section */}
      <section className="membership-radial-section">
        <div className="radial-header text-center">
          <h2 className="radial-title">
            Everything your car needs.<br />
            all in <span className="text-orange">one Membership</span>
          </h2>
        </div>

        <div className="radial-content-wrap">
          {/* Radial Centerpiece with Membership Card */}
          <div className="radial-layout">
            {/* Left 3 Benefits */}
            <div className="radial-col radial-col--left">
              {/* Benefit 1 */}
              <div className="radial-benefit-card" onClick={() => handleBenefitClick('10% Off Repairs')}>
                <div className="benefit-badge-icon benefit-badge--wrench">
                  <Wrench className="w-4 h-4 text-orange-600" />
                </div>
                <div className="benefit-text">
                  <h4 className="benefit-title">10% Off Repairs</h4>
                  <p className="benefit-desc">Save on repair service</p>
                  <span className="benefit-know-more">Know more &rsaquo;</span>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="radial-benefit-card" onClick={() => handleBenefitClick('Unlimited Roadside Help')}>
                <div className="benefit-badge-icon benefit-badge--hazard">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                </div>
                <div className="benefit-text">
                  <h4 className="benefit-title">Unlimited Roadside Help</h4>
                  <p className="benefit-desc">Help when you need it</p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="radial-benefit-card" onClick={() => handleBenefitClick('Unlimited AI Diagnosis')}>
                <div className="benefit-badge-icon benefit-badge--ai">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                </div>
                <div className="benefit-text">
                  <h4 className="benefit-title">Unlimited AI Diagnosis</h4>
                  <p className="benefit-desc">Know what's wrong</p>
                </div>
              </div>
            </div>

            {/* Central Luxury Card with concentric circles */}
            <div className="radial-center-card">
              <div className="concentric-ring concentric-ring--1"></div>
              <div className="concentric-ring concentric-ring--2"></div>
              <div className="membership-card-frame">
                <img 
                  src={membershipCardImg} 
                  alt="Instant Mechanic Luxury Membership Card"
                  className="membership-card-img" 
                />
              </div>
            </div>

            {/* Right 3 Benefits */}
            <div className="radial-col radial-col--right">
              {/* Benefit 4 */}
              <div className="radial-benefit-card" onClick={() => handleBenefitClick('1 Free Annual Check')}>
                <div className="benefit-badge-icon benefit-badge--check">
                  <ClipboardCheck className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="benefit-text">
                  <h4 className="benefit-title">1 Free Annual Check</h4>
                  <p className="benefit-desc">Keep your car in shape</p>
                  <span className="benefit-know-more">Know more &rsaquo;</span>
                </div>
              </div>

              {/* Benefit 5 */}
              <div className="radial-benefit-card" onClick={() => handleBenefitClick('Priority Mechanic Dispatch')}>
                <div className="benefit-badge-icon benefit-badge--dispatch">
                  <Clock className="w-4 h-4 text-blue-600" />
                </div>
                <div className="benefit-text">
                  <h4 className="benefit-title">Priority Mechanic Dispatch</h4>
                  <p className="benefit-desc">Faster response, every time</p>
                </div>
              </div>

              {/* Benefit 6 */}
              <div className="radial-benefit-card" onClick={() => handleBenefitClick('Service History')}>
                <div className="benefit-badge-icon benefit-badge--history">
                  <FolderClock className="w-4 h-4 text-amber-600" />
                </div>
                <div className="benefit-text">
                  <h4 className="benefit-title">Service History</h4>
                  <p className="benefit-desc">All your records, in one place</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pricing Plan Card Section */}
      <section className="membership-pricing-section" id="membership-plan">
        <div className="pricing-section-header text-center">
          <h2 className="pricing-title">
            <span className="text-orange">One membership.</span> Every kind of car day.
          </h2>
          <p className="pricing-subtitle">
            From unexpected breakdowns to regular care, your membership keeps you covered.
          </p>
        </div>

        <div className="plan-banner-card">
          <div className="plan-banner-left">
            <span className="plan-sub-tag">Complete Car Care One simple Plan</span>
            <div className="plan-strike-price">₹2,999</div>
            <div className="plan-main-price">
              <span className="price-num">₹1,499</span>
              <span className="price-freq">/year</span>
            </div>
            <p className="plan-breakdown-note">That's just ₹125/month</p>

            <button className="plan-cta-btn" onClick={handleJoinMembership}>
              <span>Get Membership Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="plan-perks-row">
              <div className="plan-perk">
                <Calendar className="w-4 h-4 text-orange-600" />
                <span>12 Months Coverage</span>
              </div>
              <div className="plan-perk">
                <Users className="w-4 h-4 text-orange-600" />
                <span>24/7 Member support</span>
              </div>
              <div className="plan-perk">
                <CheckCircle2 className="w-4 h-4 text-orange-600" />
                <span>No hidden Charges</span>
              </div>
            </div>
          </div>

          <div className="plan-banner-right">
            <div className="plan-car-illustration">
              <div className="illustration-calendar-card">
                <div className="cal-header"></div>
                <div className="cal-body">
                  <div className="cal-badge-check">✓</div>
                  <div className="cal-bell-icon">🔔</div>
                </div>
              </div>
              <div className="illustration-wrench-icon">🔧</div>
              <img 
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80" 
                alt="White car maintenance" 
                className="illustration-car-img" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Frequently Asked Questions */}
      <section className="faq-section">
        <div className="faq-header text-center">
          <h2 className="faq-heading">
            <span className="text-orange">Questions?</span> We've Got answers.
          </h2>
        </div>

        <div className="faq-accordion-list">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className={`faq-card ${isOpen ? 'faq-card--open' : ''}`}>
                <button 
                  className="faq-question-btn"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <span className="faq-icon-indicator">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="faq-answer-body">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Pre-Footer Scenic CTA Banner */}
      <section className="membership-prefooter-banner">
        <div className="prefooter-overlay"></div>
        <div className="prefooter-content">
          <h2 className="prefooter-title">Drive with confidence. We've got you.</h2>
          <p className="prefooter-desc">
            Wherever the road takes you, Instant Mechanic is just a call away.
            From everyday care to unexpected breakdowns, we're here when you need us.
          </p>
          <button 
            className="prefooter-btn"
            onClick={() => navigateTo('repairs')}
          >
            <span>Book a service Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
