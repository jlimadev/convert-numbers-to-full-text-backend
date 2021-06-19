import { NumberFactory } from './NumberFactory';
import NumbersProperties from '../../domain/data/NumbersProperties';

export interface NumberProperties {
  digits: number;
  firstDigit: number;
  restDigits: number;
  hasSpecialSpelling: boolean;
  rounded: {
    unit: number;
    dozen: number;
    hundred: number;
  };
}

export class WrittenNumberFactory implements NumberFactory {
  constructor(private readonly numbersData: Array<NumbersProperties>) {}

  private getPropertiesOf(n: number): NumberProperties {
    const stringOfNumber = n.toString();
    const digits = stringOfNumber.length;
    const firstDigit = Number(stringOfNumber.charAt(0));
    return {
      digits: digits,
      firstDigit: firstDigit,
      restDigits: Number(stringOfNumber.substring(1, digits)),
      hasSpecialSpelling: n >= 10 && n < 20,
      rounded: {
        unit: firstDigit,
        dozen: firstDigit * 10,
        hundred: firstDigit * 100,
      },
    };
  }

  private getDataOf = (n: number): NumbersProperties => {
    const { digits, hasSpecialSpelling } = this.getPropertiesOf(n);
    return this.numbersData.find(
      (entry) =>
        entry.properties.digits == digits &&
        entry.properties.hasSpecialSpelling === hasSpecialSpelling,
    );
  };

  getUnitOf(n: number): string {
    const unitsData = this.getDataOf(n);
    return unitsData.writtenNumbers[n];
  }

  getDozenOf(n: number): string {
    const { hasSpecialSpelling, rounded, restDigits } = this.getPropertiesOf(n);
    const dozensData = this.getDataOf(n);

    if (hasSpecialSpelling) {
      return dozensData.writtenNumbers[n];
    }

    if (n % dozensData.properties.mod === 0) {
      return dozensData.writtenNumbers[n];
    } else {
      const writtenDozen = dozensData.writtenNumbers[rounded.dozen];
      const writtenUnit = this.getUnitOf(restDigits);
      return `${writtenDozen}-${writtenUnit}`;
    }
  }

  getHundredOf(n: number): string {
    const { restDigits, rounded } = this.getPropertiesOf(n);
    const hundredsData = this.getDataOf(n);
    const spelledUnit = this.getUnitOf(rounded.unit);
    const spelledHundred = `${spelledUnit} ${hundredsData.writtenNumbers[0]}`;

    if (n % hundredsData.properties.mod === 0) {
      return spelledHundred;
    } else {
      const spelledLastDigits = this.getDozenOf(restDigits);
      return `${spelledHundred} (and) ${spelledLastDigits}`;
    }
  }
}
