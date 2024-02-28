import { Container } from "inversify";
import { Database } from "../../../db/database";
import { DATABASE_IOC_IDS } from "../../../../shared/constants/database.ioc.identifiers";
import { IDatabase } from "../../../../shared/interfaces/database.interfaces";

export default (container: Container): Container => {
  container.bind<IDatabase>(DATABASE_IOC_IDS.DATABASE).to(Database)

  return container
}