import React, { useState } from 'react';
import './Slideshow.css';

const slides = [
  {
    img: process.env.PUBLIC_URL + '/slideshow/knowledge.jpg',
    alt: 'База знаний',
    onClick: () => window.location.hash = '#knowledge',
  },
  {
    img: process.env.PUBLIC_URL + '/slideshow/dream-journal.jpg',
    alt: 'Журнал сновидений',
    onClick: () => window.location.hash = '#dream-journal',
  },
  {
    img: process.env.PUBLIC_URL + '/slideshow/lucidity-test.jpg',
    alt: 'Тест на осознанность',
    onClick: () => window.location.hash = '#lucidity-test',
  },
];

export default function Slideshow() {
  const [activeIndex, setActiveIndex] = useState(1); // Средний элемент активен по умолчанию

  return (
    <div className="slideshow-container">
      <div className="slideshow-wrapper">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className="slideshow-slide" 
            onClick={() => {
              setActiveIndex(index);
              slide.onClick();
            }} 
            tabIndex={0} 
            role="button"
          >
            <img src={slide.img} alt={slide.alt} className="slideshow-img" />
          </div>
        ))}
      </div>
      <div className="slideshow-dots">
        {slides.map((_, i) => (
          <span 
            key={i} 
            className={i === activeIndex ? 'dot active' : 'dot'} 
            onClick={() => setActiveIndex(i)} 
          />
        ))}
      </div>
    </div>
  );
} 