type Street = {
  title: string
}

type Address = {
  number: number
  street: Street
}

export type House = {
  id?: number
  buildedAt: number
  repaired: boolean
  address: Address
}

type GovernmentBuildingsAddressTitleType = {
  title: string
}

type GovernmentBuildingsAddressType = {
  street: GovernmentBuildingsAddressTitleType
}

export type GovernmentBuildingsType = {
  type: 'HOSPITAL' | 'FIRE-STATION'
  budget: number
  staffCount: number
  address: GovernmentBuildingsAddressType
}

export type City = {
  title: string
  houses: House[]
  governmentBuildings: Array<GovernmentBuildingsType>
  citizensNumber: number
}
