import Run from '../src/app';

test('app Run function', () => {
  expect(Run()).toEqual(expect.arrayContaining([2,4,6]));
});
