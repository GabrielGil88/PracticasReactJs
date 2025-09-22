import  Saludo  from './components/Saludo.jsx'
import Usuario from './components/Usuario.jsx'
import Boton  from './components/Boton.jsx'


function App() {

  const mostrarAlerta = () => {
    alert("Hola mundo.. !!!");
  }

  return (
    <div>
      <h1>Ejemplos de Props</h1>
      <Saludo nombre="Gabriel" />

      <Usuario nombre="Raul" edad={30} />
      <Usuario nombre="Ana" edad={25} />
      <Usuario nombre="Luis" edad={28} />
      <Usuario nombre="Marta" edad={32} />
      <Usuario nombre="Carlos" edad={27} />

      <Boton texto="Ingresar" onClick={mostrarAlerta} />
    </div>
  )
}

export default App
