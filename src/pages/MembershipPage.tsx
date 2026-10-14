import React, { useState } from 'react';
import { 
  ArrowRight, 
  Wrench, 
  AlertTriangle, 
  Sparkles, 
  ClipboardCheck, 
  Clock, 
  FolderClock,
  Calendar,
  Users,
  CheckCircle2,
  Headphones
} from 'lucide-react';
import { useApp } from '../context/AppContext';

// Exact assets from src/assets/membership/
import photo1 from '../assets/membership/Rectangle 73.png';
import photo2 from '../assets/membership/Rectangle 75.png';
import photo3 from '../assets/membership/Rectangle 76.png';
import photo4 from '../assets/membership/Rectangle 74.png';
import membershipCardImg from '../assets/membership/image 54.png';
import membershipPlanBanner from '../assets/membership/membership card.png';
import carCalendar3dImg from '../assets/membership/car-calendar-3d.png';
import carCareLogoImg from '../assets/membership/car-care-membership-logo.png';
import driveConfidenceBannerImg from '../assets/membership/image-41.png';

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
    <div className="membership-page-wrapper">
      {/* 1. Hero Section matching Image 1 (Desktop) & Image 4 (Mobile) */}
      <section className="membership-hero-section">
        <div className="membership-hero-content text-center">
          <h1 className="membership-hero-headline">
            More miles. <span className="text-orange">Less worries.</span>
          </h1>
          <p className="membership-hero-subtext">
            One membership. Reliable car care whenever the road throws something your way.
          </p>

          <div className="membership-hero-cta-wrap">
            <a href="#membership-plan" className="membership-explore-pill-btn">
              <span>Explore Membership</span>
              <ArrowRight className="w-4 h-4 text-orange" />
            </a>
          </div>

          {/* Desktop Lifestyle Photo Gallery (Image 1) */}
          <div className="membership-desktop-gallery">
            <div className="gallery-photo-card gallery-photo--1">
              <img src={photo1} alt="Mechanic assisting roadside wheel repair" />
            </div>
            <div className="gallery-photo-card gallery-photo--2">
              <img src={photo2} alt="Woman driving car smiling" />
            </div>
            <div className="gallery-photo-card gallery-photo--3">
              <img src={photo3} alt="Instant Mechanic van servicing roadside vehicle" />
            </div>
            <div className="gallery-photo-card gallery-photo--4">
              <img src={photo4} alt="Driver view in rear mirror" />
            </div>
          </div>

          {/* Mobile Lifestyle Photo Gallery (Image 4): 2 columns, left tall, right stacked */}
          <div className="membership-mobile-gallery">
            <div className="mobile-gallery-left">
              <div className="mobile-photo-card mobile-photo--tall">
                <img src={photo2} alt="Woman driving car smiling" />
              </div>
            </div>
            <div className="mobile-gallery-right">
              <div className="mobile-photo-card mobile-photo--stacked-top">
                <img src={photo1} alt="Mechanic roadside assistance" />
              </div>
              <div className="mobile-photo-card mobile-photo--stacked-bottom">
                <img src={photo4} alt="Driver view in rear mirror" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. All-in-One Membership Section matching Image 2 (Desktop) & Image 4/5 (Mobile) */}
      <section className="membership-allinone-section">
        <div className="allinone-header text-center">
          <h2 className="allinone-title">
            Everything your car needs.<br />
            all in <span className="text-orange">one Membership</span>
          </h2>
        </div>

        {/* Desktop Layout: Radial with Center Card & 6 Surrounding Cards */}
        <div className="allinone-desktop-layout">
          {/* Subtle concentric decorative rings behind the card */}
          <div className="allinone-concentric-circles">
            <div className="concentric-circle concentric-circle--1"></div>
            <div className="concentric-circle concentric-circle--2"></div>
            <div className="concentric-circle concentric-circle--3"></div>
          </div>

          {/* Left Column 3 Benefit Cards */}
          <div className="allinone-side-col allinone-col--left">
            {/* Card 1 */}
            <div className="membership-perk-card" onClick={() => handleBenefitClick('10% Off Repairs')}>
              <div className="perk-text-content">
                <h4 className="perk-title">10% Off Repairs</h4>
                <p className="perk-desc">Save on repair service</p>
                <span className="perk-know-more">Know more &rsaquo;</span>
              </div>
              <div className="perk-icon-circle perk-icon--wrench">
                <Wrench className="w-4 h-4 text-orange-600" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="membership-perk-card" onClick={() => handleBenefitClick('Unlimited Roadside Help')}>
              <div className="perk-text-content">
                <h4 className="perk-title">Unlimited Roadside Help</h4>
                <p className="perk-desc">Help when you need it</p>
              </div>
              <div className="perk-icon-circle perk-icon--hazard">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="membership-perk-card" onClick={() => handleBenefitClick('Unlimited AI Diagnosis')}>
              <div className="perk-text-content">
                <h4 className="perk-title">Unlimited AI Diagnosis</h4>
                <p className="perk-desc">Know what's wrong</p>
              </div>
              <div className="perk-icon-circle perk-icon--sparkle">
                <Sparkles className="w-4 h-4 text-purple-600" />
              </div>
            </div>
          </div>

          {/* Center Card */}
          <div className="allinone-center-card-wrap">
            <div className="luxury-card-container">
              <img 
                src={membershipCardImg} 
                alt="Instant Mechanic Luxury All Year Car Care Membership Card" 
                className="luxury-card-img"
              />
            </div>
          </div>

          {/* Right Column 3 Benefit Cards */}
          <div className="allinone-side-col allinone-col--right">
            {/* Card 4 */}
            <div className="membership-perk-card membership-perk-card--right" onClick={() => handleBenefitClick('1 Free Annual Check')}>
              <div className="perk-icon-circle perk-icon--clipboard">
                <ClipboardCheck className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="perk-text-content">
                <h4 className="perk-title">1 Free Annual Check</h4>
                <p className="perk-desc">Keep your car in shape</p>
                <span className="perk-know-more">Know more &rsaquo;</span>
              </div>
            </div>

            {/* Card 5 */}
            <div className="membership-perk-card membership-perk-card--right" onClick={() => handleBenefitClick('Priority Mechanic Dispatch')}>
              <div className="perk-icon-circle perk-icon--dispatch">
                <Headphones className="w-4 h-4 text-blue-600" />
              </div>
              <div className="perk-text-content">
                <h4 className="perk-title">Priority Mechanic Dispatch</h4>
                <p className="perk-desc">Faster response, every time</p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="membership-perk-card membership-perk-card--right" onClick={() => handleBenefitClick('Service History')}>
              <div className="perk-icon-circle perk-icon--folder">
                <FolderClock className="w-4 h-4 text-amber-600" />
              </div>
              <div className="perk-text-content">
                <h4 className="perk-title">Service History</h4>
                <p className="perk-desc">All your records, in one place</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout (Image 4 & 5): Center card on top, then 2-column grid of 6 cards below */}
        <div className="allinone-mobile-layout">
          <div className="mobile-card-preview-wrap">
            <img 
              src={membershipCardImg} 
              alt="Instant Mechanic All Year Car Care Membership Card" 
              className="mobile-luxury-card-img"
            />
          </div>

          <div className="mobile-perks-grid">
            <div className="mobile-perk-item" onClick={() => handleBenefitClick('10% Off Repairs')}>
              <div className="mobile-perk-header">
                <div className="mobile-perk-icon-circle perk-icon--wrench">
                  <Wrench className="w-3.5 h-3.5 text-orange-600" />
                </div>
                <h5 className="mobile-perk-title">10% Off Repairs</h5>
              </div>
              <p className="mobile-perk-desc">Save on repair service</p>
              <span className="mobile-perk-link">Know more &rsaquo;</span>
            </div>

            <div className="mobile-perk-item" onClick={() => handleBenefitClick('1 Free Annual Check')}>
              <div className="mobile-perk-header">
                <div className="mobile-perk-icon-circle perk-icon--clipboard">
                  <ClipboardCheck className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <h5 className="mobile-perk-title">1 Free Annual Check</h5>
              </div>
              <p className="mobile-perk-desc">Keep your car in shape</p>
              <span className="mobile-perk-link">Know more &rsaquo;</span>
            </div>

            <div className="mobile-perk-item" onClick={() => handleBenefitClick('Unlimited Roadside Help')}>
              <div className="mobile-perk-header">
                <div className="mobile-perk-icon-circle perk-icon--hazard">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                </div>
                <h5 className="mobile-perk-title">Unlimited Roadside Help</h5>
              </div>
              <p className="mobile-perk-desc">Help when you need it</p>
            </div>

            <div className="mobile-perk-item" onClick={() => handleBenefitClick('Priority Mechanic Dispatch')}>
              <div className="mobile-perk-header">
                <div className="mobile-perk-icon-circle perk-icon--dispatch">
                  <Headphones className="w-3.5 h-3.5 text-blue-600" />
                </div>
                <h5 className="mobile-perk-title">Priority Mechanic Dispatch</h5>
              </div>
              <p className="mobile-perk-desc">Faster response, every time</p>
            </div>

            <div className="mobile-perk-item" onClick={() => handleBenefitClick('Unlimited AI Diagnosis')}>
              <div className="mobile-perk-header">
                <div className="mobile-perk-icon-circle perk-icon--sparkle">
                  <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                </div>
                <h5 className="mobile-perk-title">Unlimited AI Diagnosis</h5>
              </div>
              <p className="mobile-perk-desc">Know what's wrong</p>
            </div>

            <div className="mobile-perk-item" onClick={() => handleBenefitClick('Service History')}>
              <div className="mobile-perk-header">
                <div className="mobile-perk-icon-circle perk-icon--folder">
                  <FolderClock className="w-3.5 h-3.5 text-amber-600" />
                </div>
                <h5 className="mobile-perk-title">Service History</h5>
              </div>
              <p className="mobile-perk-desc">All your records, in one place</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pricing Plan Section matching Image 2 (Desktop) & Image 5 (Mobile) */}
      <section className="membership-pricing-section" id="membership-plan">
        <div className="pricing-header-wrap text-center">
          <h2 className="pricing-headline">
            <span className="text-orange">One membership.</span> Every kind of car day.
          </h2>
          <p className="pricing-subheadline">
            From unexpected breakdowns to regular care, your membership keeps you covered.
          </p>
        </div>

        {/* Desktop Plan Card matching Image 2 (Desktop) */}
        <div className="membership-plan-card-desktop">
          <div className="plan-desktop-card-inner">
            <div className="plan-desktop-left">
              <span className="plan-tier-label">Complete Car Care One simple Plan</span>
              <div className="plan-original-price">₹2,999</div>
              <div className="plan-discount-price-row">
                <span className="plan-currency-num">₹1,499</span>
                <span className="plan-currency-freq">/year</span>
              </div>
              <p className="plan-monthly-breakdown">That's just ₹125/month</p>

              <button className="plan-action-btn" onClick={handleJoinMembership}>
                <span>Get Membership Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="plan-perks-checklist">
                <div className="plan-perk-check">
                  <span className="plan-perk-emoji" aria-hidden="true">🗓️</span>
                  <span>12 Months Coverage</span>
                </div>
                <div className="plan-perk-check">
                  <span className="plan-perk-emoji" aria-hidden="true">👥</span>
                  <span>24/7 Member support</span>
                </div>
                <div className="plan-perk-check">
                  <span className="plan-perk-emoji" aria-hidden="true">☑️</span>
                  <span>No hidden Charges</span>
                </div>
              </div>
            </div>

            <div className="plan-desktop-right">
              <img 
                src={carCalendar3dImg} 
                alt="Car Care Membership with 3D car and calendar" 
                className="plan-car-calendar-3d-img"
              />
            </div>
          </div>
        </div>

        {/* Mobile Plan Card matching Image 5 (Mobile) */}
        <div className="membership-plan-card-mobile">
          <div className="mobile-plan-banner-card">
            {/* 3D Shiny Badge: CarCare Membership */}
            <div className="mobile-plan-badge-wrap text-center">
              <img 
                src={carCareLogoImg} 
                alt="Car Care Membership" 
                className="mobile-plan-logo-img"
              />
            </div>

            <div className="mobile-plan-text text-center">
              <span className="mobile-plan-tag">Complete Car Care One simple Plan</span>
              <div className="mobile-plan-original-price">₹2,999</div>
              <div className="mobile-plan-current-price">
                <span className="mobile-price-num">₹1,499</span>
                <span className="mobile-price-freq">/year</span>
              </div>
              <p className="mobile-plan-breakdown">That's just ₹125/month</p>

              <button className="mobile-plan-btn" onClick={handleJoinMembership}>
                <span>Get Membership Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="mobile-plan-perks-row">
                <div className="mobile-plan-perk-item">
                  <span className="plan-perk-emoji" aria-hidden="true">🗓️</span>
                  <span>12 Months Coverage</span>
                </div>
                <div className="mobile-plan-perk-item">
                  <span className="plan-perk-emoji" aria-hidden="true">👥</span>
                  <span>24/7 Member support</span>
                </div>
                <div className="mobile-plan-perk-item">
                  <span className="plan-perk-emoji" aria-hidden="true">☑️</span>
                  <span>No hidden Charges</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Frequently Asked Questions matching Image 3 */}
      <section className="membership-faq-section">
        <div className="faq-heading-wrap text-center">
          <h2 className="faq-title">
            <span className="text-orange">Questions?</span> We've Got answers.
          </h2>
        </div>

        <div className="faq-pills-list">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className={`faq-capsule-item ${isOpen ? 'open' : ''}`}>
                <button 
                  className="faq-capsule-btn"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-capsule-q">{faq.q}</span>
                  <span className="faq-capsule-toggle">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="faq-capsule-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Drive with Confidence Banner (Desktop Only) */}
      <section 
        className="membership-drive-confidence-banner"
        style={{ backgroundImage: `url(${driveConfidenceBannerImg})` }}
      >
        <div className="drive-confidence-overlay">
          <div className="drive-confidence-inner">
            <div className="drive-confidence-content">
              <h2 className="drive-confidence-title">
                Drive with confidence. We've got you.
              </h2>
              <p className="drive-confidence-desc">
                Wherever the road takes you, Instant Mechanic is just a call away.<br />
                From everyday care to unexpected breakdowns, we're here when you need us.
              </p>
              <button 
                className="drive-confidence-btn"
                onClick={() => openBookingModal({ title: 'Book a Service', price: 'Get Instant Quote' })}
              >
                <span>Book a service Now</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
