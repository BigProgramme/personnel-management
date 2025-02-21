// variables d'environnement
require('dotenv').config();

//import modules
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

//create app
const app = express();

//config ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middleware to analyse POST request's and  datas
app.use(express.json()); //

//middleware to serve static files(css, images, js...)
app.use(express.static(path.join(__dirname, 'public')));

//connect to the Atlas MongoDB
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
    .then(() => console.log('Well done, Connected to MongoDB'))
    .catch(err => console.log(err.message));

// home route
app.get('/', (req, res) => {
    res.render('index');
    });

//load the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, function(error){
    if (error) {
        console.log("Somthing went wrong: ", error);
        } else {
            console.log(`Server is running on  http://localhost:${PORT}`);
        }
});