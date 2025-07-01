import React, { useEffect, useState } from 'react';
import './TelegramLoginButton.css';

export default function TelegramLoginButton() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function tryGetUser() {
      try {
        if (
          window.Telegram &&
          window.Telegram.WebApp &&
          window.Telegram.WebApp.initDataUnsafe &&
          window.Telegram.WebApp.initDataUnsafe.user
        ) {
          setUser(window.Telegram.WebApp.initDataUnsafe.user);
          setLoading(false);
        } else {
          setTimeout(() => {
            // Повторная попытка через 1 секунду
            if (!user) {
              setLoading(false);
              setError('Данные пользователя не получены. Откройте через Telegram Mini App на телефоне или в Telegram Desktop.');
            }
          }, 1000);
        }
      } catch (e) {
        setLoading(false);
        setError('Ошибка авторизации через Telegram.');
      }
    }
    tryGetUser();
    // eslint-disable-next-line
  }, []);

  if (user) {
    return (
      <div className="account-card">
        <div className="account-avatar">
          <img
            src={user.photo_url || 'https://telegram.org/img/t_logo.png'}
            alt={user.first_name}
            className="account-avatar-img"
          />
        </div>
        <div className="account-info">
          <div className="account-name">{user.first_name} {user.last_name || ''}</div>
          <div className="account-id">ID: {user.id}</div>
          <div className="account-status success">Авторизация через Telegram выполнена</div>
        </div>
      </div>
    );
  }

  return (
    <div className="account-card">
      <div className="account-avatar">
        <img src="https://telegram.org/img/t_logo.png" alt="Telegram" className="account-avatar-img" />
      </div>
      <div className="account-info">
        <div className="account-name">Гость</div>
        <div className="account-id">ID: —</div>
        <div className="account-status error">
          {loading ? 'Проверка авторизации...' : error || 'Авторизация через Telegram...'}
        </div>
        {!loading && (
          <div style={{fontSize: '0.85em', color: '#bba6d4', marginTop: 6}}>
            Для авторизации откройте приложение через Telegram Mini App на телефоне или в Telegram Desktop.<br/>
            В браузере авторизация недоступна.
          </div>
        )}
      </div>
    </div>
  );
} 