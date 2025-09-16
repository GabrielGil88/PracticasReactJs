import React from "react";

const Botones = () => {

    const botones = ['Aceptar', 'Cancelar', 'Eliminar'];


    const estilosBoton = {
    padding: '10px 20px',
    margin: '5px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    };


    const coloresBoton = {
        Aceptar: '#05aa55',
        Cancelar: '#ff2121',
        Eliminar: 'gray',
    };  


    return (
        <div>
            {botones.map((btn) => (
                    <button
                        key={btn}
                        style={{...estilosBoton, backgroundColor: coloresBoton[btn], color: 'white'}}
                        onClick={() => alert("Has hecho click en " + btn)}
                        >    
                        {btn}
                    </button>
                ))
            }
        </div>
    );

};

export default Botones;