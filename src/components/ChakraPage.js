import React from 'react';
import './MainSections.css';
import ChakraMeditationApp from './ChakraMeditationApp';

function ChakraPage({ onBack }) {
  return (
    <div className="chakra-page-container">
      <ChakraMeditationApp onBack={onBack} />
    </div>
  );
}

export default ChakraPage; 