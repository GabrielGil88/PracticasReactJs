import MostrarTexto from './components/MostrarTexto.jsx'
import Contador from './components/Contador.jsx';
//---------------------
import BotonClick from './events/BotonClick.jsx';
import CajaMouse from './events/CajaMouse.jsx';

function App() {

  return (
    <div>
      <h2>Ejemplo Nro 1</h2>
      <Contador />
      <hr />
      <h2>Ejemplo Nro 2</h2>
      <MostrarTexto />
      <hr />
      <h2>Ejemplo Nro 3</h2>
      <BotonClick />
      <hr />
      <h2>Ejemplo Nro 4</h2>
      <CajaMouse /> 
    </div>
  );
}

export default App
