//FUNÇÃO NORMAL//
function somar(a, b) {
  return a + b;
}

//ARROW FUNCTION//
const multiplicar = (a, b) => a * b;

//PARÂMETRO PADRÃO//
function saudacao(nome = "Visitante") {
  console.log(`Olá, ${nome}!`);
}

//CHAMADAS//
console.log(somar(5, 8));
console.log(multiplicar(5, 8));
saudacao((nome = "Breno"));
