import { getWrittenNumberOf } from './app';

describe('Cardinal numbers test suit', () => {
  it('should get all units (1, 2, ..., 9)', () => {
    // Arrange
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
    range.forEach((i) => result.push(getWrittenNumberOf(i)));

    // Assert
    expect(result.length).toBe(expectedLength);
    expect(result).toEqual(expectedResult);
  });

  it('should get all special numbers (10, 11, ..., 19', () => {
    // Arrange
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
    range.forEach((i) => result.push(getWrittenNumberOf(i)));

    // Assert
    expect(result.length).toBe(expectedLength);
    expect(result).toEqual(expectedResult);
  });

  it('should get all round dozens (10, 20, ..., 90)', () => {
    // Arrange
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
      getWrittenNumberOf(number),
    );

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should get from 20 to 29', () => {
    // Arrange
    const expectedResult = 10;
    const range = Array.from(Array(30).keys()).filter((n) => n >= 20);

    // Act
    const result: Array<string> = [];
    range.forEach((i) => result.push(getWrittenNumberOf(i)));

    // Assert
    expect(result.length).toBe(expectedResult);
    expect(result[0]).toBe('twenty');
    expect(result[1]).toBe('twenty-one');
  });

  it('should get all round hundreds (100, 200, ..., 900)', () => {
    // Arrange
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
      getWrittenNumberOf(number),
    );

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should get correctly the compound hundreds', () => {
    // Arrange
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
    const result = numbers.map((number) => getWrittenNumberOf(number));

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
