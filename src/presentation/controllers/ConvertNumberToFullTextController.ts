import { ConvertNumberToFullText } from '../../application/ConvertNumberToFullText';
import { Http } from '../../infra/http';
import { badRequest, internalServerError, ok } from '../http';
import { Validator } from '../protocols';

export class ConvertNumberToFullTextController {
  constructor(
    private readonly http: Http,
    private readonly numberValidator: Validator,
    private readonly convertNumberToFullText: ConvertNumberToFullText,
  ) {
    this.http.on('get', '/numbers/:number', async (params: any, body: any) => {
      try {
        // refactor validator to throw instead of return
        const error = this.numberValidator.validate(params.number);
        if (error) return badRequest(error);
        const number = Number(params.number);
        const output = this.convertNumberToFullText.invoke(number);
        return ok({ number: output });
      } catch (error) {
        if (error.name === 'InvalidNumberError') return badRequest(error);
        return internalServerError(error);
      }
    });
  }
}
