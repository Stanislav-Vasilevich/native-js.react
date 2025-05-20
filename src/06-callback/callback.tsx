import type {ChangeEvent, MouseEvent} from 'react';

type StreetType = {
  title: string
}

type AddressType = {
  number: number
  street: StreetType
}

export type HouseType = {
  id?: number
  buildedAt: number
  repaired: boolean
  address: AddressType
}

export const createMessages = (houses: Array<HouseType>) => {
  let callback = (h: HouseType) => `Hello guys from ${h.address.street.title}`

  return houses.map(callback)
}

const callback = () => console.log('callback')
setTimeout(callback, 1000)

export const User = () => {
  const onNameChanged = () => {
    console.log('user should be saved')
  }

  const focusLostHandler = () => {
    console.log('user should be saved')
  }

  const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('age changed: ' + event?.currentTarget.value)
  }

  const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
    console.log('user should be deleted: ', e.currentTarget as HTMLButtonElement)
  }

  return (
    <div>
      <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Stanislav</textarea>
      <input type="text" onChange={onAgeChanged}/>
      <button onClick={deleteUser}>delete</button>
    </div>
  )
}
