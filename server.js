//require in moongoose and express
const mongoose = require('mongoose'); 
const express = require("express"); 

const PORT = 3000;

const app = express(); 

app.use(express.urlencoded({extended: true})); 
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

//routes
app.use(require('./routes/api'))
app.use(require('./routes/views'))


app.listen(PORT, () => {
    console.log("Listening on PORT:" + PORT)
})

