const express = require('express')
const cors = require('cors')
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
const mongoose = require('mongoose')

app.use(express.json())
app.use(cors())

// routes
app.get('/', (req, res) => {
    res.send('Hello World')
})

// books controller
const booksController = require('./controllers/books-controller')
app.use('/books', booksController)

// database
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('db connected'))
  .catch(e => console.log(e))
  
app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
})