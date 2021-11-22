import { ConvertNumberToFullTextUsecase } from './convert-number-to-full-text-usecase';
import { ConvertNumberToFullText } from '../../domain/protocols';

const makeSut = (): ConvertNumberToFullText => {
  return new ConvertNumberToFullTextUsecase();
};

describe('ConvertNumberToFullText - usecase', () => {
  describe('invoke', () => {
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
    it('should return null if number is not tracked', () => {
      const sut = makeSut();
      const result = sut.invoke(999999);
      expect(result).toBeNull();
    });
  });
  describe('loadUnit', () => {
    it('should get all units [1, 2, ..., 9]', () => {
      const sut = makeSut();
      const result: Array<string> = [];
      const range = Array.from(Array(10).keys());
      const expectedLength = 10;
      const expectedResult = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
      ];
      range.forEach((i) => result.push(sut.invoke(i)));
      expect(result.length).toBe(expectedLength);
      expect(result).toEqual(expectedResult);
    });
  });
  describe('loadDozen', () => {
    it('should get all special numbers [10, 11, ..., 19]', () => {
      const sut = makeSut();
      const expectedLength = 10;
      const range = Array.from(Array(20).keys()).filter((n) => n >= 10);
      const expectedResult = [
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
      ];
      const result: Array<string> = [];
      range.forEach((i) => result.push(sut.invoke(i)));
      expect(result.length).toBe(expectedLength);
      expect(result).toEqual(expectedResult);
    });
    it('should get all round dozens [10, 20, ..., 90]', () => {
      const sut = makeSut();
      const hundreds = [10, 20, 30, 40, 50, 60, 70, 80, 90];
      const expectedResult = [
        'ten',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
      ];
      const result: Array<string> = hundreds.map((number) => sut.invoke(number));
      expect(result).toEqual(expectedResult);
    });
    it('should get correctly specified dozens [20, 21, ..., 29]', () => {
      const sut = makeSut();
      const range = Array.from(Array(30).keys()).filter((n) => n >= 20);
      const expectedResult = [
        'twenty',
        'twenty-one',
        'twenty-two',
        'twenty-three',
        'twenty-four',
        'twenty-five',
        'twenty-six',
        'twenty-seven',
        'twenty-eight',
        'twenty-nine',
      ];
      const result: Array<string> = [];
      range.forEach((i) => result.push(sut.invoke(i)));
      expect(result).toEqual(expectedResult);
    });
  });
  describe('loadHundred', () => {
    it('should get all round hundreds [100, 200, ..., 900]', () => {
      const sut = makeSut();
      const hundreds = [100, 200, 300, 400, 500, 600, 700, 800, 900];
      const expectedResult = [
        'one-hundred',
        'two-hundred',
        'three-hundred',
        'four-hundred',
        'five-hundred',
        'six-hundred',
        'seven-hundred',
        'eight-hundred',
        'nine-hundred',
      ];
      const result: Array<string> = hundreds.map((number) => sut.invoke(number));
      expect(result).toEqual(expectedResult);
    });
    it('should get correctly the specified compound hundreds [101, 222, ..., 912]', () => {
      const sut = makeSut();
      const numbers = [101, 222, 345, 499, 567, 666, 703, 838, 912];
      const expectedResult = [
        'one-hundred-one',
        'two-hundred-twenty-two',
        'three-hundred-forty-five',
        'four-hundred-ninety-nine',
        'five-hundred-sixty-seven',
        'six-hundred-sixty-six',
        'seven-hundred-three',
        'eight-hundred-thirty-eight',
        'nine-hundred-twelve',
      ];
      const result = numbers.map((number) => sut.invoke(number));
      expect(result).toEqual(expectedResult);
    });
  });
  describe('loadThousand', () => {
    it('should get correctly specified rounded thousands [1000, 2000, ..., 9000]', () => {
      const sut = makeSut();
      // [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]
      const thousands = Array.from(Array(9).keys(), (i) => (i + 1) * 1000);
      const expectedResult = [
        'one-thousand',
        'two-thousand',
        'three-thousand',
        'four-thousand',
        'five-thousand',
        'six-thousand',
        'seven-thousand',
        'eight-thousand',
        'nine-thousand',
      ];
      const result = thousands.map((number) => sut.invoke(number));
      expect(result).toEqual(expectedResult);
    });
    it('should get correctly specified thousands [1030, 2131, ..., 9838]', () => {
      const sut = makeSut();
      // [1030, 2131, 3232, 4333, 5434, 6535, 7636, 8737, 9838]
      const thousands = Array.from(Array(9).keys(), (i) => (i + 1) * 1000 + (i * 100 + 30 + i));
      const expectedResult = [
        'one-thousand-thirty',
        'two-thousand-one-hundred-thirty-one',
        'three-thousand-two-hundred-thirty-two',
        'four-thousand-three-hundred-thirty-three',
        'five-thousand-four-hundred-thirty-four',
        'six-thousand-five-hundred-thirty-five',
        'seven-thousand-six-hundred-thirty-six',
        'eight-thousand-seven-hundred-thirty-seven',
        'nine-thousand-eight-hundred-thirty-eight',
      ];
      const result = thousands.map((number) => sut.invoke(number));
      expect(result).toEqual(expectedResult);
    });
  });
});
