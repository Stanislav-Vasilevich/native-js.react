// student

type Technology = {
  id: number
  title: string
}

type CityType = {
  title: string
  countryTitle: string
}

type AddressStudent = {
  streetTitle: string
  city: CityType
}

export type Student = {
  id: number
  name: string
  age: number
  isActive: boolean
  address: AddressStudent
  technologies: Array<Technology>
}

type Street = {
  title: string
}

// city

type CityTypes = 'HOSPITAL' | 'FIRE-STATION'

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
