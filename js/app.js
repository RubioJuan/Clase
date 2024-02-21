// Objeto

// const persona = { nombre : 'Juan' , edad : 25 , cuidad : 'Madrid'};

// Destructuracion de objetos 
// const { nombre, edad, cuidad } = persona;

// Uso de las variables extraidas 
// console.log(nombre);
// console.log(edad);
// console.log(cuidad);


// const persona = { nombre : 'Juan', edad : 25 , cuidad : 'Madrid' , pais : 'España'};

// // Rest en la destructuracion para recoger el resto de propiedase en un objeto 
// const { nombre, ...resto} = persona;
// console.log(resto);
// console.log(nombre);


// Desestructuracion en argumentos de funciones con objetos

// const persona = {nombre : 'Juan', edad : 25, ciudad : 'Madrid'};

// function saludar ({nombre, edad, ciudad}){
//     console.log(`${nombre} tiene ${edad} años y vive en ${ciudad}.`);
// } 
// saludar(persona);


// Desestructuracionn anidada en objetos

// const persona = {nombre : 'Juan', edad : 25, direccion : {ciudad : 'Madrid', codigoPostal : '28001'}};

// const {nombre, edad , direccion: {ciudad, codigoPostal}} = persona;
// console.log(nombre, edad , ciudad, codigoPostal);


// Renombrar las variables durante la desestructuracion en objetos 

// const persona = { nombre : 'Juan', edad: 25, ciudad: 'Madrid'};

// // Destructuracion con renombramiento
// const { nombre: aliasNombre, edad: aliasEdad, ciudad: aliasCiudad} = persona;

// // Uso de las variables extraidas cpn nuevos nombres 

// console.log(aliasNombre);
// console.log(aliasEdad);
// console.log(aliasCiudad);

// ---Ejercicio 1 -----

// const calcular = ({ a, b, c }) => (a * b) + c;

// const datos = { a: 2, b: 2, c: 5 };
// const resultado = calcular(datos);
// console.log(resultado);




// CALLBACK---Funcion que llama a otra funcion
// Funcion que toma dos numeros y un callback para realizar una operacion

function realizarOperacion(num1,num2, operacionCallback){
    console.log(`Operacion: ${num1} y ${num2}`);
    // Llama al callback pasaandole los dos numeros como argumentos 
    operacionCallback(num1,num2);
}

// Callback que suma dos numeros
function sumar (a,b){
    console.log(`Suma: ${a + b}`);
}

// Callback que multiplica dos numeros 
function multiplicar(a,b){
    console.log(`multiplicacion: ${a * b}`);
}

// Callback que dividir dos numeros 
function dividir(a,b){
    console.log(`division: ${a / b}`);
}

// Uso de la function con los Callbacks
realizarOperacion(5, 3,sumar);
realizarOperacion(5, 3,multiplicar);
realizarOperacion(5, 3, dividir);