import { useState } from "react";

export default function Contador() {

    const [contador, setContador] = useState(0);

    return (
        <div style={{ justifyContent: "center", textAlign: 'center', margin: '50px', fontSize: '20px' }}>
            <h2>Contador: {contador}</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <button onClick={() => setContador(contador + 1)}> ➕ Sumar</button>
            <button onClick={() => setContador(contador - 1)}> ➖ Restar</button>
            <button onClick={() => setContador(0)}> ↻ Reiniciar </button>
            </div>
        </div>
    )
}

