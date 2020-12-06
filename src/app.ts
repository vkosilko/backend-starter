import 'module-alias/register'
import * as dotenv from 'dotenv'
dotenv.config({ path: `${__dirname}/../.env` })
import 'reflect-metadata'
import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import { bootstrapControllers } from 'koa-ts-controllers'
import * as cors from '@koa/cors'
import { runMongo } from '@/models/index'
import * as Router from 'koa-router'

const logger = require('koa-logger')              //not working with import
const authRouter = require('./routes/authRoutes') //need correct syntax for 12-13 lines


const APP_PORT = process.env.APP_PORT || 1337

if (process.env.TESTING !== 'true') {
  runMongo()
}

const app = new Koa()

export async function main() {
  const router = new Router()

  await bootstrapControllers(app, {
    router,
    basePath: '/',
    controllers: [__dirname + '/controllers/*'],
    disableVersioning: true,
  })

  // Run app
  app.use(logger())
  app.use(cors({ origin: '*' }))
  app.use(bodyParser())
  app.use(router.routes())
  app.use(router.allowedMethods())
  app.listen(APP_PORT)
  console.log(`Koa application is up and running on port ${APP_PORT}`)
}
main()

export default app
