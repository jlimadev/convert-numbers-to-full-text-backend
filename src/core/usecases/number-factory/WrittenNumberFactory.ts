import { NumberFactory } from './NumberFactory';
import { NumbersProperties } from '../../domain/model/numbers';

export type RestProperties = {
  value: number;
  length: number;
};

export interface NumberProperties {
  length: number;
  hasSpecialSpelling: boolean;
  rounded: {
    unit: number;
    dozen: number;
    hundred: number;
    thousand: number;
  };
  rest: RestProperties;
}

export class WrittenNumberFactory implements NumberFactory {
  constructor(private readonly numbersData: Array<NumbersProperties>) {}

  private getPropertiesOfNumber = (n: number): NumberProperties => {
    const stringOfNumber = n.toString();
    const digitsCount = stringOfNumber.length;
    const firstDigit = Number(stringOfNumber.charAt(0));
    const restValue = Number(stringOfNumber.substring(1, digitsCount));
    return {
      length: digitsCount,
      hasSpecialSpelling: n >= 10 && n < 20,
      rounded: {
        unit: firstDigit,
        dozen: firstDigit * 10,
        hundred: firstDigit * 100,
        thousand: firstDigit * 1000,
      },
      rest: {
        value: restValue,
        length: restValue.toString().length,
      },
    };
  };

  private getDataOf = (n: number): NumbersProperties => {
    const { length, hasSpecialSpelling } = this.getPropertiesOfNumber(n);
    return this.numbersData.find(
      (entry) =>
        entry.digits == length &&
        entry.hasSpecialSpelling === hasSpecialSpelling,
    );
  };

  private getSpelledRest(rest: RestProperties, hasAnd: boolean): string {
    const { length, value } = rest;

    const spelledRest =
      length === 3
        ? this.getHundredOf(value)
        : length === 2
        ? this.getDozenOf(value)
        : this.getUnitOf(value);

    return hasAnd ? `(and) ${spelledRest}` : spelledRest;
  }

  getUnitOf(n: number): string {
    const unitsData = this.getDataOf(n);
    return unitsData.data[n];
  }

  getDozenOf(n: number): string {
    const { hasSpecialSpelling, rounded, rest } = this.getPropertiesOfNumber(n);
    const dozensData = this.getDataOf(n);
    if (hasSpecialSpelling || n % dozensData.mod === 0) {
      return dozensData.data[n];
    } else {
      const spelledDozen = dozensData.data[rounded.dozen];
      const spelledRest = this.getSpelledRest(rest, false);
      return `${spelledDozen}-${spelledRest}`;
    }
  }

  getHundredOf(n: number): string {
    const { rounded, rest } = this.getPropertiesOfNumber(n);
    const hundredsData = this.getDataOf(n);
    const spelledUnit = this.getUnitOf(rounded.unit);
    const spelledHundred = `${spelledUnit} ${hundredsData.data}`;
    if (n % hundredsData.mod === 0) {
      return spelledHundred;
    } else {
      const spelledRest = this.getSpelledRest(rest, true);
      return `${spelledHundred} ${spelledRest}`;
    }
  }

  getThousandOf(n: number): string {
    const { rounded, rest } = this.getPropertiesOfNumber(n);
    const thousandData = this.getDataOf(n);
    const spelledUnit = this.getUnitOf(rounded.unit);
    const spelledThousand = `${spelledUnit} ${thousandData.data}`;
    if (n % thousandData.mod === 0) {
      return spelledThousand;
    } else {
      const spelledRest = this.getSpelledRest(rest, rest.length <= 2);
      return `${spelledThousand} ${spelledRest}`;
    }
  }
}
