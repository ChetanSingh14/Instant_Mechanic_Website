import React from 'react';
import photo1 from '../../assets/testimonial/Rectangle 7.png';
import photo2 from '../../assets/testimonial/Rectangle 8.png';
import photo3 from '../../assets/testimonial/Rectangle 9.png';
import photo4 from '../../assets/testimonial/Rectangle 10.png';
import avatar1 from '../../assets/testimonial/Ellipse 41.png';
import avatar2 from '../../assets/testimonial/Ellipse 42.png';
import avatar3 from '../../assets/testimonial/Ellipse 43.png';

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      image: photo1,
      name: 'Aisha Khan',
      initial: 'A',
      initialBg: '#B91C1C',
      rating: 5,
      review: '“Got help fast when my tyre went flat. Super smooth experience.”'
    },
    {
      id: 2,
      image: photo2,
      name: 'Rahul Mehta',
      initial: 'R',
      initialBg: '#9333EA',
      rating: 5,
      review: '“My car stopped, the mechanic reached quickly. Great service.”'
    },
    {
      id: 3,
      image: photo3,
      name: 'Neha Sharma',
      initial: 'N',
      initialBg: '#15803D',
      rating: 5,
      review: '“Stranded on the road and got help without any hassle.”'
    },
    {
      id: 4,
      image: photo4,
      name: 'Arjun Verma',
      initial: 'A',
      initialBg: '#0D9488',
      rating: 5,
      review: '“Quick & professional mechanic, issue was fixed on the spot.”'
    }
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        {/* Header */}
        <div className="testimonials-header text-center">
          <h2 className="testimonials-title">
            <span className="text-orange">Real Customers.</span> Real Peace of Mind.
          </h2>
          <p className="testimonials-subtitle">
            See why car owners trust Instant Mechanic to get them back on the road.
          </p>
        </div>

        {/* 4 Testimonial Cards: Grid on Desktop, Horizontal Swipeable on Mobile */}
        <div className="testimonials-cards-wrapper">
          {testimonials.map((item) => (
            <div key={item.id} className="testimonial-card">
              {/* Photo */}
              <div className="testimonial-card__image-box">
                <img src={item.image} alt={item.name} className="testimonial-card__img" />
              </div>

              {/* Card Body */}
              <div className="testimonial-card__body">
                {/* Author row with initial avatar */}
                <div className="testimonial-author-row">
                  <div 
                    className="testimonial-initial-badge"
                    style={{ backgroundColor: item.initialBg }}
                  >
                    {item.initial}
                  </div>
                  <span className="testimonial-author-name">{item.name}</span>
                </div>

                {/* 5 Stars */}
                <div className="testimonial-stars-row" aria-label="5 stars rating">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="star-icon">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="testimonial-quote">{item.review}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Overall Rating & Trust Row */}
        <div className="testimonials-trust-footer">
          {/* Left: 4.9 Rating */}
          <div className="trust-footer-rating">
            <div className="trust-score-num">4.9</div>
            <div className="trust-stars-row">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="trust-star">★</span>
              ))}
            </div>
            <div className="trust-reviews-count">2,430 reviews</div>
          </div>

          {/* Right: Overlapping Avatars & Text */}
          <div className="trust-footer-drivers">
            <div className="overlapping-avatars">
              <img src={avatar1} alt="Driver" className="avatar-img avatar-img--1" />
              <img src={avatar2} alt="Driver" className="avatar-img avatar-img--2" />
              <img src={avatar3} alt="Driver" className="avatar-img avatar-img--3" />
            </div>
            <div className="trust-drivers-text">
              Trusted by <span className="text-orange font-bold">50,000+</span> Delhi NCR Drivers.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
