// EJERCICIO 1:
// IMPLEMENTACIÓN DEL PARADIGMA FUNCIONAL

// GESTIÓN DE ESTUDIANTES

const students = [
    {id: 1, name: "Ana", age: 20, grade: 85, course: "JavaScript"},
    {id: 2, name: "Carlos", age: 22, grade: 92, course: "Python"},
    {id: 3, name: "Maria", age: 19, grade: 78, course: "JavaScript"},
    {id: 4, name: "Luis", age: 21, grade: 88, course: "Java"},
    {id: 5, name: "Sofia", age: 20, grade: 95, course: "JavaScript"}
];

console.log("\n ----------- FUNCIONAL ----------");

// 1) Encontrar todos los estudiantes de JS con nota mayor a 80.
const caso_uno = students.filter(student => student.grade > 80 && student.course === "JavaScript").map(student => student.name);
console.log("\nEstudiantes de JS con nota mayor a 80: ", caso_uno)

// 2) Calcula el promedio de notas de todos los estudiantes.
const caso_dos = students.map(student => student.grade).reduce((acumulador, grade) => acumulador + grade, 0) / students.length;
console.log("\nPromedio de las notas: ", caso_dos);

// 3) Obtener un array con solo los nombres de estudiantes mayores de 20 años.
const caso_tres = students.filter(student => student.age > 20).map(student => student.name);
console.log("\n Array con los nombres de los estudiantes mayores de 20 años: ", caso_tres);

// 4) Encontrar el estudiante con la nota mas alta.
// const caso_cuatro = students.map(student => student.grade);
// const mayorNota = Math.max(caso_cuatro);
// const caso_cuatro_dos = caso_cuatro.find(student => student.grade === mayorNota);
// console.log("\nEstudiante con la  nota mayor: ", caso_cuatro_dos);