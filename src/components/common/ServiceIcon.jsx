import React from 'react';
import {
  BatteryCharging,
  Disc,
  Cpu,
  Flame,
  Gauge,
  Sliders,
  Compass,
  Airplay,
  Zap,
  SunMedium,
  KeyRound,
  Truck,
  Wrench,
} from 'lucide-react';

export default function ServiceIcon({ type, className = '' }) {
  switch (type) {
    case 'battery':
      return (
        <div className={`service-icon-badge service-icon--orange ${className}`}>
          <BatteryCharging className="w-6 h-6" />
        </div>
      );
    case 'wheel':
      return (
        <div className={`service-icon-badge service-icon--blue ${className}`}>
          <Disc className="w-6 h-6" />
        </div>
      );
    case 'engine':
      return (
        <div className={`service-icon-badge service-icon--amber ${className}`}>
          <Cpu className="w-6 h-6" />
        </div>
      );
    case 'overheating':
      return (
        <div className={`service-icon-badge service-icon--red ${className}`}>
          <Flame className="w-6 h-6" />
        </div>
      );
    case 'brakes':
      return (
        <div className={`service-icon-badge service-icon--purple ${className}`}>
          <Gauge className="w-6 h-6" />
        </div>
      );
    case 'gear':
      return (
        <div className={`service-icon-badge service-icon--indigo ${className}`}>
          <Sliders className="w-6 h-6" />
        </div>
      );
    case 'steering':
      return (
        <div className={`service-icon-badge service-icon--cyan ${className}`}>
          <Compass className="w-6 h-6" />
        </div>
      );
    case 'ac':
      return (
        <div className={`service-icon-badge service-icon--teal ${className}`}>
          <Airplay className="w-6 h-6" />
        </div>
      );
    case 'electrical':
      return (
        <div className={`service-icon-badge service-icon--yellow ${className}`}>
          <Zap className="w-6 h-6" />
        </div>
      );
    case 'lights':
      return (
        <div className={`service-icon-badge service-icon--emerald ${className}`}>
          <SunMedium className="w-6 h-6" />
        </div>
      );
    case 'keys':
      return (
        <div className={`service-icon-badge service-icon--stone ${className}`}>
          <KeyRound className="w-6 h-6" />
        </div>
      );
    case 'roadside':
      return (
        <div className={`service-icon-badge service-icon--rose ${className}`}>
          <Truck className="w-6 h-6" />
        </div>
      );
    default:
      return (
        <div className={`service-icon-badge service-icon--orange ${className}`}>
          <Wrench className="w-6 h-6" />
        </div>
      );
  }
}
