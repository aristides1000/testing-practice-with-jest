const stringLength = require('../src/stringLength');

it('The string length of "Hello" is 5', () => {
  expect(stringLength('Hello')).toEqual(5);
});

it('String must be less than 10 characters', () => {
  expect(() => stringLength('Hello World')).toThrow(Error);
});

it('String must be at least 1 character', () => {
  expect(() => stringLength('')).toThrow(Error);
});
