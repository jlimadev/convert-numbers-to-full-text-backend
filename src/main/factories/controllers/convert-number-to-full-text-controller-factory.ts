import ExpressAdapter from '../../../infra/adapters/ExpressAdapter';
import { Http } from '../../../infra/http';
import { ConvertNumberToFullTextController } from '../../../presentation/controllers/ConvertNumberToFullTextController';
import { makeConvertNumberToFullText } from '../usecases/convert-number-to-full-text-usecase-factory';
import { makeNumberValidator } from '../validators/make-number-validator-factory';

export const makeConvertNumberToFullTextController = () => {
  const http: Http = new ExpressAdapter();
  const numberValidator = makeNumberValidator();
  const convertNumberToFullText = makeConvertNumberToFullText();
  return new ConvertNumberToFullTextController(http, numberValidator, convertNumberToFullText);
};
