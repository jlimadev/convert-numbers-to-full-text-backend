import { ConvertNumberToFullTextController } from '../../../presentation/controllers/convert-number-to-full-text-controller';
import { Controller } from '../../../presentation/protocols';
import { makeConvertNumberToFullText } from '../usecases/convert-number-to-full-text-usecase-factory';
import { makeNumberValidator } from '../validators/make-number-validator-factory';

export const makeConvertNumberToFullTextController = (): Controller => {
  const numberValidator = makeNumberValidator();
  const convertor = makeConvertNumberToFullText();
  return new ConvertNumberToFullTextController(numberValidator, convertor);
};
