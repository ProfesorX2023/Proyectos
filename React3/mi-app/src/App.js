import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function LoginForm({ onLogin }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Limpiar mensajes de error previos
    setError('');
    
    // Validar contraseña
    if (password === '1234') {
      onLogin(true);
    } else {
      setError('Contraseña incorrecta. Intenta con "1234"');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Iniciar Sesión</h2>
      
      <div className="form-group">
        <label>Contraseña:</label>
        <input 
          type="password" 
          placeholder="Ingresa tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={error ? 'input-error' : ''}
        />
        {error && <p className="error-message">{error}</p>}
      </div>
      
      <button type="submit" className="login-button">Ingresar</button>
    </form>
  );
}

function AdminPanel({ onLogout }) {
  return(
    <div className="admin-panel">
      <h1>Bienvenido al Panel de Administración</h1>
      <img src={logo} className="App-logo" alt="logo" />
      
      <div className="admin-content">
        <p>Has accedido al área restringida</p>
        <p>Contraseña válida: 1234</p>
        <button onClick={onLogout} className="logout-button">
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        {isLoggedIn 
          ? <AdminPanel onLogout={() => setIsLoggedIn(false)} /> 
          : <LoginForm onLogin={setIsLoggedIn} />
        }
      </header>
    </div>
  );
}

export default App;