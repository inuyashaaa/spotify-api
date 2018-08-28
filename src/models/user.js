const mongoose = require('mongoose')
const Schema = mongoose.Schema
const db = require('../database')
const autoIncrement = require('mongoose-auto-increment')

var albumSchema = new Schema({
    albumID: {
        type: Number, 
        required: true, 
        unique: true
    },
    name: {
        type: String, 
        required: true, 
        unique: true
    }
})

const Album = mongoose.model('Album', albumSchema);
autoIncrement.initialize(mongoose.connection);
albumSchema.plugin(autoIncrement.plugin, { model: 'Album', field: 'albumID' })

module.exports = {
    Album
}
