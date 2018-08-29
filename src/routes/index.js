const express = require('express')
const router = express.Router()
const Album = require('../models/user')

router.get('/', (req, res, next) => {
    res.json({ home :'Trang chu' })
})

module.exports = router
