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
  Check,
  Wrench,
  UserCheck,
  Receipt,
  Award
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
import carExplodedImg from '../assets/design_assets/car_parts_exploded.png';

// Category banner images
import garageBannerImg from '../assets/carrepairinnerpage/garage image.png';
import bannerBattery from '../assets/carrepairinnerpage/image 54.png';
import bannerTyres from '../assets/carrepairinnerpage/image 54 (1).png';
import bannerEngine from '../assets/carrepairinnerpage/image 54 (2).png';
import bannerOverheat from '../assets/carrepairinnerpage/image 54 (3).png';
import bannerBrakes from '../assets/carrepairinnerpage/Car with its parts laid out_mask-group.png';
import bannerClutch from '../assets/carrepairinnerpage/Car with its parts laid out_mask-group (1).png';
import bannerSteering from '../assets/carrepairinnerpage/Car with its parts laid out_mask-group (2).png';
import bannerAc from '../assets/carrepairinnerpage/Car with its parts laid out_mask-group (3).png';
import bannerElectric from '../assets/carrepairinnerpage/Car with its parts laid out_mask-group (4).png';
import bannerLights from '../assets/carrepairinnerpage/Car with its parts laid out_mask-group (5).png';
import bannerDoorKeys from '../assets/carrepairinnerpage/Car with its parts laid out_mask-group (6).png';
import bannerRoadside from '../assets/carrepairinnerpage/Car with its parts laid out_mask-group (7).png';

