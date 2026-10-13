import React from 'react';
import { Menu, X } from 'lucide-react';
import BrandLogo from '../common/BrandLogo';
import { useApp } from '../../context/AppContext';

export default function Navbar() {
  const { activeTab, navigateTo, isSidebarOpen, toggleSidebar, openBookingModal } = useApp();

  const navLinks = [
    { id: 'membership', label: 'Membership' },
    { id: 'services', label: 'Services', target: 'repairs' },
    { id: 'repairs', label: 'Car Repair', target: 'repairs' },
    { id: 'about', label: 'About Us', target: 'about' },
  ];

  const handleLinkClick = (link) => {
    if (link.target === 'about') {
      if (activeTab !== 'home') {
        navigateTo('home');
        setTimeout(() => {
          const el = document.querySelector('.home-why-us');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.querySelector('.home-why-us');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (link.target) {
      navigateTo(link.target);
    } else {
      navigateTo(link.id);
    }
  };

  return (
    <header className="site-header">
      <div className="site-header__container">
        {/* Left: Brand Logo */}
        <div className="site-header__brand">
          <BrandLogo onClick={() => navigateTo('home')} />
        </div>

        {/* Middle: Desktop Nav Items */}
        <nav className="site-header__nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id || (link.target === activeTab && activeTab !== 'home');
              return (
                <li key={link.id} className="nav-item">
                  <button
                    className={`nav-link ${isActive ? 'nav-link--active' : ''}`}
                    onClick={() => handleLinkClick(link)}
                  >
                    <span>{link.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right: Actions */}
        <div className="site-header__actions">
          <a 
            href="tel:1800890247" 
            className="nav-btn-call"
            title="Call Support 24/7"
          >
            Call Now
          </a>

          <button 
            className="nav-btn-book"
            onClick={() => openBookingModal()}
            title="Book a Mechanic Now"
          >
            Book Now
          </button>

          <button
            className="hamburger-btn"
            onClick={() => toggleSidebar()}
            aria-label={isSidebarOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={isSidebarOpen}
          >
            {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </header>
  );
}

