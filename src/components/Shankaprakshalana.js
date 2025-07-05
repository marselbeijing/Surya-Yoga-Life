import React, { useState } from 'react';

const detailsTitle = 'Что даёт практика:';
const detailsList = [
  'До -3 кг лишнего веса за 1 неделю',
  'Избавление от аллергии, дерматитов, угрей и различных высыпаний на коже (в тч экзема и псориаз)',
  'Улучшение пищеварения, избавление от запоров и вздутий, эффективна при синдроме раздраженного кишечника (в стадии ремиссии)',
  'Глубокое очищение кишечника от паразитов и болезнетворных бактерий естественным способом (без таблеток и химии)',
  'Перезапуск и укрепление иммунитета',
  'Очищение вкусовых рецепторов — легкий переход на правильное питание',
  'Очищение тонких тел — прилив энергии и сил, приходят новые идеи и возможности',
];
const detailsNote = 'Это НЕ клизма и НЕ медикаменты. Это безопасная и естественная практика, которую проводят йоги тысячелетиями.';

const contraindicationsTitle = 'Противопоказания:';
const contraindicationsList = [
  'Язва желудка',
  'Воспаления органов ЖКТ',
  'Болезни тонкого и толстого кишечника',
  'Беременность',
  'Туберкулёз',
  'Иммунологические заболевания',
  'Повышенная температура тела',
  'Отравления',
  'Голодание',
  'Период менструации',
  'Онкологические заболевания',
  'Заболевания в стадии обострения',
];
const contraindicationsNote = 'ПЕРЕД ПРОВЕДЕНИЕМ ПРАКТИКИ НЕОБХОДИМО ПРОКОНСУЛЬТИРОВАТЬСЯ С ВРАЧОМ';

const complexTitle = 'Что входит в комплекс:';
const complexList = [
  'Теория — подробное описание для безопасного прохождения практики',
  'Практические упражнения — комплекс для легкого и комфортного процесса',
  'Чат с проводником — поддержка и ответы на ваши вопросы',
  'Сопровождение в течение 2 недель',
  'Доступ ко всем материалам — навсегда',
];
const complexBonuses = [
  'Медитация для наполнения энергией после практики',
  'Меню на неделю от нутрициолога',
];
const complexNote = 'Практика проходит в течение 1 дня\nНеобходимо соблюдать особое питание в течение 1 недели после практики';

