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

  describe('thousands', () => {
    it('should get correctly specified rounded thousands [1000, 2000, ..., 9000]', () => {
      // Arrange
      const { sut } = makeSut();

      // [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]
      const thousands = Array.from(Array(9).keys(), (i) => (i + 1) * 1000);

      const expectedResult = [
        'one thousand',
        'two thousand',
        'three thousand',
        'four thousand',
        'five thousand',
        'six thousand',
        'seven thousand',
        'eight thousand',
        'nine thousand',
      ];

      // Act
      const result = thousands.map((number) => sut.getThousandOf(number));

      // Assert
      expect(result).toEqual(expectedResult);
    });

    it('should get correctly specified thousands [1030, 2131, ..., 9838]', () => {
      // Arrange
      const { sut } = makeSut();
      // [1030, 2131, 3232, 4333, 5434, 6535, 7636, 8737, 9838]
      const thousands = Array.from(
        Array(9).keys(),
        (i) => (i + 1) * 1000 + (i * 100 + 30 + i),
      );

      const expectedResult = [
        'one thousand (and) thirty',
        'two thousand one hundred (and) thirty-one',
        'three thousand two hundred (and) thirty-two',
        'four thousand three hundred (and) thirty-three',
        'five thousand four hundred (and) thirty-four',
        'six thousand five hundred (and) thirty-five',
        'seven thousand six hundred (and) thirty-six',
        'eight thousand seven hundred (and) thirty-seven',
        'nine thousand eight hundred (and) thirty-eight',
      ];

      // Act
      const result = thousands.map((number) => sut.getThousandOf(number));

      // Assert
      expect(result).toEqual(expectedResult);
    });
  });
});
