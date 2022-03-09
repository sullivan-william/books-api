// dependencies
const mongoose = require('mongoose')
const { Schema } = mongoose

// schema
const bookSchema = new Schema({
    title: String,
    description: String,
    year: Number,
    quantity: Number,
    image: String
})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book