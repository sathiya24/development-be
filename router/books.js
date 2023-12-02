const express = require('express');
const router = express.Router();
const  Book  = require('../models/Book');

router.get('/',(req,res) => {
  console.log("My first log are printed here.")
  Book.find()
    .then(data => {
    res.json({data});
    })
    .catch(e => {
        res.json({message:e});
    })
})

router.get('/sathyaendpoint',(req,res) => {
  console.log("My first log are printed here.")
   res.send({name : "I am sathya"})
})

router.post(`/`,(req,res) => {
   console.log("My Post logs are printed here", req.body)
   const book = new Book({
      title: req.body.title,
      description: req.body.description
    })
    book.save()
      .then(data => {
        res.json(data);
    })
    .catch(e => {
        res.json({message: e});
    })
})

router.delete('/:id',(req,res) => {
    Book.deleteOne({_id: req.params.id})
    .then(data => {
        res.json(data);
    })
    .catch(e => {
        res.json({message: e});
    })
});

router.patch('/:id', (req,res) => {
    Book.updateOne({_id: req.params.id},
    {
     $set: {title: req.body.title}
    })
    .then(data => {
        res.json(data);
    })
    .catch(e => {
        res.json({message: e});
    })
})

module.exports =router;
