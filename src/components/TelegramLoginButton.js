import React, { useEffect, useState } from 'react';

export default function TelegramLoginButton() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Проверяем, есть ли объект Telegram WebApp
    if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe && window.Telegram.WebApp.initDataUnsafe.user) {
      setUser(window.Telegram.WebApp.initDataUnsafe.user);
    }
  }, []);

  if (user) {
    return (
      <div className="placeholder" style={{paddingTop: 32}}>
        <div style={{fontWeight: 600, fontSize: '1.1em', marginBottom: 8}}>Добро пожаловать, {user.first_name}!</div>
        <div style={{fontSize: '0.95em', color: '#888'}}>Вы успешно авторизованы через Telegram</div>
      </div>
    );
  }

  return (
    <div className="placeholder" style={{paddingTop: 32}}>
      <div style={{fontWeight: 600, fontSize: '1.1em', marginBottom: 8}}>Авторизация через Telegram...</div>
      <div style={{fontSize: '0.95em', color: '#888'}}>Пожалуйста, откройте приложение через Telegram Mini App</div>
    </div>
  );
} 