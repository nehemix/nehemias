import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/layout/Header'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import homePage from './pages/homePage';
import nosotrosPage from './pages/nosotrosPage';
import contactoPage from './pages/contactoPage';
import empresaPage from './pages/empresaPage';


function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<homePage />} />
          <Route path="/hogar" component={<hogarPage />} />
          <Route path="/empresa" element={<empresaPage />} />
          <Route path="/contacto" element={<contactoPage />} />
          <Route path="/nosotros" element={<nosotrosPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
