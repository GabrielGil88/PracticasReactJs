//Json Simple

const persona = {
    nombre: "Juan",
    edad: 30,
    esEstudiante: false,
}

console.log(persona);

const usuarios={
    "usuarios":[
        {id:1, nombre:"Juan", edad:30, activo:false},
        {id:2, nombre:"Ana", edad:25, activo:true},
        {id:3, nombre:"Luis", edad:28, activo:true},
        {id:4, nombre:"Marta", edad:22, activo:false},
    ]
}

console.log(usuarios);

const personaConDireccion = {
    persona: {
        nombre: "Carlos",
        edad: 35,
        direccion:{
            ciudad: "Lanus, Buenos aires",
            codigoPostal: "1824"
        },
    }
};

console.log("Nombre:",personaConDireccion.persona.nombre + " - Codigo Postal: " + personaConDireccion.persona.direccion.codigoPostal);

