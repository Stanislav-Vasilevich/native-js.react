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

const callback = () => alert('hey')

setTimeout(callback, 1000)

const User = () => {
  return (
    <div>
      Stanislav
      <button>delete</button>
      <button>save</button>
    </div>
  )
}
