const express = require('express')
const morgan = require('morgan')
const userRoute = require('./app/routes/user')
require('./app/database/connection')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(morgan("dev"))
app.use('/user', userRoute)

app.listen(process.env.PORT, () => {
    console.log("I'm listening")
})
