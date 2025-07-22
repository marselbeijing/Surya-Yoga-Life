import React from 'react';
import './MainSections.css';

const DailyMantra = () => {
  const mantras = {
    0: { // Воскресенье - Солнце
      sanskrit: "ॐ सूर्याय नमः",
      transliteration: "Om Suryaya Namaha",
      russian: "Ом Сурьяя Намаха",
      meaning: "Приветствую Солнце, источник жизни и света, дарующий энергию и жизненную силу."
    },
    1: { // Понедельник - Луна  
      sanskrit: "ॐ सोमाय नमः",
      transliteration: "Om Somaya Namaha", 
      russian: "Ом Сомая Намаха",
      meaning: "Приветствую Луну, дарующую спокойствие, умиротворение и эмоциональное равновесие."
    },
    2: { // Вторник - Марс
      sanskrit: "ॐ मंगलाय नमः",
      transliteration: "Om Mangalaya Namaha",
      russian: "Ом Мангалая Намаха", 
      meaning: "Приветствую Марс, дарующий силу, мужество и энергию для преодоления препятствий."
    },
    3: { // Среда - Меркурий
      sanskrit: "ॐ बुधाय नमः",
      transliteration: "Om Budhaya Namaha",
      russian: "Ом Будхая Намаха",
      meaning: "Приветствую Меркурий, дарующий мудрость, ясность ума и способность к обучению."
    },
    4: { // Четверг - Юпитер
      sanskrit: "ॐ गुरवे नमः", 
      transliteration: "Om Gurave Namaha",
      russian: "Ом Гураве Намаха",
      meaning: "Приветствую Юпитер, великого учителя, дарующего знания, процветание и духовный рост."
    },
    5: { // Пятница - Венера
      sanskrit: "ॐ शुक्राय नमः",
      transliteration: "Om Shukraya Namaha", 
      russian: "Ом Шукрая Намаха",
      meaning: "Приветствую Венеру, дарующую красоту, любовь, гармонию и творческое вдохновение."
    },
    6: { // Суббота - Сатурн
      sanskrit: "ॐ शनैश्चराय नमः",
      transliteration: "Om Shanaishcharaya Namaha",
      russian: "Ом Шанайшчарая Намаха", 
      meaning: "Приветствую Сатурн, учителя терпения, дисциплины и духовного очищения."
    }
  };

  const today = new Date().getDay();
  const todayMantra = mantras[today];

  return (
    <div className="daily-mantra">
      <h3 className="mantra-title">Мантра дня</h3>
      <div className="mantra-content">
        <div className="mantra-sanskrit">{todayMantra.sanskrit}</div>
        <div className="mantra-transliteration">{todayMantra.transliteration}</div>
        <div className="mantra-russian">{todayMantra.russian}</div>
        <div className="mantra-meaning">"{todayMantra.meaning}"</div>
      </div>
    </div>
  );
};

const sections = [
  {
    key: 'Медитация',
    title: 'Медитация',
    icon: <img src={process.env.PUBLIC_URL + '/medi.svg'} alt="Медитация" style={{ display: 'block', margin: '0 auto' }} />,
    cardStyle: { background: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)' },
  },
  {
    key: 'Прокачка чакр',
    title: 'Прокачка чакр',
    icon: <img src={process.env.PUBLIC_URL + '/icon.chakra.svg'} alt="Прокачка чакр" style={{ display: 'block', margin: '0 auto' }} />,
    cardStyle: { background: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)' },
  },
  {
    key: 'Йога',
    icon: <img src={process.env.PUBLIC_URL + '/meditatsiya.svg'} alt="Йога" style={{ display: 'block', margin: '0 auto' }} />,
    title: 'Йога',
    cardStyle: { background: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)' },
  },
  {
    key: 'Дыхание',
    title: 'Дыхание',
    icon: <img src={process.env.PUBLIC_URL + '/lung.svg'} alt="Дыхание" style={{ display: 'block', margin: '0 auto' }} />,
    cardStyle: { background: 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)' },
  },
  {
    key: 'Лила',
    title: 'Лила',
    icon: <img src={process.env.PUBLIC_URL + '/card.svg'} alt="Лила" style={{ display: 'block', margin: '0 auto' }} />,
    cardStyle: { background: 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)' },
  },
  {
    key: 'Шанкапракшалана',
    title: 'Шанкапракшалана',
    icon: <img src={process.env.PUBLIC_URL + '/water1.svg'} alt="Шанкапракшалана" style={{ display: 'block', margin: '0 auto' }} />,
    cardStyle: { background: 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)' },
  },
  {
    key: 'Дневник Жизни',
    title: 'Дневник Жизни',
    icon: <img src={process.env.PUBLIC_URL + '/diary1.svg'} alt="Дневник Жизни" style={{ display: 'block', margin: '0 auto' }} />,
    cardStyle: { background: 'linear-gradient(135deg, #ff6a6a 0%, #ffb199 100%)' },
  },
  {
    key: 'Гвоздестояние',
    title: 'Гвоздестояние',
    icon: <img src={process.env.PUBLIC_URL + '/foot.svg'} alt="Гвоздестояние" style={{ display: 'block', margin: '0 auto' }} />,
    cardStyle: { background: 'linear-gradient(135deg, #ff6a6a 0%, #ffb199 100%)' },
  },
  {
    key: 'Послание дня',
    title: 'Послание дня',
    icon: <img src={process.env.PUBLIC_URL + '/poslanie.svg'} alt="Послание дня" style={{ display: 'block', margin: '0 auto' }} />,
    cardStyle: { background: 'linear-gradient(135deg, #ff6a6a 0%, #ffb199 100%)' },
  },
];

export default function MainSections({ onSectionClick }) {
  return (
    <div className="main-sections">
      <div className="sections-grid">
      {sections.map((s) => (
        <div
          className="section-card"
            key={s.key || s.title}
            onClick={onSectionClick ? () => onSectionClick(s.key || s.title) : undefined}
            style={{ cursor: onSectionClick ? 'pointer' : 'default', ...(s.cardStyle || {}) }}
        >
          <div className="section-icon">{s.icon}</div>
          {s.title && <div className="section-title section-title-strict">{s.title}</div>}
        </div>
      ))}
      </div>
      <DailyMantra />
    </div>
  );
} 