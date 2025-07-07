import React from 'react';
import './Settings.css';

const Settings = ({ isDarkTheme, toggleTheme }) => {
  return (
    <div className="settings">
      <div className="settings-header">
        <h2>Настройки</h2>
      </div>
      
      <div className="settings-content">
        <div className="setting-item">
          <div className="setting-info">
            <h3>Тема приложения</h3>
            <p>Переключение между светлой и темной темой</p>
          </div>
          <div className="theme-toggle">
            <input
              type="checkbox"
              id="theme-switch"
              checked={isDarkTheme}
              onChange={toggleTheme}
              className="theme-switch-input"
            />
            <label htmlFor="theme-switch" className="theme-switch-label">
              <span className="theme-switch-slider"></span>
            </label>
          </div>
        </div>
        
        <div className="setting-item">
          <div className="setting-info">
            <h3>О приложении</h3>
            <p>Surya Yoga Life - ваш путь к гармонии</p>
          </div>
        </div>
        
        <div className="setting-item">
          <div className="setting-info">
            <h3>Версия</h3>
            <p>1.0.0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 