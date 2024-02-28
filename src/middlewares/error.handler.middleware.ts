import type { NextFunction, Request, Response } from 'express';
import { Application } from "express";
import { HTTP_CODES } from '../shared/constants/http.codes';
import { get } from 'lodash';

export default (app: Application): Application => app.use(errorHandler)

const errorHandler = (error: Error & { statusCode: number }, req: Request, res: Response, next: NextFunction) => {
  console.log(error)
  res.status(get(error, 'statusCode', HTTP_CODES.INTERNAL_SERVER_ERROR)).json(error)
}