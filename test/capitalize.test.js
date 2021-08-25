const capitalize = require('../src/capitalize');

it('good should be Good', () => {
  expect(capitalize('good')).toBe('Good');
});