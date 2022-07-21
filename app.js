function capitalize(string) {
  return string === '' ? '' : string[0].toUpperCase() + string.slice(1);
}

function reverseString(string) {
  let result = '';
  for (let i = 1; i <= string.length; i++) {
    result += string[string.length - i];
  }
  return result;
  // return string.split('').reverse().join('');
}

const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return b === 0 ? "Can't divide by 0" : a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

function shiftPosition(char) {
  let asciiShifted;
  if (char === ' ' || char === '.') {
    return char;
  } else {
    asciiShifted = char.charCodeAt() + 1;
    return asciiShifted > 122
      ? String.fromCharCode(97)
      : String.fromCharCode(asciiShifted);
  }
}

function caesarCipher(string) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    result += shiftPosition(string[i]);
  }
  return result;
}

function analyzeArray(array) {
  return {
    average: array.reduce((prev, next) => prev + next, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
