type StreetTitle = {
  title: string
}

type StreetType = {
  street: StreetTitle
}

type TitleType = {
  title: string
}

type PropsType = {
  name: string
  age: number
  lessons: Array<TitleType>
  address: StreetType
}

let props: PropsType;

beforeEach(() => {
  props = {
    name: 'Oleg',
    age: 32,
    lessons: [{title: '1'}, {title: '2'}],
    address: {
      street: {
        title: 'Kavkazskaya street'
      }
    }
  };
})

test('', () => {
  const {age, name, lessons} = props;
  const {title} = props.address.street;

  expect(age).toBe(32);
  expect(name).toBe('Oleg');
  expect(lessons.length).toBe(2);
  expect(title).toBe('Kavkazskaya street');
});

test('', () => {
  const l1 = props.lessons[0];
  const l2 = props.lessons[1];

  const [ls1, ls2] = props.lessons;
  const [, ll2] = props.lessons; // если не нужен первый элемент пропускаем

  const [ld1, ...allLessons] = props.lessons;

  expect(l1.title).toBe('1');
  expect(l2.title).toBe('2');

  expect(ls1.title).toBe('1');
  expect(ls2.title).toBe('2');

  expect(ll2.title).toBe('2');
  expect(allLessons[0].title).toBe('2');
});
