import request from 'supertest';
import { ConvertNumberToFullText } from '../../../src/application/ConvertNumberToFullText';
import ExpressAdapter from '../../../src/infra/adapters/ExpressAdapter';
import { ConvertNumberToFullTextController } from '../../../src/presentation/controllers/ConvertNumberToFullTextController';
import { Validator } from '../../../src/presentation/protocols';
import { NumberInputValidator } from '../../../src/presentation/validation/NumberInputValidator';

const prepareTestEnvironment = (shouldFail = false) => {
  const mockValidator = {
    validate: jest.fn().mockImplementation(() => {
      throw new Error('any error');
    }),
  };
  const http = new ExpressAdapter();
  const numberValidator: Validator = shouldFail ? mockValidator : new NumberInputValidator();
  const convertNumberToFullText = new ConvertNumberToFullText();
  new ConvertNumberToFullTextController(http, numberValidator, convertNumberToFullText);
  return http.app;
};

describe('GET', () => {
  it('should return an internal server error if anything breaks (statusCode 500)', async () => {
    const app = prepareTestEnvironment(true);
    await request(app)
      .get('/numbers/10')
      .expect(500)
      .expect({ error: { name: 'InternalServerError' } });
  });
  it('should return an error when input is not allowed (statusCode 400)', async () => {
    const app = prepareTestEnvironment();
    const number = Number.MAX_SAFE_INTEGER;
    await request(app)
      .get(`/numbers/${number}`)
      .expect(400)
      .expect({ error: `Invalid number. The number must be between 0 and 9999` });
  });
  it('should return an error when input is a text (statusCode 400)', async () => {
    const app = prepareTestEnvironment();
    const text = 'anyText';
    await request(app)
      .get(`/numbers/${text}`)
      .expect(400)
      .expect({ error: `Invalid param: number. Invalid number: ${text}` });
  });
  it('should return a number on success (statusCode 200)', async () => {
    const app = prepareTestEnvironment();
    await request(app)
      .get('/numbers/10')
      .expect(200)
      .expect({ statusCode: 200, body: { number: 'ten' } });
  });
});
