// src/pages/Jogos.jsx
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Aprender() {
  return (
    <div className="home-page">
      <Header />
      <main className="content">
        <section className="section-card">
          <h2 className="title">Vídeos</h2>
          <p className="text">Em breve, vídeos serão adicionados para você aprender código morse com maior facilidade!</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}