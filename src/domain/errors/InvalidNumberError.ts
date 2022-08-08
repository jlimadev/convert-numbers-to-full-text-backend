export class InvalidNumberError extends Error {
  constructor(readonly message: string) {
    super(`Invalid number. ${message}`);
    Object.setPrototypeOf(this, InvalidNumberError.prototype);
    this.name = 'InvalidNumberError';
    this.message = `Invalid number. ${message}`;
  }
}
