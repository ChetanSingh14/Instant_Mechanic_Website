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
  Info,
  Car,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function AnnualServicePage() {
  const { openBookingModal, showToast, navigateTo } = useApp();

  // Vehicle info state
  const [vehicle, setVehicle] = useState({
    brand: 'Maruti Suzuki',
    model: 'Baleno',
    fuel: 'Petrol',
    interval: 'Every 10,000 km or 1 year'
  });
  const [showVehicleModal, setShowVehicleModal] = useState(false);
  const [showSlotModal, setShowSlotModal] = useState(false);
  const [scheduledSlot, setScheduledSlot] = useState({
    date: 'Mon, 30 Sep',
    time: '10:00 AM'
  });

  // Tiers for Essential Items
  const [selectedTiers, setSelectedTiers] = useState({
    engineOil: 'premium',      // 'affordable' (₹2499) vs 'premium' (₹3999)
    oilFilter: 'affordable',    // 'affordable' (₹280) vs 'premium' (₹1099)
    airFilter: 'premium',       // 'affordable' (₹699) vs 'premium' (₹1299)
    cabinFilter: 'affordable'   // 'affordable' (₹400) vs 'premium' (₹1199)
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

  // Coupon state
  const [couponApplied, setCouponApplied] = useState(false);
  const [membershipDiscount, setMembershipDiscount] = useState(false);

  // FAQ open state
  const [openFaq, setOpenFaq] = useState(null);

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

  const addonPrices = {
    coolantFlush: 499,
    brakeFluidChange: 349,
    acGasTopup: 899,
    tyreRotation: 299,
    wheelAlignment: 399,
    wiperBlades: 399
  };

  // Calculations
  const oilsFluidsTotal = 
    tierPrices.engineOil[selectedTiers.engineOil] + 
    tierPrices.coolantTopup + 
    tierPrices.brakeFluidTopup;

  const replacementPartsTotal = 
    tierPrices.oilFilter[selectedTiers.oilFilter] + 
    tierPrices.airFilter[selectedTiers.airFilter] + 
    tierPrices.cabinFilter[selectedTiers.cabinFilter];

  const laborChargesTotal = 
    tierPrices.periodicMaintenance + 
    tierPrices.carWash + 
    tierPrices.obdScan;

  const addonsTotal = Object.entries(selectedAddons).reduce((acc, [key, isSelected]) => {
    return isSelected ? acc + addonPrices[key] : acc;
  }, 0);

  const rawItemTotal = oilsFluidsTotal + replacementPartsTotal + laborChargesTotal + addonsTotal;
  const couponDiscount = couponApplied ? 676 : 0;
  const memberDiscount = membershipDiscount ? Math.round(rawItemTotal * 0.1) : 0;
  const discountedSubtotal = Math.max(0, rawItemTotal - couponDiscount - memberDiscount);
  const gstAmount = Math.round(discountedSubtotal * 0.18);
  const totalPayable = discountedSubtotal + gstAmount;

  const toggleAddon = (key) => {
    setSelectedAddons(prev => {
      const nextState = { ...prev, [key]: !prev[key] };
      showToast(nextState[key] ? 'Add-on added to service package' : 'Add-on removed', 'info');
      return nextState;
    });
  };

  const toggleTier = (itemKey) => {
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
      title: `${vehicle.brand} ${vehicle.model} - Complete Car Service`,
      price: `₹${totalPayable.toLocaleString('en-IN')}`,
      estTime: `${scheduledSlot.date} at ${scheduledSlot.time}`
    });
  };

  const scrollToAdvice = () => {
    const el = document.getElementById('should-you-add-these');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const faqs = [
    {
      q: 'What is included in the Essential Car Care Service?',
      a: 'Our package covers fresh engine oil replacement, oil filter, air filter, and cabin AC filter change, coolant and brake fluid top-up, a complete 40-point computer diagnostic OBD scan, full periodic maintenance inspection, and a complimentary exterior car wash.'
    },
    {
      q: 'Can this complete annual service be done at my doorstep?',
      a: 'Yes, 100%! Our certified technicians arrive in fully equipped mobile service vans with oil extractors, genuine parts, digital tools, and diagnostic scanners to complete the service in your parking space with zero mess.'
    },
    {
      q: 'What engine oil and spare parts brands do you use?',
      a: 'We strictly use 100% genuine OEM/OES certified replacement filters and grade-matched fully synthetic or semi-synthetic lubricants from trusted global brands including Castrol, Mobil, Shell, and Motul.'
    },
    {
      q: 'How long does the doorstep service take?',
      a: 'The complete periodic maintenance service and comprehensive diagnostic health scan takes approximately 60 to 90 minutes. You can relax at home or attend to work while our technician works on your vehicle.'
    },
    {
      q: 'Will this service affect my car\'s manufacturer warranty?',
      a: 'Not at all. We adhere strictly to OEM vehicle maintenance schedules using manufacturer-approved lubricant grades and genuine parts, preserving your vehicle\'s warranty and engine longevity.'
    },
    {
      q: 'Do you provide a warranty on the service and parts?',
      a: 'Yes, we provide an unconditional 1,000 km or 1-month service warranty on all workmanship, plus standard manufacturer warranties on all replaced spare parts.'
    }
  ];

  return (
    <div className="service-bill-page">
      <div className="service-bill-container">
        {/* Top Vehicle Info Banner */}
        <section className="vehicle-banner-card">
          <div className="vehicle-banner-left">
            <h1 className="vehicle-title">{vehicle.brand} {vehicle.model}</h1>
            <p className="vehicle-subtitle">{vehicle.fuel} · {vehicle.interval}</p>
          </div>
          <button 
            className="vehicle-edit-btn" 
            onClick={() => setShowVehicleModal(true)}
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
                <span className="item-price">₹{tierPrices.engineOil[selectedTiers.engineOil].toLocaleString('en-IN')}</span>
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
                <span className="item-desc">DOT 3 / DOT 4</span>
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
                  >
                    {selectedTiers.oilFilter === 'premium' ? 'Premium' : 'Affordable'}
                  </button>
                </div>
                <span className="item-desc">OEM compatible</span>
              </div>
              <div className="item-price-wrap">
                <span className="item-price">₹{tierPrices.oilFilter[selectedTiers.oilFilter].toLocaleString('en-IN')}</span>
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
                  >
                    {selectedTiers.airFilter === 'premium' ? 'Premium' : 'Affordable'}
                  </button>
                </div>
                <span className="item-desc">High-flow performance paper</span>
              </div>
              <div className="item-price-wrap">
                <span className="item-price">₹{tierPrices.airFilter[selectedTiers.airFilter].toLocaleString('en-IN')}</span>
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
                  <span className="item-name">Cabin / Pollen Filter</span>
                  <button 
                    onClick={() => toggleTier('cabinFilter')}
                    className={`item-tier-badge ${selectedTiers.cabinFilter === 'premium' ? 'item-tier-badge--premium' : 'item-tier-badge--affordable'}`}
                  >
                    {selectedTiers.cabinFilter === 'premium' ? 'Premium' : 'Affordable'}
                  </button>
                </div>
                <span className="item-desc">OEM compatible</span>
              </div>
              <div className="item-price-wrap">
                <span className="item-price">₹{tierPrices.cabinFilter[selectedTiers.cabinFilter].toLocaleString('en-IN')}</span>
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

          {/* Group 3: Labor */}
          <div className="package-group">
            <h3 className="group-heading">LABOR</h3>

            <div className="package-item-row">
              <div className="item-radio-circle"></div>
              <div className="item-details">
                <span className="item-name">Periodic Maintenance Service</span>
                <span className="item-desc">11 tasks - MPVI, tyre check, brake check & more</span>
              </div>
              <div className="item-price-wrap">
                <span className="item-price">₹{tierPrices.periodicMaintenance}</span>
              </div>
            </div>

            <div className="package-item-row">
              <div className="item-radio-circle"></div>
              <div className="item-details">
                <span className="item-name">Car Wash & Interior Vacuuming</span>
                <span className="item-desc">Exterior hand wash + carpet/seats</span>
              </div>
              <div className="item-price-wrap">
                <span className="item-price">₹{tierPrices.carWash}</span>
              </div>
            </div>

            <div className="package-item-row">
              <div className="item-radio-circle"></div>
              <div className="item-details">
                <span className="item-name">Vehicle Scanning (OBD)</span>
                <span className="item-desc">OBD-II diagnostic scan</span>
              </div>
              <div className="item-price-wrap">
                <span className="item-price">₹{tierPrices.obdScan}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Your Service With Add-ons Card */}
        <section className="addons-card">
          <h2 className="addons-card-title">
            Complete your service <span className="text-orange">with add ons</span>
          </h2>

          <div className="addons-list">
            {/* Add-on 1 */}
            <div className={`addon-row ${selectedAddons.coolantFlush ? 'addon-row--selected' : ''}`}>
              <div className="addon-icon-square"></div>
              <div className="addon-info">
                <span className="addon-title">Coolant Full Flush</span>
                <span className="addon-desc">Prevents radiator corrosion & overheating</span>
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

            {/* Add-on 2 */}
            <div className={`addon-row ${selectedAddons.brakeFluidChange ? 'addon-row--selected' : ''}`}>
              <div className="addon-icon-square"></div>
              <div className="addon-info">
                <span className="addon-title">Brake Fluid Full Change</span>
                <span className="addon-desc">Prevents brake fade from moisture build-up</span>
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

            {/* Add-on 3 */}
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

            {/* Add-on 4 */}
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

            {/* Add-on 5 */}
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

            {/* Add-on 6 */}
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
        <div className="view-all-coupons-wrap">
          <button className="view-all-coupons-btn" onClick={() => showToast('Coupon WELCOME10 is the best available offer for your vehicle!', 'info')}>
            View all coupons &rsaquo;
          </button>
        </div>

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

        {/* Should You Add These? Educational Section */}
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
        <section className="faq-section">
          <div className="faq-header text-center">
            <h2 className="faq-heading">
              Frequently Asked <span className="text-orange">Questions</span>
            </h2>
            <p className="faq-subheading">
              Everything you need to know about our doorstep annual car service.
            </p>
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
                    <span className="faq-question-text">{faq.q}</span>
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

        {/* Vehicle Modal */}
        {showVehicleModal && (
          <div className="modal-overlay" onClick={() => setShowVehicleModal(false)}>
            <div className="modal-content select-car-modal" onClick={e => e.stopPropagation()}>
              <h3 className="modal-title">Select Your <span className="text-orange">Car</span></h3>
              <p className="modal-subtitle">Choose your car brand and fuel type for accurate part pricing.</p>
              
              <div className="modal-form-group">
                <label>Car Brand</label>
                <select 
                  className="modal-select" 
                  value={vehicle.brand}
                  onChange={(e) => setVehicle({ ...vehicle, brand: e.target.value })}
                >
                  <option value="Maruti Suzuki">Maruti Suzuki</option>
                  <option value="Hyundai">Hyundai</option>
                  <option value="Tata">Tata Motors</option>
                  <option value="Honda">Honda</option>
                  <option value="Mahindra">Mahindra</option>
                  <option value="Toyota">Toyota</option>
                  <option value="Volkswagen">Volkswagen</option>
                </select>
              </div>

              <div className="modal-form-group">
                <label>Car Model</label>
                <input 
                  type="text" 
                  className="modal-input" 
                  value={vehicle.model}
                  onChange={(e) => setVehicle({ ...vehicle, model: e.target.value })}
                  placeholder="e.g. Baleno, Swift, City, Nexon"
                />
              </div>

              <div className="modal-form-group">
                <label>Fuel Type</label>
                <div className="fuel-options-grid">
                  {['Petrol', 'Diesel', 'CNG', 'Electric'].map(fuel => (
                    <button
                      key={fuel}
                      type="button"
                      className={`fuel-chip ${vehicle.fuel === fuel ? 'fuel-chip--selected' : ''}`}
                      onClick={() => setVehicle({ ...vehicle, fuel })}
                    >
                      {fuel}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                className="modal-confirm-btn"
                onClick={() => {
                  setShowVehicleModal(false);
                  showToast(`Updated vehicle to ${vehicle.brand} ${vehicle.model} (${vehicle.fuel})`, 'success');
                }}
              >
                Update Car Details
              </button>
            </div>
          </div>
        )}

        {/* Slot Modal */}
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
    </div>
  );
}
