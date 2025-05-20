// city

type CityTypes = 'HOSPITAL' | 'FIRE-STATION'

type Street = {
  title: string
}

type AddressBuild = {
  street: Street
}

type GovernmentBuildings = {
  type: CityTypes
  budget: number
  staffCount: number
  address: AddressBuild
}

type AddressHouse = {
  number: number
  street: Street
}

type House = {
  id: number
  buildedAt: number
  repaired: boolean
  address: AddressHouse
}

export type City = {
  title: string
  houses: House[]
  governmentBuildings: GovernmentBuildings[]
  citizensNumber: number
}
