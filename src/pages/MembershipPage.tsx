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

// Custom SVG Icons matching Figma design
const WrenchGearIcon = () => (
  <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
    {/* Golden Cog in background */}
    <path d="M16 6a10 10 0 014.2.9l.6-1.8 2.2.7-.6 1.8a10 10 0 013.1 2.2l1.5-1.2 1.6 1.6-1.2 1.5a10 10 0 012.2 3.1l1.8-.6.7 2.2-1.8.6a10 10 0 010 3.8l1.8.6-.7 2.2-1.8-.6a10 10 0 01-2.2 3.1l1.2 1.5-1.6 1.6-1.5-1.2a10 10 0 01-3.1 2.2l.6 1.8-2.2.7-.6-1.8a10 10 0 01-4.2 0l-.6 1.8-2.2-.7.6-1.8a10 10 0 01-3.1-2.2l-1.5 1.2-1.6-1.6 1.2-1.5a10 10 0 01-2.2-3.1l-1.8.6-.7-2.2 1.8-.6a10 10 0 010-3.8l-1.8-.6.7-2.2 1.8.6a10 10 0 012.2-3.1l-1.2-1.5 1.6-1.6 1.5 1.2a10 10 0 013.1-2.2l-.6-1.8 2.2-.7.6 1.8A10 10 0 0116 6z" fill="#F59E0B" opacity="0.65" />
    {/* Chrome wrench head */}
    <path d="M26.2 5.8a4.5 4.5 0 00-6.1.6l-2.4 2.4 4.5 4.5 2.4-2.4a4.5 4.5 0 001.6-5.1z" fill="url(#chrome-wrench)" />
    <circle cx="23.5" cy="8.5" r="1.5" fill="#334155" />
    {/* Orange handle */}
    <path d="M18.8 11.8l-9.6 9.6a2.6 2.6 0 003.7 3.7l9.6-9.6-3.7-3.7z" fill="url(#orange-handle)" />
    <circle cx="11" cy="23.3" r="1" fill="#7C2D12" />
    <defs>
      <linearGradient id="chrome-wrench" x1="17" y1="6" x2="27" y2="13" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F8FAFC" />
        <stop offset="0.5" stopColor="#94A3B8" />
        <stop offset="1" stopColor="#64748B" />
      </linearGradient>
      <linearGradient id="orange-handle" x1="9" y1="22" x2="22" y2="12" gradientUnits="userSpaceOnUse">
        <stop stopColor="#C2410C" />
        <stop offset="0.5" stopColor="#EA580C" />
        <stop offset="1" stopColor="#FB923C" />
      </linearGradient>
    </defs>
  </svg>
);

const HazardTriangleIcon = () => (
  <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
    <path d="M16 4.5L28.5 26.5H3.5L16 4.5Z" fill="#FBBF24" stroke="#DC2626" strokeWidth="2.8" strokeLinejoin="round" />
    <path d="M16 7.5L26 25H6L16 7.5Z" fill="#FDE047" />
    <path d="M16 11.5v7" stroke="#991B1B" strokeWidth="2.8" strokeLinecap="round" />
    <circle cx="16" cy="22" r="1.5" fill="#991B1B" />
  </svg>
);

const SparklesIcon = () => (
  <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
    <path d="M16 3c0 6.6-5.4 12-12 12 6.6 0 12 5.4 12 12 0-6.6 5.4-12 12-12-6.6 0-12-5.4-12-12z" fill="url(#sparkle-3d)" />
    <path d="M25 4c0 3.3-2.7 6-6 6 3.3 0 6 2.7 6 6 0-3.3 2.7-6 6-6-3.3 0-6-2.7-6-6z" fill="#F43F5E" />
    <path d="M7 21c0 2.2-1.8 4-4 4 2.2 0 4 1.8 4 4 0-2.2 1.8-4 4-4-2.2 0-4-1.8-4-4z" fill="#06B6D4" />
    <defs>
      <linearGradient id="sparkle-3d" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A855F7" />
        <stop offset="0.4" stopColor="#EC4899" />
        <stop offset="0.8" stopColor="#F97316" />
        <stop offset="1" stopColor="#FACC15" />
      </linearGradient>
    </defs>
  </svg>
);

