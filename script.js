let nombre = 'Renato';
let edad = 28;
let estaAprendiendo = true;

console.log(nombre);
console.log(edad);
console.log(estaAprendiendo);

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof estaAprendiendo);



const curso = 'Code 101';
const maxIntentos = 10;

console.log(curso);
console.log(maxIntentos);



let nombreUsuario = prompt('¿Cómo te llamas?');
let edadUsuario = prompt('¿Cuál es tu edad?');

alert(`Hola ${nombreUsuario}, tienes ${edadUsuario} años.`)

console.log('Nombre:', nombreUsuario, typeof nombreUsuario);
console.log('Edad:', edadUsuario, typeof edadUsuario);



let a = 20;
let b = 7;

console.log('Suma:', a + b);
console.log('Resta:', a - b);
console.log('Multiplicación:', a * b);
console.log('División:', a / b);
console.log('Residuo:', a % b);

console.log('5' + 3);
console.log(5 + 3);
console.log('5' - 3);

let saludo1 = 'Hola ' + nombreUsuario + ', tienes ' + edadUsuario + ' años.';
console.log(saludo1);

let saludo2 = `Hola ${nombreUsuario}, tienes ${edadUsuario} años.`;
console.log(saludo2);


let anioActual = 2026;
let anioNacimiento = anioActual - edadUsuario;

let saludo3 = `Hola ${nombreUsuario}, naciste aproximadamente en ${anioNacimiento}.`;
console.log(saludo3);