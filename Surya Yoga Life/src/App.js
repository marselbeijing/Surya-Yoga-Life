import React, { useState, useEffect } from 'react';
import MainSections from './components/MainSections';
import BottomBar from './components/BottomBar';
import Header from './components/Header';
import Settings from './components/Settings';
import TelegramLoginButton from './components/TelegramLoginButton';
import { Shankaprakshalana } from './components';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  // Загрузка темы из localStorage при запуске
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkTheme(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  // Переключение темы
  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    
    if (newTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  // Сброс выбранной секции при смене вкладки
  useEffect(() => {
    setSelectedSection(null);
  }, [activeTab]);

  const renderContent = () => {
    if (selectedSection === 'Шанкапракшалана') {
      return <Shankaprakshalana />;
    }
    switch (activeTab) {
      case 'home':
        return <MainSections onSectionClick={setSelectedSection} />;
      case 'knowledge':
        return <div className="placeholder">База знаний</div>;
      case 'settings':
        return <Settings isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />;
      case 'account':
        return <TelegramLoginButton />;
      default:
        return <MainSections onSectionClick={setSelectedSection} />;
    }
  };

  return (
    <div className="app-root">
      <div className="mobile-frame">
        {activeTab === 'home' && !selectedSection && <Header />}
        {renderContent()}
        <BottomBar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}

export default App;
