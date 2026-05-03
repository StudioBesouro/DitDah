import React, { useState, useEffect } from 'react';
import './Quiz.css';

const MORSE_DATA = [
  { char: 'A', code: '· −' }, { char: 'B', code: '− · · ·' }, { char: 'C', code: '− · − ·' },
  { char: 'D', code: '− · ·' }, { char: 'E', code: '·' }, { char: 'F', code: '· · − ·' },
  { char: 'G', code: '− − ·' }, { char: 'H', code: '· · · ·' }, { char: 'I', code: '· ·' },
  { char: 'J', code: '· − − −' }, { char: 'K', code: '− · −' }, { char: 'L', code: '· − · ·' },
  { char: 'M', code: '− −' }, { char: 'N', code: '− ·' }, { char: 'O', code: '− − −' },
  { char: 'P', code: '· − − ·' }, { char: 'Q', code: '− − · −' }, { char: 'R', code: '· − ·' },
  { char: 'S', code: '· · ·' }, { char: 'T', code: '−' }, { char: 'U', code: '· · −' },
  { char: 'V', code: '· · · −' }, { char: 'W', code: '· − −' }, { char: 'X', code: '− · · −' },
  { char: 'Y', code: '− · − −' }, { char: 'Z', code: '− − · ·' }, { char: '0', code: '− − − − −' },
  { char: '1', code: '· − − − −' }, { char: '2', code: '· · − − −' }, { char: '3', code: '· · · − −' }
];

export default function Quiz({ onBack }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [quizData, setQuizData] = useState([]);
  const [gameFinished, setGameFinished] = useState(false);

  const generateQuiz = () => {
    const shuffled = [...MORSE_DATA].sort(() => Math.random() - 0.5).slice(0, 10);
    const quiz = shuffled.map((item) => {
      const wrongOptions = MORSE_DATA
        .filter((m) => m.char !== item.char)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((m) => m.char);
      const options = [...wrongOptions, item.char].sort(() => Math.random() - 0.5);
      return { question: item.code, options, correct: item.char };
    });
    setQuizData(quiz);
    setGameFinished(false);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  useEffect(() => { generateQuiz(); }, []);

  const handleAnswer = (answer) => {
    if (showResult) return;
    setSelectedAnswer(answer);
    setShowResult(true);
    if (answer === quizData[currentQuestion].correct) setScore(score + 1);
  };

  if (quizData.length === 0) return <div className="loading">Carregando...</div>;

  if (gameFinished) {
    const percentage = (score / quizData.length) * 100;
    return (
      <div className="quiz-container">
        <div className="quiz-result-card">
          <div className="trophy-icon">🏆</div>
          <h2>Quiz Finalizado!</h2>
          <div className="score-number">{score}/{quizData.length}</div>
          <p>Você acertou {percentage.toFixed(0)}%!</p>
          <button onClick={generateQuiz} className="play-again-button">🔄 Jogar Novamente</button>
          <button onClick={onBack} className="back-link">Sair</button>
        </div>
      </div>
    );
  }

  const q = quizData[currentQuestion];

  return (
    <div className="quiz-container">
      <button onClick={onBack} className="back-button">← Voltar</button>
      <div className="quiz-card">
        <div className="progress-bar"><div className="fill" style={{width: `${(currentQuestion + 1) * 10}%`}}></div></div>
        <div className="morse-display">{q.question}</div>
        <div className="options-grid">
          {q.options.map(opt => (
            <button 
              key={opt}
              disabled={showResult}
              onClick={() => handleAnswer(opt)}
              className={`option-button ${showResult && opt === q.correct ? 'correct' : ''} ${showResult && selectedAnswer === opt && opt !== q.correct ? 'wrong' : ''}`}
            >
              {opt}
            </button>
          ))}
        </div>
        {showResult && (
          <button className="next-button" onClick={() => {
            if (currentQuestion < 9) {
              setCurrentQuestion(prev => prev + 1);
              setShowResult(false);
              setSelectedAnswer(null);
            } else setGameFinished(true);
          }}>
            {currentQuestion < 9 ? 'Próxima' : 'Ver Resultado'}
          </button>
        )}
      </div>
    </div>
  );
}