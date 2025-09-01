// EJERCICIO 3
// IMPLEMENTACIÓN DEL PARADIGMA PROCEDURAL

// Se hizo uso de prompt sync para poder usar el prompt por medio de node.js
const prompt = require('prompt-sync')();


// VALIDACIÓN DE DATOS 
// FUNCION 1: verifica formato de email
function validar_email(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresion regular para verificar si un texto tiene forma de correo electronico.
    return emailRegex.test(email); // Se usa test para comprobar si email cumple con el patron de emailRegex.
}

let mi_email = prompt("Ingrese un correo electronico: ");
if (validar_email(mi_email)) {
    console.log("El correo electrónico tiene un formato válido.");
} else {
    console.log("El correo electrónico no tiene un formato válido.");
}



// FUNCION 2: verifica fortaleza de contraseña
function verificar_fortaleza(contraseña) {
    if (contraseña.length < 8) {
        return "Débil: La contraseña debe tener al menos 8 caracteres.";
    }
    // El signo ! es el operador NOT, es decir, que cada sentencia es verdadera cuando NO cumple con la condición. 
    if (!/[A-Z]/.test(contraseña)) { // [A-Z] toma todo el abecedario en mayuscula.
        return "Débil: Debe contener al menos una letra mayúscula.";
    }
    if (!/[a-z]/.test(contraseña)) { // [a-z] toma todo el abecedario en minuscula.
        return "Débil: Debe contener al menos una letra minúscula.";
    }
    if (!/[0-9]/.test(contraseña)) { // [0-9] para verificar si tiene numero.
        return "Débil: Debe contener al menos un número.";
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(contraseña)) { // Verifica si hay caracter especial.
        return "Débil: Debe contener al menos un carácter especial.";
    }
    return "Fuerte: La contraseña cumple con los requisitos.";
}

let resultado = ""; // Guarda el mensaje devuelto por la función.
let password = ""; // Almacena lo que el usuario ingrese en el prompt.

// El bucle se repite hasta que la contraseña sea fuerte
while (true) {
    password = prompt("Introduce una contraseña para verificar su fortaleza:");
    resultado = verificar_fortaleza(password);
    console.log(resultado);

    if (resultado.startsWith("Fuerte")) { // Verifica si el mensaje empieza con la palabra "Fuerte". Puede fallar dependiendo si hay dos mensajes que empiezan igual.
        break; 
    }
}



// FUNCION 3: verifica edad válida
function verificar_edad(edad){
    let mensaje;

    if (edad <= 90 && edad >= 18){ // && significa AND
        mensaje = "Edad valida: Eres mayor de edad.";
    } else if (edad > 0 && edad < 18) {
        mensaje = "Edad invalida: Eres menor de edad.";
    } else {
        mensaje = "Ingresa una edad valida.";
    }
    return mensaje;
}

let edad = parseInt(prompt("Ingresa tu edad: "));
console.log(verificar_edad(edad));




// FUNCION 4: válida objeto producto completo
function validarProducto(producto) {
    if (typeof producto !== "object" || producto === null) {
        return "Error: El producto no es un objeto válido.";
    }

    if (!producto.nombre || typeof producto.nombre !== "string") {
        return "Error: El nombre del producto es obligatorio y debe ser texto.";
    }
    
    if (typeof producto.precio !== "number" || producto.precio <= 0) {
        return "Error: El precio debe ser un número mayor a 0 y debe ser un float.";
    }
    
    if (!Number.isInteger(producto.stock) || producto.stock < 0) {
        return "Error: El stock debe ser un número entero positivo.";
    }

    if (!producto.categoria || typeof producto.categoria !== "string") {
        return "Error: La categoría es obligatoria y debe ser texto.";
    }

    return "✅ Producto válido.";
}

let producto = {
    nombre: "Laptop Gamer",
    precio: 2000,
    stock: 12,
    categoria: "tecnologia"
};

console.log(validarProducto(producto));
