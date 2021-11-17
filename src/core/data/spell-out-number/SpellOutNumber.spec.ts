import { SpellOutNumber } from './SpellOutNumber';
import { NumberFactory } from '../number-factory/NumberFactory';

const makeSut = () => {
  const writtenNumberFactory: NumberFactory = {
    getUnitOf: jest.fn(),
    getDozenOf: jest.fn(),
    getHundredOf: jest.fn(),
    getThousandOf: jest.fn(),
  };

  const sut = new SpellOutNumber(writtenNumberFactory);

  return { sut, writtenNumberFactory };
};

describe('Spell out numbers test suit', () => {
  it('should invoke correctly when calling with unit number (1 to 9)', () => {
    // Arrange
    const { sut, writtenNumberFactory } = makeSut();
    const n = 9;

    // Act
    sut.invokeWith(n);

    // Assert
    expect(writtenNumberFactory.getUnitOf).toHaveBeenCalledWith(n);
    expect(writtenNumberFactory.getDozenOf).not.toHaveBeenCalled();
    expect(writtenNumberFactory.getHundredOf).not.toHaveBeenCalled();
    expect(writtenNumberFactory.getThousandOf).not.toHaveBeenCalled();
  });

  it('should invoke correctly when calling with dozen number (10 to 99)', () => {
    // Arrange
    const { sut, writtenNumberFactory } = makeSut();
    const n = 98;

    // Act
    sut.invokeWith(n);

    // Assert
    expect(writtenNumberFactory.getUnitOf).not.toHaveBeenCalled();
    expect(writtenNumberFactory.getDozenOf).toHaveBeenCalledWith(n);
    expect(writtenNumberFactory.getHundredOf).not.toHaveBeenCalled();
    expect(writtenNumberFactory.getThousandOf).not.toHaveBeenCalled();
  });

  it('should invoke correctly when calling with hundred number (100 to 999)', () => {
    // Arrange
    const { sut, writtenNumberFactory } = makeSut();
    const n = 654;

    // Act
    sut.invokeWith(n);

    // Assert
    expect(writtenNumberFactory.getUnitOf).not.toHaveBeenCalled();
    expect(writtenNumberFactory.getDozenOf).not.toHaveBeenCalled();
    expect(writtenNumberFactory.getHundredOf).toHaveBeenCalledWith(n);
    expect(writtenNumberFactory.getThousandOf).not.toHaveBeenCalled();
  });

  it('should invoke correctly when calling with hundred number (1000 to 9999)', () => {
    // Arrange
    const { sut, writtenNumberFactory } = makeSut();
    const n = 6594;

    // Act
    sut.invokeWith(n);

    // Assert
    expect(writtenNumberFactory.getUnitOf).not.toHaveBeenCalled();
    expect(writtenNumberFactory.getDozenOf).not.toHaveBeenCalled();
    expect(writtenNumberFactory.getHundredOf).not.toHaveBeenCalled();
    expect(writtenNumberFactory.getThousandOf).toHaveBeenCalledWith(n);
  });

  it('should throw an error if pass not tracked numbers', () => {
    const { sut, writtenNumberFactory } = makeSut();

    const act = () => {
      sut.invokeWith(999999);
    };

    expect(act).toThrowError('Number not tracked');
    expect(writtenNumberFactory.getUnitOf).not.toHaveBeenCalled();
    expect(writtenNumberFactory.getDozenOf).not.toHaveBeenCalled();
    expect(writtenNumberFactory.getHundredOf).not.toHaveBeenCalled();
  });
});
