export function multiplyArgs(...args: Array<number>) {
  return args.reduce((ac, value) => ac * value, 1);
}

export function concatString(...args: string[]): string {
  return args.reduce((ac, value) => ac + value);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplyArgs(1, 2, 3);
const concat = concatString('Olá ', 'Teste');
const upper = toUpperCase('a', 'b', 'c');

console.log(result);
console.log(concat);
console.log(upper);
