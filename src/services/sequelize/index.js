import Sequelize from 'sequelize'
import { databaseUri } from '../../config'

export default new Sequelize(databaseUri, { logging: false })
