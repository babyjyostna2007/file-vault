import { useState } from 'react';
import './LoginPage.css';

const VALID_USER = { username: 'admin', password: '1234' };

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!username || !password) {
      setError('Please fill in all fields.');
      return;
    }

    if (
      username === VALID_USER.username &&
      password === VALID_USER.password
    ) {
      onLogin();
    } else {
      setError('Invalid username or password.');
    }
  }

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="login-icon">🗄️</div>
        <h2 className="login-title">File Vault</h2>
        <p className="login-subtitle">Sign in to access your files</p>

        {error && <div className="login-error">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label className="form-label">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input"
              placeholder="Enter username"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              placeholder="Enter password"
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="login-hint">Use admin / 1234</p>
      </div>
    </div>
  );
}

export default LoginPage;