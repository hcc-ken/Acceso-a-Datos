const mongoose = require('mongoose');
require('dotenv').config();

const URL = process.env.URL;

mongoose.connect(URL)
.then(db => console.log('DB Connected'))
.catch(err => console.log(err));

module.exports = mongoose;