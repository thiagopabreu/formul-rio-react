const express = require('express')
const morgan = require('morgan')
const userRoute = require('./app/routes/user')
const cors = require('cors')
require('./app/database/connection')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

app.use('/user', userRoute)

app.listen(process.env.PORT, () => {
    console.log("I'm listening on port " + process.env.PORT)
})
