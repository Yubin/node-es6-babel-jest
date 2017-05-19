import User from '../src/user';

test('app Run function', () => {
  let user = new User('foo');

  expect(user.print()).toEqual('name: foo');
});
