import React from 'react';
import './MainSections.css';

function ChakraPage({ onBack }) {
  return (
    <div className="chakra-page-container">
      <h2>Упражнения с чакрами</h2>
      <button className="knowledge-back" onClick={onBack} style={{ display: 'block', margin: '28px auto 0 auto' }}>← Назад</button>
    </div>
  );
}

export default ChakraPage; 