import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from './app.js';

describe('capitalize', () => {
  test('string with first letter capitalized', () => {
    expect(capitalize('string')).toBe('String');
  });
  test('works with empty string', () => {
    expect(capitalize('')).toBe('');
  });
});

describe('reverseString', () => {
  test('reverse a string', () => {
    expect(reverseString('string')).toBe('gnirts');
  });
  test('works with space', () => {
    expect(reverseString('str in g')).toBe('g ni rts');
  });
  test('works with empty string', () => {
    expect(reverseString('')).toBe('');
  });
});

describe('calculator', () => {
  test('add two numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });
  test('add, work with zero', () => {
    expect(calculator.add(0, 0)).toBe(0);
  });
  test('subtract a number to other', () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
  });
  test('divide two numbers', () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });
  test('divide one to number and zero', () => {
    expect(calculator.divide(1, 0)).toBe("Can't divide by 0");
  });
  test('multiply two numbers', () => {
    expect(calculator.multiply(1, 0)).toBe(0);
  });
});

describe('caesarCipher', () => {
  test('works with simple word', () => {
    expect(caesarCipher('abcde')).toBe('bcdef');
  });
  test('works with punctuation and spaces', () => {
    expect(caesarCipher('abcde. abc')).toBe('bcdef. bcd');
  });
});

describe('analizeArray', () => {
  test('returns average, min, max and length', () => {
    expect(analyzeArray([1, 2, 3])).toStrictEqual({
      average: 2,
      min: 1,
      max: 3,
      length: 3,
    });
  });
});
