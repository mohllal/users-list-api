import express from 'express'
import cors from 'cors'
import compression from 'compression'
import morgan from 'morgan'
import cacheController from 'express-cache-controller'
import bodyParser from 'body-parser'
import { errorHandler as queryErrorHandler } from 'querymen'
import { errorHandler as bodyErrorHandler } from 'bodymen'
import { cache } from '../../middlewares'
import { environment } from '../../config'

export default (apiRoot, routes) => {
  const app = express()

  /* istanbul ignore next */
  if (environment === 'production' || environment === 'development') {
    app.use(cors())
    app.use(compression())
    app.use(morgan('dev'))
  }

  app.use(cacheController({ public: true, maxAge: 300 }))
  app.use(cache(300))
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(apiRoot, routes)
  app.use(queryErrorHandler())
  app.use(bodyErrorHandler())

  return app
}
