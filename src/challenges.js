// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
}

// Desafio 2
function calcArea(b, h) {
  if (b >= 0 && h >= 0) {
    return (b * h) / 2;
  } else {
    return 'Error';
  }
}

// Desafio 3
function splitSentence(array) {
  for (let index = 0; index < array.length; index += 1) {
    return array.split(" ", 3);
  }
}

// Desafio 4
function concatName(array) {
  for (let index = 0; index < array.length; index += 1) {
    return array[array.length - 1] + ', ' + array[0];
  }
}

// Desafio 5
function footballPoints(v, e) {
  if (v >= 0 && e >= 0) {
    return v * 3 + e * 1;
  } else {
    return 'error';
  }
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
