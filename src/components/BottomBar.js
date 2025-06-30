import React from 'react';
import './BottomBar.css';

const tabs = [
  {
    key: 'home',
    label: 'Главная',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 10.5L12 4L21 10.5V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19V10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 20V14H15V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    key: 'knowledge',
    label: 'База знаний',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 19.5V6.75C4 5.23122 5.23122 4 6.75 4H17.25C18.7688 4 20 5.23122 20 6.75V19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 19.5C4 20.3284 4.67157 21 5.5 21H18.5C19.3284 21 20 20.3284 20 19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    key: 'settings',
    label: 'Настройки',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="M7.5 12A4.5 4.5 0 1 0 16.5 12A4.5 4.5 0 1 0 7.5 12Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M2 12C2 13.1046 2.89543 14 4 14H5.09C5.29 14.63 5.57 15.23 5.92 15.78L5.13 17.19C4.57 18.13 5.13 19.32 6.18 19.32C6.47 19.32 6.75 19.21 6.97 19.03L8.38 18.24C8.93 18.59 9.53 18.87 10.16 19.07V20.18C10.16 21.28 11.05 22.18 12.16 22.18C13.27 22.18 14.16 21.28 14.16 20.18V19.07C14.79 18.87 15.39 18.59 15.94 18.24L17.35 19.03C17.57 19.21 17.85 19.32 18.14 19.32C19.19 19.32 19.75 18.13 19.19 17.19L18.4 15.78C18.75 15.23 19.03 14.63 19.23 14H20.32C21.42 14 22.32 13.1 22.32 12C22.32 10.9 21.42 10 20.32 10H19.23C19.03 9.37 18.75 8.77 18.4 8.22L19.19 6.81C19.75 5.87 19.19 4.68 18.14 4.68C17.85 4.68 17.57 4.79 17.35 4.97L15.94 5.76C15.39 5.41 14.79 5.13 14.16 4.93V3.82C14.16 2.72 13.27 1.82 12.16 1.82C11.05 1.82 10.16 2.72 10.16 3.82V4.93C9.53 5.13 8.93 5.41 8.38 5.76L6.97 4.97C6.75 4.79 6.47 4.68 6.18 4.68C5.13 4.68 4.57 5.87 5.13 6.81L5.92 8.22C5.57 8.77 5.29 9.37 5.09 10H4C2.9 10 2 10.9 2 12Z" stroke="currentColor" strokeWidth="2"/>
        </g>
      </svg>
    ),
  },
  {
    key: 'account',
    label: 'Аккаунт',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M4 20C4 16.6863 7.13401 14 12 14C16.866 14 20 16.6863 20 20" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
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
          <span className="bar-title">{tab.title}</span>
        </div>
      ))}
    </nav>
  );
} 