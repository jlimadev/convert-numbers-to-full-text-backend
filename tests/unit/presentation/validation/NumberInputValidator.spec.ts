import { InvalidParamError } from '../../../../src/presentation/errors';
import { HttpRequest } from '../../../../src/presentation/http';
import { Validator } from '../../../../src/presentation/protocols';
import { NumberInputValidator } from '../../../../src/presentation/validation/NumberInputValidator';

const makeInput = (value: unknown): HttpRequest => {
  return {
    params: {
      number: value,
    },
  };
};

const makeSut = (): Validator => {
  return new NumberInputValidator();
};

describe('number-validator', () => {
  it('should return InvalidParamError when value is not a number', () => {
    const sut = makeSut();
    const httpRequest = makeInput('invalidNumber');
    const expectedErrorMessage = `Invalid number: ${httpRequest.params.number}`;
    const expectedError = new InvalidParamError('number', expectedErrorMessage);
    expect(() => sut.validate(httpRequest.params.number)).toThrow(expectedError);
  });
  it('should return InvalidParamError when value is not a integer number', () => {
    const sut = makeSut();
    const number = 1.1;
    const httpRequest = makeInput(number);
    const expectedErrorMessage = `Invalid number: ${number} must be integer.`;
    const expectedError = new InvalidParamError('number', expectedErrorMessage);
    expect(() => sut.validate(httpRequest.params.number)).toThrow(expectedError);
  });
});
