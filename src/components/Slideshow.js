import React, { useState } from "react";
import "./Slideshow.css";

const slides = [
  {
    img: process.env.PUBLIC_URL + "/slideshow/dream-journal.jpg",
    alt: "Журнал сновидений",
    link: "/dream-journal",
  },
  {
    img: process.env.PUBLIC_URL + "/slideshow/lucidity-test.jpg",
    alt: "Тест на осознанность",
    link: "/lucidity-test",
  },
  {
    img: process.env.PUBLIC_URL + "/slideshow/knowledge.jpg",
    alt: "База знаний",
    link: "/knowledge",
  },
];

export default function Slideshow() {
  const [active, setActive] = useState(0);

  const goTo = (idx) => setActive(idx);
  const prev = () => setActive((prev) => (prev - 1 + slides.length) % slides.length);
  const next = () => setActive((prev) => (prev + 1) % slides.length);

  return (
    <div className="slideshow">
      <div className="slideshow-track">
        <button className="slideshow-arrow left" onClick={prev} aria-label="Назад" />
        {slides.map((slide, idx) => (
          <a
            key={idx}
            href={slide.link}
            className={`slide${idx === active ? " active" : ""}`}
            style={{ display: idx === active ? "block" : "none" }}
          >
            <img src={slide.img} alt={slide.alt} />
          </a>
        ))}
        <button className="slideshow-arrow right" onClick={next} aria-label="Вперёд" />
      </div>
      <div className="slideshow-dots">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === active ? "dot active" : "dot"}
            onClick={() => goTo(idx)}
            aria-label={`Перейти к слайду ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 