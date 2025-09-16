import '../App.css'
import Boton from './Boton';

const Tarjeta = ({ titulo, descripcion}) => {


    return (
        <div className="estilosTarjeta">
            <h3 className="estilosTexto">{titulo}</h3>
            <p className="estilosTexto">{descripcion}</p>
            <Boton />
        </div>
    );
};


export default Tarjeta;