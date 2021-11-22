import app from './app';
import request from 'supertest';

describe('middlewares', () => {
  const tempUrl = '/temp';
  app.get(tempUrl, (req, res) => {
    res.send(req.body);
  });
  it('should parse body as JSON on Request and Response', async () => {
    await request(app).get(tempUrl).send({ name: 'test' }).expect({ name: 'test' });
  });
  it('Should enable cors in order to allow the api to be called in different domains', async () => {
    await request(app).get(tempUrl).expect('access-control-allow-origin', '*');
  });
});
