import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Mic, 
  ArrowLeft, 
  X, 
  SlidersHorizontal, 
  Sparkles,
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SERVICE_CATEGORIES } from '../data/mockData';
import ServiceCard from '../components/common/ServiceCard';

const FILTER_TABS = ['All', 'Urgent', 'Roadside', 'Mechanical', 'Safety', 'Comfort', 'Diagnostics'];

export default function RepairServicesPage() {
  const { searchQuery, setSearchQuery, showToast, openBookingModal } = useApp();
  const [activeCategory, setActiveCategory] = useState('All');
  const [isVoiceListening, setIsVoiceListening] = useState(false);

  // Filtered services based on search query and category tab
  const filteredServices = useMemo(() => {
    return SERVICE_CATEGORIES.filter((svc) => {
      const matchesCategory = activeCategory === 'All' || svc.category === activeCategory;
      const matchesSearch = !searchQuery.trim() || 
        svc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        svc.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleVoiceSearch = () => {
    setIsVoiceListening(true);
    showToast('🎤 Listening... Try saying "battery jump start" or "flat tyre"', 'info');
    setTimeout(() => {
      setIsVoiceListening(false);
      setSearchQuery('battery');
      showToast('Detected voice query: "battery"', 'success');
    }, 2000);
  };

  return (
    <div className="page-wrapper repair-services-page">
      <div className="repairs-container">
        {/* Header from Figma Image 2 */}
        <div className="repairs-hero-header">
          <h1 className="repairs-heading">
            <span className="text-orange-600">Car Repair,</span> Made Simple.
          </h1>
          <p className="repairs-subheading">
            Whether it's a sudden breakdown or a routine repair, find the right service for your car and get back on the road with confidence.
          </p>
        </div>

        {/* Interactive Search Bar from Figma Image 2 */}
        <div className="repairs-search-wrapper">
          <div className="repairs-search-box">
            {searchQuery ? (
              <button 
                className="search-leading-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear Search"
              >
                <ArrowLeft className="w-5 h-5 text-zinc-500" />
              </button>
            ) : (
              <div className="search-leading-icon">
                <Search className="w-5 h-5 text-zinc-400" />
              </div>
            )}

            <input
              type="text"
              className="repairs-search-input"
              placeholder="What's wrong with your car? Try 'car won't start'..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search car issues and services"
            />

            {searchQuery && (
              <button 
                className="search-clear-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search input"
              >
                <X className="w-4 h-4 text-zinc-400" />
              </button>
            )}

            <button 
              className={`search-mic-btn ${isVoiceListening ? 'search-mic-btn--listening' : ''}`}
              onClick={handleVoiceSearch}
              title="Voice Search"
              aria-label="Activate voice search"
            >
              <Mic className="w-5 h-5 text-zinc-600" />
            </button>
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="category-filter-strip">
          <div className="category-pills">
            {FILTER_TABS.map((tab) => {
              const isSelected = activeCategory === tab;
              return (
                <button
                  key={tab}
                  className={`category-pill ${isSelected ? 'category-pill--active' : ''}`}
                  onClick={() => setActiveCategory(tab)}
                >
                  {tab === 'All' ? 'All (12 Services)' : tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid Title from Figma Image 2 */}
        <div className="services-grid-top">
          <h2 className="services-grid-title">Choose the service your car needs</h2>
          <span className="services-count-tag">{filteredServices.length} options available</span>
        </div>

        {/* 12 Service Cards Grid */}
        {filteredServices.length > 0 ? (
          <div className="services-grid">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="empty-search-state">
            <HelpCircle className="w-12 h-12 text-zinc-300 mb-3" />
            <h3 className="empty-search-title">No exact matching service found</h3>
            <p className="empty-search-desc">
              Not sure what the problem is? Our certified mechanic can perform a comprehensive doorstep diagnostic.
            </p>
            <div className="empty-search-actions">
              <button 
                className="btn-outline"
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              >
                Clear Search
              </button>
              <button 
                className="btn-primary"
                onClick={() => openBookingModal(SERVICE_CATEGORIES[2])}
              >
                Book General Diagnostic (₹499)
              </button>
            </div>
          </div>
        )}

        {/* Assistance Help Strip */}
        <div className="expert-help-strip">
          <div className="expert-help-text">
            <h4>Can’t identify the car issue?</h4>
            <p>Talk to our automotive advisor directly. We'll diagnose the symptom over call and dispatch the right technician.</p>
          </div>
          <a href="tel:1800890247" className="expert-call-btn">
            Call Advisor Toll Free
          </a>
        </div>
      </div>
    </div>
  );
}
