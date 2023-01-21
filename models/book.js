const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    title:{
      type: String,
      required: true
    },
    description:{
      type: String,
    }
});

exports.Book = mongoose.model('book', BookSchema);