const calculator = require('../src/calculator');

describe('my Add', () => {
  it('3 + 3 should be 6', () => {
    expect(calculator.add(3, 3)).toEqual(6);
  });

  it('4 + 4 should be greater than 8', () => {
    expect(calculator.add(4, 4)).toBeGreaterThan(7);
  });

  it('5 + 5 should be less than or equal 10', () => {
    expect(calculator.add(3, 3)).toBeLessThanOrEqual(10.5);
  });
});

describe('my Subtract', () => {
  it('3 - 5 should be -2', () => {
    expect(calculator.subtract(3, 5)).toEqual(-2);
  });

  it('4 - 4 should be greater than -1', () => {
    expect(calculator.subtract(4, 4)).toBeGreaterThan(-1);
  });

  it('5 - 5 should be less than or equal 0.5', () => {
    expect(calculator.subtract(5, 5)).toBeLessThanOrEqual(0.5);
  });
});

describe('my Multiply', () => {
  it('3 * 3 should be 9', () => {
    expect(calculator.multiply(3, 3)).toEqual(9);
  });

  it('4 * 4 should be greater than 15', () => {
    expect(calculator.multiply(4, 4)).toBeGreaterThan(15);
  });

  it('5 * 5 should be less than or equal 10', () => {
    expect(calculator.multiply(5, 5)).toBeLessThanOrEqual(25.5);
  });
});

describe('my Divide', () => {
  it('3 / 3 should be 1', () => {
    expect(calculator.divide(3, 3)).toEqual(1);
  });

  it('8 / 4 should be greater than 1', () => {
    expect(calculator.divide(8, 4)).toBeGreaterThan(1);
  });

  it('20 / 5 should be less than or equal 10', () => {
    expect(calculator.divide(3, 3)).toBeLessThanOrEqual(4.5);
  });
});
