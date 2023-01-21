const express = require('express');
const app = express();
const cors = require('cors');
const Router = require('./router/books');
const mongoose = require('mongoose');
require('dotenv/config');

//middleware
app.use(cors());
app.use(express.json());
app.use('/books', Router);

//MONGODB Connection
mongoose.set('strictQuery', false);
mongoose.connect((process.env.CONNECTION_STRING), (event) => {
    console.log('DB connected')
}).catch(e => console.log(e));

//App listen
app.listen(6015);