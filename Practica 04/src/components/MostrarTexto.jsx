import { useState } from "react";


export default function MostrarTexto() {

    const [visible, setVisible] = useState(true);

    return (
        <div style={{justifyContent:'center', alignContent: 'center', marginTop: '20px'}}>
            <button style={{backgroundColor: "#bb23aa"}} onClick={() => setVisible(!visible)}>
                {visible ? "Ocultar": "Mostrar"}
            </button>
            {visible && <p>Hola, soy un texto</p>}
        </div>
    );

}