//Exercício 4
const executarOperacao = (a, b, operacao) => {
    return operacao(a, b);
};

console.log(executarOperacao(6, 3, (a, b) => a - b)); // 3
console.log(executarOperacao(4, 5, (a, b) => a * b)); // 20
console.log(executarOperacao(8, 2, (a, b) => a + b)); // 10
console.log(executarOperacao(9, 3, (a, b) => a / b)); // 3

