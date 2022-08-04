//Crie uma função recursiva para descobrir o menor número inteiro divisível por 2, 3 e 10 ao mesmo tempo.
//Quando encontrá-lo, imprima-o na tela.

const number = (a, b, c) => {
  let n = 0;
  do {
    n++;
  } while (!(n % a === 0 && n % b === 0 && n % c === 0));
  return `${n} é o menor divisor comum entre 2, 3 e 10`;
};

console.log(number(2, 3, 10))
