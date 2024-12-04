const ages = [18, 28, 22, 1, 108, 98, 14];

export const predicate = (age: number) => {
  return age > 90;
}

const oldAges = [100]; // > 90

type CurseType = {
  title: string
  price: number
}

const courses = [
  {title: 'css', price: 100},
  {title: 'js', price: 200},
  {title: 'react', price: 150},
];

// < 160
const cheapCourses = (course: CurseType) => {
  return course.price < 160;
}

const chipCourse = [
  {title: 'css', price: 100},
  {title: 'react', price: 150},
];
