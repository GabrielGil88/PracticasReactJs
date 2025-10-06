//import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './components/Login'
import Inicio from './components/Inicio'
import Productos from './components/Productos'
import Administracion from './components/Administracion'
import RutaProtegida from './components/RutaProtegida'


function App() {


  return (
    <BrowserRouter>
      {/* Header */}
      <Routes>
        <Route></Route>
        <Route></Route>
        <Route path="/productos" element={Productos}/>
        < Route path="/admin" element={<RutaProtegida>
          <Administracion />
        </RutaProtegida>} />

        <Route path='/' element={<RutaProtegida>
          <Inicio />
        </RutaProtegida>} />

        {/* <Route path="/perfil/:id" element={<RutaProtegida>
          <Perfil />
        </RutaProtegida>} /> */}

        <Route path='/login' element={<Login />} />

      </Routes>

      {/* Footer */}

    </BrowserRouter>
  )
}

export default App
