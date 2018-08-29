const mongoose = require('mongoose')
const Schema = mongoose.Schema
const db = require('../database')

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

module.exports = {
    Album
}
