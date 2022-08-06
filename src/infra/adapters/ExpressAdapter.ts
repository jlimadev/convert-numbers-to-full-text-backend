import cors from 'cors';
import express, { Express, json, Request, Response } from 'express';
import Http, { AllowedMethods } from '../http/http';

export default class ExpressAdapter implements Http {
  private readonly app: Express;

  constructor() {
    this.app = express();
    this.app.use(cors());
    this.app.use(json());
  }

  on(method: AllowedMethods, url: string, callback: Function): void {
    this.app[method](url, async (request: Request, response: Response) => {
      const output = callback(request.params, request.body);
      return response.json(output);
    });
  }

  listen(port: number): void {
    this.app.listen(3000, () => console.log(`🚀 app is listening on port ${port}`));
  }
}
