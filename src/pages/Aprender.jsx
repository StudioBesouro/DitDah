import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import './Learn.css';

const ALPHABET_VIDEOS = [
  { letter: "A", videoUrl: "/assets/a.mp4" }, { letter: "B", videoUrl: "/assets/b.mp4" },
  { letter: "C", videoUrl: "/assets/c.mp4" }, { letter: "D", videoUrl: "/assets/d.mp4" },
  { letter: "E", videoUrl: "/assets/e.mp4" }, { letter: "F", videoUrl: "/assets/f.mp4" },
  { letter: "G", videoUrl: "/assets/g.mp4" }, { letter: "H", videoUrl: "/assets/h.mp4" },
  { letter: "I", videoUrl: "/assets/i.mp4" }, { letter: "J", videoUrl: "/assets/j.mp4" },
  { letter: "K", videoUrl: "/assets/k.mp4" }, { letter: "L", videoUrl: "/assets/l.mp4" },
  { letter: "M", videoUrl: "/assets/m.mp4" }, { letter: "N", videoUrl: "/assets/n.mp4" },
  { letter: "O", videoUrl: "/assets/o.mp4" }, { letter: "P", videoUrl: "/assets/p.mp4" },
  { letter: "Q", videoUrl: "/assets/q.mp4" }, { letter: "R", videoUrl: "/assets/r.mp4" },
  { letter: "S", videoUrl: "/assets/s.mp4" }, { letter: "T", videoUrl: "/assets/t.mp4" },
  { letter: "U", videoUrl: "/assets/u.mp4" }, { letter: "V", videoUrl: "/assets/v.mp4" },
  { letter: "W", videoUrl: "/assets/w.mp4" }, { letter: "X", videoUrl: "/assets/x.mp4" },
  { letter: "Y", videoUrl: "/assets/y.mp4" }, { letter: "Z", videoUrl: "/assets/z.mp4" },
];

const NUMBER_VIDEOS = [
  { number: "0", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { number: "1", videoUrl: "https://www.w3schools.com/html/movie.mp4" },
];

const PlayIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#2563eb" stroke="#2563eb" strokeWidth="2">
    <polygon points="5 3 19 12 5 21 5 3"/>
  </svg>
);

export default function Aprender() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (videoUrl, label) => {
    setSelectedVideo({ url: videoUrl, title: label });
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="home-page">
      <Header />
      <main className="content learn-container">
        
        {/* Seção Alfabeto */}
        <section className="section-card learn-section">
          <h2 className="title">Alfabeto - Vídeos</h2>
          <div className="video-grid">
            {ALPHABET_VIDEOS.map((item) => (
              <div key={item.letter} className="video-card" onClick={() => openModal(item.videoUrl, `Letra ${item.letter}`)}>
                <div className="video-thumbnail">
                   <div className="play-overlay"><PlayIcon /></div>
                   {/* OTIMIZAÇÃO: preload="none" para não travar o carregamento da página */}
                   <video src={item.videoUrl} muted preload="none" />
                </div>
                <div className="video-info">
                  <span className="video-char">Letra {item.letter}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="video-external-link">
            <p>Veja o vídeo original completo! <a href="https://youtu.be/7kNITQOhmzk?si=ViL8AxArPDj-MKa_" target="_blank" rel="noopener noreferrer">Clique aqui</a></p>
          </div>
        </section>

        {/* Seção Números */}
        <section className="section-card learn-section">
          <h2 className="title">Números - Vídeos</h2>
          <div className="video-grid">
            {NUMBER_VIDEOS.map((item) => (
              <div key={item.number} className="video-card" onClick={() => openModal(item.videoUrl, `Número ${item.number}`)}>
                <div className="video-thumbnail">
                   <div className="play-overlay"><PlayIcon /></div>
                   <video src={item.videoUrl} muted preload="none" />
                </div>
                <div className="video-info">
                  <span className="video-char">Número {item.number}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* MODAL DE VÍDEO */}
      {selectedVideo && (
        <div className="video-modal-overlay" onClick={closeModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedVideo.title}</h3>
              <button className="close-btn" onClick={closeModal}>&times;</button>
            </div>
            
            <video 
              key={selectedVideo.url}
              src={selectedVideo.url}
              controls 
              autoPlay 
              className="modal-video-player"
            >
              Seu navegador não suporta vídeos.
            </video>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}