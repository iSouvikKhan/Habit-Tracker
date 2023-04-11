const mongoose = require('mongoose');

//conect to the database
mongoose.connect('mongodb://127.0.0.1/habit_Trackerdb');

//acquire the connection 
const db = mongoose.connection;

//error
db.on('error', console.error.bind(console, 'error connectiong to db'));

//if server up and running
db.once('open', function () {
    console.log("Sucessfully connected to the database.");
});
