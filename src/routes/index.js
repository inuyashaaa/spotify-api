const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.render('layout/layout', { title: 'Home' })
})

module.exports = router
