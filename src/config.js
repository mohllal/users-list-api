import path from 'path'
import merge from 'lodash/merge'

/* istanbul ignore next */
if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv-safe')
  dotenv.config({
    path: path.join(__dirname, '../.env'),
    example: path.join(__dirname, '../.env.example')
  })
}

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    root: path.join(__dirname, '..'),
    port: process.env.PORT || 9000,
    ip: process.env.IP || '0.0.0.0',
    apiRoot: process.env.API_ROOT || ''
  },
  test: {
    sql: {
      uri: process.env.SQL_URI || 'sqlite::memory:'
    }
  },
  development: {
    sql: {
      uri: process.env.SQL_URI || 'postgres://127.0.0.1:5432/users-db'
    }
  },
  production: {
    ip: process.env.IP || undefined,
    port: process.env.PORT || 8080,
    sql: {
      uri: process.env.SQL_URI || 'postgres://127.0.0.1:5432/users-db'
    }
  }
}

module.exports = merge(config.all, config[config.all.env])
export default module.exports
