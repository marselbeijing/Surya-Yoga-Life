import React from 'react';
import './MainSections.css';

const sections = [
  {
    title: 'ЙОГА',
    icon: '/yoga.svg',
    key: 'yoga',
  },
  {
    title: 'ГВОЗДЕСТОЯНИЕ',
    icon: '/foot.svg',
    key: 'foot',
  },
  {
    title: 'ЛИЛА',
    icon: '/lila.svg',
    key: 'lila',
  },
  {
    title: 'МЕДИТАЦИЯ',
    icon: '/meditation.svg',
    key: 'meditation',
  },
  {
    title: 'ШАНКАПРАКШАЛАНА',
    icon: '/chistka.svg',
    key: 'shankaprakshalana',
  },
  {
    title: 'ДЫХАНИЕ',
    icon: '/dihanie.svg',
    key: 'breath',
  },
];

export default function MainSections({ onSectionClick }) {
  return (
    <div className="main-sections">
      {sections.map(section => (
        <div
          className="main-section"
          key={section.key}
          onClick={() => onSectionClick && onSectionClick(section.key)}
        >
          <div className="main-section__icon">
            <img src={section.icon} alt={section.title} />
          </div>
          <div className="main-section__title">{section.title}</div>
        </div>
      ))}
    </div>
  );
} 