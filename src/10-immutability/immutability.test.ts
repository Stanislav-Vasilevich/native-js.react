import { beforeEach, expect, test } from 'vitest';
import {addBooks, changeLaptop, changeTown, getHair, moveUser} from './immutability.ts';

export type UserType = {
  name: string
  hair: number
  address: {title: string}
}

type LaptopType = {
  title: string
}

export type UserWithLaptopType = UserType & {
  laptop: LaptopType
}

export type UserWithBooksType = UserType & {
  books: Array<string>
}

let user: UserType;
let user2: UserWithLaptopType;

beforeEach(() => {
  user = {
    name: 'Dimych',
    hair: 32,
    address: {
      title: 'Minsk'
    }
  }

  user2 = {
    name: 'Dimych',
    hair: 32,
    address: {
      title: 'Minsk'
    },
    laptop: {
      title: 'Macbook'
    },
  }
})

test('reference type test', () => {
  const result = getHair(user, 2);

  expect(result.hair).toBe(16);
  expect(user.hair).toBe(32);
  expect(result.address).toBe(user.address);
});

test('change address', () => {
  const result = moveUser(user, 'Volgograd');

  expect(user.address.title).toBe('Minsk');
  expect(result.address.title).toBe('Volgograd');
});

test('change address', () => {
  const result = changeTown(user2, 'Volgograd');

  expect(user2).not.toBe(result);
  expect(user2.address).not.toBe(result.address);
  expect(result.address.title).toBe('Volgograd');
  expect(result.laptop).toBe(user2.laptop);
});

test('upgrade laptop to notebook', () => {
  const user = {
    name: 'Dimych',
    hair: 32,
    address: {
      title: 'Minsk'
    },
    laptop: {
      title: 'Macbook'
    },
  }
  const result = changeLaptop(user, 'Zenbook');

  expect(user).not.toBe(result);
  expect(user.address).toBe(result.address);
  expect(user.laptop.title).toBe('Macbook');
  expect(result.laptop.title).toBe('Zenbook');
});

test('add books', () => {
  const user: UserWithLaptopType & UserWithBooksType = {
    name: 'Dimych',
    hair: 32,
    address: {
      title: 'Minsk'
    },
    laptop: {
      title: 'Macbook'
    },
    books: ['CSS', 'HTML']
  }
  const result = addBooks(user, 'React');

  expect(user).not.toBe(result);
  expect(user.address).toBe(result.address);
  expect(result.books[2]).toBe('React');
});
