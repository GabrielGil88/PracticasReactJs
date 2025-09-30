//import { useState } from 'react'
//import RandomUser from './components/RandomUser'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Container } from 'react-bootstrap'

import Header from './components/Header'
import Footer from './components/Footer'

import Clientes from './pages/Clientes'
import Contacto from './pages/Contacto'
import Productos from './pages/Productos'

function App() {

  return (
    //    <div>
    //      <h1>Random User API</h1>
    //      <RandomUser />
    //    </div>
    <Router>
      <Header />
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<h2>Página de inicio</h2>} />
          <Route path="/sobre" element={<h2>Sección Sobre</h2>} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/productos" element={<Productos />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App



