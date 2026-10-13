import React from 'react';
import { Home, Wrench, CalendarCheck, CreditCard, Siren, ClipboardList } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function BottomNav() {
  const { activeTab, navigateTo, openSOSModal, activeBooking } = useApp();

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile Navigation">
      <div className="bottom-nav-container">
        {/* Home */}
        <button
          className={`bottom-nav-item ${activeTab === 'home' ? 'bottom-nav-item--active' : ''}`}
          onClick={() => navigateTo('home')}
        >
          <Home className="bottom-nav-icon" />
          <span className="bottom-nav-label">Home</span>
        </button>

        {/* Repairs */}
        <button
          className={`bottom-nav-item ${activeTab === 'repairs' ? 'bottom-nav-item--active' : ''}`}
          onClick={() => navigateTo('repairs')}
        >
          <Wrench className="bottom-nav-icon" />
          <span className="bottom-nav-label">Repairs</span>
        </button>

        {/* Center Highlighted SOS Button */}
        <div className="bottom-nav-sos-wrapper">
          <button
            className="bottom-nav-sos-btn"
            onClick={openSOSModal}
            aria-label="Instant Roadside SOS"
            title="15-Minute SOS Dispatch"
          >
            <Siren className="w-5 h-5 text-white" />
            <span className="bottom-nav-sos-label">SOS</span>
          </button>
        </div>

        {/* Annual Service */}
        <button
          className={`bottom-nav-item ${activeTab === 'annual' ? 'bottom-nav-item--active' : ''}`}
          onClick={() => navigateTo('annual')}
        >
          <CalendarCheck className="bottom-nav-icon" />
          <span className="bottom-nav-label">Annual</span>
        </button>

        {/* Membership or Active Bookings */}
        <button
          className={`bottom-nav-item ${activeTab === 'membership' || activeTab === 'bookings' ? 'bottom-nav-item--active' : ''}`}
          onClick={() => navigateTo(activeBooking ? 'bookings' : 'membership')}
        >
          {activeBooking ? (
            <div className="relative">
              <ClipboardList className="bottom-nav-icon" />
              <span className="bottom-nav-dot" />
            </div>
          ) : (
            <CreditCard className="bottom-nav-icon" />
          )}
          <span className="bottom-nav-label">{activeBooking ? 'Track' : 'Club'}</span>
        </button>
      </div>
    </nav>
  );
}
