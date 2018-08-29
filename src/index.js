const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

require('./database')

const app = express()

const indexRouter = require(path.resolve(__dirname, './routes/index'))

// Set view engine
app.set('views', path.resolve(__dirname, './views'))
app.set('view engine', 'pug')

//
app.use(express.static(path.resolve(__dirname, './public')))

app.use(bodyParser.json())

// Init router
app.use('/', indexRouter)

module.exports = app
