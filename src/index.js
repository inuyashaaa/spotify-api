'use strict'

const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const db = require('./database')

const app = express()

const indexRouter = require(path.resolve(__dirname, './routes/index'))

app.use(bodyParser.json())

//Init router
app.use('/', indexRouter)

module.exports = app
