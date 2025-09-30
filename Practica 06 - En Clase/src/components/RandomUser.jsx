import React, { useEffect, useState } from "react";


function RandomUser() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        // solicitud del tipo: get / post / put / delete
        fetch("https://randomuser.me/api/") // request line (tipo get)

            .then((response) => response.json()) // response / Que la respuesta la convierta a json (legible)
            .then((data) => { // cuando los datos esten listos, guardalos en el estado
                setUser(data.results[0])
            })
            .catch(error => console.error("Error al conectar usuario", error));
    }, []);

    return (
        <div>
            {!user ? (<p>Cargando...</p>) : (
                <div>
                    <img src={user.picture.large}
                        alt={user.name}
                        style={{ borderRadius: "50%" }}
                    />

                    <h2>
                        {user.name.first}
                        {user.name.last}
                    </h2>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Location: {user.location.city}, {user.location.country}</p>
                </div>)
            }
        </div>
    );
}

export default RandomUser;