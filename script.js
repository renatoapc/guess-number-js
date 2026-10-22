console.log('=== Adivina el número ===');

const numeroSecreto = Math.floor(Math.random()* 100) + 1;

console.log('(DEBUG) Número secreto:', numeroSecreto);


let intento = prompt('Adivina el número (1-100):');
intento = Number(intento);

console.log('Intento del jugador:', intento);
console.log('Tipo:', typeof intento);


if (intento === numeroSecreto) {
    alert('🎉 ¡Correcto! El número era ' + numeroSecreto);
} else {
    alert('❌ Incorrecto. El número era ' + numeroSecreto);
}