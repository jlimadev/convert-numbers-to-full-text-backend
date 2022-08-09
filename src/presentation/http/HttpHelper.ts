import { HttpResponse } from '.';
import { InternalServerError } from '../errors';
type Result = { [any: string]: unknown };

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error.message,
});

export const internalServerError = (error: Error): HttpResponse => {
  const { name, message } = new InternalServerError(error.stack);
  return {
    statusCode: 500,
    body: { name, message },
  };
};

export const ok = (result: Result): HttpResponse => ({
  statusCode: 200,
  body: result,
});
