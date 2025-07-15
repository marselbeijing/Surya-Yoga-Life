import React, { useState, useEffect, useRef } from 'react';
import './ChakraMeditationApp.css';

function ChakraMeditationApp({ onBack }) {
  const [selectedChakraIndex, setSelectedChakraIndex] = useState(null);
  const [breathingPhase, setBreathingPhase] = useState("Готово к медитации");
  const [isSessionActive, setIsSessionActive] = useState(false);

  const bgMusicRef = useRef(null);
  const voiceRef = useRef(null);
  const soundInhaleRef = useRef(null);
  const soundHoldRef = useRef(null);
  const soundExhaleRef = useRef(null);

  const chakrasData = [
    { name: 'Муладхара', colorClass: 'root', voice: 'audio/voice1.mp3' },
    { name: 'Свадхистхана', colorClass: 'sacral', voice: 'audio/voice2.mp3' },
    { name: 'Манипура', colorClass: 'solar', voice: 'audio/voice3.mp3' },
    { name: 'Анахата', colorClass: 'heart', voice: 'audio/voice4.mp3' },
    { name: 'Вишудха', colorClass: 'throat', voice: 'audio/voice5.mp3' },
    { name: 'Аджна', colorClass: 'third-eye', voice: 'audio/voice6.mp3' },
    { name: 'Сахасрара', colorClass: 'crown', voice: 'audio/voice7.mp3' },
  ];

  const breathingCycle = ['Вдох', 'Задержка', 'Выдох', 'Задержка'];
  const breathingPhaseDurations = [4000, 4000, 4000, 4000]; // 4 seconds for each phase

  useEffect(() => {
    if (isSessionActive) {
      bgMusicRef.current.volume = 0.3;
      bgMusicRef.current.play().catch(e => console.error("Error playing background music:", e));
      startBreathingCycle();
      if (voiceRef.current && chakrasData[selectedChakraIndex]) {
        voiceRef.current.src = chakrasData[selectedChakraIndex].voice;
        voiceRef.current.play().catch(e => console.error("Error playing voice:", e));
      }
    } else {
      if (bgMusicRef.current) {
        bgMusicRef.current.pause();
        bgMusicRef.current.currentTime = 0;
      }
      if (voiceRef.current) {
        voiceRef.current.pause();
        voiceRef.current.currentTime = 0;
      }
    }
  }, [isSessionActive, selectedChakraIndex]);

  const startBreathingCycle = () => {
    let currentPhaseIndex = 0;
    const progressCircle = document.getElementById('progressCircle');
    const totalLength = 2 * Math.PI * 45;
    progressCircle.style.strokeDasharray = totalLength;
    progressCircle.style.strokeDashoffset = totalLength;

    const colors = {
      'Вдох': '#00f0ff',
      'Задержка': '#9b59b6',
      'Выдох': '#00ff94'
    };

    const animatePhase = () => {
      if (!isSessionActive) return; // Stop animation if session is not active

      const phase = breathingCycle[currentPhaseIndex];
      setBreathingPhase(phase);
      progressCircle.style.stroke = colors[phase] || '#aaa';

      if (phase === 'Вдох') {
        if (soundInhaleRef.current) {
          soundInhaleRef.current.currentTime = 0;
          soundInhaleRef.current.play().catch(e => console.error("Error playing inhale sound:", e));
        }
        progressCircle.style.transition = `stroke-dashoffset ${breathingPhaseDurations[currentPhaseIndex] / 1000}s ease-in-out`;
        progressCircle.style.strokeDashoffset = '0';
      } else if (phase === 'Выдох') {
        if (soundExhaleRef.current) {
          soundExhaleRef.current.currentTime = 0;
          soundExhaleRef.current.play().catch(e => console.error("Error playing exhale sound:", e));
        }
        progressCircle.style.transition = `stroke-dashoffset ${breathingPhaseDurations[currentPhaseIndex] / 1000}s ease-in-out`;
        progressCircle.style.strokeDashoffset = totalLength;
      } else if (phase === 'Задержка') {
        if (soundHoldRef.current) {
          soundHoldRef.current.currentTime = 0;
          soundHoldRef.current.play().catch(e => console.error("Error playing hold sound:", e));
        }
        progressCircle.style.transition = 'none'; // No animation during hold
        progressCircle.style.strokeDashoffset = (currentPhaseIndex === 1) ? 0 : totalLength; // Keep circle filled or empty based on previous phase
      }

      currentPhaseIndex = (currentPhaseIndex + 1) % breathingCycle.length;
      setTimeout(animatePhase, breathingPhaseDurations[currentPhaseIndex === 0 ? breathingCycle.length - 1 : currentPhaseIndex - 1]);
    };

    animatePhase(); // Start the first phase
  };

  const handleChakraSelect = (index) => {
    setSelectedChakraIndex(index);
    setIsSessionActive(true);
  };

  const handleBackToMenu = () => {
    setIsSessionActive(false);
    setSelectedChakraIndex(null);
    setBreathingPhase("Готово к медитации");
    onBack(); // Call the parent's onBack to return to MeditationPage
  };

  return (
    <div className="chakra-meditation-app-container">
      {!isSessionActive && (
        <div id="chakraMenu" className="chakra-menu">
          <h2>Выберите чакру</h2>
          <div className="chakra-buttons">
            {chakrasData.map((chakra, index) => (
              <button
                key={index}
                className="chakra-btn"
                onClick={() => handleChakraSelect(index)}
              >
                {chakra.name}
              </button>
            ))}
          </div>
          <button id="backBtn" onClick={onBack}>↩ Назад</button>
        </div>
      )}

      {isSessionActive && (
        <div id="chakraSession" className="chakra-session">
          <div className="chakra-wrapper">
            {chakrasData.map((chakra, index) => (
              <div
                key={index}
                className={`chakra ${chakra.colorClass} ${selectedChakraIndex === index ? 'active' : ''}`}
              ></div>
            ))}
          </div>

          <div className="breath-text" id="breathText">{breathingPhase}</div>

          <div className="breath-circle" id="breathCircle">
            <svg viewBox="0 0 100 100" className="circle-svg">
              <circle cx="50" cy="50" r="45" stroke="#888" strokeWidth="6" fill="none" />
              <circle id="progressCircle" cx="50" cy="50" r="45" stroke="#00f0ff" strokeWidth="6" fill="none" strokeLinecap="round"
                strokeDasharray="282.6" strokeDashoffset="282.6" />
            </svg>
          </div>

          <button id="backBtn" onClick={handleBackToMenu}>↩ Назад</button>
        </div>
      )}

      {/* Аудио */}
      <audio id="bg-music" ref={bgMusicRef} src="audio/bg.mp3" loop></audio>
      <audio id="voice" ref={voiceRef} src=""></audio>
      <audio id="sound-inhale" ref={soundInhaleRef} src="audio/breath/inhale.mp3"></audio>
      <audio id="sound-hold" ref={soundHoldRef} src="audio/breath/hold.mp3"></audio>
      <audio id="sound-exhale" ref={soundExhaleRef} src="audio/breath/exhale.mp3"></audio>
    </div>
  );
}

export default ChakraMeditationApp; 