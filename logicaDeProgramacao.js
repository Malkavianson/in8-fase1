//Pensando em todos os números naturais inferiores a 10 que são múltiplos de 3 ou 5, temos 3, 5, 6 e 9.
//Somando esses múltiplos obtemos o valor 23.
//Utilize um algorítimo para calcular a soma de todos os múltiplos de 3 ou 5 abaixo de 1000

const number = (x, y, z) => {
  let valor = 0;
  for (let i = 0; i < z; i++) {
    if ((i % x === 0 || i % y === 0)) {
        console.log(i)
      valor += i;
    }
  }
  return `A soma dos multiplos de ${x} ou ${y} abaixo de ${z} é ${valor}`;
};

console.log(number(3, 5, 1000));
