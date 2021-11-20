import { HttpResponse } from '.';
import { InternalServerError } from '../errors';

export const notFound = (error: string): HttpResponse => ({
  statusCode: 404,
  body: error,
});

export const internalServerError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new InternalServerError(error.stack),
});

export const ok = (result: string): HttpResponse => ({
  statusCode: 200,
  body: result,
});
