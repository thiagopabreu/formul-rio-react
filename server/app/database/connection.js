const Sequelize = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    dialect: 'mysql',
    host: 'localhost',
    port: process.env.DATABASE_PORT
})

const checkConnection = async () => {
    try {
        await sequelize.authenticate()
        console.log('Succesful Connection with Mysql Database')
    } catch (error) {
        console.error(error)
    }
}

checkConnection()

module.exports = sequelize