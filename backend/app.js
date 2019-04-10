const config = require('./utils/config')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const habitRouter = require('./routers/habitRouter')

app.use(cors())
app.use(bodyParser.json())

app.use('/api/habits', habitRouter)

module.exports = app

