import React, { useState, useEffect } from 'react';
import MainSections from './components/MainSections';
import BottomBar from './components/BottomBar';
import Header from './components/Header';
import Settings from './components/Settings';
import TelegramLoginButton from './components/TelegramLoginButton';
import { Shankaprakshalana } from './components';
import './App.css';

function KnowledgeHDMoviesPage({ onBack }) {
  const [selectedMovie, setSelectedMovie] = React.useState(null);
  const movies = [
    {
      title: 'Прекрасная Зеленая',
      embed: (
        <iframe
          width="720"
          height="405"
          src="https://rutube.ru/play/embed/3960bb3ce48e9397a8ebe3d2765e98c9/"
          frameBorder="0"
          allow="clipboard-write; autoplay"
          webkitAllowFullScreen
          mozallowfullscreen
          allowFullScreen
          title="Прекрасная Зеленая"
          style={{maxWidth: '100%'}}
        />
      ),
    },
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
    'Нефариус',
    'Главный герой',
    'Элизиум',
    'Интерстелар',
    'Ян стивенсон реинкарнация книга',
    'Звездные души',
    'Шестой день',
    'Вспомнить все',
    'Полный отсчет',
    'Самсара 2001',
    'Сериал 1923',
    'Вишвамитра менака даровал нам Гаятри мантру',
    'Калки .'
  ];
  return (
    <div className="knowledge-page">
      <div className="knowledge-title">ХД ФИЛЬМЫ</div>
      <div style={{textAlign: 'center', marginBottom: 12, color: '#7c5bb3', fontSize: '1rem', fontFamily: 'Comfortaa, cursive'}}>Для просмотра фильма кликните по названию</div>
      <button className="knowledge-back knowledge-back--small" onClick={onBack} style={{display: 'block', margin: '18px auto 0 auto'}}>← Назад</button>
      <div className="knowledge-section">
        {selectedMovie ? (
          <div style={{textAlign: 'center'}}>
            <div style={{marginBottom: 16, fontSize: 22, color: '#7c5bb3'}}>{selectedMovie.title}</div>
            {selectedMovie.embed}
            <button className="knowledge-back knowledge-back--small" onClick={() => setSelectedMovie(null)} style={{display: 'block', margin: '18px auto 0 auto'}}>← К списку фильмов</button>
          </div>
        ) : (
          <ul className="knowledge-movie-list">
            {movies.map((movie, idx) => {
              if (typeof movie === 'object' && movie.title) {
                return (
                  <li
                    className="knowledge-movie-item"
                    key={idx}
                    style={{cursor: 'pointer'}}
                    onClick={() => setSelectedMovie(movie)}
                  >
                    {movie.title}
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
              if (movie === 'Шафрановое сердце') {
                return (
                  <li className="knowledge-movie-item knowledge-movie-link" key={idx}>
                    <a href="https://www.youtube.com/watch?v=hk0vitEo2PA" target="_blank" rel="noopener noreferrer">{movie}</a>
                  </li>
                );
              }
              if (movie === 'Почему Бодхидхарма ушел на восток') {
                return (
                  <li className="knowledge-movie-item knowledge-movie-link" key={idx}>
                    <a href="https://vk.com/video-14702321_456240304" target="_blank" rel="noopener noreferrer">{movie}</a>
                  </li>
                );
              }
              if (movie === 'Феномен') {
                return (
                  <li className="knowledge-movie-item knowledge-movie-link" key={idx}>
                    <a href="https://www.youtube.com/watch?v=bnuA2Wnk25Q" target="_blank" rel="noopener noreferrer">{movie}</a>
                  </li>
                );
              }
              if (movie === 'День сурка') {
                return (
                  <li className="knowledge-movie-item knowledge-movie-link" key={idx}>
                    <a href="https://rutube.ru/video/7137fdcf6c797b32d455cc512a02a23b/" target="_blank" rel="noopener noreferrer">{movie}</a>
                  </li>
                );
              }
              if (movie === 'Жизнь пи') {
                return (
                  <li className="knowledge-movie-item knowledge-movie-link" key={idx}>
                    <a href="https://rutube.ru/video/e26ea59dbd368e41a385c33c96861c69/" target="_blank" rel="noopener noreferrer">{movie}</a>
                  </li>
                );
              }
              if (movie === 'Сюань цзан') {
                return (
                  <li className="knowledge-movie-item knowledge-movie-link" key={idx}>
                    <a href="https://vk.com/video-168299641_456239226" target="_blank" rel="noopener noreferrer">{movie}</a>
                  </li>
                );
              }
              if (movie === 'Экспресс Мумбаи - Варанаси (2016)') {
                return (
                  <li className="knowledge-movie-item knowledge-movie-link" key={idx}>
                    <a href="https://vk.com/wall-17262100_56985" target="_blank" rel="noopener noreferrer">{movie}</a>
                  </li>
                );
              }
              if (movie === 'Окча  (2017)') {
                return (
                  <li className="knowledge-movie-item knowledge-movie-link" key={idx}>
                    <a href="https://vk.com/video-220018529_456242302" target="_blank" rel="noopener noreferrer">{movie}</a>
                  </li>
                );
              }
              if (movie === 'Человек который познал бесконечность (2015)') {
                return (
                  <li className="knowledge-movie-item knowledge-movie-link" key={idx}>
                    <a href="https://rutube.ru/video/9be4c54ed5e8240f07e73f43b45cc1b5/" target="_blank" rel="noopener noreferrer">{movie}</a>
                  </li>
                );
              }
              if (movie === 'Миларепа') {
                return (
                  <li className="knowledge-movie-item knowledge-movie-link" key={idx}>
                    <a href="https://vk.com/video-14702321_456239138" target="_blank" rel="noopener noreferrer">{movie}</a>
                  </li>
                );
              }
              if (movie === 'Мирный воин(2006)') {
                return (
                  <li className="knowledge-movie-item knowledge-movie-link" key={idx}>
                    <a href="https://vk.com/video-212368293_456239095" target="_blank" rel="noopener noreferrer">{movie}</a>
                  </li>
                );
              }
              if (movie === 'Беседы с богом  (2006)') {
                return (
                  <li className="knowledge-movie-item knowledge-movie-link" key={idx}>
                    <a href="https://vk.com/video23789858_456241294" target="_blank" rel="noopener noreferrer">{movie}</a>
                  </li>
                );
              }
              if (movie === 'Потерянные дети будды  (2006)') {
                return (
                  <li className="knowledge-movie-item knowledge-movie-link" key={idx}>
                    <a href="https://www.youtube.com/watch?v=V5cRFdKA5iA" target="_blank" rel="noopener noreferrer">{movie}</a>
                  </li>
                );
              }
              if (movie === 'Среди Белых облаков (2005)') {
                return (
                  <li className="knowledge-movie-item knowledge-movie-link" key={idx}>
                    <a href="https://vk.com/video-37785226_171444115" target="_blank" rel="noopener noreferrer">{movie}</a>
                  </li>
                );
              }
              if (movie === 'Спринт(2015)') {
                return (
                  <li className="knowledge-movie-item knowledge-movie-link" key={idx}>
                    <a href="https://rutube.ru/video/67c10b0da15c24aeaec4c87118f15565/" target="_blank" rel="noopener noreferrer">{movie}</a>
                  </li>
                );
              }
              if (movie === 'Когда солнца целует землю') {
                return (
                  <li className="knowledge-movie-item knowledge-movie-link" key={idx}>
                    <a href="https://vk.com/video-163374311_456239382" target="_blank" rel="noopener noreferrer">{movie}</a>
                  </li>
                );
              }
              if (movie === 'Манджи : человек горы') {
                return (
                  <li className="knowledge-movie-item knowledge-movie-link" key={idx}>
                    <a href="https://vk.com/video-55268627_456243353" target="_blank" rel="noopener noreferrer">{movie}</a>
                  </li>
                );
              }
              if (movie === 'Семь лет в тибете') {
                return (
                  <li className="knowledge-movie-item knowledge-movie-link" key={idx}>
                    <a href="https://rutube.ru/video/dac2d38a6feebd1c52a4b617bc232f13/" target="_blank" rel="noopener noreferrer">{movie}</a>
                  </li>
                );
              }
              if (movie === 'Дзен') {
                return (
                  <li className="knowledge-movie-item knowledge-movie-link" key={idx}>
                    <a href="https://vk.com/video-37785226_171669738" target="_blank" rel="noopener noreferrer">{movie}</a>
                  </li>
                );
              }
              return (
                <li className="knowledge-movie-item" key={idx}>{movie}</li>
              );
            })}
          </ul>
        )}
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
      <div style={{textAlign: 'center', marginBottom: 12, color: '#7c5bb3', fontSize: '1rem', fontFamily: 'Comfortaa, cursive'}}>Для просмотра фильма кликните по названию</div>
      <button className="knowledge-back knowledge-back--small" onClick={onBack} style={{display: 'block', margin: '18px auto 0 auto'}}>← Назад</button>
      <div className="knowledge-section">
        <ul className="knowledge-movie-list">
          {documentaries.map((doc, idx) => (
            <li className="knowledge-movie-item" key={idx}>{doc}</li>
          ))}
        </ul>
        <button className="knowledge-back knowledge-back--small" onClick={onBack} style={{display: 'block', margin: '18px auto 0 auto'}}>← Назад</button>
      </div>
    </div>
  );
}

function KnowledgeSeriesPage({ onBack }) {
  const series = [
    'Сита и Рама',
    'Махабхарата',
    'Бог Богов Махадев',
    'Маха Кали',
    'Вишвамитра',
    'Ведические истории',
    'Вишну Пурана',
    'Шива Махапурана',
    'Карна',
    'История одной борьбы',
    'Хануман',
    'Мультфильм Аватар',
    'Будда',
  ];
  return (
    <div className="knowledge-page">
      <div className="knowledge-title">Сериалы</div>
      <div style={{textAlign: 'center', marginBottom: 12, color: '#7c5bb3', fontSize: '1rem', fontFamily: 'Comfortaa, cursive'}}>Для просмотра сериала кликните по названию</div>
      <button className="knowledge-back knowledge-back--small" onClick={onBack} style={{display: 'block', margin: '18px auto 0 auto'}}>← Назад</button>
      <div className="knowledge-section">
        <ul className="knowledge-movie-list">
          {series.map((item, idx) => (
            <li className="knowledge-movie-item" key={idx}>{item}</li>
          ))}
        </ul>
        <button className="knowledge-back knowledge-back--small" onClick={onBack} style={{display: 'block', margin: '18px auto 0 auto'}}>← Назад</button>
      </div>
    </div>
  );
}

function BoxBreathingAnimation() {
  const phases = [
    { label: 'Вдох', color: '#7c5bb3' },
    { label: 'Задержка', color: '#ff9a56' },
    { label: 'Выдох', color: '#35b6ff' },
    { label: 'Задержка', color: '#ff9a56' },
  ];
  const [phase, setPhase] = useState(0);
  const [timer, setTimer] = useState(4);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let req;
    let start = null;
    let stopped = false;
    setProgress(0);
    setTimer(4);
    function animate(ts) {
      if (!start) start = ts;
      const elapsed = (ts - start) / 1000;
      if (!stopped) setProgress(Math.min(elapsed / 4, 1));
      if (elapsed < 4 && !stopped) {
        req = requestAnimationFrame(animate);
      }
    }
    req = requestAnimationFrame(animate);
    const timerTimeout = setTimeout(() => {
      setPhase((p) => (p + 1) % 4);
    }, 4000);
    let timerInt = setInterval(() => {
      setTimer((t) => (t > 1 ? t - 1 : 4));
    }, 1000);
    return () => {
      stopped = true;
      cancelAnimationFrame(req);
      clearTimeout(timerTimeout);
      clearInterval(timerInt);
    };
  }, [phase]);

  const size = 220;
  const offset = 18;
  const lines = [
    [offset, offset, size - offset, offset],
    [size - offset, offset, size - offset, size - offset],
    [size - offset, size - offset, offset, size - offset],
    [offset, size - offset, offset, offset],
  ];

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 32}}>
      <svg width={size} height={size} style={{marginBottom: 32, display: 'block'}}>
        {lines.map(([x1, y1, x2, y2], idx) => {
          const isActive = phase === idx;
          const total = Math.sqrt((x2-x1)**2 + (y2-y1)**2);
          const dash = isActive ? progress * total : phase > idx ? total : 0;
          return (
            <line
              key={idx}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke={isActive ? phases[phase].color : '#ede3fa'}
              strokeWidth={12}
              strokeLinecap="round"
              strokeDasharray={total}
              strokeDashoffset={total - dash}
              style={{transition: isActive ? 'stroke 0.2s' : 'none'}}
            />
          );
        })}
      </svg>
      <div style={{fontFamily: 'Comfortaa, cursive', fontWeight: 600, fontSize: '1.25rem', color: '#7c5bb3', marginBottom: 8}}>
        {phases[phase].label}
      </div>
      <div style={{fontSize: '2.2rem', fontWeight: 700, color: '#560591', marginBottom: 8}}>{timer}</div>
    </div>
  );
}

