// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(b, h) {
  if (b >= 0 && h >= 0) {
    return (b * h) / 2;
  }
}

// Desafio 3
function splitSentence(array) {
  for (let index = 0; index < array.length; index += 1) {
    return array.split(' ', 3);
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
  }
}

// Desafio 6 Dúvida
function highestCount(array) {
  let repeat = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (Math.max(...array) === array[index]) {
      repeat += 1;
    }
  }
  return repeat;
}

// Desafio 7 Dúvida
function catAndMouse(cat1, cat2, mouse) {
  if (cat2 - mouse < cat1 - mouse) {
    return 'cat2';
  } else if (cat1 - mouse < cat2 - mouse) {
    return 'cat1';
  } else if (cat1 - mouse === cat2 - mouse) {
    return 'os gatos tombam e o rato foge';
  }
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
