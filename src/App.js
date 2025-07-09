import React, { useState, useEffect } from 'react';
import MainSections from './components/MainSections';
import BottomBar from './components/BottomBar';
import Header from './components/Header';

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
    {
      title: 'Шоу Трумана',
      embed: (
        <iframe
          width="720"
          height="405"
          src="https://rutube.ru/play/embed/e2c5b63da3a296331dd1d6de6055034d/"
          frameBorder="0"
          allow="clipboard-write; autoplay"
          webkitAllowFullScreen
          mozallowfullscreen
          allowFullScreen
          title="Шоу Трумана"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Сказка о потерянном времени',
      embed: (
        <iframe
          width="720"
          height="405"
          src="https://rutube.ru/play/embed/aa2718f0d136f7f2157a57e9a95ee1ce/"
          frameBorder="0"
          allow="clipboard-write; autoplay"
          webkitAllowFullScreen
          mozallowfullscreen
          allowFullScreen
          title="Сказка о потерянном времени"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Курукшетра (2021)',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=-78647366&id=456241690&hd=4&autoplay=1"
          width="720"
          height="405"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          title="Курукшетра (2021)"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Интервью с богом',
      embed: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/0P2dl8ZeBrk?si=U1ElFr0N_0gLSO9z"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Пробуждение',
      embed: (
        <iframe
          width="720"
          height="405"
          src="https://rutube.ru/play/embed/023777d7a7a348b841755152ef3aee11/"
          frameBorder="0"
          allow="clipboard-write; autoplay"
          webkitAllowFullScreen
          mozallowfullscreen
          allowFullScreen
          title="Пробуждение"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Хижина',
      embed: (
        <iframe
          width="720"
          height="405"
          src="https://rutube.ru/play/embed/1d6bd6281b49db4462fa06fc2b065fae/"
          frameBorder="0"
          allow="clipboard-write; autoplay"
          webkitAllowFullScreen
          mozallowfullscreen
          allowFullScreen
          title="Хижина"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Остров',
      embed: (
        <iframe
          width="720"
          height="405"
          src="https://rutube.ru/play/embed/c31cca9505a7c74ca185cd73e002f881/"
          frameBorder="0"
          allow="clipboard-write; autoplay"
          webkitAllowFullScreen
          mozallowfullscreen
          allowFullScreen
          title="Остров"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Волк и лев',
      embed: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/FTQqlCwm39g?si=julqo3if5jLt0oyW"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Посвященный',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=-56028029&id=456249006&hd=4&autoplay=1"
          width="720"
          height="405"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          title="Посвященный"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Падмавати',
      embed: (
        <iframe
          width="720"
          height="405"
          src="https://rutube.ru/play/embed/68c7c8637771e7e89957c3ecf0167635/"
          frameBorder="0"
          allow="clipboard-write; autoplay"
          webkitAllowFullScreen
          mozallowfullscreen
          allowFullScreen
          title="Падмавати"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Шафрановое сердце',
      embed: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/hk0vitEo2PA?si=iJgWt8L7rypHvX7J"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Почему Бодхидхарма ушел на восток',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=-14702321&id=456240304&hd=3&autoplay=1"
          width="720"
          height="405"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          title="Почему Бодхидхарма ушел на восток"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Феномен',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=-176294899&id=456244354&hd=4&autoplay=1"
          width="720"
          height="405"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          title="Феномен"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'День сурка',
      embed: (
        <iframe
          width="720"
          height="405"
          src="https://rutube.ru/play/embed/7137fdcf6c797b32d455cc512a02a23b/"
          frameBorder="0"
          allow="clipboard-write; autoplay"
          webkitAllowFullScreen
          mozallowfullscreen
          allowFullScreen
          title="День сурка"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Жизнь пи',
      embed: (
        <iframe
          width="720"
          height="405"
          src="https://rutube.ru/play/embed/e26ea59dbd368e41a385c33c96861c69/"
          frameBorder="0"
          allow="clipboard-write; autoplay"
          webkitAllowFullScreen
          mozallowfullscreen
          allowFullScreen
          title="Жизнь пи"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Сюань цзан',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=-168299641&id=456239226&hd=3&autoplay=1"
          width="720"
          height="405"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          title="Сюань цзан"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Экспресс Мумбаи - Варанаси (2016)',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=7514725&id=456239226&hd=4&autoplay=1"
          width="720"
          height="405"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          title="Экспресс Мумбаи - Варанаси (2016)"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    'Изгой(2017)',
    {
      title: 'Окча  (2017)',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=-220018529&id=456242302&hd=4&autoplay=1"
          width="720"
          height="405"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          title="Окча (2017)"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Человек который познал бесконечность (2015)',
      embed: (
        <iframe
          width="720"
          height="405"
          src="https://rutube.ru/play/embed/9be4c54ed5e8240f07e73f43b45cc1b5/"
          frameBorder="0"
          allow="clipboard-write; autoplay"
          webkitAllowFullScreen
          mozallowfullscreen
          allowFullScreen
          title="Человек который познал бесконечность (2015)"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Миларепа',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=-14702321&id=456239138&hd=3&autoplay=1"
          width="720"
          height="405"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          title="Миларепа"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Мирный воин(2006)',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=-212368293&id=456239095&hd=4&autoplay=1"
          width="720"
          height="405"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          title="Мирный воин(2006)"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Беседы с богом  (2006)',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=23789858&id=456241294&hd=4&autoplay=1"
          width="720"
          height="405"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          title="Беседы с богом (2006)"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Потерянные дети будды  (2006)',
      embed: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/V5cRFdKA5iA?si=U7s0EZeQwnJVdOzT"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Среди Белых облаков (2005)',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=-37785226&id=171444115&hd=3&autoplay=1"
          width="720"
          height="405"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          title="Среди Белых облаков (2005)"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Спринт(2015)',
      embed: (
        <iframe
          width="720"
          height="405"
          src="https://rutube.ru/play/embed/67c10b0da15c24aeaec4c87118f15565/"
          frameBorder="0"
          allow="clipboard-write; autoplay"
          webkitAllowFullScreen
          mozallowfullscreen
          allowFullScreen
          title="Спринт(2015)"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Когда солнца целует землю',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=-163374311&id=456239382&hd=3&autoplay=1"
          width="720"
          height="405"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          title="Когда солнца целует землю"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Манджи : человек горы',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=-55268627&id=456243353&hd=1&autoplay=1"
          width="640"
          height="360"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          title="Манджи : человек горы"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Семь лет в тибете',
      embed: (
        <iframe
          width="720"
          height="405"
          src="https://rutube.ru/play/embed/dac2d38a6feebd1c52a4b617bc232f13/"
          frameBorder="0"
          allow="clipboard-write; autoplay"
          webkitAllowFullScreen
          mozallowfullscreen
          allowFullScreen
          title="Семь лет в тибете"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Дзен',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=-37785226&id=171669738&hd=3&autoplay=1"
          width="720"
          height="405"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          title="Дзен"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Заплати другому (2000)',
      embed: (
        <iframe
          width="720"
          height="405"
          src="https://rutube.ru/play/embed/12fae6263b5938091c7036230686f83d/"
          frameBorder="0"
          allow="clipboard-write; autoplay"
          webkitAllowFullScreen
          mozallowfullscreen
          allowFullScreen
          title="Заплати другому (2000)"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Сила веры (2007)',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=-63596863&id=171247606&hd=3&autoplay=1"
          width="720"
          height="405"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          title="Сила веры (2007)"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Чайка по имени Джонатан Ливингстон (1973)',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=-37785226&id=171552076&hd=3&autoplay=1"
          width="1280"
          height="720"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          style={{maxWidth: '100%'}}
          title="Чайка по имени Джонатан Ливингстон (1973)"
        />
      ),
    },
    {
      title: 'Жизнь и эпоха Гаутамы будды',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=-52526415&id=456246535&hd=3&autoplay=1"
          width="1280"
          height="720"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          style={{maxWidth: '100%'}}
          title="Жизнь и эпоха Гаутамы будды"
        />
      ),
    },
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
      {!selectedMovie && (
        <>
          <div style={{textAlign: 'center', marginBottom: 12, color: '#7c5bb3', fontSize: '1rem', fontFamily: 'Comfortaa, cursive'}}>Для просмотра фильма кликните по названию</div>
          <button className="knowledge-back knowledge-back--small" onClick={onBack} style={{display: 'block', margin: '18px auto 0 auto'}}>← Назад</button>
        </>
      )}
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
                    <a href="https://rutube.ru/play/embed/9be4c54ed5e8240f07e73f43b45cc1b5/" target="_blank" rel="noopener noreferrer">{movie}</a>
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
                    <a href="https://rutube.ru/play/embed/67c10b0da15c24aeaec4c87118f15565/" target="_blank" rel="noopener noreferrer">{movie}</a>
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
                    <a href="https://rutube.ru/play/embed/dac2d38a6feebd1c52a4b617bc232f13/" target="_blank" rel="noopener noreferrer">{movie}</a>
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

function AboutDianaGuruPage({ onBack }) {
  return (
    <div className="knowledge-page">
      <div className="knowledge-title">Диана Гуру</div>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 18, margin: '28px 0 0 0'}}>
        <img src={require('./components/diana1.jpg')} alt="Диана 1" style={{maxWidth: 140, maxHeight: 180, borderRadius: 14, boxShadow: '0 2px 12px #e6e0f7', objectFit: 'cover'}} />
        <img src={require('./components/diana2.jpg')} alt="Диана 2" style={{maxWidth: 140, maxHeight: 180, borderRadius: 14, boxShadow: '0 2px 12px #e6e0f7', objectFit: 'cover'}} />
        <img src={require('./components/diana3.jpg')} alt="Диана 3" style={{maxWidth: 140, maxHeight: 180, borderRadius: 14, boxShadow: '0 2px 12px #e6e0f7', objectFit: 'cover'}} />
        <img src={require('./components/diana4.jpg')} alt="Диана 4" style={{maxWidth: 140, maxHeight: 180, borderRadius: 14, boxShadow: '0 2px 12px #e6e0f7', objectFit: 'cover'}} />
        <img src={require('./components/diana5.jpg')} alt="Диана 5" style={{maxWidth: 140, maxHeight: 180, borderRadius: 14, boxShadow: '0 2px 12px #e6e0f7', objectFit: 'cover'}} />
      </div>
      <button className="knowledge-back knowledge-back--small" onClick={onBack} style={{display: 'block', margin: '28px auto 0 auto'}}>← Назад</button>
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedKnowledgeSection, setSelectedKnowledgeSection] = useState(null);
  const [selectedBreathPractice, setSelectedBreathPractice] = useState(null);
  const [showDianaGuru, setShowDianaGuru] = useState(false);

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
      case 'about':
        if (showDianaGuru) {
          return <AboutDianaGuruPage onBack={() => setShowDianaGuru(false)} />;
        }
        return (
          <div className="knowledge-page">
            <div className="knowledge-title">О нас</div>
            <p style={{textAlign: 'center', color: '#111', margin: '18px 0 0 0', fontSize: '0.92rem', fontWeight: 500}}>
              Добро пожаловать в мир гармонии и духовного развития! Наше приложение создано для тех, кто стремится к внутреннему равновесию и познанию себя.
            </p>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 20, margin: '24px 0'}}>
              <img src={require('./components/about1.jpg')} alt="Йога 1" style={{maxWidth: 140, maxHeight: 180, borderRadius: 14, boxShadow: '0 2px 12px #e6e0f7', objectFit: 'cover', cursor: 'pointer'}} onClick={() => setShowDianaGuru(true)} />
              <img src={require('./components/about2.jpg')} alt="Йога 2" style={{maxWidth: 140, maxHeight: 180, borderRadius: 14, boxShadow: '0 2px 12px #e6e0f7', objectFit: 'cover'}} />
            </div>
            <div className="knowledge-section">
              <h4 style={{textAlign: 'center', fontWeight: 700, marginTop: 28}}>Что мы предлагаем:</h4>
              <ul style={{color: '#7c5bb3', lineHeight: 1.6}}>
                <li><strong>Йога практики</strong> — упражнения для тела и духа</li>
                <li><strong>Дыхательные техники</strong> — методы управления энергией</li>
                <li><strong>Медитация</strong> — путь к внутреннему покою</li>
                <li><strong>База знаний</strong> — фильмы и материалы для развития сознания</li>
                <li><strong>Лила</strong> — духовная игра самопознания</li>
                <li><strong>Шанкапракшалана</strong> — практика очищения</li>
              </ul>

              <h4 style={{textAlign: 'center', fontWeight: 700, marginTop: 32}}>Наша миссия</h4>
              <p style={{color: '#111', textAlign: 'center'}}>
                Помочь каждому найти свой путь к гармонии, здоровью и духовному росту через древние практики йоги и современные методы развития.
              </p>

              <div style={{marginTop: 20, padding: 15, background: 'rgba(124, 91, 179, 0.1)', borderRadius: 12, textAlign: 'center'}}>
                <p style={{margin: 0, fontStyle: 'italic', color: '#7c5bb3'}}>
                  "Путь к себе начинается с первого шага"
                </p>
              </div>
            </div>
          </div>
        );
      case 'account':
        return <TelegramLoginButton isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />;
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
