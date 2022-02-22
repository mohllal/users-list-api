import path from 'path'

export const environment = process.env.NODE_ENV || 'development'

/* istanbul ignore next */
if (environment !== 'production' && environment !== 'compose') {
  const dotenv = require('dotenv-safe')
  dotenv.config({
    path: path.join(__dirname, `../.env.${environment}`),
    example: path.join(__dirname, '../.env.example')
  })
}

export const root = path.join(__dirname, '..')
export const port = process.env.PORT || 9000
export const ip = process.env.IP || '0.0.0.0'
export const apiRoot = process.env.API_ROOT || ''
export const postgresUri = process.env.POSTGRES_URI || 'postgres://127.0.0.1:5432/users-db'
export const redisUri = process.env.REDIS_URI || 'redis://127.0.0.1:6379'
