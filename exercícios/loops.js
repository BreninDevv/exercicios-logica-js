//FOR TRADICIONAL//
const frutas = ["maça", "melancia", "banana", "uva", "pera"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

for (let fruta of frutas) {
  console.log("Fruta:", fruta);
}

//CONTADOR//
let contador = 0;

while (contador < 11) {
  console.log("Contador:", contador);
  contador++;
}
