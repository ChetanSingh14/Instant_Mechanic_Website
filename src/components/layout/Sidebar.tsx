import React, { useEffect } from 'react';
import { X, ChevronRight } from 'lucide-react';
import BrandLogo from '../common/BrandLogo';
import { useApp } from '../../context/AppContext';

export default function Sidebar() {
  const { 
    isSidebarOpen, 
    toggleSidebar, 
    navigateTo, 
    openBookingModal,
    showToast 
  } = useApp();

  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSidebarOpen) {
        toggleSidebar(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSidebarOpen, toggleSidebar]);

  if (!isSidebarOpen) return null;

  const handleNavClick = (target: string) => {
    toggleSidebar(false);
    if (target === 'membership') {
      navigateTo('membership');
    } else if (target === 'carbuddy') {
      navigateTo('home');
      setTimeout(() => {
        const el = document.querySelector('.carbuddy-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else if (target === 'services' || target === 'repair' || target === 'about') {
      showToast('This service will be available in the upcoming update!', 'info');
    }
  };

  const handlePolicyClick = (policyName: string) => {
    toggleSidebar(false);
    showToast(`${policyName} details displayed.`, 'info');
  };

  return (
    <div className="sidebar-overlay" onClick={() => toggleSidebar(false)}>
      <aside 
        className="mobile-drawer" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Navigation Menu"
      >
        {/* Drawer Header: Logo on left, X on right */}
        <div className="mobile-drawer__header">
          <BrandLogo onClick={() => { navigateTo('home'); toggleSidebar(false); }} />
          <button 
            className="mobile-drawer__close-btn"
            onClick={() => toggleSidebar(false)}
            aria-label="Close Menu"
          >
            <X className="w-5 h-5 text-zinc-700" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="mobile-drawer__body">
          {/* Main Links */}
          <ul className="mobile-drawer__nav-list">
            <li className="mobile-drawer__nav-item">
              <button 
                className="mobile-drawer__nav-link"
                onClick={() => handleNavClick('membership')}
              >
                <span className="mobile-drawer__nav-label">Membership</span>
                <ChevronRight className="w-4 h-4 text-zinc-400" />
              </button>
            </li>

            <li className="mobile-drawer__nav-item">
              <button 
                className="mobile-drawer__nav-link"
                onClick={() => handleNavClick('services')}
              >
                <span className="mobile-drawer__nav-label">Car Services</span>
                <span className="mobile-drawer__ribbon-badge">Coming soon</span>
              </button>
            </li>

            <li className="mobile-drawer__nav-item">
              <button 
                className="mobile-drawer__nav-link"
                onClick={() => handleNavClick('repair')}
              >
                <span className="mobile-drawer__nav-label">Car Repair</span>
                <span className="mobile-drawer__ribbon-badge">Coming soon</span>
              </button>
            </li>

            <li className="mobile-drawer__nav-item">
              <button 
                className="mobile-drawer__nav-link"
                onClick={() => handleNavClick('about')}
              >
                <span className="mobile-drawer__nav-label">About Us</span>
                <span className="mobile-drawer__ribbon-badge">Coming soon</span>
              </button>
            </li>

            <li className="mobile-drawer__nav-item">
              <button 
                className="mobile-drawer__nav-link"
                onClick={() => handleNavClick('carbuddy')}
              >
                <span className="mobile-drawer__nav-label">AI Diagnosis - Car Buddy</span>
                <ChevronRight className="w-4 h-4 text-zinc-400" />
              </button>
            </li>
          </ul>

          <div className="mobile-drawer__divider" />

          {/* Policies Section */}
          <div className="mobile-drawer__section">
            <h4 className="mobile-drawer__section-title">Policies</h4>
            <ul className="mobile-drawer__policy-list">
              <li>
                <button 
                  className="mobile-drawer__policy-link"
                  onClick={() => handlePolicyClick('Terms & Conditions')}
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button 
                  className="mobile-drawer__policy-link"
                  onClick={() => handlePolicyClick('Privacy Policy')}
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  className="mobile-drawer__policy-link"
                  onClick={() => handlePolicyClick('Cancellation Policy')}
                >
                  Cancellation
                </button>
              </li>
              <li>
                <button 
                  className="mobile-drawer__policy-link"
                  onClick={() => handlePolicyClick('Refund Policy')}
                >
                  Refund Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Drawer Bottom Action Buttons */}
        <div className="mobile-drawer__footer">
          <button 
            className="mobile-drawer__btn-primary"
            onClick={() => {
              toggleSidebar(false);
              openBookingModal({
                title: 'Instant Roadside Mechanic',
                price: '₹299',
                desc: 'Verified mechanic dispatched to your location within 15 minutes.'
              });
            }}
          >
            Book a Mechanic Now
          </button>

          <button 
            className="mobile-drawer__btn-secondary"
            onClick={() => {
              toggleSidebar(false);
              openBookingModal({
                title: 'Comprehensive Car Service',
                price: '₹2,499',
                desc: 'Scheduled periodic inspection, engine oil replacement, and 30-point car check.'
              });
            }}
          >
            Book a Car Service
          </button>
        </div>
      </aside>
    </div>
  );
}
