// EJERCICIO 1:
// IMPLEMENTACIÓN DEL PARADIGMA FUNCIONAL

// Objeto: Solo elemento con propiedades.
// Array: Coleccion de esos elementos.
// map(), filter() y reduce() solo funcionan en arrays.

// GESTIÓN DE ESTUDIANTES
const students = [
    {id: 1, name: "Ana", age: 20, grade: 85, course: "JavaScript"},
    {id: 2, name: "Carlos", age: 22, grade: 92, course: "Python"},
    {id: 3, name: "Maria", age: 19, grade: 78, course: "JavaScript"},
    {id: 4, name: "Luis", age: 21, grade: 88, course: "Java"},
    {id: 5, name: "Sofia", age: 20, grade: 95, course: "JavaScript"}
];


// 1) Encontrar todos los estudiantes de JS con nota mayor a 80.
const caso_uno = students.filter(student => student.grade > 80 && student.course === "JavaScript").map(student => student.name);
// console.log("\nEstudiantes de JS con nota mayor a 80: ", caso_uno)


// 2) Calcula el promedio de notas de todos los estudiantes.
const caso_dos = students.map(student => student.grade).reduce((acumulador, grade) => acumulador + grade, 0) / students.length;
// console.log("\nPromedio de las notas: ", caso_dos);


// 3) Obtener un array con solo los nombres de estudiantes mayores de 20 años.
const caso_tres = students.filter(student => student.age > 20).map(student => student.name);
// console.log("\n Array con los nombres de los estudiantes mayores de 20 años: ", caso_tres);


// 4) Encontrar el estudiante con la nota mas alta.
// Forma 1:
const caso_cuatro = students.map(student => student.grade);
const mayor_nota = Math.max(...caso_cuatro); // Uso de spread operator: Convierte un array [ 2,4,5] en 2,3,5. 
const estudiante = students.find(student => student.grade === mayor_nota);
const nombre_estudiante = estudiante.name;
// console.log("\nEstudiante con la  nota mayor: ", estudiante);
// console.log("\nEstudiante con la  nota mayor: ", nombre_estudiante);


// Forma 2:
const topStudent = students.reduce((max, student) =>
    student.grade > max.grade ? student : max
);



// Exportar modulo
module.exports = {
    students,
    caso_uno,
    caso_dos,
    caso_tres,
    caso_cuatro,
    mayor_nota,
    estudiante,
    nombre_estudiante
}
