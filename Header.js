import './Header.css';

function Header({ title, onLogout }) {
  return (
    <header className="header">
      <div className="header-left">
        <div className="header-icon">🗄️</div>
        <div>
          <h1 className="header-title">{title}</h1>
          <p className="header-subtitle">Your personal file manager</p>
        </div>
      </div>
      <button className="logout-btn" onClick={onLogout}>
        Logout
      </button>
    </header>
  );
}

export default Header;