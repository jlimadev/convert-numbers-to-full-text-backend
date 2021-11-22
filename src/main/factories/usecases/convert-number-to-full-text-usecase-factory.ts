import { ConvertNumberToFullText } from '../../../core/domain/protocols';
import { ConvertNumberToFullTextUsecase } from '../../../core/usecases/convert-number-to-full-text';

export const makeConvertNumberToFullTextUsecase = (): ConvertNumberToFullText => {
  return new ConvertNumberToFullTextUsecase();
};
