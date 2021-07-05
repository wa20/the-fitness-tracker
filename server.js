//require in moongoose and express
const mongoose = require('mongoose'); 
const express = require('express');
const logger = require('morgan');


const PORT = 3000;

const app = express(); 

app.use(logger('dev'));
app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(require('./routes/api'));
app.use(require('./routes/views'));
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

//routes



app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`)
})

