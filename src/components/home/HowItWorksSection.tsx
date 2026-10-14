import React from 'react';

// Step images from src/assets/homepagehowitwork
import step1Img from '../../assets/homepagehowitwork/Ellipse 7.png';
import step2Img from '../../assets/homepagehowitwork/Ellipse 7 copy.png';
import step3Img from '../../assets/homepagehowitwork/Ellipse 7 copy 2.png';
import step4Img from '../../assets/homepagehowitwork/Ellipse 7 (1).png';

const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Call or WhatsApp',
    desc: "Tell us what's wrong, we'll take it from there.",
    img: step1Img,
    alt: 'Call or WhatsApp Instant Mechanic for roadside help',
  },
  {
    step: '02',
    title: 'Share Location',
    desc: 'Send your live location so we can find you.',
    img: step2Img,
    alt: 'Share live location on WhatsApp',
  },
  {
    step: '03',
    title: 'Verified Mechanic',
    desc: 'A verified mechanic is on the way to you.',
    img: step3Img,
    alt: 'Verified mechanic dispatched in service van',
  },
  {
    step: '04',
    title: 'Fixed and Rolling',
    desc: 'Get the issue fixed and get back on the road.',
    img: step4Img,
    alt: 'Car repaired and ready to roll',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="how-it-works-section" aria-label="How Instant Mechanic Works in 4 Steps">
      <div className="how-it-works-container">
        {/* Section Header */}
        <div className="how-it-works-header">
          <h2 className="how-it-works-title">
            Mechanic at <span className="how-it-works-title-orange">Your Location</span> in 4 Steps.
          </h2>
          <p className="how-it-works-subtitle">
            From emergency roadside rescue to complete car care everything handled fast, 24 hours a day.
          </p>
        </div>

        {/* 4 Steps Grid (4-col on Desktop, 2x2 on Mobile) */}
        <div className="how-it-works-grid">
          {HOW_IT_WORKS_STEPS.map((item) => (
            <div key={item.step} className="how-step-card">
              {/* Floating Top Number Badge */}
              <div className="how-step-badge">
                <span>{item.step}</span>
              </div>

              {/* Circular Illustrated Photo */}
              <div className="how-step-img-wrap">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="how-step-img"
                  loading="lazy"
                />
              </div>

              {/* Step Info */}
              <h3 className="how-step-title">{item.title}</h3>
              <p className="how-step-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
