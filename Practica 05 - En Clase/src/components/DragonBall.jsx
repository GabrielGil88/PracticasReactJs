import { useEffect, useState } from "react";


export default function DragonBall() {

    const [personajes, setPersonajes] = useState([]);
    const [cargando, setCargando] = useState(true);


    useEffect(() => {
        fetch("https://dragonball-api.com/api/characters")
            .then(res => res.json())
            .then((data) => {
                setPersonajes(data.items || data);
            })
            .catch((error) => console.error("Error al cargar personajes", error))
            .finally(() => setCargando(false));
    },[]);

    if (cargando) {
        return <p>Cargando personajes...</p>;
    }

    return (
        <div>
            <div>
                <h1>Personajes de Dragon Ball</h1>
                <ul>
                    {personajes.slice(0,10).map((p) => (
                        <li key={p.id}>
                            {p.name} ({p.race})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
