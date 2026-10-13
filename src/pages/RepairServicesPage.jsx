import React, { useState } from 'react';
import { 
  Search, 
  Mic, 
  ArrowLeft, 
  Plus, 
  Minus, 
  ChevronRight, 
  ChevronDown, 
  PhoneCall, 
  ShieldCheck, 
  Clock, 
  BadgePercent, 
  Sparkles,
  CheckCircle2,
  Wrench
} from 'lucide-react';
import { useApp } from '../context/AppContext';

// Extracted assets from design IM
import batteryIcon from '../assets/design_assets/Battery.png';
import wheelIcon from '../assets/design_assets/Wheel.png';
import engineIcon from '../assets/design_assets/Engine.png';
import overheatIcon from '../assets/design_assets/Overheat.png';
import brakeIcon from '../assets/design_assets/Brake.png';
import gearIcon from '../assets/design_assets/Gear.png';
import steeringIcon from '../assets/design_assets/Steering Wheel.png';
import acIcon from '../assets/design_assets/Air Conditioner.png';
import electricIcon from '../assets/design_assets/Electricity Hazard.png';
import lightIcon from '../assets/design_assets/Headlight.png';
import doorKeyIcon from '../assets/design_assets/Door-key.png';
import roadsideIcon from '../assets/design_assets/Roadside Assistance.png';

const SERVICE_CATEGORIES = [
  { id: 'battery', title: 'Battery Assistance', icon: batteryIcon, subtitle: 'Get your car back on the road with quick battery assistance.' },
  { id: 'tyres', title: 'Tyres & Wheels', icon: wheelIcon, subtitle: 'Puncture repair, stepney change, air filling and tyre health checks.' },
  { id: 'engine', title: 'Engine', icon: engineIcon, subtitle: 'Scanning, engine misfires, rough idle, stalling and oil leak diagnosis.' },
  { id: 'overheat', title: 'Overheating', icon: overheatIcon, subtitle: 'Radiator checks, coolant top-up, fan motor inspection & temperature fix.' },
  { id: 'brakes', title: 'Brakes', icon: brakeIcon, subtitle: 'Brake pad replacement, disc wear inspection, bleeding and ABS alerts.' },
  { id: 'clutch', title: 'Clutch & Gear', icon: gearIcon, subtitle: 'Hard clutch pedal, gear slipping, cable adjustment and transmission fluid.' },
  { id: 'steering', title: 'Steering & Suspension', icon: steeringIcon, subtitle: 'Wheel alignment, shock absorber inspection, tie rods and power steering.' },
  { id: 'ac', title: 'AC & Infotainment', icon: acIcon, subtitle: 'AC cooling coil check, gas refill, compressor inspection & screen audio.' },
  { id: 'electric', title: 'Electrical & Warnings', icon: electricIcon, subtitle: 'Dashboard warning lights, fuse replacement, alternator & sensor checks.' },
  { id: 'lights', title: 'Lights & Visibility', icon: lightIcon, subtitle: 'Headlight bulb replacement, indicators, wiper motor and windshield glass.' },
  { id: 'door-keys', title: 'Doors, Keys & Body', icon: doorKeyIcon, subtitle: 'Key lock lockout assistance, door lock motors, boot release & latch fixes.' },
  { id: 'roadside', title: 'Roadside Help', icon: roadsideIcon, subtitle: 'Emergency breakdown towing, jump start, fuel delivery and minor repairs.' },
];

const DETAILED_PROBLEMS = {
  battery: [
    {
      id: 'bat-1',
      title: 'Car not Starting / Breakdown',
      desc: "Get help when your car won't start, suddenly stops, or is completely immobilized.",
      price: '₹399',
      related: ['Dead battery jump start', 'Alternator charging test', 'Loose terminal cable fix', 'Complete electrical health scan'],
    },
    {
      id: 'bat-2',
      title: 'Self motor / self start issue',
      desc: 'Resolve slow, inconsistent, or failed self-start and starter motor problems.',
      price: '₹399',
      related: ['Starter relay check', 'Carbon brush inspection', 'Ignition switch signal test'],
    },
    {
      id: 'bat-3',
      title: 'Ignition issue',
      desc: 'Get assistance with stiff ignition, key detection, and ignition system problems.',
      price: '₹399',
      related: ['Immobilizer sync issue', 'Push start sensor reset', 'Key fob battery replacement'],
    },
    {
      id: 'bat-4',
      title: 'Starter motor / push start issue',
      desc: 'Fix problems with push-start systems, starter response, and starting-related warnings.',
      price: '₹399',
      related: ['Clutch sensor switch test', 'Brake safety interlock check', 'Start-stop circuit diagnostics'],
    },
  ],
};

