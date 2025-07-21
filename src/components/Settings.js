import React from 'react';
import './Settings.css';

const Settings = () => {
  return (
    <div className="settings">
      <div className="settings-header">
        <h2>Настройки</h2>
      </div>
      <div className="settings-content">
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