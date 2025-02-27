import {increaseAge} from './09_01';

export type UserType = {
  name: string
  age: number
}

type Address = {
  title: string
}

type BeholderType = UserType & {
   address: Address
}

let user: UserType;
let users: Array<UserType>
let usersCount: number;
let beholder: BeholderType;

beforeEach(() => {
  user = {
    name: 'Dimych',
    age: 32,
  };
  users = [
    {
      name: 'Helen',
      age: 19
    },
    {
      name: 'Anna',
      age: 22
    }
  ];
  usersCount = 100;
  beholder = {
    name: 'Miki',
    age: 12,
    address: {
      title: 'New York'
    }
  }
});

test('big test', () => {
  // action
  increaseAge(user);
  const superMan = user;
  superMan.name = 'Ekaterina';

  // expect
  expect(user.age).toBe(33);
  expect(user.name).toBe('Ekaterina');
});

test('array test', () => {
  // action
  const admins = users;
  admins.push({name: 'Bandyugan', age: 10});

  // expect
  expect(users[2]).toEqual({name: 'Bandyugan', age: 10});
  expect(admins[2]).toEqual({name: 'Bandyugan', age: 10});
});

test('value type test', () => {
  // action
  let adminsCount = usersCount;
  adminsCount = 101;

  // expect
  expect(adminsCount).toBe(101);
});

test('value type test', () => {
  // action
  let user2 = {name: 'Natasha', age: 30, address: beholder.address}

  // expect
  expect(beholder.address.title).toBe('New York');
  expect(beholder.name).toBe('Miki');
  expect(user2.name).toBe('Natasha');
  expect(user2.address.title).toBe('New York');
});

test('sort array test', () => {
  // data
  const letters = ['c', 'd', 'a', 'z', 'e'];

  // action
  letters.sort();

  // expect
  expect(letters).toEqual(['a', 'c', 'd', 'e', 'z']);
});
