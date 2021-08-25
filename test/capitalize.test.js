/* eslint-disable linebreak-style */
const capitalize = require('../src/capitalize.js');

it('good should be Good', () => {
  expect(capitalize('good')).toBe('Good');
});