function BreathSquarePage({ onBack }) {
  return (
    <div className="knowledge-page">
      <div className="knowledge-title">Дыхание по квадрату</div>
      <BoxBreathingAnimation />
      <div style={{fontFamily: 'Comfortaa, cursive', color: '#7c5bb3', fontSize: '0.82rem', margin: '18px 0 0 0', textAlign: 'center', lineHeight: 1.5}}>
        <b>Как выполнять:</b> Представьте, что вы дышите по сторонам квадрата — каждая сторона символизирует одну фазу дыхания. Каждая фаза длится одинаковое количество времени, например, по 4 секунды:
        <ul style={{textAlign: 'left', margin: '8px auto 8px 18px', maxWidth: 400, color: '#7c5bb3', fontSize: '0.82rem'}}>
          <li><b>Вдох</b> — 4 секунды (спокойно вдыхаете носом).</li>
          <li><b>Задержка дыхания</b> — 4 секунды (не дышите после вдоха).</li>
          <li><b>Выдох</b> — 4 секунды (медленно выдыхаете ртом).</li>
          <li><b>Задержка дыхания</b> — 4 секунды (не дышите после выдоха).</li>
        </ul>
        Затем цикл повторяется.
      </div>
      <button className="knowledge-back knowledge-back--small" onClick={onBack} style={{display: 'block', margin: '18px auto 0 auto'}}>← Назад</button>
    </div>
  );
}

