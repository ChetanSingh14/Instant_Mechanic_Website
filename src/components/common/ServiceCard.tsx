import React from 'react';
import { ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import ServiceIcon from './ServiceIcon';
import { useApp } from '../../context/AppContext';

export interface ServiceItem {
  id: string;
  title: string;
  category?: string;
  desc: string;
  price: string;
  estTime?: string;
  iconType: string;
  popular?: boolean;
}

export interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { openBookingModal } = useApp();

  return (
    <div 
      className="service-card"
      onClick={() => openBookingModal(service)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openBookingModal(service);
        }
      }}
    >
      {service.popular && (
        <span className="service-card__badge">Fast 15m Dispatch</span>
      )}

      <div className="service-card__icon-wrapper">
        <ServiceIcon type={service.iconType} />
      </div>

      <div className="service-card__body">
        <h3 className="service-card__title">{service.title}</h3>
        <p className="service-card__desc">{service.desc}</p>
      </div>

      <div className="service-card__footer">
        <div className="service-card__meta">
          <span className="service-card__price">From {service.price}</span>
          <span className="service-card__time">
            <Clock className="w-3 h-3 text-zinc-400" />
            {service.estTime}
          </span>
        </div>
        <button 
          className="service-card__action-btn"
          aria-label={`Book ${service.title}`}
          onClick={(e) => {
            e.stopPropagation();
            openBookingModal(service);
          }}
        >
          <span>Book</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
