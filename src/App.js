import React, { useState, useEffect } from 'react';
import MainSections from './components/MainSections';
import BottomBar from './components/BottomBar';
import Header from './components/Header';

import TelegramLoginButton from './components/TelegramLoginButton';
import { Shankaprakshalana } from './components';
import MeditationPage from './components/MeditationPage';
import PhotoIcons from './components/PhotoIcons';
import ChakraPage from './components/ChakraPage';
import './App.css';
import telegramIcon from './components/telegram.svg';
import about2 from './components/about2.jpg';

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
          mozAllowFullScreen
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
          mozAllowFullScreen
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
          mozAllowFullScreen
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
          mozAllowFullScreen
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
          mozAllowFullScreen
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
          mozAllowFullScreen
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
          mozAllowFullScreen
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
          mozAllowFullScreen
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
          mozAllowFullScreen
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
          mozAllowFullScreen
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
          mozAllowFullScreen
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
          mozAllowFullScreen
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
          mozAllowFullScreen
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
    {
      title: 'Гималаи (1999)',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=-3983541&id=456239599&hd=4&autoplay=1"
          width="720"
          height="405"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          title="Гималаи (1999)"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Окраина (1998)',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=-216155816&id=456239798&hd=4&autoplay=1"
          width="720"
          height="405"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          title="Окраина (1998)"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Гостья (2013)',
      embed: (
        <iframe
          width="720"
          height="405"
          src="https://rutube.ru/play/embed/adfb0aa65fbc1387b1b1a382e596f12f/"
          frameBorder="0"
          allow="clipboard-write; autoplay"
          webkitAllowFullScreen
          mozAllowFullScreen
          allowFullScreen
          title="Гостья (2013)"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Мадхвачарья',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=-78647366&id=456240669&hd=3&autoplay=1"
          width="1280"
          height="720"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          title="Мадхвачарья"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Пудра (1995)',
      embed: (
        <iframe
          width="720"
          height="405"
          src="https://rutube.ru/play/embed/97e28eabc2a6f0134d31ff13e34a624c/"
          frameBorder="0"
          allow="clipboard-write; autoplay"
          webkitAllowFullScreen
          mozAllowFullScreen
          allowFullScreen
          title="Пудра (1995)"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Покрытая тайной: так что же мы знаем (2004)',
      embed: (
        <iframe
          width="720"
          height="405"
          src="https://rutube.ru/play/embed/a25ef7ac4ebde773d6c042070a50bad8/"
          frameBorder="0"
          allow="clipboard-write; autoplay"
          webkitAllowFullScreen
          mozAllowFullScreen
          allowFullScreen
          title="Покрытая тайной: так что же мы знаем (2004)"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Конфуций',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=-213744&id=170137731&hd=3&autoplay=1"
          width="1280"
          height="720"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          title="Конфуций"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Наш очаг, астральный город (2010)',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=4642538&id=456239025&hd=1&autoplay=1"
          width="640"
          height="360"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          title="Наш очаг, астральный город (2010)"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Ганди (1982)',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=-34057964&id=456239900&hd=3&autoplay=1"
          width="1280"
          height="720"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          title="Ганди (1982)"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Чужие среди нас (1988)',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=-56028029&id=456251125&hd=4&autoplay=1"
          width="1920"
          height="1080"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          title="Чужие среди нас (1988)"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Куда приводят мечты',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=-180700900&id=456239546&hd=4&autoplay=1"
          width="1920"
          height="1080"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          title="Куда приводят мечты"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Мастер дзен Бодхидхарма',
      embed: (
        <iframe
          width="720"
          height="405"
          src="https://rutube.ru/play/embed/ca12aaa11ec16031efed53e9768176a8/"
          frameBorder="0"
          allow="clipboard-write; autoplay"
          webkitAllowFullScreen
          mozAllowFullScreen
          allowFullScreen
          title="Мастер дзен Бодхидхарма"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Ангулимала (2003)',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=-37785226&id=171732976&hd=3&autoplay=1"
          width="1280"
          height="720"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          title="Ангулимала (2003)"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Ситхартха на пути к истине (1972)',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=-52526415&id=456240642&hd=2&autoplay=1"
          width="853"
          height="480"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          title="Ситхартха на пути к истине (1972)"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Поле битвы Земля (2000)',
      embed: (
        <iframe
          width="720"
          height="405"
          src="https://rutube.ru/play/embed/9065d715c1bc396cb8e56ef9e228aa41/"
          frameBorder="0"
          allow="clipboard-write; autoplay"
          webkitAllowFullScreen
          mozAllowFullScreen
          allowFullScreen
          title="Поле битвы Земля (2000)"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Самсара (2001)',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=-133093208&id=456239047&hd=1&autoplay=1"
          width="640"
          height="360"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          title="Самсара (2001)"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Излечить страх (жизнь необыкновенного святого луки )',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=-107124334&id=456240476&hd=3&autoplay=1"
          width="1280"
          height="720"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          title="Излечить страх (жизнь необыкновенного святого луки )"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Отель Меринолд лучший из экзотических (2011)',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=-220018529&id=456245252&hd=4&autoplay=1"
          width="1920"
          height="1080"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          title="Отель Меринолд лучший из экзотических (2011)"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Мальчик который обуздал ветер',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=-76914461&id=456245216&hd=3&autoplay=1"
          width="1280"
          height="720"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          title="Мальчик который обуздал ветер"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Искусственный интеллект 2001',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=-110645251&id=456240691&hd=4&autoplay=1"
          width="1920"
          height="1080"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          title="Искусственный интеллект 2001"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Знамение',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=-176294899&id=456241805&hd=4&autoplay=1"
          width="1920"
          height="1080"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          title="Знамение"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Близкие контакты 2020',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=-35615587&id=456248413&hd=3&autoplay=1"
          width="1280"
          height="720"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          title="Близкие контакты 2020"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Дюна',
      embed: (
        <iframe
          width="720"
          height="405"
          src="https://rutube.ru/play/embed/1179fde2c8dd1ca96973f7e6d20924f3/"
          frameBorder="0"
          allow="clipboard-write; autoplay"
          webkitAllowFullScreen
          mozAllowFullScreen
          allowFullScreen
          title="Дюна"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Меняющий реальность',
      embed: (
        <iframe
          width="720"
          height="405"
          src="https://rutube.ru/play/embed/6d75008b0cbe46a733e03845197bc602/"
          frameBorder="0"
          allow="clipboard-write; autoplay"
          webkitAllowFullScreen
          mozAllowFullScreen
          allowFullScreen
          title="Меняющий реальность"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Восхождение юпитер',
      embed: (
        <iframe
          width="720"
          height="405"
          src="https://rutube.ru/play/embed/0c7be31cda45494da907115ecd1b8e07/"
          frameBorder="0"
          allow="clipboard-write; autoplay"
          webkitAllowFullScreen
          mozAllowFullScreen
          allowFullScreen
          title="Восхождение юпитер"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Последняя надежда',
      embed: (
        <iframe
          width="720"
          height="405"
          src="https://rutube.ru/play/embed/28cb47afacdf701809e7216d26f9e5ea/"
          frameBorder="0"
          allow="clipboard-write; autoplay"
          webkitAllowFullScreen
          mozAllowFullScreen
          allowFullScreen
          title="Последняя надежда"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Гаттака',
      embed: (
        <iframe
          width="720"
          height="405"
          src="https://rutube.ru/play/embed/704cb06ebd6b22fc334758da4516f0e6/"
          frameBorder="0"
          allow="clipboard-write; autoplay"
          webkitAllowFullScreen
          mozAllowFullScreen
          allowFullScreen
          title="Гаттака"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Люси',
      embed: (
        <iframe
          width="720"
          height="405"
          src="https://rutube.ru/play/embed/9f6aaeaa583881300101aa504ba2e413/"
          frameBorder="0"
          allow="clipboard-write; autoplay"
          webkitAllowFullScreen
          mozAllowFullScreen
          allowFullScreen
          title="Люси"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Бесконечность 2021',
      embed: (
        <iframe
          width="720"
          height="405"
          src="https://rutube.ru/play/embed/8dc31ae985fc043de3891e585e80c732/"
          frameBorder="0"
          allow="clipboard-write; autoplay"
          webkitAllowFullScreen
          mozAllowFullScreen
          allowFullScreen
          title="Бесконечность 2021"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Мой король',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=-220018529&id=456245091&hd=4&autoplay=1"
          width="1920"
          height="1080"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          title="Мой король"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Молчание Доктора Ивенса',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=-37492055&id=456256302&autoplay=1"
          width="426"
          height="240"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          title="Молчание Доктора Ивенса"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Кассиопея',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=-37492055&id=456253677&hd=4&autoplay=1"
          width="1920"
          height="1080"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          title="Кассиопея"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Нефариус',
      embed: (
        <iframe
          src="https://vk.com/video_ext.php?oid=533395491&id=456239232&hd=3&autoplay=1"
          width="1280"
          height="720"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          title="Нефариус"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    {
      title: 'Главный герой',
      embed: (
        <iframe
          width="720"
          height="405"
          src="https://rutube.ru/play/embed/31dac5e2fc4c6ed319109b34a590a664/"
          frameBorder="0"
          allow="clipboard-write; autoplay"
          webkitAllowFullScreen
          mozAllowFullScreen
          allowFullScreen
          title="Главный герой"
          style={{maxWidth: '100%'}}
        />
      ),
    },
    'Элизиум',
    'Интерстелар',
    'Ян стивенсон реинкарнация книга',
    'Звездные души',
    'Шестой день',
    'Вспомнить все',
    'Полный отсчет',
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
          <button className="knowledge-back" onClick={onBack} style={{display: 'block', margin: '18px auto 0 auto'}}>← Назад</button>
        </>
      )}
      <div className="knowledge-section">
        {selectedMovie ? (
          <div style={{textAlign: 'center'}}>
            <div style={{marginBottom: 16, fontSize: 22, color: '#7c5bb3'}}>{selectedMovie.title}</div>
            {selectedMovie.embed}
            <button className="knowledge-back" onClick={() => setSelectedMovie(null)} style={{display: 'block', margin: '18px auto 0 auto'}}>← К списку фильмов</button>
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
      <button className="knowledge-back" onClick={onBack} style={{display: 'block', margin: '18px auto 0 auto'}}>← Назад</button>
      <div className="knowledge-section">
        <ul className="knowledge-movie-list">
          {documentaries.map((doc, idx) => (
            <li className="knowledge-movie-item" key={idx}>{doc}</li>
          ))}
        </ul>
        <button className="knowledge-back" onClick={onBack} style={{display: 'block', margin: '18px auto 0 auto'}}>← Назад</button>
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
      <button className="knowledge-back" onClick={onBack} style={{display: 'block', margin: '18px auto 0 auto'}}>← Назад</button>
      <div className="knowledge-section">
        <ul className="knowledge-movie-list">
          {series.map((item, idx) => (
            <li className="knowledge-movie-item" key={idx}>{item}</li>
          ))}
        </ul>
        <button className="knowledge-back" onClick={onBack} style={{display: 'block', margin: '18px auto 0 auto'}}>← Назад</button>
      </div>
    </div>
  );
}

function SacredMusicPage({ onBack }) {
  return (
    <div className="knowledge-page">
      <div className="knowledge-title">Сакральная музыка</div>
      <div style={{textAlign: 'center', color: '#7c5bb3', fontSize: '1.05rem', margin: '32px 0 0 0', fontFamily: 'Comfortaa, cursive'}}>
        Здесь будет раздел с подборкой сакральной музыки для практик, медитаций и вдохновения.
      </div>
      <button className="knowledge-back" onClick={onBack} style={{display: 'block', margin: '38px auto 0 auto'}}>← Назад</button>
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
      <button className="knowledge-back" onClick={onBack} style={{display: 'block', margin: '18px auto 0 auto'}}>← Назад</button>
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
      <button className="knowledge-back" onClick={onBack} style={{display: 'block', margin: '18px auto 0 auto'}}>← Назад</button>
    </div>
  );
}

function NailsPage({ onBack, setShowNailsPairPractice }) {
  return (
    <div className="knowledge-page" style={{marginTop: -24}}>
      <button className="knowledge-back" onClick={onBack} style={{display: 'block', margin: '18px auto 0 auto'}}>← Назад</button>
      <div style={{
        textAlign: 'center',
        fontFamily: 'Comfortaa, cursive',
        color: '#111',
        fontSize: '0.95rem',
        fontWeight: 500,
        margin: '18px 0 0 0',
        lineHeight: 1.5,
        background: '#e0e0e2',
        borderRadius: 14,
        padding: '16px 8px 14px 8px'
      }}>
        🧿 Доски Садху — путь к себе настоящему<br/>
        Это не про боль. Это про силу.
      </div>
      <div style={{
        textAlign: 'center',
        fontFamily: 'Comfortaa, cursive',
        color: '#111',
        fontSize: '0.95rem',
        fontWeight: 500,
        margin: '18px 0 0 0',
        lineHeight: 1.5,
        background: '#ededf0',
        borderRadius: 14,
        padding: '16px 8px 14px 8px'
      }}>
        🔥 Стояние на гвоздях — древняя мощная практика, пробуждающая тело, ум и дух.<br/>
        Это момент встречи с собой — без масок, без суеты, без привычных реакций.<br/>
        Остаётся только дыхание, осознанность… и ты настоящий.
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginTop: 24, marginBottom: 24 }}>
        <img src="/nails1.jpg" alt="Гвоздестояние 1" style={{ maxWidth: 150, borderRadius: 12 }} />
        <img src="/nails2.jpg" alt="Гвоздестояние 2" style={{ maxWidth: 150, borderRadius: 12 }} />
        <img src="/nails3.jpg" alt="Гвоздестояние 3" style={{ maxWidth: 150, borderRadius: 12 }} />
        <img src="/nails4.jpg" alt="Гвоздестояние 4" style={{ maxWidth: 150, borderRadius: 12 }} />
      </div>
      <div style={{
        textAlign: 'center',
        fontFamily: 'Comfortaa, cursive',
        color: '#111',
        fontSize: '0.92rem',
        fontWeight: 500,
        margin: '0 0 18px 0',
        lineHeight: 1.5,
        background: 'linear-gradient(135deg, #b484f7 0%, #7c5bb3 100%)',
        borderRadius: 16,
        padding: '18px 10px 16px 10px',
        boxShadow: '0 2px 12px 0 rgba(124,91,179,0.08)'
      }}>
        <b style={{color:'#fff'}}>Что даёт практика:</b><br/>
        <span style={{color:'#fff'}}>• Проработка внутренних травм, блоков, страхов <br/>
        • Очищение ума от тревог, суеты и зацикленных мыслей<br/>
        • Глубокое телесное заземление и возвращение в момент «здесь и сейчас»<br/>
        • Формирование новых нейронных связей<br/>
        • Прорыв через страх, боль, сомнение — в силу, свободу и ресурс<br/>
        • Запуск процессов исцеления, перезагрузки и внутреннего роста<br/></span>
        <br/>
        <span style={{color:'#fff'}}>Ты встаёшь — и весь мир замирает.<br/>
        Открывается что-то древнее. Настоящее. Твоё.</span>
      </div>
      <div style={{fontFamily: 'Comfortaa, cursive', fontSize: '1.55rem', fontWeight: 600, textAlign: 'center', color: '#7c5bb3', marginBottom: 18, marginTop: 0}}>Отзывы</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, justifyContent: 'center', marginBottom: 24 }}>
        <img src="/review1.jpg" alt="Отзыв 1" style={{ width: '100%', maxWidth: 170, borderRadius: 12, objectFit: 'cover', justifySelf: 'center' }} />
        <img src="/review2.jpg" alt="Отзыв 2" style={{ width: '100%', maxWidth: 170, borderRadius: 12, objectFit: 'cover', justifySelf: 'center' }} />
        <img src="/review3.jpg" alt="Отзыв 3" style={{ width: '100%', maxWidth: 170, borderRadius: 12, objectFit: 'cover', justifySelf: 'center' }} />
        <img src="/review4.jpg" alt="Отзыв 4" style={{ width: '100%', maxWidth: 170, borderRadius: 12, objectFit: 'cover', justifySelf: 'center' }} />
        <img src="/review5.jpg" alt="Отзыв 5" style={{ width: '100%', maxWidth: 170, borderRadius: 12, objectFit: 'cover', justifySelf: 'center' }} />
        <img src="/review6.jpg" alt="Отзыв 6" style={{ width: '100%', maxWidth: 170, borderRadius: 12, objectFit: 'cover', justifySelf: 'center' }} />
      </div>
      <div style={{
        textAlign: 'center',
        fontFamily: 'Comfortaa, cursive',
        color: '#111',
        fontSize: '0.92rem',
        fontWeight: 500,
        margin: '0 0 24px 0',
        lineHeight: 1.5,
        background: '#ededf0',
        borderRadius: 14,
        padding: '16px 8px 14px 8px'
      }}>
        • Стояние на гвоздях — под чутким сопровождением<br/>
        • В безопасном пространстве<br/>
        • В индивидуальном формате или мини-группе<br/>
        • 2-3 часа работы с глубоким телесным погружением<br/>
        • Работа с намерением по авторской методике, медитация, легкая разминка.<br/>
        • Онлайн (с твоими досками) или офлайн (с моими)
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '0 0 8px 0' }}>
        <button
          type="button"
          style={{
            display: 'inline-block',
            padding: '10px 18px',
            background: 'linear-gradient(90deg, #b484f7 0%, #7c5bb3 100%)',
            color: '#fff',
            fontFamily: 'Comfortaa, cursive',
            fontWeight: 700,
            fontSize: '0.98rem',
            borderRadius: 14,
            border: '3px solid #fff', // добавлено для белого ободка
            boxShadow: '0 2px 12px 0 rgba(124,91,179,0.13)',
            textDecoration: 'none',
            letterSpacing: '0.01em',
            transition: 'background 0.2s, box-shadow 0.2s, transform 0.1s',
            textAlign: 'center',
            marginBottom: 2,
            minWidth: 160,
            width: '100%',
            maxWidth: 260,
            cursor: 'pointer',
          }}
          onClick={() => setShowNailsPairPractice(true)}
        >
          Парная практика
        </button>
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '0 0 0 0' }}>
        <a
          href="https://t.me/disha070"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '10px 18px',
            background: 'linear-gradient(90deg, #b484f7 0%, #7c5bb3 100%)',
            color: '#fff',
            fontFamily: 'Comfortaa, cursive',
            fontWeight: 700,
            fontSize: '0.98rem',
            borderRadius: 14,
            border: '3px solid #fff', // добавлено для белого ободка
            boxShadow: '0 2px 12px 0 rgba(124,91,179,0.13)',
            textDecoration: 'none',
            letterSpacing: '0.01em',
            transition: 'background 0.2s, box-shadow 0.2s, transform 0.1s',
            textAlign: 'center',
            marginBottom: 0,
            minWidth: 160,
            width: '100%',
            maxWidth: 260,
            cursor: 'pointer',
          }}
          onMouseOver={e => { e.currentTarget.style.background = 'linear-gradient(90deg, #7c5bb3 0%, #b484f7 100%)'; e.currentTarget.style.transform = 'scale(1.04)'; }}
          onMouseOut={e => { e.currentTarget.style.background = 'linear-gradient(90deg, #b484f7 0%, #7c5bb3 100%)'; e.currentTarget.style.transform = 'scale(1)'; }}
        >
          Записаться на сессию
        </a>
      </div>
      <div>
        {/* <div>Отзывы и обратная связь</div> */}
        <button className="knowledge-back" onClick={onBack} style={{display: 'block', margin: '28px auto 0 auto'}}>← Назад</button>
      </div>
    </div>
  );
}

function AboutDianaGuruPage({ onBack }) {
  return (
    <div className="knowledge-page">
      <div className="knowledge-title">Диана Середа</div>
      
      {/* Подробный текст о Диане Середе */}
      <div style={{
        margin: '20px 16px 28px 16px', 
        color: 'var(--diana-bio)', 
        fontSize: '0.9rem', 
        lineHeight: 1.6, 
        fontFamily: 'Comfortaa, cursive',
        textAlign: 'center'
      }}>
        <p style={{margin: '0 0 12px 0'}}>
          Приветствую 🙏<br/>
          Меня зовут Диана Середа
        </p>
        
        <p style={{margin: '0 0 12px 0'}}>
          Я практикую хатха-йогу с 2007 года. С 2016 года являюсь сертифицированным преподавателем Центра индийской культуры Лала Бахадура Шастри. Также я окончила обучение в школе преподавателей йоги Oum.ru по направлениям хатха-йога и медитация и продолжаю обучение в Институте Бхагавад-гиты.
        </p>
        
        <p style={{margin: '0 0 12px 0'}}>
          Провожу групповые и индивидуальные занятия по хатха-йоге, пранаяме, медитации и релаксационным техникам на русском и английском языках. Разрабатываю программы для начинающих, для детей и для практикующих с разным уровнем подготовки, где особое внимание уделяется выравниванию тела и дыхания, укреплению позвоночника и суставов, развитию координации, пластичности, навыков "заземления", "укоренения" и ментальной устойчивости.
        </p>
        
        <p style={{margin: '0 0 12px 0'}}>
          Также я:
        </p>
        <ul style={{margin: '0 0 12px 0', padding: 0, listStyle: 'none', textAlign: 'center'}}>
          <li>• провожу ретриты в Индию,</li>
          <li>• являюсь проводником трансформационной игры "Лила",</li>
          <li>• практикую и обучаю гвоздестоянию как способу внутренней настройки, концентрации и силы духа,</li>
          <li>• увлечена путешествиями и горами.</li>
        </ul>
        
        <p style={{margin: '0 0 0 0'}}>
          Йога для меня — это путь к целостности, осознанности и бережному отношению к себе. Я с радостью делюсь этим знанием и сопровождаю тех, кто готов шаг за шагом возвращаться к своему естественному состоянию внутреннего покоя и силы🍃
        </p>

        {/* Новый блок: заголовок и ссылки */}
        <div style={{margin: '28px 0 18px 0', textAlign: 'center'}}>
          <div style={{fontWeight: 700, fontSize: '1rem', color: '#7c5bb3', marginBottom: 10}}>
            Представитель клуба йоги OUM.RU
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center'}}>
            <a href="https://meditation.study/graduates/diana-sereda/" target="_blank" rel="noopener noreferrer" style={{color: '#229ED9', fontSize: '0.7rem', textDecoration: 'underline'}}>@https://meditation.study/graduates/diana-sereda/</a>
            <a href="https://www.oum.ru/regions/teachers/diana-sereda/" target="_blank" rel="noopener noreferrer" style={{color: '#229ED9', fontSize: '0.7rem', textDecoration: 'underline'}}>@https://www.oum.ru/regions/teachers/diana-sereda/</a>
          </div>
        </div>
      </div>
      
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, margin: '28px 0 0 0'}}>
        <img src={require('./components/diana1.jpg')} alt="Диана 1" style={{maxWidth: 260, maxHeight: 340, borderRadius: 18, boxShadow: '0 4px 18px #e6e0f7', objectFit: 'cover', width: '100%', height: 'auto'}} />
        <img src={require('./components/diana2.jpg')} alt="Диана 2" style={{maxWidth: 260, maxHeight: 340, borderRadius: 18, boxShadow: '0 4px 18px #e6e0f7', objectFit: 'cover', width: '100%', height: 'auto'}} />
        <img src={require('./components/diana3.jpg')} alt="Диана 3" style={{maxWidth: 260, maxHeight: 340, borderRadius: 18, boxShadow: '0 4px 18px #e6e0f7', objectFit: 'cover', width: '100%', height: 'auto'}} />
        <img src={require('./components/diana4.jpg')} alt="Диана 4" style={{maxWidth: 260, maxHeight: 340, borderRadius: 18, boxShadow: '0 4px 18px #e6e0f7', objectFit: 'cover', width: '100%', height: 'auto'}} />
        <img src={require('./components/diana5.jpg')} alt="Диана 5" style={{maxWidth: 260, maxHeight: 340, borderRadius: 18, boxShadow: '0 4px 18px #e6e0f7', objectFit: 'cover', width: '100%', height: 'auto'}} />
      </div>
      <button className="knowledge-back" onClick={onBack} style={{display: 'block', margin: '28px auto 0 auto'}}>← Назад</button>
    </div>
  );
}

