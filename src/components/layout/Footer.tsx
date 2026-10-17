import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import vanImg from '../../assets/fotter/mechanic and van.png';
import towTruckImg from '../../assets/fotter/road assiantance car.png';
import garageImg from '../../assets/fotter/garage mechanic.png';
import whatsappIcon from '../../assets/fotter/whatsapp-icon.png';
import officePhone3dIcon from '../../assets/annual/office-phone.png';

export default function Footer() {
  const { navigateTo, openBookingModal, activeTab } = useApp();

  return (
    <footer className="instant-mechanic-footer-wrapper">
      {/* 1. Trouble on the Road? Pre-footer Roadside Banner - ONLY ON HOME SCREEN */}
      {activeTab === 'home' && (
        <div className="pre-footer-roadside-cta">
        <div className="roadside-cta-header text-center">
          <h2 className="roadside-cta-title">
            Trouble on the Road? <span className="text-orange">We've Got You.</span>
          </h2>
          <p className="roadside-cta-subtitle">
            Fast roadside assistance. Transparent repairs. 24/7 support.
          </p>
          <div className="roadside-cta-btn-wrap">
            <button 
              type="button"
              className="roadside-cta-book-btn"
              onClick={() => openBookingModal({ title: '24/7 Roadside Assistance', price: '₹299' })}
            >
              Book a Mechanic Now
            </button>
          </div>
        </div>

        {/* 3 Illustrated Service Vehicles on Asphalt Road */}
        <div className="roadside-scene-container">
          <div className="roadside-vehicles-row">
            <div className="vehicle-item vehicle--van">
              <img src={vanImg} alt="Instant Mechanic van and roadside mechanic" />
            </div>
            <div className="vehicle-item vehicle--tow">
              <img src={towTruckImg} alt="Instant Mechanic emergency flatbed tow truck" />
            </div>
            <div className="vehicle-item vehicle--garage">
              <img src={garageImg} alt="Instant Mechanic verified workshop and garage bay" />
            </div>
          </div>

          {/* Asphalt road strip with dashed lane lines */}
          <div className="asphalt-road-strip">
            <div className="road-dashed-lines">
              <span className="dash-mark"></span>
              <span className="dash-mark"></span>
              <span className="dash-mark"></span>
              <span className="dash-mark"></span>
              <span className="dash-mark"></span>
              <span className="dash-mark"></span>
            </div>
          </div>
        </div>
      </div>
      )}
      {/* 2. Main Dark Footer */}
      <div className="main-dark-footer-body">
        <div className="footer-columns-container">
          {/* Col 1: Brand & Social */}
          <div className="footer-col footer-col--brand">
            <h3 className="footer-tagline-title">DRIVE WITH CONFIDENCE</h3>
            <p className="footer-mission-text">
              Building India's largest car care platform Instant roadside response, AI-powered diagnosis, and transparent repairs for every car owner in India.
            </p>
            <div className="footer-social-row">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="footer-social-icon-btn footer-social--ig"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <defs>
                    <radialGradient id="ig-grad" cx="20%" cy="100%" r="150%">
                      <stop offset="0%" stopColor="#fdf497" />
                      <stop offset="5%" stopColor="#fdf497" />
                      <stop offset="45%" stopColor="#fd5949" />
                      <stop offset="60%" stopColor="#d6249f" />
                      <stop offset="90%" stopColor="#285AEB" />
                    </radialGradient>
                  </defs>
                  <rect width="20" height="20" x="2" y="2" rx="5" fill="url(#ig-grad)" />
                  <path fill="#ffffff" d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm4.8-8.4a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="footer-social-icon-btn footer-social--li"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="4" fill="#0077B5" />
                  <path fill="#ffffff" d="M7.5 9h-2.5v7.5h2.5v-7.5zm-1.25-3.5a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9zm12.75 6.25c0-2.35-1.25-3.45-2.93-3.45-1.35 0-1.95.75-2.29 1.27v-1.07h-2.5c.03.7 0 7.5 0 7.5h2.5v-4.19c0-.22.02-.45.08-.61.18-.45.59-.92 1.28-.92.9 0 1.26.69 1.26 1.7v4.02h2.5v-4.25z"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/919266961110" 
                target="_blank" 
                rel="noreferrer" 
                className="footer-social-icon-btn footer-social--wa"
                aria-label="WhatsApp"
              >
                <img src={whatsappIcon} alt="WhatsApp" className="footer-social-img" />
              </a>
            </div>
          </div>

          {/* Col 2: Platform */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Platform</h4>
            <ul className="footer-links-list">
              <li>
                <button type="button" onClick={() => navigateTo('membership')}>Membership</button>
              </li>
              <li>
                <button type="button" onClick={() => navigateTo('repairs')}>Car Repair</button>
              </li>
              <li>
                <button type="button" onClick={() => navigateTo('annual')}>Car Service</button>
              </li>
              <li>
                <a href="#carbuddy">AI Diagnosis</a>
              </li>
              <li>
                <button type="button" onClick={() => navigateTo('repairs')}>About us</button>
              </li>
            </ul>
          </div>

          {/* Col 3: Policies */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Policies</h4>
            <ul className="footer-links-list">
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#cancellation">Cancellation</a></li>
              <li><a href="#refund">Refund Policy</a></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="footer-col footer-col--contact">
            <h4 className="footer-col-heading">Contact</h4>
            <div className="contact-items-stack">
              <div className="contact-item-row">
                <div className="contact-icon-box">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EF4444" />
                    <circle cx="12" cy="9" r="2.5" fill="#FFFFFF" />
                  </svg>
                </div>
                <div className="contact-item-text">
                  <span className="contact-item-label">Address</span>
                  <span className="contact-item-val">Sector 75, Gurugram, Haryana</span>
                </div>
              </div>

              <div className="contact-item-row">
                <div className="contact-icon-box">
                  <img src={officePhone3dIcon} alt="Phone" className="w-4 h-4 object-contain" />
                </div>
                <div className="contact-item-text">
                  <span className="contact-item-label">Phone / WhatsApp</span>
                  <a href="tel:+919266961110" className="contact-item-val">+91 9266961110</a>
                </div>
              </div>

              <div className="contact-item-row">
                <div className="contact-icon-box">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="4" width="20" height="16" rx="2.5" fill="#FFFFFF" />
                    <path d="M2.5 5.5L12 13L21.5 5.5" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2.5 18.5V6.5" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" />
                    <path d="M21.5 18.5V6.5" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="contact-item-text">
                  <span className="contact-item-label">Email</span>
                  <a href="mailto:support@instantmechanic.online" className="contact-item-val">
                    support@instantmechanic.online
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-inner">
            <span className="copyright-text">© 2024 Instant Mechanic. All rights reserved.</span>
            <div className="footer-legal-links">
              <a href="#privacy">Privacy</a>
              <a href="#terms">Terms</a>
              <a href="#refund">Refund</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
