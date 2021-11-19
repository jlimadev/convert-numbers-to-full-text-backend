import { LoadDozenService } from './load-dozen-service';
import { specialDozens } from '../../../core/domain/model/numbers';
import { LoadUnit } from '../../../core/usecases/protocols/';

const makeSut = () => {
  const loadUnit: LoadUnit = {
    invoke: jest.fn(),
  };
  const sut = new LoadDozenService(loadUnit);
  return {
    sut,
    loadUnit,
  };
};

describe('load-dozen-service', () => {
  it('should return all special dozens when input is [10, 11, 12 ... 19]', () => {
    const { sut } = makeSut();
    const specialDozensValues = Object.values(specialDozens.data);
    const dozens = Array.from(Array(20).keys()).filter((n) => n >= 10);
    dozens.forEach((dozen) => {
      const result = sut.invoke(dozen);
      expect(specialDozensValues).toContain(result);
    });
  });
  it('should return twenty when input is 20', () => {
    const { sut } = makeSut();
    const result = sut.invoke(20);
    expect(result).toBe('twenty');
  });
  it('should return twenty-one when input is 21', () => {
    const { sut, loadUnit } = makeSut();
    jest.spyOn(loadUnit, 'invoke').mockReturnValue('one');
    const result = sut.invoke(21);
    expect(result).toBe('twenty-one');
  });
  it('should return thirty-four when input is 34', () => {
    const { sut, loadUnit } = makeSut();
    jest.spyOn(loadUnit, 'invoke').mockReturnValue('four');
    const result = sut.invoke(34);
    expect(result).toBe('thirty-four');
  });
  it('should return forty-six when input is 46', () => {
    const { sut, loadUnit } = makeSut();
    jest.spyOn(loadUnit, 'invoke').mockReturnValue('six');
    const result = sut.invoke(46);
    expect(result).toBe('forty-six');
  });
});
