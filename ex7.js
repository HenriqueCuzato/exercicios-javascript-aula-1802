//Exercício 7
const numeros = [2, 3, 4, 5];

const produto = numeros.reduce((acumulador, numero) => acumulador * numero, 1);

console.log(produto); // 120 (pois 2 * 3 * 4 * 5 = 120)
