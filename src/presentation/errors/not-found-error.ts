export class NotFoundError extends Error {
  constructor(number: number) {
    super(`number ${number} not found as full text`);
    this.name = 'NotFoundError';
  }
}
