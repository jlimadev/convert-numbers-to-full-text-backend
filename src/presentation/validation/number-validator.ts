import { Validator } from '../protocols';
import { InvalidParamError } from '../errors';

export class NumberValidator implements Validator {
  constructor(
    private readonly paramName: string,
    private readonly min: number,
    private readonly max: number,
  ) {}

  validate(input: any): Error {
    const number = Number(input[this.paramName]);
    if (isNaN(number)) {
      return new InvalidParamError(this.paramName, `invalid number: ${input[this.paramName]}`);
    }
    if (!Number.isInteger(number)) {
      return new InvalidParamError(this.paramName, `invalid number: ${number}, must be integer.`);
    }
    if (number < this.min || number > this.max) {
      return new InvalidParamError(
        this.paramName,
        `The number must be between ${this.min} and ${this.max}`,
      );
    }
  }
}
