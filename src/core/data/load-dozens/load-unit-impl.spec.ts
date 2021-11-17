import { LoadUnitImpl } from './load-unit-impl';

const makeSut = (unit: number): LoadUnitImpl => {
  return new LoadUnitImpl(unit);
};

describe('load-unit-impl', () => {
  it('it should return one when the input is 1', () => {
    const sut = makeSut(1);
    const expectedResult = 'one';
    const result = sut.loadUnit();
    expect(result).toBe(expectedResult);
  });
  it('it should return two when the input is 2', () => {
    const sut = makeSut(2);
    const expectedResult = 'two';
    const result = sut.loadUnit();
    expect(result).toBe(expectedResult);
  });
  it('it should return three when the input is 3', () => {
    const sut = makeSut(3);
    const expectedResult = 'three';
    const result = sut.loadUnit();
    expect(result).toBe(expectedResult);
  });
  it('it should return four when the input is 4', () => {
    const sut = makeSut(4);
    const expectedResult = 'four';
    const result = sut.loadUnit();
    expect(result).toBe(expectedResult);
  });
  it('it should return five when the input is 5', () => {
    const sut = makeSut(5);
    const expectedResult = 'five';
    const result = sut.loadUnit();
    expect(result).toBe(expectedResult);
  });
  it('it should return six when the input is 6', () => {
    const sut = makeSut(6);
    const expectedResult = 'six';
    const result = sut.loadUnit();
    expect(result).toBe(expectedResult);
  });
  it('it should return seven when the input is 7', () => {
    const sut = makeSut(7);
    const expectedResult = 'seven';
    const result = sut.loadUnit();
    expect(result).toBe(expectedResult);
  });
  it('it should return eight when the input is 8', () => {
    const sut = makeSut(8);
    const expectedResult = 'eight';
    const result = sut.loadUnit();
    expect(result).toBe(expectedResult);
  });
  it('it should return nine when the input is 9', () => {
    const sut = makeSut(9);
    const expectedResult = 'nine';
    const result = sut.loadUnit();
    expect(result).toBe(expectedResult);
  });
});
