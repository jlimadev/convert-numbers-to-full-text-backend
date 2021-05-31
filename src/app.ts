import {
  getUnitOf,
  getDozenOf,
  getHundredOf,
} from './core/usecases/getSpelledNumbers';

const spellOutNumber = (n: number): string => {
  let spelledOutNumber: string;
  const numberAsString = n.toString();
  const digits = numberAsString.length;

  switch (digits) {
    case 1:
      spelledOutNumber = getUnitOf(n, digits);
      break;
    case 2:
      spelledOutNumber = getDozenOf(n, digits);
      break;
    case 3:
      spelledOutNumber = getHundredOf(n, digits);
      break;
    default:
      throw new Error('Number not tracked');
  }

  return spelledOutNumber;
};

export { spellOutNumber };
