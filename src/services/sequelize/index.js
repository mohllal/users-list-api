import Sequelize from 'sequelize'
import { databaseUri, databaseDialect, databaseSSLMode } from '../../config'

export default new Sequelize(databaseUri, {
  logging: false,
  dialect: databaseDialect,
  ...(databaseSSLMode ? {
    dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }
  } : {})
})
