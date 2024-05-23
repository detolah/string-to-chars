const splitToChars = require('./index');

test('splits a string into individual characters', () => {
  expect(splitToChars('hello')).toEqual(['h', 'e', 'l', 'l', 'o']);
});

test('throws an error when input is not a string', () => {
  expect(() => splitToChars(123)).toThrow(TypeError);
  expect(() => splitToChars({})).toThrow(TypeError);
});
