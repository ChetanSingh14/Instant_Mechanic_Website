import React from 'react';
import { 
  Car, 
  MapPin, 
  PhoneCall, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Navigation,
  Star,
  RefreshCw,
  Phone
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function BookingsPage() {
  const { activeBooking, setActiveBooking, navigateTo, showToast } = useApp();

  if (!activeBooking) {
    return (
      <div className="page-wrapper bookings-page">
        <div className="bookings-empty-state">
          <Car className="w-16 h-16 text-zinc-300 mb-4" />
          <h2>No Active Bookings Right Now</h2>
          <p>Book doorstep car repairs or roadside emergency assistance to track your live mechanic.</p>
          <button 
            className="btn-primary mt-6"
            onClick={() => navigateTo('repairs')}
          >
            Explore 12 Repair Services
          </button>
        </div>
      </div>
    );
  }

  const handleSimulateCall = () => {
    showToast(`Calling Mechanic ${activeBooking.mechanic.name} (${activeBooking.mechanic.phone})...`, 'info');
  };

  return (
    <div className="page-wrapper bookings-page">
      <div className="bookings-container">
        {/* Status Header */}
        <div className="booking-status-header">
          <div className="status-live-badge">
            <span className="live-radar-dot" />
            <span>LIVE TRACKING</span>
          </div>
          <h1 className="booking-status-title">{activeBooking.status}</h1>
          <p className="booking-status-sub">
            Booking ID: <span className="font-mono font-bold text-zinc-800">{activeBooking.bookingId}</span> • Vehicle: <span className="font-bold text-orange-600">{activeBooking.carPlate}</span>
          </p>
        </div>

        {/* Live Map / Progress Simulator Card */}
        <div className="booking-tracker-card">
          <div className="tracker-map-simulation">
            <div className="tracker-route-line" />
            
            {/* User Location Pin */}
            <div className="tracker-pin tracker-pin--user">
              <MapPin className="w-5 h-5 text-zinc-900" />
              <span className="tracker-pin-label">Your Location</span>
            </div>

            {/* Moving Mechanic Van Pin */}
            <div className="tracker-pin tracker-pin--van" style={{ left: `${activeBooking.progressPercent}%` }}>
              <div className="van-pulse-glow" />
              <div className="van-pin-box">
                <Car className="w-5 h-5 text-white" />
              </div>
              <span className="tracker-pin-label text-orange-600 font-bold">{activeBooking.eta}</span>
            </div>
          </div>

          <div className="tracker-info-bar">
            <div className="tracker-stat">
              <span className="stat-label">Estimated Arrival</span>
              <span className="stat-val text-orange-600 font-bold">{activeBooking.eta}</span>
            </div>
            <div className="tracker-stat">
              <span className="stat-label">Destination</span>
              <span className="stat-val">{activeBooking.pickupLocation}</span>
            </div>
            <div className="tracker-stat">
              <span className="stat-label">Service</span>
              <span className="stat-val">{activeBooking.serviceName}</span>
            </div>
          </div>
        </div>

        {/* Assigned Mechanic Profile Card */}
        <div className="assigned-mechanic-card">
          <div className="mechanic-card-left">
            <div className="mechanic-avatar">
              <span>{activeBooking.mechanic.name.charAt(0)}</span>
            </div>
            <div className="mechanic-details">
              <div className="mechanic-name-row">
                <h3>{activeBooking.mechanic.name}</h3>
                <span className="mechanic-rating-badge">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  {activeBooking.mechanic.rating}
                </span>
              </div>
              <p className="mechanic-stats">
                {activeBooking.mechanic.trips} • Mobile Van: {activeBooking.mechanic.vanNumber}
              </p>
              <div className="mechanic-verified-tag">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Background Verified & Tooling Certified</span>
              </div>
            </div>
          </div>

          <div className="mechanic-card-right">
            <button 
              className="mechanic-call-btn"
              onClick={handleSimulateCall}
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Mechanic</span>
            </button>
          </div>
        </div>

        {/* Milestone Timeline */}
        <div className="booking-timeline-card">
          <h3 className="timeline-title">Service Timeline</h3>
          <div className="timeline-list">
            {activeBooking.timeline.map((step, idx) => (
              <div 
                key={idx} 
                className={`timeline-step ${step.completed ? 'timeline-step--completed' : ''} ${step.current ? 'timeline-step--current' : ''}`}
              >
                <div className="step-marker">
                  {step.completed ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <div className="step-dot" />
                  )}
                </div>
                <div className="step-content">
                  <span className="step-label">{step.label}</span>
                  <span className="step-time">{step.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="booking-actions-row">
          <button 
            className="btn-outline"
            onClick={() => {
              showToast('Mechanic location refreshed', 'info');
            }}
          >
            <RefreshCw className="w-4 h-4" />
            <span>Refresh Live Status</span>
          </button>

          <button 
            className="btn-secondary text-red-600 border-red-200"
            onClick={() => {
              if (window.confirm('Are you sure you want to cancel this booking?')) {
                setActiveBooking(null);
                showToast('Booking cancelled.', 'info');
              }
            }}
          >
            Cancel Booking
          </button>
        </div>
      </div>
    </div>
  );
}
