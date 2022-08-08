export class InternalServerError extends Error {
  constructor(stack: string) {
    super(`Internal Server Error`);
    this.name = 'InternalServerError';
    this.stack = stack;
    this.message = stack.split('at')[0].trim();
  }
}
