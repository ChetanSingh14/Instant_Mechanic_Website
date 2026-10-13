import React from 'react';
import { useApp } from '../../context/AppContext';

// Service icons from src/assets/homepageroadsidehelp
import batteryImg from '../../assets/homepageroadsidehelp/Battery.png';
import wheelImg from '../../assets/homepageroadsidehelp/Wheel.png';
import engineImg from '../../assets/homepageroadsidehelp/engine.png';
import electricalImg from '../../assets/homepageroadsidehelp/electrical.png';
import acIssuesImg from '../../assets/homepageroadsidehelp/ac issues.png';
import minorRepairImg from '../../assets/homepageroadsidehelp/minor repair.png';

// 4 Collage images from src/assets/homepageroadsidehelp
import mechanicDipstickImg from '../../assets/homepageroadsidehelp/image 84.png';
import mechanicTabletImg from '../../assets/homepageroadsidehelp/image 80.png';
import mechanicWheelImg from '../../assets/homepageroadsidehelp/image 83.png';
import warningTriangleImg from '../../assets/homepageroadsidehelp/image 82.png';

const ROADSIDE_SERVICES = [
  {
    id: 'battery-jump-start',
    title: 'Battery / Jump Start',
    icon: batteryImg,
    price: '₹399',
    category: 'Urgent',
  },
  {
    id: 'tyres-wheels',
    title: 'Tyres & Wheels',
    icon: wheelImg,
    price: '₹299',
    category: 'Roadside',
  },
  {
    id: 'engine-problems',
    title: 'Engine Problems',
    icon: engineImg,
    price: '₹699',
    category: 'Mechanical',
  },
  {
    id: 'electrical-repairs',
    title: 'Electrical repairs',
    icon: electricalImg,
    price: '₹499',
    category: 'Electrical',
  },
  {
    id: 'ac-issues',
    title: 'Ac Issues',
    icon: acIssuesImg,
    price: '₹599',
    category: 'AC & Climate',
  },
  {
    id: 'minor-repairs',
    title: 'Minor Repairs',
    icon: minorRepairImg,
    price: '₹349',
    category: 'Quick Fix',
  },
];

export default function RoadsideHelpSection() {
  const { openBookingModal } = useApp();

  return (
    <section className="roadside-section" aria-label="Roadside Assistance Services">
      <div className="roadside-container">
        {/* Left Column: Heading, Services, and Help CTA */}
        <div className="roadside-left">
          <h2 className="roadside-title">
            <span className="roadside-title-orange">Your roadside help,</span>{' '}
            <span className="roadside-title-dark">right when you need it.</span>
          </h2>

          <div className="roadside-cards-wrapper">
            <div className="roadside-cards-grid">
              {ROADSIDE_SERVICES.map((item) => (
                <div
                  key={item.id}
                  className="roadside-card"
                  onClick={() => openBookingModal(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      openBookingModal(item);
                    }
                  }}
                >
                  <div className="roadside-card-icon-wrap">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="roadside-card-img"
                      loading="lazy"
                    />
                  </div>
                  <span className="roadside-card-label">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="roadside-footer-cta">
            <span className="roadside-footer-text">Looking for something else?</span>
            <button
              className="roadside-help-btn"
              onClick={() =>
                openBookingModal({
                  title: 'Roadside Breakdown Assistance',
                  price: '₹299',
                  desc: 'Get immediate doorstep mechanic assistance for any unspecified breakdown issue.',
                })
              }
            >
              <span>Message for help Now</span>
              <span className="roadside-btn-arrow">→</span>
            </button>
          </div>
        </div>

        {/* Right Column: 2x2 Collage of transparent cutout photos */}
        <div className="roadside-right">
          <div className="roadside-collage">
            <div className="roadside-collage-col">
              <div className="roadside-img-box">
                <img
                  src={mechanicDipstickImg}
                  alt="Mechanic inspecting engine oil level with dipstick"
                  className="roadside-collage-img"
                />
              </div>
              <div className="roadside-img-box">
                <img
                  src={mechanicWheelImg}
                  alt="Mechanic tightening wheel bolts with torque wrench"
                  className="roadside-collage-img"
                />
              </div>
            </div>

            <div className="roadside-collage-col">
              <div className="roadside-img-box">
                <img
                  src={mechanicTabletImg}
                  alt="Mechanic reviewing vehicle health scan report with customer"
                  className="roadside-collage-img"
                />
              </div>
              <div className="roadside-img-box">
                <img
                  src={warningTriangleImg}
                  alt="Instant Mechanic At Work emergency breakdown warning sign"
                  className="roadside-collage-img warning-triangle-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
