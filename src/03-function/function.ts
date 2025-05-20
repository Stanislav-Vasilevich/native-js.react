import {StudentType} from './function.test';
import {CityType, GovernmentBuildingsType, HouseType} from '../02-object/object-types';

export const addSkill = (student: StudentType, title: string) => {
  student.technologies.push({id: new Date().getDate(), title});
}

export const makeStudentActive = (student: StudentType) => {
  student.isActive = true;
}

export const changeStudentLive = (student: StudentType, city: string) => {
  return student.address.city.title === city;
}

export const changeBudget = (building: GovernmentBuildingsType, budget: number) => {
  building.budget += budget;
}

export const repairHouse = (house: HouseType) => {
  house.repaired = true;
}

export const toFireStaff = (building: GovernmentBuildingsType, count: number) => {
  building.staffCount -= count;
}

export const toHireStaff = (building: GovernmentBuildingsType, count: number) => {
  building.staffCount += count;
}
