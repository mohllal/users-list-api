import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../../services/sequelize'

class User extends Model {}

User.init({
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  username: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  company: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'users',
  modelName: 'users',
  timestamps: true,
  underscored: true,
  indexes: [{
    name: 'user_email',
    unique: true,
    fields: ['email']
  }, {
    name: 'user_username',
    unique: true,
    fields: ['username']
  }]
})

User.prototype.view = function (full) {
  return full ? {
    id: this.id,
    email: this.email,
    username: this.username,
    phone: this.phone,
    company: this.company,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt
  } : {
    id: this.id,
    email: this.email,
    username: this.username,
    phone: this.phone
  }
}

export default User
