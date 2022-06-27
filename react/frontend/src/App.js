//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/layout/Header';
import HomePage from './pages/HomePage'
import HogarPage from './pages/HogarPage'
import EmpresaPage from './pages/EmpresaPage'
import NosotrosPage from './pages/NosotrosPage'
import ContactoPage from './pages/ContactoPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='hogar' element={<HogarPage />} />
          <Route path='empresa' element={<EmpresaPage />} />
          <Route path='nosotros' element={<NosotrosPage />} />
          <Route path='contacto' element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