const ClipboardCheckIcon = () => (
  <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
    {/* Clipboard backing */}
    <rect x="5.5" y="4" width="21" height="25" rx="3" fill="#E2BA86" stroke="#C89758" strokeWidth="1.2" />
    {/* White sheet of paper */}
    <rect x="7.5" y="7" width="17" height="20" rx="1.5" fill="#FFFFFF" />
    {/* Top metal clip */}
    <path d="M11 3h10a1.5 1.5 0 011.5 1.5v2h-13v-2A1.5 1.5 0 0111 3z" fill="#94A3B8" />
    <circle cx="16" cy="4.5" r="1" fill="#475569" />
    {/* Blue checkmark on paper */}
    <path d="M11.5 16.5l3 3 6.5-6.5" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* Subtle notes lines */}
    <path d="M10 23h12" stroke="#E2E8F0" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const DispatchHeadsetIcon = () => (
  <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="15.5" r="7.5" fill="#FED7AA" />
    <path d="M9.5 15c0-4 3-7 6.5-7s6.5 3 6.5 7c0 .6-.1 1.2-.3 1.8-1.5-1.8-3.8-2.2-6.2-2.2s-4.5.4-6.2 2.2c-.2-.6-.3-1.2-.3-1.8z" fill="#78350F" />
    <path d="M8 16a8 8 0 0116 0" stroke="#EA580C" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    <rect x="6.5" y="13.5" width="2.5" height="5" rx="1.2" fill="#C2410C" />
    <rect x="23" y="13.5" width="2.5" height="5" rx="1.2" fill="#C2410C" />
    <path d="M23 17l-3.5 4h-2" stroke="#EA580C" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    <circle cx="16.5" cy="21" r="1.2" fill="#EA580C" />
    <path d="M9 28c0-3.5 3.1-6 7-6s7 2.5 7 6" fill="#EA580C" opacity="0.85" />
  </svg>
);

