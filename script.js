const inputIntento = document.getElementById("inputIntento");
const btnAdivinar = document.getElementById("btnAdivinar");
const mensaje = document.getElementById("mensaje");
const contador = document.getElementById("contador");
const historial = document.getElementById("historial");
const btnReiniciar = document.getElementById("btnReiniciar");
const tarjeta = document.getElementById("game-card");
const btnPista = document.getElementById("btnPista");
const pistaBtn = document.getElementById("pistaBtn");
const pistaBtn2 = document.getElementById("pistaBtn2");

console.log("Elementos conectados:", inputIntento, btnAdivinar, mensaje);

function mostrarMensaje(texto, color) {
  mensaje.textContent = texto;
  mensaje.style.color = color;
}

mostrarMensaje("¡Bienvenido al juego!", "#e94560");

let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let historialIntentos = [];

console.log("(DEBUG) Número secreto:", numeroSecreto);

function verificarIntento() {
  let valor = Number(inputIntento.value);

  if (isNaN(valor) || valor < 1 || valor > 100) {
    mostrarMensaje("⚠️ Ingresa un número del 1 al 100", "orange");
    return;
  }

  intentos++;
  contador.textContent = "Intentos: " + intentos;

  historialIntentos.push(valor);
  historial.textContent = "Historial: " + historialIntentos.join(", ");

  function obtenerPista(intento, secreto) {
    let diferencia = Math.abs(intento - secreto);

    if (diferencia <= 5) {
      return "🔥 ¡Muy cerca!";
    } else if (diferencia <= 15) {
      return "♨️ Caliente";
    } else if (diferencia <= 30) {
      return "🌤️ Tibio";
    } else {
      return "❄️ Frío";
    }
  }

  if (valor === numeroSecreto) {
    mostrarMensaje("🎉 Correcto. Era el " + numeroSecreto, "#00ff88");
    btnAdivinar.disabled = true;
    btnPista.disabled = true;
    btnReiniciar.style.display = "inline-block";
    tarjeta.style.borderColor = "#00ff88";
    tarjeta.style.boxShadow = "0 0 40px rgba(0, 255, 136, 0.3)";
  } else if (valor > numeroSecreto) {
    let pista = obtenerPista(valor, numeroSecreto);
    mostrarMensaje("📈 Muy alto. " + pista, "#ff6b6b");
  } else {
    let pista = obtenerPista(valor, numeroSecreto);
    mostrarMensaje("📉 Muy bajo. " + pista, "#4ecdc4");
  }

  inputIntento.value = "";
  inputIntento.focus();
}

btnAdivinar.addEventListener("click", verificarIntento);
inputIntento.addEventListener("keypress", function (evento) {
  if (evento.key === "Enter") {
    verificarIntento();
  }
});

function reiniciarJuego() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  intentos = 0;
  historialIntentos = [];
  contadorPistas = 0;

  contador.textContent = "Intentos: 0";
  historial.textContent = "Historial: ";
  pistaBtn.textContent = "";
  pistaBtn2.textContent = "";
  mostrarMensaje("🎯 ¡Nuevo juego! Adivina el número...", "#e94560");

  btnAdivinar.disabled = false;
  btnPista.disabled = false;
  btnReiniciar.style.display = "none";
  inputIntento.value = "";
  inputIntento.focus();

  tarjeta.style.borderColor = "rgba(233, 69, 96, 0.3)";
  tarjeta.style.boxShadow =
    "0 20px 50px rgba(0, 0, 0, 0.95), 0 0 0 2px rgba(255, 173, 66, 0.55), 0 0 38px rgba(255, 138, 36, 0.35)";

  console.log("(DEBUG) Nuevo número secreto:", numeroSecreto);
}

btnReiniciar.addEventListener("click", reiniciarJuego);

let contadorPistas = 0;

function mostrarPista() {
  if (contadorPistas < 3) {
    contadorPistas++;
  }
  pistaBtn.textContent = `Pista ${contadorPistas}/3`;

  if (contadorPistas === 1) {
    const numeroPar = numeroSecreto % 2;
    if (numeroPar === 0) {
      pistaBtn2.textContent = `El número es par`;
    } else {
      pistaBtn2.textContent = `El número es impar`;
    }
  } else if (contadorPistas === 2) {
    let esPrimo = true;
    if (numeroSecreto < 2) {
      esPrimo = false;
    } else {
      for (let divisor = 2; divisor < numeroSecreto; divisor++) {
        if (numeroSecreto % divisor === 0) {
          esPrimo = false;
          break;
        }
      }
    }
    if (esPrimo) {
      pistaBtn2.textContent = `El número es primo`;
    } else {
      pistaBtn2.textContent = `El número no es primo`;
    }
  } else if (contadorPistas === 3) {
    btnPista.disabled = true;
    const sumaDigitos = Math.floor(numeroSecreto / 10) + (numeroSecreto % 10);
    if (numeroSecreto === 100) {
      pistaBtn2.textContent = `La suma de los dígitos del número es 1`;
    } else {
      pistaBtn2.textContent = `La suma de los dígitos del número es ${sumaDigitos}`;
    }
  }
}

btnPista.addEventListener("click", mostrarPista);
