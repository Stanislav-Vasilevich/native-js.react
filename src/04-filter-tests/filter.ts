import {CityType, GovernmentBuildingsType} from '../02-object-tests/object-types';

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
  city.houses = city.houses.filter(c => c.address.street.title !== street);
}

export const getBuildingsWithStaffCountGreaterThen = (city: Array<GovernmentBuildingsType>, count: number) => {
  return city.filter(c => c.staffCount > count);
}
