//require in moongoose and express
const mongoose = require('mongoose'); 
const express = require("express"); 

const PORT = 3000;

const app = express(); 

app.use(express.urlencoded({extended: true})); 
app.use(express.json())

mongoose.connect('mongodb://localhost/workout', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

//app.use routes


app.listen(PORT, () => {
    console.log("Listening on PORT:" + PORT)
})

