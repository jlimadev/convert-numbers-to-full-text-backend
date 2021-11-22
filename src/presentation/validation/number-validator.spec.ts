import { Validator } from '../protocols';
import { NumberValidator } from './number-validator';
import { HttpRequest } from '../http';
import { InvalidParamError } from '../errors';

const makeInput = (value: unknown): HttpRequest => {
  return {
    params: {
      number: value,
    },
  };
};

const makeSut = (): Validator => {
  const paramName = 'number';
  const minValue = 0;
  const maxValue = 10;
  return new NumberValidator(paramName, minValue, maxValue);
};

describe('number-validator', () => {
  it('should return InvalidParamError when value is not a number', () => {
    const sut = makeSut();
    const httpRequest = makeInput('invalidNumber');
    const expectedErrorMessage = `invalid number: ${httpRequest.params['number']}`;
    const expectedReturn = new InvalidParamError('number', expectedErrorMessage);
    const actualReturn = sut.validate(httpRequest.params);
    expect(actualReturn).toEqual(expectedReturn);
  });
  it('should return InvalidParamError when value is not a integer number', () => {
    const sut = makeSut();
    const number = 1.1;
    const httpRequest = makeInput(number);
    const expectedErrorMessage = `invalid number: ${number}, must be integer.`;
    const expectedReturn = new InvalidParamError('number', expectedErrorMessage);
    const actualReturn = sut.validate(httpRequest.params);
    expect(actualReturn).toEqual(expectedReturn);
  });
  it('should return InvalidParamError when value not between min and max', () => {
    const sut = makeSut();
    const number = 10000000000;
    const httpRequest = makeInput(number);
    const expectedErrorMessage = `The number must be between 0 and 10`;
    const expectedReturn = new InvalidParamError('number', expectedErrorMessage);
    const actualReturn = sut.validate(httpRequest.params);
    expect(actualReturn).toEqual(expectedReturn);
  });
});
