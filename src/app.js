import http from 'http'
import { environment, port, ip, apiRoot } from './config'
import sequelize from './services/sequelize'
import ioredis from './services/ioredis'
import express from './services/express'
import api from './api'

const app = express(apiRoot, api)
const server = http.createServer(app)

setImmediate(async () => {
  await ioredis.connect()
  await sequelize.sync()

  server.listen(port, ip, () => {
    console.log('Express server listening on http://%s:%d, in %s mode', ip, port, environment)
  })
})

export default app
