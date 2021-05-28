import { getWrittenNumberOf } from './app';

describe('Cardinal numbers test suit', () => {
  it('should get one of the units', () => {
    // Arrange
    const expectedResult = 'two';

    // Act
    const result = getWrittenNumberOf(2);

    // Assert
    expect(result).toBe(expectedResult);
  });

  it('should get from 0 to 9', () => {
    // Arrange
    const expectedResult = 10;
    const range = Array.from(Array(10).keys());

    // Act
    const result: Array<string> = [];
    range.forEach((i) => result.push(getWrittenNumberOf(i)));

    // Assert
    expect(result.length).toBe(expectedResult);
    expect(result[0]).toBe('zero');
    expect(result[8]).toBe('eight');
  });

  it('should get from 10 to 19', () => {
    // Arrange
    const expectedResult = 10;
    const range = Array.from(Array(20).keys()).filter((n) => n >= 10);

    // Act
    const result: Array<string> = [];
    range.forEach((i) => result.push(getWrittenNumberOf(i)));

    // Assert
    expect(result.length).toBe(expectedResult);
    expect(result[0]).toBe('ten');
    expect(result[8]).toBe('eighteen');
    expect(result[9]).toBe('nineteen');
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
    const result: Array<string> = [
      getWrittenNumberOf(100),
      getWrittenNumberOf(200),
      getWrittenNumberOf(300),
      getWrittenNumberOf(400),
      getWrittenNumberOf(500),
      getWrittenNumberOf(600),
      getWrittenNumberOf(700),
      getWrittenNumberOf(800),
      getWrittenNumberOf(900),
    ];

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
