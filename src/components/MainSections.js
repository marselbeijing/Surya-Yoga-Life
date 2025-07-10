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

function OmFloat({ className, phaseIndex, total }) {
  const ref = useRef();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [angle, setAngle] = useState(Math.random() * 360);
  const [speed] = useState(0.008 + Math.random() * 0.004); // радиан/кадр
  const [radius] = useState(140 + Math.random() * 40); // px (увеличен радиус)
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
  // Фиксированная стартовая фаза для равномерного распределения
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
      setAngle((a) => a + 0.2 + Math.random() * 0.2);
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
        transform: `translate(${pos.x}px, ${pos.y}px) rotate(${angle}deg)`
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