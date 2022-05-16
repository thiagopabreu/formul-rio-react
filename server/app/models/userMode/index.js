const {Sequelize, DataTypes } = require('sequelize')
const database = require('../../database/connection')

const User = database.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }, 
    isWorking: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})

User.sync()

module.exports = User