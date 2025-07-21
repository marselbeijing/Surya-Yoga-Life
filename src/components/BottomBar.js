import React from 'react';
import './BottomBar.css';
import HomeIcon from './home.svg';
import KnowledgeIcon from './knowledge.svg';
import AboutIcon from './about.svg';
import AccountIcon from './account.svg';

const BottomBar = ({ activeTab, onTabChange }) => {
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

  return (
    <nav className="bottom-bar">
      {tabs.map((tab) => (
        <div
          className={`bar-tab${activeTab === tab.key ? ' active' : ''}`}
          key={tab.key}
          onClick={() => onTabChange(tab.key)}
        >
          <span className="bar-icon">{tab.icon}</span>
          <span className="bar-title">{tab.label}</span>
        </div>
      ))}
    </nav>
  );
};

export default BottomBar; 