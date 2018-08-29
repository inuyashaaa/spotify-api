'use strict'

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
module.exports = Object.freeze({
  db: {
    host: process.env.DB_HOST || 'mongodb://0.0.0.0:27017/spotify-uet',
    database: process.env.DB_NAME || 'spotify-uet',
    user: process.env.DB_USERNAME || 'spotify',
    password: process.env.DB_PASSWORD || 'spotify123'
  },
  app: {
    port: parseInt(process.env.PORT) || 3000
  },
  auth: {
    clientId: process.env.CLIENT_ID || 'c82264e0d15d40bda9e1cf009ed94bac',
    clientSecret: process.env.CLIENT_SECRET || '5719da57db234722b2b744e03b96366b',
    redirectUrl: process.env.REDIRECT_URL || 'http://localhost:3000/callback'
  }
})
