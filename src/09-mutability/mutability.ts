import {UserType} from './mutability.test.ts';

export function increaseAge(user: UserType) {
  user.age++;
}