const FAQS = [
  {
    q: 'How do I know which car repair service I need?',
    a: 'You can use our search bar above, select the symptoms that match your issue, or tap "CarBuddy AI" for instant automatic diagnosis. When in doubt, select "Roadside Help" and our mechanic will diagnose it on-site.',
  },
  {
    q: "What if I don't know what's wrong with my car?",
    a: 'No problem at all! You can book a General Inspection or call our helpline. Our verified mechanic will arrive in 15 minutes with full OBD diagnostic scanners to locate the exact issue.',
  },
  {
    q: 'Can I search for my car problem?',
    a: 'Yes, just type any symptom like "car won\'t start", "squeaking brakes", or "white smoke" in the search box above to get instant matching solutions.',
  },
  {
    q: 'What types of car problems can Instant Mechanic help with?',
    a: 'We cover all major roadside and doorstep issues including battery jump start, tyre punctures, overheating, brake issues, engine warnings, AC failure, and minor mechanical adjustments.',
  },
  {
    q: 'What if my car has stopped suddenly?',
    a: 'Trigger our Emergency SOS button or call our helpline immediately. We dispatch the nearest mobile mechanic van to your exact GPS location in 15 minutes.',
  },
  {
    q: 'Can I get towing, recovery or a car inspection?',
    a: 'Yes, we provide safe flatbed towing, emergency roadside recovery, and pre-purchase or pre-trip car inspections across Delhi NCR.',
  },
];

