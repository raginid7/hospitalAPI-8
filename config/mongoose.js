const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://raginidhole45:<password>@cluster0.3m5qm28.mongodb.net/?retryWrites=true&w=majority/Hospital API');


const db = mongoose.connection;

db.on('error', console.error.bind(console,"Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to MongoDB');
});

module.exports = db;