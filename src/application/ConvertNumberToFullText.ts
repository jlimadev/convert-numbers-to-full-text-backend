import Numbers from '../domain/entities/Numbers';

export class ConvertNumberToFullText {
  private readonly numbers: Numbers;

  constructor() {
    this.numbers = new Numbers();
  }

  invoke(number: number): string {
    const length = number.toString().length;
    switch (length) {
      case 1:
        return this.numbers.getUnit(number);
      case 2:
        return this.numbers.getDozen(number);
      case 3:
        return this.numbers.getHundred(number);
      case 4:
        return this.numbers.getThousand(number);
      default:
        return null;
    }
  }
}
