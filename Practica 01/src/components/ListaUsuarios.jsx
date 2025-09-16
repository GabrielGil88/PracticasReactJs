import React from "react";

const ListaUsuarios = () => {

    const usuarios = ['Juan', 'María', 'Pedro', 'Ana'];

    return (
        <ul>
            {usuarios.map((usuario) => (
                <li 
                key={usuario}
                >
                    {usuario}
                </li>
            )
            )}
        </ul>
    );
};

export default ListaUsuarios;