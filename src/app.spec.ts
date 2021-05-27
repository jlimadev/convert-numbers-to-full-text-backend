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
});
