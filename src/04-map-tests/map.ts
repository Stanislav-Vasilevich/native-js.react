import {GovernmentBuildingsType, HouseType} from '../02-object-tests/object-types';

export const getStreetsTitlesOfGovernmentBuildings = (array: Array<GovernmentBuildingsType>) => {
  return array.map(i => {
    return `${i.address.street.title}`
  })
}

export const getStreetsTitlesOfHouses = (array: Array<HouseType>) => {
  return array.map(i => {
    return `${i.address.street.title}`
  })
}

export const createMessages = (array: Array<HouseType>) => {
  return array.map(i => {
    return `Hello guys from ${i.address.street.title}`
  })
}
