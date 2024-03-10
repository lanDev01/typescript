function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const person = {
  name: 'Alan',
  lastName: 'Gonçalves',

  displayName(): void {
    console.log(this.name + ' ' + this.lastName);
  },
};

noReturn('Alan', 'Gonçalves');
person.displayName();

export { person };
