import { useState } from "react";


export default function MostrarTexto() {

    const [visible, setVisible] = useState(true);

    return (
        <div style={{textAlign:"center", justifyContent:'center', alignContent: 'center'}}>
            <button 
                style={{backgroundColor: "#24790fff"}} 
                onClick={() => setVisible(!visible)}>
                {visible ? "Ocultar": "Mostrar"}
            </button>
            {visible && <p>👁️👄👁️</p>}
        </div>
    );

}