export default function Shankaprakshalana() {
  // Всегда отображаем всё
  const expanded = true;
  const [contraShowAll, setContraShowAll] = useState(false);
  const contraPreviewCount = 5;
  const complexExpanded = true;
  const previewCount = 3;
  const complexPreviewCount = 3;
  return (
    <div style={{ padding: '28px 16px 70px 16px', maxWidth: 430, margin: '0 auto' }}>
      {/* <h2 style={{
        fontFamily: 'Comfortaa, cursive',
        fontWeight: 700,
        fontSize: '1.35rem',
        color: 'var(--text-primary)',
        marginBottom: 16,
        textAlign: 'center',
        letterSpacing: '0.01em',
      }}>
        Чистка организма
      </h2> */}
      <div style={{
        fontFamily: 'Comfortaa, cursive',
        fontWeight: 700,
        fontSize: '0.95rem',
        color: '#111',
        background: 'rgba(184,116,232,0.07)',
        borderRadius: 12,
        padding: 18,
        boxShadow: '0 1px 4px var(--shadow-color)',
        marginBottom: 12,
        textAlign: 'center',
        lineHeight: 1.6,
        letterSpacing: '0.01em',
      }}>
        Шанк Пракшалана — древний индийский метод полного очищения пищеварительной системы от токсинов и шлаков
      </div>
      <div style={{
        fontFamily: 'Comfortaa, cursive',
        fontWeight: 400,
        fontSize: '0.82rem',
        color: '#333',
        background: 'rgba(184,116,232,0.04)',
        borderRadius: 10,
        padding: 12,
        boxShadow: '0 1px 2px var(--shadow-color)',
        marginBottom: 8,
        textAlign: 'left',
        lineHeight: 1.55,
        position: 'relative',
      }}>
        <div style={{ textAlign: 'center', fontWeight: 600, marginBottom: 6 }}>
          {detailsTitle}
        </div>
        <ul style={{ paddingLeft: 18, margin: 0 }}>
          {detailsList.map((item, idx) => (
            <li key={idx} style={{ marginBottom: 4 }}>{item}</li>
          ))}
        </ul>
        <div style={{ marginTop: 10, fontStyle: 'italic', color: '#444', fontSize: '0.81rem', textAlign: 'left' }}>{detailsNote}</div>
      </div>
      {/* Блок: Что входит в комплекс */}
      <div style={{
        fontFamily: 'Comfortaa, cursive',
        fontWeight: 400,
        fontSize: '0.92rem',
        color: '#fff',
        background: 'linear-gradient(100deg, #a084ee 0%, #7c5bb3 100%)',
        borderRadius: 18,
        padding: '22px 16px 18px 16px',
        boxShadow: '0 4px 24px 0 rgba(124,91,179,0.18)',
        marginBottom: 18,
        textAlign: 'left',
        lineHeight: 1.65,
        position: 'relative',
        border: '2px solid #b484f7',
        transition: 'box-shadow 0.2s, transform 0.1s',
      }}>
        <div style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.08rem', marginBottom: 10, letterSpacing: '0.01em', textShadow: '0 2px 8px rgba(124,91,179,0.10)' }}>
          {complexTitle}
        </div>
        <ul style={{ paddingLeft: 18, margin: 0 }}>
          {complexList.map((item, idx) => (
            <li key={idx} style={{ marginBottom: 6 }}>{item}</li>
          ))}
        </ul>
        <div style={{ fontWeight: 700, margin: '16px 0 6px 0', textAlign: 'center', fontSize: '1.01rem' }}>Бонусы:</div>
        <ul style={{ paddingLeft: 18, margin: 0 }}>
          {complexBonuses.map((item, idx) => (
            <li key={idx} style={{ marginBottom: 6 }}>{item}</li>
          ))}
        </ul>
        <div style={{ marginTop: 14, fontStyle: 'italic', color: '#f7eaff', fontSize: '0.91rem', textAlign: 'left', whiteSpace: 'pre-line', fontWeight: 500 }}>
          {complexNote}
        </div>
      </div>
      {/* Блок: Противопоказания */}
      <div style={{
        fontFamily: 'Comfortaa, cursive',
        fontWeight: 400,
        fontSize: '0.82rem',
        color: '#333',
        background: 'rgba(184,116,232,0.04)',
        borderRadius: 10,
        padding: 12,
        boxShadow: '0 1px 2px var(--shadow-color)',
        marginBottom: 8,
        textAlign: 'left',
        lineHeight: 1.55,
        position: 'relative',
      }}>
        <div style={{ fontWeight: 600, marginBottom: 6, textAlign: 'center' }}>
          {contraindicationsTitle}
        </div>
        <ul style={{ paddingLeft: 18, margin: 0 }}>
          {(contraShowAll ? contraindicationsList : contraindicationsList.slice(0, contraPreviewCount)).map((item, idx) => (
            <li key={idx} style={{ marginBottom: 4 }}>{item}</li>
          ))}
        </ul>
        {contraindicationsList.length > contraPreviewCount && !contraShowAll && (
          <div style={{ textAlign: 'right', marginTop: 0, marginBottom: 0 }}>
            <button
              style={{
                background: 'none',
                border: 'none',
                color: '#7c5bb3',
                fontWeight: 600,
                fontSize: '0.82rem',
                cursor: 'pointer',
                fontFamily: 'Comfortaa, cursive',
                padding: 0,
              }}
              onClick={() => setContraShowAll(true)}
            >Читать полностью</button>
          </div>
        )}
        {contraShowAll && (
          <>
            <div style={{ marginTop: 10, fontStyle: 'italic', color: '#b13a3a', fontWeight: 600, fontSize: '0.81rem', textAlign: 'left' }}>{contraindicationsNote}</div>
            <div style={{ textAlign: 'right', marginTop: 0, marginBottom: 0 }}>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#7c5bb3',
                  fontWeight: 600,
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  fontFamily: 'Comfortaa, cursive',
                  padding: 0,
                }}
                onClick={() => setContraShowAll(false)}
              >Свернуть</button>
            </div>
          </>
        )}
      </div>
      {/* Блок: Кто проводит */}
      <div style={{
        fontFamily: 'Comfortaa, cursive',
        fontWeight: 400,
        fontSize: '0.82rem',
        color: '#333',
        background: 'rgba(184,116,232,0.04)',
        borderRadius: 10,
        padding: 12,
        boxShadow: '0 1px 2px var(--shadow-color)',
        marginBottom: 8,
        textAlign: 'left',
        lineHeight: 1.55,
        position: 'relative',
      }}>
        <div style={{ textAlign: 'center', fontWeight: 600, marginBottom: 6 }}>
          Кто проводит:
        </div>
        <div style={{ marginBottom: 8, textAlign: 'center' }}>
          Диана Середа — сертифицированный преподаватель хатха-йоги, с практикой более 13 лет
        </div>
        <div style={{ fontStyle: 'italic', color: '#7c5bb3', fontWeight: 500, fontSize: '0.78rem', textAlign: 'center', whiteSpace: 'pre-line' }}>
          «Хотите почувствовать легкость, обновление и прилив энергии? Приглашаю вас пройти этот путь очищения вместе. Практика проводится под моим чутким сопровождением, в комфортной и поддерживающей атмосфере. Не требует никаких специальных приспособлений и инвентаря. Подходит для всех, кто стремится к здоровью, обновлению и гармонии.»
        </div>
      </div>
      {/* Кнопка приобрести */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '24px 0 0 0' }}>
        <a
          href="https://t.me/disha070"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '16px 36px',
            background: 'linear-gradient(90deg, #b484f7 0%, #7c5bb3 100%)',
            color: '#fff',
            fontFamily: 'Comfortaa, cursive',
            fontWeight: 700,
            fontSize: '1.12rem',
            borderRadius: 16,
            boxShadow: '0 2px 12px 0 rgba(124,91,179,0.13)',
            textDecoration: 'none',
            letterSpacing: '0.01em',
            transition: 'background 0.2s, box-shadow 0.2s, transform 0.1s',
            textAlign: 'center',
            marginBottom: 24,
          }}
          onMouseOver={e => { e.currentTarget.style.background = 'linear-gradient(90deg, #7c5bb3 0%, #b484f7 100%)'; e.currentTarget.style.transform = 'scale(1.04)'; }}
          onMouseOut={e => { e.currentTarget.style.background = 'linear-gradient(90deg, #b484f7 0%, #7c5bb3 100%)'; e.currentTarget.style.transform = 'scale(1)'; }}
        >
          Приобрести за 4700 руб
        </a>
      </div>
    </div>
  );
} 