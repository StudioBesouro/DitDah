import { Routes, Route } from 'react-router-dom'; // ADICIONE ISSO
import Home from './pages/Home';
// Importe as outras páginas também:
import Aprender from './pages/Aprender'; 
import Jogos from './pages/Jogos';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aprender" element={<Aprender />} />
      <Route path="/jogos" element={<Jogos />} />
    </Routes>
  );
}

export default App;