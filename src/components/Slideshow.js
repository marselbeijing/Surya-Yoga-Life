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
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  return (
    <div className="slideshow-container">
      <button className="slideshow-arrow left" onClick={prev} aria-label="Назад">&#8592;</button>
      <div className="slideshow-slide" onClick={slides[index].onClick} tabIndex={0} role="button">
        <img src={slides[index].img} alt={slides[index].alt} className="slideshow-img" />
        <div className="slideshow-label">{slides[index].label}</div>
      </div>
      <button className="slideshow-arrow right" onClick={next} aria-label="Вперёд">&#8594;</button>
      <div className="slideshow-dots">
        {slides.map((_, i) => (
          <span key={i} className={i === index ? 'dot active' : 'dot'} onClick={() => setIndex(i)} />
        ))}
      </div>
    </div>
  );
} 