import { inject, injectable } from "inversify";
import { USERS_IOC_IDS } from "../shared/constants/users.ioc.identifiers";
import { IUser, IUsersRepository, IUsersService } from "./users.interfaces";

@injectable()
export class UsersService implements IUsersService {
  constructor(@inject(USERS_IOC_IDS.REPOSITORY) private usersRepository: IUsersRepository){}

  async get(): Promise<IUser[]> {
    return this.usersRepository.get()
  }
}