export default function RepairServicesPage() {
  const { openBookingModal } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [expandedRelated, setExpandedRelated] = useState({});

  const filteredCategories = SERVICE_CATEGORIES.filter(c => 
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleRelated = (id) => {
    setExpandedRelated(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const currentCategory = selectedCategory 
    ? SERVICE_CATEGORIES.find(c => c.id === selectedCategory) 
    : null;

  const currentProblems = selectedCategory && DETAILED_PROBLEMS[selectedCategory]
    ? DETAILED_PROBLEMS[selectedCategory]
    : DETAILED_PROBLEMS.battery;

  return (
    <div className="repair-page">
      {/* Hero Header Section */}
      <section className="repair-hero">
        <div className="repair-hero-container">
          <h1 className="repair-hero-title">
            <span className="text-orange">Car Repair,</span> Made Simple.
          </h1>
          <p className="repair-hero-subtitle">
            Whether it's a sudden breakdown or a routine repair, find the right service for your car and get back on the road with confidence.
          </p>

          {/* Search Bar matching Figma */}
          <div className="repair-search-wrap">
            <div className="repair-search-bar">
              {selectedCategory ? (
                <button 
                  className="repair-search-back-btn" 
                  onClick={() => setSelectedCategory(null)}
                  aria-label="Back to all categories"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-600" />
                </button>
              ) : (
                <Search className="w-5 h-5 text-gray-400" />
              )}
              <input
                type="text"
                placeholder='What&apos;s wrong with your car? Try "car won&apos;t start"...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="repair-search-input"
              />
              <button className="repair-search-mic-btn" aria-label="Voice search">
                <Mic className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="page-wrapper repair-content-wrapper">
        {!selectedCategory ? (
          /* 12 Categories Grid (Matching car repair main page v1.pdf) */
          <section className="repair-categories-section">
            <h2 className="repair-grid-title">Choose the service your car needs</h2>
            <div className="repair-categories-grid">
              {filteredCategories.map((cat) => (
                <div
                  key={cat.id}
                  className="repair-category-card"
                  onClick={() => setSelectedCategory(cat.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') setSelectedCategory(cat.id);
                  }}
                >
                  <div className="repair-card-icon-wrap">
                    <img src={cat.icon} alt={cat.title} className="repair-card-img" />
                  </div>
                  <span className="repair-card-title">{cat.title}</span>
                </div>
              ))}
            </div>
          </section>
        ) : (
          /* Category Detail View (Matching Car Repair V1 1.pdf) */
          <div className="repair-detail-layout">
            {/* Left Category Sidebar */}
            <aside className="repair-sidebar">
              <h3 className="repair-sidebar-title">What's wrong with your car?</h3>
              <ul className="repair-sidebar-list">
                {SERVICE_CATEGORIES.map((cat) => {
                  const isActive = cat.id === selectedCategory;
                  return (
                    <li key={cat.id}>
                      <button
                        className={`repair-sidebar-item ${isActive ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(cat.id)}
                      >
                        <img src={cat.icon} alt="" className="repair-sidebar-icon" />
                        <span className="repair-sidebar-label">{cat.title}</span>
                        {isActive && <ChevronRight className="w-4 h-4 ml-auto text-orange" />}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </aside>

            {/* Right Problem Cards & Banner */}
            <main className="repair-detail-main">
              {/* Category Top Banner */}
              <div className="repair-detail-banner">
                <div className="repair-detail-banner-text">
                  <h2 className="repair-detail-banner-title">
                    {currentCategory?.title.split(' ')[0]}{' '}
                    <span className="text-orange">{currentCategory?.title.split(' ').slice(1).join(' ') || 'Assistance'}</span>
                  </h2>
                  <p className="repair-detail-banner-desc">
                    {currentCategory?.subtitle}
                  </p>
                </div>
              </div>

              {/* 2x2 Detailed Problem Cards */}
              <div className="repair-problem-grid">
                {currentProblems.map((prob) => {
                  const isExpanded = expandedRelated[prob.id];
                  return (
                    <div key={prob.id} className="repair-problem-card">
                      <div className="repair-problem-card-body">
                        <h3 className="repair-problem-title">{prob.title}</h3>
                        <p className="repair-problem-desc">{prob.desc}</p>
                        
                        <div className="repair-problem-price-row">
                          <div>
                            <span className="repair-price-label">Starting at</span>
                            <span className="repair-price-val">{prob.price}</span>
                          </div>
                          <button
                            className="repair-add-cart-btn"
                            onClick={() => openBookingModal({ title: prob.title, price: prob.price })}
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>

                      {/* Expandable Related Problems Accordion */}
                      <div className="repair-related-accordion">
                        <button 
                          className="repair-related-toggle"
                          onClick={() => toggleRelated(prob.id)}
                        >
                          <span>View Related Problems</span>
                          <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                        {isExpanded && (
                          <ul className="repair-related-list">
                            {prob.related.map((item, idx) => (
                              <li key={idx} className="repair-related-item">
                                <CheckCircle2 className="w-3.5 h-3.5 text-orange flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* "Not sure what's wrong?" Callout Banner */}
              <div className="repair-not-sure-banner">
                <div className="repair-not-sure-text">
                  <h3>Not sure what's <span className="text-orange">wrong?</span></h3>
                  <p>Tell us the symptoms. A verified mechanic will diagnose it at your location.</p>
                  <button 
                    className="repair-not-sure-btn"
                    onClick={() => {
                      if (typeof window !== 'undefined') window.location.href = 'tel:+919266961110';
                    }}
                  >
                    Call for help now
                  </button>
                </div>
              </div>
            </main>
          </div>
        )}

        {/* Why Choose Instant Mechanic Section */}
        <section className="repair-why-section">
          <div className="text-center mb-10">
            <h2 className="section-heading">
              Why Choose <span className="text-orange">Instant Mechanic?</span>
            </h2>
          </div>
          <div className="repair-why-grid">
            <div className="repair-why-card">
              <div className="repair-why-icon-box">
                <ShieldCheck className="w-6 h-6 text-orange" />
              </div>
              <h3>Verified Mechanics</h3>
              <p>Skilled, background-checked professionals you can rely on.</p>
            </div>

            <div className="repair-why-card">
              <div className="repair-why-icon-box">
                <BadgePercent className="w-6 h-6 text-orange" />
              </div>
              <h3>Transparent Pricing</h3>
              <p>Clear estimates with no hidden charges or unexpected surprises.</p>
            </div>

            <div className="repair-why-card">
              <div className="repair-why-icon-box">
                <Clock className="w-6 h-6 text-orange" />
              </div>
              <h3>On-Time Service</h3>
              <p>Quick, reliable assistance at your convenience in 15 minutes.</p>
            </div>

            <div className="repair-why-card">
              <div className="repair-why-icon-box">
                <CheckCircle2 className="w-6 h-6 text-orange" />
              </div>
              <h3>Quality Service</h3>
              <p>Trusted repair standards with quality parts and workmanship.</p>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="repair-faq-section">
          <div className="text-center mb-8">
            <h2 className="section-heading">
              Frequently Asked <span className="text-orange">Questions</span>
            </h2>
            <p className="section-subheading">
              Everything you need to know before booking a car repair service.
            </p>
          </div>

          <div className="faq-list">
            {FAQS.map((faq, index) => {
              const isOpen = expandedFaq === index;
              return (
                <div key={index} className="faq-item">
                  <button
                    className="faq-question-btn"
                    onClick={() => setExpandedFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className="faq-icon-wrap">
                      {isOpen ? <Minus className="w-4 h-4 text-orange" /> : <Plus className="w-4 h-4 text-gray-500" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer">
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
  );
}
