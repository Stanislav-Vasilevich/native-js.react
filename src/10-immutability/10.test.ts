import {hairdrasser, moveUser} from './10';

export type UserType = {
  name: string
  hair: number
  address: {title: string}
}

let user: UserType;

beforeEach(() => {
  user = {
    name: 'Dimych',
    hair: 32,
    address: {
      title: 'Minsk'
    }
  }
})

test('reference type test', () => {
  const result = hairdrasser(user, 2);

  expect(result.hair).toBe(16);
  expect(user.hair).toBe(32);
  expect(result.address).toBe(user.address);
});

test('change address', () => {
  const result = moveUser(user, 'Volgograd');

  expect(user.address.title).toBe('Minsk');
  expect(result.address.title).toBe('Volgograd');
});
