import React from 'react';
import './MainSections.css';

function MeditationPage({ onBack, setShowChakraPage }) {
  return (
    <div className="meditation-page-container">
      <h2>Страница Медитации</h2>
      <p>Здесь будет контент о медитации.</p>
      <button className="breath-square-icon" style={{ margin: '20px auto' }} onClick={() => setShowChakraPage(true)}>
        <span>Прокачка чакр</span>
      </button>
      <button className="knowledge-back" onClick={onBack} style={{display: 'block', margin: '28px auto 0 auto'}}>← Назад</button>
    </div>
  );
}

export default MeditationPage; 