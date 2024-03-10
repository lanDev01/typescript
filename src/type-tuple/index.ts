const dataClient: readonly [number, string] = [1, 'Alan'];
const dataPerson: [number, string, number] = [1, 'Alan', 19];
const dataPerson2: [number, string, number?] = [1, 'Alan'];
const dataPerson3: [number, string, ...string[]] = [1, 'Alan', 'Gonçalves'];

console.log(dataClient);
console.log(dataPerson);
console.log(dataPerson2);
console.log(dataPerson3);
