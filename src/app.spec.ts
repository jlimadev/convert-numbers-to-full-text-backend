import { getCardinalNumberOf } from './app';

describe('Cardinal numbers test suit', () => {
  it('should get one of the units', () => {
    // Arrange
    const expectedResult = 'two';

    // Act
    const result = getCardinalNumberOf(2);

    // Assert
    expect(result).toBe(expectedResult);
  });
});
