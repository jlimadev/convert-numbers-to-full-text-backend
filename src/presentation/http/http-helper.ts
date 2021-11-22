import { HttpResponse } from '.';
import { NotFoundError, InternalServerError } from '../errors';
type Result = { [any: string]: unknown };

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});

export const notFound = (number: number): HttpResponse => ({
  statusCode: 404,
  body: new NotFoundError(number),
});

export const internalServerError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new InternalServerError(error.stack),
});

export const ok = (result: Result): HttpResponse => ({
  statusCode: 200,
  body: result,
});
