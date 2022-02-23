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
export const databaseUri = process.env.DATABASE_URL || 'postgres://127.0.0.1:5432/users-db'
export const databaseDialect = process.env.DATABASE_DIALECT || 'postgres'
export const databaseSSLMode = process.env.DATABASE_SSL_MODE === 'true'
export const cacheUri = process.env.REDISTOGO_URL || 'redis://127.0.0.1:6379'
