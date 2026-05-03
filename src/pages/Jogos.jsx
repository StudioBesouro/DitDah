// src/pages/Jogos.jsx
import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

// Importação dos componentes de jogos
import Quiz from '../games/Quiz';
import Translator from '../games/Translator';
import Decoder from '../games/Decoder';
import SpeedGame from '../games/SpeedGame';

// Importação do CSS principal dos jogos
import '../games/Games.css';

// Ícones SVG (Os mesmos do seu código do Figma)
const BrainIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
  </svg>
);
const MessageIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
);
const VolumeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
);
const ZapIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);

const GAMES_LIST = [
  { id: 'quiz', name: 'Quiz Morse', description: 'Identifique letras e números', icon: BrainIcon, color: 'blue' },
  { id: 'translator', name: 'Tradutor', description: 'Texto para Morse com áudio', icon: MessageIcon, color: 'green' },
  { id: 'decoder', name: 'Decodificador', description: 'Ouça e adivinhe o código', icon: VolumeIcon, color: 'purple' },
  { id: 'speed', name: 'Velocidade', description: 'Seja o mais rápido possível!', icon: ZapIcon, color: 'orange' }
];

export default function Jogos() {
  const [selectedGame, setSelectedGame] = useState(null);

  const onBack = () => setSelectedGame(null);

  // Lógica para decidir qual tela mostrar
  const renderContent = () => {
    switch (selectedGame) {
      case 'quiz': return <Quiz onBack={onBack} />;
      case 'translator': return <Translator onBack={onBack} />;
      case 'decoder': return <Decoder onBack={onBack} />;
      case 'speed': return <SpeedGame onBack={onBack} />;
      default:
        return (
          <div className="games-container">
            <div className="games-header">
              <h2 className="title">Jogos e Desafios</h2>
              <p className="text">Aprenda código Morse de forma divertida!</p>
            </div>
            <div className="games-grid">
              {GAMES_LIST.map((game) => {
                const Icon = game.icon;
                return (
                  <button
                    key={game.id}
                    onClick={() => setSelectedGame(game.id)}
                    className={`game-card game-card-${game.color}`}
                  >
                    <div className="game-card-content">
                      <div className="game-icon"><Icon /></div>
                      <div className="game-info">
                        <h3>{game.name}</h3>
                        <p>{game.description}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="home-page">
      <Header />
      <main className="content">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}