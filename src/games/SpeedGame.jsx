import React, { useState, useEffect } from 'react';
import './SpeedGame.css';

export default function SpeedGame({ onBack }) {
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    let timer;
    if (gameStarted && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    } else if (timeLeft === 0) {
      setGameStarted(false);
    }
    return () => clearInterval(timer);
  }, [gameStarted, timeLeft]);

  return (
    <div className="speed-container">
      <button onClick={onBack} className="back-button">← Voltar</button>
      <div className="speed-card">
        <div className="stats">
          <span className="time">⏱️ {timeLeft}s</span>
          <span className="score">⚡ {score} pts</span>
        </div>
        {!gameStarted ? (
          <button className="start-btn" onClick={() => { setGameStarted(true); setTimeLeft(30); setScore(0); }}>
            Começar Corrida!
          </button>
        ) : (
          <div className="game-active">
            <div className="morse-target">· − ·</div>
            <input type="text" placeholder="Digite a letra..." autoFocus />
          </div>
        )}
      </div>
    </div>
  );
}