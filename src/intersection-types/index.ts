type HasName = { name: string };
type HasLastName = { lastName: string };
type HasAge = { age: number };
type Person = HasName & HasLastName & HasAge; // AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersection = AB & AC & AD;

const person: Person = {
  age: 19,
  name: 'Alan',
  lastName: 'Gonçalves',
};

console.log(person);

export { person };
