import { Container } from "inversify";
import { UsersService } from "../../../../../modules/users.service";
import { USERS_IOC_IDS } from "../../../../../shared/constants/users.ioc.identifiers";
import { IUsersService } from "../../../../../modules/users.interfaces";

export default (container: Container): Container => {
  container.bind<IUsersService>(USERS_IOC_IDS.SERVICE).to(UsersService)

  return container
}