function RetreatsPage({ onBack }) {
  React.useEffect(() => {
    // Загружаем VK API
    const script = document.createElement('script');
    script.src = 'https://vk.com/js/api/openapi.js?173';
    script.async = true;
    script.onload = () => {
      // Инициализируем виджеты после загрузки API
      if (window.VK && window.VK.Widgets) {
        window.VK.Widgets.Post("vk_post_745985566_138", 745985566, 138, 'pYy1Xpn08KPkb_s_LnPHgKMCWRM');
        window.VK.Widgets.Post("vk_post_745985566_142", 745985566, 142, 'n4vadkEqmb-tJWpWIKC7jm-XnbM');
      }
    };
    document.head.appendChild(script);

    return () => {
      // Очищаем скрипт при размонтировании компонента
      const existingScript = document.querySelector('script[src="https://vk.com/js/api/openapi.js?173"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="knowledge-page">
      <div className="knowledge-title">Наши ретриты</div>
      
      {/* VK виджеты с видео */}
      <div style={{ margin: '20px auto', maxWidth: 480, textAlign: 'center' }}>
        <div id="vk_post_745985566_138"></div>
      </div>
      
      <div style={{ margin: '20px auto', maxWidth: 480, textAlign: 'center' }}>
        <div id="vk_post_745985566_142"></div>
      </div>
      
      <button className="knowledge-back" onClick={onBack} style={{display: 'block', margin: '28px auto 0 auto'}}>← Назад</button>
    </div>
  );
}

function MarinaSharipovaPage({ onBack }) {
  return (
    <div className="knowledge-page">
      <div className="knowledge-title">Марина Шарипова</div>
      <div style={{textAlign: 'center', margin: '28px 0'}}>
        <img src={about2} alt="Марина Шарипова" style={{maxWidth: 260, maxHeight: 340, borderRadius: 18, boxShadow: '0 4px 18px #e6e0f7', objectFit: 'cover', width: '100%', height: 'auto'}} />
      </div>
      <div style={{fontFamily: 'Comfortaa, cursive', color: '#7c5bb3', fontSize: '0.92rem', margin: '0 0 18px 0', textAlign: 'center', lineHeight: 1.5}}>
        {/* Здесь можно добавить биографию или описание */}
      </div>
      <button className="knowledge-back" onClick={onBack} style={{display: 'block', margin: '18px auto 0 auto'}}>← Назад</button>
    </div>
  );
}

function NailsPairPracticePage({ onBack }) {
  return (
    <div className="knowledge-page">
      <button className="knowledge-back" onClick={onBack} style={{display: 'block', margin: '0 auto 18px auto'}}>← Назад</button>
      <div style={{
        textAlign: 'center',
        fontFamily: 'Comfortaa, cursive',
        color: '#111',
        fontSize: '0.95rem',
        fontWeight: 500,
        margin: '0 0 0 0',
        lineHeight: 1.5,
        background: '#e0e0e2',
        borderRadius: 14,
        padding: '16px 8px 14px 8px'
      }}>
        Парная практика гвоздестояния
      </div>
      <div style={{
        background: '#ededf0',
        borderRadius: 14,
        padding: '16px 8px 14px 8px',
        margin: '16px 0 0 0',
        textAlign: 'center',
        fontFamily: 'Comfortaa, cursive',
        color: '#111',
        fontSize: '0.92rem',
        lineHeight: 1.6
      }}>
        <b>Я ВИЖУ ТЕБЯ 🍃</b>
        <br/><br/>
        В этой практике вы не просто стоите на гвоздях —<br/>
        вы стоите рядом.<br/>
        Вы — опора друг для друга.<br/>
        Вы — зеркало друг для друга.<br/>
        Вы — пространство, в котором можно быть настоящими.
      </div>
      <div style={{
        background: '#ededf0',
        borderRadius: 14,
        padding: '16px 8px 14px 8px',
        margin: '16px 0 0 0',
        textAlign: 'center',
        fontFamily: 'Comfortaa, cursive',
        color: '#111',
        fontSize: '0.92rem',
        lineHeight: 1.6
      }}>
        <b>Как проходит практика:</b><br/>
        Знакомство с участниками <br/>
        Сессия с разбором запросов участников на практику<br/>
        Колесо Жизненного Баланса <br/>
        Формирование намерения<br/>
        Глубокий диалог между участниками <br/>
        Проработка негативных переживаний <br/>
        Очень красивая и чувственная парная трансформация на гвоздях<br/>
        Тантрическое дыхание
      </div>
      <div style={{
        background: 'linear-gradient(135deg, #b484f7 0%, #7c5bb3 100%)',
        borderRadius: 16,
        padding: '18px 10px 16px 10px',
        boxShadow: '0 2px 12px 0 rgba(124,91,179,0.08)',
        textAlign: 'center',
        fontFamily: 'Comfortaa, cursive',
        color: '#fff',
        fontSize: '0.92rem',
        fontWeight: 500,
        margin: '16px 0 0 0',
        lineHeight: 1.5
      }}>
        <b style={{color:'#fff'}}>Что даёт парная практика:</b><br/>
        <span style={{color:'#fff'}}>
          • Сближение через телесный опыт<br/>
          • Доверие — я рядом, я тебя чувствую<br/>
          • Поддержка — ты не один / не одна<br/>
          • Принятие — я вижу тебя без масок<br/>
          • Совместное заземление и очищение<br/>
          • Укрепление энергетической связи<br/>
          • Прощение
        </span>
      </div>
      <div style={{
        background: '#ededf0',
        borderRadius: 14,
        padding: '16px 8px 14px 8px',
        margin: '16px 0 0 0',
        textAlign: 'center',
        fontFamily: 'Comfortaa, cursive',
        color: '#111',
        fontSize: '0.92rem',
        lineHeight: 1.7
      }}>
        И вот вы вместе сходите с досок…<br/>
        Медленно, мягко ….<br/>
        Как будто ступаете на новую землю, на другую глубину.<br/>
        <br/>
        Взгляд.<br/>
        Объятие.<br/>
        Без слов.<br/>
        <br/>
        "Я рядом."<br/>
        "Я благодарю."<br/>
        "Ты — мой путь внутрь себя."<br/>
        <br/>
        Иногда такие практики соединяют сильнее любых разговоров.<br/>
        Стирают напряжение.<br/>
        Открывают сердце.<br/>
        <br/>
        Пусть это останется с вами.<br/>
        Внутри.<br/>
        В теле.<br/>
        В отношениях.
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '24px 0 0 0' }}>
        <a
          href="https://t.me/disha070"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '10px 18px',
            background: 'linear-gradient(90deg, #b484f7 0%, #7c5bb3 100%)',
            color: '#fff',
            fontFamily: 'Comfortaa, cursive',
            fontWeight: 700,
            fontSize: '0.98rem',
            borderRadius: 14,
            border: '3px solid #fff', // добавлено для белого ободка
            boxShadow: '0 2px 12px 0 rgba(124,91,179,0.13)',
            textDecoration: 'none',
            letterSpacing: '0.01em',
            transition: 'background 0.2s, box-shadow 0.2s, transform 0.1s',
            textAlign: 'center',
            marginBottom: 0,
            minWidth: 160,
            width: '100%',
            maxWidth: 260,
            cursor: 'pointer',
          }}
          onMouseOver={e => { e.currentTarget.style.background = 'linear-gradient(90deg, #7c5bb3 0%, #b484f7 100%)'; e.currentTarget.style.transform = 'scale(1.04)'; }}
          onMouseOut={e => { e.currentTarget.style.background = 'linear-gradient(90deg, #b484f7 0%, #7c5bb3 100%)'; e.currentTarget.style.transform = 'scale(1)'; }}
        >
          Записаться на сессию
        </a>
      </div>
      <button className="knowledge-back" onClick={onBack} style={{display: 'block', margin: '28px auto 0 auto'}}>← Назад</button>
    </div>
  );
}

