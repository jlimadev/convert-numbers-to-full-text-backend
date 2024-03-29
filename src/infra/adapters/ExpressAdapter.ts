import cors from 'cors';
import express, { Express, json, Request, Response } from 'express';
import { Server } from 'http';
import { AllowedMethods, Http } from '../http';

export default class ExpressAdapter implements Http {
  readonly app: Express;
  private server: Server;

  constructor() {
    this.app = express();
    this.app.use(cors());
    this.app.use(json());
  }

  on(method: AllowedMethods, url: string, callback: Function): void {
    this.app[method](url, async (request: Request, response: Response) => {
      const output = await callback(request.params, request.body);
      response.status(output.statusCode).json(output);
    });
  }

  /* istanbul ignore next */
  listen(port: number): void {
    this.server = this.app.listen(port, () => console.log(`🚀 app is listening on port ${port}`));
  }

  close() {
    this.server.close();
  }
}