function TriangleBreathingAnimation() {
  const phases = [
    { label: 'Вдох', color: '#7c5bb3' },
    { label: 'Задержка', color: '#ff9a56' },
    { label: 'Выдох', color: '#35b6ff' },
  ];
  const [phase, setPhase] = useState(0);
  const [timer, setTimer] = useState(4);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let req;
    let start = null;
    let stopped = false;
    setProgress(0);
    setTimer(4);
    function animate(ts) {
      if (!start) start = ts;
      const elapsed = (ts - start) / 1000;
      if (!stopped) setProgress(Math.min(elapsed / 4, 1));
      if (elapsed < 4 && !stopped) {
        req = requestAnimationFrame(animate);
      }
    }
    req = requestAnimationFrame(animate);
    const timerTimeout = setTimeout(() => {
      setPhase((p) => (p + 1) % 3);
    }, 4000);
    let timerInt = setInterval(() => {
      setTimer((t) => (t > 1 ? t - 1 : 4));
    }, 1000);
    return () => {
      stopped = true;
      cancelAnimationFrame(req);
      clearTimeout(timerTimeout);
      clearInterval(timerInt);
    };
  }, [phase]);

  const size = 240;
  const r = 90;
  const cx = size / 2;
  const cy = size / 2 + 18;
  // Вершины треугольника
  const points = [
    [cx, cy - r],
    [cx - r * Math.sin(Math.PI / 3), cy + r / 2],
    [cx + r * Math.sin(Math.PI / 3), cy + r / 2],
  ];
  const lines = [
    [...points[0], ...points[1]],
    [...points[1], ...points[2]],
    [...points[2], ...points[0]],
  ];

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 32}}>
      <svg width={size} height={size} style={{marginBottom: 32, display: 'block'}}>
        {lines.map(([x1, y1, x2, y2], idx) => {
          const isActive = phase === idx;
          const total = Math.sqrt((x2-x1)**2 + (y2-y1)**2);
          const dash = isActive ? progress * total : phase > idx ? total : 0;
          return (
            <line
              key={idx}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke={isActive ? phases[phase].color : '#ede3fa'}
              strokeWidth={12}
              strokeLinecap="round"
              strokeDasharray={total}
              strokeDashoffset={total - dash}
              style={{transition: isActive ? 'stroke 0.2s' : 'none'}}
            />
          );
        })}
      </svg>
      <div style={{fontFamily: 'Comfortaa, cursive', fontWeight: 600, fontSize: '1.25rem', color: '#7c5bb3', marginBottom: 8}}>
        {phases[phase].label}
      </div>
      <div style={{fontSize: '2.2rem', fontWeight: 700, color: '#560591', marginBottom: 8}}>{timer}</div>
    </div>
  );
}

