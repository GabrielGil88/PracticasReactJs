import { useState } from "react";

export default function BotonClick() {

    const [mensaje, setMensaje] = useState("");

    const handleClick = () => {
        setMensaje("¡Hola! Haz hecho clic en el botón.");
    }

    return (
        <div style={{textAlign: "center", marginTop: "20px"}}>
            <button onClick={handleClick}>Haz clic aquí</button>
            <p>{mensaje}</p>
        </div>
    );
}