import 'reflect-metadata'
import { InversifyExpressServer } from 'inversify-express-utils'

import container from './config/inversify/inversify.config'
import './config/routes'
import { applyMiddlewares } from './middlewares/apply.middlewares'
import errorHandlerMiddleware from './middlewares/error.handler.middleware'

const app = new InversifyExpressServer(container)

app.setConfig(applyMiddlewares).setErrorConfig(errorHandlerMiddleware)


const server = app.build()
const port = 3333

if (require.main === module) {
  server.listen(port, () => {
    console.log(`Server is listen in ${port} 🚀`)
  })
}
export default server