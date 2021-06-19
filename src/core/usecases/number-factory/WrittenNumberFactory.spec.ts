import { WrittenNumberFactory } from './WrittenNumberFactory';
import { writtenNumbersData } from '../../domain/data/NumbersData';

const makeSut = () => {
  const sut = new WrittenNumberFactory(writtenNumbersData);

  return { sut };
};

describe('WrittenNumberFactory test suit', () => {
  describe('units', () => {
    it('should get all units [1, 2, ..., 9]', () => {
      // Arrange
      const { sut } = makeSut();
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

      // Act
      range.forEach((i) => result.push(sut.getUnitOf(i)));

      // Assert
      expect(result.length).toBe(expectedLength);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('dozens', () => {
    it('should get all special numbers [10, 11, ..., 19]', () => {
      // Arrange
      const { sut } = makeSut();
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

      // Act
      const result: Array<string> = [];
      range.forEach((i) => result.push(sut.getDozenOf(i)));

      // Assert
      expect(result.length).toBe(expectedLength);
      expect(result).toEqual(expectedResult);
    });

    it('should get all round dozens [10, 20, ..., 90]', () => {
      // Arrange
      const { sut } = makeSut();
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

      // Act
      const result: Array<string> = hundreds.map((number) =>
        sut.getDozenOf(number),
      );

      // Assert
      expect(result).toEqual(expectedResult);
    });

    it('should get correctly specified dozens [20, 21, ..., 29]', () => {
      // Arrange
      const { sut } = makeSut();
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

      // Act
      const result: Array<string> = [];
      range.forEach((i) => result.push(sut.getDozenOf(i)));

      // Assert
      expect(result).toEqual(expectedResult);
    });
  });

  describe('hundreds', () => {
    it('should get all round hundreds [100, 200, ..., 900]', () => {
      // Arrange
      const { sut } = makeSut();
      const hundreds = [100, 200, 300, 400, 500, 600, 700, 800, 900];
      const expectedResult = [
        'one hundred',
        'two hundred',
        'three hundred',
        'four hundred',
        'five hundred',
        'six hundred',
        'seven hundred',
        'eight hundred',
        'nine hundred',
      ];

      // Act
      const result: Array<string> = hundreds.map((number) =>
        sut.getHundredOf(number),
      );

      // Assert
      expect(result).toEqual(expectedResult);
    });

    it('should get correctly the specified compound hundreds [101, 222, ..., 912]', () => {
      // Arrange
      const { sut } = makeSut();
      const numbers = [101, 222, 345, 499, 567, 666, 703, 838, 912];
      const expectedResult = [
        'one hundred (and) one',
        'two hundred (and) twenty-two',
        'three hundred (and) forty-five',
        'four hundred (and) ninety-nine',
        'five hundred (and) sixty-seven',
        'six hundred (and) sixty-six',
        'seven hundred (and) three',
        'eight hundred (and) thirty-eight',
        'nine hundred (and) twelve',
      ];

      // Act
      const result = numbers.map((number) => sut.getHundredOf(number));

      // Assert
      expect(result).toEqual(expectedResult);
    });
  });
});
