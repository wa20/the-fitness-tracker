const router = require('express').Router();
const Workout = require('../models/workout');
// const { Model } = require("mongoose");


//create workout
router.post('/api/workouts', (req, res) => {
  Workout.create({})
  .then((createdWorkout) => {
    res.json(createdWorkout);
  })
  .catch(err => {
      res.status(400).json(err)
  })
});

//get workout data total duration
router.get('/api/workouts', (req, res) =>{
Workout.aggregate([{
    $addFields: {
        totalDuration: {$sum: '$exercise.duration'}
    }
}]).then((createdWorkout) => {
    res.json(createdWorkout)
})
.catch( err => {
    res.status(400).json(err);
})

})


//view all workout duration
router.get('/api/workouts/range', (req, res) =>{
    Workout.aggregate([{
        $addFields: {
            totalDuration: {
                $sum: '$exercises.duration'
            }
        }
    }]).sort({day: -1})
    .limit(10)
    .then((createdWorkout) => {
        res.json(createdWorkout)
    })
    .catch( err => {
        res.status(400).json(err);
    })
});


//update workouts
router.put("/api/workouts/:id", (req, res) => {
  Workout.findOneAndUpdate(
    {_id: req.params},
    { $push: { exercises: req.body } },
    //Parameter added so updated data is returned instead of original
    { new: true }
  )
    .then((createdWorkout) => {
      res.json(createdWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});



module.exports = router;
