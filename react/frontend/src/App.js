import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from './components/common';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import ContactoPage from './pages/ContactoPage';
import HogarPage from './pages/HogarPage';
import EmpresaPage from './pages/EmpresaPage';


function App() {
  return (
    <div className="container">
      <Header/>
      <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hogar" element={<HogarPage />} />
          <Route path="/empresa" element={<EmpresaPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
