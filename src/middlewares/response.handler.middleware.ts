import type { NextFunction, Request, Response } from 'express'
import { ICustomResponse } from '../shared/interfaces/custom.response.interface'
export function responseHandlerMiddleware(req: Request, res: Response, next: NextFunction): void {
  const originalJson = res.json

  res.json = function (data: any): Response<any, Record<string, any>> {
    const customResponseData = {
      httpCode: res.statusCode,
      routePath: req.originalUrl,
      timestamp: new Date().toISOString(),
      data
    } as ICustomResponse

    return originalJson.bind(this)(customResponseData)
  }

  next()
}