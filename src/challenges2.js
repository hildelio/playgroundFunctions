// Desafio 11
function generatePhoneNumber(numbers) {
  for ( let index = 0; index < numbers.length; index += 1) {
    if (numbers.lenght !== 11) {
      return 'Array com tamanho incorreto.'
    } else if (numbers[index] < 0) {
      return 'não é possível gerar um número de telefone com esses valores'
    } else if (numbers[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores'
    } else if (numbers[index] > 1000) {
      return 'não é possível gerar um número de telefone com esses valores'
    } else {
      return numbers.reduce((acc, cur) => acc.replace('x', cur), '(xx) xxxxx-xxxx');
    }
  }
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
