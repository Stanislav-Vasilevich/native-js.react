export function sum(a: number, b: number) {
  return a + b;
}

export function multiply(a: number, b: number) {
  return a * b;
}

export function splitIntoWords(sentence: string) {
  return sentence
    .trim()
    .toLowerCase()
    .replace('!', '')
    .replace('.', '')
    .split(' ')
    .filter(i => i !== '' && i !== '-');
}
