'use strict'

const app = require('./src')

const { app: { port } } = require('./src/config')

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})
