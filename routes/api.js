const { Model } = require('mongoose');

const router = require('express').Router();
const Workout = require('../models/workout')

router.post('/api/workout', (request, response) => {
    Workout.create({}).then((createdWorkout) => {
        response.json(createdWorkout)
    })
})