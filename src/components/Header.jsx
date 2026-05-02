import { NavLink, Link } from "react-router-dom"; // Importamos as ferramentas de navegação
import "../pages/Home.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        {/* Usamos Link na logo para sempre voltar para a home ao clicar nela */}
        <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="2"/>
            <path d="M4.93 4.93a10 10 0 0 0 0 14.14"/>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
            <path d="M8.46 8.46a5 5 0 0 0 0 7.08"/>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.08"/>
          </svg>
          Código Morse
        </Link>

        <nav className="nav">
          {/* NavLink adiciona a classe 'active' automaticamente se o 'to' bater com a URL atual */}
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-button active" : "nav-button"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Home
          </NavLink>

          <NavLink to="/aprender" className={({ isActive }) => isActive ? "nav-button active" : "nav-button"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
            Aprender
          </NavLink>

          <NavLink to="/jogos" className={({ isActive }) => isActive ? "nav-button active" : "nav-button"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="6" y1="11" x2="10" y2="11"/>
              <line x1="8" y1="9" x2="8" y2="13"/>
              <line x1="15" y1="12" x2="15.01" y2="12"/>
              <line x1="18" y1="10" x2="18.01" y2="10"/>
              <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/>
            </svg>
            Jogos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}