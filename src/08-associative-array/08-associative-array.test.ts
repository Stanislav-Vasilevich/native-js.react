import {beforeEach, expect, test} from 'vitest'
import type {User, Users} from './associative-array.types.ts';
import {addNewUser, changeUserName, deleteUser} from './08-associative-array.ts';

let users: Users
let user: User

beforeEach(() => {
  users = {
    '10': {id: '10', name: 'Cristian'},
    '20': {id: '20', name: 'david'},
    '30': {id: '30', name: 'joe'},
    '40': {id: '40', name: 'tom'},
    '50': {id: '50', name: 'Sasha'},
    '60': {id: '60', name: 'op'},
    '70': {id: '70', name: 'name'},
    '80': {id: '80', name: 'guy'},
  }

  user = {id: '100', name: 'new user'}
})

test('add new user in array', () => {
  // action
  addNewUser(users, user)

  // expect
  expect(users['100']).toBe(user)
})

test('delete user from users by id', () => {
  deleteUser(users, '70')

  expect(users['60']).toBeDefined()
  expect(users['70']).toBeUndefined()
  expect(users['80']).toBeDefined()
})

test('change user name', () => {
  expect(users['50'].name).toBe('Sasha')

  changeUserName(users, '50', 'Oleg')

  expect(users['50'].name).toBe('Oleg')
})
