import { ConvertNumberToFullTextController } from './convert-number-to-full-text-controller';
import { ConvertNumberToFullText } from '../../core/domain/protocols';
import { internalServerError, notFound } from '../protocols';

const makeSut = () => {
  const convertor: ConvertNumberToFullText = {
    invoke: jest.fn().mockReturnValue('any-number-as-full-text'),
  };
  const sut = new ConvertNumberToFullTextController(convertor);
  return { sut, convertor };
};

describe('ConvertNumberToFullTextController', () => {
  it('should call usecase with correct number', () => {
    const { sut, convertor } = makeSut();
    const number = 10;
    sut.handle(number);
    expect(convertor.invoke).toHaveBeenCalledWith(number);
  });
  it('should return 404 notFound if use case returns null', () => {
    const { sut, convertor } = makeSut();
    jest.spyOn(convertor, 'invoke').mockReturnValueOnce(null);
    const number = 10;
    const result = sut.handle(number);
    expect(result).toEqual(notFound(`Could not find ${number} as full text`));
  });
  it('should return 500 internalServerError if use case throws', () => {
    const { sut, convertor } = makeSut();
    jest.spyOn(convertor, 'invoke').mockImplementationOnce(() => {
      throw new Error('any error');
    });
    const number = 10;
    const result = sut.handle(number);
    expect(result).toEqual(internalServerError(new Error('any error')));
  });
});
