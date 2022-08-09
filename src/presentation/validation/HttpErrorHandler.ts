import { badRequest, internalServerError } from '../http';
import { ErrorHandler } from '../protocols/';

export class HttpErrorHandler implements ErrorHandler {
  handle(error: Error) {
    const badRequestErrors = ['InvalidNumberError', 'InvalidParamError'];
    if (badRequestErrors.includes(error.name)) return badRequest(error);
    return internalServerError(error);
  }
}
