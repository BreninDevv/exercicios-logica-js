//ARRAY ALUNOS//
const alunos = [
  { nome: "Breno", nota: 10 },
  { nome: "Maria", nota: 5 },
  { nome: "Gustavo", nota: 9 },
  { nome: "Felipe", nota: 6 },
];

const nomes = alunos.map((a) => a.nome); //map = cria um novo array que pode ser modificado//
console.log(nomes);

const aprovados = alunos.filter((a) => a.nota > 7); //filter = filtra o que quiser do array//
console.log(aprovados);

const media =
  alunos.reduce((acc, alunos) => acc + alunos.nota, 0) / alunos.length; //reduce = reduz um valor//
console.log(media);

const alunoNota10 = alunos.find((a) => a.nota === 10); //find = encontra um elemento
console.log(alunoNota10);

const ordem = [...alunos].sort((a, b) => b.nota - a.nota); //sort = ordena
console.log(ordem);
