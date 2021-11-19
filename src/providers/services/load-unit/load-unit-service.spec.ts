import { LoadUnitService } from './load-unit-service';

const makeSut = (): LoadUnitService => {
  return new LoadUnitService();
};

describe('load-unit-impl', () => {
  it('it should return one when the input is 1', () => {
    const sut = makeSut();
    const expectedResult = 'one';
    const result = sut.invoke(1);
    expect(result).toBe(expectedResult);
  });
  it('it should return two when the input is 2', () => {
    const sut = makeSut();
    const expectedResult = 'two';
    const result = sut.invoke(2);
    expect(result).toBe(expectedResult);
  });
  it('it should return three when the input is 3', () => {
    const sut = makeSut();
    const expectedResult = 'three';
    const result = sut.invoke(3);
    expect(result).toBe(expectedResult);
  });
  it('it should return four when the input is 4', () => {
    const sut = makeSut();
    const expectedResult = 'four';
    const result = sut.invoke(4);
    expect(result).toBe(expectedResult);
  });
  it('it should return five when the input is 5', () => {
    const sut = makeSut();
    const expectedResult = 'five';
    const result = sut.invoke(5);
    expect(result).toBe(expectedResult);
  });
  it('it should return six when the input is 6', () => {
    const sut = makeSut();
    const expectedResult = 'six';
    const result = sut.invoke(6);
    expect(result).toBe(expectedResult);
  });
  it('it should return seven when the input is 7', () => {
    const sut = makeSut();
    const expectedResult = 'seven';
    const result = sut.invoke(7);
    expect(result).toBe(expectedResult);
  });
  it('it should return eight when the input is 8', () => {
    const sut = makeSut();
    const expectedResult = 'eight';
    const result = sut.invoke(8);
    expect(result).toBe(expectedResult);
  });
  it('it should return nine when the input is 9', () => {
    const sut = makeSut();
    const expectedResult = 'nine';
    const result = sut.invoke(9);
    expect(result).toBe(expectedResult);
  });
});
