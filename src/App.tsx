import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar'
import Footer from './components/estaticos/footer/Footer'
import Home from './paginas/home/Home';
import Login from './paginas/login/Login'
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario'
import './App.css';
import ListaTema from './components/temas/listaTema/ListaTema';
import ListaPostagem from './components/postagem/listaPostagem/ListaPostagem';
import CadastroPostagem from './components/postagem/cadastroPostagem/CadastroPostagem';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagem/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';


function App() {
  return(
    <Router>
    <Navbar />
    <div style={{ minHeight: '100vh' }}>
    <Routes> // Antigo Switch
    <Route path="/" element={<Login />} />
    <Route path="/logar" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/cadastrar" element={<CadastroUsuario />} />
    <Route path="/temas" element={<ListaTema />} />
    <Route path="/postagens" element={<ListaPostagem />} />
    <Route path="/formularioPostagem" element={<CadastroPostagem />} />
    <Route path="/formularioPostagem/:id" element={<CadastroPostagem />} />
    <Route path="/formularioTema" element={<CadastroTema />} />
    <Route path="/formularioTema/:id" element={<CadastroTema />} />
    <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
    <Route path="/deletarTema/:id" element={<DeletarTema />} />
    
    </Routes>
    </div>
    <Footer />
    </Router>
    )
}

export default App;