// Helper styles for DiaryStatesPage
const featureBoxStyle = {
  border: '1px solid #e0e0e0',
  borderRadius: '12px',
  padding: '16px',
  margin: '20px 0',
  textAlign: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
};

const featureTitleStyle = {
  fontSize: '1.2rem',
  fontWeight: 700,
  color: '#333',
  marginBottom: '10px'
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontFamily: 'Comfortaa, cursive',
  marginBottom: '10px',
  boxSizing: 'border-box'
};

const buttonStyle = {
  padding: '10px 20px',
  borderRadius: '8px',
  border: 'none',
  backgroundColor: '#8a6db1',
  color: 'white',
  fontFamily: 'Comfortaa, cursive',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease'
};

const botResponseStyle = {
  marginTop: '15px',
  padding: '10px',
  backgroundColor: '#e8f4fd',
  borderRadius: '8px',
  color: '#333',
  textAlign: 'left',
  lineHeight: 1.5
};

  function DiaryStatesPage({ onBack }) {
    const [feeling, setFeeling] = useState('');
    const [botResponse, setBotResponse] = useState('');
    const [wordOfDay, setWordOfDay] = useState('');
    const [chatMessages, setChatMessages] = useState([]);
    const [chatInput, setChatInput] = useState('');
    const [emotionHistory, setEmotionHistory] = useState([
      { day: 'Пн', mood: '😊' }, { day: 'Вт', mood: '😐' },
      { day: 'Ср', mood: '😊' }, { day: 'Чт', mood: '😔' },
      { day: 'Пт', mood: '😊' }, { day: 'Сб', mood: '😁' },
      { day: 'Вс', mood: '😐' },
    ]);

    // Загрузка сохранённых данных при инициализации
    useEffect(() => {
      const savedStatesData = localStorage.getItem('statesData');
      if (savedStatesData) {
        const data = JSON.parse(savedStatesData);
        // Можно добавить загрузку других данных если нужно
      }
    }, []);

    const handleFeelingSubmit = () => {
      const lowerCaseFeeling = feeling.toLowerCase();
      if (lowerCaseFeeling.includes('грустно') || lowerCaseFeeling.includes('плохо') || lowerCaseFeeling.includes('😔')) {
        setBotResponse('Понимаю, это непросто. Попробуйте дыхательную практику "Квадрат". Она помогает успокоить ум. Вот цитата для вас: "Даже самая темная ночь закончится, и взойдет солнце."');
      } else if (lowerCaseFeeling.includes('хорошо') || lowerCaseFeeling.includes('радостно') || lowerCaseFeeling.includes('😊')) {
        setBotResponse('Замечательно! Рад за вас. Сохраняйте это чувство. Цитата дня: "Счастье — это не пункт назначения, а способ путешествовать."');
      } else {
        setBotResponse('Спасибо, что поделились. Важно прислушиваться к себе. Попробуйте медитацию на 5 минут, чтобы сфокусироваться на настоящем моменте.');
      }
      
      // Сохранение в localStorage для дерева жизни
      const statesData = JSON.parse(localStorage.getItem('statesData') || '{}');
      const newEntry = {
        id: Date.now(),
        feeling: feeling,
        date: new Date().toISOString(),
        type: 'feeling'
      };
      const updatedEntries = [...(statesData.entries || []), newEntry];
      localStorage.setItem('statesData', JSON.stringify({
        entries: updatedEntries,
        lastUpdate: new Date().toISOString()
      }));
      
      setFeeling('');
    };

    const handleWordSubmit = () => {
      // Сохранение в localStorage для дерева жизни
      const statesData = JSON.parse(localStorage.getItem('statesData') || '{}');
      const newEntry = {
        id: Date.now(),
        word: wordOfDay,
        date: new Date().toISOString(),
        type: 'word'
      };
      const updatedEntries = [...(statesData.entries || []), newEntry];
      localStorage.setItem('statesData', JSON.stringify({
        entries: updatedEntries,
        lastUpdate: new Date().toISOString()
      }));

      alert(`Ваше слово дня "${wordOfDay}" сохранено!`);
      setWordOfDay('');
    };

    const handleChatSend = () => {
      if (chatInput.trim() === '') return;
      const newMessages = [...chatMessages, { sender: 'user', text: chatInput }];
      setChatMessages(newMessages);
      
      // Сохранение сообщений в localStorage
      const statesData = JSON.parse(localStorage.getItem('statesData') || '{}');
      const newEntry = {
        id: Date.now(),
        messages: newMessages,
        date: new Date().toISOString(),
        type: 'chat'
      };
      const updatedEntries = [...(statesData.entries || []), newEntry];
      localStorage.setItem('statesData', JSON.stringify({
        entries: updatedEntries,
        lastUpdate: new Date().toISOString()
      }));
      
      setChatInput('');
    };

    return (
      <div style={{ 
        padding: '20px', 
        fontFamily: 'Comfortaa, cursive', 
        textAlign: 'center', 
        maxWidth: '600px', 
        margin: '0 auto',
        overflowY: 'auto',
        paddingBottom: '100px' // Добавляем отступ снизу для нижнего бара
      }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '16px', color: '#333' }}>
          Дневник Состояний
        </h2>
        <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#555', marginBottom: '24px' }}>
          Познай себя глубже. Отслеживай свои эмоции, осознавай внутренние волны и находи баланс. Это твоя личная карта душевных путешествий.
        </p>

        <div style={featureBoxStyle}>
          <h3 style={featureTitleStyle}>Сканер Состояния</h3>
          <p>Как ты себя чувствуешь?</p>
          <input 
            type="text" 
            value={feeling}
            onChange={(e) => setFeeling(e.target.value)}
            placeholder="Например: радостно 😊 или немного грустно 😔"
            style={inputStyle}
          />
          <button onClick={handleFeelingSubmit} style={buttonStyle}>Отправить</button>
          {botResponse && <p style={botResponseStyle}>{botResponse}</p>}
        </div>

        <div style={featureBoxStyle}>
          <h3 style={featureTitleStyle}>График состояния (эмо-календарь)</h3>
          <p>Ваши эмоции за последнюю неделю:</p>
          <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px 0' }}>
            {emotionHistory.map(item => (
              <div key={item.day} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem' }}>{item.mood}</div>
                <div style={{ fontSize: '0.7rem' }}>{item.day}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div style={featureBoxStyle}>
          <h3 style={featureTitleStyle}>Слово дня</h3>
          <p>Опишите свое состояние одним словом.</p>
          <input 
            type="text" 
            value={wordOfDay}
            onChange={(e) => setWordOfDay(e.target.value)}
            placeholder="Например: спокойствие"
            style={inputStyle}
          />
          <button onClick={handleWordSubmit} style={buttonStyle}>Сохранить</button>
        </div>

        <div style={featureBoxStyle}>
          <h3 style={featureTitleStyle}>AI-компаньон</h3>
          <p>Здесь можно выговориться. Это безопасно.</p>
          <div style={{ height: '150px', border: '1px solid #ddd', borderRadius: '8px', padding: '10px', overflowY: 'auto', marginBottom: '10px', textAlign: 'left', background: '#fff' }}>
            {chatMessages.map((msg, index) => (
              <div key={index} style={{ marginBottom: '5px', textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
                <span style={{
                  background: msg.sender === 'user' ? '#e8f4fd' : '#f0f0f0',
                  padding: '5px 10px',
                  borderRadius: '10px',
                  display: 'inline-block',
                  maxWidth: '80%'
                }}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex' }}>
            <input 
              type="text" 
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleChatSend()}
              placeholder="Напишите что-нибудь..."
              style={{ ...inputStyle, flexGrow: 1, marginRight: '10px', marginBottom: 0 }}
            />
            <button onClick={handleChatSend} style={{ ...buttonStyle, padding: '10px' }}>➤</button>
          </div>
        </div>

        <button 
          onClick={onBack}
          className="knowledge-back"
          style={{display: 'block', margin: '28px auto 0 auto', marginTop: 'auto'}}>← Назад</button>
      </div>
    );
  }

function DiaryGratitudePage({ onBack }) {
  const [gratitudes, setGratitudes] = useState([]);
  const [newGratitude, setNewGratitude] = useState('');
  const [streak, setStreak] = useState(0);
  const [level, setLevel] = useState(1);
  const [todaysGratitudes, setTodaysGratitudes] = useState(0);
  const [wheelSuggestion, setWheelSuggestion] = useState('');

  // Колесо благодарностей - подсказки
  const gratitudeWheel = [
    "Поблагодари за своё тело и здоровье",
    "Поблагодари за природу вокруг тебя", 
    "Поблагодари за урок, который получил сегодня",
    "Поблагодари за близких людей",
    "Поблагодари за дом и уют",
    "Поблагодари за возможности роста",
    "Поблагодари за еду и воду",
    "Поблагодари за вдохновение",
    "Поблагодари за прошлые трудности, что сделали тебя сильнее",
    "Поблагодари за красоту в твоей жизни",
    "Поблагодари за технологии и удобства",
    "Поблагодари за мгновения радости",
    "Поблагодари за свои таланты и способности",
    "Поблагодари за безопасность",
    "Поблагодари за возможность учиться"
  ];

  // Определение уровня осознанности
  const getLevelInfo = (days) => {
    if (days >= 90) return { level: 5, title: "Мастер Благодарности", emoji: "🌟", color: "#ff6b6b" };
    if (days >= 30) return { level: 4, title: "Просветлённый", emoji: "✨", color: "#4ecdc4" };
    if (days >= 10) return { level: 3, title: "Практикующий", emoji: "🌸", color: "#45b7d1" };
    if (days >= 7) return { level: 2, title: "Ученик", emoji: "🌱", color: "#96ceb4" };
    return { level: 1, title: "Новичок", emoji: "🌿", color: "#ffeaa7" };
  };

  // Инициализация при загрузке
  useEffect(() => {
    const today = new Date().toDateString();
    const savedData = localStorage.getItem('gratitudeData');
    
    if (savedData) {
      const data = JSON.parse(savedData);
      setGratitudes(data.gratitudes || []);
      setStreak(data.streak || 0);
      
      // Подсчёт благодарностей за сегодня
      const todayCount = (data.gratitudes || []).filter(g => 
        new Date(g.date).toDateString() === today
      ).length;
      setTodaysGratitudes(todayCount);
    }

    // Случайная подсказка из колеса
    const randomSuggestion = gratitudeWheel[Math.floor(Math.random() * gratitudeWheel.length)];
    setWheelSuggestion(randomSuggestion);
  }, []);

  // Сохранение данных
  const saveData = (newGratitudes, newStreak) => {
    const data = {
      gratitudes: newGratitudes,
      streak: newStreak,
      lastUpdate: new Date().toISOString()
    };
    localStorage.setItem('gratitudeData', JSON.stringify(data));
  };

  // Добавление благодарности
  const addGratitude = () => {
    if (!newGratitude.trim()) return;

    const today = new Date().toDateString();
    const newEntry = {
      id: Date.now(),
      text: newGratitude,
      date: new Date().toISOString(),
      day: today
    };

    const updatedGratitudes = [...gratitudes, newEntry];
    const todayCount = todaysGratitudes + 1;
    
    setGratitudes(updatedGratitudes);
    setTodaysGratitudes(todayCount);
    setNewGratitude('');

    // Проверка на завершение дня (5 благодарностей)
    if (todayCount === 5) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      saveData(updatedGratitudes, newStreak);
      
      const levelInfo = getLevelInfo(newStreak);
      alert(`🎉 Отлично! День завершён! Серия: ${newStreak} дней. Уровень: ${levelInfo.title} ${levelInfo.emoji}`);
    } else {
      saveData(updatedGratitudes, streak);
    }
  };

  // Новая подсказка из колеса
  const spinWheel = () => {
    const randomSuggestion = gratitudeWheel[Math.floor(Math.random() * gratitudeWheel.length)];
    setWheelSuggestion(randomSuggestion);
  };

  const levelInfo = getLevelInfo(streak);
  const progressToNext = todaysGratitudes / 5 * 100;

  // Стили
  const containerStyle = {
    padding: '20px',
    fontFamily: 'Comfortaa, cursive',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto',
    overflowY: 'auto',
    paddingBottom: '100px'
  };

  const cardStyle = {
    background: '#f7f3ff',
    borderRadius: '16px',
    padding: '16px',
    margin: '16px 0',
    boxShadow: '0 4px 12px rgba(124,91,179,0.1)'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontFamily: 'Comfortaa, cursive',
    fontSize: '0.9rem',
    marginBottom: '12px'
  };

  const buttonStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontFamily: 'Comfortaa, cursive',
    fontWeight: '600',
    fontSize: '0.9rem',
    margin: '0 8px'
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '16px', color: '#333' }}>
        Дневник Благодарности
      </h2>
      <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#555', marginBottom: '24px' }}>
        Ощути изобилие жизни через простую практику благодарности. Чем больше ты благодаришь, тем больше получаешь.
      </p>

      {/* Уровень и прогресс */}
      <div style={{...cardStyle, background: levelInfo.color}}>
        <h3 style={{ color: '#333', marginBottom: '12px' }}>
          {levelInfo.emoji} {levelInfo.title} - Уровень {levelInfo.level}
        </h3>
        <div style={{ fontSize: '1.2rem', margin: '8px 0', color: '#333' }}>
          🔥 Серия: {streak} дней
        </div>
        <div style={{ fontSize: '0.9rem', color: '#333', marginBottom: '8px' }}>
          Сегодня: {todaysGratitudes}/5 благодарностей
        </div>
        <div style={{
          background: 'rgba(255,255,255,0.3)',
          borderRadius: '10px',
          height: '8px',
          overflow: 'hidden'
        }}>
          <div style={{
            background: 'white',
            height: '100%',
            width: `${progressToNext}%`,
            transition: 'width 0.3s ease'
          }}></div>
        </div>
      </div>

      {/* Достижения */}
      <div style={cardStyle}>
        <h3 style={{ color: '#7c5bb3', marginBottom: '12px' }}>🏆 Достижения</h3>
        <div style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
          <div style={{ opacity: streak >= 10 ? 1 : 0.3 }}>
            <div style={{ fontSize: '1.5rem' }}>🥉</div>
            <div style={{ fontSize: '0.8rem' }}>10 дней</div>
          </div>
          <div style={{ opacity: streak >= 30 ? 1 : 0.3 }}>
            <div style={{ fontSize: '1.5rem' }}>🥈</div>
            <div style={{ fontSize: '0.8rem' }}>30 дней</div>
          </div>
          <div style={{ opacity: streak >= 90 ? 1 : 0.3 }}>
            <div style={{ fontSize: '1.5rem' }}>🥇</div>
            <div style={{ fontSize: '0.8rem' }}>90 дней</div>
          </div>
        </div>
      </div>

      {/* Колесо благодарностей */}
      <div style={cardStyle}>
        <h3 style={{ color: '#7c5bb3', marginBottom: '12px' }}>
          🎯 Колесо Благодарностей
        </h3>
        <div style={{
          padding: '16px',
          background: 'rgba(124,91,179,0.1)',
          borderRadius: '12px',
          margin: '12px 0',
          fontStyle: 'italic',
          fontSize: '0.95rem'
        }}>
          "{wheelSuggestion}"
        </div>
        <button onClick={spinWheel} style={buttonStyle}>
          🎲 Крутить колесо
        </button>
      </div>

      {/* Добавление благодарности */}
      <div style={cardStyle}>
        <h3 style={{ color: '#7c5bb3', marginBottom: '12px' }}>
          ✨ Запиши благодарность
        </h3>
        <textarea
          value={newGratitude}
          onChange={(e) => setNewGratitude(e.target.value)}
          placeholder="За что ты благодарен сегодня? (используй подсказку выше)"
          style={{...inputStyle, height: '80px', resize: 'vertical'}}
        />
        <button onClick={addGratitude} style={buttonStyle}>
          💖 Добавить благодарность
        </button>
      </div>

      {/* Список благодарностей за сегодня */}
      {todaysGratitudes > 0 && (
        <div style={cardStyle}>
          <h3 style={{ color: '#7c5bb3', marginBottom: '12px' }}>
            🌸 Сегодняшние благодарности
          </h3>
          {gratitudes
            .filter(g => new Date(g.date).toDateString() === new Date().toDateString())
            .map((gratitude, index) => (
              <div key={gratitude.id} style={{
                background: 'rgba(124,91,179,0.05)',
                padding: '12px',
                borderRadius: '8px',
                margin: '8px 0',
                textAlign: 'left'
              }}>
                <span style={{ fontWeight: '600', color: '#7c5bb3' }}>
                  {index + 1}.
                </span> {gratitude.text}
              </div>
            ))}
        </div>
      )}

      <button 
        onClick={onBack}
        className="knowledge-back"
        style={{display: 'block', margin: '28px auto 0 auto', marginTop: 'auto'}}>
        ← Назад
      </button>
    </div>
  );
}

function DiaryWishesPage({ onBack }) {
  const [wishText, setWishText] = useState('');
  const [wishes, setWishes] = useState([]);
  const [generatedImage, setGeneratedImage] = useState('');
  const [moonPhase, setMoonPhase] = useState('');
  const [dailyChance, setDailyChance] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  // Определение фазы луны (упрощенная версия)
  const getMoonPhase = () => {
    const today = new Date();
    const day = today.getDate();
    if (day >= 1 && day <= 7) return { phase: 'Новолуние', emoji: '🌑', advice: 'Идеальное время для новых желаний и начинаний!' };
    if (day >= 8 && day <= 14) return { phase: 'Растущая луна', emoji: '🌒', advice: 'Время роста и привлечения. Загадывайте желания о достижениях!' };
    if (day >= 15 && day <= 21) return { phase: 'Полнолуние', emoji: '🌕', advice: 'Пик энергии! Мощное время для важных желаний!' };
    return { phase: 'Убывающая луна', emoji: '🌘', advice: 'Время отпускания старого и очищения намерений.' };
  };

  // Генерация изображения
  const generateVisionImage = async (wish) => {
    const keywords = wish.toLowerCase();
    
    // Используем надёжные источники изображений
    const imageOptions = {
      дом: [
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop'
      ],
      машина: [
        'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop'
      ],
      путешествия: [
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
      ],
      работа: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1486312338219-ce68e2c6b7b7?w=400&h=300&fit=crop'
      ],
      любовь: [
        'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=400&h=300&fit=crop'
      ],
      здоровье: [
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop'
      ],
      деньги: [
        'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1564939558297-fc396f18e5c7?w=400&h=300&fit=crop'
      ],
      мечты: [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1444927714506-8492d94b5ba0?w=400&h=300&fit=crop'
      ]
    };

    let selectedCategory = 'мечты';
    
    if (keywords.includes('дом') || keywords.includes('квартир')) selectedCategory = 'дом';
    else if (keywords.includes('машин') || keywords.includes('авто')) selectedCategory = 'машина';
    else if (keywords.includes('путешеств') || keywords.includes('отпуск')) selectedCategory = 'путешествия';
    else if (keywords.includes('работ') || keywords.includes('карьер')) selectedCategory = 'работа';
    else if (keywords.includes('любов') || keywords.includes('отношени')) selectedCategory = 'любовь';
    else if (keywords.includes('здоров') || keywords.includes('спорт')) selectedCategory = 'здоровье';
    else if (keywords.includes('деньг') || keywords.includes('богатств')) selectedCategory = 'деньги';

    const images = imageOptions[selectedCategory];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    
    return randomImage;
  };

  // Генерация случайного прогноза шансов
  const generateDailyChance = () => {
    const chances = [75, 80, 85, 90, 95];
    const messages = [
      'Звёзды благоволят вашим желаниям!',
      'Сегодня особенно мощный день для проявления!',
      'Вселенная настроена на исполнение ваших мечт!',
      'Энергии сегодня идеально подходят для ваших целей!',
      'Удача на вашей стороне, действуйте!'
    ];
    
    const randomIndex = Math.floor(Math.random() * chances.length);
    return {
      chance: chances[randomIndex],
      message: messages[randomIndex]
    };
  };

  // Инициализация при загрузке
  useEffect(() => {
    setMoonPhase(getMoonPhase());
    const dailyData = generateDailyChance();
    setDailyChance(dailyData);
    
    // Загрузка сохранённых желаний
    const savedWishesData = localStorage.getItem('wishesData');
    if (savedWishesData) {
      const data = JSON.parse(savedWishesData);
      setWishes(data.wishes || []);
    }
  }, []);

  // Добавление желания
  const handleAddWish = async () => {
    if (!wishText.trim()) return;

    setIsGenerating(true);
    
    try {
      const imageUrl = await generateVisionImage(wishText);
      const newWish = {
        id: Date.now(),
        text: wishText,
        image: imageUrl,
        moonPhase: moonPhase.phase,
        createdAt: new Date().toLocaleDateString('ru-RU'),
        checklist: {
          thought: false,
          felt: false,
          action: false,
          gratitude: false
        }
      };

      const updatedWishes = [...wishes, newWish];
      setWishes(updatedWishes);
      
      // Сохранение в localStorage для дерева жизни
      const wishesData = {
        wishes: updatedWishes,
        lastUpdate: new Date().toISOString()
      };
      localStorage.setItem('wishesData', JSON.stringify(wishesData));
      
      setWishText('');
      alert('Желание добавлено в вашу доску визуализации! ✨');
    } catch (error) {
      console.error('Ошибка генерации изображения:', error);
      alert('Не удалось создать изображение, но желание сохранено!');
    } finally {
      setIsGenerating(false);
    }
  };

  // Обновление чеклиста
  const updateChecklist = (wishId, item) => {
    const updatedWishes = wishes.map(wish => 
      wish.id === wishId 
        ? { ...wish, checklist: { ...wish.checklist, [item]: !wish.checklist[item] } }
        : wish
    );
    setWishes(updatedWishes);
    
    // Сохранение в localStorage
    const wishesData = {
      wishes: updatedWishes,
      lastUpdate: new Date().toISOString()
    };
    localStorage.setItem('wishesData', JSON.stringify(wishesData));
  };

  // Стили
  const containerStyle = {
    padding: '20px',
    fontFamily: 'Comfortaa, cursive',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto',
    overflowY: 'auto',
    paddingBottom: '100px'
  };

  const cardStyle = {
    background: '#f7f3ff',
    borderRadius: '16px',
    padding: '16px',
    margin: '16px 0',
    boxShadow: '0 4px 12px rgba(124,91,179,0.1)'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontFamily: 'Comfortaa, cursive',
    fontSize: '0.9rem',
    marginBottom: '12px'
  };

  const buttonStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontFamily: 'Comfortaa, cursive',
    fontWeight: '600',
    fontSize: '0.9rem'
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '16px', color: '#333' }}>
        Дневник Желаний
      </h2>
      <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#555', marginBottom: '24px' }}>
        Место, где рождаются мечты. Запиши своё намерение, активируй внутреннюю силу и наблюдай, как Вселенная начинает действовать.
      </p>

      {/* Лунный календарь */}
      <div style={cardStyle}>
        <h3 style={{ color: '#7c5bb3', marginBottom: '12px' }}>
          {moonPhase.emoji} Лунный календарь исполнения
        </h3>
        <p style={{ fontSize: '0.9rem', margin: '8px 0' }}>
          <strong>{moonPhase.phase}</strong>
        </p>
        <p style={{ fontSize: '0.85rem', color: '#666', fontStyle: 'italic' }}>
          {moonPhase.advice}
        </p>
      </div>

      {/* Прогноз шансов */}
      <div style={cardStyle}>
        <h3 style={{ color: '#7c5bb3', marginBottom: '12px' }}>
          🔮 Прогноз исполнения на сегодня
        </h3>
        <div style={{ fontSize: '2rem', margin: '8px 0', color: '#667eea' }}>
          {dailyChance.chance}%
        </div>
        <p style={{ fontSize: '0.85rem', color: '#666', fontStyle: 'italic' }}>
          {dailyChance.message}
        </p>
      </div>

      {/* AI Vision Board */}
      <div style={cardStyle}>
        <h3 style={{ color: '#7c5bb3', marginBottom: '12px' }}>
          ✨ AI Vision Board
        </h3>
        <textarea
          value={wishText}
          onChange={(e) => setWishText(e.target.value)}
          placeholder="Опишите ваше желание подробно... (например: 'Хочу красивый дом у моря с большими окнами')"
          style={{...inputStyle, height: '80px', resize: 'vertical'}}
        />
        <button onClick={handleAddWish} style={buttonStyle} disabled={isGenerating}>
          {isGenerating ? 'Создаю магию... ✨' : 'Создать доску мечты 🎨'}
        </button>
      </div>

      {/* Список желаний */}
      {wishes.map(wish => (
        <div key={wish.id} style={{...cardStyle, textAlign: 'left'}}>
          <div style={{display: 'flex', gap: '16px', alignItems: 'flex-start'}}>
            <div style={{flex: 1}}>
              <h4 style={{color: '#333', marginBottom: '8px'}}>{wish.text}</h4>
              <p style={{fontSize: '0.8rem', color: '#666', marginBottom: '8px'}}>
                Загадано: {wish.createdAt} ({wish.moonPhase})
              </p>
              
              {/* Чеклист проявления */}
              <div style={{marginTop: '12px'}}>
                <h5 style={{color: '#7c5bb3', marginBottom: '8px'}}>Чеклист проявления:</h5>
                {[
                  {key: 'thought', label: 'Подумал о желании', emoji: '💭'},
                  {key: 'felt', label: 'Почувствовал как будто уже сбылось', emoji: '💖'},
                  {key: 'action', label: 'Сделал реальный шаг', emoji: '👣'},
                  {key: 'gratitude', label: 'Поблагодарил Вселенную', emoji: '🙏'}
                ].map(item => (
                  <div key={item.key} style={{margin: '4px 0'}}>
                    <label style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                      <input
                        type="checkbox"
                        checked={wish.checklist[item.key]}
                        onChange={() => updateChecklist(wish.id, item.key)}
                        style={{marginRight: '8px'}}
                      />
                      <span style={{fontSize: '0.85rem'}}>
                        {item.emoji} {item.label}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Vision Image */}
            <div style={{flexShrink: 0}}>
              <img 
                src={wish.image} 
                alt="Vision Board" 
                onError={(e) => {
                  // Fallback изображение при ошибке загрузки
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjkwIiB2aWV3Qm94PSIwIDAgMTIwIDkwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjkwIiBmaWxsPSIjZjdmM2ZmIi8+CjxwYXRoIGQ9Ik02MCA0NUMzNy45MDg2IDQ1IDIwIDI3LjA5MTQgMjAgNUwyMCA0NUwyMCA4NUgxMDBIMTAwVjQ1VjVDMTAwIDI3LjA5MTQgODIuMDkxNCA0NSA2MCA0NVoiIGZpbGw9IiM3YzViYjMiLz4KPHN2ZyBpZD0iQ2lja2xlIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIGZpbGw9IiNmZmYiLz4KPHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0icG9zaXRpb246IGFic29sdXRlOyB0b3A6IDUwJTsgbGVmdDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsiPgo8cGF0aCBkPSJNNiAxQzYuNTUyMjggMSA3IDEuNDQ3NzIgNyAyVjUuNTg1NzlMMTEuMjkyOSAxLjI5Mjg5QzExLjY4MzQgMC45MDIzNjkgMTIuMzE2NiAwLjkwMjM2OSAxMi43MDcxIDEuMjkyODlDMTMuMDk3NiAxLjY4MzQyIDEzLjA5NzYgMi4zMTY1OCAxMi43MDcxIDIuNzA3MTFMOC40MTQyMSA3SDEyQzEyLjU1MjMgNyAxMyA3LjQ0NzcyIDEzIDhDMTMgOC41NTIyOCAxMi41NTIzIDkgMTIgOUg4LjQxNDIxTDEyLjcwNzEgMTMuMjkyOUMxMy4wOTc2IDEzLjY4MzQgMTMuMDk3NiAxNC4zMTY2IDEyLjcwNzEgMTQuNzA3MUMxMi4zMTY2IDE1LjA5NzYgMTEuNjgzNCAxNS4wOTc2IDExLjI5MjkgMTQuNzA3MUw3IDEwLjQxNDJWMTRDNyAxNC41NTIzIDYuNTUyMjggMTUgNiAxNUM1LjQ0NzcyIDE1IDUgMTQuNTUyMyA1IDE0VjEwLjQxNDJMMC43MDcxMDcgMTQuNzA3MUMwLjMxNjU4MiAxNS4wOTc2IC0wLjMxNjU4MiAxNS4wOTc2IC0wLjcwNzEwNyAxNC43MDcxQy0xLjA5NzYzIDE0LjMxNjYgLTEuMDk3NjMgMTMuNjgzNCAtMC43MDcxMDcgMTMuMjkyOUwzLjU4NTc5IDlIMEMtMC41NTIyODUgOSAtMSA4LjU1MjI4IC0xIDhDLTEgNy40NDc3MiAtMC41NTIyODUgNyAwIDdIMy41ODU3OUwtMC43MDcxMDcgMi43MDcxMUMtMS4wOTc2MyAyLjMxNjU4IC0xLjA5NzYzIDEuNjgzNDIgLTAuNzA3MTA3IDEuMjkyODlDLTAuMzE2NTgyIDAuOTAyMzY5IDAuMzE2NTgyIDAuOTAyMzY5IDAuNzA3MTA3IDEuMjkyODlMNSA1LjU4NTc5VjJDNSAxLjQ0NzcyIDUuNDQ3NzIgMSA2IDF6IiBmaWxsPSIjN2M1YmIzIi8+Cjwvc3ZnPgo8L3N2Zz4=';
                }}
                style={{
                  width: '120px',
                  height: '90px',
                  borderRadius: '8px',
                  objectFit: 'cover',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  backgroundColor: '#f7f3ff'
                }}
              />
            </div>
          </div>
        </div>
      ))}

      <button 
        onClick={onBack}
        className="knowledge-back"
        style={{display: 'block', margin: '28px auto 0 auto', marginTop: 'auto'}}>
        ← Назад
      </button>
    </div>
  );
}

