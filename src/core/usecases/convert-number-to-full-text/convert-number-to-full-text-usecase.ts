import { ConvertNumberToFullText } from '../../domain/protocols';
import { units, dozens, specialDozens, hundred, thousand } from '../../domain/model/numbers';
import { GetNumberProps } from '../../domain/utils/get-number-props';

export class ConvertNumberToFullTextUsecase implements ConvertNumberToFullText {
  private readonly units = units;
  private readonly dozens = dozens;
  private readonly specialDozens = specialDozens;
  private readonly hundred = hundred;
  private readonly thousand = thousand;

  invoke(number: number): string {
    const length = number.toString().length;
    switch (length) {
      case 1:
        return this.loadUnit(number);
      case 2:
        return this.loadDozen(number);
      case 3:
        return this.loadHundred(number);
      case 4:
        return this.loadThousand(number);
      default:
        throw new Error('Number not tracked');
    }
  }

  private loadUnit(number: number): string {
    return this.units[number];
  }

  private loadDozen(number: number): string {
    const { numberRoundTen, numberRestDigits } = GetNumberProps.get(number);
    const hasSpecialSpelling = number >= 10 && number <= 19;
    if (hasSpecialSpelling) return this.specialDozens[number];
    const spelledDozen = this.dozens[numberRoundTen];
    if (numberRestDigits === 0) return spelledDozen;
    const spelledUnit = this.loadUnit(numberRestDigits);
    return `${spelledDozen}-${spelledUnit}`;
  }

  private loadHundred(number: number): string {
    const { numberUnit, numberRestDigits } = GetNumberProps.get(number);
    const spelledUnit = this.loadUnit(numberUnit);
    const spelledHundred = `${spelledUnit}-${this.hundred}`;
    if (numberRestDigits === 0) {
      return spelledHundred;
    } else {
      const spelledRest = this.invoke(numberRestDigits);
      return `${spelledHundred}-${spelledRest}`;
    }
  }

  private loadThousand(number: number): string {
    const { numberUnit, numberRestDigits } = GetNumberProps.get(number);
    const spelledUnit = this.loadUnit(numberUnit);
    const spelledThousand = `${spelledUnit}-${this.thousand}`;
    if (numberRestDigits === 0) {
      return spelledThousand;
    } else {
      const spelledRest = this.invoke(numberRestDigits);
      return `${spelledThousand}-${spelledRest}`;
    }
  }
}
