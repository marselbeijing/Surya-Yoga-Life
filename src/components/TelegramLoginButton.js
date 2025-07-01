import React, { useEffect, useState } from 'react';
import './TelegramLoginButton.css';

export default function TelegramLoginButton() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function authorize() {
      console.log('=== Telegram WebApp Debug ===');
      console.log('window.Telegram:', window.Telegram);
      console.log('window.Telegram.WebApp:', window.Telegram?.WebApp);
      
      if (window.Telegram && window.Telegram.WebApp) {
        const tg = window.Telegram.WebApp;
        
        console.log('initData:', tg.initData);
        console.log('initDataUnsafe:', tg.initDataUnsafe);
        console.log('initDataUnsafe.user:', tg.initDataUnsafe?.user);
        console.log('platform:', tg.platform);
        console.log('version:', tg.version);
        
        // Проверяем наличие пользователя
        if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
          console.log('✅ User found in initDataUnsafe:', tg.initDataUnsafe.user);
          setUser(tg.initDataUnsafe.user);
          setLoading(false);
          return;
        }
        
        // Если нет пользователя, но есть initData
        if (tg.initData) {
          console.log('⚠️ initData exists but no user in initDataUnsafe');
          console.log('initData length:', tg.initData.length);
          console.log('initData preview:', tg.initData.substring(0, 100) + '...');
          
          // Попробуем распарсить initData вручную
          try {
            const urlParams = new URLSearchParams(tg.initData);
            const userParam = urlParams.get('user');
            if (userParam) {
              const parsedUser = JSON.parse(userParam);
              console.log('✅ User parsed from initData:', parsedUser);
              setUser(parsedUser);
              setLoading(false);
              return;
            }
          } catch (e) {
            console.error('❌ Error parsing initData:', e);
          }
        }
        
        console.log('❌ No user data found');
      } else {
        console.log('❌ Telegram WebApp not available');
      }
      
      // Задержка перед показом ошибки
      setTimeout(() => {
        setLoading(false);
        setError('Данные пользователя не получены. Откройте через Telegram Mini App.');
      }, 3000);
    }
    
    // Запускаем авторизацию с задержкой для инициализации Telegram WebApp
    setTimeout(authorize, 500);
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
          <div className="account-status success">✅ Авторизация через Telegram выполнена</div>
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
          {loading ? '🔄 Проверка авторизации...' : '❌ ' + (error || 'Авторизация через Telegram...')}
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