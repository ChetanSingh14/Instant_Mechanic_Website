import React, { useState } from 'react';
import { 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Edit3, 
  Calendar, 
  Tag, 
  Star, 
  Plus, 
  Minus, 
  ArrowRight, 
  ArrowLeft,
  Info,
  Car,
  Clock,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Receipt,
  Wrench,
  Sparkles
} from 'lucide-react';
import { useApp } from '../context/AppContext';

// High-resolution Assets
import heroAnnualBg from '../assets/annual/hero-annual-bg.png';
import cardMembershipBg from '../assets/annual/card-membership-bg.png';
import cardLuxuryBg from '../assets/annual/card-luxury-bg.png';
import cardMechanicBg from '../assets/annual/card-mechanic-bg.png';
import audiServiceMechanicsImg from '../assets/annual/audi-service-mechanics.png';
import badgeVerifiedMechanic from '../assets/annual/badge-verified-mechanic.png';
import badgeQualityService from '../assets/annual/badge-quality-service.png';
import badgeClearPricing from '../assets/annual/badge-clear-pricing.png';
import badgeEasyBooking from '../assets/annual/badge-easy-booking.png';
import carReg3dIcon from '../assets/annual/image-67.png';
import officePhone3dIcon from '../assets/annual/office-phone.png';

const CAR_BRANDS_MODELS: Record<string, string[]> = {
  'Maruti Suzuki': ['Baleno', 'Swift', 'Dzire', 'Brezza', 'Ertiga', 'WagonR', 'Grand Vitara'],
  'Hyundai': ['Creta', 'i20', 'Venue', 'Verna', 'Grand i10 Nios', 'Alcazar'],
  'Tata Motors': ['Nexon', 'Punch', 'Altroz', 'Harrier', 'Safari', 'Tiago'],
  'Honda': ['City', 'Amaze', 'Elevate', 'WR-V'],
  'Mahindra': ['XUV700', 'Thar', 'Scorpio-N', 'XUV300', 'Bolero Neo'],
  'Toyota': ['Innova Crysta', 'Fortuner', 'Urban Cruiser Hyryder', 'Glanza', 'Hilux'],
  'Volkswagen': ['Taigun', 'Virtus', 'Polo', 'Tiguan'],
  'Kia': ['Seltos', 'Sonet', 'Carens', 'EV6'],
  'BMW': ['3 Series', '5 Series', 'X1', 'X3', 'X5'],
  'Mercedes-Benz': ['C-Class', 'E-Class', 'GLA', 'GLC', 'A-Class'],
  'Audi': ['A4', 'A6', 'Q3', 'Q5', 'Q7'],
};

const FAQS = [
  {
    q: 'How do I know which car repair service I need?',
    a: 'You can use our search bar above, select the symptoms that match your issue, or tap "CarBuddy AI" for instant automatic diagnosis. When in doubt, select "Roadside Help" and our mechanic will diagnose it on-site.'
  },
  {
    q: "What if I don't know what's wrong with my car?",
    a: 'No problem at all! You can book a General Inspection or call our helpline. Our verified mechanic will arrive in 15 minutes with full OBD diagnostic scanners to locate the exact issue.'
  },
  {
    q: 'Can I search for my car problem?',
    a: 'Yes, just type any symptom like "car won\'t start", "squeaking brakes", or "white smoke" in the search box above to get instant matching solutions.'
  },
  {
    q: 'What types of car problems can Instant Mechanic help with?',
    a: 'We cover all major roadside and doorstep issues including battery jump start, tyre punctures, overheating, brake issues, engine warnings, AC failure, and minor mechanical adjustments.'
  },
  {
    q: 'What if my car has stopped suddenly?',
    a: 'Trigger our Emergency SOS button or call our helpline immediately. We dispatch the nearest mobile mechanic van to your exact GPS location in 15 minutes.'
  },
  {
    q: 'Can I get towing, recovery or a car inspection?',
    a: 'Yes, we provide safe flatbed towing, emergency roadside recovery, and pre-purchase or pre-trip car inspections across Delhi NCR.'
  }
];

