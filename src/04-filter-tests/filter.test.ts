import {predicate} from './filter';

test('should take old men older then 90', () => {
  const ages = [18, 28, 22, 1, 108, 98, 14];

  const oldAges = ages.filter(predicate);

  expect(oldAges.length).toBe(2);
  expect(oldAges[0]).toBe(108);
});
