import { Validator } from '../../../presentation/protocols';
import { NumberInputValidator } from '../../../presentation/validation/NumberInputValidator';

export const makeNumberValidator = (): Validator => {
  return new NumberInputValidator();
};
