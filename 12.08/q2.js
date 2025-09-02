const filme1 = {
  titulo: prompt("Título do primeiro filme:"),
  genero: prompt("Gênero do primeiro filme:"),
  nota: Number(prompt("Nota do primeiro filme (0 a 10):"))
};

const filme2 = {
  titulo: prompt("Título do segundo filme:"),
  genero: prompt("Gênero do segundo filme:"),
  nota: Number(prompt("Nota do segundo filme (0 a 10):"))
};

console.log("Filme 1:", filme1);
console.log("Filme 2:", filme2);

if (filme1.nota > filme2.nota) {
  console.log("Filme com melhor nota:", filme1.titulo);
} else if (filme2.nota > filme1.nota) {
  console.log("Filme com melhor nota:", filme2.titulo);
} else {
  console.log("Ambos os filmes têm a mesma nota.");
}