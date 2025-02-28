import {UserType, UserWithBooksType, UserWithLaptopType} from './10.test';

export function getHair(u: UserType, power: number) {
  return {...u, hair: u.hair / power};
}

export function moveUser(u: UserType, newAddress: string) {
  return {...u, address: {...u.address, title: newAddress}};
}

export function changeTown(u: UserWithLaptopType, city: string) {
  return {...u, address: {...u.address, title: city}, laptop: u.laptop};
}

export function changeLaptop(u: UserWithLaptopType, newLaptop: string) {
  return {...u, laptop: {title: newLaptop}}
}

export function addBooks(u: UserWithBooksType, newBook: string) {
  return {...u, books: [...u.books, newBook]}
}
