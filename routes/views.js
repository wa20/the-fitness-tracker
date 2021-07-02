const router = require('express').Router();
const path = require('path');


router.get('/exercise', (req, res) =>{

    res.sendFile(path.join(__dirname,"../public/exercise.html"))
})


//exercise 
//stats


module.exports = router;
