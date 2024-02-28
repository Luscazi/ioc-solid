import { Container } from "inversify";
import { UsersRepository } from "../../../../../modules/users.repository";
import { USERS_IOC_IDS } from "../../../../../shared/constants/users.ioc.identifiers";
import { IUsersRepository } from "../../../../../modules/users.interfaces";

export default (container: Container): Container => {
  container.bind<IUsersRepository>(USERS_IOC_IDS.REPOSITORY).to(UsersRepository)

  return container
}