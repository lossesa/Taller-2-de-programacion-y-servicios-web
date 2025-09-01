// EJERCICIO 4
// IMPLEMENTACIÓN DEL PARADIGMA FUNCIONAL

const prompt = require('prompt-sync')();

// FILTROS AVANZADOS
const products = [
    {id: 1, name: "Laptop", price: 999, category: "Electronics", brand: "HP"},
    {id: 2, name: "Mouse", price: 25, category: "Electronics", brand: "Logitech"},
    {id: 3, name: "Desk", price: 200, category: "Furniture", brand: "IKEA"},
    {id: 4, name: "Chair", price: 150, category: "Furniture", brand: "IKEA"},
    {id: 5, name: "Keyboard", price: 80, category: "Electronics", brand: "Corsair"}
];

// 1) Filtra productos por rango de precio (min, max)
const min = Number(prompt("Ingrese el precio mínimo (1 a 999): "));
const max = Number(prompt("Ingrese el precio máximo ( 1 a 999): "));

const caso_uno = products.filter(product => product.price >= min && product.price <= max).sort((a,b) => a.price - b.price);
console.log("\nProductos en el rango y ordenados: ", caso_uno);


// 2) Agrupa productos por categoría.
// 1. Reduce recorre cada elemento del array y acumula en "acumulador" los productos, pero agrupados por la categoria. 
// 2. Acumulador inicia como un objeto vacio {}
// 3. En el condicional se verifica si ya existe una clave en acumulador, y si no la hay, crea una clave con el nombre de la categoria del primer producto; a este se le asigna un array vacio.
// 4. En la segunda pasada, acumulador ya no esta vacio, entonces se agrega el producto cuya categoria corresponde a la categoria que se pide.
// 5. Si hay una nueva categoria, entonces se vuelve a crear y asi sucesivamente. 
const caso_dos = products.reduce((acumulador, product) => {
    const categoria = product.category;
    if (!acumulador[categoria]) {
        acumulador[categoria] = [];
    }
    acumulador[categoria].push(product);
    return acumulador;
}, {});

console.log("\nAgrupar por categoria: ",caso_dos);



// 3) Encuentra productos de una marca específica.
const marca = prompt("Ingresa la marca: ").toLowerCase();

const caso_tres = products.filter(product => product.brand.toLowerCase() === marca);
console.log("\nFiltrar por marca: ", caso_tres)


// 4) Calcula estadísticas por categoría (promedio, total, cantidad)
const caso_cuatro = products.reduce((acumulador, product) => {
    const categoria = product.category;

    if (!acumulador[categoria]) {
        acumulador[categoria] = { total: 0, cantidad: 0, promedio: 0 };
    }

    acumulador[categoria].total += product.price; // Toma el total por la suma de los precios.
    acumulador[categoria].cantidad++; // Devuelve la cantidad de elementos en cada categoria.
    acumulador[categoria].promedio = acumulador[categoria].total / acumulador[categoria].cantidad; // Toma el total y lo divide entre cantidad. 

    return acumulador;
}, {});
console.log("\nEstadísticas por categoría: ", caso_cuatro);