export default function AnnualServicePage() {
  const { openBookingModal, showToast } = useApp();

  // Page mode: 'overview' (First page with Select Your Car card) | 'billing' (Package configuration & bill page)
  const [viewMode, setViewMode] = useState<'overview' | 'billing'>('overview');

  React.useEffect(() => {
    const handleReset = () => {
      setViewMode('overview');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('reset-annual-overview', handleReset);
    return () => window.removeEventListener('reset-annual-overview', handleReset);
  }, []);

  // Vehicle info state
  const [selectedBrand, setSelectedBrand] = useState('Maruti Suzuki');
  const [selectedModel, setSelectedModel] = useState('Baleno');
  const [selectedFuel, setSelectedFuel] = useState('Petrol');
  
  // Registration and Phone quick lookup inputs
  const [quickRegNumber, setQuickRegNumber] = useState('');
  const [quickPhoneNumber, setQuickPhoneNumber] = useState('');

  // Modals for billing page
  const [showVehicleModal, setShowVehicleModal] = useState(false);
  const [showSlotModal, setShowSlotModal] = useState(false);
  const [scheduledSlot, setScheduledSlot] = useState({
    date: 'Mon, 30 Sep',
    time: '10:00 AM'
  });

  // Tiers for Essential Items
  const [selectedTiers, setSelectedTiers] = useState({
    engineOil: 'premium',
    oilFilter: 'affordable',
    airFilter: 'premium',
    cabinFilter: 'affordable'
  });

  // Active Add-ons state
  const [selectedAddons, setSelectedAddons] = useState({
    coolantFlush: true,
    brakeFluidChange: false,
    acGasTopup: true,
    tyreRotation: false,
    wheelAlignment: false,
    wiperBlades: false
  });

  // Coupon & Membership discount state
  const [couponApplied, setCouponApplied] = useState(false);
  const [membershipDiscount, setMembershipDiscount] = useState(false);

  // FAQ open state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Prices definitions
  const tierPrices = {
    engineOil: { affordable: 2499, premium: 3999 },
    oilFilter: { affordable: 280, premium: 1099 },
    airFilter: { affordable: 699, premium: 1299 },
    cabinFilter: { affordable: 400, premium: 1199 },
    coolantTopup: 80,
    brakeFluidTopup: 50,
    periodicMaintenance: 999,
    carWash: 449,
    obdScan: 250
  };

  const addonPrices: Record<string, number> = {
    coolantFlush: 499,
    brakeFluidChange: 349,
    acGasTopup: 899,
    tyreRotation: 299,
    wheelAlignment: 399,
    wiperBlades: 399
  };

  // Calculations
  const oilsFluidsTotal = 
    tierPrices.engineOil[selectedTiers.engineOil as 'affordable' | 'premium'] + 
    tierPrices.coolantTopup + 
    tierPrices.brakeFluidTopup;

  const replacementPartsTotal = 
    tierPrices.oilFilter[selectedTiers.oilFilter as 'affordable' | 'premium'] + 
    tierPrices.airFilter[selectedTiers.airFilter as 'affordable' | 'premium'] + 
    tierPrices.cabinFilter[selectedTiers.cabinFilter as 'affordable' | 'premium'];

  const laborChargesTotal = 
    tierPrices.periodicMaintenance + 
    tierPrices.carWash + 
    tierPrices.obdScan;

  const addonsTotal = Object.entries(selectedAddons).reduce((acc, [key, isSelected]) => {
    return isSelected ? acc + (addonPrices[key] || 0) : acc;
  }, 0);

  const rawItemTotal = oilsFluidsTotal + replacementPartsTotal + laborChargesTotal + addonsTotal;
  const couponDiscount = couponApplied ? 676 : 0;
  const memberDiscount = membershipDiscount ? Math.round(rawItemTotal * 0.1) : 0;
  const discountedSubtotal = Math.max(0, rawItemTotal - couponDiscount - memberDiscount);
  const gstAmount = Math.round(discountedSubtotal * 0.18);
  const totalPayable = discountedSubtotal + gstAmount;

  const toggleAddon = (key: string) => {
    setSelectedAddons(prev => {
      const nextState = { ...prev, [key]: !prev[key as keyof typeof prev] };
      showToast(nextState[key as keyof typeof prev] ? 'Add-on added to service package' : 'Add-on removed', 'info');
      return nextState;
    });
  };

  const toggleTier = (itemKey: 'engineOil' | 'oilFilter' | 'airFilter' | 'cabinFilter') => {
    setSelectedTiers(prev => {
      const nextTier = prev[itemKey] === 'premium' ? 'affordable' : 'premium';
      return { ...prev, [itemKey]: nextTier };
    });
  };

  const handleApplyCoupon = () => {
    if (couponApplied) {
      setCouponApplied(false);
      showToast('Coupon WELCOME10 removed', 'info');
    } else {
      setCouponApplied(true);
      showToast('Coupon WELCOME10 applied! Saved ₹676', 'success');
    }
  };

  const handleProceedToPay = () => {
    openBookingModal({
      title: `${selectedBrand} ${selectedModel} - Complete Car Service`,
      price: `₹${totalPayable.toLocaleString('en-IN')}`,
      estTime: `${scheduledSlot.date} at ${scheduledSlot.time}`
    });
  };

  const handleSelectServiceItems = () => {
    if (!selectedBrand || !selectedModel) {
      showToast('Please select your car brand and model', 'info');
      return;
    }
    setViewMode('billing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast(`Loaded service items for ${selectedBrand} ${selectedModel} (${selectedFuel})`, 'success');
  };

  const handleQuickCheckPlans = () => {
    setViewMode('billing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast('Viewing tailored service plans for your vehicle', 'info');
  };

  const scrollToAdvice = () => {
    const el = document.getElementById('should-you-add-these');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Switch brand update models
  const handleBrandChange = (brand: string) => {
    setSelectedBrand(brand);
    const available = CAR_BRANDS_MODELS[brand] || [];
    if (available.length > 0) {
      setSelectedModel(available[0]);
    }
  };

  return (
    <div className="annual-service-master-page">
      {viewMode === 'overview' ? (
        /* =========================================================================
           PAGE 1: OVERVIEW & VEHICLE SELECTION (Matching Images 1, 2, 3, 4, 5)
           ========================================================================= */
        <div className="annual-overview-container">
          {/* 1. Hero Section */}
                    <section className="car-deserves-section">
            <div className="car-deserves-container">
              <div className="car-deserves-left">
                <h1 className="car-deserves-title">
                  Your Car Deserves More<br />
                  Than <span className="text-orange">Just a Service.</span>
                </h1>
                <p className="car-deserves-description">
                  Stay ahead of unexpected breakdowns with regular annual servicing that checks the essentials, catches potential issues early, and keeps your car safe, smooth, and ready for the road.
                </p>

                {/* 4 Feature Badges with exact 3D assets */}
                <div className="car-deserves-badges-grid">
                  <div className="deserves-badge-item">
                    <img src={badgeVerifiedMechanic} alt="Verified Mechanics" className="deserves-badge-img" />
                    <span className="deserves-badge-text">Verified Mechanics</span>
                  </div>

                  <div className="deserves-badge-item">
                    <img src={badgeQualityService} alt="Quality Service" className="deserves-badge-img" />
                    <span className="deserves-badge-text">Quality Service</span>
                  </div>

                  <div className="deserves-badge-item">
                    <img src={badgeClearPricing} alt="Clear Pricing" className="deserves-badge-img" />
                    <span className="deserves-badge-text">Clear Pricing</span>
                  </div>

                  <div className="deserves-badge-item">
                    <img src={badgeEasyBooking} alt="Easy Booking" className="deserves-badge-img" />
                    <span className="deserves-badge-text">Easy Booking</span>
                  </div>
                </div>
              </div>

              {/* Right Audi Team Service Image */}
              <div className="car-deserves-right">
                <img 
                  src={audiServiceMechanicsImg} 
                  alt="Instant Mechanic team servicing Audi" 
                  className="car-deserves-audi-img"
                />
              </div>
            </div>

            {/* Floating Registration & Mobile Quick Check Strip */}
            <div className="car-quick-check-strip">
              <div className="quick-check-input-box">
                <div className="quick-check-icon-wrap">
                  <img src={carReg3dIcon} alt="Car" className="quick-3d-icon" />
                </div>
                <div className="quick-check-field-inner">
                  <span className="quick-check-label">Enter your car registration number</span>
                  <input 
                    type="text" 
                    placeholder="eg- DL-12-AB-1234" 
                    value={quickRegNumber}
                    onChange={(e) => setQuickRegNumber(e.target.value.toUpperCase())}
                    className="quick-check-native-input"
                  />
                </div>
              </div>

              <div className="quick-check-input-box">
                <div className="quick-check-icon-wrap">
                  <img src={officePhone3dIcon} alt="Phone" className="quick-3d-icon" />
                </div>
                <div className="quick-check-field-inner">
                  <span className="quick-check-label">Mobile Number</span>
                  <input 
                    type="tel" 
                    placeholder="+91 XXXX-XXXX-XX" 
                    value={quickPhoneNumber}
                    onChange={(e) => setQuickPhoneNumber(e.target.value)}
                    className="quick-check-native-input"
                  />
                </div>
              </div>

              <button 
                className="quick-check-submit-btn"
                onClick={handleQuickCheckPlans}
              >
                Check Service Plans
              </button>
            </div>
          </section> 
          <section className="annual-hero-section">
            {/* Unified Hero Background Layer */}
            <div className="annual-hero-bg-layer">
              <img 
                src={heroAnnualBg} 
                alt="Instant Mechanic doorstep servicing" 
                className="annual-hero-bg-cover"
              />
              <div className="annual-hero-fade-overlay"></div>
            </div>

            <div className="annual-hero-content">
              {/* Left Hero Content */}
              <div className="annual-hero-text">
                <h1 className="annual-hero-title">
                  Annual <span className="text-orange">Car Service</span>
                </h1>
                <p className="annual-hero-description">
                  Get reliable annual car service for hatchbacks, sedans, SUVs, and luxury cars with Instant Mechanic. From oil changes and inspections to essential maintenance, our experienced mechanics keep your car smooth, safe, and road-ready.
                </p>
              </div>

              {/* Right Hero Card: Select Your Car */}
              <div className="annual-select-car-card">
                <div className="select-card-header">
                  <h2 className="select-card-title">
                    Select Your <span className="text-orange">Car</span>
                  </h2>
                  <p className="select-card-subtitle">
                    Choose your car brand and fuel type.
                  </p>
                </div>

                <div className="select-card-form">
                  <div className="select-input-group">
                    <label className="select-field-label">Car Brand</label>
                    <div className="select-dropdown-wrap">
                      <select 
                        value={selectedBrand} 
                        onChange={(e) => handleBrandChange(e.target.value)}
                        className="select-custom-dropdown"
                      >
                        {Object.keys(CAR_BRANDS_MODELS).map(b => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                      <ChevronDown className="select-dropdown-chevron" />
                    </div>
                  </div>

                  <div className="select-input-group">
                    <label className="select-field-label">Car Model</label>
                    <div className="select-dropdown-wrap">
                      <select 
                        value={selectedModel} 
                        onChange={(e) => setSelectedModel(e.target.value)}
                        className="select-custom-dropdown"
                      >
                        {(CAR_BRANDS_MODELS[selectedBrand] || ['Baleno']).map(m => (
                          <option key={m} value={m}>{m}</option>
                        ))}
                      </select>
                      <ChevronDown className="select-dropdown-chevron" />
                    </div>
                  </div>

                  <div className="select-input-group">
                    <label className="select-field-label">Fuel Type</label>
                    <div className="select-dropdown-wrap">
                      <select 
                        value={selectedFuel} 
                        onChange={(e) => setSelectedFuel(e.target.value)}
                        className="select-custom-dropdown"
                      >
                        <option value="Petrol">Petrol</option>
                        <option value="Diesel">Diesel</option>
                        <option value="CNG">CNG</option>
                        <option value="Electric">Electric</option>
                      </select>
                      <ChevronDown className="select-dropdown-chevron" />
                    </div>
                  </div>

                  <button 
                    className="select-service-items-btn"
                    onClick={handleSelectServiceItems}
                  >
                    <span>Select Service Items</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Step Tracker Indicator */}
                  <div className="annual-stepper-row">
                    <div className="step-point step-point--active">
                      <div className="step-circle">1</div>
                      <span className="step-label">Car</span>
                    </div>
                    <div className="step-dotted-line"></div>
                    <div className="step-point">
                      <div className="step-circle">2</div>
                      <span className="step-label">Service</span>
                    </div>
                    <div className="step-dotted-line"></div>
                    <div className="step-point">
                      <div className="step-circle">3</div>
                      <span className="step-label">Slot</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. More Reasons to Choose Us Section (Matching Image 2) */}
          <section className="more-reasons-section">
            <div className="more-reasons-header">
              <h2 className="more-reasons-title">
                More Reasons to <span className="text-orange">Choose Us</span> <ArrowRight className="w-5 h-5 inline-block text-orange ml-1" />
              </h2>
            </div>

            <div className="more-reasons-grid">
              {/* Card 1: 10% Off With Membership */}
              <div 
                className="reason-promo-card" 
                style={{ backgroundImage: `url(${cardMembershipBg})` }}
              >
                <div className="reason-promo-overlay">
                  <div className="reason-promo-top">
                    <h3 className="reason-promo-heading">
                      Get <span className="text-orange">10% Off</span><br />
                      With Membership
                    </h3>
                    <p className="reason-promo-sub">On your first service</p>
                  </div>
                  <button 
                    className="reason-promo-btn reason-promo-btn--orange"
                    onClick={() => {
                      setMembershipDiscount(true);
                      setViewMode('billing');
                      showToast('10% Membership discount applied!', 'success');
                    }}
                  >
                    <span>Get Membership Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Card 2: Standard or Luxury */}
              <div 
                className="reason-promo-card" 
                style={{ backgroundImage: `url(${cardLuxuryBg})` }}
              >
                <div className="reason-promo-overlay">
                  <div className="reason-promo-top">
                    <h3 className="reason-promo-heading">
                      Standard or<br />
                      <span className="text-orange">Luxury ?</span>
                    </h3>
                    <p className="reason-promo-sub">Customize your service plan, T&C's apply*</p>
                  </div>
                  <button 
                    className="reason-promo-btn reason-promo-btn--dark"
                    onClick={() => {
                      setViewMode('billing');
                      showToast('Customizing service plan', 'info');
                    }}
                  >
                    <span>Book Service</span>
                  </button>
                </div>
              </div>

              {/* Card 3: Professional Car Care at your Door */}
              <div 
                className="reason-promo-card" 
                style={{ backgroundImage: `url(${cardMechanicBg})` }}
              >
                <div className="reason-promo-overlay">
                  <div className="reason-promo-top">
                    <h3 className="reason-promo-heading">
                      Professional <span className="text-orange">Car<br />Care</span> at your Door
                    </h3>
                    <p className="reason-promo-sub">Skilled professionals for your car</p>
                  </div>
                  <button 
                    className="reason-promo-btn reason-promo-btn--orange"
                    onClick={() => {
                      setViewMode('billing');
                      showToast('Select your tailored doorstep package', 'info');
                    }}
                  >
                    <span>Plan a Service</span>
                  </button>
                </div>
              </div>
            </div>
          </section>


          {/* 4. Frequently Asked Questions (Matching Image 4) */}
          <section className="annual-faq-section">
            <div className="annual-faq-header text-center">
              <h2 className="annual-faq-heading">
                Frequently Asked <span className="text-orange">Questions</span>
              </h2>
              <p className="annual-faq-subheading">
                Everything you need to know before booking a car repair service.
              </p>
            </div>

            <div className="annual-faq-pill-list">
              {FAQS.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index} className={`annual-faq-pill-card ${isOpen ? 'annual-faq-pill-card--open' : ''}`}>
                    <button 
                      className="annual-faq-pill-btn"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                    >
                      <span className="annual-faq-pill-text">{faq.q}</span>
                      <span className="annual-faq-pill-indicator">{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen && (
                      <div className="annual-faq-pill-answer">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      ) : (
        /* =========================================================================
           PAGE 2: SERVICE DETAILS & BILLING
           ========================================================================= */
        <div className="service-bill-page">
          <div className="service-bill-container">
            {/* Back Button to Vehicle Selection */}
            <div className="billing-top-nav">
              <button 
                className="billing-back-btn"
                onClick={() => {
                  setViewMode('overview');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Change Vehicle Selection</span>
              </button>

              <div className="billing-step-indicator-compact">
                <span className="step-badge-mini step-badge-mini--done">✓ 1. Vehicle</span>
                <span className="step-badge-mini step-badge-mini--current">2. Service Details</span>
                <span className="step-badge-mini">3. Slot</span>
              </div>
            </div>

            {/* Top Vehicle Info Banner */}
            <section className="vehicle-banner-card">
              <div className="vehicle-banner-left">
                <h1 className="vehicle-title">{selectedBrand} {selectedModel}</h1>
                <p className="vehicle-subtitle">{selectedFuel} · Every 10,000 km or 1 year</p>
              </div>
              <button 
                className="vehicle-edit-btn" 
                onClick={() => setViewMode('overview')}
                aria-label="Edit car model"
              >
                <Edit3 className="w-4 h-4" />
                <span>Edit</span>
              </button>
            </section>

            {/* Essential Car Care Package Card */}
            <section className="essential-package-card">
              <div className="essential-package-header">
                <div className="package-title-group">
                  <h2 className="package-title">
                    Essential Car Care <span className="text-orange">Package</span>
                  </h2>
                </div>
                <div className="package-recommended-badge">
                  <span className="badge-crown">👑</span>
                  <span>Recommended</span>
                </div>
              </div>

              {/* Group 1: Oils & Fluids */}
              <div className="package-group">
                <h3 className="group-heading">OILS & FLUIDS</h3>
                
                <div className="package-item-row">
                  <div className="item-radio-circle"></div>
                  <div className="item-details">
                    <div className="item-title-wrap">
                      <span className="item-name">Engine Oil</span>
                      <button 
                        onClick={() => toggleTier('engineOil')}
                        className={`item-tier-badge ${selectedTiers.engineOil === 'premium' ? 'item-tier-badge--premium' : 'item-tier-badge--affordable'}`}
                        title="Click to switch between Affordable and Premium"
                      >
                        {selectedTiers.engineOil === 'premium' ? 'Premium' : 'Affordable'}
                      </button>
                    </div>
                    <span className="item-desc">5W-30 Fully Synthetic · 3.5 L</span>
                  </div>
                  <div className="item-price-wrap">
                    <span className="item-price">₹{tierPrices.engineOil[selectedTiers.engineOil as 'affordable' | 'premium'].toLocaleString('en-IN')}</span>
                    <button 
                      className="item-edit-icon-btn" 
                      onClick={() => toggleTier('engineOil')}
                      title="Switch tier"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="package-item-row">
                  <div className="item-radio-circle"></div>
                  <div className="item-details">
                    <span className="item-name">Coolant Top-Up</span>
                    <span className="item-desc">OAT / HOAT long-life coolant</span>
                  </div>
                  <div className="item-price-wrap">
                    <span className="item-price">₹{tierPrices.coolantTopup}</span>
                  </div>
                </div>

                <div className="package-item-row">
                  <div className="item-radio-circle"></div>
                  <div className="item-details">
                    <span className="item-name">Brake Fluid Top-Up</span>
                    <span className="item-desc">DOT-4 high temperature fluid</span>
                  </div>
                  <div className="item-price-wrap">
                    <span className="item-price">₹{tierPrices.brakeFluidTopup}</span>
                  </div>
                </div>
              </div>

              {/* Group 2: Replacement Parts */}
              <div className="package-group">
                <h3 className="group-heading">REPLACEMENT PARTS</h3>
                
                <div className="package-item-row">
                  <div className="item-radio-circle"></div>
                  <div className="item-details">
                    <div className="item-title-wrap">
                      <span className="item-name">Oil Filter</span>
                      <button 
                        onClick={() => toggleTier('oilFilter')}
                        className={`item-tier-badge ${selectedTiers.oilFilter === 'premium' ? 'item-tier-badge--premium' : 'item-tier-badge--affordable'}`}
                        title="Click to switch between Affordable and Premium"
                      >
                        {selectedTiers.oilFilter === 'premium' ? 'Premium' : 'Affordable'}
                      </button>
                    </div>
                    <span className="item-desc">Spin-on high filtration capacity</span>
                  </div>
                  <div className="item-price-wrap">
                    <span className="item-price">₹{tierPrices.oilFilter[selectedTiers.oilFilter as 'affordable' | 'premium']}</span>
                    <button 
                      className="item-edit-icon-btn" 
                      onClick={() => toggleTier('oilFilter')}
                      title="Switch tier"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="package-item-row">
                  <div className="item-radio-circle"></div>
                  <div className="item-details">
                    <div className="item-title-wrap">
                      <span className="item-name">Air Filter</span>
                      <button 
                        onClick={() => toggleTier('airFilter')}
                        className={`item-tier-badge ${selectedTiers.airFilter === 'premium' ? 'item-tier-badge--premium' : 'item-tier-badge--affordable'}`}
                        title="Click to switch between Affordable and Premium"
                      >
                        {selectedTiers.airFilter === 'premium' ? 'Premium' : 'Affordable'}
                      </button>
                    </div>
                    <span className="item-desc">Multi-layer particulate filtration</span>
                  </div>
                  <div className="item-price-wrap">
                    <span className="item-price">₹{tierPrices.airFilter[selectedTiers.airFilter as 'affordable' | 'premium']}</span>
                    <button 
                      className="item-edit-icon-btn" 
                      onClick={() => toggleTier('airFilter')}
                      title="Switch tier"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="package-item-row">
                  <div className="item-radio-circle"></div>
                  <div className="item-details">
                    <div className="item-title-wrap">
                      <span className="item-name">Cabin AC Filter</span>
                      <button 
                        onClick={() => toggleTier('cabinFilter')}
                        className={`item-tier-badge ${selectedTiers.cabinFilter === 'premium' ? 'item-tier-badge--premium' : 'item-tier-badge--affordable'}`}
                        title="Click to switch between Affordable and Premium"
                      >
                        {selectedTiers.cabinFilter === 'premium' ? 'Premium' : 'Affordable'}
                      </button>
                    </div>
                    <span className="item-desc">Activated carbon anti-pollution</span>
                  </div>
                  <div className="item-price-wrap">
                    <span className="item-price">₹{tierPrices.cabinFilter[selectedTiers.cabinFilter as 'affordable' | 'premium']}</span>
                    <button 
                      className="item-edit-icon-btn" 
                      onClick={() => toggleTier('cabinFilter')}
                      title="Switch tier"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Group 3: Labor Charges */}
              <div className="package-group">
                <h3 className="group-heading">LABOR CHARGES</h3>

                <div className="package-item-row">
                  <div className="item-radio-circle"></div>
                  <div className="item-details">
                    <span className="item-name">Periodic Maintenance Service</span>
                    <span className="item-desc">Complete multi-point vehicle inspection & tuning</span>
                  </div>
                  <div className="item-price-wrap">
                    <span className="item-price">₹{tierPrices.periodicMaintenance}</span>
                  </div>
                </div>

                <div className="package-item-row">
                  <div className="item-radio-circle"></div>
                  <div className="item-details">
                    <span className="item-name">Car Wash & Interior Vacuuming</span>
                    <span className="item-desc">Eco-friendly pressure wash + cabin cleaning</span>
                  </div>
                  <div className="item-price-wrap">
                    <span className="item-price">₹{tierPrices.carWash}</span>
                  </div>
                </div>

                <div className="package-item-row">
                  <div className="item-radio-circle"></div>
                  <div className="item-details">
                    <span className="item-name">OBD-II Computer Diagnostics Scan</span>
                    <span className="item-desc">Complete sensor and ECU error code analysis</span>
                  </div>
                  <div className="item-price-wrap">
                    <span className="item-price">₹{tierPrices.obdScan}</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Optional Add-Ons Section */}
            <section className="addons-section">
              <h2 className="addons-title">
                Optional <span className="text-orange">Add-ons</span>
              </h2>

              <div className="addons-grid">
                <div className={`addon-row ${selectedAddons.coolantFlush ? 'addon-row--selected' : ''}`}>
                  <div className="addon-icon-square"></div>
                  <div className="addon-info">
                    <span className="addon-title">Coolant Full Flush</span>
                    <span className="addon-desc">Prevents engine overheating & corrosion</span>
                  </div>
                  <div className="addon-action-wrap">
                    <span className="addon-price">₹{addonPrices.coolantFlush}</span>
                    <button 
                      className={`addon-btn ${selectedAddons.coolantFlush ? 'addon-btn--remove' : 'addon-btn--add'}`}
                      onClick={() => toggleAddon('coolantFlush')}
                      aria-label={selectedAddons.coolantFlush ? 'Remove Coolant Flush' : 'Add Coolant Flush'}
                    >
                      {selectedAddons.coolantFlush ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className={`addon-row ${selectedAddons.brakeFluidChange ? 'addon-row--selected' : ''}`}>
                  <div className="addon-icon-square"></div>
                  <div className="addon-info">
                    <span className="addon-title">Brake Fluid Full Change</span>
                    <span className="addon-desc">Ensures maximum hydraulic stopping power</span>
                  </div>
                  <div className="addon-action-wrap">
                    <span className="addon-price">₹{addonPrices.brakeFluidChange}</span>
                    <button 
                      className={`addon-btn ${selectedAddons.brakeFluidChange ? 'addon-btn--remove' : 'addon-btn--add'}`}
                      onClick={() => toggleAddon('brakeFluidChange')}
                      aria-label={selectedAddons.brakeFluidChange ? 'Remove Brake Fluid Change' : 'Add Brake Fluid Change'}
                    >
                      {selectedAddons.brakeFluidChange ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className={`addon-row ${selectedAddons.acGasTopup ? 'addon-row--selected' : ''}`}>
                  <div className="addon-icon-square"></div>
                  <div className="addon-info">
                    <span className="addon-title">AC Gas Top-Up</span>
                    <span className="addon-desc">Restores cooling performance</span>
                  </div>
                  <div className="addon-action-wrap">
                    <span className="addon-price">₹{addonPrices.acGasTopup}</span>
                    <button 
                      className={`addon-btn ${selectedAddons.acGasTopup ? 'addon-btn--remove' : 'addon-btn--add'}`}
                      onClick={() => toggleAddon('acGasTopup')}
                      aria-label={selectedAddons.acGasTopup ? 'Remove AC Gas Top-Up' : 'Add AC Gas Top-Up'}
                    >
                      {selectedAddons.acGasTopup ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className={`addon-row ${selectedAddons.tyreRotation ? 'addon-row--selected' : ''}`}>
                  <div className="addon-icon-square"></div>
                  <div className="addon-info">
                    <span className="addon-title">Tyre Rotation & Balancing</span>
                    <span className="addon-desc">Evens wear, extends tyre life up to 30%</span>
                  </div>
                  <div className="addon-action-wrap">
                    <span className="addon-price">₹{addonPrices.tyreRotation}</span>
                    <button 
                      className={`addon-btn ${selectedAddons.tyreRotation ? 'addon-btn--remove' : 'addon-btn--add'}`}
                      onClick={() => toggleAddon('tyreRotation')}
                      aria-label={selectedAddons.tyreRotation ? 'Remove Tyre Rotation' : 'Add Tyre Rotation'}
                    >
                      {selectedAddons.tyreRotation ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className={`addon-row ${selectedAddons.wheelAlignment ? 'addon-row--selected' : ''}`}>
                  <div className="addon-icon-square"></div>
                  <div className="addon-info">
                    <span className="addon-title">Wheel Alignment</span>
                    <span className="addon-desc">Prevents pulling & uneven tyre wear</span>
                  </div>
                  <div className="addon-action-wrap">
                    <span className="addon-price">₹{addonPrices.wheelAlignment}</span>
                    <button 
                      className={`addon-btn ${selectedAddons.wheelAlignment ? 'addon-btn--remove' : 'addon-btn--add'}`}
                      onClick={() => toggleAddon('wheelAlignment')}
                      aria-label={selectedAddons.wheelAlignment ? 'Remove Wheel Alignment' : 'Add Wheel Alignment'}
                    >
                      {selectedAddons.wheelAlignment ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className={`addon-row ${selectedAddons.wiperBlades ? 'addon-row--selected' : ''}`}>
                  <div className="addon-icon-square"></div>
                  <div className="addon-info">
                    <span className="addon-title">Wiper Blades (Pair)</span>
                    <span className="addon-desc">Streak-free visibility in rain</span>
                  </div>
                  <div className="addon-action-wrap">
                    <span className="addon-price">₹{addonPrices.wiperBlades}</span>
                    <button 
                      className={`addon-btn ${selectedAddons.wiperBlades ? 'addon-btn--remove' : 'addon-btn--add'}`}
                      onClick={() => toggleAddon('wiperBlades')}
                      aria-label={selectedAddons.wiperBlades ? 'Remove Wiper Blades' : 'Add Wiper Blades'}
                    >
                      {selectedAddons.wiperBlades ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>

              <button className="addons-advice-link" onClick={scrollToAdvice}>
                Not sure which of these you need? Take a look at why each service is needed below
              </button>
            </section>

            {/* Promo / Coupon Strip */}
            <section className="promo-coupon-strip">
              <div className="coupon-left">
                <div className="coupon-icon-wrap">
                  <Tag className="w-4 h-4 text-orange-600" />
                </div>
                <div className="coupon-text">
                  <span className="coupon-title">Save ₹676 more with</span>
                  <strong className="coupon-code">WELCOME10</strong>
                </div>
              </div>
              <button 
                className={`coupon-apply-btn ${couponApplied ? 'coupon-apply-btn--applied' : ''}`}
                onClick={handleApplyCoupon}
              >
                {couponApplied ? 'Applied' : 'Apply'}
              </button>
            </section>

            {/* Membership Strip */}
            <section className="promo-membership-strip">
              <div className="membership-strip-left">
                <div className="membership-star-wrap">
                  <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                </div>
                <div className="membership-strip-text">
                  <h4 className="membership-strip-title">Get Membership</h4>
                  <p className="membership-strip-desc">Extra 10% off this & every future service</p>
                </div>
              </div>
              <button 
                className={`membership-join-btn ${membershipDiscount ? 'membership-join-btn--active' : ''}`}
                onClick={() => {
                  setMembershipDiscount(!membershipDiscount);
                  showToast(!membershipDiscount ? 'Membership 10% discount applied to your bill!' : 'Membership discount removed', 'success');
                }}
              >
                {membershipDiscount ? 'Applied' : 'Join'}
              </button>
            </section>

            {/* Bill Details Card */}
            <section className="bill-details-card">
              <h2 className="bill-details-title">
                Bill <span className="text-orange">Details</span>
              </h2>

              <div className="bill-rows">
                <div className="bill-row">
                  <span className="bill-label">Oils & Fluids</span>
                  <span className="bill-value">₹{oilsFluidsTotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="bill-row">
                  <span className="bill-label">Replacement Parts</span>
                  <span className="bill-value">₹{replacementPartsTotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="bill-row">
                  <span className="bill-label">Labor Charges</span>
                  <span className="bill-value">₹{laborChargesTotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="bill-row">
                  <span className="bill-label">Add-ons</span>
                  <span className="bill-value">₹{addonsTotal.toLocaleString('en-IN')}</span>
                </div>

                {couponApplied && (
                  <div className="bill-row text-emerald-600">
                    <span className="bill-label">Coupon Discount (WELCOME10)</span>
                    <span className="bill-value font-semibold">-₹{couponDiscount}</span>
                  </div>
                )}

                {membershipDiscount && (
                  <div className="bill-row text-emerald-600">
                    <span className="bill-label">Membership 10% Off</span>
                    <span className="bill-value font-semibold">-₹{memberDiscount}</span>
                  </div>
                )}

                <div className="bill-divider"></div>

                <div className="bill-row bill-row--subtotal">
                  <span className="bill-label">Item Total</span>
                  <span className="bill-value">₹{discountedSubtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="bill-row bill-row--gst">
                  <span className="bill-label">GST (18%)</span>
                  <span className="bill-value">₹{gstAmount.toLocaleString('en-IN')}</span>
                </div>

                <div className="bill-divider"></div>

                <div className="bill-row bill-row--total">
                  <span className="bill-total-label">Total Payable</span>
                  <span className="bill-total-value">₹{totalPayable.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </section>

            {/* Scheduled Slot Strip */}
            <section className="scheduled-slot-strip">
              <div className="scheduled-slot-left">
                <Calendar className="w-4 h-4 text-zinc-500" />
                <div className="scheduled-slot-info">
                  <span className="scheduled-slot-label">Scheduled for</span>
                  <strong className="scheduled-slot-datetime">{scheduledSlot.date} · {scheduledSlot.time}</strong>
                </div>
              </div>
              <button 
                className="scheduled-slot-edit-btn"
                onClick={() => setShowSlotModal(true)}
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>
            </section>

            {/* Primary Checkout CTA */}
            <div className="service-checkout-action">
              <button className="proceed-to-pay-btn" onClick={handleProceedToPay}>
                <span>Proceed to Pay</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Should You Add These? Educational Section (Fixed container layout) */}
            <section className="should-you-add-section" id="should-you-add-these">
              <h2 className="should-you-add-title">
                Should you <span className="text-orange">add these?</span>
              </h2>
              <p className="should-you-add-subtitle">
                Our quick take on each optional extra.
              </p>

              <div className="should-you-add-list">
                <div className="advice-card">
                  <div className="advice-thumb-square"></div>
                  <div className="advice-content">
                    <h4 className="advice-title">Coolant Full Flush</h4>
                    <p className="advice-desc">
                      It's been over 2 years since a full flush — old coolant turns acidic and starts corroding the radiator.
                    </p>
                  </div>
                </div>

                <div className="advice-card">
                  <div className="advice-thumb-square"></div>
                  <div className="advice-content">
                    <h4 className="advice-title">Brake Fluid Full Change</h4>
                    <p className="advice-desc">
                      Due every 2 years regardless of mileage. You're not there yet, but it's a good one to pre-book.
                    </p>
                  </div>
                </div>

                <div className="advice-card">
                  <div className="advice-thumb-square"></div>
                  <div className="advice-content">
                    <h4 className="advice-title">AC Gas Top-Up</h4>
                    <p className="advice-desc">
                      Skip this unless your AC cooling has noticeably dropped — topping up a healthy system wastes money.
                    </p>
                  </div>
                </div>

                <div className="advice-card">
                  <div className="advice-thumb-square"></div>
                  <div className="advice-content">
                    <h4 className="advice-title">Tyre Rotation & Alignment</h4>
                    <p className="advice-desc">
                      Best done together — rotation evens out wear, alignment stops pulling, and you save a second visit.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Frequently Asked Questions */}
            <section className="annual-faq-section">
              <div className="annual-faq-header text-center">
                <h2 className="annual-faq-heading">
                  Frequently Asked <span className="text-orange">Questions</span>
                </h2>
                <p className="annual-faq-subheading">
                  Everything you need to know before booking a car repair service.
                </p>
              </div>

              <div className="annual-faq-pill-list">
                {FAQS.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div key={index} className={`annual-faq-pill-card ${isOpen ? 'annual-faq-pill-card--open' : ''}`}>
                      <button 
                        className="annual-faq-pill-btn"
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        aria-expanded={isOpen}
                      >
                        <span className="annual-faq-pill-text">{faq.q}</span>
                        <span className="annual-faq-pill-indicator">{isOpen ? '−' : '+'}</span>
                      </button>
                      {isOpen && (
                        <div className="annual-faq-pill-answer">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      )}

      {/* Slot Selection Modal */}
      {showSlotModal && (
        <div className="modal-overlay" onClick={() => setShowSlotModal(false)}>
          <div className="modal-content select-slot-modal" onClick={e => e.stopPropagation()}>
            <h3 className="modal-title">Choose a <span className="text-orange">Service Slot</span></h3>
            <p className="modal-subtitle">Pick a convenient date and time for doorstep mechanic dispatch.</p>

            <div className="modal-form-group">
              <label>Preferred Date</label>
              <div className="slot-dates-grid">
                {[
                  { day: 'Mon', num: '30 Sep' },
                  { day: 'Tue', num: '01 Oct' },
                  { day: 'Wed', num: '02 Oct' },
                  { day: 'Thu', num: '03 Oct' }
                ].map(d => (
                  <button 
                    key={d.num}
                    type="button"
                    className={`date-chip ${scheduledSlot.date === `${d.day}, ${d.num}` ? 'date-chip--selected' : ''}`}
                    onClick={() => setScheduledSlot(prev => ({ ...prev, date: `${d.day}, ${d.num}` }))}
                  >
                    <span className="date-chip-day">{d.day}</span>
                    <strong className="date-chip-num">{d.num}</strong>
                  </button>
                ))}
              </div>
            </div>

            <div className="modal-form-group">
              <label>Available Time Slot</label>
              <div className="slot-times-grid">
                {['09:00 AM', '10:00 AM', '11:30 AM', '02:00 PM', '04:30 PM'].map(t => (
                  <button 
                    key={t}
                    type="button"
                    className={`time-chip ${scheduledSlot.time === t ? 'time-chip--selected' : ''}`}
                    onClick={() => setScheduledSlot(prev => ({ ...prev, time: t }))}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <button 
              className="modal-confirm-btn"
              onClick={() => {
                setShowSlotModal(false);
                showToast(`Scheduled for ${scheduledSlot.date} at ${scheduledSlot.time}`, 'success');
              }}
            >
              Confirm Slot
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
