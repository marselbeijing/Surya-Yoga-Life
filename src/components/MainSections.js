import React from 'react';
import './MainSections.css';

const sections = [
  {
    key: 'Медитация',
    title: 'Медитация',
    icon: <img src={process.env.PUBLIC_URL + '/medi.svg'} alt="Медитация" style={{ width: 70, height: 70, display: 'block', margin: '0 auto' }} />,
  },
  {
    key: 'Йога',
    icon: <img src={process.env.PUBLIC_URL + '/meditatsiya.svg'} alt="Йога" style={{ width: 70, height: 70, display: 'block', margin: '0 auto' }} />,
    title: 'Йога',
  },
  {
    key: 'Дыхание',
    title: 'Дыхание',
    icon: <img src={process.env.PUBLIC_URL + '/lung.svg'} alt="Дыхание" style={{ width: 70, height: 70, display: 'block', margin: '0 auto' }} />,
  },
  {
    key: 'Лила',
    title: 'Лила',
    icon: <img src={process.env.PUBLIC_URL + '/card.svg'} alt="Лила" style={{ width: 70, height: 70, display: 'block', margin: '0 auto' }} />,
  },
  {
    key: 'Шанкапракшалана',
    title: 'Шанкапракшалана',
    icon: <img src={process.env.PUBLIC_URL + '/water1.svg'} alt="Шанкапракшалана" style={{ width: 70, height: 70, display: 'block', margin: '0 auto' }} />,
  },
  {
    key: 'Дневник Жизни',
    title: 'Дневник Жизни',
    icon: <img src={process.env.PUBLIC_URL + '/diary1.svg'} alt="Дневник Жизни" style={{ width: 70, height: 70, display: 'block', margin: '0 auto' }} />,
  },
  {
    key: 'Гвоздестояние',
    title: 'Гвоздестояние',
    icon: <img src={process.env.PUBLIC_URL + '/foot.svg'} alt="Гвоздестояние" style={{ width: 70, height: 70, display: 'block', margin: '0 auto' }} />,
  },
];

export default function MainSections({ onSectionClick }) {
  return (
    <div className="main-sections">
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