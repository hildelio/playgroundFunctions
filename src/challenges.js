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
function fizzBuzz(numeros) {
  let resultado = [];
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] % 3 === 0 && numeros[index] % 5 !== 0) {
      resultado.push('fizz');
    } else if (numeros[index] % 5 === 0 && numeros[index] % 3 !== 0) {
      resultado.push('buzz');
    } else if (numeros[index] % 3 === 0 && numeros[index] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado  
}
  
// Desafio 9
function encode(palavra) {
  for (let index = 0; index < palavra.lengh; index += 1) {
    if (palavra[index].match('a')) {
    palavra.replace(/[a]/gi, 1);
    } else if (palavra[index].match('e')) {
      palavra.replace(/[e]/gi, 2);
    } else if (palavra[index].match('i')) {
      palavra.replace(/[i]/gi, 3);
    } else if (palavra[index].match('o')) {
      palavra.replace(/[o]/gi, 4);
    } else if (palavra[index].match('u')) {
     palavra.replace(/[u]/gi, 5);
    }
  }
  return palavra
}

function decode(palavra) {
  for (let index = 0; index < palavra.lengh; index += 1) {
    if (palavra[index].match(1)) {
      palavra.replace(/[1]/gi, 'a');
    } else if (palavra[index].match(2)) {
      palavra.replace(/[2]/gi, 'b');
    } else if (palavra[index].match(3)) {
      palavra.replace(/[3]/gi, 'c');
    } else if (palavra[index].match(4)) {
      palavra.replace(/[4]/gi, 'd');
    } else if (palavra[index].match(5)) {
      palavra.replace(/[5]/gi, 'e');
    }
  }
  return palavra
}
  
// Desafio 10
function techList(a) {
  const o = { ...a };
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