const FolderHistoryIcon = () => (
  <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
    <path d="M4 8a2 2 0 012-2h6l2 2h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V8z" fill="#F59E0B" />
    <path d="M4 12a2 2 0 012-2h18a2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V12z" fill="#FBBF24" />
    <circle cx="21" cy="22" r="5" fill="#10B981" stroke="#FFFFFF" strokeWidth="1.5" />
    <path d="M19 22l1.5 1.5 3-3" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

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

      {/* 2. All-in-One Membership Section matching Image 2 (Desktop) & Image 1 (Mobile) */}
      <section className="membership-allinone-section">
        <div className="allinone-header text-center">
          <h2 className="allinone-title">
            <span className="allinone-title-line">Everything your car needs.</span>
            <span className="allinone-title-line">all in <span className="text-orange">one Membership</span></span>
          </h2>
        </div>

        {/* Desktop Layout: Radial with Center Card & 6 Surrounding Cards */}
        <div className="allinone-desktop-layout">
          {/* Subtle concentric decorative rings behind the card */}
          <div className="allinone-concentric-circles">
            <div className="concentric-circle concentric-circle--1"></div>
            <div className="concentric-circle concentric-circle--2"></div>
            <div className="concentric-circle concentric-circle--3"></div>
            <div className="concentric-circle concentric-circle--4"></div>
          </div>

          {/* Left Column 3 Benefit Cards */}
          <div className="allinone-side-col allinone-col--left">
            {/* Card 1 */}
            <div className="membership-perk-card perk-card--left" onClick={() => handleBenefitClick('10% Off Repairs')}>
              <div className="perk-text-content">
                <h4 className="perk-title">10% Off Repairs</h4>
                <p className="perk-desc">Save on repair service</p>
                <span className="perk-know-more">Know more +</span>
              </div>
              <div className="perk-icon-circle perk-icon--wrench">
                <WrenchGearIcon />
                <span className="perk-connector-arm perk-connector--tl" aria-hidden="true"></span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="membership-perk-card perk-card--left" onClick={() => handleBenefitClick('Unlimited Roadside Help')}>
              <div className="perk-text-content">
                <h4 className="perk-title">Unlimited Roadside Help</h4>
                <p className="perk-desc">Help when you need it</p>
              </div>
              <div className="perk-icon-circle perk-icon--hazard">
                <HazardTriangleIcon />
                <span className="perk-connector-arm perk-connector--ml" aria-hidden="true"></span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="membership-perk-card perk-card--left" onClick={() => handleBenefitClick('Unlimited AI Diagnosis')}>
              <div className="perk-text-content">
                <h4 className="perk-title">Unlimited AI Diagnosis</h4>
                <p className="perk-desc">Know what's wrong</p>
              </div>
              <div className="perk-icon-circle perk-icon--sparkle">
                <SparklesIcon />
                <span className="perk-connector-arm perk-connector--bl" aria-hidden="true"></span>
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
            <div className="membership-perk-card perk-card--right" onClick={() => handleBenefitClick('1 Free Annual Check')}>
              <div className="perk-icon-circle perk-icon--clipboard">
                <ClipboardCheckIcon />
                <span className="perk-connector-arm perk-connector--tr" aria-hidden="true"></span>
              </div>
              <div className="perk-text-content">
                <h4 className="perk-title">1 Free Annual Check</h4>
                <p className="perk-desc">Keep your car in shape</p>
                <span className="perk-know-more">Know more +</span>
              </div>
            </div>

            {/* Card 5 */}
            <div className="membership-perk-card perk-card--right" onClick={() => handleBenefitClick('Priority Mechanic Dispatch')}>
              <div className="perk-icon-circle perk-icon--dispatch">
                <DispatchHeadsetIcon />
                <span className="perk-connector-arm perk-connector--mr" aria-hidden="true"></span>
              </div>
              <div className="perk-text-content">
                <h4 className="perk-title">Priority Mechanic Dispatch</h4>
                <p className="perk-desc">Faster response, every time</p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="membership-perk-card perk-card--right" onClick={() => handleBenefitClick('Service History')}>
              <div className="perk-icon-circle perk-icon--folder">
                <FolderHistoryIcon />
                <span className="perk-connector-arm perk-connector--br" aria-hidden="true"></span>
              </div>
              <div className="perk-text-content">
                <h4 className="perk-title">Service History</h4>
                <p className="perk-desc">All your records, in one place</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout (Matching Mobile Screenshot Image 1): Center card on top with concentric ripples, then 2-column grid of 6 cards below */}
        <div className="allinone-mobile-layout">
          {/* Center Card with Concentric Ripples */}
          <div className="mobile-card-container-wrap">
            <div className="allinone-mobile-concentric" aria-hidden="true">
              <div className="mobile-concentric-circle mobile-concentric--1"></div>
              <div className="mobile-concentric-circle mobile-concentric--2"></div>
              <div className="mobile-concentric-circle mobile-concentric--3"></div>
            </div>
            <div className="mobile-card-preview-wrap">
              <img 
                src={membershipCardImg} 
                alt="Instant Mechanic All Year Car Care Membership Card" 
                className="mobile-luxury-card-img"
              />
            </div>
          </div>

          <div className="mobile-perks-grid">
            {/* Row 1: Left & Right */}
            <div className="mobile-perk-item perk-card--left" onClick={() => handleBenefitClick('10% Off Repairs')}>
              <div className="mobile-perk-text">
                <h5 className="mobile-perk-title">10% Off Repairs</h5>
                <p className="mobile-perk-desc">Save on repair service</p>
                <span className="mobile-perk-link">Know more +</span>
              </div>
              <div className="mobile-perk-icon-circle perk-icon--wrench">
                <WrenchGearIcon />
              </div>
            </div>

            <div className="mobile-perk-item perk-card--right" onClick={() => handleBenefitClick('1 Free Annual Check')}>
              <div className="mobile-perk-icon-circle perk-icon--clipboard">
                <ClipboardCheckIcon />
              </div>
              <div className="mobile-perk-text">
                <h5 className="mobile-perk-title">1 Free Annual Check</h5>
                <p className="mobile-perk-desc">Keep your car in shape</p>
                <span className="mobile-perk-link">Know more +</span>
              </div>
            </div>

            {/* Row 2: Left & Right */}
            <div className="mobile-perk-item perk-card--left" onClick={() => handleBenefitClick('Unlimited Roadside Help')}>
              <div className="mobile-perk-text">
                <h5 className="mobile-perk-title">Unlimited Roadside Help</h5>
                <p className="mobile-perk-desc">Help when you need it</p>
              </div>
              <div className="mobile-perk-icon-circle perk-icon--hazard">
                <HazardTriangleIcon />
              </div>
            </div>

            <div className="mobile-perk-item perk-card--right" onClick={() => handleBenefitClick('Priority Mechanic Dispatch')}>
              <div className="mobile-perk-icon-circle perk-icon--dispatch">
                <DispatchHeadsetIcon />
              </div>
              <div className="mobile-perk-text">
                <h5 className="mobile-perk-title">Priority Mechanic Dispatch</h5>
                <p className="mobile-perk-desc">Faster response, every time</p>
              </div>
            </div>

            {/* Row 3: Left & Right */}
            <div className="mobile-perk-item perk-card--left" onClick={() => handleBenefitClick('Unlimited AI Diagnosis')}>
              <div className="mobile-perk-text">
                <h5 className="mobile-perk-title">Unlimited AI Diagnosis</h5>
                <p className="mobile-perk-desc">Know what's wrong</p>
              </div>
              <div className="mobile-perk-icon-circle perk-icon--sparkle">
                <SparklesIcon />
              </div>
            </div>

            <div className="mobile-perk-item perk-card--right" onClick={() => handleBenefitClick('Service History')}>
              <div className="mobile-perk-icon-circle perk-icon--folder">
                <FolderHistoryIcon />
              </div>
              <div className="mobile-perk-text">
                <h5 className="mobile-perk-title">Service History</h5>
                <p className="mobile-perk-desc">All your records, in one place</p>
              </div>
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
