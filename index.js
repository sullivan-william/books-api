const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
const mongoose = require('mongoose')

app.use(express.json())

// routes
app.get('/', (req, res) => {
    res.send('Hello World')
})

// database
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('db connected'))
  .catch(e => console.log(e))
  
app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
})