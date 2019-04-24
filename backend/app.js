const config = require('./utils/config')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const habitRouter = require('./routers/habitRouter')
const dateRouter = require('./routers/dateRouter')
const authRouter = require('./routers/authRouter')
const mongoose = require('mongoose')

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true })

app.use(cors())
app.use(bodyParser.json())

app.use('/api/habits', habitRouter)
app.use('/api/dates', dateRouter)
app.use('/api/auth', authRouter)

module.exports = app

