import React, { useState, useEffect } from 'react';
import { 
  X, 
  Siren, 
  MapPin, 
  PhoneCall, 
  AlertCircle, 
  CheckCircle, 
  BatteryCharging, 
  Disc, 
  Flame, 
  Truck, 
  KeyRound,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function SOSModal() {
  const { isSOSModalOpen, closeSOSModal, navigateTo, setActiveBooking, showToast } = useApp();
  const [selectedIssue, setSelectedIssue] = useState('battery');
  const [phone, setPhone] = useState('');
  const [isDispatching, setIsDispatching] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(15 * 60);

  useEffect(() => {
    if (!isSOSModalOpen) return;
    const interval = setInterval(() => {
      setSecondsRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isSOSModalOpen]);

  if (!isSOSModalOpen) return null;

  const formatTimer = (totalSec) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleDispatch = (e) => {
    e.preventDefault();
    setIsDispatching(true);

    setTimeout(() => {
      setIsDispatching(false);
      closeSOSModal();
      setActiveBooking({
        bookingId: `IM-SOS-${Math.floor(10000 + Math.random() * 90000)}`,
        serviceName: `Emergency SOS: ${selectedIssue.toUpperCase()} ASSISTANCE`,
        carPlate: 'DL 04 AB 2432',
        carModel: 'Emergency Roadside Dispatch',
        status: 'Priority Van En Route (15 Min Guarantee)',
        progressPercent: 30,
        eta: '11 mins away',
        mechanic: {
          name: 'Vikram Singh (Master Technician)',
          rating: '4.98 ★',
          trips: '2,100+ roadside rescues',
          phone: '+91 98111 22334',
          vanNumber: 'DL 01 SOS 9911',
        },
        pickupLocation: 'Current GPS: Near Highway KM 42, Outer Ring Road',
        timeline: [
          { label: 'SOS Alert Triggered', time: 'Just now', completed: true },
          { label: 'Priority Dispatch Van Assigned', time: '1 min ago', completed: true, current: true },
          { label: 'Mechanic Arriving at Highway Location', time: 'ETA 11 min', completed: false },
          { label: 'Rapid Fix or Flatbed Towing', time: 'Pending', completed: false },
        ],
      });
      showToast('🚨 Emergency Mechanic Dispatched! 15-Minute Guarantee activated.', 'emergency');
      navigateTo('bookings');
    }, 1200);
  };

  return (
    <div className="modal-backdrop" onClick={closeSOSModal}>
      <div 
        className="sos-modal-card" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sos-title"
      >
        <div className="sos-modal-header">
          <div className="sos-modal-header__brand">
            <div className="sos-badge-icon">
              <Siren className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 id="sos-title" className="sos-title">Roadside Emergency SOS</h2>
              <p className="sos-subtitle">Rapid Response Unit • Guaranteed 15-Min Arrival</p>
            </div>
          </div>
          <button 
            className="sos-close-btn" 
            onClick={closeSOSModal}
            aria-label="Close Emergency Window"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live GPS Bar */}
        <div className="sos-location-bar">
          <MapPin className="w-4 h-4 text-orange-600 flex-shrink-0" />
          <div className="sos-location-text">
            <span className="sos-location-label">Detected Location:</span>
            <span className="sos-location-address">Near Outer Ring Road & Cyber City Hub, NCR</span>
          </div>
          <span className="sos-live-pill">LIVE GPS</span>
        </div>

        {/* Issue Selector */}
        <div className="sos-section">
          <label className="sos-section-label">Select Immediate Emergency:</label>
          <div className="sos-issue-grid">
            {[
              { id: 'battery', label: 'Dead Battery / Jump Start', icon: BatteryCharging },
              { id: 'puncture', label: 'Flat Tyre / Wheel Swap', icon: Disc },
              { id: 'overheating', label: 'Smoke / Overheating', icon: Flame },
              { id: 'towing', label: 'Car Won’t Start / Towing', icon: Truck },
              { id: 'lockout', label: 'Car Lockout / Key Stuck', icon: KeyRound },
            ].map((item) => {
              const IconComp = item.icon;
              const isSelected = selectedIssue === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`sos-issue-btn ${isSelected ? 'sos-issue-btn--active' : ''}`}
                  onClick={() => setSelectedIssue(item.id)}
                >
                  <IconComp className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dispatch Form */}
        <form onSubmit={handleDispatch} className="sos-form">
          <div className="form-group">
            <label htmlFor="sos-phone" className="form-label">
              Your Mobile Number (For Driver Live Call)
            </label>
            <div className="phone-input-wrap">
              <span className="phone-prefix">+91</span>
              <input
                id="sos-phone"
                type="tel"
                placeholder="98765-43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="form-input phone-input"
              />
            </div>
          </div>

          <div className="sos-guarantee-box">
            <ShieldAlert className="w-4 h-4 text-red-600 flex-shrink-0" />
            <p>
              Emergency van carries jump starters, hydraulic jacks, coolant, standard battery units, and towing gear.
            </p>
          </div>

          <button 
            type="submit" 
            className="sos-dispatch-btn"
            disabled={isDispatching}
          >
            {isDispatching ? (
              <span className="animate-pulse">Locating Closest Service Van...</span>
            ) : (
              <>
                <Siren className="w-5 h-5 text-white" />
                <span>Dispatch Nearest Mechanic Now (15 Min ETA)</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Direct Toll Free Link */}
        <div className="sos-call-footer">
          <span>Prefer to talk?</span>
          <a href="tel:1800890247" className="sos-direct-call">
            <PhoneCall className="w-4 h-4" />
            <span>Call 1800-890-247 (Toll Free 24/7)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
