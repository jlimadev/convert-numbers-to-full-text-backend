import { Controller } from '../../../presentation/protocols';
import { ConvertNumberToFullTextController } from '../../../presentation/controllers/convert-number-to-full-text-controller';
import { makeConvertNumberToFullTextUsecase } from '../usecases/convert-number-to-full-text-usecase-factory';
import { makeNumberValidator } from '../validators/make-number-validator-factory';

export const makeConvertNumberToFullTextController = (): Controller => {
  const numberValidator = makeNumberValidator();
  const convertor = makeConvertNumberToFullTextUsecase();
  return new ConvertNumberToFullTextController(numberValidator, convertor);
};
