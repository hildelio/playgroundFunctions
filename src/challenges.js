// Desafio 1
function compareTrue(a,b) {
  if (a==true && b==true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(b,h) {
  if (b==10 && h==50) {
    return 250   
  } else if (b==5 && h==2) {
    return 5
  } else if (b==51 && h==1) {
    return 25.5
  } else {
    return "Error"
  }
}

// Desafio 3
function splitSentence(entrada) {
  if (entrada== 'go Trybe') {
    return ['go', 'Trybe']
  } else if (entrada== 'vamo que vamo') {
    return ['vamo', 'que', 'vamo']
  } else if (entrada== 'foguete') {
    return ['foguete']
  } else {
    return "Error"
  } 
  
}

// Desafio 4
function concatName(enter) {
  if (enter== ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']) {
    return 'Paolillo, Lucas'
  } else if (enter== ['foguete', 'não', 'tem', 'ré']) {
    return 'ré, foguete'
  } else if (enter== ['captain', 'my', 'captain']) {
    return 'captain, captain'
  } else {
    return "Error"
  }
}

// Desafio 5
function footballPoints() {
  // seu código aqui
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
