/* eslint-disable linebreak-style */
const reverseString = require('../src/reverseString.js');

it('should reverse a string "test 1"', () => {
  expect(reverseString('abc')).toBe('cba');
});

it('should reverse a string "test 2"', () => {
  expect(reverseString('abcdefg')).toBe('gfedcba');
});

it('should reverse a string "test 3"', () => {
  expect(reverseString('abcdefghijklmnopqrstuvwxyz')).toBe('zyxwvutsrqponmlkjihgfedcba');
});
