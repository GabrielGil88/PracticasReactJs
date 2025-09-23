import { useState } from "react";

export default function CajaMouse() {

    const [color, setColor] = useState('lightgray');

    return (
        <div
            style={{
                margin: '20px',
                backgroundColor: color,
                border: '2px solid black',
                borderRadius: '8px',
                width: '800px',
                height: '50px',
                cursor: 'pointer',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex'
            }}
            onMouseOver={() => setColor('lightblue')}
            onMouseOut={() => setColor('lightgray')}
        >
            <p style={{ textAlign: 'center', alignItems: "center", color: "black" }}>Pasa el mouse por aquí</p>
        </div>
    )
}