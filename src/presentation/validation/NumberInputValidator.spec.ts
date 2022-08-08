import { InvalidParamError } from '../errors';
import { HttpRequest } from '../http';
import { Validator } from '../protocols';
import { NumberInputValidator } from './NumberInputValidator';

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
    const expectedReturn = new InvalidParamError('number', expectedErrorMessage);
    const actualReturn = sut.validate(httpRequest.params.number);
    expect(actualReturn).toEqual(expectedReturn);
  });
  it('should return InvalidParamError when value is not a integer number', () => {
    const sut = makeSut();
    const number = 1.1;
    const httpRequest = makeInput(number);
    const expectedErrorMessage = `Invalid number: ${number} must be integer.`;
    const expectedReturn = new InvalidParamError('number', expectedErrorMessage);
    const actualReturn = sut.validate(httpRequest.params.number);
    expect(actualReturn).toEqual(expectedReturn);
  });
});