function BreathTrianglePage({ onBack }) {
  return (
    <div className="knowledge-page">
      <div className="knowledge-title triangle-title">Дыхание по треугольнику</div>
      <TriangleBreathingAnimation />
      <div style={{fontFamily: 'Comfortaa, cursive', color: '#7c5bb3', fontSize: '0.82rem', margin: '18px 0 0 0', textAlign: 'center', lineHeight: 1.5}}>
        <b>Формат:</b> вдох → задержка → выдох<br/>
        <div style={{textAlign: 'center'}}>
          <ul style={{display: 'inline-block', textAlign: 'left', margin: '8px auto 8px auto', maxWidth: 400, color: '#7c5bb3', fontSize: '0.82rem'}}>
            <li><b>Вдох</b> — 4 секунды</li>
            <li><b>Задержка</b> — 4 секунды</li>
            <li><b>Выдох</b> — 4 секунды</li>
          </ul>
        </div>
        Используется для медитации, стабилизации эмоций.<br/>
        Затем цикл повторяется.
      </div>
      <button className="knowledge-back knowledge-back--small" onClick={onBack} style={{display: 'block', margin: '18px auto 0 auto'}}>← Назад</button>
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedKnowledgeSection, setSelectedKnowledgeSection] = useState(null);
  const [selectedBreathPractice, setSelectedBreathPractice] = useState(null);

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
    setSelectedBreathPractice(null);
  }, [activeTab]);

  const renderContent = () => {
    if (selectedSection === 'Шанкапракшалана') {
      return <Shankaprakshalana onBack={() => setSelectedSection(null)} />;
    }
    if (selectedSection === 'Дыхание') {
      if (selectedBreathPractice === 'breath-square') {
        return <BreathSquarePage onBack={() => setSelectedBreathPractice(null)} />;
      }
      if (selectedBreathPractice === 'breath-triangle') {
        return <BreathTrianglePage onBack={() => setSelectedBreathPractice(null)} />;
      }
      return (
        <div className="knowledge-page">
          <div className="knowledge-title">Дыхательные практики</div>
          <div className="breath-practice-row">
            <div className="breath-square-icon" onClick={() => setSelectedBreathPractice('breath-square')}>
              <span>Дыхание по квадрату</span>
            </div>
            <div className="breath-square-icon" onClick={() => setSelectedBreathPractice('breath-triangle')}>
              <span>Дыхание по треугольнику</span>
            </div>
          </div>
        </div>
      );
    }
    if (activeTab === 'knowledge' && selectedKnowledgeSection === 'hd-movies') {
      return <KnowledgeHDMoviesPage onBack={() => setSelectedKnowledgeSection(null)} />;
    }
    if (activeTab === 'knowledge' && selectedKnowledgeSection === 'documentaries') {
      return <KnowledgeDocumentariesPage onBack={() => setSelectedKnowledgeSection(null)} />;
    }
    if (activeTab === 'knowledge' && selectedKnowledgeSection === 'series') {
      return <KnowledgeSeriesPage onBack={() => setSelectedKnowledgeSection(null)} />;
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
            <div className="knowledge-section knowledge-linkable" onClick={() => setSelectedKnowledgeSection('series')} style={{cursor:'pointer'}}>
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
