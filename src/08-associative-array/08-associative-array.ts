import type {User, Users} from './associative-array.types.ts';

export const addNewUser = (users: Users, user: User) => {
  users[user.id] = user
}

export const deleteUser = (users: Users, id: string) => {
  delete users[id]
}

export const changeUserName = (users: Users, userId: string, name: string) => {
  users[userId].name = name
}
