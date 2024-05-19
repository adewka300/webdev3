import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === '0') {
      alert('Успешная авторизация!');
      setError(''); 
    } else {
      setError('Неверное имя пользователя или пароль');
    }
  };

  return (
    <div className="login-container">
      <h2>Вход</h2>
      <input
        className="login-input"
        type="text"
        placeholder="Имя пользователя"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        className="login-input"
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button className="login-button" onClick={handleLogin}>Войти</button>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default LoginPage;
