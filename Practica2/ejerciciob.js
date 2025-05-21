const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 250 },
    { nombre: "Teclado", precio: 750 },
    { nombre: "Monitor", precio: 3000 }
];

const productosCaros = productos.filter(producto => producto.precio > 1000);

const nombresProductosCaros = productosCaros.map(producto => producto.nombre);

console.log(nombresProductosCaros);