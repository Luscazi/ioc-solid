import { Application } from "express";
import { responseHandlerMiddleware } from "./response.handler.middleware";

export const applyMiddlewares = (app: Application) => {
  app.use(responseHandlerMiddleware)
  
  return app
}
