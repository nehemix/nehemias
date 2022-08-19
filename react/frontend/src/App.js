//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/layout/Header';
import HomePage from './pages/HomePage'
import HogarPage from './pages/HogarPage'
import EmpresaPage from './pages/EmpresaPage'
import BlogPage from './pages/BlogPage'
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
          <Route path='blog' element={<BlogPage />} />
          <Route path='contacto' element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
