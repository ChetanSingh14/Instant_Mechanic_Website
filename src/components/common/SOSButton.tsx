import React from 'react';
import { Siren } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function SOSButton() {
  const { openSOSModal } = useApp();

  return (
    <button
      className="sos-floating-btn"
      onClick={openSOSModal}
      aria-label="Emergency Roadside SOS"
      title="Tap for 15-Min Emergency Mechanic SOS"
    >
      <div className="sos-pulse-ring" />
      <div className="sos-pulse-ring sos-pulse-ring--delay" />
      <div className="sos-btn-content">
        <Siren className="sos-siren-icon" />
        <span className="sos-btn-text">SOS</span>
      </div>
    </button>
  );
}
