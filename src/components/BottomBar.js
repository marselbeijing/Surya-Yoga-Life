import React from 'react';
import './BottomBar.css';
import HomeIcon from './home.svg';
import AboutIcon from './about.svg';
import AccountIcon from './account.svg';

const tabs = [
  {
    key: 'home',
    label: 'Главная',
    icon: <img src={HomeIcon} alt="Главная" />,
  },
  {
    key: 'about',
    label: 'О нас',
    icon: <img src={AboutIcon} alt="О нас" />,
  },
  {
    key: 'account',
    label: 'Аккаунт',
    icon: <img src={AccountIcon} alt="Аккаунт" />,
  },
];

export default function BottomBar({ activeTab, setActiveTab }) {
  return (
    <nav className="bottom-bar">
      {tabs.map((tab) => (
        <div
          className={`bar-tab${activeTab === tab.key ? ' active' : ''}`}
          key={tab.key}
          onClick={() => setActiveTab(tab.key)}
        >
          <span className="bar-icon">{tab.icon}</span>
          <span className="bar-title">{tab.label}</span>
        </div>
      ))}
    </nav>
  );
} 