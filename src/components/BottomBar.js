import React from 'react';
import './BottomBar.css';
import KnowledgeIcon from './knowledge.svg';
import HomeIcon from './home.svg';
import AboutIcon from './about.svg';
import AccountIcon from './account.svg';

const tabs = [
  {
    key: 'home',
    label: 'Главная',
    icon: <img src={HomeIcon} alt="Главная" style={{width: 24, height: 24}} />,
  },
  {
    key: 'knowledge',
    label: 'База знаний',
    icon: <img src={KnowledgeIcon} alt="База знаний" style={{width: 24, height: 24}} />,
  },
  {
    key: 'about',
    label: 'О нас',
    icon: <img src={AboutIcon} alt="О нас" style={{width: 24, height: 24}} />,
  },
  {
    key: 'account',
    label: 'Аккаунт',
    icon: <img src={AccountIcon} alt="Аккаунт" style={{width: 24, height: 24}} />,
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