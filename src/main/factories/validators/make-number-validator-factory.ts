import { Validator } from '../../../presentation/protocols';
import { NumberValidator } from '../../../presentation/validation/number-validator';
import env from '../../config/env';

export const makeNumberValidator = (): Validator => {
  const paramName = 'number';
  const minValue = Number(env.minValue);
  const maxValue = Number(env.maxValue);
  return new NumberValidator(paramName, minValue, maxValue);
};
