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
});
