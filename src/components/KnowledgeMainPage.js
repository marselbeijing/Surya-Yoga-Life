import React from 'react';

export default function KnowledgeMainPage({ onBack, onSection }) {
  return (
    <div className="knowledge-page">
      <div className="knowledge-title">База знаний</div>
      <div className="knowledge-section knowledge-linkable" onClick={() => onSection && onSection('hd-movies')} style={{cursor:'pointer'}}>
        <h3>ХД фильмы раскрывающие сознание</h3>
        <p>Подборка фильмов в высоком качестве, расширяющих восприятие и способствующих развитию сознания.</p>
      </div>
      <div className="knowledge-section knowledge-linkable" onClick={() => onSection && onSection('series')} style={{cursor:'pointer'}}>
        <h3>Сериалы раскрывающие сознание</h3>
        <p>Список сериалов, которые помогают взглянуть на мир шире, стимулируют осознанность и развитие.</p>
      </div>
      <div className="knowledge-section knowledge-linkable" onClick={() => onSection && onSection('documentaries')} style={{cursor:'pointer'}}>
        <h3>Документальные фильмы</h3>
        <p>Подборка документальных фильмов о духовности, науке, природе и человеческом потенциале.</p>
      </div>
      <div className="knowledge-section knowledge-linkable" onClick={() => onSection && onSection('sacred-music')} style={{cursor:'pointer'}}>
        <h3>Сакральная музыка</h3>
        <p>Подборка музыки для медитаций, практик и внутреннего вдохновения.</p>
      </div>
      <button className="knowledge-back" onClick={onBack} style={{display: 'block', margin: '28px auto 0 auto'}}>← Назад</button>
    </div>
  );
} 