import { writtenNumbersArray } from './core/domain/numbersAndProperties';

const spellOutNumber = (n: number): string => {
  let spelledOutNumber: string;
  const numberAsString = n.toString();
  const digits = numberAsString.length;

  const numbersWithNDigits = writtenNumbersArray.filter(
    (writtenNumber) => writtenNumber.properties.digits == digits,
  );

  switch (digits) {
    case 1:
      spelledOutNumber = getUnitOf(n, digits);
      break;
    case 2:
      spelledOutNumber = getDozenOf(n, digits);
      break;
    case 3: {
      const regularNumbers = numbersWithNDigits.find(
        (numbers) => numbers.properties.digits === digits,
      );

      if (n % regularNumbers.properties.mod === 0) {
        spelledOutNumber = getHundredOf(n);
        break;
      } else {
        const lastDigits = Number(numberAsString.substring(digits - 2, digits));
        const nHundred =
          Number(numberAsString.charAt(0)) * regularNumbers.properties.mod;
        const hundred = getHundredOf(nHundred);
        const word = spellOutNumber(Number(lastDigits));
        spelledOutNumber = `${hundred} (and) ${word}`;
        break;
      }
    }
    default:
      throw new Error('Number not tracked');
  }

  return spelledOutNumber;
};

const getNumbersWithNDigits = (digits: number) => {
  return writtenNumbersArray.filter(
    (writtenNumber) => writtenNumber.properties.digits == digits,
  );
};

const getUnitOf = (n: number, digits: number): string => {
  const arrayOfUnits = getNumbersWithNDigits(digits);
  return arrayOfUnits[0].writtenNumbers[n];
};

const getDozenOf = (n: number, digits: number): string => {
  const arrayOfDozens = getNumbersWithNDigits(digits);
  const numberAsString = n.toString();

  if (n >= 10 && n < 20) {
    const specialNumbers = arrayOfDozens.find(
      (numbers) => numbers.properties.isSpecial,
    );
    return specialNumbers.writtenNumbers[n];
  }
  const regularDozens = arrayOfDozens.find(
    (numbers) => !numbers.properties.isSpecial,
  );

  if (n % regularDozens.properties.mod === 0) {
    return regularDozens.writtenNumbers[n];
  } else {
    const dozen =
      Number(numberAsString.charAt(0)) * regularDozens.properties.mod;
    const unit = Number(numberAsString.substring(digits - 1, digits));
    const writtenUnit = getUnitOf(unit, 1);
    return `${regularDozens.writtenNumbers[dozen]}-${writtenUnit}`;
  }
};

const getHundredOf = (n: number): string => {
  const hundreds = writtenNumbersArray.find(
    (numbers) => numbers.properties.digits === 3,
  );

  const numberAsString = n.toString();
  const firstDigit = Number(numberAsString.charAt(0));
  const unit = getUnitOf(firstDigit, 1);
  return `${unit} ${hundreds.writtenNumbers[0]}`;
};

export { spellOutNumber };
