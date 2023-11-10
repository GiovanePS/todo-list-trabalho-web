import { DataTypes } from 'sequelize'
import { sequelize } from '../database/index'
import { Note } from './Note'

export const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  nome: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  senha_hash: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  tableName: 'users',
})

User.belongsToMany(Note, {through: 'user_note', foreignKey: 'note_id'})