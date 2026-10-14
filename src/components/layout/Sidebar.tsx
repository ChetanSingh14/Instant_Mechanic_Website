import React, { useEffect } from 'react';
import { 
  X, 
  Home, 
  Wrench, 
  CalendarCheck, 
  CreditCard, 
  ClipboardList, 
  AlertTriangle, 
  Navigation, 
  PhoneCall, 
  ShieldCheck, 
  Car,
  ChevronRight,
  Headphones,
  Award
} from 'lucide-react';
import BrandLogo from '../common/BrandLogo';
import { useApp } from '../../context/AppContext';
import { NAV_ITEMS, SIDEBAR_EXTRA_ITEMS } from '../../data/mockData';

const ICON_MAP = {
  Home,
  Wrench,
  CalendarCheck,
  CreditCard,
  ClipboardList,
  AlertTriangle,
  Navigation,
  PhoneCall,
  ShieldCheck,
};

export default function Sidebar() {
  const { 
    isSidebarOpen, 
    toggleSidebar, 
    activeTab, 
    navigateTo, 
    openSOSModal,
    activeBooking 
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

  const handleItemClick = (id: string) => {
    if (id === 'sos') {
      toggleSidebar(false);
      openSOSModal();
    } else if (id === 'track') {
      navigateTo('bookings');
    } else {
      navigateTo(id);
    }
  };

  return (
    <div className="sidebar-overlay" onClick={() => toggleSidebar(false)}>
      <aside 
        className="sidebar-drawer" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Navigation Menu"
      >
        {/* Drawer Header */}
        <div className="sidebar-header">
          <BrandLogo onClick={() => { navigateTo('home'); toggleSidebar(false); }} />
          <button 
            className="sidebar-close-btn"
            onClick={() => toggleSidebar(false)}
            aria-label="Close Menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Active Booking Banner if available */}
        {activeBooking && (
          <div 
            className="sidebar-live-chip"
            onClick={() => { navigateTo('bookings'); toggleSidebar(false); }}
            role="button"
            tabIndex={0}
          >
            <div className="sidebar-live-chip__pulse" />
            <div className="sidebar-live-chip__info">
              <span className="sidebar-live-chip__title">Live: {activeBooking.status}</span>
              <span className="sidebar-live-chip__sub">{activeBooking.carModel} • {activeBooking.eta}</span>
            </div>
            <ChevronRight className="w-4 h-4 text-orange-500" />
          </div>
        )}

        {/* Primary Navigation Sections */}
        <div className="sidebar-content">
          <div className="sidebar-group">
            <span className="sidebar-group-title">MAIN MENU</span>
            <ul className="sidebar-nav-list">
              {NAV_ITEMS.map((item) => {
                const IconComponent = ICON_MAP[item.icon] || Wrench;
                const isActive = activeTab === item.id;
                return (
                  <li key={item.id}>
                    <button
                      className={`sidebar-nav-btn ${isActive ? 'sidebar-nav-btn--active' : ''}`}
                      onClick={() => handleItemClick(item.id)}
                    >
                      <div className="sidebar-nav-btn__left">
                        <IconComponent className="w-5 h-5 sidebar-icon" />
                        <span>{item.label}</span>
                      </div>
                      <div className="sidebar-nav-btn__right">
                        {item.badge && (
                          <span className={`sidebar-badge ${item.badge.includes('Active') ? 'sidebar-badge--active' : ''}`}>
                            {item.badge}
                          </span>
                        )}
                        <ChevronRight className="w-4 h-4 sidebar-arrow" />
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="sidebar-divider" />

          {/* Quick Support & Emergency */}
          <div className="sidebar-group">
            <span className="sidebar-group-title">EMERGENCY & QUICK LINKS</span>
            <ul className="sidebar-nav-list">
              {SIDEBAR_EXTRA_ITEMS.map((item) => {
                const IconComponent = ICON_MAP[item.icon] || AlertTriangle;
                return (
                  <li key={item.id}>
                    <button
                      className={`sidebar-nav-btn ${item.alert ? 'sidebar-nav-btn--alert' : ''}`}
                      onClick={() => handleItemClick(item.id)}
                    >
                      <div className="sidebar-nav-btn__left">
                        <IconComponent className="w-5 h-5 sidebar-icon" />
                        <span>{item.label}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 sidebar-arrow" />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* 24/7 Helpline Card */}
          <div className="sidebar-support-card">
            <div className="support-card-icon">
              <Headphones className="w-5 h-5 text-orange-600" />
            </div>
            <div className="support-card-text">
              <span className="support-card-label">Roadside Emergency 24/7</span>
              <a href="tel:1800890247" className="support-card-phone">1800-890-247 (Toll Free)</a>
            </div>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="sidebar-footer">
          <div className="sidebar-footer-guarantee">
            <Award className="w-4 h-4 text-emerald-600" />
            <span>100% Genuine Spares & Warranty</span>
          </div>
          <span className="sidebar-version">v2.4.0 • Instant Mechanic</span>
        </div>
      </aside>
    </div>
  );
}
