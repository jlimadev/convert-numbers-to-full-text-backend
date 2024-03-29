import { ConvertNumberToFullText } from '../../../src/application/ConvertNumberToFullText';
import { InvalidNumberError } from '../../../src/domain/errors';

const makeSut = () => {
  return new ConvertNumberToFullText();
};

describe('ConvertNumberToFullText', () => {
  describe('invoke', () => {
    it('should throw an error if number is not tracked', () => {
      const sut = makeSut();
      expect(() => sut.invoke(999999)).toThrow(
        new InvalidNumberError('The number must be between 0 and 9999'),
      );
    });
    it('should invoke correctly loadUnit when calling with unit number (1 to 9)', () => {
      const sut = makeSut();
      const number = 9;
      const result = sut.invoke(number);
      expect(result).toBe('nine');
    });
    it('should invoke correctly loadDozen when calling with dozen number (10 to 99)', () => {
      const sut = makeSut();
      const number = 21;
      const result = sut.invoke(number);
      expect(result).toBe('twenty-one');
    });
    it('should invoke correctly loadHundred when calling with hundred number (100 to 999)', () => {
      const sut = makeSut();
      const number = 838;
      const result = sut.invoke(number);
      expect(result).toBe('eight-hundred-thirty-eight');
    });
    it('should invoke correctly loadThousand when calling with hundred number (1000 to 9999)', () => {
      const sut = makeSut();
      const number = 2131;
      const result = sut.invoke(number);
      expect(result).toBe('two-thousand-one-hundred-thirty-one');
    });
  });
});
