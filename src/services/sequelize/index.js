import Sequelize from 'sequelize'
import { postgresUri } from '../../config'

export default new Sequelize(postgresUri, { logging: false })
