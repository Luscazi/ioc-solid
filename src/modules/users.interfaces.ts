import type { NextFunction, Request, Response } from "express"

export interface IUser {
  id: number
  name: string
  email: string
}

export interface IUsersController {
  get(req: Request, res: Response, next: NextFunction): Promise<void>
}

export interface IUsersRepository {
  get(): Promise<IUser[]>
}
export interface IUsersService {
  get(): Promise<IUser[]>
}

