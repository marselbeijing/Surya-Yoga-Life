import React from 'react';
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

export default function MainSections() {
  return (
    <div className="main-sections">
      {sections.map((s) => (
        <div className="section-card" key={s.title || s.key}>
          <div className="section-icon">{s.icon}</div>
          {s.title && <div className="section-title section-title-strict">{s.title}</div>}
        </div>
      ))}
    </div>
  );
} 