import React from "react";

const ListaProductos = () => {

    const productos = ['Manzanas', 'Naranjas', 'Peras', 'Frutillas'];

    return (
        <ol style={{ textAlign: 'left', color: 'blue', fontSize: '20px', padding: '10px' }}>
            {productos.map((producto) => (
                <li key={producto}
                >
                    {producto}
                </li>
            ))}
        </ol>
    );
};

export default ListaProductos;