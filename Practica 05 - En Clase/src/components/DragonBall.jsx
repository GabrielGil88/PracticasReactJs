import { useEffect, useState } from "react";


export default function DragonBall() {

    const [personajes, setPersonajes] = useState([])


    useEffect(() => {
        fetch("https://dragonball-api.com/api/characters")
            .then(res => res.json())
            .then((data) => {
                setPersonajes(data.items);
            })
    })

    return (
        <div>
            <div>
                <h1>Personajes de Dragon Ball</h1>
                <ul>
                    {personajes.map((p) => (
                        <li key={p.id}>{p.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
