import { ConvertNumberToFullTextUsecase } from './convert-number-to-full-text-usecase';
import { LoadUnit, LoadDozen, LoadHundred, LoadThousand } from '../protocols';

const makeSut = () => {
  const invoke = { invoke: jest.fn() };
  const loadUnitMock: LoadUnit = invoke;
  const loadDozenMock: LoadDozen = invoke;
  const loadHundredMock: LoadHundred = invoke;
  const loadThousandMock: LoadThousand = invoke;
  const sut = new ConvertNumberToFullTextUsecase(
    loadUnitMock,
    loadDozenMock,
    loadHundredMock,
    loadThousandMock,
  );
  return { sut, loadUnitMock, loadDozenMock, loadHundredMock, loadThousandMock };
};

describe('ConvertNumberToFullText - Usecase', () => {
  it('should invoke correctly loadUnit when calling with unit number (1 to 9)', () => {
    const { sut, loadUnitMock } = makeSut();
    const loadUnitSpy = jest.spyOn(loadUnitMock, 'invoke');
    const number = 9;
    sut.invoke(number);
    expect(loadUnitSpy).toHaveBeenCalledWith(number);
  });
  it('should invoke correctly loadDozen when calling with dozen number (10 to 99)', () => {
    const { sut, loadDozenMock } = makeSut();
    const loadDozenSpy = jest.spyOn(loadDozenMock, 'invoke');
    const number = 98;
    sut.invoke(number);
    expect(loadDozenSpy).toHaveBeenCalledWith(number);
  });
  it('should invoke correctly loadHundred when calling with hundred number (100 to 999)', () => {
    const { sut, loadHundredMock } = makeSut();
    const loadHundredSpy = jest.spyOn(loadHundredMock, 'invoke');
    const number = 654;
    sut.invoke(number);
    expect(loadHundredSpy).toHaveBeenCalledWith(number);
  });
  it('should invoke correctly loadThousand when calling with hundred number (1000 to 9999)', () => {
    const { sut, loadThousandMock } = makeSut();
    const loadThousandSpy = jest.spyOn(loadThousandMock, 'invoke');
    const number = 6594;
    sut.invoke(number);
    expect(loadThousandSpy).toHaveBeenCalledWith(number);
  });
  it('should throw an error if pass not tracked numbers', () => {
    const { sut } = makeSut();
    expect(() => sut.invoke(999999)).toThrowError('Number not tracked');
  });
});
