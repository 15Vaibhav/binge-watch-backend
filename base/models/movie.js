var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const MovieSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    imgUrl: {
        type: String,
    },

    genre: {
        type: String
    },

    watched: {
        type: Boolean
    }
})

module.exports = mongoose.model('movie',MovieSchema)