// Компонент дерева жизни
function TreeOfLife() {
  const [treeData, setTreeData] = useState({ leaves: 0, branches: 0, level: 1 });

  // Получение данных из всех дневников
  const getAllDiaryData = () => {
    const gratitudeData = JSON.parse(localStorage.getItem('gratitudeData') || '{}');
    const wishesData = JSON.parse(localStorage.getItem('wishesData') || '{}');
    const statesData = JSON.parse(localStorage.getItem('statesData') || '{}');

    // Подсчёт активности
    const gratitudeCount = (gratitudeData.gratitudes || []).length;
    const gratitudeStreak = gratitudeData.streak || 0;
    const wishesCount = (wishesData.wishes || []).length;
    const statesCount = (statesData.entries || []).length;

    // Общая активность
    const totalActivity = gratitudeCount + wishesCount + statesCount;
    const totalStreaks = gratitudeStreak;

    // Расчёт уровня дерева
    let level = 1;
    let leaves = Math.min(totalActivity, 50); // Максимум 50 листьев
    let branches = Math.floor(totalStreaks / 5); // Ветка каждые 5 дней серии

    if (totalActivity >= 100) level = 5; // Могучее дерево
    else if (totalActivity >= 50) level = 4; // Взрослое дерево
    else if (totalActivity >= 20) level = 3; // Растущее дерево
    else if (totalActivity >= 5) level = 2; // Молодое дерево
    else level = 1; // Росток

    return { leaves, branches, level, totalActivity, gratitudeStreak };
  };

  useEffect(() => {
    const data = getAllDiaryData();
    setTreeData(data);
  }, []);

  // Генерация SVG дерева
  const generateTreeSVG = () => {
    const { leaves, branches, level } = treeData;
    
    // Базовые цвета для разных уровней
    const levelColors = {
      1: { trunk: '#8B4513', leaves: '#90EE90' }, // Росток
      2: { trunk: '#A0522D', leaves: '#32CD32' }, // Молодое
      3: { trunk: '#654321', leaves: '#228B22' }, // Растущее
      4: { trunk: '#4A4A4A', leaves: '#006400' }, // Взрослое
      5: { trunk: '#2F4F4F', leaves: '#004000' }  // Могучее
    };

    const colors = levelColors[level];
    
    return (
      <svg width="200" height="250" viewBox="0 0 200 250">
        {/* Земля */}
        <ellipse cx="100" cy="240" rx="80" ry="10" fill="#8B4513" opacity="0.3"/>
        
        {/* Ствол */}
        <rect 
          x="90" 
          y={240 - (level * 30)} 
          width={10 + level * 2} 
          height={level * 30} 
          fill={colors.trunk}
          rx="5"
        />
        
        {/* Основные ветки */}
        {branches > 0 && (
          <>
            <line x1="95" y1={240 - level * 20} x2="75" y2={240 - level * 25} stroke={colors.trunk} strokeWidth="3"/>
            <line x1="105" y1={240 - level * 20} x2="125" y2={240 - level * 25} stroke={colors.trunk} strokeWidth="3"/>
          </>
        )}
        
        {branches > 1 && (
          <>
            <line x1="95" y1={240 - level * 15} x2="70" y2={240 - level * 18} stroke={colors.trunk} strokeWidth="2"/>
            <line x1="105" y1={240 - level * 15} x2="130" y2={240 - level * 18} stroke={colors.trunk} strokeWidth="2"/>
          </>
        )}
        
        {/* Крона - основная */}
        <circle 
          cx="100" 
          cy={240 - level * 25} 
          r={20 + level * 5} 
          fill={colors.leaves} 
          opacity="0.8"
        />
        
        {/* Дополнительные части кроны для высоких уровней */}
        {level >= 3 && (
          <>
            <circle cx="85" cy={240 - level * 30} r={15 + level * 2} fill={colors.leaves} opacity="0.6"/>
            <circle cx="115" cy={240 - level * 30} r={15 + level * 2} fill={colors.leaves} opacity="0.6"/>
          </>
        )}
        
        {/* Листья как маленькие круги */}
        {Array.from({length: Math.min(leaves, 20)}).map((_, i) => (
          <circle
            key={i}
            cx={80 + (i % 5) * 8 + Math.random() * 10}
            cy={220 - level * 25 + Math.floor(i / 5) * 8 + Math.random() * 10}
            r="2"
            fill={colors.leaves}
            opacity="0.9"
          />
        ))}
        
        {/* Плоды/цветы для высоких уровней */}
        {level >= 4 && Array.from({length: Math.min(Math.floor(leaves/10), 5)}).map((_, i) => (
          <circle
            key={`fruit-${i}`}
            cx={90 + i * 5 + Math.random() * 20}
            cy={230 - level * 25 + Math.random() * 15}
            r="3"
            fill="#FF6B6B"
            opacity="0.8"
          />
        ))}
      </svg>
    );
  };

  const getLevelTitle = (level) => {
    const titles = {
      1: "🌱 Росток",
      2: "🌿 Молодое дерево",
      3: "🌳 Растущее дерево", 
      4: "🌲 Взрослое дерево",
      5: "🌟 Могучее дерево"
    };
    return titles[level] || "🌱 Росток";
  };

  return (
    <div style={{
      background: '#f7f3ff',
      borderRadius: 16,
      padding: '20px',
      margin: '16px auto',
      maxWidth: '400px',
      textAlign: 'center',
      boxShadow: '0 4px 12px rgba(124,91,179,0.1)'
    }}>
      <h3 style={{ color: '#7c5bb3', marginBottom: '16px', fontFamily: 'Comfortaa, cursive' }}>
        🌳 Дерево Жизни
      </h3>
      
      <div style={{ margin: '20px 0' }}>
        {generateTreeSVG()}
      </div>
      
      <div style={{ textAlign: 'center', fontFamily: 'Comfortaa, cursive' }}>
        <div style={{ fontSize: '1.1rem', fontWeight: '600', color: '#333', marginBottom: '8px' }}>
          {getLevelTitle(treeData.level)}
        </div>
        
        <div style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.4 }}>
          🍃 Листьев: {treeData.leaves}<br/>
          🌿 Веток: {treeData.branches}<br/>
          📊 Всего записей: {treeData.totalActivity}<br/>
          🔥 Серия благодарности: {treeData.gratitudeStreak} дней
        </div>
        
        <div style={{
          marginTop: '12px',
          padding: '8px 12px',
          background: 'rgba(124,91,179,0.1)',
          borderRadius: '8px',
          fontSize: '0.8rem',
          fontStyle: 'italic',
          color: '#7c5bb3'
        }}>
          Каждая запись в дневниках делает твоё дерево сильнее! 🌱✨
        </div>
      </div>
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
  const [showRetreats, setShowRetreats] = useState(false);
  const [showMarinaSharipova, setShowMarinaSharipova] = useState(false);
  const [showNailsPairPractice, setShowNailsPairPractice] = useState(false);
  const [showChakraPage, setShowChakraPage] = useState(false);
  const [showDiaryStatesPage, setShowDiaryStatesPage] = useState(false);
  const [showDiaryWishesPage, setShowDiaryWishesPage] = useState(false);
  const [showDiaryGratitudePage, setShowDiaryGratitudePage] = useState(false);
  const [telegramUser, setTelegramUser] = useState(null);

  const isSubPageActive = selectedSection !== null ||
                          selectedKnowledgeSection !== null ||
                          selectedBreathPractice !== null ||
                          showDianaGuru ||
                          showRetreats ||
                          showMarinaSharipova ||
                          showNailsPairPractice ||
                          showChakraPage ||
                          showDiaryStatesPage ||
                          showDiaryWishesPage ||
                          showDiaryGratitudePage;

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleOpenChakraPage = () => {
    console.log("handleOpenChakraPage called");
    setShowChakraPage(true);
    setSelectedSection(null);
    console.log("showChakraPage set to true, selectedSection set to null");
  };

  // Загрузка темы из localStorage при запуске
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkTheme(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    } else if (savedTheme === 'light') {
      setIsDarkTheme(false);
      document.documentElement.removeAttribute('data-theme');
    } else {
      // Если пользователь не выбирал, определяем по системной теме
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setIsDarkTheme(true);
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        setIsDarkTheme(false);
        document.documentElement.removeAttribute('data-theme');
      }
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

  const handleBottomBarTabChange = (tab) => {
    setShowChakraPage(false);
    setShowDianaGuru(false);
    setShowRetreats(false);
    setShowMarinaSharipova(false);
    setShowNailsPairPractice(false);
    setShowDiaryStatesPage(false);
    setShowDiaryWishesPage(false);
    setShowDiaryGratitudePage(false);
    setSelectedSection(null);
    setSelectedKnowledgeSection(null);
    setSelectedBreathPractice(null);
    setActiveTab(tab);
  };

  const renderContent = () => {
    if (showNailsPairPractice) {
      return <NailsPairPracticePage onBack={() => setShowNailsPairPractice(false)} />;
    }
    if (showChakraPage) {
      console.log("Rendering ChakraPage");
      return <ChakraPage onBack={() => setShowChakraPage(false)} />;
    }
    if (showDiaryStatesPage) {
      return <DiaryStatesPage onBack={() => setShowDiaryStatesPage(false)} />;
    }
    if (showDiaryWishesPage) {
      return <DiaryWishesPage onBack={() => setShowDiaryWishesPage(false)} />;
    }
    if (showDiaryGratitudePage) {
      return <DiaryGratitudePage onBack={() => setShowDiaryGratitudePage(false)} />;
    }
    if (selectedSection === 'Шанкапракшалана') {
      return <Shankaprakshalana onBack={() => setSelectedSection(null)} />;
    }
    if (selectedSection === 'Гвоздестояние') {
      return <NailsPage onBack={() => setSelectedSection(null)} setShowNailsPairPractice={setShowNailsPairPractice} />;
    }
    if (selectedSection === 'Дыхание') {
      if (selectedBreathPractice === 'breath-square') {
        return <BreathSquarePage onBack={() => setSelectedBreathPractice(null)} />;
      }
      if (selectedBreathPractice === 'breath-triangle') {
        return <BreathTrianglePage onBack={() => setSelectedBreathPractice(null)} />;
      }
      return (
        <div className="knowledge-page" style={{display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 64px)'}}>
          <div>
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
          <button className="knowledge-back" onClick={() => setSelectedSection(null)} style={{display: 'block', margin: '28px auto 0 auto', marginTop: 'auto'}}>← Назад</button>
        </div>
      );
    }
    if (selectedSection === 'Лила') {
      return (
        <div className="knowledge-page" style={{display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 64px)'}}>
          <button className="knowledge-back" onClick={() => setSelectedSection(null)} style={{display: 'block', margin: '-12px auto 4px auto'}}>
            ← Назад
          </button>
          <div style={{
            textAlign: 'center',
            fontFamily: 'Comfortaa, cursive',
            color: '#111',
            fontSize: '0.95rem',
            fontWeight: 500,
            margin: '18px 0 0 0',
            lineHeight: 1.5,
            background: '#e0e0e2',
            borderRadius: 14,
            padding: '16px 8px 14px 8px'
          }}>
            🌟 Игра Лила – Путешествие вглубь себя 🌟<br/>
            Не просто игра. Это зеркало твоей души, это разговор с высшим Я, это трансформация.
          </div>

          {/* Вопросы и описание */}
          <div style={{
            background: '#ededf0', // изменён цвет фона
            borderRadius: 14,
            padding: '16px 8px 14px 8px',
            color: '#111',
            fontFamily: 'Comfortaa, cursive',
            fontSize: '0.95rem',
            textAlign: 'center',
            boxShadow: '0 2px 12px 0 rgba(124,91,179,0.07)',
            maxWidth: 480,
            margin: '0 auto 16px auto',
            lineHeight: 1.7
          }}>
            Хочешь понять, почему в жизни повторяются одни и те же ситуации?<br/>
            Столкнулся с выбором, сомнениями, внутренними противоречиями?<br/>
            Игра Лила — древняя Ведическая практика, в которую играли Брахманы (представители духовной касты в Индии). Лила поможет тебе найти ответы, выйти за пределы ума и увидеть истинные причины происходящего.
          </div>

          {/* Блок "Что ты получишь во время игры" */}
          <div style={{
            background: 'linear-gradient(135deg, #b484f7 0%, #7c5bb3 100%)',
            borderRadius: 16,
            padding: '18px 10px 16px 10px',
            color: '#fff',
            fontFamily: 'Comfortaa, cursive',
            fontSize: '0.95rem',
            textAlign: 'center',
            boxShadow: '0 2px 12px 0 rgba(124,91,179,0.08)',
            maxWidth: 480,
            margin: '0 auto 16px auto',
            lineHeight: 1.55
          }}>
            <b>Что ты получишь во время игры:</b><br/><br/>
            ✨ Мощное осознание своих текущих состояний<br/>
            ✨ Ответы на глубинные вопросы<br/>
            ✨ Прорыв в застойных ситуациях<br/>
            ✨ Вдохновение, ясность и силу двигаться дальше<br/>
            ✨ Найти  предназначение своей души
          </div>

          {/* Заголовок "Отзывы" */}
          <div style={{
            textAlign: 'center',
            margin: '24px auto 16px auto',
            maxWidth: 480
          }}>
            <h2 style={{
              color: '#7c5bb3',
              fontFamily: 'Comfortaa, cursive',
              fontSize: '1.4rem',
              fontWeight: 700,
              margin: 0,
              letterSpacing: '0.02em'
            }}>
              Отзывы
            </h2>
          </div>

          {/* Блок "Лила — это пространство, где играют Боги..." */}
          <div style={{
            background: '#ededf0',
            borderRadius: 14,
            padding: '16px 8px 14px 8px',
            color: '#111',
            fontFamily: 'Comfortaa, cursive',
            fontSize: '0.95rem',
            textAlign: 'center',
            maxWidth: 480,
            margin: '0 auto',
            lineHeight: 1.55
          }}>
            Лила — это пространство, где играют Боги. И ты — один из них.<br/>
            Здесь каждая клетка — символ этапа твоего пути. Каждая фишка — отражение внутреннего состояния.<br/><br/>
            Игру ведёт опытный проводник, создавая безопасное и бережное поле.<br/>
            Формат: индивидуально / в мини-группе (маленькое и большое поле 3*3)<br/>
            Где: онлайн / вживую (по договорённости)<br/>
            Продолжительность: 2,5–4 часа
          </div>

          {/* Миниатюрное видео */}
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '24px 0' }}>
            <iframe 
              src="https://vkvideo.ru/video_ext.php?oid=745985566&id=456239086&hd=4&autoplay=1" 
              width="320" 
              height="180" 
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" 
              frameBorder="0" 
              allowFullScreen
              style={{borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.1)'}}
            />
          </div>

          {/* Кнопка "Записаться на сессию" */}
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '32px 0 0 0' }}>
            <a
              href="https://t.me/disha070?text=Здравствуйте%2C%20хочу%20записаться%20на%20игру%20Лила"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '10px 18px',
                background: 'linear-gradient(90deg, #b484f7 0%, #7c5bb3 100%)',
                color: '#fff',
                fontFamily: 'Comfortaa, cursive',
                fontWeight: 700,
                fontSize: '0.98rem',
                borderRadius: 14,
                border: '3px solid #fff',
                boxShadow: '0 2px 12px 0 rgba(124,91,179,0.13)',
                textDecoration: 'none',
                letterSpacing: '0.01em',
                transition: 'background 0.2s, box-shadow 0.2s, transform 0.1s',
                textAlign: 'center',
                marginBottom: 0,
                minWidth: 160,
                width: '100%',
                maxWidth: 260,
                cursor: 'pointer',
              }}
              onMouseOver={e => { e.currentTarget.style.background = 'linear-gradient(90deg, #7c5bb3 0%, #b484f7 100%)'; e.currentTarget.style.transform = 'scale(1.04)'; }}
              onMouseOut={e => { e.currentTarget.style.background = 'linear-gradient(90deg, #b484f7 0%, #7c5bb3 100%)'; e.currentTarget.style.transform = 'scale(1)'; }}
            >
              Записаться на сессию
            </a>
          </div>

          {/* Нижняя кнопка "Назад" */}
          <button className="knowledge-back" onClick={() => setSelectedSection(null)} style={{display: 'block', margin: '18px auto 24px auto'}}>← Назад</button>
        </div>
      );
    }
    if (selectedSection === 'Медитация') {
      return <MeditationPage onBack={() => setSelectedSection(null)} onChakraClick={handleOpenChakraPage} />;
    }
    if (selectedSection === 'Дневник Жизни') {
      return (
        <div className="knowledge-page" style={{display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 64px)'}}>
          <button 
            onClick={() => setSelectedSection(null)}
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
            Дневник Жизни — это твой личный проводник к внутренней гармонии.<br/><br/>
            Записывай желания, практикуй благодарность, отслеживай свои состояния — и наблюдай, как преображается твоя реальность.<br/><br/>
            Каждая запись — шаг к осознанной, наполненной жизни.
          </div>
          
          {/* Дерево Жизни */}
          <TreeOfLife />
          
          {/* Три квадратные иконки в одну линию */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '16px',
            margin: '24px 0'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              width: '120px'
            }}>
              <div style={{
                width: '120px',
                height: '120px',
                backgroundColor: '#e8f4fd',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'transform 0.2s ease'
              }}
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
              onClick={() => setShowDiaryStatesPage(true)}
              >
                <img src="/states-icon.svg" alt="Дневник Состояний" style={{ width: '64px', height: '64px' }} />
              </div>
              <span style={{
                fontFamily: 'Comfortaa, cursive',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#333',
                textAlign: 'center'
              }}>Дневник<br/>Состояний</span>
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              width: '120px'
            }}>
              <div style={{
                width: '120px',
                height: '120px',
                backgroundColor: '#f0f8ff',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'transform 0.2s ease'
              }}
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
              onClick={() => setShowDiaryWishesPage(true)}
              >
                <img src="/wishes-icon.svg" alt="Дневник Желаний" style={{ width: '64px', height: '64px' }} />
              </div>
              <span style={{
                fontFamily: 'Comfortaa, cursive',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#333',
                textAlign: 'center'
              }}>Дневник<br/>Желаний</span>
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              width: '120px'
            }}>
              <div style={{
                width: '120px',
                height: '120px',
                backgroundColor: '#f5f5f5',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'transform 0.2s ease'
              }}
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
              onClick={() => setShowDiaryGratitudePage(true)}
              >
                <img src="/gratitude-icon.svg" alt="Дневник Благодарности" style={{ width: '64px', height: '64px' }} />
              </div>
              <span style={{
                fontFamily: 'Comfortaa, cursive',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#333',
                textAlign: 'center'
              }}>Дневник<br/>Благодарности</span>
            </div>
          </div>
          
          <button 
            onClick={() => setSelectedSection(null)}
            className="knowledge-back"
            style={{display: 'block', margin: '28px auto 0 auto', marginTop: 'auto'}}>← Назад</button>
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
    if (activeTab === 'knowledge' && selectedKnowledgeSection === 'sacred-music') {
      return <SacredMusicPage onBack={() => setSelectedKnowledgeSection(null)} />;
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
            <div className="knowledge-section knowledge-linkable" onClick={() => setSelectedKnowledgeSection('sacred-music')} style={{cursor:'pointer'}}>
              <h3>Сакральная музыка</h3>
              <p>Подборка музыки для медитаций, практик и внутреннего вдохновения.</p>
            </div>
            <button className="knowledge-back" onClick={() => setActiveTab('home')} style={{display: 'block', margin: '28px auto 0 auto'}}>← Назад</button>
          </div>
        );
      case 'about':
        if (showDianaGuru) {
          return <AboutDianaGuruPage onBack={() => setShowDianaGuru(false)} />;
        }
        if (showRetreats) {
          return <RetreatsPage onBack={() => setShowRetreats(false)} />;
        }
        if (showMarinaSharipova) {
          return <MarinaSharipovaPage onBack={() => setShowMarinaSharipova(false)} />;
        }
        return (
          <div className="knowledge-page">
            <div className="knowledge-title">О нас</div>
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
              Добро пожаловать в мир гармонии и духовного развития! Наше приложение создано для тех, кто стремится к внутреннему равновесию и познанию себя.
            </div>
            {/* Квадратные иконки с кнопками ОТКРЫТЬ */}
            <div style={{margin: '24px 0'}}>
              <PhotoIcons 
                onDianaGuruClick={() => setShowDianaGuru(true)}
                onMarinaSharipovaClick={() => setShowMarinaSharipova(true)}
              />
            </div>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 18, marginTop: 6}}>
              <span style={{fontFamily: 'Comfortaa, cursive', fontWeight: 600, fontSize: '1.08rem', color: '#229ED9'}}>Наш Телеграм канал</span>
              <img src={telegramIcon} alt="Telegram" style={{ width: 24, height: 24 }} />
            </div>
            {/* Красивая кнопка 'Наши ретриты' */}
            <div style={{display: 'flex', justifyContent: 'center', marginBottom: 24}}>
              <button
                style={{
                  background: 'linear-gradient(90deg, #28aae0 0%, #23b7ec 100%)',
                  color: '#fff',
                  fontFamily: 'Comfortaa, cursive',
                  fontWeight: 700,
                  fontSize: '1.08rem',
                  border: 'none',
                  borderRadius: 18,
                  padding: '12px 36px',
                  boxShadow: '0 4px 16px rgba(40,170,224,0.12)',
                  cursor: 'pointer',
                  transition: 'background 0.2s, transform 0.2s',
                }}
                onMouseOver={e => e.currentTarget.style.background = 'linear-gradient(90deg, #23b7ec 0%, #28aae0 100%)'}
                onMouseOut={e => e.currentTarget.style.background = 'linear-gradient(90deg, #28aae0 0%, #23b7ec 100%)'}
                onClick={() => setShowRetreats(true)}
              >
                Наши ретриты
              </button>
            </div>
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
              margin: '0 auto 24px auto',
              lineHeight: 1.7
            }}>
              <div style={{fontWeight: 700, marginBottom: 12}}>Что мы предлагаем:</div>
              <ul style={{color: '#000', lineHeight: 1.6, fontSize: '0.95rem', fontFamily: 'Comfortaa, cursive', textAlign: 'left', display: 'inline-block', margin: '0 auto 0 auto', paddingLeft: 0}}>
                <li><strong>Йога практики</strong> — упражнения для тела и духа</li>
                <li><strong>Гвоздестояние</strong> — практика концентрации и расслабления на доске с гвоздями</li>
                <li><strong>Дыхательные техники</strong> — методы управления энергией</li>
                <li><strong>Медитация</strong> — путь к внутреннему покою</li>
                <li><strong>База знаний</strong> — фильмы и материалы для развития сознания</li>
                <li><strong>Лила</strong> — духовная игра самопознания</li>
                <li><strong>Шанкапракшалана</strong> — практика очищения</li>
              </ul>
              <div style={{fontWeight: 700, marginTop: 24, marginBottom: 12}}>Наша миссия</div>
              <div style={{color: '#000', fontSize: '0.95rem', fontFamily: 'Comfortaa, cursive', textAlign: 'center', marginBottom: 12}}>
                Помочь каждому найти свой путь к гармонии, здоровью и духовному росту через древние практики йоги и современные методы развития.
              </div>
              <div style={{marginTop: 20, padding: 15, background: 'rgba(124, 91, 179, 0.10)', borderRadius: 12, textAlign: 'center', color: '#000', fontStyle: 'italic', fontWeight: 500, fontSize: '0.95rem', fontFamily: 'Comfortaa, cursive'}}>
                "Путь к себе начинается с первого шага"
              </div>
            </div>
            <button className="knowledge-back" onClick={() => setActiveTab('home')} style={{display: 'block', margin: '28px auto 0 auto'}}>← Назад</button>
          </div>
        );
      case 'account':
        return <TelegramLoginButton isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} onAuth={(user) => setTelegramUser(user)} />;
      case 'лила':
        return (
          <div className="knowledge-page" style={{display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 64px)'}}>
            <button className="knowledge-back" onClick={() => setSelectedSection(null)} style={{display: 'block', margin: '28px auto 24px auto'}}>← Назад</button>
            <div style={{
              background: '#f7f3ff',
              borderRadius: 16,
              padding: '24px 16px',
              color: '#7c5bb3',
              fontFamily: 'Comfortaa, cursive',
              fontSize: '1.08rem',
              textAlign: 'center',
              boxShadow: '0 2px 12px 0 rgba(124,91,179,0.07)',
              maxWidth: 480,
              margin: '0 auto',
              lineHeight: 1.7
            }}>
              <b>Лила</b> — это древняя духовная игра самопознания, помогающая взглянуть на свою жизнь с новой стороны, осознать внутренние процессы и получить ответы на важные вопросы. Приглашаем вас в удивительное путешествие к себе!
            </div>
          </div>
        );
      default:
        return <MainSections onSectionClick={setSelectedSection} />;
    }
  };

  useEffect(() => {
    if (activeTab === 'home' && !isSubPageActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [activeTab, isSubPageActive]);

  return (
    <div className="app-root">
      {activeTab === 'home' && !isSubPageActive && <Header />}
      <div className="mobile-frame">
        {renderContent()}
        <BottomBar activeTab={activeTab} setActiveTab={handleBottomBarTabChange} />
      </div>
    </div>
  );
}

export default App;
