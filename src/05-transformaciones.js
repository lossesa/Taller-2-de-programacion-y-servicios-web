// EJERCICIO 5:
// IMPLEMENTACIÓN DEL PARADIGMA FUNCIONAL

const prompt = require('prompt-sync')();

// TRANSFORMACIÓN DE DATOS
const products = [
    {id: 1, name: "Laptop", price: 999, category: "Electronics", brand: "HP"},
    {id: 2, name: "Mouse", price: 25, category: "Electronics", brand: "Logitech"},
    {id: 3, name: "Desk", price: 200, category: "Furniture", brand: "IKEA"},
    {id: 4, name: "Chair", price: 150, category: "Furniture", brand: "IKEA"},
    {id: 5, name: "Keyboard", price: 80, category: "Electronics", brand: "Corsair"}
];


// 1) Agrega campo "priceWithTax" (19% IVA)
const caso_uno = products.map(product => ({
    ...product, // Copia lo que el array ya tiene.
    priceWithTax: +(product.price ** 0.19).toFixed(2) // Agrega el precio con iva.
}));

// console.log("\nAgregar campo priceWithTax: ", caso_uno);


// 2) Agrega campo "status" basado en stock (High, Medium, Low)
const caso_dos = products.map(product => ({
    ...product,
    stock: Math.floor(Math.random() * 16)
})).map(product => ({
    ...product,
    status: product.stock >= 10
        ? "High" // ? es un operador ternario, o una manera de usar if-else de forma corta.
        : product.stock >= 5
            ? "Medium"
            : "Low"    
}));
// console.log(caso_dos)



// 3) Crea un resumen de inventario por categoría
const caso_tres = caso_dos.reduce((acumulador, product) => { // Usamos caso_dos, en vez de products.
    const category = product.category;

    if (!acumulador[category]) {
        acumulador[category] = { count: 0, totalStock: 0, promedio_Stock: 0 };
    }

    acumulador[category].count += 1; // Cantidad de objetos segun categoria.
    acumulador[category].totalStock += product.stock; // Sumatoria de los stocks de cada objeto segun categoria.
    acumulador[category].promedio_Stock = +(acumulador[category].totalStock / acumulador[category].count).toFixed(2); // Saca el promedio de esa sumatoria de stocks. 

    return acumulador;
}, {});

// console.log(caso_tres);



// Exportar modulo
module.exports = {
    products,
    caso_uno,
    caso_dos,
    caso_tres
}
