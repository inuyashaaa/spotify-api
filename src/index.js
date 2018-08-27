'use strict'

const path = require('path')
const express = require('express')

const app = express()

const indexRouter = require(path.resolve(__dirname, './routes/index'))

//Init router
app.use('/', indexRouter)

module.exports = app
