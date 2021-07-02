const router = require('express').Router();
const Workout = require('../models/workout');
const { Model } = require("mongoose");

router.post('/api/workout', ({}, res) => {
  Workout.create({})
  .then((createdWorkout) => {
    res.json(createdWorkout);
  })
  .catch(err => {
      res.status(400).json(err)
  })
});





module.exports = router;
