import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Percent, 
  Sparkles, 
  Zap, 
  Truck, 
  ClockAlert, 
  CreditCard,
  Check,
  Star
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { MEMBERSHIP_PERKS } from '../data/mockData';

export default function MembershipPage() {
  const { openBookingModal, showToast } = useApp();
  const [selectedPlan, setSelectedPlan] = useState('gold');

  const handleJoin = (tierName, price) => {
    openBookingModal({
      title: `Instant Mechanic Club: ${tierName} Membership`,
      price: `₹${price}/year`,
      estTime: 'Instant Activation',
    });
  };

  return (
    <div className="page-wrapper membership-page">
      <div className="membership-container">
        {/* Hero Section from Figma Image 4 */}
        <section className="membership-hero text-center">
          <h1 className="membership-heading">
            More miles. <span className="text-orange-600">Less worries.</span>
          </h1>
          <p className="membership-subheading">
            One membership. Reliable car care whenever the road throws something your way.
          </p>

          <div className="membership-hero-actions">
            <a href="#membership-tiers" className="membership-explore-btn">
              <span>Explore Membership</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* 3 Lifestyle Visual Cards from Figma Image 4 */}
          <div className="membership-triad-grid">
            <div className="triad-card">
              <div className="triad-card-badge">PEACE OF MIND</div>
              <h4>Zero Breakdown Anxiety</h4>
              <p>Drive anywhere across state highways knowing help is just 1 tap away.</p>
            </div>
            <div className="triad-card triad-card--highlight">
              <div className="triad-card-badge">PRIORITY ACCESS</div>
              <h4>10-Min Highway Dispatch</h4>
              <p>Bypass regular queues with our exclusive dedicated rapid assistance vans.</p>
            </div>
            <div className="triad-card">
              <div className="triad-card-badge">UNLIMITED SAVINGS</div>
              <h4>Save ₹12,000+ Annually</h4>
              <p>Flat 10% off on all doorstep repairs, free inspections & emergency fuel.</p>
            </div>
          </div>
        </section>

        {/* Section: Everything your car needs all in one Membership (Figma Image 4) */}
        <section className="membership-card-showcase-section">
          <div className="text-center mb-8">
            <h2 className="section-heading">
              Everything your car needs. <br />
              all in <span className="text-orange-600">one Membership</span>
            </h2>
            <p className="section-subheading">
              A comprehensive digital motor club pass for your vehicle.
            </p>
          </div>

          {/* Realistic 3D Glassmorphic Membership Card from Figma Image 4 */}
          <div className="card-mockup-wrapper">
            <div className="premium-metal-card">
              <div className="metal-card-glow" />
              
              <div className="metal-card-top">
                <span className="metal-card-plate">DL 04 AB 2432</span>
                <div className="metal-card-logo">
                  <span className="metal-brand">Instant</span>
                  <span className="metal-brand-sub">Mechanic</span>
                </div>
              </div>

              {/* Golden Chip */}
              <div className="metal-chip-row">
                <div className="gold-smart-chip">
                  <div className="chip-line" />
                  <div className="chip-line" />
                </div>
                <div className="card-tier-label">VIP ALL-YEAR CAR CARE</div>
              </div>

              <div className="metal-card-title-group">
                <h3 className="metal-card-title">MEMBERSHIP</h3>
                <span className="metal-card-subtitle">ALL YEAR ROADSIDE & SERVICE PASS</span>
              </div>

              {/* Car Silhouette & Graphic Elements */}
              <div className="metal-car-silhouette">
                <svg viewBox="0 0 200 40" fill="none" className="w-full h-10 opacity-70">
                  <path d="M10 28 Q 30 20, 50 18 Q 70 8, 95 8 Q 130 8, 145 18 Q 170 20, 190 28" stroke="#F97316" strokeWidth="2" />
                  <circle cx="45" cy="28" r="8" stroke="#F97316" strokeWidth="2" fill="#1C1917" />
                  <circle cx="155" cy="28" r="8" stroke="#F97316" strokeWidth="2" fill="#1C1917" />
                </svg>
              </div>

              <div className="metal-card-bottom">
                <div>
                  <span className="card-meta-label">STATUS</span>
                  <span className="card-meta-value">DRIVE WORRY-FREE</span>
                </div>
                <div>
                  <span className="card-meta-label">COVERAGE</span>
                  <span className="card-meta-value">SERVICE • REPAIR • CARE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Perks Row from Figma Image 4 */}
          <div className="membership-key-perks">
            <div className="perk-pill-card">
              <div className="perk-pill-icon bg-orange-100 text-orange-600">
                <Percent className="w-5 h-5" />
              </div>
              <div>
                <h4 className="perk-pill-title">10% Off Repairs</h4>
                <p className="perk-pill-sub">Save flat 10% on every repair service & labor</p>
              </div>
            </div>

            <div className="perk-pill-card">
              <div className="perk-pill-icon bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="perk-pill-title">1 Free Annual Check</h4>
                <p className="perk-pill-sub">Keep your car in prime shape with full 65-point scan</p>
              </div>
            </div>

            <div className="perk-pill-card">
              <div className="perk-pill-icon bg-blue-100 text-blue-600">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="perk-pill-title">Unlimited Jump Starts</h4>
                <p className="perk-pill-sub">Emergency battery boosts anywhere, anytime</p>
              </div>
            </div>
          </div>
        </section>

        {/* Membership Tiers Comparison */}
        <section id="membership-tiers" className="membership-tiers-section">
          <div className="text-center mb-8">
            <h2 className="section-heading">Choose Your Protection Plan</h2>
            <p className="section-subheading">Annual vehicle coverage with no hidden deductibles</p>
          </div>

          <div className="membership-pricing-grid">
            {/* Silver Plan */}
            <div className="pricing-card">
              <div className="pricing-card-header">
                <h3>Silver Care</h3>
                <p>Essential roadside protection for daily city commuters</p>
                <div className="pricing-card-cost">
                  <span className="price-val">₹1,499</span>
                  <span className="price-term">/ year</span>
                </div>
              </div>
              <ul className="pricing-features">
                <li><Check className="w-4 h-4 text-emerald-500" /> 2 Free Roadside Jump Starts</li>
                <li><Check className="w-4 h-4 text-emerald-500" /> Free Flat Tyre Puncture Support</li>
                <li><Check className="w-4 h-4 text-emerald-500" /> 5% Off All Doorstep Repairs</li>
                <li><Check className="w-4 h-4 text-emerald-500" /> Standard 30-min response</li>
              </ul>
              <button 
                className="btn-outline w-full mt-6"
                onClick={() => handleJoin('Silver Care', '1,499')}
              >
                Join Silver
              </button>
            </div>

            {/* Gold Plan (Recommended) */}
            <div className="pricing-card pricing-card--featured">
              <div className="featured-plan-tag">MOST POPULAR</div>
              <div className="pricing-card-header">
                <h3>Gold Unlimited</h3>
                <p>Complete all-year roadside security and maximum repair discounts</p>
                <div className="pricing-card-cost">
                  <span className="price-val">₹2,999</span>
                  <span className="price-term">/ year</span>
                </div>
              </div>
              <ul className="pricing-features">
                <li><Check className="w-4 h-4 text-emerald-500" /> <strong>Unlimited</strong> Battery Jump Starts</li>
                <li><Check className="w-4 h-4 text-emerald-500" /> <strong>1 Free Comprehensive Annual Check</strong> (Worth ₹1,999)</li>
                <li><Check className="w-4 h-4 text-emerald-500" /> <strong>Flat 10% Off</strong> All Doorstep Repairs</li>
                <li><Check className="w-4 h-4 text-emerald-500" /> Free Flatbed Towing up to 25 km</li>
                <li><Check className="w-4 h-4 text-emerald-500" /> <strong>Priority 15-Minute Dispatch</strong></li>
              </ul>
              <button 
                className="btn-primary w-full mt-6"
                onClick={() => handleJoin('Gold Unlimited', '2,999')}
              >
                Join Gold Unlimited
              </button>
            </div>

            {/* Platinum Plan */}
            <div className="pricing-card">
              <div className="pricing-card-header">
                <h3>Platinum Family</h3>
                <p>Premium multi-car pass with concierge technician</p>
                <div className="pricing-card-cost">
                  <span className="price-val">₹4,999</span>
                  <span className="price-term">/ year (2 Cars)</span>
                </div>
              </div>
              <ul className="pricing-features">
                <li><Check className="w-4 h-4 text-emerald-500" /> Everything in Gold for 2 Vehicles</li>
                <li><Check className="w-4 h-4 text-emerald-500" /> 2 Free Comprehensive Annual Services</li>
                <li><Check className="w-4 h-4 text-emerald-500" /> Flat 15% Off All Repairs & Spares</li>
                <li><Check className="w-4 h-4 text-emerald-500" /> Free Towing up to 50 km</li>
                <li><Check className="w-4 h-4 text-emerald-500" /> Personal Master Mechanic Concierge</li>
              </ul>
              <button 
                className="btn-outline w-full mt-6"
                onClick={() => handleJoin('Platinum Family', '4,999')}
              >
                Join Platinum
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
