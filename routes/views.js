const router = require('express').Router();
const path = require('path');


//index
router.get('/index', (req,res) => {
    res.sendFile(path.join(__dirname,"../public/index.html"))
})


//exercise 
router.get('/exercise', (req, res) =>{

    res.sendFile(path.join(__dirname,"../public/exercise.html"))
})

//stats
router.get('/stats', (req,res) => {
    res.sendFile(path.join(__dirname,"../public/stats.html"))
})



module.exports = router;
