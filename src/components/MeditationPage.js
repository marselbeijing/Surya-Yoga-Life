import React from 'react';
import './MainSections.css';

function MeditationPage({ onBack }) {
  return (
    <div className="knowledge-page meditation-page-container">
      <div style={{
        fontFamily: 'Comfortaa, "cursive"',
        fontWeight: 700,
        fontSize: '0.88rem',
        color: 'var(--text)',
        background: 'rgba(184,116,232,0.07)',
        borderRadius: 12,
        padding: 18,
        boxShadow: '0 1px 4px var(--shadow-color)',
        marginBottom: 12,
        textAlign: 'center',
        lineHeight: 1.6,
        letterSpacing: '0.01em',
        maxWidth: 430,
        margin: '0 auto 20px auto',
      }}>
        Медитация — это перезагрузка для ума и тела. Она помогает снизить стресс, улучшить концентрацию и восстановить внутренний баланс. Всего несколько минут в день — и ты чувствуешь себя спокойнее, яснее и увереннее.
      </div>

      <button className="knowledge-back" onClick={onBack} style={{display: 'block', margin: '28px auto 0 auto'}}>← Назад</button>
    </div>
  );
}

export default MeditationPage; 