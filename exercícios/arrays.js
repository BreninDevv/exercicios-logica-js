//ARRAY//
const objetos = ["garrafa", "colher", "bola", "papel", "controle"];

objetos.push("geladeira"); //ADICIONA NO FINAL//
objetos.unshift("caderno"); //ADICIONA NO INÍCIO//
objetos.pop(); //REMOVE O ULTIMO//
objetos.shift(); //REMOVE O PRIMEIRO//

console.log(objetos.includes("bola")); //INCLUDES VERIFICA A EXISTÊNCIA//
console.log(objetos.indexOf("bola")); //INDEXOF MOSTRA A POSIÇÃO DO ELEMENTO//
