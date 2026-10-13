import React, { useState } from 'react';
import { Plus, Minus, PhoneCall } from 'lucide-react';
import mechanicFaqImg from '../../assets/faq/image.png';
import { useApp } from '../../context/AppContext';

export default function HomeFaqSection() {
  const { openBookingModal } = useApp();
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const faqs = [
    {
      q: 'How quickly can a mechanic reach me?',
      a: 'Our dispatch network operates with live GPS tracking, enabling a verified mechanic to reach your exact roadside or doorstep location within 15 to 30 minutes across Delhi NCR.'
    },
    {
      q: 'What areas does Instant Mechanic cover?',
      a: 'We currently cover all major zones of Delhi NCR including Gurugram, New Delhi, Noida, Faridabad, Ghaziabad, Greater Noida, Manesar, Dwarka, Rohini, NH8 / NH48 corridor, DND, and Indirapuram.'
    },
    {
      q: 'What roadside problems can you fix?',
      a: 'Our vans and technicians handle jump starts, battery testing/replacement, flat tyre change & puncture repair, emergency fuel delivery, overheating/coolant flushes, minor electrical faults, and lock-out assistance on the spot.'
    },
    {
      q: 'How much does a roadside service cost?',
      a: 'We offer upfront, transparent fixed pricing before dispatch starting from ₹299. No hidden inspection fees or surprise surcharges, and you pay only after the job is completed.'
    },
    {
      q: 'Can I book a mechanic in advance?',
      a: 'Yes! You can schedule planned periodic maintenance, comprehensive annual inspections, or car health checkups in advance for any date and time slot.'
    },
    {
      q: 'Do you provide roadside assistance 24/7?',
      a: 'Yes, our emergency mobile service vans and certified mechanics are active 24 hours a day, 7 days a week, 365 days a year across all city roads and connecting state highways.'
    }
  ];

  return (
    <section className="home-faq-section" id="faq">
      <div className="home-faq-container">
        {/* Left Column: Heading & 6 Accordion Pills */}
        <div className="home-faq-left">
          <h2 className="home-faq-title">
            <span className="text-orange">Questions?</span> We've Got You Covered.
          </h2>

          <div className="home-faq-list">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div 
                  key={idx} 
                  className={`home-faq-item ${isOpen ? 'home-faq-item--open' : ''}`}
                >
                  <button 
                    type="button" 
                    className="home-faq-question-btn"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-q-text">{faq.q}</span>
                    <span className="faq-toggle-icon">
                      {isOpen ? <Minus className="w-5 h-5 text-gray-500" /> : <Plus className="w-5 h-5 text-gray-500" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="home-faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Smiling Mechanic Card & Still Have Questions Pill (Desktop) */}
        <div className="home-faq-right">
          <div className="faq-mechanic-card">
            <img 
              src={mechanicFaqImg} 
              alt="Instant Mechanic technician smiling with wrench" 
              className="faq-mechanic-img" 
            />
            {/* Glassmorphism Badge */}
            <div className="faq-verified-badge">
              <span className="badge-avatar">👨‍🔧</span>
              <span className="badge-text">Verified Mechanics</span>
            </div>
          </div>

          {/* Still Have Questions? Banner */}
          <div className="faq-contact-pill-banner">
            <span className="faq-pill-text">Still Have Questions ?</span>
            <a 
              href="tel:+919266961110" 
              className="faq-pill-action-btn"
            >
              Talk with Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
