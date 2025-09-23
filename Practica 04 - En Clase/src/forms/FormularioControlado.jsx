import { useState } from 'react';

export default function FormularioControlado() {

    const [nombre, setNombre] = useState("");
    const [provincia, setProvincia] = useState("");
    const [fecha, setFecha] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita el envio del formulario si hay errores
        alert (
            `Datos enviados correctamente:`
            + `Nombre: ${nombre}`
            + `Provincia: ${provincia}`
            + `Fecha: ${fecha}`
        );
        setNombre("");
        setProvincia("");
        setFecha("");
    };

    return (
        <div>
            <h2>Formulario Controlado</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px'}}>
                <label>
                    Nombre:
                    <input 
                        type="text" 
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder= "Escriba su nombre"
                        required
                    />
                </label>
                <br />
                <label>
                    Provincia: 
                    <select 
                        value={provincia}
                        onChange={(e) => setProvincia(e.target.value)}
                        required
                    >
                        <option value="">Seleccione una provincia</option>
                        <option value="Buenos Aires">Buenos Aires</option>
                        <option value="Córdoba">Córdoba</option>
                        <option value="Santa Fe">Santa Fe</option>
                        <option value="Mendoza">Mendoza</option>
                    </select>
                </label>
                <br />
                <label>
                    Fecha de Nacimiento:
                    <input 
                        type="date" 
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                        required
                    />
                </label>
                </div>
                <button type="submit"> Enviar </button>
            </form>
        </div>
    );
}