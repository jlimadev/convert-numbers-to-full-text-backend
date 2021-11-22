import { ConvertNumberToFullText } from '../../core/domain/protocols';
import { HttpResponse, notFound, ok, internalServerError, HttpRequest, badRequest } from '../http';
import { Controller, Validator } from '../protocols';

export class ConvertNumberToFullTextController implements Controller {
  constructor(
    private readonly numberValidator: Validator,
    private readonly convertor: ConvertNumberToFullText,
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.numberValidator.validate(httpRequest.params);
      if (error) return badRequest(error);
      const number = Number(httpRequest.params.number);
      const fullText = this.convertor.invoke(number);
      if (!fullText) return notFound(number);
      return ok({ number: fullText });
    } catch (error) {
      return internalServerError(error);
    }
  }
}
