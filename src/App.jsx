import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import BottomNav from './components/layout/BottomNav';
import Footer from './components/layout/Footer';
import SOSButton from './components/common/SOSButton';
import SOSModal from './components/modals/SOSModal';
import BookingModal from './components/modals/BookingModal';

import HomePage from './pages/HomePage';
import RepairServicesPage from './pages/RepairServicesPage';
import AnnualServicePage from './pages/AnnualServicePage';
import MembershipPage from './pages/MembershipPage';
import BookingsPage from './pages/BookingsPage';

function AppContent() {
  const { activeTab, toastMessage } = useApp();

  const renderActivePage = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'repairs':
        return <RepairServicesPage />;
      case 'annual':
        return <AnnualServicePage />;
      case 'membership':
        return <MembershipPage />;
      case 'bookings':
        return <BookingsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app-container">
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className={`toast-banner ${toastMessage.type === 'emergency' ? 'toast-banner--emergency' : toastMessage.type === 'success' ? 'toast-banner--success' : ''}`}>
          <span>{toastMessage.msg}</span>
        </div>
      )}

      {/* Top Header / Navbar */}
      <Navbar />

      {/* Slide-over Drawer / Sidebar */}
      <Sidebar />

      {/* Dynamic Page Container */}
      <main className="main-content" id="main-content">
        {renderActivePage()}
      </main>

      {/* Floating Emergency SOS Radar Button */}
      <SOSButton />

      {/* Mobile-first App Bottom Navigation */}
      <BottomNav />

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <SOSModal />
      <BookingModal />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
