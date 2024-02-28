import type { Request, Response } from 'express';
import { all, controller } from "inversify-express-utils";
import { HTTP_CODES } from './../shared/constants/http.codes';

@controller('/')
export class NoFoundController {
  @all('*')
  notFount(req: Request, res: Response): void {
    res.status(HTTP_CODES.NOT_FOUND).json({ message: 'Route not found' })
  }
}