import React from 'react';
import './MainSections.css';

const sections = [
  {
    key: 'Медитация',
    title: 'Медитация',
    icon: <img src={process.env.PUBLIC_URL + '/medi.svg'} alt="Медитация" style={{ width: 81, height: 81, display: 'block', margin: '0 auto' }} />,
    cardStyle: { background: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)' },
  },
  {
    key: 'Прокачка чакр',
    title: 'Прокачка чакр',
    icon: <img src={process.env.PUBLIC_URL + '/icon.chakra.svg'} alt="Прокачка чакр" style={{ width: 81, height: 81, display: 'block', margin: '0 auto' }} />,
    cardStyle: { background: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)' },
  },
  {
    key: 'Йога',
    icon: <img src={process.env.PUBLIC_URL + '/meditatsiya.svg'} alt="Йога" style={{ width: 81, height: 81, display: 'block', margin: '0 auto' }} />,
    title: 'Йога',
    cardStyle: { background: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)' },
  },
  {
    key: 'Дыхание',
    title: 'Дыхание',
    icon: <img src={process.env.PUBLIC_URL + '/lung.svg'} alt="Дыхание" style={{ width: 81, height: 81, display: 'block', margin: '0 auto' }} />,
    cardStyle: { background: 'linear-gradient(135deg, #ffe259 0%, #ffa751 100%)' },
  },
  {
    key: 'Лила',
    title: 'Лила',
    icon: <img src={process.env.PUBLIC_URL + '/card.svg'} alt="Лила" style={{ width: 81, height: 81, display: 'block', margin: '0 auto' }} />,
    cardStyle: { background: 'linear-gradient(135deg, #ffe259 0%, #ffa751 100%)' },
  },
  {
    key: 'Шанкапракшалана',
    title: 'Шанкапракшалана',
    icon: <img src={process.env.PUBLIC_URL + '/water1.svg'} alt="Шанкапракшалана" style={{ width: 81, height: 81, display: 'block', margin: '0 auto' }} />,
    cardStyle: { background: 'linear-gradient(135deg, #ffe259 0%, #ffa751 100%)' },
  },
  {
    key: 'Дневник Жизни',
    title: 'Дневник Жизни',
    icon: <img src={process.env.PUBLIC_URL + '/diary1.svg'} alt="Дневник Жизни" style={{ width: 81, height: 81, display: 'block', margin: '0 auto' }} />,
    cardStyle: { background: 'linear-gradient(135deg, #ff6a6a 0%, #ffb199 100%)' },
  },
  {
    key: 'Гвоздестояние',
    title: 'Гвоздестояние',
    icon: <img src={process.env.PUBLIC_URL + '/foot.svg'} alt="Гвоздестояние" style={{ width: 81, height: 81, display: 'block', margin: '0 auto' }} />,
    cardStyle: { background: 'linear-gradient(135deg, #ff6a6a 0%, #ffb199 100%)' },
  },
  {
    key: 'Послание дня',
    title: 'Послание дня',
    icon: <img src={process.env.PUBLIC_URL + '/poslanie.svg'} alt="Послание дня" style={{ width: 81, height: 81, display: 'block', margin: '0 auto' }} />,
    cardStyle: { background: 'linear-gradient(135deg, #ff6a6a 0%, #ffb199 100%)' },
  },
];

export default function MainSections({ onSectionClick }) {
  return (
    <div className="main-sections">
      <div className="sections-grid">
      {sections.map((s) => (
        <div
          className="section-card"
            key={s.key || s.title}
            onClick={onSectionClick ? () => onSectionClick(s.key || s.title) : undefined}
            style={{ cursor: onSectionClick ? 'pointer' : 'default', ...(s.cardStyle || {}) }}
        >
          <div className="section-icon">{s.icon}</div>
          {s.title && <div className="section-title section-title-strict">{s.title}</div>}
        </div>
      ))}
      </div>
    </div>
  );
} 