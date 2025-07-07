import React, { useState, useEffect } from 'react';
import MainSections from './components/MainSections';
import BottomBar from './components/BottomBar';
import Header from './components/Header';
import Settings from './components/Settings';
import TelegramLoginButton from './components/TelegramLoginButton';
import { Shankaprakshalana } from './components';
import './App.css';

function KnowledgeHDMoviesPage({ onBack }) {
  const movies = [
    'Прекрасная Зеленая',
    'Шоу Трумана',
    'Сказка о потерянном времени',
    'Курукшетра (2021)',
    'Интервью с богом',
    'Пробуждение',
    'Хижина',
    'Остров',
    'Волк и лев',
    'Посвященный',
    'Падмавати',
    'Шафрановое сердце',
    'Почему Бодхидхарма ушел на восток',
    'Феномен',
    'День сурка',
    'Жизнь пи',
    'Сюань цзан',
    'Экспресс Мумбаи - Варанаси (2016)',
    'Изгой(2017)',
    'Окча  (2017)',
    'Человек который познал бесконечность (2015)',
    'Миларепа',
    'Мирный воин(2006)',
    'Беседы с богом  (2006)',
    'Потерянные дети будды  (2006)',
    'Среди Белых облаков (2005)',
    'Спринт(2015)',
    'Когда солнца целует землю',
    'Манджи : человек горы',
    'Семь лет в тибете',
    'Дзен',
    'Заплати другому (2000)',
    'Сила веры (2007)',
    'Чайка по имени Джонатан Ливингстон (1973)',
    'Жизнь и эпоха Гаутамы будды',
    'Гималаи (1999)',
    'Окраина (1998)',
    'Рамануджачарья(1988)',
    'Гостья (2013)',
    'Мадхвачарья',
    'Пудра (1995)',
    'Император Ашока (2001)',
    'Покрытая тайной: так что же мы знаем (2004)',
    'Конфуций',
    'Наш очаг, астральный город (2010)',
    'Ганди (1982)',
    'Чужие среди нас (1988)',
    'Куда приводят мечты',
    'Мастер дзен Бодхидхарма',
    'Ангулимала (2003)',
    'Ситхартха на пути к истине (1972)',
    'Поле битвы Земля (2000)',
    'Прекрасная зелёная',
    'Миларепа (2006)',
    'Самсара (2001)',
    'Излечить страх (жизнь необыкновенного святого луки )',
    'Отель Меринолд лучший из экзотических (2011)',
    'Мальчик который обуздал ветер',
    'Фильмы',
    'Искусственный интеллект 2001',
    'Знамение',
    'Близкие контакты 2020',
    'Дюна',
    'Меняющий реальность',
    'Восхождение юпитер',
    'Последняя надежда',
    'Остров',
    'Гаттака',
    'Визитеры',
    'Люси',
    'Бесконечность 20 21',
    'Сериал мистер робот',
    'Мой король',
    'Молчание Доктора Ивенса',
    'Кассиопея',
    'Нефариус 🔥',
    'Главный герой 🔥✅',
    'Элизиум 🔥',
    'Интерстелар 🔥',
    'Ян стивенсон реинкарнация книга',
    'Звездные души ♥️',
    'Шестой день ✅',
    'Вспомнить все 💜',
    'Полный отсчет',
    'Самсара 2001',
    'Сериал 1923',
    'Вишвамитра менака даровал нам Гаятри мантру',
    'Калки .'
  ];
  return (
    <div className="knowledge-page">
      <div className="knowledge-title">ХД ФИЛЬМЫ</div>
      <button className="knowledge-back" onClick={onBack}>← Назад</button>
      <div className="knowledge-section">
        <ul className="knowledge-movie-list">
          {movies.map((movie, idx) => {
            if (idx === 0) {
              return (
                <li className="knowledge-movie-item knowledge-movie-link" key={idx}>
                  <a href="https://rutube.ru/video/3960bb3ce48e9397a8ebe3d2765e98c9/" target="_blank" rel="noopener noreferrer">{movie}</a>
                </li>
              );
            }
            if (idx === 1) {
              return (
                <li className="knowledge-movie-item knowledge-movie-link" key={idx}>
                  <a href="https://rutube.ru/video/e2c5b63da3a296331dd1d6de6055034d/" target="_blank" rel="noopener noreferrer">{movie}</a>
                </li>
              );
            }
            if (idx === 2) {
              return (
                <li className="knowledge-movie-item knowledge-movie-link" key={idx}>
                  <a href="https://rutube.ru/video/aa2718f0d136f7f2157a57e9a95ee1ce/" target="_blank" rel="noopener noreferrer">{movie}</a>
                </li>
              );
            }
            if (idx === 3) {
              return (
                <li className="knowledge-movie-item knowledge-movie-link" key={idx}>
                  <a href="https://www.youtube.com/watch?v=pXYvnGFqGXU" target="_blank" rel="noopener noreferrer">{movie}</a>
                </li>
              );
            }
            if (idx === 4) {
              return (
                <li className="knowledge-movie-item knowledge-movie-link" key={idx}>
                  <a href="https://www.youtube.com/watch?v=0P2dl8ZeBrk" target="_blank" rel="noopener noreferrer">{movie}</a>
                </li>
              );
            }
            if (idx === 5) {
              return (
                <li className="knowledge-movie-item knowledge-movie-link" key={idx}>
                  <a href="https://rutube.ru/video/023777d7a7a348b841755152ef3aee11/" target="_blank" rel="noopener noreferrer">{movie}</a>
                </li>
              );
            }
            if (idx === 6) {
              return (
                <li className="knowledge-movie-item knowledge-movie-link" key={idx}>
                  <a href="https://rutube.ru/video/1d6bd6281b49db4462fa06fc2b065fae/" target="_blank" rel="noopener noreferrer">{movie}</a>
                </li>
              );
            }
            if (idx === 7) {
              return (
                <li className="knowledge-movie-item knowledge-movie-link" key={idx}>
                  <a href="https://rutube.ru/video/c31cca9505a7c74ca185cd73e002f881/" target="_blank" rel="noopener noreferrer">{movie}</a>
                </li>
              );
            }
            if (idx === 8) {
              return (
                <li className="knowledge-movie-item knowledge-movie-link" key={idx}>
                  <a href="https://www.youtube.com/watch?v=FTQqlCwm39g" target="_blank" rel="noopener noreferrer">{movie}</a>
                </li>
              );
            }
            if (idx === 9) {
              return (
                <li className="knowledge-movie-item knowledge-movie-link" key={idx}>
                  <a href="https://vk.com/video-56028029_456249006" target="_blank" rel="noopener noreferrer">{movie}</a>
                </li>
              );
            }
            if (idx === 10) {
              return (
                <li className="knowledge-movie-item knowledge-movie-link" key={idx}>
                  <a href="https://rutube.ru/video/68c7c8637771e7e89957c3ecf0167635/" target="_blank" rel="noopener noreferrer">{movie}</a>
                </li>
              );
            }
            return (
              <li className="knowledge-movie-item" key={idx}>{movie}</li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function KnowledgeDocumentariesPage({ onBack }) {
  const documentaries = [
    'Путеводитель по Тибету',
    'Наркотики секреты манипуляции',
    'Итигэлов . Смерти нет',
    'Грязные тайны мира моды',
    'Человек обучивший мир йоге',
    'Купить сейчас торговый заговор',
    'Утерянное добродетель',
    'Питание на пути вымирания',
    'Алкоголь взгляд изнутри',
    'Однажды в лесу',
    'Легенда о ступе джарунхашор',
    'Атмосферное электричество',
    'Табачный дым',
    'Дыхание жизни',
    'Влияние алкоголя на общество',
    'Деньги с дымком',
    'Смерть как она есть',
    'Мантра путешествия со звуком',
    'Веган 2022',
    'Преодоление себя Аенгар',
    'Сияющая луна Дилго Кхьенце Ринпоче',
    'АЙЕНГАР легенда йоги',
    'Я никого не ем',
    'Минимализм сейчас время меньшего',
    'Человек и его ведение Свами шивананда',
    'Тёмная сторона жвачки',
    'Молочка',
    'Амазонка на гриле',
    'Еда как угроза',
    'Страшная наука порно',
    'Морской заговор',
    'Жизнь будды (2003)',
    'Разрушая границы',
    'Ловцы душ, секреты манипуляции',
    'Планета добра',
    'Социальное дилемма',
    'Поцелуй землю',
    'Как тает вечная мерзлота',
    'VEGAN 2020',
    'Как смартфоны убивают наше время',
    'Иллюминаты',
    'Переломный момент',
    'Правда о ГМО',
    'Никто ослепил меня',
    'Алкоголь незримый враг',
    'Веган 2018',
    'Рождённые свободными',
    'Ест тебя заживо',
    'Доминион',
    'Завтра',
    'Был ли Иисус буддийский монахом',
  ];
  return (
    <div className="knowledge-page">
      <div className="knowledge-title knowledge-title--small">Документальные фильмы</div>
      <button className="knowledge-back" onClick={onBack}>← Назад</button>
      <div className="knowledge-section">
        <ul className="knowledge-movie-list">
          {documentaries.map((doc, idx) => (
            <li className="knowledge-movie-item" key={idx}>{doc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedKnowledgeSection, setSelectedKnowledgeSection] = useState(null);

  // Загрузка темы из localStorage при запуске
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkTheme(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  // Переключение темы
  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    
    if (newTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  // Сброс выбранной секции при смене вкладки
  useEffect(() => {
    setSelectedSection(null);
  }, [activeTab]);

  const renderContent = () => {
    if (selectedSection === 'Шанкапракшалана') {
      return <Shankaprakshalana onBack={() => setSelectedSection(null)} />;
    }
    if (activeTab === 'knowledge' && selectedKnowledgeSection === 'hd-movies') {
      return <KnowledgeHDMoviesPage onBack={() => setSelectedKnowledgeSection(null)} />;
    }
    if (activeTab === 'knowledge' && selectedKnowledgeSection === 'documentaries') {
      return <KnowledgeDocumentariesPage onBack={() => setSelectedKnowledgeSection(null)} />;
    }
    switch (activeTab) {
      case 'home':
        return <MainSections onSectionClick={setSelectedSection} />;
      case 'knowledge':
        return (
          <div className="knowledge-page">
            <div className="knowledge-title">База знаний</div>
            <div className="knowledge-section knowledge-linkable" onClick={() => setSelectedKnowledgeSection('hd-movies')} style={{cursor:'pointer'}}>
              <h3>ХД фильмы раскрывающие сознание</h3>
              <p>Подборка фильмов в высоком качестве, расширяющих восприятие и способствующих развитию сознания.</p>
            </div>
            <div className="knowledge-section">
              <h3>Сериалы раскрывающие сознание</h3>
              <p>Список сериалов, которые помогают взглянуть на мир шире, стимулируют осознанность и развитие.</p>
            </div>
            <div className="knowledge-section knowledge-linkable" onClick={() => setSelectedKnowledgeSection('documentaries')} style={{cursor:'pointer'}}>
              <h3>Документальные фильмы</h3>
              <p>Подборка документальных фильмов о духовности, науке, природе и человеческом потенциале.</p>
            </div>
          </div>
        );
      case 'settings':
        return <Settings isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />;
      case 'account':
        return <TelegramLoginButton />;
      default:
        return <MainSections onSectionClick={setSelectedSection} />;
    }
  };

  return (
    <div className="app-root">
      <div className="mobile-frame">
        {activeTab === 'home' && !selectedSection && <Header />}
        {renderContent()}
        <BottomBar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}

export default App;
