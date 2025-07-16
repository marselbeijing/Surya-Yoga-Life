import React, { useRef, useEffect, useState } from 'react';
import './MainSections.css';

const sections = [
  {
    key: 'Йога',
    icon: <img src={process.env.PUBLIC_URL + '/meditatsiya.svg'} alt="Йога" style={{ width: 64, height: 64, display: 'block', margin: '0 auto' }} />,
    title: 'Йога',
  },
  {
    key: 'Гвоздестояние',
    title: 'Гвоздестояние',
    icon: <img src={process.env.PUBLIC_URL + '/foot.svg'} alt="Гвоздестояние" style={{ width: 64, height: 64, display: 'block', margin: '0 auto' }} />,
  },
  {
    key: 'Лила',
    title: 'Лила',
    icon: <img src={process.env.PUBLIC_URL + '/card.svg'} alt="Лила" style={{ width: 64, height: 64, display: 'block', margin: '0 auto' }} />,
  },
  {
    key: 'Медитация',
    title: 'Медитация',
    icon: <img src={process.env.PUBLIC_URL + '/medi.svg'} alt="Медитация" style={{ width: 64, height: 64, display: 'block', margin: '0 auto' }} />,
  },
  {
    key: 'Шанкапракшалана',
    title: 'Шанкапракшалана',
    icon: <img src={process.env.PUBLIC_URL + '/water1.svg'} alt="Шанкапракшалана" style={{ width: 64, height: 64, display: 'block', margin: '0 auto' }} />,
  },
  {
    key: 'Дыхание',
    title: 'Дыхание',
    icon: <img src={process.env.PUBLIC_URL + '/lung.svg'} alt="Дыхание" style={{ width: 64, height: 64, display: 'block', margin: '0 auto' }} />,
  },
];

function OmFloat({ className, phaseIndex, total }) {
  const ref = useRef();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [angle, setAngle] = useState(0);
  const speed = 0.012; // одинаковая скорость
  const radius = 180; // увеличенный радиус для широкой траектории
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

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

  // Равномерный сдвиг по фазе
  const phase = (phaseIndex ?? 0) * (2 * Math.PI / (total ?? 6));

  useEffect(() => {
    let frame;
    let t = phase;
    function animate() {
      t += speed;
      const cx = containerSize.width / 2;
      const cy = containerSize.height / 2;
      const x = cx + Math.cos(t) * radius;
      const y = cy + Math.sin(t) * radius;
      setPos({ x, y });
      setAngle((a) => a + 0.1); // плавное вращение
      frame = requestAnimationFrame(animate);
    }
    if (containerSize.width && containerSize.height) {
      frame = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(frame);
  }, [radius, speed, containerSize, phase]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        transform: `translate(${pos.x}px, ${pos.y}px) rotate(${angle}deg)`,
        color: '#5a3a7a',
        opacity: 0.45,
        fontSize: '1.25rem',
        fontWeight: 700,
        pointerEvents: 'none',
        userSelect: 'none',
        zIndex: 0
      }}
    >
      ॐ
    </div>
  );
}

export default function MainSections({ onSectionClick }) {
  const omCount = 6;
  return (
    <div className="main-sections">
      {[...Array(omCount)].map((_, i) => (
        <OmFloat key={i} className={`om-float om-float-${i+1}`} phaseIndex={i} total={omCount} />
      ))}
      {sections.map((s) => (
        <div
          className="section-card"
          key={s.key || s.title}
          onClick={onSectionClick ? () => onSectionClick(s.key || s.title) : undefined}
          style={{ cursor: onSectionClick ? 'pointer' : 'default' }}
        >
          <div className="section-icon">{s.icon}</div>
          {s.title && <div className="section-title section-title-strict">{s.title}</div>}
        </div>
      ))}
    </div>
  );
} 