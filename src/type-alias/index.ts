type Age = number;

type Person = {
  name: string;
  age: Age;
  wage: number;
  colorFavorite?: string;
};

type ColorRGB = 'Red' | 'Green' | 'Blue';
type ColorCMYK = 'Cyan' | 'magenta' | 'yellow' | 'Black';
type ColorFavorite = ColorRGB | ColorCMYK;

const person: Person = {
  name: 'Alan',
  age: 19,
  wage: 200000,
};

export function setColorFavorite(person: Person, color: ColorFavorite): Person {
  return { ...person, colorFavorite: color };
}

console.log(setColorFavorite(person, 'Blue'));
