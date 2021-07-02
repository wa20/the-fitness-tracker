const router = require('express').Router();
const Workout = require('../models/workout')
const { Model } = require('mongoose');



router.post('/api/workout', ({Model}, res) => {
    Workout.create({}).then((createdWorkout) => {
        response.json(createdWorkout)
    })
})


module.exports = router;