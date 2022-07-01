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

// Desafio 6 
function highestCount(array) {
  let repeat = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (Math.max(...array) === array[index]) {
      repeat += 1;
    }
  }
  return repeat;
}

// Desafio 7 
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return 'cat2';
  } else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
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
  return resultado;
}

// Desafio 9
function encode(palavra) {
  let word1 = palavra.replace(/a/gi, 1);
  let word2 = word1.replace(/e/gi, 2);
  let word3 = word2.replace(/i/gi, 3);
  let word4 = word3.replace(/o/gi, 4);
  let word5 = word4.replace(/u/gi, 5);
  return word5;
}

function decode(palavra) {
  let word1 = palavra.replace(/1/gi, 'a');
  let word2 = word1.replace(/2/gi, 'e');
  let word3 = word2.replace(/3/gi, 'i');
  let word4 = word3.replace(/4/gi, 'o');
  let word5 = word4.replace(/5/gi, 'u');
  return word5;
}

// Desafio 10
function techList(array, string) {
  let object = []
  let newArray = array.sort()
  for (let index = 0; index < newArray.length; index += 1) {
    object.push({ 'name': string, 'tech': newArray[index] })
  }
  if (array.length === 0) {
    return 'Vazio!';
  } else
    return object;
}

//console.log(techList(['a', 'b', 'c'],'Lucas'))

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
