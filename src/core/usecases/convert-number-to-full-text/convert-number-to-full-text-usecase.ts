import { ConvertNumberToFullText } from '../../domain/protocols';
import { LoadUnit, LoadDozen, LoadHundred, LoadThousand } from '../protocols';

export class ConvertNumberToFullTextUsecase implements ConvertNumberToFullText {
  constructor(
    private readonly loadUnit: LoadUnit,
    private readonly loadDozen: LoadDozen,
    private readonly loadHundred: LoadHundred,
    private readonly loadThousand: LoadThousand,
  ) {}

  invoke(number: number): string {
    const length = number.toString().length;
    switch (length) {
      case 1:
        return this.loadUnit.invoke(number);
      case 2:
        return this.loadDozen.invoke(number);
      case 3:
        return this.loadHundred.invoke(number);
      case 4:
        return this.loadThousand.invoke(number);
      default:
        throw new Error('Number not tracked');
    }
  }
}
