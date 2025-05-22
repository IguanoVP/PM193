const personas = [
    {nombre: "Ana", edad: 22 },
    {nombre: "Luis", edad: 35 },
    {nombre: "Maria", edad: 28 },
];

const personaslista = personas.find(persona => persona.nombre === "Luis");
console.log(personaslista);

personas.forEach((persona) => {
    console.log(persona.nombre);
});

const suma = personas.reduce((total, persona)=> total + persona.edad, 0);
    console.log(suma);