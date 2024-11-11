import {multiply, splitIntoWords, sum} from './01';

let a: number;
let b: number;
let c: number;

beforeEach(() => {
  a = 2;
  b = 3;
  c = 5;
});

test('sum should be correct', () => {
  // action
  const result = sum(a, b);
  const result2 = sum(a, c);
  const result3 = sum(b, c);

  // expect
  expect(result).toBe(5);
  expect(result2).toBe(7);
  expect(result3).toBe(8);
});

test('multiply should be correct', () => {
  // action
  const result = multiply(a, b);
  const result2 = multiply(a, c);
  const result3 = multiply(b, c);

  // expect
  expect(result).toBe(6);
  expect(result2).toBe(10);
  expect(result3).toBe(15);
});

test('splitting should be correct', () => {
  // data
  const sent1 = 'Hello my friends!';
  const sent2 = 'JS - the best  programming language.';

  // action
  const result1 = splitIntoWords(sent1);
  const result2 = splitIntoWords(sent2);

  console.log('result1: ', result1);
  console.log('result2: ', result2);

  // expect
  // result1
  expect(result1.length).toBe(3);
  expect(result1[0]).toBe('hello');
  expect(result1[1]).toBe('my');
  expect(result1[2]).toBe('friends');
  // result2
  expect(result2.length).toBe(5);
  expect(result2[0]).toBe('js');
  expect(result2[1]).toBe('the');
  expect(result2[2]).toBe('best');
  expect(result2[3]).toBe('programming');
  expect(result2[4]).toBe('language');
});
