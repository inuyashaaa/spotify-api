'use strict'

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
module.exports = Object.freeze({
  db: {
    host: process.env.DB_HOST || 'mongodb://spotify:spotify123@ds133262.mlab.com:33262/spotify-uet',
    database: process.env.DB_NAME || 'spotify-uet',
    user: process.env.DB_USERNAME || 'spotify',
    password: process.env.DB_PASSWORD || 'spotify123'
  },
  app: {
    port: parseInt(process.env.PORT) || 3000
  }
})
