import React, { useState, useEffect, useRef } from 'react';
import './Slideshow.css';

const slides = [
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
  {
    img: process.env.PUBLIC_URL + '/slideshow/knowledge.jpg',
    alt: 'База знаний',
    onClick: () => window.location.hash = '#knowledge',
  },
];

export default function Slideshow() {
  const [activeIndex, setActiveIndex] = useState(1);
  const wrapperRef = useRef(null);

  const handleScroll = () => {
    if (wrapperRef.current) {
      const { scrollLeft, clientWidth } = wrapperRef.current;
      const slideWidth = wrapperRef.current.children[0]?.clientWidth || 0;
      const newIndex = Math.round(scrollLeft / slideWidth);
      setActiveIndex(newIndex);
    }
  };

  const scrollToSlide = (index) => {
    if (wrapperRef.current) {
      const slideWidth = wrapperRef.current.children[index]?.clientWidth || 0;
      wrapperRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth',
      });
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener('scroll', handleScroll, { passive: true });
      return () => wrapper.removeEventListener('scroll', handleScroll);
    }
  }, []);
  
  useEffect(() => {
    scrollToSlide(activeIndex);
  }, []);

  return (
    <div className="slideshow-container">
      <div className="slideshow-wrapper" ref={wrapperRef}>
        {slides.map((slide, index) => (
          <div 
            key={index}
            className="slideshow-slide" 
            onClick={() => slide.onClick()}
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
            onClick={() => scrollToSlide(i)} 
          />
        ))}
      </div>
    </div>
  );
} 