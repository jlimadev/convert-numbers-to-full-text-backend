import { ConvertNumberToFullText } from '../../application/ConvertNumberToFullText';
import { Http } from '../../infra/http';
import { ok } from '../http';
import { ErrorHandler, Validator } from '../protocols';

export class ConvertNumberToFullTextController {
  constructor(
    private readonly http: Http,
    private readonly inputValidator: Validator,
    private readonly httpErrorHandler: ErrorHandler,
    private readonly convertNumberToFullText: ConvertNumberToFullText,
  ) {
    this.http.on('get', '/numbers/:number', async (params: any, body: any) => {
      try {
        this.inputValidator.validate(params.number);
        const number = Number(params.number);
        const output = this.convertNumberToFullText.invoke(number);
        return ok({ number: output });
      } catch (error) {
        return this.httpErrorHandler.handle(error);
      }
    });
  }
}
