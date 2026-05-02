import "../pages/Home.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <p className="footer-main" style={{ margin: 0, fontWeight: 'bold' }}>
            © 2026 Código Morse
          </p>
          <p className="footer-sub" style={{ margin: 0, opacity: 0.8 }}>
            Projeto educativo sobre comunicação em código Morse
          </p>
        </div>
        
        <div className="social-links">
           <a href="#">Github</a>
           <a href="#">Sobre</a>
        </div>
      </div>
    </footer>
  );
}