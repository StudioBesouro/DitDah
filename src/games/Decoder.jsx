import React, { useState, useEffect } from 'react';
import './Decoder.css';

export default function Decoder({ onBack }) {
  const [currentChar, setCurrentChar] = useState({ char: 'S', code: '· · ·' });
  const [status, setStatus] = useState('idle'); // idle, playing

  const playMorse = (code) => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    let time = audioCtx.currentTime;
    setStatus('playing');

    code.split('').forEach(symbol => {
      if (symbol === ' ') { time += 0.2; return; }
      
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.frequency.value = 600;
      const duration = symbol === '·' ? 0.1 : 0.3;
      
      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(0.2, time + 0.01);
      gain.gain.setValueAtTime(0.2, time + duration);
      gain.gain.linearRampToValueAtTime(0, time + duration + 0.01);
      
      osc.start(time);
      osc.stop(time + duration + 0.02);
      time += duration + 0.1;
    });

    setTimeout(() => setStatus('idle'), time * 1000);
  };

  return (
    <div className="decoder-container">
      <button onClick={onBack} className="back-button">← Voltar</button>
      <div className="decoder-card">
        <h3>Decifre o Som</h3>
        <button 
          className={`audio-btn ${status}`} 
          onClick={() => playMorse(currentChar.code)}
          disabled={status === 'playing'}
        >
          {status === 'playing' ? 'Tocando...' : '🔊 Ouvir Código'}
        </button>
        <div className="options-grid">
          {['S', 'H', 'E', 'A'].map(letter => (
            <button key={letter} className="option-button" onClick={() => alert(letter === currentChar.char ? "Correto!" : "Tente de novo")}>
              {letter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}