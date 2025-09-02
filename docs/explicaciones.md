# Explicaciones y conceptos nuevos

# 1. test()
# Es un método de expresiones regulares en JavaScript que verifica si una cadena cumple con un patrón. Devuelve true si encuentra una o mas coincidencias, de caso contrario, devuelve false. Ejemplo:
# if (!/[A-Z]/.test(contraseña)) {
#     return "Débil: Debe contener al menos una letra mayúscula."; }


# 2. start.with()
# Es un método de cadenas (String) que comprueba si un texto empieza con un fragmento específico. 


# 3. Expresiones regulares
# Son patrones que sirven para buscar, validar o reemplazar texto dentro de cadenas. En JavaScript se escriben entre / y /. Ejemplo:
# (!/[A-Z]/.test(contraseña))
# const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


# 4. prompt-sync
# Es una librería de Node.js que permite pedir datos al usuario desde la consola de forma síncrona (pausando la ejecución hasta que el usuario responda).
# Se instala con --> npm install prompt-sync.
# Se usa con --> const prompt = require('prompt-sync')();


# 5. typeof
# Es un operador que indica el tipo de dato de una variable.


# 6. Metodo estatico
# Se define con static: No se llama con new, sino directamente con la clase. Se utiliza cuando se trabaja con info externa o general. En este caso se usa el metodo getTotalValue del archivo poo.js de forma estatica debido a que el valor total no depende de un solo producto, sino de un array de productos y este se encuentra por fuera de la clase Product. 
# En caso contrario, tendria que crear un metodo que enliste los productos o crear una clase inventario por a parte. 


# 7. Redondear en JS. 
# math.round --> Redondeo al numero entero mas cercano. 
# math.floor --> Redondeo hacia abajo.
# math.ceil --> Redondeo hacia arriba.
# toFixed --> +(product.price ** 0.19).toFixed(2) esto abrevia a dos decimales.


# 8. Agregar campo a un array 
# forEach: recorre cada objeto y le asigna un nuevo campo, pero modificar el array original.
# map(): Se usa map para crear un nuevo array con el nuevo campo.



# 9. Operador ternario
# Uso de ? para reemplazar if-else en una sola linea.
# condición ? valor_si_verdadero : valor_si_falso
# condicion: se evalua como true o false.
# ?: separa la condicion del valor que se devuelve si la condicion es verdadera.
# : separa el valor verdadero del valor que se devuelve si la condicion es falsa.
