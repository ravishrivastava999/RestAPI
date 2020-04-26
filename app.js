const express = require('express');

const app=express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);


app.get('/',(req,res) => {
    res.send('We are on home')

});



mongoose.connect('mongodb://localhost:27017/RESTAPI',
    
    { useNewUrlParser: true },   
    () => console.log('MongoDB Connection Succeeded.') 
    );


app.listen(3000); 
