import { useState } from "react";
import "../pages/Home.css";

export default function Footer() {
  const [isSobreOpen, setIsSobreOpen] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <p className="footer-main" style={{ margin: 0, fontWeight: 'bold' }}>
            © 2026 DitDah
          </p>
          <p className="footer-sub" style={{ margin: 0, opacity: 0.8 }}>
            Projeto educativo sobre comunicação em código Morse
          </p>
        </div>
        
        <div className="social-links">
          {/* Link direto para o seu repositório */}
          <a 
            href="https://github.com/StudioBesouro/DitDah" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Github
          </a>

          {/* Botão para abrir o modal Sobre */}
          <button 
            onClick={() => setIsSobreOpen(true)}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: '#64748b', 
              fontWeight: 600, 
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: 'inherit'
            }}
          >
            Sobre
          </button>
        </div>
      </div>

      {/* MODAL SOBRE (ESTILO MOBILE) */}
      {isSobreOpen && (
        <div className="modal-overlay" onClick={() => setIsSobreOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Sobre o DitDah</h3>
              <button className="close-btn" onClick={() => setIsSobreOpen(false)}>×</button>
            </div>
            <div className="modal-body">
              <p>O <strong>DitDah</strong> é uma plataforma interativa criada para simplificar o aprendizado do código Morse.</p>
              <p>Combinando áudio rítmico, referências visuais e uma interface moderna, o projeto visa preservar essa técnica clássica de comunicação para novas gerações de entusiastas e estudantes.</p>
              <hr style={{ border: '0', borderTop: '1px solid #e2e8f0', margin: '15px 0' }} />
              <p style={{ fontSize: '0.8rem', color: '#64748b' }}>Desenvolvido como projeto educacional Thamyres.</p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}