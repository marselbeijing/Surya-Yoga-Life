import React, { useState, useRef } from 'react';
import './MainSections.css';

function MeditationPage({ onBack }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 64px)', padding: '0', margin: '0', paddingTop: '0', marginTop: '0'}}>
      <button className="knowledge-back" onClick={onBack} style={{display: 'block', margin: '0 auto 4px auto'}}>← Назад</button>
      
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
        margin: '8px auto 0 auto',
      }}>
        Медитация — это перезагрузка для ума и тела. Она помогает снизить стресс, улучшить концентрацию и восстановить внутренний баланс. Всего несколько минут в день — и ты чувствуешь себя спокойнее, яснее и увереннее.
      </div>

      {/* Аудио плеер */}
      <div style={{
        background: 'rgba(184,116,232,0.07)',
        borderRadius: 12,
        padding: 18,
        boxShadow: '0 1px 4px var(--shadow-color)',
        margin: '12px auto',
        maxWidth: 430,
        textAlign: 'center'
      }}>
        <h3 style={{
          fontFamily: 'Comfortaa, "cursive"',
          fontWeight: 700,
          fontSize: '1rem',
          color: 'var(--text)',
          margin: '0 0 16px 0'
        }}>
          Свет нового дня
        </h3>
        
        <button 
          onClick={togglePlay}
          style={{
            background: isPlaying ? '#e74c3c' : '#27ae60',
            color: 'white',
            border: 'none',
            borderRadius: 8,
            padding: '12px 24px',
            fontSize: '0.9rem',
            fontWeight: 600,
            cursor: 'pointer',
            marginBottom: 16,
            transition: 'background 0.3s ease'
          }}
        >
          {isPlaying ? '⏸ Пауза' : '▶ Воспроизвести'}
        </button>

        <div style={{ marginBottom: 16 }}>
          <label style={{
            fontFamily: 'Comfortaa, "cursive"',
            fontSize: '0.8rem',
            color: 'var(--text)',
            display: 'block',
            marginBottom: 8
          }}>
            Громкость: {Math.round(volume * 100)}%
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            style={{
              width: '100%',
              maxWidth: 200
            }}
          />
        </div>

        <audio
          ref={audioRef}
          src="/audio/zen-meditation.mp3"
          onEnded={handleAudioEnded}
          preload="metadata"
        />
      </div>
    </div>
  );
}

export default MeditationPage; 