// ARCHIVO DE TEST

// Importar los datos y resultados desde 01-estudiantes.js
// Forma 1
const {
    students,
    caso_uno,
    caso_dos,
    caso_tres,
    caso_cuatro,
    mayor_nota,
    estudiante,
    nombre_estudiante
} = require('../src/01-estudiantes');

console.log("\nLista de estudiantes:", students);
console.log("\nCaso 1 - JS con nota > 80 en curso JS:", caso_uno);
console.log("\nCaso 2 - Promedio de notas:", caso_dos);
console.log("\nCaso 3 - Nombres > 20 años:", caso_tres);
console.log("\nCaso 4 - Estudiante con mayor nota:", nombre_estudiante);


// Importar los datos y resultados desde 05-transformaciones.js
// Forma 2
const transformacion = require('../src/05-transformaciones');

console.log("\nLista de productos: ", transformacion.products);
console.log("\nCaso 1 - Agregar campo priceWithTax: ", transformacion.caso_uno);
console.log("\nCaso 2 - Agregar campo status: ", transformacion.caso_dos);
console.log("\nCaso 3 - Resumen inventario por categoria: ", transformacion.caso_tres);



