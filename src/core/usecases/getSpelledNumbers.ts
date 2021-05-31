import INumbersProperties from '../domain/INumbersProperties';
import { writtenNumbersArray } from '../domain/numbersAndProperties';
import { spellOutNumber } from '../../app';

const getNumbersWithNDigits = (digits: number): INumbersProperties[] => {
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

const getHundredOf = (n: number, digits: number): string => {
  const numberAsString = n.toString();
  const hundredArray = getNumbersWithNDigits(digits);
  const hundreds = hundredArray.find(
    (numbers) => numbers.properties.digits === digits,
  );

  if (n % hundreds.properties.mod === 0) {
    return getRoundHundredOf(n, hundreds);
  } else {
    const nHundred = Number(numberAsString.charAt(0)) * hundreds.properties.mod;
    const spelledHundred = getRoundHundredOf(nHundred, hundreds);
    const lastDigits = Number(numberAsString.substring(digits - 2, digits));
    const spelledLastDigits = spellOutNumber(Number(lastDigits));
    return `${spelledHundred} (and) ${spelledLastDigits}`;
  }
};

const getRoundHundredOf = (n: number, hundreds: INumbersProperties) => {
  const numberAsString = n.toString();
  const firstDigit = Number(numberAsString.charAt(0));
  const unit = getUnitOf(firstDigit, 1);
  return `${unit} ${hundreds.writtenNumbers[0]}`;
};

export { getUnitOf, getDozenOf, getHundredOf };
