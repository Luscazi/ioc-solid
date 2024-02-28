import { Container } from "inversify";
import { flow } from "lodash";
import usersRepositoriesBindins from "./users.repositories.bindins";
import usersServicesBindins from "./users.services.bindins";

export default (container: Container): Container => 
  flow(usersRepositoriesBindins, usersServicesBindins)(container)