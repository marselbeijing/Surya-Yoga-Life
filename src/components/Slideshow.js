import React, { useState, useEffect, useCallback } from 'react';
import './Slideshow.css';
import ChakraPage from './ChakraPage';

const slideImages = [
  {
    src: `${process.env.PUBLIC_URL}/slideshow/knowledge.jpg`,
    alt: 'Knowledge'
  },
  {
    src: `${process.env.PUBLIC_URL}/slideshow/lucidity-test.jpg`,
    alt: 'Lucidity Test'
  },
  {
    src: `${process.env.PUBLIC_URL}/slideshow/dream-journal.jpg`,
    alt: 'Dream Journal'
  }
];

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showKnowledge, setShowKnowledge] = useState(false);

  const goToPrevious = useCallback((e) => {
    if (e) e.preventDefault();
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slideImages.length - 1 : prevIndex - 1
    );
  }, []);

  const goToNext = useCallback((e) => {
    if (e) e.preventDefault();
    setCurrentIndex((prevIndex) => 
      prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  // Автопереключение каждые 4 секунды
  useEffect(() => {
    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, [goToNext]);

  if (showKnowledge) {
    return <ChakraPage onBack={() => setShowKnowledge(false)} />;
  }

  return (
    <div className="slideshow-container">
      <div className="slideshow-wrapper">
        <button 
          className="slideshow-arrow slideshow-arrow-left" 
          onClick={goToPrevious}
        >
          &#8249;
        </button>
        
        <div className="slideshow-content">
          <img 
            src={slideImages[currentIndex].src} 
            alt={slideImages[currentIndex].alt}
            className="slideshow-image"
            onClick={() => {
              if (currentIndex === 0) setShowKnowledge(true);
            }}
            style={{ borderRadius: 16 }}
          />
        </div>
        
        <button 
          className="slideshow-arrow slideshow-arrow-right" 
          onClick={goToNext}
        >
          &#8250;
        </button>
      </div>
      
      <div className="slideshow-dots">
        {slideImages.map((_, index) => (
          <button
            key={index}
            className={`slideshow-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
} 