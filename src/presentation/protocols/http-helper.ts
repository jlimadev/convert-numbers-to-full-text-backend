import { HttpResponse } from '.';

export const notFound = (error: string): HttpResponse => ({
  statusCode: 404,
  body: error,
});

export const internalServerError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: error.stack,
});

export const ok = (result: string): HttpResponse => ({
  statusCode: 200,
  body: result,
});