const SERVICE_CATEGORIES = [
  { id: 'battery', title: 'Battery Assistance', icon: batteryIcon, bannerImg: bannerBattery, titlePrefix: 'Battery', titleHighlight: 'Assistance', subtitle: 'Get your car back on the road with quick battery assistance.' },
  { id: 'tyres', title: 'Tyres & Wheels', icon: wheelIcon, bannerImg: bannerTyres, titlePrefix: 'Tyres &', titleHighlight: 'Wheels', subtitle: 'Puncture repair, stepney change, air filling and tyre health checks.' },
  { id: 'engine', title: 'Engine', icon: engineIcon, bannerImg: bannerEngine, titlePrefix: 'Engine', titleHighlight: 'Diagnostics', subtitle: 'Scanning, engine misfires, rough idle, stalling and oil leak diagnosis.' },
  { id: 'overheat', title: 'Overheating', icon: overheatIcon, bannerImg: bannerOverheat, titlePrefix: 'Car', titleHighlight: 'Overheating', subtitle: 'Radiator checks, coolant top-up, fan motor inspection & temperature fix.' },
  { id: 'brakes', title: 'Brakes', icon: brakeIcon, bannerImg: bannerBrakes, titlePrefix: 'Brake', titleHighlight: 'Services', subtitle: 'Brake pad replacement, disc wear inspection, bleeding and ABS alerts.' },
  { id: 'clutch', title: 'Clutch & Gear', icon: gearIcon, bannerImg: bannerClutch, titlePrefix: 'Clutch &', titleHighlight: 'Gear', subtitle: 'Hard clutch pedal, gear slipping, cable adjustment and transmission fluid.' },
  { id: 'steering', title: 'Steering & Suspension', icon: steeringIcon, bannerImg: bannerSteering, titlePrefix: 'Steering &', titleHighlight: 'Suspension', subtitle: 'Wheel alignment, shock absorber inspection, tie rods and power steering.' },
  { id: 'ac', title: 'AC & Infotainment', icon: acIcon, bannerImg: bannerAc, titlePrefix: 'AC &', titleHighlight: 'Infotainment', subtitle: 'AC cooling coil check, gas refill, compressor inspection & screen audio.' },
  { id: 'electric', title: 'Electrical & Warnings', icon: electricIcon, bannerImg: bannerElectric, titlePrefix: 'Electrical &', titleHighlight: 'Warnings', subtitle: 'Dashboard warning lights, fuse replacement, alternator & sensor checks.' },
  { id: 'lights', title: 'Lights & Visibility', icon: lightIcon, bannerImg: bannerLights, titlePrefix: 'Lights &', titleHighlight: 'Visibility', subtitle: 'Headlight bulb replacement, indicators, wiper motor and windshield glass.' },
  { id: 'door-keys', title: 'Doors, Keys & Body', icon: doorKeyIcon, bannerImg: bannerDoorKeys, titlePrefix: 'Doors, Keys &', titleHighlight: 'Body', subtitle: 'Key lock lockout assistance, door lock motors, boot release & latch fixes.' },
  { id: 'roadside', title: 'Roadside Help', icon: roadsideIcon, bannerImg: bannerRoadside, titlePrefix: 'Roadside', titleHighlight: 'Assistance', subtitle: 'Emergency breakdown towing, jump start, fuel delivery and minor repairs.' },
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
  tyres: [
    {
      id: 'tyr-1',
      title: 'Flat Tyre & Puncture Repair',
      desc: 'Doorstep puncture fix, tubeless strip insertion, and tyre pressure optimization.',
      price: '₹299',
      related: ['Valve neck leak repair', 'Stepney tyre mounting', 'Rim bead sealing'],
    },
    {
      id: 'tyr-2',
      title: 'Tyre Rotation & Wheel Balancing',
      desc: 'Even out tyre wear pattern and eliminate high-speed steering vibration.',
      price: '₹499',
      related: ['Lead clip balancing weights', 'Camber alignment check', 'Tread depth measurement'],
    }
  ],
  engine: [
    {
      id: 'eng-1',
      title: 'Check Engine Light Scan & Diagnostics',
      desc: 'Comprehensive OBD-II computer diagnostic scanning with error code clearing.',
      price: '₹399',
      related: ['O2 sensor live test', 'Mass air flow calibration', 'Throttle body check'],
    },
    {
      id: 'eng-2',
      title: 'Engine Misfire / Rough Idle',
      desc: 'Diagnose violent vehicle shuddering, sudden power loss, and sputtering.',
      price: '₹499',
      related: ['Spark plug health check', 'Ignition coil resistance', 'Fuel injector pulse test'],
    }
  ],
  overheat: [
    {
      id: 'ovh-1',
      title: 'Coolant Leak & Radiator Inspection',
      desc: 'Emergency cooling system pressure testing and radiator leak detection.',
      price: '₹399',
      related: ['Radiator cap pressure test', 'Thermostat valve test', 'Water pump seal inspection'],
    }
  ],
  brakes: [
    {
      id: 'brk-1',
      title: 'Brake Pad Replacement & Cleaning',
      desc: 'Front/rear brake caliper inspection, pad wear analysis, and disc rotor testing.',
      price: '₹399',
      related: ['Brake caliper pin greasing', 'Brake line bleeding', 'ABS sensor inspection'],
    },
    {
      id: 'brk-2',
      title: 'Brake Spongy / Low Fluid',
      desc: 'Fix spongy brake pedal, fluid leaks, and master cylinder pressure loss.',
      price: '₹449',
      related: ['Brake fluid top-up DOT4', 'Brake booster check', 'Handbrake cable tightening'],
    }
  ],
  clutch: [
    {
      id: 'clt-1',
      title: 'Hard Clutch / Gear Stiff',
      desc: 'Resolve hard pedal pressing, gear shifting tightness, and clutch judder.',
      price: '₹499',
      related: ['Clutch wire cable adjustment', 'Release bearing inspection', 'Transmission fluid check'],
    },
    {
      id: 'clt-2',
      title: 'Clutch Slipping / Low Pickup',
      desc: 'Diagnose engine RPM flare without acceleration and worn clutch plates.',
      price: '₹499',
      related: ['Pressure plate wear check', 'Flywheel resurfacing advice', 'Hydraulic slave cylinder inspection'],
    }
  ],
  steering: [
    {
      id: 'str-1',
      title: 'Wheel Alignment & Balancing',
      desc: 'Fix car pulling to one side, off-center steering wheel, and tire wear.',
      price: '₹399',
      related: ['Toe/camber computer alignment', 'Tie rod end inspection', 'High-speed vibration balance'],
    },
    {
      id: 'str-2',
      title: 'Suspension Noise & Shockers',
      desc: 'Diagnose thudding noise on bumps, bouncy ride, and leaking shock absorbers.',
      price: '₹499',
      related: ['Lower arm bush inspection', 'Stabilizer link rod check', 'Strut mount testing'],
    }
  ],
  ac: [
    {
      id: 'ac-1',
      title: 'Car AC Not Cooling / Low Airflow',
      desc: 'Complete AC cooling inspection, blower check, and cabin pollen filter cleaning.',
      price: '₹399',
      related: ['Condenser coil wash', 'AC compressor clutch test', 'Cabin filter dusting'],
    },
    {
      id: 'ac-2',
      title: 'AC Gas Refill & Leak Detection',
      desc: 'Precision refrigerant gas top-up with UV dye leak testing and vent temp check.',
      price: '₹799',
      related: ['R134a refrigerant charge', 'AC valve seal test', 'O-ring replacement'],
    }
  ],
  electric: [
    {
      id: 'elec-1',
      title: 'Battery Drain & Alternator Issue',
      desc: 'Trace parasitic electrical draw, test alternator charging, and check fuses.',
      price: '₹399',
      related: ['Parasitic draw test', 'Alternator diode inspection', 'Main fuse box scan'],
    },
    {
      id: 'elec-2',
      title: 'Power Windows & Horn Failure',
      desc: 'Door window glass stuck, power window switch check, and horn wiring repair.',
      price: '₹299',
      related: ['Window motor relay check', 'Horn switch wiring fix', 'Central locking test'],
    }
  ],
  lights: [
    {
      id: 'lgt-1',
      title: 'Headlight / Fog Light Replacement',
      desc: 'Doorstep halogen/LED bulb replacement and beam angle level adjustment.',
      price: '₹199',
      related: ['H4/H7 halogen bulb replacement', 'Headlight relay check', 'Beam leveler calibration'],
    },
    {
      id: 'lgt-2',
      title: 'Indicators & Wiper Blade Fix',
      desc: 'Blinker failure, wiper washer motor check, and premium wiper blade installation.',
      price: '₹249',
      related: ['Flasher relay replacement', 'Windshield wiper blade fitting', 'Washer nozzle cleaning'],
    }
  ],
  'door-keys': [
    {
      id: 'dr-1',
      title: 'Car Lockout & Key Assistance',
      desc: 'Non-destructive door unlocking when keys are locked inside vehicle.',
      price: '₹499',
      related: ['Air wedge door unlocking', 'Key fob battery replacement', 'Boot lockout release'],
    },
    {
      id: 'dr-2',
      title: 'Door Latch & Central Lock Fix',
      desc: 'Repair door not latching, actuator motor failure, and boot release cable.',
      price: '₹399',
      related: ['Door actuator motor check', 'Child lock inspection', 'Boot latch striker alignment'],
    }
  ],
  roadside: [
    {
      id: 'rds-1',
      title: 'Emergency Jump Start & Towing',
      desc: 'Fast 15-minute roadside arrival for dead battery jump start or flatbed towing.',
      price: '₹299',
      related: ['Heavy-duty jump pack start', 'Hydraulic flatbed towing', 'On-spot roadside diagnosis'],
    },
    {
      id: 'rds-2',
      title: 'Emergency Fuel & Puncture',
      desc: 'Emergency fuel delivery up to 5L and roadside stepney tyre change.',
      price: '₹299',
      related: ['Emergency petrol/diesel delivery', 'Hydraulic jack wheel swap', 'Air pressure refill'],
    }
  ]
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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [expandedRelated, setExpandedRelated] = useState({});

  React.useEffect(() => {
    const handleReset = () => setSelectedCategory(null);
    window.addEventListener('reset-repair-category', handleReset);
    return () => window.removeEventListener('reset-repair-category', handleReset);
  }, []);

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
      {/* 1. Hero Header Section - ONLY on outer overview, removed on inner repair page */}
      {!selectedCategory && (
        <section className="repair-hero">
          <div className="repair-hero-container">
            <h1 className="repair-hero-title">
              <span className="text-orange">Car Repair,</span> Made Simple.
            </h1>
            <p className="repair-hero-subtitle">
              Whether it's a sudden breakdown or a routine repair, find the right service for your car and get back on the road with confidence.
            </p>

            {/* Search Bar */}
            <div className="repair-search-container">
              <div className="repair-search-bar">
                <button 
                  className="repair-search-back-btn" 
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-500" />
                </button>
                <input
                  type="text"
                  placeholder='What&apos;s wrong with your car? Try "car won&apos;t start"...'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="repair-search-input"
                />
                <button className="repair-search-mic-btn" aria-label="Voice search">
                  <Mic className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Content Container */}
      <div className="repair-content-container">
        {!selectedCategory ? (
          /* 12 Categories 4x3 Grid (Matching Image 3) */
          <section className="repair-categories-section">
            <h2 className="repair-categories-heading">Choose the service your car needs</h2>
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
                  <div className="repair-category-icon-wrap">
                    <img src={cat.icon} alt={cat.title} className="repair-category-icon" />
                  </div>
                  <span className="repair-category-title">{cat.title}</span>
                </div>
              ))}
            </div>
          </section>
        ) : (
          /* Category Detail View (Matching Car Repair V1 1.pdf) */
          <div className="repair-detail-layout">
            {/* Left Category Sidebar */}
            <aside className="repair-sidebar">
              <button 
                type="button" 
                className="repair-sidebar-back-btn" 
                onClick={() => setSelectedCategory(null)}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>All Services</span>
              </button>
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
                    {currentCategory?.titlePrefix || currentCategory?.title.split(' ')[0]}{' '}
                    <span className="text-orange">{currentCategory?.titleHighlight || currentCategory?.title.split(' ').slice(1).join(' ')}</span>
                  </h2>
                  <p className="repair-detail-banner-desc">
                    {currentCategory?.subtitle}
                  </p>
                </div>
                {currentCategory?.bannerImg && (
                  <div className="repair-detail-banner-img-wrap">
                    <img 
                      src={currentCategory.bannerImg} 
                      alt={currentCategory.title} 
                      className="repair-detail-banner-img" 
                    />
                  </div>
                )}
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
                                <Check className="w-3.5 h-3.5 text-gray-700 flex-shrink-0 mt-0.5" />
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

              {/* "Not sure what's wrong?" Callout Banner with Garage Image */}
              <div className="repair-not-sure-banner">
                <div className="repair-not-sure-text">
                  <h3 className="repair-not-sure-title">
                    Not sure what&apos;s <span className="text-orange">wrong?</span>
                  </h3>
                  <p className="repair-not-sure-desc">
                    Tell us the symptoms. A verified mechanic will diagnose it at your location.
                  </p>
                  <button 
                    className="repair-not-sure-btn"
                    onClick={() => {
                      if (typeof window !== 'undefined') window.location.href = 'tel:+919266961110';
                    }}
                  >
                    Call for help now
                  </button>
                </div>
                <div className="repair-not-sure-img-wrap">
                  <img 
                    src={garageBannerImg} 
                    alt="Instant Mechanic garage diagnosis" 
                    className="repair-not-sure-garage-img" 
                  />
                </div>
              </div>
            </main>
          </div>
        )}

        {/* Why Choose & FAQ are rendered ONLY on the outer page, hidden on inner category detail page */}
        {!selectedCategory && (
          <>
            {/* 2. Why Choose Instant Mechanic Section matching Image 3 with Exploded Car Image */}
            <section className="repair-why-section">
              <div className="repair-why-header text-center">
                <h2 className="repair-why-title">
                  Why Choose <span className="text-orange">Instant Mechanic?</span>
                </h2>
              </div>

              <div className="repair-why-showcase">
                {/* Center Exploded Car Asset */}
                <div className="repair-why-center-img-wrap">
                  <img 
                    src={carExplodedImg} 
                    alt="Instant Mechanic full vehicle parts and mechanics" 
                    className="repair-why-exploded-car" 
                  />
                </div>

                {/* 4 Feature Callout Cards with Orange Border and Circular Icon Badges */}
                {/* Card 1: Top Left */}
                <div className="why-callout-card why-callout--top-left">
                  <div className="why-callout-text">
                    <h3 className="why-callout-title">Verified Mechanics</h3>
                    <p className="why-callout-desc">Skilled, background-checked professionals you can rely on.</p>
                  </div>
                  <div className="why-callout-badge-circle">
                    <UserCheck className="w-5 h-5 text-orange-600" />
                  </div>
                </div>

                {/* Card 2: Top Right */}
                <div className="why-callout-card why-callout--top-right">
                  <div className="why-callout-badge-circle">
                    <Receipt className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="why-callout-text">
                    <h3 className="why-callout-title">Transparent Pricing</h3>
                    <p className="why-callout-desc">Clear estimates with no hidden charges.</p>
                  </div>
                </div>

                {/* Card 3: Bottom Left */}
                <div className="why-callout-card why-callout--bottom-left">
                  <div className="why-callout-text">
                    <h3 className="why-callout-title">On-Time Service</h3>
                    <p className="why-callout-desc">Quick, reliable assistance at your convenience.</p>
                  </div>
                  <div className="why-callout-badge-circle">
                    <Clock className="w-5 h-5 text-orange-600" />
                  </div>
                </div>

                {/* Card 4: Bottom Right */}
                <div className="why-callout-card why-callout--bottom-right">
                  <div className="why-callout-badge-circle">
                    <ShieldCheck className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="why-callout-text">
                    <h3 className="why-callout-title">Quality Service</h3>
                    <p className="why-callout-desc">Trusted repair standards with quality parts and workmanship.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Frequently Asked Questions matching Image 4 */}
            <section className="repair-faq-section">
              <div className="repair-faq-header text-center">
                <h2 className="repair-faq-title">
                  Frequently Asked <span className="text-orange">Questions</span>
                </h2>
                <p className="repair-faq-subtitle">
                  Everything you need to know before booking a car repair service.
                </p>
              </div>

              <div className="repair-faq-list">
                {FAQS.map((faq, index) => {
                  const isOpen = expandedFaq === index;
                  return (
                    <div key={index} className={`repair-faq-item ${isOpen ? 'open' : ''}`}>
                      <button
                        className="repair-faq-btn"
                        onClick={() => setExpandedFaq(isOpen ? null : index)}
                        aria-expanded={isOpen}
                      >
                        <span className="repair-faq-question">{faq.q}</span>
                        <span className="repair-faq-toggle-icon">
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="repair-faq-answer">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
}
