const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.send('Trang chu')
})

module.exports = router
