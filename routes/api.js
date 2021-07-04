const router = require('express').Router();
const Workout = require('../models/workout');
// const { Model } = require("mongoose");


//create workout
router.post('/api/workouts', ({}, res) => {
  Workout.create({})
  .then((createdWorkout) => {
    res.json(createdWorkout);
  })
  .catch(err => {
      res.status(400).json(err)
  })
});

//get workout data total
router.get('/api/workouts', (req, res) =>{
Workout.aggregate([
    $addFields: {
        totalDuration: {$sum: '$exercise.duration'}
    }
]).then((createdWorkout) => {
    res.json(createdWorkout)
})
.catch( err => {
    res.status(400).json(err);
})

})



//update workouts 
router.put('/api/workouts/range', ({}))



module.exports = router;
