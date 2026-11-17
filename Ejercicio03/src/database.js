const mongoose = require('mongoose');
require('dotenv').config();

const URL = process.env.URL;

mongoose.connect(URL)
.then(() => {
    console.log('Connected to MongoDB');})
    .catch((err) => {
        console.log(err);
})

module.exports = mongoose;