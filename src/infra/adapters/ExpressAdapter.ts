import cors from 'cors';
import express, { Express, json, Request, Response } from 'express';
import { AllowedMethods, Http } from '../http';

export default class ExpressAdapter implements Http {
  readonly app: Express;

  constructor() {
    this.app = express();
    this.app.use(cors());
    this.app.use(json());
  }

  on(method: AllowedMethods, url: string, callback: Function): void {
    this.app[method](url, async (request: Request, response: Response) => {
      const output = await callback(request.params, request.body);
      if (output.statusCode >= 200 && output.statusCode <= 299) {
        response.status(output.statusCode).json(output);
      } else {
        response.status(output.statusCode).json({ error: output.body });
      }
    });
  }

  listen(port: number): void {
    this.app.listen(3000, () => console.log(`🚀 app is listening on port ${port}`));
  }
}
