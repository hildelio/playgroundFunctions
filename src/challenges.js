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
  if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return 'cat2';
  } else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos tombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numeros, string) {
  for (const num of numeros) {
    if (num[index] % 3 == 0) {
      'fizz';
    } else if (num[index] % 5 == 0) {
      'buzz';
    } else if (num[index] % 3 == 0 && num[index] % 5 == 0) {
      'fizzBuzz';
    } else if (num[index] % 3 != 0 && num[index] % 5 != 0) {
      'bug!';
    }
  }
  return fizzBuzz(numeros, string)
}

// Desafio 9
function encode(palavra) {
  return palavra.replace(/[a]/gi , 1) + palavra.replace(/[e]/gi , 2) + palavra.replace(/[i]/gi , 3) + palavra.replace(/[o]/gi , 4) + palavra.replace(/[u]/gi , 5);
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList(a) {
  const o = {...a};
  return o
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
