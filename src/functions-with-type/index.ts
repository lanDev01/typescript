type MapStringCallback = (item: string) => string;

export function mapString(
  array: string[],
  callbackFn: MapStringCallback,
): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callbackFn(item));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapString(abc, (item) => item.toUpperCase());

console.log(abcMapped);
