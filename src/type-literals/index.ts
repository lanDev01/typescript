let x = 10; // eslint-disable-line
x = 0b1010;
const y = 10;

const a = 100; // eslint-disable-line

const person = {
  name: 'Alan' as const,
  lastName: 'Gonçalves',
};

console.log(person.name);

function chooseColor(color: 'Red' | 'Yellow' | 'Blue'): string {
  return color;
}

console.log(chooseColor('Red'));

console.log(x, y);

// Module Mode
export default 1;
