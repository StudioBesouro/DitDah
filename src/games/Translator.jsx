import React, { useState } from 'react';
import './Translator.css';

const MORSE_MAP = {
  'A': '· −', 'B': '− · · ·', 'C': '− · − ·', 'D': '− · ·', 'E': '·', ' ': '/'
  // Adicione as outras letras aqui conforme necessário
};

export default function Translator({ onBack }) {
  const [text, setText] = useState('');
  
  const translate = (input) => {
    return input.toUpperCase().split('').map(char => MORSE_MAP[char] || '').join('   ');
  };

  return (
    <div className="translator-container">
      <button onClick={onBack} className="back-button">← Voltar</button>
      <div className="translator-card">
        <h2>Tradutor Morse</h2>
        <textarea 
          placeholder="Digite seu texto aqui..."
          onChange={(e) => setText(e.target.value)}
          maxLength="100"
        />
        <div className="morse-output">
          <label>Resultado:</label>
          <p>{translate(text) || '...'}</p>
        </div>
      </div>
    </div>
  );
}