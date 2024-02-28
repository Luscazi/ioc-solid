import { inject, injectable } from "inversify";
import { DATABASE_IOC_IDS } from "../shared/constants/database.ioc.identifiers";
import { IDatabase } from "../shared/interfaces/database.interfaces";
import { IUser, IUsersRepository } from "./users.interfaces";

@injectable()
export class UsersRepository implements IUsersRepository {
  constructor(@inject(DATABASE_IOC_IDS.DATABASE) private database: IDatabase){}

  get(): Promise<IUser[]> {
    return new Promise((resolve, reject) => {
      this.database
      .all<IUser[]>('SELECT * FROM users')
      .then(resolve)
      .catch(() => reject({ message: 'Error to get users' }))
    })
  }
}