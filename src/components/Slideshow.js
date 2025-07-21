import React, { useState } from 'react';
import './Slideshow.css';

const slides = [
  {
    img: process.env.PUBLIC_URL + '/slideshow/knowledge.jpg',
    alt: 'База знаний',
    label: 'База знаний',
    onClick: () => window.location.hash = '#knowledge',
  },
  {
    img: process.env.PUBLIC_URL + '/slideshow/dream-journal.jpg',
    alt: 'Журнал сновидений',
    label: 'Журнал сновидений',
    onClick: () => window.location.hash = '#dream-journal',
  },
  {
    img: process.env.PUBLIC_URL + '/slideshow/lucidity-test.jpg',
    alt: 'Тест на осознанность',
    label: 'Тест на осознанность',
    onClick: () => window.location.hash = '#lucidity-test',
  },
];

export default function Slideshow() {
  const [startIndex, setStartIndex] = useState(0);

  const next = () => setStartIndex((i) => (i + 1) % slides.length);
  const prev = () => setStartIndex((i) => (i - 1 + slides.length) % slides.length);

  const getTransform = () => {
    return `translateX(-${startIndex * (100/3)}%)`;
  };

  return (
    <div className="slideshow-container">
      <button className="slideshow-arrow left" onClick={prev} aria-label="Назад">&#8592;</button>
      <div className="slideshow-wrapper">
        <div className="slideshow-track" style={{ transform: getTransform() }}>
          {slides.map((slide, index) => (
            <div 
              key={index}
              className="slideshow-slide" 
              onClick={slide.onClick} 
              tabIndex={0} 
              role="button"
            >
              <img src={slide.img} alt={slide.alt} className="slideshow-img" />
              <div className="slideshow-label">{slide.label}</div>
            </div>
          ))}
        </div>
        <div className="slideshow-dots">
          {slides.map((_, i) => (
            <span key={i} className={i === startIndex ? 'dot active' : 'dot'} onClick={() => setStartIndex(i)} />
          ))}
        </div>
      </div>
      <button className="slideshow-arrow right" onClick={next} aria-label="Вперёд">&#8594;</button>
    </div>
  );
} 