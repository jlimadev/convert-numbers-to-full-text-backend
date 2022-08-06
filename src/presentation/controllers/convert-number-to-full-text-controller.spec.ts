import { ConvertNumberToFullText } from '../../application/ConvertNumberToFullText';
import { badRequest, HttpRequest, internalServerError, notFound, ok } from '../http';
import { Validator } from '../protocols';
import { ConvertNumberToFullTextController } from './convert-number-to-full-text-controller';

const makeHttpRequest = (number = 10): HttpRequest => ({
  params: {
    number,
  },
});

const makeSut = () => {
  const numberValidator: Validator = {
    validate: jest.fn().mockReturnValue(null),
  };
  const convertor = new ConvertNumberToFullText();
  const sut = new ConvertNumberToFullTextController(numberValidator, convertor);
  return { sut, numberValidator, convertor };
};

describe('ConvertNumberToFullTextController', () => {
  it('should call usecase with correct number', async () => {
    const { sut } = makeSut();
    const convertorSpy = jest.spyOn(ConvertNumberToFullText.prototype, 'invoke');
    const httpRequest = makeHttpRequest();
    await sut.handle(httpRequest);
    expect(convertorSpy).toHaveBeenCalledWith(10);
  });
  it('should return 400 (badRequest) if number is invalid', async () => {
    const { sut, numberValidator } = makeSut();
    const httpRequest = makeHttpRequest(Number.MAX_VALUE);
    jest.spyOn(numberValidator, 'validate').mockReturnValueOnce(new Error());
    const result = await sut.handle(httpRequest);
    expect(result).toEqual(badRequest(new Error()));
  });
  it('should return 404 (notFound) if use case returns null', async () => {
    const { sut, convertor } = makeSut();
    const httpRequest = makeHttpRequest();
    jest.spyOn(convertor, 'invoke').mockReturnValueOnce(null);
    const result = await sut.handle(httpRequest);
    expect(result).toEqual(notFound(10));
  });
  it('should return 500 (internalServerError) if use case throws', async () => {
    const { sut, convertor } = makeSut();
    const httpRequest = makeHttpRequest();
    jest.spyOn(convertor, 'invoke').mockImplementationOnce(() => {
      throw new Error('any error');
    });
    const result = await sut.handle(httpRequest);
    expect(result).toEqual(internalServerError(new Error('any error')));
  });
  it('should return 200 (ok) when usecase succeeds', async () => {
    const { sut } = makeSut();
    const httpRequest = makeHttpRequest();
    const result = await sut.handle(httpRequest);
    const expectedResult = { number: 'ten' };
    expect(result).toEqual(ok(expectedResult));
  });
});
