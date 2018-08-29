const path = require('path')
const express = require('express')
const nunjucks = require('nunjucks')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

require('./database')

// Init routes
const indexRouter = require(path.resolve(__dirname, './routes/index'))
const authRouter = require(path.resolve(__dirname, './routes/auth/login'))

const app = express()

// Set view engine
const viewPath = path.resolve(__dirname, './views')
const env = new nunjucks.Environment(new nunjucks.FileSystemLoader(viewPath))
env.express(app)
env.autoescape = true
app.set('view engine', 'html')

app
  .use(cookieParser())
  .use(express.static(path.resolve(__dirname, './public')))
  .use(bodyParser.json())

// Init router
app.use(indexRouter)
app.use(authRouter)

module.exports = app
