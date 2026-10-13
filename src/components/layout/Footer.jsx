import React from 'react';
import { ShieldCheck, PhoneCall, Mail, MapPin, Award, CheckCircle } from 'lucide-react';
import BrandLogo from '../common/BrandLogo';
import { useApp } from '../../context/AppContext';

export default function Footer() {
  const { navigateTo, openSOSModal } = useApp();

  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        {/* Brand & Guarantee Column */}
        <div className="footer-col footer-col--brand">
          <BrandLogo onClick={() => navigateTo('home')} variant="dark" />
          <p className="footer-tagline">
            India's most trusted on-demand doorstep & roadside car repair service. Certified mechanics reach you in 15 minutes.
          </p>
          <div className="footer-badges">
            <div className="footer-badge">
              <ShieldCheck className="w-4 h-4 text-orange-500" />
              <span>100% Genuine Spares</span>
            </div>
            <div className="footer-badge">
              <Award className="w-4 h-4 text-emerald-500" />
              <span>6-Month Warranty</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4 className="footer-title">Services</h4>
          <ul className="footer-links">
            <li><button onClick={() => navigateTo('repairs')}>Battery Jump Start</button></li>
            <li><button onClick={() => navigateTo('repairs')}>Flat Tyre & Puncture</button></li>
            <li><button onClick={() => navigateTo('repairs')}>Engine Diagnostics</button></li>
            <li><button onClick={() => navigateTo('repairs')}>Brake Pad Replacement</button></li>
            <li><button onClick={() => navigateTo('repairs')}>AC Gas Recharge</button></li>
            <li><button onClick={() => navigateTo('annual')}>Annual Comprehensive Service</button></li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="footer-col">
          <h4 className="footer-title">Navigation</h4>
          <ul className="footer-links">
            <li><button onClick={() => navigateTo('home')}>Home Overview</button></li>
            <li><button onClick={() => navigateTo('repairs')}>All 12 Repair Services</button></li>
            <li><button onClick={() => navigateTo('annual')}>Annual Maintenance Packages</button></li>
            <li><button onClick={() => navigateTo('membership')}>All-in-One Membership</button></li>
            <li><button onClick={() => navigateTo('bookings')}>Track Live Mechanic</button></li>
            <li><button onClick={openSOSModal} className="text-red-600 font-semibold">15-Min Roadside SOS</button></li>
          </ul>
        </div>

        {/* Contact & Emergency Support */}
        <div className="footer-col">
          <h4 className="footer-title">24/7 Roadside Assistance</h4>
          <p className="footer-contact-desc">
            Broken down on the highway or stuck at home? Our emergency response team is available round the clock.
          </p>
          <div className="footer-hotline-card">
            <PhoneCall className="w-5 h-5 text-orange-500" />
            <div>
              <span className="hotline-title">Emergency Helpline</span>
              <a href="tel:1800890247" className="hotline-number">1800-890-247</a>
            </div>
          </div>
          <div className="footer-cities">
            <MapPin className="w-3.5 h-3.5 text-zinc-400" />
            <span>Serving Delhi NCR, Mumbai, Bengaluru, Hyderabad & Pune</span>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="footer-bottom-container">
          <p>© {new Date().getFullYear()} Instant Mechanic Technologies Pvt Ltd. All rights reserved.</p>
          <div className="footer-legal-links">
            <a href="#terms">Terms of Service</a>
            <span>•</span>
            <a href="#privacy">Privacy Policy</a>
            <span>•</span>
            <a href="#pricing">Transparent Pricing Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
