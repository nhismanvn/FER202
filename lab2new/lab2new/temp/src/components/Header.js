// File: src/components/Header.js
export default function Header() {
  return (
    <header className="header-wrapper">
      <div className="header-logo">
        <img src="/assets/img/fptlogo.png" alt="FPT Logo" />
        <h4>FPT UNIVERSITY</h4>
      </div>

      <nav className="nav-bar">
        <div className="brand">Pizza House</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
        <div className="search-container">
          <input type="text" placeholder="Search" />
          <button>🔍</button>
        </div>
      </nav>
    </header>
  );
}
