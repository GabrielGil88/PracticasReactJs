import React from "react";

const Boton = () => {

    const botones = ['Agregar al carrito', 'Ver más'];

    const bgBoton = {
        'Agregar al carrito': '#1d1d1d',
        'Ver más': '#dddcdc',
    };


    return(
        <div>
            {botones.map((btn) => (
                <button 
                    key={btn} className="estilosBoton" style={{backgroundColor: bgBoton[btn], color: btn === 'Agregar al carrito' ? 'white' : 'black'}}
                    onClick={() => alert("Has hecho click en " + btn)}
                >
                    {btn}
                </button>
            ))}
        </div>
    );
};

export default Boton;