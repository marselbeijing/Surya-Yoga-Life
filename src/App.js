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
  return (
    <div className="knowledge-page">
      <div className="knowledge-title">Наши ретриты</div>
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
  const [telegramUser, setTelegramUser] = useState(null);

  const isSubPageActive = selectedSection !== null ||
                          selectedKnowledgeSection !== null ||
                          selectedBreathPractice !== null ||
                          showDianaGuru ||
                          showRetreats ||
                          showMarinaSharipova ||
                          showNailsPairPractice ||
                          showChakraPage;

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
      {activeTab === 'home' && selectedSection !== 'Дыхание' && selectedSection !== 'Шанкапракшалана' && selectedSection !== 'Медитация' && !showChakraPage && selectedSection !== 'Лила' && selectedSection !== 'Гвоздестояние' && selectedSection !== 'Парная практика' && <Header />}
      <div className="mobile-frame">
        {renderContent()}
        <BottomBar activeTab={activeTab} setActiveTab={handleBottomBarTabChange} />
      </div>
    </div>
  );
}

export default App;
