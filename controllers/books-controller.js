// dependencies
const express = require('express')
const router = express.Router()
const Book = require('../models/book')
const cors = require('cors')

// routes

// seed
router.get('/seed', cors(), (req, res) => {
    Book.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
      },
      {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
      },
      {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
      },
      {
        "title": "W∀RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
      }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})

// index
router.get('/', cors(), async(req, res) => {
    try{
        const foundBooks = await Book.find()
        res.status(200).send(foundBooks)
    }
    catch(err){
        console.log(err)
        res.status(404).send('error stub')
    }
})

// show
router.get('/:id', cors(), async(req, res) => {
    try{
        const foundBook = await Book.findById(req.params.id)
        res.status(200).send(foundBook)
    }
    catch(err){
        console.log(err)
        res.status(404).send('error stub')
    }
})

// create
router.post('/', cors(), async(req, res) => {
    try{
        const newBook = await Book.create(req.body)
        res.status(200).send('created!')
    }
    catch(err){
        console.log(err)
        res.status(404).send('error stub')
    }
})

// update
router.put('/:id', cors(), async(req, res) => {
    try{
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).send(updatedBook)
    }
    catch(err){
        console.log(err)
        res.status(404).send('error stub')
    }
})

// delete
router.delete('/:id', cors(), async(req, res) => {
    try{
        const book = await Book.findByIdAndDelete(req.params.id)
        res.status(303).send('deleted!')
    }
    catch(err){
        console.log(err)
        res.status(404).send('error stub')
    }
})

// export
module.exports = router