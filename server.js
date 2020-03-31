const express = require('express');
const app = express();
const cors = require('cors');
const config = require('./config/database');
const mongoose = require('mongoose');
const appController = require('./app/appController');

mongoose.connect(config.database,  
    {   useNewUrlParser: true ,
        useUnifiedTopology: true, 
        useCreateIndex: true,
        useFindAndModify:false
    });


const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.use(cors());

app.use('/',appController);

app.listen(port, "0.0.0.0");
console.log('Your server is running on port ' + port + '.');
