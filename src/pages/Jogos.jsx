// src/pages/Jogos.jsx
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Jogos() {
  return (
    <div className="home-page">
      <Header />
      <main className="content">
        <section className="section-card">
          <h2 className="title">Jogos e Desafios</h2>
          <p className="text">Em breve, novos jogos para você praticar seu código morse!</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}