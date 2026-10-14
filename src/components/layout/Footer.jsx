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
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="footer-social-icon-btn footer-social--li"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/919266961110" 
                target="_blank" 
                rel="noreferrer" 
                className="footer-social-icon-btn footer-social--wa"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-white" />
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
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div className="contact-item-text">
                  <span className="contact-item-label">Address</span>
                  <span className="contact-item-val">Sector 75, Gurugram, Haryana</span>
                </div>
              </div>

              <div className="contact-item-row">
                <div className="contact-icon-box">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div className="contact-item-text">
                  <span className="contact-item-label">Phone / WhatsApp</span>
                  <a href="tel:+919266961110" className="contact-item-val">+91 9266961110</a>
                </div>
              </div>

              <div className="contact-item-row">
                <div className="contact-icon-box">
                  <Mail className="w-4 h-4 text-white" />
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
