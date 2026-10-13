import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { ACTIVE_BOOKING_MOCK } from '../data/mockData';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  // Sync route with URL hash for clean SPA navigation with browser history
  const getInitialTab = () => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'repairs', 'annual', 'membership', 'bookings'].includes(hash)) {
        return hash;
      }
    }
    return 'home';
  };

  const [activeTab, setActiveTabState] = useState(getInitialTab);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSOSModalOpen, setIsSOSModalOpen] = useState(false);
  const [bookingModalState, setBookingModalState] = useState({
    isOpen: false,
    service: null,
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [carRegNumber, setCarRegNumber] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [activeBooking, setActiveBooking] = useState(ACTIVE_BOOKING_MOCK);
  const [toastMessage, setToastMessage] = useState(null);

  // Sync hash changes (e.g. browser back/forward buttons)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'repairs', 'annual', 'membership', 'bookings'].includes(hash)) {
        setActiveTabState(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = useCallback((tabId) => {
    setActiveTabState(tabId);
    if (typeof window !== 'undefined') {
      window.location.hash = tabId;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsSidebarOpen(false);
  }, []);

  const showToast = useCallback((msg, type = 'info') => {
    setToastMessage({ msg, type });
    setTimeout(() => {
      setToastMessage((current) => (current?.msg === msg ? null : current));
    }, 3500);
  }, []);

  const openBookingModal = useCallback((service = null) => {
    setBookingModalState({ isOpen: true, service });
  }, []);

  const closeBookingModal = useCallback(() => {
    setBookingModalState({ isOpen: false, service: null });
  }, []);

  const openSOSModal = useCallback(() => {
    setIsSOSModalOpen(true);
  }, []);

  const closeSOSModal = useCallback(() => {
    setIsSOSModalOpen(false);
  }, []);

  const toggleSidebar = useCallback((val) => {
    setIsSidebarOpen((prev) => (typeof val === 'boolean' ? val : !prev));
  }, []);

  // Memoize context value to guarantee components only re-render when needed
  const contextValue = useMemo(() => ({
    activeTab,
    navigateTo,
    isSidebarOpen,
    toggleSidebar,
    isSOSModalOpen,
    openSOSModal,
    closeSOSModal,
    bookingModalState,
    openBookingModal,
    closeBookingModal,
    searchQuery,
    setSearchQuery,
    carRegNumber,
    setCarRegNumber,
    mobileNumber,
    setMobileNumber,
    activeBooking,
    setActiveBooking,
    toastMessage,
    showToast,
  }), [
    activeTab,
    navigateTo,
    isSidebarOpen,
    toggleSidebar,
    isSOSModalOpen,
    openSOSModal,
    closeSOSModal,
    bookingModalState,
    openBookingModal,
    closeBookingModal,
    searchQuery,
    carRegNumber,
    mobileNumber,
    activeBooking,
    toastMessage,
    showToast,
  ]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
