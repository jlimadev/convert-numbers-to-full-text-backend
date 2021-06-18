import { SpellNumber } from './SpellNumber';
import NumbersProperties from '../../domain/data/NumbersProperties';
import { writtenNumbersArray } from '../../domain/data/numbersAndProperties';

export class SpellOutNumber implements SpellNumber {
  private readonly firstSpecialNumber: number = 10;
  private readonly lastSpecialNumber: number = 20;

  invokeWith(n: number): string {
    const digits = this.getCurrentNumberDigits(n);
    switch (digits) {
      case 1:
        return this.getUnitOf(n);
      case 2:
        return this.getDozenOf(n);
      case 3:
        return this.getHundredOf(n);
      default:
        throw new Error('Number not tracked');
    }
  }

  private getCurrentNumberDigits(n: number): number {
    return n.toString().length;
  }

  private hasSpecialSpelling(n: number): boolean {
    return n >= this.firstSpecialNumber && n < this.lastSpecialNumber;
  }

  private getDataOf = (n: number, digits: number): NumbersProperties => {
    return writtenNumbersArray.find(
      (entry) =>
        entry.properties.digits == digits &&
        entry.properties.hasSpecialSpelling === this.hasSpecialSpelling(n),
    );
  };

  private getUnitOf(n: number): string {
    const digits = this.getCurrentNumberDigits(n);
    const arrayOfUnits = this.getDataOf(n, digits);
    return arrayOfUnits.writtenNumbers[n];
  }

  private getDozenOf(n: number): string {
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

  private getHundredOf(n: number): string {
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
      const spelledLastDigits = this.invokeWith(Number(lastDigits));
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
