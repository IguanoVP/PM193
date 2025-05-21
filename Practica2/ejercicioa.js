const persona = {
    nombre: "Erick",
    edad: 20,
    direccion: {
        ciudad: "Qro",
        pais: "Mexico"
    }
};

const { nombre, edad, direccion: { ciudad } } = persona;

console.log(`Me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`);