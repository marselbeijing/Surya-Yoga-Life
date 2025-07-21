import React, { useState, useEffect } from 'react';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const WISE_QUOTES = [
  {
    title: 'Мудрая фраза дня',
    description: 'Короткое и глубокое высказывание для внутреннего роста.',
    message: 'Только отпуская, мы становимся свободными. — Будда',
    icon: '🧘‍♂️',
  },
  {
    title: 'Мудрая фраза дня',
    description: 'Короткое и глубокое высказывание для внутреннего роста.',
    message: 'Там, где любовь, там и жизнь. — Махатма Ганди',
    icon: '❤️',
  },
  {
    title: 'Мудрая фраза дня',
    description: 'Короткое и глубокое высказывание для внутреннего роста.',
    message: 'Всё, что ты ищешь, уже внутри тебя. — Экхарт Толле',
    icon: '✨',
  },
];

const SYMBOLS = [
  {
    title: 'Символ дня: Ом',
    description: 'Ом — звук Вселенной, гармония и целостность.',
    message: 'Сегодня настройся на внутреннюю тишину. Пусть Ом напомнит о единстве с миром.',
    icon: 'ॐ',
  },
  {
    title: 'Символ дня: Инь-Ян',
    description: 'Инь-Ян — баланс противоположностей.',
    message: 'Заметь свет и тень в себе. Гармония — в принятии обоих начал.',
    icon: '☯️',
  },
  {
    title: 'Символ дня: Сердце',
    description: 'Сердце — символ любви и принятия.',
    message: 'Открой сердце миру. Пусть доброта ведёт тебя сегодня.',
    icon: '💖',
  },
];

const UNIVERSE = [
  {
    title: 'Послание от Вселенной',
    description: 'Тёплое и поддерживающее послание лично для тебя.',
    message: 'Ты на верном пути. Доверься потоку жизни — всё складывается наилучшим образом.',
    icon: '🌌',
  },
  {
    title: 'Послание от Вселенной',
    description: 'Тёплое и поддерживающее послание лично для тебя.',
    message: 'Сегодня Вселенная шепчет: «Ты достоин счастья. Позволь себе радость!»',
    icon: '🌠',
  },
  {
    title: 'Послание от Вселенной',
    description: 'Тёплое и поддерживающее послание лично для тебя.',
    message: 'Верь в себя. Всё, что нужно, уже рядом — просто оглянись.',
    icon: '🌈',
  },
];

function getTwoRandomCards() {
  const types = [WISE_QUOTES, SYMBOLS, UNIVERSE];
  let idx1 = getRandomInt(3);
  let idx2 = getRandomInt(3);
  while (idx2 === idx1) idx2 = getRandomInt(3);
  const card1 = types[idx1][getRandomInt(types[idx1].length)];
  const card2 = types[idx2][getRandomInt(types[idx2].length)];
  return [card1, card2];
}

