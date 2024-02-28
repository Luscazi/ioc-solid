import type { NextFunction, Request, Response } from 'express';
import { inject } from 'inversify';
import { controller, httpGet } from "inversify-express-utils";
import { USERS_IOC_IDS } from '../shared/constants/users.ioc.identifiers';
import { IUsersController, IUsersService } from './users.interfaces';

@controller('/users')
export class UsersController implements IUsersController {
  constructor(@inject(USERS_IOC_IDS.SERVICE) private usersService: IUsersService){}

  @httpGet('/')
  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this.usersService.get()
      res.json({ users })
    } catch (error) {
      next(error)
    }
  }
}
