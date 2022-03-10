// dependencies
const express = require('express')
const router = express.Router()
const Book = require('../models/book')

// routes

// index
router.get('/', async(req, res) => {
    try{
        const foundBooks = await Book.find()
        res.status(200).send('books stub')
    }
    catch(err){
        console.log(err)
        res.status(404).send('error stub')
    }
})

// show
router.get('/:id', async(req, res) => {
    try{
        const foundBook = await Book.findById(req.params.id)
        res.status(200).send('show stub')
    }
    catch(err){
        console.log(err)
        res.status(404).send('error stub')
    }
})

// new
router.get('/new', async(req, res) => {
    try{
        res.status(200).send('new book stub')
    }
    catch(err){
        console.log(err)
        res.status(404).send('error stub')
    }
})

// post
router.post('/', async(req, res) => {
    try{
        const newBook = await Book.create(req.body)
        res.status(200).send('created!')
    }
    catch(err){
        console.log(err)
        res.status(404).send('error stub')
    }
})

// edit
router.get('/:id/edit', async(req, res) => {
    try{
        const foundBook = await Book.findById(req.params.id)
        res.status(200).send('edit stub')
    }
    catch(err){
        console.log(err)
        res.status(404).send('error stub')
    }
})

// update
router.put('/:id', async(req, res) => {
    try{
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).send('updated!')
    }
    catch(err){
        console.log(err)
        res.status(404).send('error stub')
    }
})

// delete
router.delete('/:id', async(req, res) => {
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