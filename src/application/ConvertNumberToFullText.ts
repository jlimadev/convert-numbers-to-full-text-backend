import Numbers from '../domain/entities/Numbers';

export class ConvertNumberToFullText {
  private readonly numbers: Numbers;
  private readonly minNumberAsFullText: number = 0;
  private readonly maxNumberAsFullText: number = 9999;

  constructor() {
    this.numbers = new Numbers();
  }

  invoke(number: number): string {
    this.validateInputNumber(number);
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
    }
  }

  private validateInputNumber(number: number) {
    if (number > this.maxNumberAsFullText)
      throw new Error(
        `The number must be between ${this.minNumberAsFullText} and ${this.maxNumberAsFullText}`,
      );
  }
}
