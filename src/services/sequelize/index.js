import Sequelize from 'sequelize'
import { sql } from '../../config'

const sequelize = new Sequelize(sql.uri, { logging: false })

export { sequelize, Sequelize }
