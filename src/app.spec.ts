import { getWrittenNumberOf } from './app';

describe('Cardinal numbers test suit', () => {
  it('should get all units from 0 to 9', () => {
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

  it('should get all from 10 to 19', () => {
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

  it('should get all round hundreds (100, 200, ...)', () => {
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
});
