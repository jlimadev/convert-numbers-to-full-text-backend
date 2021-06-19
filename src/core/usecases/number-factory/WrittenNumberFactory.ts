import { NumberFactory } from './NumberFactory';
import NumbersProperties from '../../domain/data/NumbersProperties';

export interface NumberProperties {
  digitsCount: number;
  hasSpecialSpelling: boolean;
  rest: number;
  rounded: {
    unit: number;
    dozen: number;
    hundred: number;
  };
}

export class WrittenNumberFactory implements NumberFactory {
  constructor(private readonly numbersData: Array<NumbersProperties>) {}

  private getPropertiesOfNumber = (n: number): NumberProperties => {
    const stringOfNumber = n.toString();
    const digitsCount = stringOfNumber.length;
    const firstDigit = Number(stringOfNumber.charAt(0));
    return {
      digitsCount: digitsCount,
      rest: Number(stringOfNumber.substring(1, digitsCount)),
      hasSpecialSpelling: n >= 10 && n < 20,
      rounded: {
        unit: firstDigit,
        dozen: firstDigit * 10,
        hundred: firstDigit * 100,
      },
    };
  };

  private getDataOf = (n: number): NumbersProperties => {
    const { digitsCount, hasSpecialSpelling } = this.getPropertiesOfNumber(n);
    return this.numbersData.find(
      (entry) =>
        entry.properties.digits == digitsCount &&
        entry.properties.hasSpecialSpelling === hasSpecialSpelling,
    );
  };

  getUnitOf(n: number): string {
    const unitsData = this.getDataOf(n);
    return unitsData.writtenNumbers[n];
  }

  getDozenOf(n: number): string {
    const { hasSpecialSpelling, rounded, rest } = this.getPropertiesOfNumber(n);
    const dozensData = this.getDataOf(n);

    if (hasSpecialSpelling) {
      return dozensData.writtenNumbers[n];
    }

    if (n % dozensData.properties.mod === 0) {
      return dozensData.writtenNumbers[n];
    } else {
      const writtenDozen = dozensData.writtenNumbers[rounded.dozen];
      const writtenUnit = this.getUnitOf(rest);
      return `${writtenDozen}-${writtenUnit}`;
    }
  }

  getHundredOf(n: number): string {
    const { rounded, rest } = this.getPropertiesOfNumber(n);
    const hundredsData = this.getDataOf(n);
    const spelledUnit = this.getUnitOf(rounded.unit);
    const spelledHundred = `${spelledUnit} ${hundredsData.writtenNumbers[0]}`;

    if (n % hundredsData.properties.mod === 0) {
      return spelledHundred;
    } else {
      const spelledLastDigits = this.getDozenOf(rest);
      return `${spelledHundred} (and) ${spelledLastDigits}`;
    }
  }
}
