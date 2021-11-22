import request from 'supertest';
import app from '../config/app';
describe('GET', () => {
  it('should return 400 (badRequest) when sent number is not valid', async () => {
    const number = Number.MAX_SAFE_INTEGER;
    await request(app)
      .get(`/api/full-text/${number}`)
      .expect(400)
      .expect({ error: `Invalid param: number. The number must be between 0 and 9999` });
  });
  it('should return 400 (badRequest) when sent number is not text', async () => {
    const text = 'anyText';
    await request(app)
      .get(`/api/full-text/${text}`)
      .expect(400)
      .expect({ error: `Invalid param: number. invalid number: ${text}` });
  });
  it('should return 200 (ok) when sent number is valid', async () => {
    await request(app).get('/api/full-text/10').expect(200).expect({ number: 'ten' });
  });
});