function MessageOfTheDayPage({ onBack }) {
  const [cards, setCards] = useState(() => {
    const saved = localStorage.getItem('messageOfTheDayCards');
    return saved ? JSON.parse(saved) : getTwoRandomCards();
  });
  
  const [showCards, setShowCards] = useState(() => {
    const lastUpdate = localStorage.getItem('messageOfTheDayLastUpdate');
    return !!lastUpdate; // Показываем карточки только если уже были обновления сегодня
  });
  
  const [canUpdate, setCanUpdate] = useState(true);
  const [timeUntilNext, setTimeUntilNext] = useState('');

  useEffect(() => {
    const checkUpdateAvailability = () => {
      const lastUpdate = localStorage.getItem('messageOfTheDayLastUpdate');
      const now = new Date();
      
      if (lastUpdate) {
        const lastUpdateDate = new Date(lastUpdate);
        const nextUpdateTime = new Date(lastUpdateDate);
        nextUpdateTime.setDate(nextUpdateTime.getDate() + 1);
        
        if (now < nextUpdateTime) {
          setCanUpdate(false);
          setShowCards(true);
          const timeDiff = nextUpdateTime - now;
          const hours = Math.floor(timeDiff / (1000 * 60 * 60));
          const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
          setTimeUntilNext(`${hours}ч ${minutes}м`);
        } else {
          setCanUpdate(true);
          setShowCards(false);
          setTimeUntilNext('');
        }
      } else {
        setCanUpdate(true);
        setShowCards(false);
      }
    };

    checkUpdateAvailability();
    const interval = setInterval(checkUpdateAvailability, 60000);
    
    return () => clearInterval(interval);
  }, []);

  const handleShowMessage = () => {
    if (!canUpdate) return;
    
    const newCards = getTwoRandomCards();
    setCards(newCards);
    setShowCards(true);
    
    // Сохраняем карточки и время последнего обновления
    localStorage.setItem('messageOfTheDayCards', JSON.stringify(newCards));
    localStorage.setItem('messageOfTheDayLastUpdate', new Date().toISOString());
    
    setCanUpdate(false);
    
    // Устанавливаем таймер до следующего дня
    const now = new Date();
    const nextUpdate = new Date(now);
    nextUpdate.setDate(nextUpdate.getDate() + 1);
    const timeDiff = nextUpdate - now;
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    setTimeUntilNext(`${hours}ч ${minutes}м`);
  };

  return (
    <div className="knowledge-page" style={{display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 64px)'}}>
      <button 
        onClick={onBack}
        className="knowledge-back"
        style={{display: 'block', margin: '-12px auto 4px auto'}}>← Назад</button>
      <div style={{
        background: '#f7f3ff',
        borderRadius: 16,
        padding: '24px 16px',
        color: '#000',
        fontFamily: 'Comfortaa, cursive',
        fontSize: '0.95rem',
        textAlign: 'center',
        boxShadow: '0 2px 12px 0 rgba(124,91,179,0.07)',
        maxWidth: 480,
        margin: '18px auto 0 auto',
        lineHeight: 1.7
      }}>
        Открой для себя послание, которое нужно услышать именно сегодня.<br/><br/>
        Мудрые фразы, символы и знаки Вселенной — всё, чтобы на мгновение остановиться и почувствовать связь с собой.
      </div>
      
      {showCards && (
        <div style={{display: 'flex', flexDirection: 'column', gap: 18, margin: '28px 0 0 0'}}>
          {cards.map((card, idx) => (
            <div key={idx} style={{
              background: '#fff',
              borderRadius: 14,
              boxShadow: '0 2px 8px 0 rgba(124,91,179,0.08)',
              padding: '18px 14px',
              maxWidth: 420,
              margin: '0 auto',
              textAlign: 'center',
              fontFamily: 'Comfortaa, cursive',
              color: '#222',
            }}>
              <div style={{fontSize: 28, marginBottom: 6}}>{card.icon}</div>
              <div style={{fontWeight: 700, fontSize: '1.08rem', marginBottom: 4}}>{card.title}</div>
              <div style={{fontSize: '0.92rem', color: '#7c5bb3', marginBottom: 6}}>{card.description}</div>
              <div style={{fontSize: '1.01rem', marginTop: 8}}>{card.message}</div>
            </div>
          ))}
        </div>
      )}
      
      <button 
        onClick={handleShowMessage} 
        disabled={!canUpdate}
        style={{
          margin: '32px auto 0 auto', 
          display: 'block', 
          background: canUpdate ? '#b484f7' : '#ccc', 
          color: '#fff', 
          border: 'none', 
          borderRadius: 12, 
          padding: '12px 32px', 
          fontFamily: 'Comfortaa, cursive', 
          fontWeight: 700, 
          fontSize: '1.01rem', 
          cursor: canUpdate ? 'pointer' : 'not-allowed', 
          boxShadow: '0 2px 8px 0 rgba(124,91,179,0.08)',
          opacity: canUpdate ? 1 : 0.6
        }}>
        {canUpdate ? 'Показать послание' : `Следующее послание через ${timeUntilNext}`}
      </button>
    </div>
  );
}

export default MessageOfTheDayPage; 