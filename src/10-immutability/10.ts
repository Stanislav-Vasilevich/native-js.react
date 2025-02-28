import {UserType} from './10.test';

export function hairdrasser(u: UserType, power: number) {
  return {...u, hair: u.hair / power};
}

export function moveUser(u: UserType, newAddress: string) {
  return {...u, address: {...u.address, title: newAddress}};
}
