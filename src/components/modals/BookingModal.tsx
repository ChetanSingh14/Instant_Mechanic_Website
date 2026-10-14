import React, { useState } from 'react';
import { 
  X, 
  Car, 
  MapPin, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  Phone, 
  CheckCircle2, 
  Wrench,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function BookingModal() {
  const { 
    bookingModalState, 
    closeBookingModal, 
    navigateTo, 
    setActiveBooking,
    carRegNumber,
    mobileNumber,
    showToast 
  } = useApp();

  const service = bookingModalState.service;

  const [regPlate, setRegPlate] = useState(carRegNumber || 'DL 04 AB 2432');
  const [phone, setPhone] = useState(mobileNumber || '9876543210');
  const [address, setAddress] = useState('Sector 29, Cyber Hub Road, Gurugram');
  const [bookingType, setBookingType] = useState('now'); // 'now' or 'schedule'
  const [loading, setLoading] = useState(false);

  if (!bookingModalState.isOpen) return null;

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      closeBookingModal();

      const newBooking = {
        bookingId: `IM-${Math.floor(10000 + Math.random() * 90000)}`,
        serviceName: service ? service.title : 'Comprehensive Car Inspection',
        carPlate: regPlate.toUpperCase(),
        carModel: 'Verified Vehicle',
        status: bookingType === 'now' ? 'Mechanic Assigned & En Route' : 'Scheduled for Tomorrow',
        progressPercent: 45,
        eta: bookingType === 'now' ? '14 mins away' : 'Tomorrow at 10:00 AM',
        mechanic: {
          name: 'Sunil Sharma',
          rating: '4.9 ★',
          trips: '980+ completed services',
          phone: '+91 98760 12345',
          vanNumber: 'DL 07 MK 4410',
        },
        pickupLocation: address,
        timeline: [
          { label: 'Booking Received', time: 'Just now', completed: true },
          { label: 'Mechanic Assigned', time: '1 min ago', completed: true, current: true },
          { label: 'Inspection & Repair', time: 'Pending', completed: false },
          { label: 'Job Completion & Warranty', time: 'Pending', completed: false },
        ],
      };

      setActiveBooking(newBooking);
      showToast('🎉 Booking Confirmed! Verified mechanic is assigned.', 'success');
      navigateTo('bookings');
    }, 1000);
  };

  return (
    <div className="modal-backdrop" onClick={closeBookingModal}>
      <div 
        className="booking-modal-card" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
      >
        <div className="booking-modal-header">
          <div>
            <h2 id="booking-title" className="booking-title">
              {service ? `Book ${service.title}` : 'Book Car Service'}
            </h2>
            <p className="booking-subtitle">
              Doorstep or roadside assistance • Verified mechanic with genuine spares
            </p>
          </div>
          <button 
            className="booking-close-btn" 
            onClick={closeBookingModal}
            aria-label="Close Booking Window"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {service && (
          <div className="booking-service-preview">
            <div className="preview-left">
              <span className="preview-label">Selected Service</span>
              <span className="preview-name">{service.title}</span>
              <span className="preview-time">{service.estTime} turnaround</span>
            </div>
            <div className="preview-right">
              <span className="preview-price">{service.price}</span>
              <span className="preview-tax">Inc. all taxes</span>
            </div>
          </div>
        )}

        <form onSubmit={handleConfirmBooking} className="booking-form">
          {/* Car Plate */}
          <div className="form-group">
            <label className="form-label" htmlFor="car-reg">Car Registration Number</label>
            <div className="input-with-icon">
              <Car className="input-icon" />
              <input
                id="car-reg"
                type="text"
                placeholder="eg. DL 12 AB 1234"
                value={regPlate}
                onChange={(e) => setRegPlate(e.target.value.toUpperCase())}
                required
                className="form-input text-uppercase font-semibold tracking-wider"
              />
            </div>
          </div>

          {/* Contact Number */}
          <div className="form-group">
            <label className="form-label" htmlFor="user-phone">Mobile Number</label>
            <div className="input-with-icon">
              <Phone className="input-icon" />
              <input
                id="user-phone"
                type="tel"
                placeholder="+91 98765-43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="form-input"
              />
            </div>
          </div>

          {/* Location */}
          <div className="form-group">
            <label className="form-label" htmlFor="service-location">Service Location / Address</label>
            <div className="input-with-icon">
              <MapPin className="input-icon" />
              <input
                id="service-location"
                type="text"
                placeholder="Street address or highway landmark"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="form-input"
              />
            </div>
          </div>

          {/* Booking Timing */}
          <div className="booking-timing-selector">
            <button
              type="button"
              className={`timing-pill ${bookingType === 'now' ? 'timing-pill--active' : ''}`}
              onClick={() => setBookingType('now')}
            >
              <Clock className="w-4 h-4" />
              <span>Right Now (15-20 Min Arrival)</span>
            </button>
            <button
              type="button"
              className={`timing-pill ${bookingType === 'schedule' ? 'timing-pill--active' : ''}`}
              onClick={() => setBookingType('schedule')}
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule for Later</span>
            </button>
          </div>

          <div className="booking-benefits-row">
            <div className="benefit-item">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Zero cancellation fee</span>
            </div>
            <div className="benefit-item">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Pay after service completion</span>
            </div>
          </div>

          <button 
            type="submit" 
            className="booking-submit-btn"
            disabled={loading}
          >
            {loading ? (
              <span className="animate-pulse">Confirming Booking...</span>
            ) : (
              <>
                <span>Confirm Booking & Assign Mechanic</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
