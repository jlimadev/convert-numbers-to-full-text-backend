import { ConvertNumberToFullTextController } from './convert-number-to-full-text-controller';
import { ConvertNumberToFullText } from '../../core/domain/protocols';

describe('ConvertNumberToFullTextController', () => {
  it('should call usecase with correct number', () => {
    const convertor: ConvertNumberToFullText = {
      invoke: jest.fn(),
    };
    const sut = new ConvertNumberToFullTextController(convertor);
    const number = 10;
    sut.invoke(number);
    expect(convertor.invoke).toHaveBeenCalledWith(number);
  });
});
