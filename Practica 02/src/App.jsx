import './App.css'
import ListaProductos from './components/Productos'
import Tarjeta from './components/Tarjeta'

function App() {


  return (
    <div>
      <h2>Ejercicio Nº1</h2>
      <ListaProductos/>
      <hr />
      <h2>Ejercicio Nº2 y Nº3</h2>
      <div>
        <Tarjeta 
          titulo="Oferta especial" 
          descripcion="Este es el primer producto. 20% de descuento en todos los productos." 
        />
      </div>
      
    </div>
  )
}

export default App
