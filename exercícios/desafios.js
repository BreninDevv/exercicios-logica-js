//ARRAYS//
//DESAFIO: FUNÇÃO QUE SOMA OS NUMEROS PARES DE UM ARRAY//
function somaPares(arr) {
  return arr.filter((num) => num % 2 === 0).reduce((acc, num) => acc + num, 0);
}
console.log(somaPares([1, 2, 3, 4, 5, 6]));

//DESAFIO: FUNÇÃO QUE FAÇA UMA MÉDIA DE NOTAS//
function mediaNotas(notas) {
  return notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
}
console.log(mediaNotas([9, 5, 3, 6, 5]));

//DESAFIO: FUNÇÃO QUE AGRUPA MAIORES DE IDADE E MENORES DE IDADE//
const pessoas = [
  { nome: "Breno", idade: 19 },
  { nome: "José", idade: 12 },
  { nome: "Luana", idade: 19 },
  { nome: "Felipe", idade: 11 },
  { nome: "Lincoln", idade: 21 },
  { nome: "Maycon", idade: 24 },
  { nome: "Ana", idade: 19 },
  { nome: "Gabriely", idade: 15 },
];
function agruparIdades(lista) {
  const maiores = lista.filter((p) => p.idade >= 18);
  const menores = lista.filter((p) => p.idade <= 17);
  return { maiores, menores };
}
console.log(agruparIdades(pessoas));

//CONDICIONAIS//
//DESAFIO: FUNÇÃO QUE VERIFICA SE A PESSOA É MAIOR DE IDADE//
function verificarIdade(idade) {
  if (idade <= 17) {
    console.log("Você é de menor!");
  } else {
    console.log("Você é de maior!");
  }
}

//DESAFIO: FUNÇÃO QUE DETECTA SE O NÚMERO É POSITIVO, NEGATIVO OU ZERO//
function detectarNumero(numero) {
  if (numero > 0) {
    console.log("Seu número é positivo!");
  } else if (numero === 0) {
    console.log("Seu numero é zero");
  } else {
    console.log("Seu número é negativo");
  }
}
//DESAFIO: USE O SWITCH PARA MOSTRAR QUAL É O DIA DA SEMANA//
const dia = 1;
switch (dia) {
  case 1:
    console.log("Hoje é segunda");
    break;
  case 2:
    console.log("Hoje é terça");
    break;
  case 3:
    console.log("Hoje é quarta");
    break;
  case 4:
    console.log("Hoje é quinta");
    break;
  case 5:
    console.log("Hoje é quinta");
    break;
  default:
    console.log("Hoje é fim de semana!");
}
//LOOPS//
//DESAFIO: MOSTRE NUMEROS DE 1 A 10//
for (let i = 1; i < 11; i++) {
  console.log(i);
}
//DESAFIO: SOME NÚMEROS DE 1 A 100//
let soma = 0;
for (let i = 1; i <= 100; i++) soma += i;
console.log("Soma:", soma);
//DESAFIO: CONTAR DE 0 ATÉ 5//
let i = 0;
while (i < 6) {
  console.log(i);
  i++;
}
