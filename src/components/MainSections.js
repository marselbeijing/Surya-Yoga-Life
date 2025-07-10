import React, { useRef, useEffect, useState } from 'react';
import './MainSections.css';

const sections = [
  {
    key: 'yoga',
    icon: <img src={process.env.PUBLIC_URL + '/meditatsiya.svg'} alt="Йога" style={{ width: 64, height: 64, display: 'block', margin: '0 auto' }} />,
    title: 'Йога',
  },
  {
    title: 'Гвоздестояние',
    icon: <img src={process.env.PUBLIC_URL + '/foot.svg'} alt="Гвоздестояние" style={{ width: 64, height: 64, display: 'block', margin: '0 auto' }} />,
  },
  {
    title: 'ЛиЛа',
    icon: <img src={process.env.PUBLIC_URL + '/card.svg'} alt="ЛиЛа" style={{ width: 64, height: 64, display: 'block', margin: '0 auto' }} />,
  },
  {
    title: 'Медитация',
    icon: <img src={process.env.PUBLIC_URL + '/medi.svg'} alt="Медитация" style={{ width: 64, height: 64, display: 'block', margin: '0 auto' }} />,
  },
  {
    title: 'Шанкапракшалана',
    icon: <img src={process.env.PUBLIC_URL + '/water1.svg'} alt="Шанкапракшалана" style={{ width: 64, height: 64, display: 'block', margin: '0 auto' }} />,
  },
  {
    title: 'Дыхание',
    icon: <img src={process.env.PUBLIC_URL + '/lung.svg'} alt="Дыхание" style={{ width: 64, height: 64, display: 'block', margin: '0 auto' }} />,
  },
];

function OmFloat({ className }) {
  const ref = useRef();
  const containerRef = useRef();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [angle, setAngle] = useState(Math.random() * 360);
  const [speed] = useState(0.3 + Math.random() * 0.3);
  const [radius] = useState(18 + Math.random() * 22);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  // Получаем размеры контейнера
  useEffect(() => {
    const parent = document.querySelector('.main-sections');
    if (parent) {
      setContainerSize({ width: parent.offsetWidth, height: parent.offsetHeight });
    }
    const handleResize = () => {
      if (parent) setContainerSize({ width: parent.offsetWidth, height: parent.offsetHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // Случайная стартовая позиция
  const [base] = useState({
    x: Math.random() * 0.7 + 0.15, // 0.15..0.85 (процент ширины)
    y: Math.random() * 0.7 + 0.15  // 0.15..0.85 (процент высоты)
  });
  useEffect(() => {
    let frame;
    let t = Math.random() * 1000;
    function animate() {
      t += speed;
      // Хаотичное движение в пределах контейнера
      const dx = Math.sin(t / 37) * radius + Math.sin(t / 53) * (radius * 0.7);
      const dy = Math.cos(t / 41) * radius + Math.cos(t / 67) * (radius * 0.7);
      const x = (base.x * containerSize.width) + dx;
      const y = (base.y * containerSize.height) + dy;
      setPos({ x, y });
      setAngle(a => a + 0.2 + Math.random() * 0.2);
      frame = requestAnimationFrame(animate);
    }
    if (containerSize.width && containerSize.height) {
      frame = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(frame);
  }, [radius, speed, containerSize, base]);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        transform: `translate(${pos.x}px, ${pos.y}px) rotate(${angle}deg)`
      }}
    >
      ॐ
    </div>
  );
}

export default function MainSections({ onSectionClick }) {
  return (
    <div className="main-sections">
      <OmFloat className="om-float om-float-1" />
      <OmFloat className="om-float om-float-2" />
      <OmFloat className="om-float om-float-3" />
      <OmFloat className="om-float om-float-4" />
      <OmFloat className="om-float om-float-5" />
      <OmFloat className="om-float om-float-6" />
      {sections.map((s) => (
        <div
          className="section-card"
          key={s.title || s.key}
          onClick={onSectionClick ? () => onSectionClick(s.title) : undefined}
          style={{ cursor: onSectionClick ? 'pointer' : 'default' }}
        >
          <div className="section-icon">{s.icon}</div>
          {s.title && <div className="section-title section-title-strict">{s.title}</div>}
        </div>
      ))}
    </div>
  );
} 