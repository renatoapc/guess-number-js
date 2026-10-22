console.log("=== Adivina el número ===");

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
console.log("(DEBUG) Número secreto:", numeroSecreto);

let intento = prompt("Adivina el número (1-100):");
intento = Number(intento);

console.log("Intento del jugador:", intento);
console.log("Tipo:", typeof intento);

if (isNaN(intento)) {
  alert("⚠️ Eso no es un número. Por favor ingresa un número del 1 al 100.");
} else if (intento < 1 || intento > 100) {
  alert("⚠️ El número debe estar entre 1 y 100.");
} else if (intento === numeroSecreto) {
  alert("🎉 ¡Correcto! El número era " + numeroSecreto);
  console.log("Resultado: ¡Ganó!");
} else if (intento > numeroSecreto) {
  alert("📈 Número muy alto. Intenta un número menor.");
  console.log("Resultado: número muy alto");
} else {
  alert("📉 Número muy bajo. Intenta un número mayor.");
  console.log("Resultado: número muy bajo");
}

let diferencia = Math.abs(intento - numeroSecreto);
let cercanía = diferencia <= 10 ? '🔥 ¡Estás cerca!' : '❄️ Estás lejos';
if (intento !== numeroSecreto) {console.log(cercanía)};  //Si el número es correcto, no hace falta avisar si está cerca o lejos.

let mensaje;
if (intento === numeroSecreto) {
  mensaje = '¡Ganaste!';
} else {
  mensaje = 'Sigue intentando';
}

let mensaje2 = intento === numeroSecreto ? '¡Ganaste!' : 'Sigue intentando';

console.log(mensaje2);



if (!isNaN(intento) && intento >= 1 && intento <= 100 && intento !== numeroSecreto) {
  let intento2 = prompt("Intenta de nuevo (1-100):");
  intento2 = Number(intento2);

  if (isNaN(intento2) || intento2 < 1 || intento2 > 100) {
    alert('⚠️ Entrada inválida. El número era ' + numeroSecreto);
  } else if (intento2 === numeroSecreto) {
    alert("🎉 ¡Correcto en tu segundo intento! El número era " + numeroSecreto);
  } else {
    let pista = intento2 > numeroSecreto ? 'alto' : 'bajo';
    alert(`Muy ${pista}. El número era ${numeroSecreto}`);
  }
}



console.log(5 === 5);
console.log(5 === "5");
console.log(5 == "5");
console.log(5 !== 3);
console.log(10 > 5);
console.log(10 >= 10);
console.log(3 < 1);

let edad = 25;
let tieneLicencia = true;
console.log(edad >= 18 && tieneLicencia);

let esFeriado = false;
let esDomingo = true;
console.log(esFeriado || esDomingo);

let lloviendo = false;
console.log(!lloviendo);

console.log(18 >= 18 && true);








