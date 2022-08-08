import { InvalidParamError } from '../errors';
import { Validator } from '../protocols';

export class NumberInputValidator implements Validator {
  private readonly paramName: string = 'number';

  validate(input: any): Error {
    const number = Number(input);
    if (isNaN(number)) {
      return new InvalidParamError(this.paramName, `Invalid number: ${input}`);
    }
    if (!Number.isInteger(number)) {
      return new InvalidParamError(this.paramName, `Invalid number: ${number} must be integer.`);
    }
  }
}
