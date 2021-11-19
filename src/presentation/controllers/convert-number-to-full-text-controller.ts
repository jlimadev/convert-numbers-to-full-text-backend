import { ConvertNumberToFullText } from '../../core/domain/protocols';

export class ConvertNumberToFullTextController {
  constructor(private readonly convertor: ConvertNumberToFullText) {}

  invoke(number: number): string {
    return this.convertor.invoke(number);
  }
}
