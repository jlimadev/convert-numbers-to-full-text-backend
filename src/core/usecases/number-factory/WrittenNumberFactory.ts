import { NumberFactory } from './NumberFactory';
import NumbersProperties from '../../domain/data/NumbersProperties';

export class WrittenNumberFactory implements NumberFactory {
  constructor(private readonly numbersData: Array<NumbersProperties>) {}

  private readonly firstSpecialNumber: number = 10;
  private readonly lastSpecialNumber: number = 20;

  private getDataOf = (n: number, digits: number): NumbersProperties => {
    return this.numbersData.find(
      (entry) =>
        entry.properties.digits == digits &&
        entry.properties.hasSpecialSpelling === this.hasSpecialSpelling(n),
    );
  };

  private hasSpecialSpelling(n: number): boolean {
    return n >= this.firstSpecialNumber && n < this.lastSpecialNumber;
  }

  getCurrentNumberDigits(n: number): number {
    return n.toString().length;
  }

  getUnitOf(n: number): string {
    const digits = this.getCurrentNumberDigits(n);
    const unitsData = this.getDataOf(n, digits);
    return unitsData.writtenNumbers[n];
  }

  getDozenOf(n: number): string {
    const digits = this.getCurrentNumberDigits(n);
    const arrayOfDozens = this.getDataOf(n, digits);
    const numberAsString = n.toString();

    if (this.hasSpecialSpelling(n)) {
      return arrayOfDozens.writtenNumbers[n];
    }

    if (n % arrayOfDozens.properties.mod === 0) {
      return arrayOfDozens.writtenNumbers[n];
    } else {
      const dozen =
        Number(numberAsString.charAt(0)) * arrayOfDozens.properties.mod;
      const unit = Number(numberAsString.substring(digits - 1, digits));
      const writtenUnit = this.getUnitOf(unit);
      return `${arrayOfDozens.writtenNumbers[dozen]}-${writtenUnit}`;
    }
  }

  getHundredOf(n: number): string {
    const digits = this.getCurrentNumberDigits(n);
    const hundreds = this.getDataOf(n, digits);
    const numberAsString = n.toString();

    if (n % hundreds.properties.mod === 0) {
      return this.getRoundHundredOf(n, hundreds);
    } else {
      const nHundred =
        Number(numberAsString.charAt(0)) * hundreds.properties.mod;
      const spelledHundred = this.getRoundHundredOf(nHundred, hundreds);
      const lastDigits = Number(numberAsString.substring(digits - 2, digits));
      const spelledLastDigits = this.getDozenOf(Number(lastDigits));
      return `${spelledHundred} (and) ${spelledLastDigits}`;
    }
  }

  private getRoundHundredOf = (n: number, hundreds: NumbersProperties) => {
    const numberAsString = n.toString();
    const firstDigit = Number(numberAsString.charAt(0));
    const unit = this.getUnitOf(firstDigit);
    return `${unit} ${hundreds.writtenNumbers[0]}`;
  };
}
