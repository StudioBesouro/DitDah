import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Home.css";

export default function Home() {
  const [playingSound, setPlayingSound] = useState(null);

  const letras = [
    { l: "A", m: ". -" }, { l: "B", m: "- . . ." }, { l: "C", m: "- . - ." },
    { l: "D", m: "- . ." }, { l: "E", m: "." }, { l: "F", m: ". . - ." },
    { l: "G", m: "- - ." }, { l: "H", m: ". . . ." }, { l: "I", m: ". ." },
    { l: "J", m: ". - - -" }, { l: "K", m: "- . -" }, { l: "L", m: ". - . ." },
    { l: "M", m: "- -" }, { l: "N", m: "- ." }, { l: "O", m: "- - -" },
    { l: "P", m: ". - - ." }, { l: "Q", m: "- - . -" }, { l: "R", m: ". - ." },
    { l: "S", m: ". . ." }, { l: "T", m: "-" }, { l: "U", m: ". . -" },
    { l: "V", m: ". . . -" }, { l: "W", m: ". - -" }, { l: "X", m: "- . . -" },
    { l: "Y", m: "- . - -" }, { l: "Z", m: "- - . ." },
  ];

  const numeros = [
    { n: "0", m: "- - - - -" }, { n: "1", m: ". - - - -" },
    { n: "2", m: ". . - - -" }, { n: "3", m: ". . . - -" },
    { n: "4", m: ". . . . -" }, { n: "5", m: ". . . . ." },
    { n: "6", m: "- . . . ." }, { n: "7", m: "- - . . ." },
    { n: "8", m: "- - - . ." }, { n: "9", m: "- - - - ." },
  ];

  const playMorse = (code, id) => {
    if (playingSound) return;

    setPlayingSound(id);
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // MUDANÇA AQUI: de 80 para 120 para ficar mais lento
    const dotDuration = 120; 
    const dashDuration = dotDuration * 3;
    const spaceDuration = dotDuration;
    let time = audioContext.currentTime;

    code.split(" ").forEach((symbol) => {
      if (symbol === "." || symbol === "·") {
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        osc.connect(gain);
        gain.connect(audioContext.destination);
        osc.frequency.value = 600;
        gain.gain.setValueAtTime(0.3, time);
        osc.start(time);
        osc.stop(time + dotDuration / 1000);
        time += (dotDuration + spaceDuration) / 1000;
      } else if (symbol === "-" || symbol === "−") {
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        osc.connect(gain);
        gain.connect(audioContext.destination);
        osc.frequency.value = 600;
        gain.gain.setValueAtTime(0.3, time);
        osc.start(time);
        osc.stop(time + dashDuration / 1000);
        time += (dashDuration + spaceDuration) / 1000;
      }
    });

    // O timeout garante que o ícone pare de brilhar exatamente quando o som terminar
    setTimeout(() => setPlayingSound(null), (time - audioContext.currentTime) * 1000);
  };

  const VolumeIcon = ({ isActive }) => (
    <div className="volume-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={isActive ? "#2563eb" : "#94a3b8"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
      </svg>
    </div>
  );

  return (
    <div className="home-page">
      <Header />
      <main className="content">
        <section className="section-card">
          <h2 className="title">Alfabeto em Morse</h2>
          <div className="morse-grid">
            {letras.map((item, i) => (
              <div 
                key={i} 
                className={`morse-item ${playingSound === item.l ? "playing" : ""}`}
                onClick={() => playMorse(item.m, item.l)}
              >
                <VolumeIcon isActive={playingSound === item.l} />
                <h3 className="morse-letter">{item.l}</h3>
                <p className="morse-code">{item.m}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-card">
          <h2 className="title">Numbers em Morse</h2>
          <div className="morse-grid">
            {numeros.map((item, i) => (
              <div 
                key={i} 
                className={`morse-item ${playingSound === item.n ? "playing" : ""}`}
                onClick={() => playMorse(item.m, item.n)}
              >
                <VolumeIcon isActive={playingSound === item.n} />
                <h3 className="morse-letter">{item.n}</h3>
                <p className="morse-code">{item.m}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}