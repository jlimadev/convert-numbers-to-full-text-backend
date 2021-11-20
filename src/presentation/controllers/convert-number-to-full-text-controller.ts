import { ConvertNumberToFullText } from '../../core/domain/protocols';
import { HttpResponse, notFound, ok, internalServerError } from '../protocols';

export class ConvertNumberToFullTextController {
  constructor(private readonly convertor: ConvertNumberToFullText) {}

  handle(number: number): HttpResponse {
    try {
      const fullText = this.convertor.invoke(number);
      if (!fullText) {
        return notFound(`Could not find ${number} as full text`);
      }
      return ok(fullText);
    } catch (error) {
      return internalServerError(error);
    }
  }
}
