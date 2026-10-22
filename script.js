console.log("=== Adivina el número ===");

const numeroSecreto = Math.floor(Math.random() * 100) + 1;

console.log("(DEBUG) Número secreto:", numeroSecreto);

let intento = prompt("Adivina el número (1-100):");
intento = Number(intento);

console.log("Intento del jugador:", intento);
console.log("Tipo:", typeof intento);

if (intento === numeroSecreto) {
  alert("🎉 ¡Correcto! El número era " + numeroSecreto);
  console.log("Resultado: ¡Ganó!");
} else if (intento > numeroSecreto) {
  alert("📈 Número muy alto. Intenta un número menor.");
  console.log("Resultado: número muy alto");
} else {
  alert("📉 Número muy bajo. Intenta un número mayor.");
  console.log("Resultado: número muy bajo");
}

if (intento !== numeroSecreto) {
  let intento2 = prompt("Intenta de nuevo (1-100):");
  intento2 = Number(intento2);

  if (intento2 === numeroSecreto) {
    alert("🎉 ¡Correcto en tu segundo intento!");
  } else if (intento2 > numeroSecreto) {
    alert("📈 Muy alto. El número era " + numeroSecreto);
  } else {
    alert("📉 Muy bajo. El número era " + numeroSecreto);
  }
}



console.log(5 === 5);
console.log(5 === '5');
console.log(5 == '5');
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

